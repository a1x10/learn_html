import * as THREE from 'three';

export const FONTS = {
  display: "'Prata', 'Playfair Display', Georgia, serif",
  accent: "'Cormorant Garamond', Georgia, serif",
  body: "'Onest', system-ui, sans-serif",
  mono: "'Martian Mono', ui-monospace, monospace",
};

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

export function toTexture(canvas, { srgb = true, repeat = false, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true;
  return t;
}

// Этикетка флакона: бренд, номер оттенка, объём
export function labelTexture({ brand = 'LAQUÉ', shade = 'Nº 01 · CHERRY JAM', sub = 'GEL POLISH · 12 ML', color = '#ffffff', res = 0.5 } = {}) {
  const w = 1024;
  const h = 640;
  const c = makeCanvas(w * res, h * res);
  const g = c.getContext('2d');
  g.scale(res, res);
  g.clearRect(0, 0, w, h);
  g.fillStyle = color;
  g.textAlign = 'center';
  g.textBaseline = 'alphabetic';
  g.font = `400 210px ${FONTS.display}`;
  if ('letterSpacing' in g) g.letterSpacing = '6px';
  g.fillText(brand, w / 2, 300);
  if ('letterSpacing' in g) g.letterSpacing = '10px';
  g.font = `500 44px ${FONTS.mono}`;
  g.fillText(shade, w / 2, 420);
  g.globalAlpha = 0.75;
  g.font = `400 34px ${FONTS.mono}`;
  g.fillText(sub, w / 2, 500);
  g.globalAlpha = 1;
  // тонкая линия
  g.fillRect(w / 2 - 70, 345, 140, 3);
  return toTexture(c);
}

// Одна буква для 3D-заголовка: возвращает текстуру и пропорции
export function glyphTexture(ch, { font = FONTS.display, px = 420, color = '#F4EAE8', weight = 400 } = {}) {
  const probe = makeCanvas(8, 8).getContext('2d');
  probe.font = `${weight} ${px}px ${font}`;
  const m = probe.measureText(ch);
  const asc = m.actualBoundingBoxAscent || px * 0.75;
  const desc = m.actualBoundingBoxDescent || px * 0.05;
  const left = m.actualBoundingBoxLeft || 0;
  const right = m.actualBoundingBoxRight || m.width;
  const pad = Math.round(px * 0.06);
  const w = Math.ceil(left + right + pad * 2);
  const h = Math.ceil(asc + desc + pad * 2);
  const c = makeCanvas(w, h);
  const g = c.getContext('2d');
  g.font = `${weight} ${px}px ${font}`;
  g.fillStyle = color;
  g.textBaseline = 'alphabetic';
  g.fillText(ch, pad + left, pad + asc);
  const t = toTexture(c);
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return {
    texture: t,
    w,
    h,
    advance: m.width,
    // смещения в долях кегля — чтобы ставить буквы по общей базовой линии
    ascent: (asc + pad) / px,
    descent: (desc + pad) / px,
    left: (left + pad) / px,
  };
}

// Мягкое свечение для задника первого экрана
export function glowTexture({ size = 1024, inner = '#5a0a1d', outer = '#130B0E', mid = '#2b0b14', cx = 0.5, cy = 0.46 } = {}) {
  const c = makeCanvas(size, size);
  const g = c.getContext('2d');
  g.fillStyle = outer;
  g.fillRect(0, 0, size, size);
  const grd = g.createRadialGradient(size * cx, size * cy, 0, size * cx, size * cy, size * 0.62);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.38, mid);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  dither(g, size, size, 3);
  return toTexture(c);
}

// лёгкий шум, чтобы градиенты не «ступенькали»
export function dither(g, w, h, amp = 3) {
  const img = g.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * amp;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
}

// Неровный кусочек фольги (альфа-маска)
export function flakeAlpha(seed = 1) {
  const s = 256;
  const c = makeCanvas(s, s);
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, s, s);
  g.fillStyle = '#fff';
  const rnd = mulberry(seed);
  g.beginPath();
  const n = 9 + Math.floor(rnd() * 5);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = s * (0.22 + rnd() * 0.24);
    const x = s / 2 + Math.cos(a) * r;
    const y = s / 2 + Math.sin(a) * r;
    if (i === 0) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.closePath();
  g.fill();
  return toTexture(c, { srgb: false });
}

// Шероховатость/зерно для пилки
export function gritTexture(colorA = '#f3d9d6', colorB = '#e9c4c0', seed = 3) {
  const w = 512;
  const h = 64;
  const c = makeCanvas(w, h);
  const g = c.getContext('2d');
  g.fillStyle = colorA;
  g.fillRect(0, 0, w / 2, h);
  g.fillStyle = colorB;
  g.fillRect(w / 2, 0, w / 2, h);
  const rnd = mulberry(seed);
  for (let i = 0; i < 9000; i++) {
    const x = rnd() * w;
    const y = rnd() * h;
    g.fillStyle = rnd() > 0.5 ? 'rgba(255,255,255,.35)' : 'rgba(90,40,40,.18)';
    g.fillRect(x, y, 1.2, 1.2);
  }
  g.fillStyle = 'rgba(60,20,30,.55)';
  g.font = `500 22px ${FONTS.mono}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('180', w * 0.25, h / 2);
  g.fillText('240', w * 0.75, h / 2);
  return toTexture(c);
}

export function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
