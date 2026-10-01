// ═══════════════════════════════════════════════════════════
//  STELLA — мастер регистрации и создания агента
//  Знакомство → капча → проверка браузера → политика → загрузка →
//  код в WhatsApp → тариф → агент → «Создать агента» (уведомление в Telegram)
// ═══════════════════════════════════════════════════════════

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const API_BASE = ($('meta[name="stella-api"]')?.content || '').replace(/\/+$/, '');
const STEPS = ['profile', 'captcha', 'scan', 'policy', 'loading', 'phone', 'plan', 'agent', 'done'];
const PLAN_NAMES = { free: 'FREE', plus: 'PLUS', pro: 'PRO', ultra: 'ULTRA' };

const reg = $('#reg');
const stage = $('[data-reg-stage]');
const state = {
  step: 0,
  sessionId: null,
  firstName: '',
  lastName: '',
  source: '',
  plan: 'free',
  phone: '',
  masked: '',
  verified: false,
  created: false,
  browser: {},
  demo: false,
  config: null,
  configPromise: null,
};

const scene = () => window.STELLA_SCENE;
const toast = (t, ms) => window.STELLA?.toast?.(t, ms);

// ─────────────────────────────── API (с демо-режимом без сервера)
class ApiError extends Error {
  constructor(message, status, data = {}) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

async function loadConfig() {
  if (state.configPromise) return state.configPromise;
  state.configPromise = (async () => {
    try {
      const res = await fetch(`${API_BASE}/api/config`, { signal: AbortSignal.timeout(5000), cache: 'no-store' });
      if (!res.ok) throw new Error(res.status);
      state.config = await res.json();
      if (!state.config.ok) throw new Error('bad config');
    } catch {
      state.demo = true;
      state.config = { captcha: 'puzzle', devCodes: true };
      $('[data-demo-banner]').hidden = false;
    }
    return state.config;
  })();
  return state.configPromise;
}

async function api(path, body = {}) {
  await loadConfig();
  if (state.demo) return demoApi(path, body);
  let res;
  try {
    res = await fetch(`${API_BASE}/api/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: state.sessionId, ...body }),
      signal: AbortSignal.timeout(25000),
    });
  } catch {
    throw new ApiError('Нет соединения с сервером. Проверьте интернет и попробуйте ещё раз.', 0);
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    const err = new ApiError(data.error || 'Что-то пошло не так. Попробуйте ещё раз.', res.status, data);
    if (data.code === 'session_expired') {
      resetFlow();
      toast('Сессия истекла — начните, пожалуйста, заново');
    }
    throw err;
  }
  return data;
}

const demo = { captcha: null, code: null };
async function demoApi(path, body) {
  await wait(450);
  switch (path) {
    case 'session':
      return { ok: true, sessionId: 'demo' };
    case 'captcha/challenge':
      demo.captcha = { seed: Math.floor(Math.random() * 1e9), target: +(0.42 + Math.random() * 0.4).toFixed(4), y: +(0.22 + Math.random() * 0.36).toFixed(4) };
      return { ok: true, type: 'puzzle', ...demo.captcha };
    case 'captcha/verify':
      if (!demo.captcha || Math.abs(body.x - demo.captcha.target) > 0.035) throw new ApiError('Не совпало. Попробуйте ещё раз.', 422, { code: 'captcha_failed' });
      return { ok: true };
    case 'otp/send':
      demo.code = String(Math.floor(Math.random() * 1e6)).padStart(6, '0');
      return { ok: true, cooldown: 60, masked: `+${body.phone}`, devCode: demo.code };
    case 'otp/verify':
      if (body.code !== demo.code) throw new ApiError('Неверный код', 422, { code: 'otp_wrong' });
      return { ok: true };
    case 'agent':
      return { ok: true, masked: state.masked, ticket: Math.random().toString(16).slice(2, 8).toUpperCase() };
    default:
      throw new ApiError('Неизвестный запрос', 404);
  }
}

// ─────────────────────────────── открытие / закрытие
let lastFocus = null;

function open(plan) {
  if (plan && PLAN_NAMES[plan]) state.plan = plan;
  loadConfig();
  lastFocus = document.activeElement;
  reg.hidden = false;
  reg.classList.remove('is-closing');
  window.STELLA?.lockScroll?.(true);
  if (window.innerWidth < 640) scene()?.setPaused(true);
  scene()?.pulse(1.2);
  showStep(state.step, { initial: true });
}

async function close() {
  if (reg.hidden || reg.classList.contains('is-closing')) return;
  reg.classList.add('is-closing');
  await wait(reduced ? 0 : 380);
  reg.hidden = true;
  reg.classList.remove('is-closing');
  window.STELLA?.lockScroll?.(false);
  scene()?.setPaused(false);
  if (state.created) resetFlow({ keepDone: true });
  lastFocus?.focus?.({ preventScroll: true });
}

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-register]');
  if (trigger) {
    e.preventDefault();
    open(trigger.dataset.plan);
    return;
  }
  if (e.target.closest('[data-reg-close]')) close();
});

document.addEventListener('keydown', (e) => {
  if (reg.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'Tab') trapFocus(e);
});

function trapFocus(e) {
  const focusables = $$('button, input, select, [tabindex]:not([tabindex="-1"]), a[href]', reg).filter(
    (el) => !el.disabled && el.offsetParent !== null,
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

// ─────────────────────────────── шаги
const stepEls = Object.fromEntries(STEPS.map((k) => [k, $(`[data-step="${k}"]`)]));
const enter = {
  profile: enterProfile,
  captcha: enterCaptcha,
  scan: enterScan,
  policy: enterPolicy,
  loading: enterLoading,
  phone: enterPhone,
  plan: enterPlan,
  agent: enterAgent,
  done: () => {},
};

let currentEl = null;
async function showStep(index, { initial = false, back = false } = {}) {
  const prev = currentEl;
  state.step = index;
  const key = STEPS[index];
  const el = stepEls[key];

  $('[data-reg-num]').textContent = index + 1;
  $('[data-reg-total]').textContent = STEPS.length;
  $('[data-reg-bar]').style.width = `${((index + 1) / STEPS.length) * 100}%`;

  if (prev && prev !== el && !initial) {
    prev.classList.add('is-leaving');
    await wait(reduced ? 0 : 300);
    prev.classList.remove('is-leaving');
  }
  STEPS.forEach((k) => (stepEls[k].hidden = k !== key));
  el.classList.toggle('is-back', back);
  // перезапуск CSS-анимации входа
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  stage.scrollTop = 0;
  currentEl = el;
  if (!initial || !el.dataset.entered) {
    el.dataset.entered = '1';
    enter[key]?.();
  } else if (key === 'captcha') {
    enterCaptcha();
  }
  if (!initial) scene()?.pulse(0.8);
  const focusTarget = $('input:not([type=radio]):not([type=checkbox]), button.btn', el);
  if (focusTarget && window.innerWidth >= 640) setTimeout(() => focusTarget.focus({ preventScroll: true }), 400);
}

const next = () => showStep(Math.min(state.step + 1, STEPS.length - 1));

function resetFlow({ keepDone = false } = {}) {
  Object.assign(state, { step: 0, sessionId: null, verified: false, created: false, phone: '', masked: '' });
  STEPS.forEach((k) => delete stepEls[k].dataset.entered);
  $('[data-form="phone"]').hidden = false;
  $('[data-form="otp"]').hidden = true;
  $('[data-policy-check]').checked = false;
  $('[data-policy-next]').disabled = true;
  if (!keepDone) showStep(0, { initial: true });
}

function busy(btn, on) {
  if (!btn) return;
  btn.classList.toggle('is-busy', on);
  btn.disabled = on;
}

function setError(scope, field, message) {
  const err = $(`[data-err="${field}"]`, scope);
  if (err) err.textContent = message || '';
  const holder = err?.closest('.field') || $(`[name="${field}"]`, scope)?.closest('.field');
  holder?.classList.toggle('is-invalid', Boolean(message));
}

// ─────────────────────────────── 1. Знакомство
const profileForm = $('[data-form="profile"]');
const NAME_RE = /^\p{L}[\p{L}\p{M}' .-]{0,48}$/u;

function enterProfile() {
  profileForm.firstName.value ||= state.firstName;
  profileForm.lastName.value ||= state.lastName;
}

profileForm.addEventListener('input', (e) => {
  if (e.target.name) setError(profileForm, e.target.name, '');
});

profileForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const firstName = profileForm.firstName.value.trim().replace(/\s+/g, ' ');
  const lastName = profileForm.lastName.value.trim().replace(/\s+/g, ' ');
  const source = profileForm.source.value;
  let ok = true;
  if (!NAME_RE.test(firstName)) {
    setError(profileForm, 'firstName', firstName ? 'Только буквы, без цифр и символов' : 'Введите имя');
    ok = false;
  }
  if (!NAME_RE.test(lastName)) {
    setError(profileForm, 'lastName', lastName ? 'Только буквы, без цифр и символов' : 'Введите фамилию');
    ok = false;
  }
  if (!source) {
    setError(profileForm, 'source', 'Выберите один из вариантов');
    ok = false;
  }
  if (!ok) {
    scene()?.pulse(0.4);
    return;
  }
  const btn = $('button[type=submit]', profileForm);
  busy(btn, true);
  try {
    const res = await api('session', { firstName, lastName, source });
    Object.assign(state, { sessionId: res.sessionId, firstName, lastName, source });
    next();
  } catch (err) {
    if (err.data?.field) setError(profileForm, err.data.field, err.message);
    else toast(err.message);
  } finally {
    busy(btn, false);
  }
});

$$('input[name="source"]', profileForm).forEach((r) => r.addEventListener('change', () => setError(profileForm, 'source', '')));

// ─────────────────────────────── 2. Капча
const captchaEl = $('[data-captcha]');
const bgCanvas = $('[data-captcha-bg]');
const pieceCanvas = $('[data-captcha-piece]');
const track = $('[data-captcha-track]');
const handle = $('[data-captcha-handle]');
const fill = $('[data-captcha-fill]');
const capStatus = $('[data-captcha-status]');
const cap = { challenge: null, x: 0, trace: [], t0: 0, dragging: false, locked: false, pieceSize: 0 };

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

function piecePath(ctx, x, y, s) {
  const k = s / 4;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + s / 2 - k / 1.3, y);
  ctx.arc(x + s / 2, y, k, Math.PI, 0, false);
  ctx.lineTo(x + s, y);
  ctx.lineTo(x + s, y + s / 2 - k / 1.3);
  ctx.arc(x + s, y + s / 2, k, -Math.PI / 2, Math.PI / 2, false);
  ctx.lineTo(x + s, y + s);
  ctx.lineTo(x, y + s);
  ctx.lineTo(x, y + s / 2 + k / 1.3);
  ctx.arc(x, y + s / 2, k, Math.PI / 2, -Math.PI / 2, true);
  ctx.closePath();
}

function drawCaptcha() {
  const c = cap.challenge;
  if (!c) return;
  const rect = bgCanvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = Math.round(rect.width * dpr);
  const H = Math.round(rect.height * dpr);
  for (const cv of [bgCanvas, pieceCanvas]) {
    cv.width = W;
    cv.height = H;
  }
  const r = rng(c.seed);
  const off = document.createElement('canvas');
  off.width = W;
  off.height = H;
  const o = off.getContext('2d');

  // процедурный «космос» из зерна сервера
  const g = o.createLinearGradient(0, 0, W, H);
  const hue = Math.floor(r() * 360);
  g.addColorStop(0, `hsl(${hue}, 70%, 10%)`);
  g.addColorStop(1, `hsl(${(hue + 80) % 360}, 75%, 16%)`);
  o.fillStyle = g;
  o.fillRect(0, 0, W, H);
  for (let i = 0; i < 6; i++) {
    const x = r() * W;
    const y = r() * H;
    const rad = (0.2 + r() * 0.5) * H;
    const ng = o.createRadialGradient(x, y, 0, x, y, rad);
    ng.addColorStop(0, `hsla(${(hue + r() * 160) % 360}, 90%, 60%, ${0.35 + r() * 0.3})`);
    ng.addColorStop(1, 'hsla(0,0%,0%,0)');
    o.fillStyle = ng;
    o.fillRect(0, 0, W, H);
  }
  for (let i = 0; i < 160; i++) {
    o.fillStyle = `rgba(255,255,255,${0.3 + r() * 0.7})`;
    const s = r() * 1.8 * dpr;
    o.fillRect(r() * W, r() * H, s, s);
  }
  // планета и кольцо
  const px = W * (0.15 + r() * 0.7);
  const py = H * (0.25 + r() * 0.5);
  const pr = H * (0.16 + r() * 0.12);
  const pg = o.createRadialGradient(px - pr / 3, py - pr / 3, pr / 6, px, py, pr);
  pg.addColorStop(0, `hsl(${(hue + 200) % 360}, 90%, 75%)`);
  pg.addColorStop(1, `hsl(${(hue + 240) % 360}, 70%, 25%)`);
  o.fillStyle = pg;
  o.beginPath();
  o.arc(px, py, pr, 0, Math.PI * 2);
  o.fill();
  o.strokeStyle = 'rgba(255,255,255,0.55)';
  o.lineWidth = 2 * dpr;
  o.beginPath();
  o.ellipse(px, py, pr * 1.7, pr * 0.42, -0.35, 0, Math.PI * 2);
  o.stroke();
  // геометрия
  o.strokeStyle = 'rgba(45,226,255,0.35)';
  o.lineWidth = 1 * dpr;
  for (let i = 0; i < 5; i++) {
    o.beginPath();
    o.moveTo(r() * W, r() * H);
    o.lineTo(r() * W, r() * H);
    o.stroke();
  }

  const size = Math.round(H * 0.3);
  cap.pieceSize = size;
  const tx = c.target * W - size / 2;
  const ty = c.y * H;

  const bg = bgCanvas.getContext('2d');
  bg.clearRect(0, 0, W, H);
  bg.drawImage(off, 0, 0);
  // «дыра»
  piecePath(bg, tx, ty, size);
  bg.fillStyle = 'rgba(0,0,0,0.6)';
  bg.fill();
  bg.strokeStyle = 'rgba(255,255,255,0.8)';
  bg.lineWidth = 1.5 * dpr;
  bg.shadowColor = 'rgba(45,226,255,0.9)';
  bg.shadowBlur = 10 * dpr;
  bg.stroke();
  bg.shadowBlur = 0;

  // фрагмент
  const pc = pieceCanvas.getContext('2d');
  pc.clearRect(0, 0, W, H);
  pc.save();
  piecePath(pc, 0, ty, size);
  pc.clip();
  pc.drawImage(off, tx, 0, W, H, 0, 0, W, H);
  pc.restore();
  piecePath(pc, 0, ty, size);
  pc.strokeStyle = 'rgba(255,255,255,0.95)';
  pc.lineWidth = 2 * dpr;
  pc.stroke();
  cap.W = W;
  setCaptchaX(0);
}

function setCaptchaX(px) {
  const max = track.clientWidth - handle.offsetWidth;
  const x = Math.max(0, Math.min(max, px));
  cap.x = max > 0 ? x / max : 0;
  handle.style.transform = `translateX(${x}px)`;
  fill.style.width = `${x + handle.offsetWidth}px`;
  // фрагмент двигается по всей ширине картинки
  const viewW = bgCanvas.clientWidth;
  const piece = cap.pieceSize / (cap.W / viewW || 1);
  const pos = cap.x * (viewW - piece);
  pieceCanvas.style.transform = `translateX(${pos}px)`;
}

// значение, которое уходит на сервер: центр фрагмента в долях ширины
function captchaValue() {
  const viewW = bgCanvas.clientWidth;
  const piece = cap.pieceSize / (cap.W / viewW || 1);
  return (cap.x * (viewW - piece) + piece / 2) / viewW;
}

async function enterCaptcha() {
  capStatus.className = 'captcha__status';
  capStatus.textContent = '';
  cap.locked = false;
  await loadConfig();
  if (state.config.captcha === 'turnstile' && state.config.turnstileSiteKey) return enterTurnstile();
  await newChallenge();
}

async function newChallenge() {
  cap.locked = true;
  try {
    const res = await api('captcha/challenge');
    if (res.type === 'turnstile') return enterTurnstile(res.siteKey);
    cap.challenge = res;
    requestAnimationFrame(drawCaptcha);
  } catch (err) {
    toast(err.message);
  } finally {
    cap.locked = false;
  }
}

function enterTurnstile(siteKey = state.config.turnstileSiteKey) {
  captchaEl.hidden = true;
  $('[data-captcha-text]').textContent = 'Отметьте флажок ниже — это займёт секунду.';
  const box = $('[data-turnstile]');
  box.hidden = false;
  const render = () =>
    window.turnstile.render(box, {
      sitekey: siteKey,
      theme: 'dark',
      language: 'ru',
      callback: async (token) => {
        try {
          await api('captcha/verify', { token });
          scene()?.pulse(1);
          setTimeout(next, 500);
        } catch (err) {
          toast(err.message);
          window.turnstile.reset(box);
        }
      },
    });
  if (window.turnstile) return render();
  const s = document.createElement('script');
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  s.onload = render;
  document.head.appendChild(s);
}

handle.addEventListener('pointerdown', (e) => {
  if (cap.locked || !cap.challenge) return;
  cap.dragging = true;
  cap.startX = e.clientX - (handle.getBoundingClientRect().left - track.getBoundingClientRect().left);
  cap.t0 = performance.now();
  cap.trace = [{ t: 0, x: cap.x }];
  handle.setPointerCapture(e.pointerId);
});
handle.addEventListener('pointermove', (e) => {
  if (!cap.dragging) return;
  setCaptchaX(e.clientX - cap.startX);
  const t = Math.round(performance.now() - cap.t0);
  if (!cap.trace.length || t - cap.trace[cap.trace.length - 1].t > 15) cap.trace.push({ t, x: +captchaValue().toFixed(4) });
});
const release = () => {
  if (!cap.dragging) return;
  cap.dragging = false;
  cap.trace.push({ t: Math.round(performance.now() - cap.t0), x: +captchaValue().toFixed(4) });
  submitCaptcha();
};
handle.addEventListener('pointerup', release);
handle.addEventListener('pointercancel', release);

// управление с клавиатуры
handle.addEventListener('keydown', (e) => {
  if (cap.locked || !cap.challenge) return;
  const stepPx = e.shiftKey ? 20 : 4;
  const cur = cap.x * (track.clientWidth - handle.offsetWidth);
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    if (!cap.kbd) {
      cap.kbd = true;
      cap.t0 = performance.now();
      cap.trace = [{ t: 0, x: +captchaValue().toFixed(4) }];
    }
    setCaptchaX(cur + (e.key === 'ArrowRight' ? stepPx : -stepPx));
    cap.trace.push({ t: Math.round(performance.now() - cap.t0), x: +captchaValue().toFixed(4) });
  }
  if (e.key === 'Enter' && cap.kbd) {
    e.preventDefault();
    cap.kbd = false;
    submitCaptcha();
  }
});

async function submitCaptcha() {
  cap.locked = true;
  const x = +captchaValue().toFixed(4);
  try {
    await api('captcha/verify', { x, trace: cap.trace });
    capStatus.className = 'captcha__status is-ok';
    capStatus.textContent = '✓ Проверка пройдена';
    scene()?.pulse(1);
    await wait(700);
    next();
  } catch (err) {
    capStatus.className = 'captcha__status is-bad';
    capStatus.textContent = err.data?.code === 'captcha_failed' ? 'Не совпало — попробуйте ещё раз' : err.message;
    captchaEl.classList.add('is-shake');
    await wait(900);
    captchaEl.classList.remove('is-shake');
    capStatus.className = 'captcha__status';
    if (err.status !== 429) await newChallenge();
    else cap.locked = false;
  }
}

$('[data-captcha-refresh]').addEventListener('click', () => !cap.locked && newChallenge());
window.addEventListener('resize', () => {
  if (!reg.hidden && STEPS[state.step] === 'captcha' && cap.challenge) drawCaptcha();
});

// ─────────────────────────────── 3. Проверка браузера
function detectBrowser() {
  const ua = navigator.userAgent;
  const brands = navigator.userAgentData?.brands?.map((b) => b.brand).join(' ') || '';
  const pick = (re) => (ua.match(re) || [])[1];
  let name = 'Браузер';
  if (/YaBrowser/.test(ua)) name = `Яндекс Браузер ${pick(/YaBrowser\/([\d]+)/)}`;
  else if (/Edg\//.test(ua)) name = `Edge ${pick(/Edg\/([\d]+)/)}`;
  else if (/OPR\//.test(ua)) name = `Opera ${pick(/OPR\/([\d]+)/)}`;
  else if (/SamsungBrowser/.test(ua)) name = `Samsung Internet ${pick(/SamsungBrowser\/([\d]+)/)}`;
  else if (/Firefox\//.test(ua)) name = `Firefox ${pick(/Firefox\/([\d]+)/)}`;
  else if (/Chrome\//.test(ua) || /Chromium/.test(brands)) name = `Chrome ${pick(/Chrome\/([\d]+)/)}`;
  else if (/Safari\//.test(ua)) name = `Safari ${pick(/Version\/([\d.]+)/) || ''}`.trim();

  let os = 'Неизвестная ОС';
  if (/Windows NT/.test(ua)) os = 'Windows';
  else if (/Android/.test(ua)) os = `Android ${pick(/Android ([\d.]+)/) || ''}`.trim();
  else if (/iPhone|iPad|iPod/.test(ua)) os = `iOS ${(pick(/OS ([\d_]+)/) || '').replace(/_/g, '.')}`.trim();
  else if (/Mac OS X/.test(ua)) os = 'macOS';
  else if (/Linux/.test(ua)) os = 'Linux';

  const device = /Mobi|Android|iPhone/.test(ua) ? 'Телефон' : /iPad|Tablet/.test(ua) ? 'Планшет' : 'Компьютер';
  return { name, os, device };
}

function detectWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return null;
    let renderer = gl instanceof WebGL2RenderingContext ? 'WebGL 2' : 'WebGL';
    const info = gl.getExtension('WEBGL_debug_renderer_info');
    if (info) {
      const r = String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL) || '');
      const short = r.replace(/ANGLE \(|\)|Direct3D11|vs_5_0|ps_5_0|,/g, ' ').replace(/\s+/g, ' ').trim();
      if (short) renderer = `${renderer} · ${short.slice(0, 40)}`;
    }
    return renderer;
  } catch {
    return null;
  }
}

function storageOk() {
  try {
    localStorage.setItem('stella:t', '1');
    localStorage.removeItem('stella:t');
    return true;
  } catch {
    return false;
  }
}

async function enterScan() {
  const list = $('[data-scan-list]');
  const result = $('[data-scan-result]');
  const btn = $('[data-scan-next]');
  const scanBox = $('.scan', stepEls.scan);
  list.innerHTML = '';
  result.hidden = true;
  btn.disabled = true;
  scanBox.classList.remove('is-done');

  const b = detectBrowser();
  const gl = detectWebGL();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '—';
  const lang = navigator.language || '—';
  const screenStr = `${screen.width}×${screen.height}`;
  const cores = navigator.hardwareConcurrency;
  const mem = navigator.deviceMemory;
  state.browser = {
    name: b.name,
    os: b.os,
    device: b.device,
    language: lang,
    screen: screenStr,
    timezone: tz,
    webgl: gl || 'нет',
    cores: cores ? String(cores) : '',
    memory: mem ? `${mem} ГБ` : '',
  };

  const t0 = performance.now();
  let pingOk = true;
  if (!state.demo) {
    try {
      await fetch(`${API_BASE}/api/config`, { cache: 'no-store', signal: AbortSignal.timeout(5000) });
    } catch {
      pingOk = false;
    }
  }
  const ping = Math.round(performance.now() - t0);

  const checks = [
    ['Браузер', true, b.name],
    ['Система и устройство', true, `${b.os} · ${b.device}`],
    ['JavaScript ES2022', true, 'поддерживается'],
    ['3D-ускорение', Boolean(gl), gl || 'недоступно'],
    ['Cookies и хранилище', navigator.cookieEnabled && storageOk(), navigator.cookieEnabled ? 'включены' : 'отключены'],
    ['Защищённое соединение', window.isSecureContext, window.isSecureContext ? 'HTTPS' : 'без HTTPS'],
    ['Связь с сервером', pingOk, state.demo ? 'демо-режим' : pingOk ? `${ping} мс` : 'нет ответа'],
    ['Экран', true, `${screenStr} · ${devicePixelRatio}x`],
    ['Язык и часовой пояс', true, `${lang} · ${tz}`],
  ];

  let warnings = 0;
  for (const [label, ok, value] of checks) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="st st--wait"></span><b>${label}</b><small></small>`;
    list.appendChild(li);
    await wait(reduced ? 0 : 260 + Math.random() * 200);
    if (STEPS[state.step] !== 'scan') return;
    const st = $('.st', li);
    st.className = `st ${ok ? 'st--ok' : 'st--warn'}`;
    st.innerHTML = ok ? '<svg><use href="#i-check"/></svg>' : '!';
    $('small', li).textContent = value;
    if (!ok) warnings++;
  }
  scanBox.classList.add('is-done');
  result.hidden = false;
  result.classList.toggle('is-warn', warnings > 0);
  result.textContent =
    warnings > 0
      ? `Браузер подходит. Есть замечания (${warnings}) — STELLA будет работать в упрощённом режиме.`
      : '✓ Ваш браузер полностью подходит для STELLA';
  btn.disabled = false;
  scene()?.pulse(1);
}
$('[data-scan-next]').addEventListener('click', next);

// ─────────────────────────────── 4. Политика
const policyCheck = $('[data-policy-check]');
function enterPolicy() {
  $('[data-policy-next]').disabled = !policyCheck.checked;
}
policyCheck.addEventListener('change', () => ($('[data-policy-next]').disabled = !policyCheck.checked));
$('[data-policy-next]').addEventListener('click', () => policyCheck.checked && next());

// ─────────────────────────────── 5. Загрузка
async function enterLoading() {
  const bar = $('[data-loading-bar]');
  const pct = $('[data-loading-pct]');
  const text = $('[data-loading-text]');
  const lines = ['Создаём защищённое соединение…', 'Шифруем ваши данные…', 'Резервируем ресурсы для агента…', 'Подготавливаем рабочее окружение…', 'Почти готово…'];
  const total = reduced ? 300 : 3200;
  const t0 = performance.now();
  return new Promise((resolve) => {
    const tick = () => {
      if (STEPS[state.step] !== 'loading') return resolve();
      const p = Math.min(1, (performance.now() - t0) / total);
      const eased = 1 - Math.pow(1 - p, 2.2);
      bar.style.width = `${eased * 100}%`;
      pct.textContent = `${Math.round(eased * 100)}%`;
      text.textContent = lines[Math.min(lines.length - 1, Math.floor(eased * lines.length))];
      if (p < 1) requestAnimationFrame(tick);
      else {
        scene()?.pulse(1.2);
        setTimeout(() => {
          next();
          resolve();
        }, 350);
      }
    };
    requestAnimationFrame(tick);
  });
}

// ─────────────────────────────── 6. Телефон и код в WhatsApp
const COUNTRIES = [
  ['RU', '🇷🇺', '7', 'Россия', 10],
  ['KZ', '🇰🇿', '7', 'Казахстан', 10],
  ['BY', '🇧🇾', '375', 'Беларусь', 9],
  ['UA', '🇺🇦', '380', 'Украина', 9],
  ['UZ', '🇺🇿', '998', 'Узбекистан', 9],
  ['KG', '🇰🇬', '996', 'Кыргызстан', 9],
  ['TJ', '🇹🇯', '992', 'Таджикистан', 9],
  ['AM', '🇦🇲', '374', 'Армения', 8],
  ['AZ', '🇦🇿', '994', 'Азербайджан', 9],
  ['GE', '🇬🇪', '995', 'Грузия', 9],
  ['MD', '🇲🇩', '373', 'Молдова', 8],
  ['TR', '🇹🇷', '90', 'Турция', 10],
  ['AE', '🇦🇪', '971', 'ОАЭ', 9],
  ['IL', '🇮🇱', '972', 'Израиль', 9],
  ['DE', '🇩🇪', '49', 'Германия', 0],
  ['PL', '🇵🇱', '48', 'Польша', 9],
  ['GB', '🇬🇧', '44', 'Великобритания', 10],
  ['US', '🇺🇸', '1', 'США / Канада', 10],
];
const countrySel = $('[data-country]');
countrySel.innerHTML = COUNTRIES.map(([code, flag, dial, name]) => `<option value="${code}">${flag} +${dial}</option>`).join('');
countrySel.title = 'Код страны';
const tzGuess = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
const tzCountry = { 'Asia/Almaty': 'KZ', 'Europe/Minsk': 'BY', 'Europe/Kiev': 'UA', 'Europe/Kyiv': 'UA', 'Asia/Tashkent': 'UZ', 'Asia/Bishkek': 'KG', 'Asia/Dushanbe': 'TJ', 'Asia/Yerevan': 'AM', 'Asia/Baku': 'AZ', 'Asia/Tbilisi': 'GE', 'Europe/Chisinau': 'MD', 'Europe/Istanbul': 'TR', 'Asia/Dubai': 'AE', 'Asia/Jerusalem': 'IL', 'Europe/Berlin': 'DE', 'Europe/Warsaw': 'PL', 'Europe/London': 'GB' }[tzGuess];
countrySel.value = tzCountry || (tzGuess.startsWith('America/') ? 'US' : 'RU');

const phoneForm = $('[data-form="phone"]');
const otpForm = $('[data-form="otp"]');
const phoneInput = phoneForm.phone;
const otpBoxes = $$('input', $('[data-otp]'));
let resendTimer = 0;

const country = () => COUNTRIES.find((c) => c[0] === countrySel.value) || COUNTRIES[0];

function formatNational(digits) {
  const [, , dial] = country();
  if (dial === '7' && digits.length) {
    const d = digits.slice(0, 10);
    let out = d.slice(0, 3);
    if (d.length > 3) out += ' ' + d.slice(3, 6);
    if (d.length > 6) out += '-' + d.slice(6, 8);
    if (d.length > 8) out += '-' + d.slice(8, 10);
    return out;
  }
  return digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
}

phoneInput.addEventListener('input', () => {
  let digits = phoneInput.value.replace(/\D/g, '');
  const [, , dial] = country();
  // вставили номер целиком: +7 999…, 8 999…
  if (dial === '7' && digits.length === 11 && /^[78]/.test(digits)) digits = digits.slice(1);
  if (digits.length > 12 && digits.startsWith(dial)) digits = digits.slice(dial.length);
  phoneInput.value = formatNational(digits.slice(0, 13));
  setError(phoneForm, 'phone', '');
  phoneForm.querySelector('.phone-input').classList.remove('is-invalid');
});
countrySel.addEventListener('change', () => phoneInput.dispatchEvent(new Event('input')));

function enterPhone() {
  if (state.verified) {
    next();
    return;
  }
  phoneForm.hidden = Boolean(state.phone && !otpForm.hidden);
}

phoneForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const [, , dial, , len] = country();
  const national = phoneInput.value.replace(/\D/g, '');
  const valid = len ? national.length === len : national.length >= 6 && national.length <= 13;
  if (!valid) {
    setError(phoneForm, 'phone', len ? `Номер должен содержать ${len} цифр после +${dial}` : 'Проверьте номер телефона');
    phoneForm.querySelector('.phone-input').classList.add('is-invalid');
    return;
  }
  await sendCode(dial + national, $('button[type=submit]', phoneForm));
});

