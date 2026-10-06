import { gsap } from 'gsap';
import { projectFox, FOX_COLORS } from '../gl/fox.js';
import { $, env } from '../core/env.js';

// Preloader: the fox is drawn edge by edge while fonts load and shaders compile,
// a SQL line types itself, the counter runs to 100. Then the facets fill with colour
// and two shutters open onto the page.
export function createPreloader() {
  const root = $('#preloader');
  if (!root) return { set() {}, finish: async () => {} };
  const svg = $('.preloader__fox', root);
  const bar = $('.preloader__bar span', root);
  const count = $('.preloader__count', root);
  const typed = $('.preloader__typed', root);
  const status = $('.preloader__status', root);
  const text = typed?.dataset.text || '';
  const NS = 'http://www.w3.org/2000/svg';

  // fox facets (filled later) + unique edges (drawn now)
  const polys = projectFox({ ry: -16, rx: 8 });
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
  const pad = 0.08;
  svg.setAttribute('viewBox', `${minX - pad} ${minY - pad} ${maxX - minX + pad * 2} ${maxY - minY + pad * 2}`);
  const fills = [];
  const L = [-0.45, 0.65, 0.7];
  const ll = Math.hypot(...L);
  for (const p of polys) {
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', `M${p.pts.map(([x, y]) => `${x.toFixed(4)} ${y.toFixed(4)}`).join('L')}Z`);
    const d = Math.max(0, (p.n[0] * L[0] + p.n[1] * L[1] + p.n[2] * L[2]) / ll);
    const dark = p.role === 'ink' || p.role === 'eye' || p.role === 'inner';
    path.setAttribute('class', 'fill');
    path.style.fill = shade(FOX_COLORS[p.role], dark ? 0.85 + d * 0.3 : 0.62 + d * 0.48);
    svg.appendChild(path);
    fills.push(path);
  }
  const seen = new Set();
  const edges = [];
  for (const p of polys) {
    for (let i = 0; i < 3; i++) {
      const a = p.pts[i];
      const b = p.pts[(i + 1) % 3];
      const k1 = `${a[0].toFixed(3)},${a[1].toFixed(3)}|${b[0].toFixed(3)},${b[1].toFixed(3)}`;
      const k2 = `${b[0].toFixed(3)},${b[1].toFixed(3)}|${a[0].toFixed(3)},${a[1].toFixed(3)}`;
      if (seen.has(k1) || seen.has(k2)) continue;
      seen.add(k1);
      edges.push([a, b]);
    }
  }
  // draw order: from the nose outwards
  edges.sort((e, f) => Math.hypot(e[0][0], e[0][1] - 0.7) - Math.hypot(f[0][0], f[0][1] - 0.7));
  const lines = edges.map(([a, b]) => {
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', `M${a[0].toFixed(4)} ${a[1].toFixed(4)}L${b[0].toFixed(4)} ${b[1].toFixed(4)}`);
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path._len = len;
    svg.appendChild(path);
    return path;
  });

  const state = { p: 0, shown: 0 };
  const messages = ['Connecting to workbench', 'Loading fonts', 'Compiling shaders', 'Warming the cache', 'Ready'];

  const render = () => {
    const v = state.shown;
    bar.style.transform = `scaleX(${v})`;
    count.textContent = String(Math.round(v * 100)).padStart(3, '0');
    const n = Math.floor(v * lines.length);
    for (let i = 0; i < lines.length; i++) {
      const l = lines[i];
      const k = i < n ? 1 : i === n ? (v * lines.length) % 1 : 0;
      l.style.strokeDashoffset = `${l._len * (1 - k)}`;
    }
    typed.textContent = text.slice(0, Math.round(v * text.length));
    status.textContent = messages[Math.min(messages.length - 1, Math.floor(v * (messages.length - 1) + 0.0001))];
  };

  const ticker = () => {
    state.shown += (state.p - state.shown) * 0.08 + 0.0015;
    state.shown = Math.min(state.shown, state.p);
    render();
  };
  gsap.ticker.add(ticker);

  return {
    set(p) {
      state.p = Math.max(state.p, Math.min(1, p));
    },
    async finish() {
      state.p = 1;
      await new Promise((res) => {
        const check = () => (state.shown > 0.995 ? res() : requestAnimationFrame(check));
        check();
      });
      state.shown = 1;
      render();
      gsap.ticker.remove(ticker);
      if (env.reduced) {
        root.classList.add('is-done');
        return;
      }
      const tl = gsap.timeline();
      tl.to(fills, { opacity: 1, duration: 0.5, stagger: { each: 0.004, from: 'random' }, ease: 'power2.out' }, 0);
      tl.to(lines, { opacity: 0, duration: 0.4 }, 0.25);
      tl.to(svg, { scale: 1.08, duration: 0.9, ease: 'power3.inOut' }, 0.1);
      tl.to('.preloader__inner', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, 0.75);
      tl.set(root, { background: 'transparent' }, 1.05);
      tl.to('.preloader__shutter--top', { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, 1.05);
      tl.to('.preloader__shutter--bottom', { yPercent: 100, duration: 1.1, ease: 'expo.inOut' }, 1.05);
      await new Promise((res) => tl.call(res, null, 1.25));
      tl.call(() => root.classList.add('is-done'), null, 2.2);
    },
  };
}

function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.min(255, Math.round(v * k)));
  return `rgb(${c.join(',')})`;
}
