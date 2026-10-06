import * as THREE from 'three';

export const FONTS = {
  display: '"Bricolage Grotesque", "Arial Narrow", system-ui, sans-serif',
  body: 'Geist, "Segoe UI", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, Consolas, monospace',
  serif: '"Instrument Serif", Georgia, serif',
};

export function canvasTexture(canvas, { srgb = true, mips = true, aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.generateMipmaps = mips;
  t.minFilter = mips ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

function roundRectPath(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

/**
 * Giant word for the hero: red channel = outline, green channel = fill.
 * The shader decides how to colour them (outline always, fill only under the cursor light).
 */
export function wordTexture(word, { width = 4096, height = 1024 } = {}) {
  const c = document.createElement('canvas');
  c.width = width;
  c.height = height;
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, width, height);
  let size = height * 0.86;
  g.font = `800 ${size}px ${FONTS.display}`;
  const m = g.measureText(word);
  const fit = (width * 0.96) / m.width;
  size *= Math.min(1, fit);
  g.font = `800 ${size}px ${FONTS.display}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.globalCompositeOperation = 'lighter';
  g.fillStyle = '#00ff00';
  g.fillText(word, width / 2, height * 0.54);
  g.lineWidth = Math.max(2, size * 0.006);
  g.strokeStyle = '#ff0000';
  g.strokeText(word, width / 2, height * 0.54);
  const metrics = g.measureText(word);
  return { canvas: c, texture: canvasTexture(c, { srgb: false }), textWidth: metrics.width / width };
}

/** Keyword chip: glass pill with mono text. Returns texture and aspect. */
export function chipTexture(label, { accent = false } = {}) {
  const h = 96;
  const c = document.createElement('canvas');
  const g = c.getContext('2d');
  g.font = `500 ${h * 0.4}px ${FONTS.mono}`;
  const tw = g.measureText(label).width;
  const w = Math.ceil(tw + h * 0.9 + (accent ? h * 0.32 : 0));
  c.width = w + 8;
  c.height = h + 8;
  g.translate(4, 4);
  roundRectPath(g, 0, 0, w, h, h / 2);
  const grad = g.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, accent ? 'rgba(255,128,48,0.32)' : 'rgba(120,140,220,0.24)');
  grad.addColorStop(1, accent ? 'rgba(255,90,20,0.14)' : 'rgba(40,52,100,0.22)');
  g.fillStyle = grad;
  g.fill();
  g.lineWidth = 2.5;
  g.strokeStyle = accent ? 'rgba(255,170,110,0.75)' : 'rgba(170,190,255,0.45)';
  g.stroke();
  let x = h * 0.45;
  if (accent) {
    g.fillStyle = '#ff8a3d';
    g.beginPath();
    g.arc(x + h * 0.08, h / 2, h * 0.09, 0, Math.PI * 2);
    g.fill();
    x += h * 0.32;
  }
  g.font = `500 ${h * 0.4}px ${FONTS.mono}`;
  g.textBaseline = 'middle';
  g.fillStyle = accent ? '#ffe2c8' : '#dfe6ff';
  g.fillText(label, x, h / 2 + 2);
  return { texture: canvasTexture(c), aspect: c.width / c.height };
}

/** Long strip of text for the 3D ring. */
export function ringTexture(items, { height = 256, sep = '✦', font = FONTS.display, weight = 700, color = '#ffffff', sepColor = '#ff7a2a' } = {}) {
  const c = document.createElement('canvas');
  const g = c.getContext('2d');
  const size = height * 0.62;
  g.font = `${weight} ${size}px ${font}`;
  const gap = size * 0.55;
  const sepW = g.measureText(sep).width;
  let total = 0;
  for (const it of items) total += g.measureText(it).width + gap * 2 + sepW;
  const W = Math.min(16384, Math.ceil(total));
  c.width = W;
  c.height = height;
  g.font = `${weight} ${size}px ${font}`;
  g.textBaseline = 'middle';
  let x = 0;
  for (const it of items) {
    g.fillStyle = color;
    g.fillText(it, x, height * 0.54);
    x += g.measureText(it).width + gap;
    g.fillStyle = sepColor;
    g.fillText(sep, x, height * 0.52);
    x += sepW + gap;
  }
  const t = canvasTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  return { texture: t, aspect: W / height };
}

/** Small label (instance names, etc.) */
export function labelTexture(text, { size = 64, color = '#e8edff', font = FONTS.mono, weight = 600, pad = 0.6, bg = null, border = null } = {}) {
  const c = document.createElement('canvas');
  const g = c.getContext('2d');
  g.font = `${weight} ${size}px ${font}`;
  const tw = g.measureText(text).width;
  const w = Math.ceil(tw + size * pad * 2);
  const h = Math.ceil(size * 1.7);
  c.width = w + 6;
  c.height = h + 6;
  g.translate(3, 3);
  if (bg) {
    roundRectPath(g, 0, 0, w, h, h * 0.3);
    g.fillStyle = bg;
    g.fill();
    if (border) {
      g.lineWidth = 2;
      g.strokeStyle = border;
      g.stroke();
    }
  }
  g.font = `${weight} ${size}px ${font}`;
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  g.fillStyle = color;
  g.fillText(text, w / 2, h / 2 + size * 0.04);
  return { texture: canvasTexture(c), aspect: c.width / c.height };
}

export { roundRectPath };
