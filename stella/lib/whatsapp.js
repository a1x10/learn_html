// Отправка сообщений в WhatsApp.
// Провайдеры:
//   console  — режим разработки: код печатается в консоль сервера и показывается в интерфейсе
//   greenapi — Green API (https://green-api.com): ваш обычный номер подключается к WhatsApp по QR-коду
//   meta     — официальный WhatsApp Cloud API (Meta). Для кодов нужен утверждённый шаблон категории Authentication
import { env, envBool } from './env.js';

export function whatsappProvider() {
  return env('WA_PROVIDER', 'console').toLowerCase();
}

export function whatsappConfigError() {
  const p = whatsappProvider();
  if (p === 'console') return null;
  if (p === 'greenapi') {
    if (!env('GREEN_API_ID_INSTANCE') || !env('GREEN_API_TOKEN')) return 'Не заданы GREEN_API_ID_INSTANCE / GREEN_API_TOKEN';
    return null;
  }
  if (p === 'meta') {
    if (!env('META_WA_TOKEN') || !env('META_WA_PHONE_NUMBER_ID')) return 'Не заданы META_WA_TOKEN / META_WA_PHONE_NUMBER_ID';
    return null;
  }
  return `Неизвестный WA_PROVIDER: ${p}`;
}

async function postJson(url, body, headers = {}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

async function greenApiSend(phoneDigits, message) {
  const base = env('GREEN_API_URL', 'https://api.green-api.com').replace(/\/+$/, '');
  const id = env('GREEN_API_ID_INSTANCE');
  const token = env('GREEN_API_TOKEN');
  const url = `${base}/waInstance${id}/sendMessage/${token}`;
  return postJson(url, { chatId: `${phoneDigits}@c.us`, message });
}

async function metaSend(phoneDigits, payload) {
  const version = env('META_WA_API_VERSION', 'v21.0');
  const url = `https://graph.facebook.com/${version}/${env('META_WA_PHONE_NUMBER_ID')}/messages`;
  return postJson(
    url,
    { messaging_product: 'whatsapp', recipient_type: 'individual', to: phoneDigits, ...payload },
    { Authorization: `Bearer ${env('META_WA_TOKEN')}` },
  );
}

/** Код подтверждения. phoneDigits — только цифры в международном формате (79991234567). */
export async function sendOtp(phoneDigits, code) {
  const provider = whatsappProvider();
  const text = env(
    'WA_OTP_TEXT',
    'STELLA: ваш код подтверждения — {code}. Никому не сообщайте этот код. Код действует 10 минут.',
  ).replaceAll('{code}', code);

  if (provider === 'greenapi') return greenApiSend(phoneDigits, text);

  if (provider === 'meta') {
    const template = env('META_WA_OTP_TEMPLATE');
    if (!template) {
      // Без шаблона Meta доставит текст только если человек писал вам за последние 24 часа.
      return metaSend(phoneDigits, { type: 'text', text: { body: text } });
    }
    const components = [{ type: 'body', parameters: [{ type: 'text', text: code }] }];
    if (envBool('META_WA_OTP_BUTTON', true)) {
      components.push({ type: 'button', sub_type: 'url', index: '0', parameters: [{ type: 'text', text: code }] });
    }
    return metaSend(phoneDigits, {
      type: 'template',
      template: { name: template, language: { code: env('META_WA_LANG', 'ru') }, components },
    });
  }

  console.log(`\n  [WhatsApp:console] → +${phoneDigits}\n  ${text}\n`);
  return { console: true };
}

/** Обычное текстовое сообщение (подтверждение заявки). */
export async function sendText(phoneDigits, text) {
  const provider = whatsappProvider();
  if (provider === 'greenapi') return greenApiSend(phoneDigits, text);
  if (provider === 'meta') {
    const template = env('META_WA_ACK_TEMPLATE');
    if (template) {
      return metaSend(phoneDigits, {
        type: 'template',
        template: { name: template, language: { code: env('META_WA_LANG', 'ru') } },
      });
    }
    return metaSend(phoneDigits, { type: 'text', text: { body: text } });
  }
  console.log(`\n  [WhatsApp:console] → +${phoneDigits}\n  ${text}\n`);
  return { console: true };
}