async function sendCode(phone, btn) {
  busy(btn, true);
  try {
    const res = await api('otp/send', { phone });
    if (res.verified) {
      state.verified = true;
      next();
      return;
    }
    state.phone = phone;
    state.masked = res.masked || `+${phone}`;
    $('[data-otp-phone]').textContent = state.masked;
    phoneForm.hidden = true;
    otpForm.hidden = false;
    otpBoxes.forEach((b) => {
      b.value = '';
      b.classList.remove('is-filled');
    });
    $('[data-otp]').classList.remove('is-invalid', 'is-ok');
    setError(otpForm, 'otp', '');
    const dev = $('[data-otp-dev]');
    dev.hidden = !res.devCode;
    if (res.devCode) {
      dev.innerHTML = `${state.demo ? 'Демо-режим' : 'Режим разработки (WA_PROVIDER=console)'}: код <b>${res.devCode}</b>`;
    }
    startResendTimer(res.cooldown || 60);
    otpBoxes[0].focus();
    scene()?.pulse(1);
    toast('💬 Код отправлен в WhatsApp');
  } catch (err) {
    if (err.data?.retryIn) startResendTimer(err.data.retryIn);
    if (!phoneForm.hidden) {
      setError(phoneForm, 'phone', err.message);
      phoneForm.querySelector('.phone-input').classList.add('is-invalid');
    } else {
      setError(otpForm, 'otp', err.message);
    }
  } finally {
    busy(btn, false);
  }
}

