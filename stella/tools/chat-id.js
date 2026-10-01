// Показывает chat_id чатов, которые писали вашему боту.
// 1) Напишите своему боту в Telegram любое сообщение (например /start)
// 2) npm run chat-id
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv, env } from '../lib/env.js';
import { telegramCall } from '../lib/telegram.js';

loadEnv(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '.env'));

if (!env('TELEGRAM_BOT_TOKEN')) {
  console.error('Сначала укажите TELEGRAM_BOT_TOKEN в файле .env');
  process.exit(1);
}

const me = await telegramCall('getMe', {});
const updates = await telegramCall('getUpdates', { limit: 100 });
const chats = new Map();
for (const u of updates) {
  const chat = (u.message || u.channel_post || u.my_chat_member || u.edited_message)?.chat;
  if (chat) chats.set(chat.id, chat);
}

console.log(`\nБот: @${me.username}\n`);
if (!chats.size) {
  console.log(`Сообщений пока нет. Откройте https://t.me/${me.username}, нажмите «Старт» и запустите команду ещё раз.\n`);
} else {
  for (const chat of chats.values()) {
    const name = chat.title || [chat.first_name, chat.last_name].filter(Boolean).join(' ') || chat.username || '';
    console.log(`  TELEGRAM_CHAT_ID=${chat.id}    (${chat.type}: ${name})`);
  }
  console.log('\nСкопируйте нужную строку в .env\n');
}
