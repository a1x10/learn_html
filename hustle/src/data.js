// Настройки и данные-примеры. Цены тарифов — меняйте здесь.
export const PRICES = { pro: '299 ₽', boost: '99 ₽' };

export const CATS = [
  { id: 'design', name: 'Дизайн', ic: '🎨', hue: 280 },
  { id: 'video', name: 'Монтаж', ic: '🎬', hue: 340 },
  { id: 'code', name: 'Программирование', ic: '💻', hue: 200 },
  { id: 'motion', name: 'Motion / 3D', ic: '🧊', hue: 160 },
  { id: 'text', name: 'Тексты', ic: '✍️', hue: 40 },
  { id: 'smm', name: 'SMM', ic: '📈', hue: 15 },
  { id: 'music', name: 'Музыка и звук', ic: '🎧', hue: 250 },
];
export const catById = (id) => CATS.find((c) => c.id === id) || CATS[0];

// Обложка-заглушка для лотов без картинок: SVG с градиентом и формами
export function coverSVG(seed, hue, ic) {
  let s = 0;
  for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
  const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const h2 = (hue + 40 + r() * 60) % 360;
  const shapes = Array.from({ length: 5 }, () => {
    const x = (r() * 400).toFixed(0), y = (r() * 260).toFixed(0), rad = (30 + r() * 90).toFixed(0);
    return `<circle cx="${x}" cy="${y}" r="${rad}" fill="hsl(${(hue + r() * 80) | 0} 90% ${55 + r() * 15}%)" opacity="${(0.25 + r() * 0.45).toFixed(2)}"/>`;
  }).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue} 80% 22%)"/><stop offset="1" stop-color="hsl(${h2} 85% 45%)"/></linearGradient><filter id="b"><feGaussianBlur stdDeviation="22"/></filter></defs><rect width="400" height="260" fill="url(#g)"/><g filter="url(#b)">${shapes}</g><g fill="none" stroke="#fff" stroke-opacity=".14"><path d="M0 200 Q100 150 200 190 T400 170"/><path d="M0 225 Q120 175 220 215 T400 195"/></g><text x="200" y="150" font-size="84" text-anchor="middle">${ic}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const H = 3600e3;
const now = Date.now();
export const SEED = [
  { id: 's1', type: 'order', cat: 'video', title: 'Смонтировать 3 ролика для TikTok', price: 1500, deadline: '3 дня', author: 'Дима', desc: 'Есть сырые видео с обзором кроссовок. Нужно нарезать динамично, добавить субтитры и трендовые переходы. Длина — до 40 секунд каждый.', ago: 2, resp: 4 },
  { id: 's2', type: 'service', cat: 'design', title: 'Сделаю аватарку и шапку для канала', price: 700, deadline: '1 день', author: 'Алина', desc: 'Рисую аватарки в стиле аниме и минимализм, делаю обложки для YouTube и Telegram. Две правки бесплатно.', ago: 5, resp: 9 },
  { id: 's3', type: 'order', cat: 'code', title: 'Telegram-бот для записи на тренировки', price: 4000, deadline: 'Неделя', author: 'Марат', desc: 'Нужен бот: выбор времени, запись, напоминание за час. Python или Node — без разницы. Хостинг помогу настроить.', ago: 8, resp: 3, team: true },
  { id: 's4', type: 'service', cat: 'motion', title: '3D-логотип с анимацией для интро', price: 2500, deadline: '3 дня', author: 'Тимур', desc: 'Сделаю объёмный логотип в Blender и анимацию на 5 секунд. Отдам в MP4 и с прозрачным фоном.', ago: 12, resp: 6 },
  { id: 's5', type: 'order', cat: 'design', title: 'Логотип для кофейни у колледжа', price: 2000, deadline: '2 недели', author: 'Соня', desc: 'Небольшая кофейня, хотим современный простой логотип и вариант для стаканов. Пришлю референсы.', ago: 20, resp: 11 },
  { id: 's6', type: 'service', cat: 'text', title: 'Напишу посты для Telegram-канала', price: 300, deadline: '1 день', author: 'Лера', desc: 'Пишу живо и без воды. Цена — за один пост до 1500 знаков. Могу придумать контент-план на месяц.', ago: 26, resp: 2 },
  { id: 's7', type: 'order', cat: 'smm', title: 'Оформить Instagram для барбершопа', price: 3500, deadline: 'Неделя', author: 'Руслан', desc: 'Нужны шаблоны сторис, хайлайты, 9 первых постов. Фото есть, нужно красиво собрать в единый стиль.', ago: 30, resp: 5, team: true },
  { id: 's8', type: 'service', cat: 'music', title: 'Сведу трек и сделаю мастеринг', price: 1200, deadline: '3 дня', author: 'Егор', desc: 'Свожу биты и вокал, чищу шумы, делаю громкий мастер под стриминги. Пример до/после пришлю в личке.', ago: 40, resp: 7 },
  { id: 's9', type: 'order', cat: 'code', title: 'Лендинг для школьного стартапа', price: 5000, deadline: '2 недели', author: 'Камила', desc: 'Одностраничный сайт с формой заявки и красивой анимацией. Есть тексты и логотип, нужен дизайн и вёрстка.', ago: 52, resp: 8, team: true },
].map((l) => ({ ...l, created: now - l.ago * H, images: [], seed: true }));
