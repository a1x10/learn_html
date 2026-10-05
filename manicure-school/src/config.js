// Всё, что меняется под клиента, собрано здесь.
// Тексты страницы — в index.html, цены — в атрибутах data-full / data-month у тарифов.

export const CONFIG = {
  brand: 'LAQUÉ',
  brandLine: 'школа маникюра',

  // Старт потока и окончание ранней цены (московское время)
  startDate: '2026-11-09T12:00:00+03:00',
  earlyBirdUntil: '2026-10-25T23:59:00+03:00',

  // Куда уходят заявки. Если formEndpoint пустой — заявка собирается в текст
  // и открывается в Telegram (или WhatsApp, если Telegram не указан).
  formEndpoint: '',
  telegram: 'laque_school',
  whatsapp: '',

  // Оттенки для 3D-флаконов. Первый — «фирменный» для первого экрана.
  shades: [
    { id: 'cherry', name: 'Cherry Jam', ru: 'Вишнёвый джем', color: '#7E0B24' },
    { id: 'milk', name: 'Milky Rose', ru: 'Молочная роза', color: '#E9C6C3' },
    { id: 'latte', name: 'Nude Latte', ru: 'Нюдовый латте', color: '#C38F7A' },
    { id: 'wine', name: 'Berry Wine', ru: 'Ягодное вино', color: '#4A0D27' },
    { id: 'pearl', name: 'Pearl', ru: 'Жемчуг', color: '#EFE6E2' },
    { id: 'coral', name: 'Coral Kiss', ru: 'Коралл', color: '#D9483F' },
    { id: 'noir', name: 'Noir', ru: 'Чёрный лак', color: '#1A1216' },
  ],
};