function startResendTimer(seconds) {
  const btn = $('[data-otp-resend]');
  const label = $('[data-otp-timer]');
  clearInterval(resendTimer);
  let left = seconds;
  btn.disabled = true;
  const tick = () => {
    label.textContent = left > 0 ? `(${left})` : '';
    if (left <= 0) {
      clearInterval(resendTimer);
      btn.disabled = false;
    }
    left--;
  };
  tick();
  resendTimer = setInterval(tick, 1000);
}

$('[data-otp-resend]').addEventListener('click', (e) => sendCode(state.phone, e.currentTarget));
$('[data-otp-change]').addEventListener('click', () => {
  otpForm.hidden = true;
  phoneForm.hidden = false;
  phoneInput.focus();
});

otpBoxes.forEach((box, i) => {
  box.addEventListener('input', () => {
    const digits = box.value.replace(/\D/g, '');
    if (digits.length > 1) {
      // вставка или автозаполнение кода целиком
      digits
        .slice(0, 6)
        .split('')
        .forEach((d, k) => {
          if (otpBoxes[k]) {
            otpBoxes[k].value = d;
            otpBoxes[k].classList.add('is-filled');
          }
        });
      otpBoxes[Math.min(5, digits.length - 1)].focus();
    } else {
      box.value = digits;
      box.classList.toggle('is-filled', Boolean(digits));
      if (digits && otpBoxes[i + 1]) otpBoxes[i + 1].focus();
    }
    $('[data-otp]').classList.remove('is-invalid');
    setError(otpForm, 'otp', '');
    if (otpBoxes.every((b) => b.value)) submitOtp();
  });
  box.addEventListener('paste', (e) => {
    const digits = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, 6);
    if (!digits) return;
    e.preventDefault();
    otpBoxes.forEach((b, k) => {
      b.value = digits[k] || '';
      b.classList.toggle('is-filled', Boolean(digits[k]));
    });
    otpBoxes[Math.min(5, digits.length)]?.focus();
    if (digits.length === 6) submitOtp();
  });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !box.value && otpBoxes[i - 1]) {
      otpBoxes[i - 1].focus();
      otpBoxes[i - 1].value = '';
      otpBoxes[i - 1].classList.remove('is-filled');
    }
    if (e.key === 'ArrowLeft' && otpBoxes[i - 1]) otpBoxes[i - 1].focus();
    if (e.key === 'ArrowRight' && otpBoxes[i + 1]) otpBoxes[i + 1].focus();
  });
  box.addEventListener('focus', () => box.select());
});

