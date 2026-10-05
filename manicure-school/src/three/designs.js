import { makeCanvas, toTexture, mulberry } from './textures.js';

// Дизайны ногтя рисуются в 2D-канве в координатах пластины:
// u — поперёк (0 слева, 1 справа), v — вдоль (0 у кутикулы, 1 на кончике).

const S = 1024;
const cache = new Map();

const X = (u) => u * S;
const Y = (v) => (1 - v) * S;

// линия «улыбки»: по бокам ниже, в центре выше
const smile = (u, base, depth) => base + depth * (1 - Math.pow(2 * u - 1, 2));

function fill(g, color) {
  g.fillStyle = color;
  g.fillRect(0, 0, S, S);
}

function vGradient(g, stops) {
  const grd = g.createLinearGradient(0, Y(0), 0, Y(1));
  for (const [v, c] of stops) grd.addColorStop(v, c);
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
}

function smilePath(g, base, depth, toTip = true) {
  g.beginPath();
  g.moveTo(X(-0.05), Y(toTip ? 1.2 : -0.2));
  for (let i = 0; i <= 64; i++) {
    const u = -0.05 + (1.1 * i) / 64;
    g.lineTo(X(u), Y(smile(Math.min(Math.max(u, 0), 1), base, depth)));
  }
  g.lineTo(X(1.05), Y(toTip ? 1.2 : -0.2));
  g.closePath();
}

