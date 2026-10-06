// Generates the flat low-poly fox logo (assets/img/mark.svg, assets/favicon.svg)
// from the same geometry as the 3D fox, so the logo and the 3D model always match.
import fs from 'node:fs';
import path from 'node:path';
import { projectFox, FOX_COLORS } from '../src/gl/fox.js';

export function foxMarkSVG({ ry = -16, rx = 8, light = [-0.45, 0.65, 0.7], pad = 0.06, bg = null } = {}) {
  const ll = Math.hypot(...light);
  const L = light.map((v) => v / ll);
  const polys = projectFox({ ry, rx }).map((p) => {
    const d = Math.max(0, p.n[0] * L[0] + p.n[1] * L[1] + p.n[2] * L[2]);
    const dark = p.role === 'ink' || p.role === 'eye' || p.role === 'inner';
    return { pts: p.pts, color: shade(FOX_COLORS[p.role], dark ? 0.85 + d * 0.3 : 0.62 + d * 0.48) };
  });
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const p of polys)
    for (const [x, y] of p.pts) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  const size = Math.max(maxX - minX, maxY - minY) * (1 + pad * 2);
  const ox = (minX + maxX) / 2 - size / 2;
  const oy = (minY + maxY) / 2 - size / 2;
  const f = (n) => (+n.toFixed(4)).toString();
  const body = polys
    .map((p) => `<path d="M${p.pts.map(([x, y]) => `${f(x)} ${f(y)}`).join('L')}Z" fill="${p.color}" stroke="${p.color}" stroke-width="0.012" stroke-linejoin="round"/>`)
    .join('');
  const bgRect = bg ? `<rect x="${f(ox)}" y="${f(oy)}" width="${f(size)}" height="${f(size)}" rx="${f(size * 0.22)}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(ox)} ${f(oy)} ${f(size)} ${f(size)}">${bgRect}${body}</svg>`;
}

function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.min(255, Math.round(v * k)));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}

export function writeMarks(root) {
  fs.mkdirSync(path.join(root, 'assets/img'), { recursive: true });
  fs.writeFileSync(path.join(root, 'assets/img/mark.svg'), foxMarkSVG());
  fs.writeFileSync(path.join(root, 'assets/favicon.svg'), foxMarkSVG({ bg: '#0a0e1c', pad: 0.12 }));
}