const submitOtp = () =>
  otpForm.requestSubmit ? otpForm.requestSubmit() : otpForm.dispatchEvent(new Event('submit', { cancelable: true }));

let verifying = false;
otpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (verifying) return;
  const code = otpBoxes.map((b) => b.value).join('');
  if (code.length !== 6) {
    setError(otpForm, 'otp', 'Введите 6 цифр из сообщения');
    return;
  }
  verifying = true;
  const btn = $('button[type=submit]', otpForm);
  busy(btn, true);
  try {
    await api('otp/verify', { code });
    state.verified = true;
    $('[data-otp]').classList.add('is-ok');
    clearInterval(resendTimer);
    scene()?.pulse(1.5);
    toast('✓ Номер подтверждён');
    await wait(700);
    next();
  } catch (err) {
    $('[data-otp]').classList.add('is-invalid');
    setError(otpForm, 'otp', err.message);
    if (err.data?.code === 'otp_expired' || err.data?.code === 'otp_locked') $('[data-otp-resend]').disabled = false;
    otpBoxes.forEach((b) => {
      b.value = '';
      b.classList.remove('is-filled');
    });
    otpBoxes[0].focus();
  } finally {
    busy(btn, false);
    verifying = false;
  }
});

// ─────────────────────────────── 7. Тариф
const planPick = $('[data-plan-pick]');
function enterPlan() {
  const input = $(`input[value="${state.plan}"]`, planPick);
  if (input) input.checked = true;
  $('[data-plan-name]').textContent = PLAN_NAMES[state.plan];
}
planPick.addEventListener('change', (e) => {
  state.plan = e.target.value;
  $('[data-plan-name]').textContent = PLAN_NAMES[state.plan];
  scene()?.pulse(0.6);
});
$('[data-plan-next]').addEventListener('click', next);

