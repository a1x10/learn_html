// STELLA — сервер лендинга и регистрации. Без зависимостей, Node.js 18.17+.
//   node server.js            — запуск
//   настройки — в файле .env (см. .env.example)
import http from 'node:http';
import crypto from 'node:crypto';
import path from 'node:path';
import { readFile, stat, appendFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { loadEnv, env, envBool } from './lib/env.js';
import { sendOtp, sendText, whatsappProvider, whatsappConfigError } from './lib/whatsapp.js';
import { notifyOwner, telegramConfigured, escapeHtml } from './lib/telegram.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
loadEnv(path.join(ROOT, '.env'));

const PORT = Number(env('PORT', '3000'));
const HOST = env('HOST', '0.0.0.0');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DATA_FILE = path.join(ROOT, 'data', 'registrations.jsonl');
// auto — доверять X-Forwarded-For, только если запрос пришёл от прокси из внутренней сети (Render, Railway, Nginx и т.п.)
const TRUST_PROXY = env('TRUST_PROXY', 'auto').toLowerCase();
const CORS_ORIGIN = env('CORS_ORIGIN');
const TURNSTILE_SITE_KEY = env('TURNSTILE_SITE_KEY');
const TURNSTILE_SECRET_KEY = env('TURNSTILE_SECRET_KEY');
const USE_TURNSTILE = Boolean(TURNSTILE_SITE_KEY && TURNSTILE_SECRET_KEY);
const WA_PROVIDER = whatsappProvider();
const DEV_CODES = WA_PROVIDER === 'console';

const SESSION_TTL = 60 * 60 * 1000;
const OTP_TTL = 10 * 60 * 1000;
const OTP_COOLDOWN = 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;
const OTP_MAX_SENDS = 4;

export const SOURCES = {
  friends: 'От друзей / коллег',
  portal: 'Через электронный портал',
  tiktok: 'TikTok',
  instagram: 'Instagram',
  app_ads: 'Реклама в приложении',
};

export const PLANS = {
  free: { name: 'FREE', price: '$0 — навсегда бесплатно' },
  plus: { name: 'PLUS', price: '$25 / месяц' },
  pro: { name: 'PRO', price: '$105 / месяц (+10% бонус)' },
  ultra: { name: 'ULTRA', price: '$205 / месяц (+10% бонус)' },
};

export const TASKS = {
  calls: 'Звонки голосом',
  whatsapp: 'Переписка в WhatsApp',
  deals: 'Переговоры о цене',
  parsing: 'Парсинг сайтов',
  remote: 'Управление компьютером',
  browser: 'Действия в браузере',
  files: 'Работа с файлами',
  docs: 'Документы и отчёты',
  code: 'Код и разработка',
  edu: 'Учебные материалы',
};

// ---------------------------------------------------------------- хранилище в памяти

/** @type {Map<string, any>} */
const sessions = new Map();
/** @type {Map<string, number[]>} */
const hits = new Map();

function rateLimit(key, limit, windowMs) {
  const now = Date.now();
  const list = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (list.length >= limit) {
    hits.set(key, list);
    return Math.ceil((windowMs - (now - list[0])) / 1000);
  }
  list.push(now);
  hits.set(key, list);
  return 0;
}

setInterval(() => {
  const now = Date.now();
  for (const [id, s] of sessions) if (now - s.createdAt > SESSION_TTL) sessions.delete(id);
  for (const [key, list] of hits) {
    const fresh = list.filter((t) => now - t < 60 * 60 * 1000);
    if (fresh.length) hits.set(key, fresh);
    else hits.delete(key);
  }
}, 5 * 60 * 1000).unref();

// ---------------------------------------------------------------- утилиты

class HttpError extends Error {
  constructor(status, message, extra = {}) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
}

const PRIVATE_IP = /^(::1$|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|f[cd][0-9a-f]{2}:|fe80:)/i;

function clientIp(req) {
  const peer = String(req.socket.remoteAddress || 'unknown').replace(/^::ffff:/, '');
  const fwd = req.headers['x-forwarded-for'];
  const trust = /^(1|true|yes|on)$/.test(TRUST_PROXY) || (TRUST_PROXY === 'auto' && PRIVATE_IP.test(peer));
  if (fwd && trust) return String(fwd).split(',')[0].trim();
  return peer;
}

function cleanText(value, max) {
  return String(value ?? '')
    .normalize('NFC')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

const NAME_RE = /^\p{L}[\p{L}\p{M}' .-]{0,48}$/u;
const AGENT_NAME_RE = /^[\p{L}\p{N}][\p{L}\p{N}\p{M} _.-]{0,29}$/u;

function hashCode(sessionId, code) {
  return crypto.createHash('sha256').update(`${sessionId}:${code}`).digest();
}

function maskPhone(digits) {
  if (digits.length === 11 && digits.startsWith('7')) return `+7 ${digits.slice(1, 4)} •••-••-${digits.slice(-2)}`;
  if (digits.length < 8) return `+${digits}`;
  return `+${digits.slice(0, digits.length - 6)} ••• •${digits.slice(-2)}`;
}

function prettyPhone(digits) {
  if (digits.length === 11 && digits.startsWith('7')) {
    return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
  }
  return `+${digits}`;
}

function getSession(body) {
  const id = String(body?.sessionId || '');
  const s = sessions.get(id);
  if (!s || Date.now() - s.createdAt > SESSION_TTL) {
    throw new HttpError(440, 'Сессия регистрации истекла. Начните заново.', { code: 'session_expired' });
  }
  return s;
}

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 32 * 1024) throw new HttpError(413, 'Слишком большой запрос');
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new HttpError(400, 'Некорректный JSON');
  }
}

