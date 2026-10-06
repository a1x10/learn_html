import * as THREE from 'three';

const MONO = '"Geist Mono", ui-monospace, monospace';
const SANS = '"Geist", system-ui, sans-serif';

function tex(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// SQL-слово в «пилюле» — для кольца на первом экране
export function keywordTexture(word, color) {
  const h = 96;
  const c = document.createElement('canvas');
  const g = c.getContext('2d');
  g.font = `500 44px ${MONO}`;
  const w = Math.ceil(g.measureText(word).width) + 64;
  c.width = w;
  c.height = h;
  g.font = `500 44px ${MONO}`;
  g.fillStyle = 'rgba(14,16,40,0.55)';
  g.strokeStyle = color;
  g.globalAlpha = 1;
  g.lineWidth = 2;
  roundRect(g, 2, 2, w - 4, h - 4, 46);
  g.fill();
  g.globalAlpha = 0.6;
  g.stroke();
  g.globalAlpha = 1;
  g.fillStyle = color;
  g.textBaseline = 'middle';
  g.fillText(word, 32, h / 2 + 2);
  return { texture: tex(c), aspect: w / h };
}

// подпись-ярлык для узлов (экземпляры Fusion)
export function labelTexture(text, sub, color) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 192;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(10,12,30,0.72)';
  roundRect(g, 4, 4, 504, 184, 36);
  g.fill();
  g.strokeStyle = color;
  g.lineWidth = 3;
  g.globalAlpha = 0.8;
  g.stroke();
  g.globalAlpha = 1;
  g.fillStyle = color;
  g.beginPath();
  g.arc(58, 96, 14, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#eef0ff';
  g.font = `600 64px ${SANS}`;
  g.textBaseline = 'middle';
  g.fillText(text, 96, 80);
  g.fillStyle = 'rgba(200,206,255,0.6)';
  g.font = `400 30px ${MONO}`;
  g.fillText(sub, 98, 140);
  return tex(c);
}

// Экран ноутбука: интерфейс SQLHarmonyDesk (редактор, вкладки, результаты)
export function screenTexture() {
  const W = 1600;
  const H = 1000;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#0b0d1c';
  g.fillRect(0, 0, W, H);

  // заголовок окна
  g.fillStyle = '#12152b';
  g.fillRect(0, 0, W, 54);
  ['#ff5f57', '#febc2e', '#28c840'].forEach((col, i) => {
    g.fillStyle = col;
    g.beginPath();
    g.arc(30 + i * 28, 27, 8, 0, Math.PI * 2);
    g.fill();
  });
  g.fillStyle = '#c9cdf0';
  g.font = `600 22px ${SANS}`;
  g.fillText('SQLHarmonyDesk', 130, 34);
  g.fillStyle = '#6b7099';
  g.font = `400 18px ${MONO}`;
  g.fillText('fusion-prod · PL/SQL mode', 330, 34);

  // боковая панель метаданных
  g.fillStyle = '#0f1226';
  g.fillRect(0, 54, 300, H - 54);
  g.fillStyle = '#7d83b3';
  g.font = `600 16px ${SANS}`;
  g.fillText('TABLES', 26, 96);
  const tables = ['PER_ALL_PEOPLE_F', 'PER_ALL_ASSIGNMENTS_M', 'HR_ALL_ORGANIZATION_UNITS', 'AP_INVOICES_ALL', 'GL_JE_HEADERS', 'PO_HEADERS_ALL', 'HZ_PARTIES'];
  g.font = `400 17px ${MONO}`;
  tables.forEach((t, i) => {
    g.fillStyle = i === 0 ? '#ff8a4a' : '#a7acd6';
    g.fillText((i === 0 ? '▾ ' : '▸ ') + t, 22, 134 + i * 34);
  });
  ['PERSON_ID', 'EFFECTIVE_START_DATE', 'PERSON_NUMBER', 'BUSINESS_GROUP_ID'].forEach((col, i) => {
    g.fillStyle = '#6f75a6';
    g.fillText('  · ' + col, 34, 166 + i * 28 + 6 * 34);
  });

  // вкладки
  ['employees.sql', 'invoices.sql', 'gl_balance.sql'].forEach((t, i) => {
    g.fillStyle = i === 0 ? '#0b0d1c' : '#12152b';
    g.fillRect(300 + i * 220, 54, 218, 46);
    g.fillStyle = i === 0 ? '#eef0ff' : '#6b7099';
    g.font = `400 18px ${MONO}`;
    g.fillText(t, 324 + i * 220, 84);
  });
  g.fillStyle = '#ff6a2a';
  g.fillRect(300, 98, 218, 3);

  // код
  const lines = [
    [['SELECT', 'k'], [' p.person_number,', 't']],
    [['       n.full_name,', 't']],
    [['       ', 't'], ['COUNT', 'f'], ['(a.assignment_id) ', 't'], ['AS', 'k'], [' assignments', 't']],
    [['FROM', 'k'], ['   per_all_people_f p', 't']],
    [['JOIN', 'k'], ['   per_person_names_f n ', 't'], ['ON', 'k'], [' n.person_id = p.person_id', 't']],
    [['WHERE', 'k'], ['  n.name_type = ', 't'], ["'GLOBAL'", 's']],
    [['GROUP BY', 'k'], [' p.person_number, n.full_name', 't']],
    [['ORDER BY', 'k'], [' assignments ', 't'], ['DESC', 'k'], [';', 't']],
  ];
  const colors = { k: '#ff8a4a', t: '#d9dcf7', f: '#7aa2ff', s: '#7ee0b1' };
  g.font = `400 22px ${MONO}`;
  lines.forEach((ln, i) => {
    let x = 370;
    const y = 150 + i * 36;
    g.fillStyle = '#3f4470';
    g.fillText(String(i + 1).padStart(2, ' '), 320, y);
    for (const [txt, k] of ln) {
      g.fillStyle = colors[k];
      g.fillText(txt, x, y);
      x += g.measureText(txt).width;
    }
  });

  // таблица результатов
  const top = 470;
  g.fillStyle = '#0f1226';
  g.fillRect(300, top, W - 300, H - top);
  g.fillStyle = '#7d83b3';
  g.font = `600 16px ${SANS}`;
  g.fillText('RESULTS', 324, top + 36);
  g.fillStyle = '#2bd49a';
  g.font = `400 16px ${MONO}`;
  g.fillText('● page 1 · rows 1–50', 430, top + 36);
  // кнопки экспорта
  [['CSV', '#7aa2ff'], ['XLSX', '#2bd49a']].forEach(([t, col], i) => {
    g.strokeStyle = col;
    g.lineWidth = 2;
    roundRect(g, W - 220 + i * 100, top + 14, 84, 32, 8);
    g.stroke();
    g.fillStyle = col;
    g.font = `600 16px ${MONO}`;
    g.fillText(t, W - 205 + i * 100, top + 36);
  });
  const cols = ['PERSON_NUMBER', 'FULL_NAME', 'ASSIGNMENTS'];
  const cx = [324, 640, 1100];
  g.fillStyle = '#181c3a';
  g.fillRect(300, top + 62, W - 300, 40);
  g.font = `600 17px ${MONO}`;
  g.fillStyle = '#a7acd6';
  cols.forEach((t, i) => g.fillText(t, cx[i], top + 88));
  const names = ['Avery Collins', 'Jordan Patel', 'Mia Novak', 'Lucas Romero', 'Emma Lindqvist', 'Noah Fischer', 'Sofia Marin', 'Ethan Brooks', 'Chloe Dubois', 'Liam Okafor'];
  g.font = `400 17px ${MONO}`;
  names.forEach((nm, i) => {
    const y = top + 136 + i * 38;
    if (i % 2) {
      g.fillStyle = 'rgba(255,255,255,0.025)';
      g.fillRect(300, y - 26, W - 300, 38);
    }
    g.fillStyle = '#c9cdf0';
    g.fillText(String(100231 + i * 17), cx[0], y);
    g.fillText(nm, cx[1], y);
    g.fillStyle = '#ff9a5a';
    g.fillText(String(12 - Math.floor(i * 0.9)), cx[2], y);
  });
  return tex(c);
}

// Клавиатура ноутбука
export function keyboardTexture() {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 640;
  const g = c.getContext('2d');
  g.fillStyle = '#1a1c2b';
  g.fillRect(0, 0, 1024, 640);
  const rows = [14, 14, 13, 12, 9];
  const kw = 62;
  const gap = 8;
  rows.forEach((n, r) => {
    const total = n * kw + (n - 1) * gap;
    let x = (1024 - total) / 2;
    for (let i = 0; i < n; i++) {
      const wide = r === 4 && i === 4 ? 4 : 1;
      const w = kw * wide + gap * (wide - 1);
      g.fillStyle = '#0d0e18';
      roundRect(g, x, 40 + r * 70, w, 60, 9);
      g.fill();
      x += w + gap;
      if (wide > 1) i += 0;
    }
  });
  // тачпад
  g.fillStyle = '#22253a';
  roundRect(g, 362, 410, 300, 190, 18);
  g.fill();
  return tex(c);
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}
