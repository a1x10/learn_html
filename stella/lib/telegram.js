// Уведомления владельцу в Telegram-бота.
import { env } from './env.js';

export function telegramConfigured() {
  return Boolean(env('TELEGRAM_BOT_TOKEN') && env('TELEGRAM_CHAT_ID'));
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export async function telegramCall(method, body) {
  const base = env('TELEGRAM_API_BASE', 'https://api.telegram.org').replace(/\/+$/, '');
  const res = await fetch(`${base}/bot${env('TELEGRAM_BOT_TOKEN')}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    throw new Error(`Telegram ${method}: ${res.status} ${data.description || ''}`.trim());
  }
  return data.result;
}

/** Отправляет сообщение во все чаты из TELEGRAM_CHAT_ID (можно перечислить через запятую). */
export async function notifyOwner(html, buttons) {
  const chats = env('TELEGRAM_CHAT_ID')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const results = [];
  for (const chatId of chats) {
    const body = {
      chat_id: chatId,
      text: html,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    };
    if (buttons?.length) body.reply_markup = { inline_keyboard: buttons };
    results.push(await telegramCall('sendMessage', body));
  }
  return results;
}