function sendJson(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

// ---------------------------------------------------------------- API

const routes = {
  'GET /api/config': async () => ({
    ok: true,
    captcha: USE_TURNSTILE ? 'turnstile' : 'puzzle',
    turnstileSiteKey: USE_TURNSTILE ? TURNSTILE_SITE_KEY : null,
    devCodes: DEV_CODES,
  }),

  // Шаг 1: имя, фамилия, источник
  'POST /api/session': async (req, body, ip) => {
    const wait = rateLimit(`session:${ip}`, 20, 60 * 60 * 1000);
    if (wait) throw new HttpError(429, `Слишком много попыток. Повторите через ${Math.ceil(wait / 60)} мин.`);

    const firstName = cleanText(body.firstName, 50);
    const lastName = cleanText(body.lastName, 50);
    const source = String(body.source || '');
    if (!NAME_RE.test(firstName)) throw new HttpError(422, 'Введите корректное имя', { field: 'firstName' });
    if (!NAME_RE.test(lastName)) throw new HttpError(422, 'Введите корректную фамилию', { field: 'lastName' });
    if (!SOURCES[source]) throw new HttpError(422, 'Выберите, откуда вы о нас узнали', { field: 'source' });

    const id = crypto.randomBytes(18).toString('base64url');
    sessions.set(id, {
      id,
      ip,
      createdAt: Date.now(),
      firstName,
      lastName,
      source,
      captchaPassed: false,
      captcha: null,
      phone: null,
      otp: null,
      phoneVerified: false,
      created: false,
    });
    return { ok: true, sessionId: id };
  },

  // Шаг 2: капча
  'POST /api/captcha/challenge': async (req, body) => {
    const s = getSession(body);
    if (USE_TURNSTILE) return { ok: true, type: 'turnstile', siteKey: TURNSTILE_SITE_KEY };
    s.captcha = {
      seed: crypto.randomInt(1, 2 ** 31 - 1),
      target: Number((0.42 + Math.random() * 0.4).toFixed(4)),
      y: Number((0.22 + Math.random() * 0.36).toFixed(4)),
      issuedAt: Date.now(),
    };
    return { ok: true, type: 'puzzle', seed: s.captcha.seed, target: s.captcha.target, y: s.captcha.y };
  },

  'POST /api/captcha/verify': async (req, body, ip) => {
    const s = getSession(body);
    const wait = rateLimit(`captcha:${s.id}`, 12, 15 * 60 * 1000);
    if (wait) throw new HttpError(429, 'Слишком много попыток. Обновите страницу и попробуйте позже.');

    if (USE_TURNSTILE) {
      const form = new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: String(body.token || ''), remoteip: ip });
      const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: form,
        signal: AbortSignal.timeout(10000),
      }).then((x) => x.json());
      if (!r.success) throw new HttpError(422, 'Проверка не пройдена. Попробуйте ещё раз.', { code: 'captcha_failed' });
      s.captchaPassed = true;
      return { ok: true };
    }

    const c = s.captcha;
    if (!c) throw new HttpError(422, 'Капча устарела', { code: 'captcha_failed' });
    s.captcha = null; // одна попытка на задание
    const x = Number(body.x);
    const trace = Array.isArray(body.trace) ? body.trace.slice(0, 400) : [];
    const duration = trace.length > 1 ? Number(trace[trace.length - 1].t) - Number(trace[0].t) : 0;
    const distinct = new Set(trace.map((p) => Math.round(Number(p.x) * 200))).size;
    const humanLike = trace.length >= 5 && duration >= 250 && distinct >= 4 && Date.now() - c.issuedAt > 600;
    if (!Number.isFinite(x) || Math.abs(x - c.target) > 0.035 || !humanLike) {
      throw new HttpError(422, 'Не совпало. Попробуйте ещё раз.', { code: 'captcha_failed' });
    }
    s.captchaPassed = true;
    return { ok: true };
  },

  // Шаг 6: телефон → код в WhatsApp
  'POST /api/otp/send': async (req, body, ip) => {
    const s = getSession(body);
    if (!s.captchaPassed) throw new HttpError(403, 'Сначала пройдите проверку');
    if (s.phoneVerified) return { ok: true, verified: true };

    const digits = String(body.phone || '').replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) throw new HttpError(422, 'Проверьте номер телефона', { field: 'phone' });
    if (digits.startsWith('7') && digits.length !== 11) throw new HttpError(422, 'Номер должен содержать 10 цифр после +7', { field: 'phone' });

    const now = Date.now();
    if (s.otp && s.phone === digits && now - s.otp.sentAt < OTP_COOLDOWN) {
      throw new HttpError(429, 'Код уже отправлен. Подождите перед повторной отправкой.', {
        retryIn: Math.ceil((OTP_COOLDOWN - (now - s.otp.sentAt)) / 1000),
      });
    }
    if ((s.otpSends || 0) >= OTP_MAX_SENDS) throw new HttpError(429, 'Превышено число отправок кода. Начните регистрацию заново позже.');
    const waitIp = rateLimit(`otp-ip:${ip}`, 10, 60 * 60 * 1000);
    const waitPhone = rateLimit(`otp-phone:${digits}`, 5, 60 * 60 * 1000);
    if (waitIp || waitPhone) throw new HttpError(429, `Слишком много запросов кода. Повторите через ${Math.ceil(Math.max(waitIp, waitPhone) / 60)} мин.`);

    const code = String(crypto.randomInt(0, 1_000_000)).padStart(6, '0');
    try {
      await sendOtp(digits, code);
    } catch (err) {
      console.error('[whatsapp] не удалось отправить код:', err.message);
      throw new HttpError(502, 'Не удалось отправить сообщение в WhatsApp. Проверьте, что на этом номере есть WhatsApp, и попробуйте ещё раз.');
    }
    s.phone = digits;
    s.otp = { hash: hashCode(s.id, code), sentAt: now, expires: now + OTP_TTL, attempts: 0 };
    s.otpSends = (s.otpSends || 0) + 1;
    const res = { ok: true, cooldown: OTP_COOLDOWN / 1000, masked: maskPhone(digits) };
    if (DEV_CODES) res.devCode = code;
    return res;
  },

  'POST /api/otp/verify': async (req, body) => {
    const s = getSession(body);
    if (s.phoneVerified) return { ok: true };
    const otp = s.otp;
    if (!otp) throw new HttpError(422, 'Сначала запросите код');
    if (Date.now() > otp.expires) throw new HttpError(422, 'Срок действия кода истёк. Запросите новый.', { code: 'otp_expired' });
    if (otp.attempts >= OTP_MAX_ATTEMPTS) throw new HttpError(429, 'Слишком много неверных попыток. Запросите новый код.', { code: 'otp_locked' });
    otp.attempts += 1;
    const code = String(body.code || '').replace(/\D/g, '');
    const ok = code.length === 6 && crypto.timingSafeEqual(hashCode(s.id, code), otp.hash);
    if (!ok) {
      throw new HttpError(422, `Неверный код. Осталось попыток: ${OTP_MAX_ATTEMPTS - otp.attempts}`, { code: 'otp_wrong' });
    }
    s.phoneVerified = true;
    s.otp = null;
    return { ok: true };
  },

  // Шаг 8: создание агента → сообщение владельцу в Telegram
  'POST /api/agent': async (req, body, ip) => {
    const s = getSession(body);
    if (!s.phoneVerified) throw new HttpError(403, 'Сначала подтвердите номер телефона');
    if (s.created) return { ok: true, masked: maskPhone(s.phone), ticket: s.ticket };

    const plan = PLANS[body.plan] ? body.plan : 'free';
    let agentName = cleanText(body.agentName, 30) || 'STELLA';
    if (!AGENT_NAME_RE.test(agentName)) agentName = 'STELLA';
    const tasks = [...new Set(Array.isArray(body.tasks) ? body.tasks : [])].filter((t) => TASKS[t]).slice(0, 12);
    const b = body.browser && typeof body.browser === 'object' ? body.browser : {};
    const browser = {};
    for (const key of ['name', 'os', 'language', 'screen', 'timezone', 'webgl', 'cores', 'memory', 'device']) {
      if (b[key] !== undefined) browser[key] = cleanText(b[key], 120);
    }

    const ticket = crypto.randomBytes(3).toString('hex').toUpperCase();
    const record = {
      ticket,
      createdAt: new Date().toISOString(),
      firstName: s.firstName,
      lastName: s.lastName,
      phone: `+${s.phone}`,
      source: SOURCES[s.source],
      plan: PLANS[plan].name,
      agentName,
      tasks: tasks.map((t) => TASKS[t]),
      browser,
      ip,
    };

    await mkdir(path.dirname(DATA_FILE), { recursive: true });
    await appendFile(DATA_FILE, JSON.stringify(record) + '\n', 'utf8');
    s.created = true;
    s.ticket = ticket;

    const when = new Intl.DateTimeFormat('ru-RU', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: env('TIMEZONE', 'Europe/Moscow'),
    }).format(new Date());
    const browserLine = [browser.name, browser.os, browser.device, browser.language, browser.screen, browser.timezone]
      .filter(Boolean)
      .join(' · ');
    const html = [
      `🚀 <b>Новый агент STELLA</b>  #${ticket}`,
      '',
      `👤 <b>${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</b>`,
      `📱 ${escapeHtml(prettyPhone(s.phone))} — ✅ подтверждён через WhatsApp`,
      `💎 Тариф: <b>${PLANS[plan].name}</b> — ${escapeHtml(PLANS[plan].price)}`,
      `🤖 Имя агента: <b>${escapeHtml(agentName)}</b>`,
      `🧩 Задачи: ${tasks.length ? escapeHtml(record.tasks.join(', ')) : 'не выбраны'}`,
      `📣 Откуда узнали: ${escapeHtml(SOURCES[s.source])}`,
      ...(browserLine ? [`🌐 ${escapeHtml(browserLine)}`] : []),
      `🕒 ${escapeHtml(when)}`,
      '',
      `👉 Отправьте клиенту инструкцию для запуска агента.`,
    ].join('\n');
    const buttons = [
      [
        { text: '💬 Написать в WhatsApp', url: `https://wa.me/${s.phone}` },
        { text: '✈️ Telegram', url: `https://t.me/+${s.phone}` },
      ],
    ];

    if (telegramConfigured()) {
      notifyOwner(html, buttons).catch(async (err) => {
        console.error('[telegram] ошибка, повтор через 5 c:', err.message);
        await new Promise((r) => setTimeout(r, 5000));
        notifyOwner(html, buttons).catch((e) => console.error('[telegram] повтор не удался:', e.message));
      });
    } else {
      console.log('\n[telegram] не настроен — заявка сохранена только в data/registrations.jsonl\n' + html.replace(/<[^>]+>/g, '') + '\n');
    }

    if (envBool('WA_SEND_ACK', true)) {
      const ack = env(
        'WA_ACK_TEXT',
        'Здравствуйте, {name}! 👋\nВаш персональный AI-агент «{agent}» (тариф {plan}) создаётся.\nВ ближайшее время на этот номер придёт сообщение с инструкцией для запуска агента.\n\n— Команда STELLA',
      )
        .replaceAll('{name}', s.firstName)
        .replaceAll('{agent}', agentName)
        .replaceAll('{plan}', PLANS[plan].name);
      sendText(s.phone, ack).catch((err) => console.error('[whatsapp] подтверждение не отправлено:', err.message));
    }

    return { ok: true, masked: maskPhone(s.phone), ticket };
  },
};