function ridges(g, alpha = 0.05, seed = 2) {
  const rnd = mulberry(seed);
  for (let i = 0; i < 46; i++) {
    const u = rnd();
    g.strokeStyle = rnd() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(150,70,70,${alpha * 0.8})`;
    g.lineWidth = 2 + rnd() * 5;
    g.beginPath();
    g.moveTo(X(u), Y(0.05));
    g.bezierCurveTo(X(u + 0.01), Y(0.3), X(u - 0.01), Y(0.6), X(u + 0.005), Y(0.98));
    g.stroke();
  }
}

function lunula(g, alpha = 0.55) {
  const grd = g.createRadialGradient(X(0.5), Y(0.0), 0, X(0.5), Y(0.0), S * 0.3);
  grd.addColorStop(0, `rgba(255,244,240,${alpha})`);
  grd.addColorStop(0.62, `rgba(255,240,236,${alpha * 0.85})`);
  grd.addColorStop(1, 'rgba(255,240,236,0)');
  g.fillStyle = grd;
  g.save();
  g.scale(1, 0.62);
  g.fillRect(0, (Y(0.32)) / 0.62, S, S / 0.62);
  g.restore();
}

function naturalBed(g, { overgrown = false } = {}) {
  vGradient(g, [
    [0, '#efc0b8'],
    [0.25, '#eaaaa3'],
    [0.6, '#e6a19b'],
    [1, '#e39b96'],
  ]);
  lunula(g, overgrown ? 0.35 : 0.5);
  ridges(g, overgrown ? 0.07 : 0.04);
  // свободный край
  const base = overgrown ? 0.6 : 0.7;
  smilePath(g, base, overgrown ? 0.07 : 0.1);
  const grd = g.createLinearGradient(0, Y(base), 0, Y(1));
  grd.addColorStop(0, overgrown ? '#efe1cf' : '#f4e9dd');
  grd.addColorStop(1, overgrown ? '#e4d2bb' : '#efe2d2');
  g.fillStyle = grd;
  g.fill();
  // тонкая розовая кайма у линии улыбки
  g.save();
  g.globalAlpha = 0.35;
  g.lineWidth = 10;
  g.strokeStyle = '#f7d3cc';
  g.beginPath();
  for (let i = 0; i <= 64; i++) {
    const u = i / 64;
    const y = Y(smile(u, base, overgrown ? 0.07 : 0.1)) + 4;
    if (i === 0) g.moveTo(X(u), y);
    else g.lineTo(X(u), y);
  }
  g.stroke();
  g.restore();
  if (overgrown) {
    // птеригий — плёнка кутикулы, наросшая на пластину
    const rnd = mulberry(9);
    g.fillStyle = 'rgba(250,236,230,0.6)';
    g.beginPath();
    g.moveTo(X(-0.05), Y(-0.05));
    for (let i = 0; i <= 40; i++) {
      const u = -0.05 + (1.1 * i) / 40;
      const v = 0.1 + 0.05 * Math.sin(u * 13 + 1) + rnd() * 0.035 + 0.06 * (1 - Math.pow(2 * u - 1, 2));
      g.lineTo(X(u), Y(v));
    }
    g.lineTo(X(1.05), Y(-0.05));
    g.closePath();
    g.fill();
    // шероховатость
    for (let i = 0; i < 700; i++) {
      g.fillStyle = `rgba(255,255,255,${0.05 + rnd() * 0.1})`;
      g.fillRect(rnd() * S, Y(rnd() * 0.22), 2 + rnd() * 3, 1 + rnd() * 2);
    }
  }
}

function overlay(g, color) {
  g.fillStyle = color;
  g.fillRect(0, 0, S, S);
}

function edgeShade(g, alpha = 0.22, color = '0,0,0') {
  const grd = g.createLinearGradient(0, 0, S, 0);
  grd.addColorStop(0, `rgba(${color},${alpha})`);
  grd.addColorStop(0.18, `rgba(${color},0)`);
  grd.addColorStop(0.82, `rgba(${color},0)`);
  grd.addColorStop(1, `rgba(${color},${alpha})`);
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
}

const DRAW = {
  overgrown(g) {
    naturalBed(g, { overgrown: true });
  },
  natural(g) {
    naturalBed(g);
  },
  clean(g) {
    naturalBed(g);
    overlay(g, 'rgba(240,170,165,0.12)');
  },
  base(g) {
    naturalBed(g);
    vGradient(g, [
      [0, 'rgba(246,216,212,0.86)'],
      [1, 'rgba(244,214,210,0.8)'],
    ]);
  },
  cherry(g) {
    vGradient(g, [
      [0, '#6c0719'],
      [0.5, '#7e0b24'],
      [1, '#740a20'],
    ]);
    edgeShade(g, 0.28);
  },
  french(g) {
    naturalBed(g);
    overlay(g, 'rgba(245,214,210,0.9)');
    smilePath(g, 0.71, 0.13);
    g.fillStyle = '#fcf8f5';
    g.fill();
  },
  foil(g) {
    vGradient(g, [
      [0, '#efd0ca'],
      [1, '#ead0cb'],
    ]);
    edgeShade(g, 0.08, '120,60,60');
  },
  final(g) {
    DRAW.cherry(g);
  },

  // ——— дизайны для галереи ———
  'milky-french'(g) {
    DRAW.french(g);
  },
  'baby-boomer'(g) {
    vGradient(g, [
      [0, '#f1cfc8'],
      [0.35, '#f3d7d1'],
      [0.75, '#faf1ec'],
      [1, '#fdf9f6'],
    ]);
  },
  'pearl-chrome'(g) {
    const grd = g.createLinearGradient(0, S, S, 0);
    grd.addColorStop(0, '#f2e4ea');
    grd.addColorStop(0.35, '#ecdff0');
    grd.addColorStop(0.65, '#f6ead9');
    grd.addColorStop(1, '#f4e1e6');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
  },
  'cat-eye'(g) {
    fill(g, '#2a0a16');
    const grd = g.createLinearGradient(X(0.1), Y(0.2), X(0.9), Y(0.9));
    grd.addColorStop(0.3, 'rgba(120,40,70,0)');
    grd.addColorStop(0.47, 'rgba(255,190,210,0.75)');
    grd.addColorStop(0.53, 'rgba(255,220,230,0.9)');
    grd.addColorStop(0.7, 'rgba(120,40,70,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
  },
  aura(g) {
    fill(g, '#e9d2df');
    const grd = g.createRadialGradient(X(0.5), Y(0.5), 0, X(0.5), Y(0.5), S * 0.42);
    grd.addColorStop(0, '#d8366b');
    grd.addColorStop(0.35, 'rgba(226,96,140,0.8)');
    grd.addColorStop(1, 'rgba(233,210,223,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
  },
  'line-art'(g) {
    fill(g, '#f3e5df');
    g.strokeStyle = '#1b1215';
    g.lineCap = 'round';
    g.lineWidth = 9;
    g.beginPath();
    g.moveTo(X(0.2), Y(0.15));
    g.bezierCurveTo(X(0.9), Y(0.3), X(0.1), Y(0.55), X(0.65), Y(0.75));
    g.bezierCurveTo(X(0.85), Y(0.82), X(0.6), Y(0.95), X(0.45), Y(1.05));
    g.stroke();
    g.lineWidth = 6;
    g.beginPath();
    g.arc(X(0.66), Y(0.42), S * 0.06, 0, Math.PI * 2);
    g.stroke();
  },
  'red-french'(g) {
    vGradient(g, [
      [0, '#f0cbc3'],
      [1, '#efd2cb'],
    ]);
    smilePath(g, 0.72, 0.12);
    g.fillStyle = '#9a0c26';
    g.fill();
  },
  tortoise(g) {
    fill(g, '#c9883a');
    const rnd = mulberry(21);
    for (let i = 0; i < 26; i++) {
      const x = X(rnd());
      const y = Y(rnd());
      const r = S * (0.03 + rnd() * 0.08);
      const grd = g.createRadialGradient(x, y, 0, x, y, r);
      grd.addColorStop(0, 'rgba(60,24,8,0.95)');
      grd.addColorStop(0.6, 'rgba(90,40,10,0.6)');
      grd.addColorStop(1, 'rgba(120,60,20,0)');
      g.fillStyle = grd;
      g.beginPath();
      g.ellipse(x, y, r * 1.3, r, rnd() * 3, 0, Math.PI * 2);
      g.fill();
    }
    edgeShade(g, 0.2);
  },
  'silver-chrome'(g) {
    vGradient(g, [
      [0, '#cfd0d6'],
      [0.5, '#f4f4f7'],
      [1, '#c6c7cd'],
    ]);
  },
  crystals(g) {
    DRAW.foil(g);
  },
  'gold-foil'(g) {
    DRAW.foil(g);
  },
  'wine-chrome'(g) {
    vGradient(g, [
      [0, '#3c0a1c'],
      [0.5, '#5a1230'],
      [1, '#3a0918'],
    ]);
  },
  'nude-gloss'(g) {
    vGradient(g, [
      [0, '#d9a08b'],
      [1, '#d39985'],
    ]);
    edgeShade(g, 0.12);
  },
};

// Декали (золото поверх покрытия): альфа-маски
const DECAL = {
  foil(g) {
    const rnd = mulberry(5);
    g.fillStyle = '#fff';
    for (let i = 0; i < 34; i++) {
      // полоса по диагонали
      const t = rnd();
      const cx = X(0.15 + t * 0.75 + (rnd() - 0.5) * 0.3);
      const cy = Y(0.3 + t * 0.55 + (rnd() - 0.5) * 0.25);
      const r = S * (0.012 + Math.pow(rnd(), 2) * 0.06);
      g.beginPath();
      const n = 6 + Math.floor(rnd() * 4);
      for (let k = 0; k < n; k++) {
        const a = (k / n) * Math.PI * 2;
        const rr = r * (0.55 + rnd() * 0.6);
        const x = cx + Math.cos(a) * rr;
        const y = cy + Math.sin(a) * rr;
        if (k === 0) g.moveTo(x, y);
        else g.lineTo(x, y);
      }
      g.closePath();
      g.fill();
    }
  },
  line(g) {
    g.strokeStyle = '#fff';
    g.lineWidth = 14;
    g.lineCap = 'round';
    g.beginPath();
    for (let i = 0; i <= 64; i++) {
      const u = i / 64;
      const y = Y(smile(u, 0.72, 0.13));
      if (i === 0) g.moveTo(X(u), y);
      else g.lineTo(X(u), y);
    }
    g.stroke();
  },
};

export function designTexture(name) {
  const key = 'd:' + name;
  if (cache.has(key)) return cache.get(key);
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  (DRAW[name] || DRAW.natural)(g);
  const t = toTexture(c);
  cache.set(key, t);
  return t;
}

export function forgetDesign(name) {
  const t = cache.get('d:' + name);
  if (t) {
    t.dispose();
    cache.delete('d:' + name);
  }
}

export function decalTexture(name) {
  if (!name) return null;
  const key = 'a:' + name;
  if (cache.has(key)) return cache.get(key);
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, S, S);
  DECAL[name](g);
  const t = toTexture(c, { srgb: false });
  cache.set(key, t);
  return t;
}

// Параметры материала для каждого дизайна
export const LOOK = {
  overgrown: { roughness: 0.55, clearcoat: 0.1, metalness: 0, iridescence: 0, shape: 0, length: 1.58 },
  natural: { roughness: 0.42, clearcoat: 0.25, metalness: 0, iridescence: 0, shape: 1, length: 1.76 },
  clean: { roughness: 0.32, clearcoat: 0.4, metalness: 0, iridescence: 0, shape: 1, length: 1.76 },
  base: { roughness: 0.08, clearcoat: 1, metalness: 0, iridescence: 0, shape: 1, length: 1.76 },
  cherry: { roughness: 0.07, clearcoat: 1, metalness: 0, iridescence: 0, shape: 1, length: 1.76 },
  french: { roughness: 0.07, clearcoat: 1, metalness: 0, iridescence: 0, shape: 1, length: 1.76 },
  foil: { roughness: 0.08, clearcoat: 1, metalness: 0, iridescence: 0, shape: 1, length: 1.76, decal: 'foil', gems: 3 },
  final: { roughness: 0.05, clearcoat: 1, metalness: 0, iridescence: 0, shape: 1, length: 1.76, decal: 'line' },

  'milky-french': { roughness: 0.06, clearcoat: 1, shape: 0.35, length: 1.5 },
  'baby-boomer': { roughness: 0.06, clearcoat: 1, shape: 0.0, length: 1.55 },
  'pearl-chrome': { roughness: 0.12, clearcoat: 1, metalness: 0.75, iridescence: 1, shape: 1, length: 1.76 },
  'cat-eye': { roughness: 0.18, clearcoat: 1, metalness: 0.35, iridescence: 0.4, shape: 1, length: 1.7 },
  aura: { roughness: 0.07, clearcoat: 1, shape: 0.6, length: 1.55 },
  'line-art': { roughness: 0.4, clearcoat: 0.2, shape: 0.2, length: 1.45 },
  'red-french': { roughness: 0.06, clearcoat: 1, shape: 1, length: 1.65 },
  tortoise: { roughness: 0.06, clearcoat: 1, shape: 0.5, length: 1.55 },
  'silver-chrome': { roughness: 0.04, clearcoat: 1, metalness: 1, shape: 1, length: 1.7 },
  crystals: { roughness: 0.06, clearcoat: 1, shape: 0.3, length: 1.5, gems: 5 },
  'gold-foil': { roughness: 0.07, clearcoat: 1, shape: 0.8, length: 1.6, decal: 'foil' },
  'wine-chrome': { roughness: 0.1, clearcoat: 1, metalness: 0.6, iridescence: 0.6, shape: 1, length: 1.76 },
  'nude-gloss': { roughness: 0.06, clearcoat: 1, shape: 0.15, length: 1.5 },
};

export const DESIGN_NAMES = Object.keys(LOOK);

export function lookOf(name) {
  return { roughness: 0.1, clearcoat: 1, metalness: 0, iridescence: 0, shape: 1, length: 1.76, decal: null, gems: 0, ...(LOOK[name] || {}) };
}