// ─────────────────────────────── 8. Агент → создание
function enterAgent() {
  const name = $('[data-agent-name]');
  if (!name.value.trim()) name.value = 'STELLA';
}

$('[data-agent-create]').addEventListener('click', createAgent);
$('[data-done-retry]').addEventListener('click', createAgent);

async function createAgent() {
  const agentName = $('[data-agent-name]').value.trim().slice(0, 30) || 'STELLA';
  const tasks = $$('[data-agent-tasks] input:checked').map((i) => i.value);
  showStep(STEPS.indexOf('done'));

  const assemble = $('[data-assemble]');
  const progress = $('[data-done-progress]');
  const final = $('[data-done-final]');
  const error = $('[data-done-error]');
  const line = $('[data-done-line]');
  const bar = $('[data-done-bar]');
  assemble.classList.remove('is-done');
  progress.hidden = false;
  final.hidden = true;
  error.hidden = true;
  scene()?.burst();

  const lines = ['Собираем нейроядро', 'Подключаем 200+ AI-моделей', 'Настраиваем голос агента', 'Готовим виртуальную SIM-карту', 'Передаём заявку команде STELLA'];
  const request = api('agent', { plan: state.plan, agentName, tasks, browser: state.browser });
  const minTime = reduced ? 300 : 4200;
  const t0 = performance.now();
  let idx = 0;
  const lineTimer = setInterval(() => {
    idx = Math.min(lines.length - 1, idx + 1);
    line.textContent = lines[idx];
  }, minTime / lines.length);
  line.textContent = lines[0];
  const barTick = () => {
    const p = Math.min(0.96, (performance.now() - t0) / minTime);
    bar.style.width = `${p * 100}%`;
    if (p < 0.96 && progress.hidden === false) requestAnimationFrame(barTick);
  };
  requestAnimationFrame(barTick);

  let res;
  try {
    [res] = await Promise.all([request, wait(minTime)]);
  } catch (err) {
    clearInterval(lineTimer);
    progress.hidden = true;
    error.hidden = false;
    $('[data-done-error-text]').textContent = err.message;
    return;
  }
  clearInterval(lineTimer);
  bar.style.width = '100%';
  await wait(300);

  state.created = true;
  assemble.classList.add('is-done');
  progress.hidden = true;
  final.hidden = false;
  $('[data-done-name]').textContent = agentName;
  $('[data-done-phone]').textContent = res.masked || state.masked;
  $('[data-done-ticket]').textContent = `#${res.ticket || '—'}`;
  $('[data-done-plan]').textContent = PLAN_NAMES[state.plan];
  scene()?.burst();
  confetti();
}

