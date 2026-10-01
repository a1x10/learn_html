// Проверка настроек:
//   npm run test:telegram                 — тестовое сообщение вам в Telegram
//   npm run test:whatsapp -- 79991234567  — тестовый код на указанный WhatsApp-номер
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from '../lib/env.js';
import { notifyOwner, telegramConfigured } from '../lib/telegram.js';
import { sendOtp, whatsappProvider, whatsappConfigError } from '../lib/whatsapp.js';

loadEnv(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '.env'));

const [what, arg] = process.argv.slice(2);

if (what === 'telegram') {
  if (!telegramConfigured()) {
    console.error('Укажите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env (chat_id можно узнать: npm run chat-id)');
    process.exit(1);
  }
  await notifyOwner('✅ <b>STELLA</b>: бот настроен, уведомления о новых агентах будут приходить сюда.');
  console.log('Отправлено. Проверьте Telegram.');
} else if (what === 'whatsapp') {
  const digits = String(arg || '').replace(/\D/g, '');
  if (digits.length < 10) {
    console.error('Укажите номер: npm run test:whatsapp -- 79991234567');
    process.exit(1);
  }
  const err = whatsappConfigError();
  if (err) {
    console.error(err);
    process.exit(1);
  }
  await sendOtp(digits, '123456');
  console.log(`Отправлено через «${whatsappProvider()}» на +${digits}.`);
} else {
  console.log('Использование: node tools/test-send.js telegram | whatsapp <номер>');
}