// ---------------------------------------------------------------- статика

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

async function serveStatic(req, res, pathname) {
  let rel;
  try {
    rel = decodeURIComponent(pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  let info;
  try {
    info = await stat(file);
    if (info.isDirectory()) return serveStatic(req, res, pathname.replace(/\/?$/, '/'));
  } catch {
    const notFound = await readFile(path.join(PUBLIC_DIR, 'index.html'));
    res.writeHead(404, { 'Content-Type': MIME['.html'] });
    res.end(notFound);
    return;
  }
  const ext = path.extname(file).toLowerCase();
  const etag = `"${info.size.toString(16)}-${info.mtimeMs.toString(16)}"`;
  if (req.headers['if-none-match'] === etag) {
    res.writeHead(304).end();
    return;
  }
  res.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Content-Length': info.size,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
    ETag: etag,
  });
  if (req.method === 'HEAD') return res.end();
  res.end(await readFile(file));
}

// ---------------------------------------------------------------- сервер

const server = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  const url = new URL(req.url, 'http://localhost');
  const isApi = url.pathname.startsWith('/api/');

  if (isApi && CORS_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.writeHead(204).end();
  }

  if (!isApi) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return res.writeHead(405).end();
    return serveStatic(req, res, url.pathname).catch((err) => {
      console.error(err);
      if (!res.headersSent) res.writeHead(500);
      res.end();
    });
  }

  const handler = routes[`${req.method} ${url.pathname}`];
  if (!handler) return sendJson(res, 404, { ok: false, error: 'Не найдено' });
  const ip = clientIp(req);
  try {
    const body = req.method === 'POST' ? await readJson(req) : {};
    const wait = rateLimit(`api:${ip}`, 240, 10 * 60 * 1000);
    if (wait) throw new HttpError(429, 'Слишком много запросов. Подождите немного.');
    sendJson(res, 200, await handler(req, body, ip));
  } catch (err) {
    if (err instanceof HttpError) {
      sendJson(res, err.status, { ok: false, error: err.message, ...err.extra });
    } else {
      console.error(`[api] ${req.method} ${url.pathname}:`, err);
      sendJson(res, 500, { ok: false, error: 'Внутренняя ошибка сервера. Попробуйте ещё раз.' });
    }
  }
});

server.listen(PORT, HOST, () => {
  const waError = whatsappConfigError();
  console.log(`\n  ✦ STELLA запущена: http://localhost:${PORT}\n`);
  console.log(`  WhatsApp:  ${WA_PROVIDER}${waError ? `  ⚠ ${waError}` : ''}${DEV_CODES ? '  (режим разработки: коды видны в консоли и в интерфейсе)' : ''}`);
  console.log(`  Telegram:  ${telegramConfigured() ? 'настроен' : '⚠ не настроен (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)'}`);
  console.log(`  Капча:     ${USE_TURNSTILE ? 'Cloudflare Turnstile' : 'встроенный 3D-пазл'}\n`);
});