// праздничные частицы
function confetti() {
  if (reduced) return;
  const c = document.createElement('canvas');
  Object.assign(c.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 600 });
  document.body.appendChild(c);
  const dpr = Math.min(devicePixelRatio || 1, 2);
  c.width = innerWidth * dpr;
  c.height = innerHeight * dpr;
  const ctx = c.getContext('2d');
  const colors = ['#2de2ff', '#8b5cff', '#ff4fd8', '#ffcf6b', '#3dffa8', '#ffffff'];
  const parts = Array.from({ length: 160 }, () => ({
    x: c.width / 2,
    y: c.height * 0.45,
    vx: (Math.random() - 0.5) * 22 * dpr,
    vy: (-Math.random() * 18 - 6) * dpr,
    s: (4 + Math.random() * 6) * dpr,
    r: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    c: colors[Math.floor(Math.random() * colors.length)],
    star: Math.random() < 0.3,
  }));
  const t0 = performance.now();
  (function frame() {
    const t = performance.now() - t0;
    ctx.clearRect(0, 0, c.width, c.height);
    for (const p of parts) {
      p.vy += 0.45 * dpr;
      p.vx *= 0.985;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.globalAlpha = Math.max(0, 1 - t / 3200);
      ctx.fillStyle = p.c;
      if (p.star) {
        const k = p.s * 1.3;
        ctx.beginPath();
        ctx.moveTo(0, -k);
        ctx.quadraticCurveTo(0, 0, k, 0);
        ctx.quadraticCurveTo(0, 0, 0, k);
        ctx.quadraticCurveTo(0, 0, -k, 0);
        ctx.quadraticCurveTo(0, 0, 0, -k);
        ctx.fill();
      } else {
        ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      }
      ctx.restore();
    }
    if (t < 3300) requestAnimationFrame(frame);
    else c.remove();
  })();
}

// ─────────────────────────────── старт
loadConfig();
