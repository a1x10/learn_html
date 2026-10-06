// Target shapes for the fox shards. Every formation is an array of vec4 per shard:
// xyz — position of the shard centre, w — shard size (-1 = keep the facet's own size).
// "Local" shapes are drawn in a ±1.5 box and placed on the page by an anchor;
// "view" shapes are in world space around the camera target.

import { CAM_Z } from './world.js';

export const FORM = {
  FOX: 0,
  CLOUD: 1,
  HALO: 2,
  COPY: 3,
  HISTORY: 4,
  FORMAT: 5,
  GRID: 6,
  SPHERE: 7,
  GALAXY: 8,
  SCATTER: 9,
  SNAP: 10,
};
export const FORM_COUNT = 11;

function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ——— 2D path helpers ———
const seg = (a, b) => ({ pts: [a, b], closed: false });
function circlePath(cx, cy, r, from = 0, to = Math.PI * 2, n = 64) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = from + ((to - from) * i) / n;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return { pts, closed: false };
}
function roundRect(cx, cy, w, h, r) {
  const pts = [];
  const corners = [
    [cx + w / 2 - r, cy + h / 2 - r, 0],
    [cx - w / 2 + r, cy + h / 2 - r, Math.PI / 2],
    [cx - w / 2 + r, cy - h / 2 + r, Math.PI],
    [cx + w / 2 - r, cy - h / 2 + r, (Math.PI * 3) / 2],
  ];
  for (const [x, y, a0] of corners) {
    for (let i = 0; i <= 6; i++) {
      const a = a0 + (Math.PI / 2) * (i / 6);
      pts.push([x + Math.cos(a) * r, y + Math.sin(a) * r]);
    }
  }
  return { pts, closed: true };
}
function pathLength(p) {
  let L = 0;
  const n = p.pts.length;
  for (let i = 1; i < n + (p.closed ? 1 : 0); i++) {
    const a = p.pts[(i - 1) % n];
    const b = p.pts[i % n];
    L += Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
  return L;
}
function pointAt(p, d) {
  const n = p.pts.length;
  for (let i = 1; i < n + (p.closed ? 1 : 0); i++) {
    const a = p.pts[(i - 1) % n];
    const b = p.pts[i % n];
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (d <= l || i === n - (p.closed ? 0 : 1)) {
      const k = l > 0 ? Math.min(1, d / l) : 0;
      return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
    }
    d -= l;
  }
  return p.pts[n - 1];
}

/**
 * Spread `count` points over paths (by length) and filled boxes (by area weight).
 * items: [{path, z, weight?}] or [{box:[cx,cy,w,h], z, weight}]
 */
function distribute(items, count, rnd, { jitter = 0.03, zJitter = 0.05 } = {}) {
  const weights = items.map((it) => (it.path ? pathLength(it.path) : it.box[2] * it.box[3] * 6) * (it.weight ?? 1));
  const total = weights.reduce((a, b) => a + b, 0);
  const out = [];
  let acc = 0;
  items.forEach((it, idx) => {
    const n = idx === items.length - 1 ? count - out.length : Math.round((weights[idx] / total) * count);
    acc += n;
    for (let i = 0; i < n; i++) {
      let x;
      let y;
      if (it.path) {
        const L = pathLength(it.path);
        [x, y] = pointAt(it.path, ((i + rnd() * 0.6) / n) * L);
      } else {
        const [cx, cy, w, h] = it.box;
        x = cx + (rnd() - 0.5) * w;
        y = cy + (rnd() - 0.5) * h;
      }
      out.push([x + (rnd() - 0.5) * jitter, y + (rnd() - 0.5) * jitter, (it.z ?? 0) + (rnd() - 0.5) * zJitter]);
    }
  });
  return out.slice(0, count);
}

function shuffle(arr, rnd) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * @param {Float32Array} centers  fox-space centroids (N*3)
 * @returns {Float32Array[]} one vec4 array per formation
 */
export function buildFormations(centers, N) {
  const forms = [];
  const rnd = rng(1234);
  const put = (list, sizeFn) => {
    const a = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) {
      const p = list[i];
      a[i * 4] = p[0];
      a[i * 4 + 1] = p[1];
      a[i * 4 + 2] = p[2];
      a[i * 4 + 3] = sizeFn(i);
    }
    return a;
  };

  // FOX — the facets in place, native size
  {
    const list = [];
    for (let i = 0; i < N; i++) list.push([centers[i * 3], centers[i * 3 + 1], centers[i * 3 + 2]]);
    forms[FORM.FOX] = put(list, () => -1);
  }

  // CLOUD — the fox blown apart: each shard flies away from the head, the cloud fills the view
  {
    const list = [];
    for (let i = 0; i < N; i++) {
      const cx = centers[i * 3];
      const cy = centers[i * 3 + 1];
      const cz = centers[i * 3 + 2];
      let dx = cx + (rnd() - 0.5) * 1.2;
      let dy = cy + (rnd() - 0.5) * 1.2;
      let dz = cz + (rnd() - 0.2) * 1.6;
      const l = Math.hypot(dx, dy, dz) || 1;
      dx /= l;
      dy /= l;
      dz /= l;
      const d = 3.2 + Math.pow(rnd(), 0.8) * 9;
      list.push([dx * d * 1.45, dy * d * 0.85, Math.max(-16, Math.min(CAM_Z - 5, dz * d * 0.8 - 4))]);
    }
    forms[FORM.CLOUD] = put(list, () => 0.04 + Math.pow(rnd(), 2.5) * 0.17);
  }

  // HALO — a slow ring of shards that frames the product window
  {
    const list = [];
    for (let i = 0; i < N; i++) {
      const a = rnd() * Math.PI * 2;
      const band = (rnd() - 0.5) * 0.9 + (rnd() - 0.5) * 0.5;
      const rx = 7.2 + band;
      const ry = 3.9 + band * 0.6;
      list.push([Math.cos(a) * rx, Math.sin(a) * ry, -3.5 + (rnd() - 0.5) * 1.2 + Math.sin(a * 2) * 0.6]);
    }
    forms[FORM.HALO] = put(list, () => 0.05 + rnd() * 0.1);
  }

  const icon = (items, opts) => shuffle(distribute(items, N, rnd, opts), rnd);
  const iconSize = () => 0.05 + rnd() * 0.035;

  // COPY — two sheets, the front one with lines of text
  forms[FORM.COPY] = put(
    icon([
      { path: roundRect(-0.32, 0.3, 1.45, 1.85, 0.18), z: -0.35 },
      { path: roundRect(0.3, -0.28, 1.45, 1.85, 0.18), z: 0.3, weight: 1.15 },
      { path: seg([-0.1, 0.22], [0.72, 0.22]), z: 0.3 },
      { path: seg([-0.1, -0.08], [0.72, -0.08]), z: 0.3 },
      { path: seg([-0.1, -0.38], [0.5, -0.38]), z: 0.3 },
      { path: seg([-0.1, -0.68], [0.62, -0.68]), z: 0.3 },
    ]),
    iconSize
  );

  // HISTORY — clock with a counter-clockwise arrow around it
  {
    const arc = circlePath(0, 0, 1.25, Math.PI * 0.62, Math.PI * 2.42, 90);
    const start = arc.pts[0];
    const tip = [start[0] - 0.02, start[1]];
    const items = [
      { path: arc, z: 0 },
      { path: seg(tip, [tip[0] - 0.36, tip[1] + 0.05]), z: 0 },
      { path: seg(tip, [tip[0] + 0.06, tip[1] + 0.36]), z: 0 },
      { path: circlePath(0, 0, 0.88, 0, Math.PI * 2, 64), z: 0.12, weight: 0.8 },
      { path: seg([0, 0], [0, 0.6]), z: 0.25, weight: 1.6 },
      { path: seg([0, 0], [0.45, -0.22]), z: 0.25, weight: 1.6 },
    ];
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      items.push({ path: seg([Math.cos(a) * 0.7, Math.sin(a) * 0.7], [Math.cos(a) * 0.8, Math.sin(a) * 0.8]), z: 0.12, weight: 1.4 });
    }
    forms[FORM.HISTORY] = put(icon(items), iconSize);
  }

  // FORMAT — tidy, indented lines of code
  {
    const lines = [
      [0, 1.3],
      [1, 1.0],
      [1, 1.25],
      [0, 0.7],
      [1, 1.1],
      [2, 0.75],
      [0, 0.95],
    ];
    const items = [];
    lines.forEach(([ind, len], i) => {
      const y = 0.95 - i * 0.32;
      const x0 = -1.15 + ind * 0.32;
      items.push({ box: [x0 + len / 2, y, len, 0.1], z: 0.1 * (ind - 1) });
    });
    items.push({ path: seg([-1.02, 0.7], [-1.02, -0.85]), z: -0.1, weight: 0.5 });
    items.push({ path: seg([-0.7, 0.05], [-0.7, -0.45]), z: -0.1, weight: 0.5 });
    forms[FORM.FORMAT] = put(icon(items, { jitter: 0.02 }), iconSize);
  }

  // GRID — a spreadsheet: header row, columns and a few highlighted cells
  {
    const items = [];
    const W = 2.6;
    const H = 1.9;
    const cols = 4;
    const rows = 5;
    items.push({ path: roundRect(0, 0, W, H, 0.08), z: 0 });
    for (let c = 1; c < cols; c++) {
      const x = -W / 2 + (W / cols) * c;
      items.push({ path: seg([x, H / 2], [x, -H / 2]), z: 0, weight: 0.8 });
    }
    for (let r = 1; r < rows; r++) {
      const y = H / 2 - (H / rows) * r;
      items.push({ path: seg([-W / 2, y], [W / 2, y]), z: 0, weight: 0.8 });
    }
    items.push({ box: [0, H / 2 - H / rows / 2, W, H / rows * 0.7], z: 0.05, weight: 0.5 });
    items.push({ box: [-W / 2 + W / cols * 1.5, H / 2 - (H / rows) * 2.5, W / cols * 0.7, H / rows * 0.55], z: 0.35, weight: 0.6 });
    items.push({ box: [-W / 2 + W / cols * 2.5, H / 2 - (H / rows) * 3.5, W / cols * 0.7, H / rows * 0.55], z: 0.55, weight: 0.6 });
    forms[FORM.GRID] = put(icon(items, { jitter: 0.02 }), iconSize);
  }

  // SPHERE — two shells around the AI orb
  {
    const list = [];
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = ga * i;
      const R = i % 3 === 0 ? 1.55 + rnd() * 0.25 : 1.12 + rnd() * 0.06;
      list.push([Math.cos(th) * r * R, y * R, Math.sin(th) * r * R]);
    }
    forms[FORM.SPHERE] = put(shuffle(list, rnd), () => 0.035 + rnd() * 0.04);
  }

  // GALAXY — spiral disc around the instance hub
  {
    const list = [];
    for (let i = 0; i < N; i++) {
      const arm = i % 3;
      const r = 0.45 + Math.pow(rnd(), 0.7) * 1.55;
      const a = r * 2.6 + (arm * Math.PI * 2) / 3 + (rnd() - 0.5) * 0.5;
      const h = (rnd() - 0.5) * 0.08 * (2.2 - r);
      list.push([Math.cos(a) * r, h, Math.sin(a) * r * 0.9]);
    }
    forms[FORM.GALAXY] = put(list, () => 0.018 + rnd() * 0.03);
  }

  // SCATTER — behind the camera: the shards rush past the viewer and vanish
  {
    const list = [];
    for (let i = 0; i < N; i++) {
      const a = rnd() * Math.PI * 2;
      const r = 1.5 + rnd() * 7;
      list.push([Math.cos(a) * r * 1.5, Math.sin(a) * r, CAM_Z + 1.5 + rnd() * 10]);
    }
    forms[FORM.SCATTER] = put(list, () => 0.12 + rnd() * 0.2);
  }

  forms[FORM.SNAP] = new Float32Array(N * 4);
  return forms;
}
