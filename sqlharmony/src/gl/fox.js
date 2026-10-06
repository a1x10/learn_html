// Low-poly fox head (the SQL Harmony mascot) built from named points.
// Right half is described by hand; the left half is mirrored. Every facet keeps
// a flat colour, like a folded-paper or lacquered-ceramic figurine.
// x — right, y — up, z — towards the viewer.

const P = {
  // centre line
  noseTop: [0, -0.88, 1.52],
  noseBot: [0, -1.04, 1.44],
  lip: [0, -1.12, 1.2],
  chin: [0, -1.18, 0.82],
  throat: [0, -1.02, -0.1],
  bridge: [0, -0.5, 1.2],
  stop: [0, -0.06, 0.86],
  fore: [0, 0.36, 0.66],
  crownF: [0, 0.58, 0.36],
  crownB: [0, 0.66, -0.2],
  backT: [0, 0.4, -0.7],
  backB: [0, -0.32, -0.76],

  // right side
  noseS: [0.15, -0.97, 1.4],
  snoutS: [0.2, -0.66, 1.16],
  lipS: [0.24, -1.08, 1.08],
  mouth: [0.4, -1.04, 0.8],
  jaw: [0.46, -1.08, 0.4],
  snoutM: [0.4, -0.56, 0.94],
  eyeI: [0.19, -0.08, 0.86],
  eyeB: [0.38, -0.2, 0.78],
  eyeO: [0.6, 0.06, 0.6],
  eyeT: [0.38, 0.1, 0.76],
  brow: [0.6, 0.3, 0.5],
  cheek: [0.7, -0.36, 0.6],
  fluffU: [0.96, -0.06, 0.28],
  fluff: [1.28, -0.5, 0.12],
  fluffL: [0.84, -0.86, 0.3],
  earFI: [0.22, 0.6, 0.44],
  earFO: [0.86, 0.36, 0.26],
  earT: [1.02, 1.6, 0.0],
  earB: [0.56, 0.56, -0.18],
  temple: [0.94, 0.16, -0.12],
  sideB: [0.68, -0.12, -0.56],
  sideL: [0.58, -0.74, -0.36],
};

// inner-ear inset: three points pulled towards the middle of the ear face and pushed back
(() => {
  const a = P.earFI;
  const b = P.earFO;
  const t = P.earT;
  const c = [(a[0] + b[0] + t[0]) / 3, (a[1] + b[1] + t[1]) / 3, (a[2] + b[2] + t[2]) / 3];
  const pull = (p, k, dz) => [p[0] + (c[0] - p[0]) * k, p[1] + (c[1] - p[1]) * k, p[2] + (c[2] - p[2]) * k + dz];
  P.earIA = pull(a, 0.36, -0.07);
  P.earIB = pull(b, 0.36, -0.07);
  P.earIT = pull(t, 0.3, -0.05);
  // dark ear tip: a band across the upper part of the ear
  const lerp = (p, q, k) => [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k];
  P.tipI = lerp(P.earFI, P.earT, 0.8);
  P.tipO = lerp(P.earFO, P.earT, 0.8);
  P.tipB = lerp(P.earB, P.earT, 0.8);
})();

// colour roles
const FUR = 'fur';
const FUR_D = 'furDark';
const CREAM = 'cream';
const INK = 'ink';
const EYE = 'eye';
const INNER = 'inner';

// [a, b, c, role]
const FACES = [
  // nose pad
  ['noseTop', 'noseS', 'noseBot', INK],
  ['noseTop', 'snoutS', 'noseS', INK],
  // snout top
  ['bridge', 'snoutS', 'noseTop', FUR],
  ['bridge', 'snoutM', 'snoutS', FUR],
  ['bridge', 'stop', 'eyeI', FUR],
  ['bridge', 'eyeI', 'snoutM', FUR],
  ['eyeI', 'eyeB', 'snoutM', FUR],
  ['snoutM', 'eyeB', 'cheek', FUR],
  ['eyeB', 'eyeO', 'cheek', FUR],
  // eye
  ['eyeI', 'eyeT', 'eyeB', EYE],
  ['eyeT', 'eyeO', 'eyeB', EYE],
  // brow and forehead
  ['stop', 'eyeT', 'eyeI', FUR],
  ['stop', 'fore', 'eyeT', FUR],
  ['fore', 'brow', 'eyeT', FUR],
  ['eyeT', 'brow', 'eyeO', FUR],
  ['fore', 'crownF', 'earFI', FUR],
  ['fore', 'earFI', 'brow', FUR],
  ['earFI', 'earFO', 'brow', FUR],
  ['brow', 'earFO', 'fluffU', FUR],
  ['brow', 'fluffU', 'eyeO', FUR],
  // cheeks and muzzle
  ['eyeO', 'fluffU', 'cheek', FUR],
  ['cheek', 'fluffU', 'fluff', CREAM],
  ['cheek', 'fluff', 'fluffL', CREAM],
  ['snoutM', 'cheek', 'mouth', CREAM],
  ['cheek', 'fluffL', 'mouth', CREAM],
  ['mouth', 'fluffL', 'jaw', CREAM],
  ['noseS', 'snoutS', 'lipS', CREAM],
  ['snoutS', 'snoutM', 'lipS', CREAM],
  ['snoutM', 'mouth', 'lipS', CREAM],
  ['noseBot', 'noseS', 'lipS', CREAM],
  ['noseBot', 'lipS', 'lip', CREAM],
  ['lip', 'lipS', 'mouth', CREAM],
  ['lip', 'mouth', 'chin', CREAM],
  ['chin', 'mouth', 'jaw', CREAM],
  // ear front: rim around a dark inset
  ['earFI', 'earFO', 'earIB', FUR],
  ['earFI', 'earIB', 'earIA', FUR],
  ['earFO', 'earT', 'earIT', FUR],
  ['earFO', 'earIT', 'earIB', FUR],
  ['earT', 'earFI', 'earIA', FUR],
  ['earT', 'earIA', 'earIT', FUR],
  ['earIA', 'earIB', 'earIT', INNER],
  // ear back with a dark tip
  ['earFO', 'earB', 'tipB', FUR_D],
  ['earFO', 'tipB', 'tipO', FUR_D],
  ['tipO', 'tipB', 'earT', INK],
  ['earB', 'earFI', 'tipI', FUR_D],
  ['earB', 'tipI', 'tipB', FUR_D],
  ['tipB', 'tipI', 'earT', INK],
  // top and back of the head
  ['crownF', 'earFI', 'earB', FUR],
  ['crownF', 'earB', 'crownB', FUR],
  ['crownB', 'earB', 'backT', FUR_D],
  ['backT', 'earB', 'sideB', FUR_D],
  ['earB', 'temple', 'sideB', FUR_D],
  ['earB', 'earFO', 'temple', FUR],
  ['earFO', 'fluffU', 'temple', FUR],
  ['temple', 'fluffU', 'fluff', FUR],
  ['temple', 'fluff', 'sideB', FUR_D],
  ['sideB', 'fluff', 'sideL', FUR_D],
  ['fluff', 'fluffL', 'sideL', CREAM],
  ['fluffL', 'jaw', 'sideL', CREAM],
  ['backT', 'sideB', 'backB', FUR_D],
  ['backB', 'sideB', 'sideL', FUR_D],
  ['backB', 'sideL', 'throat', FUR_D],
  ['sideL', 'jaw', 'throat', CREAM],
  ['jaw', 'chin', 'throat', CREAM],
];

export const FOX_COLORS = {
  fur: '#F26B1D',
  furDark: '#B8410F',
  cream: '#FFF0E0',
  ink: '#17131C',
  eye: '#0B0A10',
  inner: '#3A1D17',
};

function mulberry(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

// sRGB → linear (three.js works in linear space for vertex colours)
function toLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Returns the fox as a list of triangles: [{a, b, c, role, color}] with vec3 arrays,
 * centred and scaled so the head is `height` units tall.
 */
export function foxTriangles({ height = 2, palette = FOX_COLORS, seed = 7 } = {}) {
  const rnd = mulberry(seed);
  const tris = [];
  const mirror = (p) => [-p[0], p[1], p[2]];
  for (const [a, b, c, role] of FACES) {
    const pa = P[a];
    const pb = P[b];
    const pc = P[c];
    tris.push({ a: pa, b: pb, c: pc, role });
    tris.push({ a: mirror(pa), b: mirror(pc), c: mirror(pb), role });
  }

  // bounds → centre and normalise
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const t of tris) {
    for (const p of [t.a, t.b, t.c]) {
      minY = Math.min(minY, p[1]);
      maxY = Math.max(maxY, p[1]);
      minZ = Math.min(minZ, p[2]);
      maxZ = Math.max(maxZ, p[2]);
    }
  }
  const s = height / (maxY - minY);
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  const norm = (p) => [p[0] * s, (p[1] - cy) * s, (p[2] - cz) * s];

  return tris.map((t) => {
    const base = hexToRgb(palette[t.role]);
    // slight per-facet variation, like folded paper
    const j = t.role === 'fur' || t.role === 'furDark' ? 0.07 : t.role === 'cream' ? 0.035 : 0.02;
    const k = 1 + (rnd() * 2 - 1) * j;
    const color = base.map((v) => toLinear(Math.min(1, v * k)));
    return { a: norm(t.a), b: norm(t.b), c: norm(t.c), role: t.role, color };
  });
}

/** Splits every triangle into 4^levels smaller ones (they stay coplanar). */
export function subdivide(tris, levels = 1) {
  let out = tris;
  for (let l = 0; l < levels; l++) {
    const next = [];
    for (const t of out) {
      const m = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2, (p[2] + q[2]) / 2];
      const ab = m(t.a, t.b);
      const bc = m(t.b, t.c);
      const ca = m(t.c, t.a);
      next.push({ ...t, a: t.a, b: ab, c: ca });
      next.push({ ...t, a: ab, b: t.b, c: bc });
      next.push({ ...t, a: ca, b: bc, c: t.c });
      next.push({ ...t, a: ab, b: bc, c: ca });
    }
    out = next;
  }
  return out;
}

/** 2D outline (front view) of the fox, for the SVG mark / favicon / preloader. */
export function foxEdges2D(tris) {
  const key = (p) => `${p[0].toFixed(4)},${p[1].toFixed(4)},${p[2].toFixed(4)}`;
  const seen = new Set();
  const edges = [];
  for (const t of tris) {
    for (const [p, q] of [
      [t.a, t.b],
      [t.b, t.c],
      [t.c, t.a],
    ]) {
      const k1 = key(p) + '|' + key(q);
      const k2 = key(q) + '|' + key(p);
      if (seen.has(k1) || seen.has(k2)) continue;
      seen.add(k1);
      edges.push([p, q]);
    }
  }
  return edges;
}

/**
 * Orthographic projection of the fox for 2D marks: rotate (Y then X, degrees),
 * keep front-facing facets, sort back to front. y is flipped for SVG.
 */
export function projectFox({ ry = -16, rx = 8, height = 2 } = {}) {
  const tris = foxTriangles({ height });
  const cy = Math.cos((ry * Math.PI) / 180);
  const sy = Math.sin((ry * Math.PI) / 180);
  const cx = Math.cos((rx * Math.PI) / 180);
  const sx = Math.sin((rx * Math.PI) / 180);
  const rot = ([x, y, z]) => {
    const x1 = x * cy + z * sy;
    const z1 = -x * sy + z * cy;
    return [x1, y * cx - z1 * sx, y * sx + z1 * cx];
  };
  const out = [];
  for (const t of tris) {
    const a = rot(t.a);
    const b = rot(t.b);
    const c = rot(t.c);
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    let n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const nl = Math.hypot(n[0], n[1], n[2]) || 1;
    n = n.map((k) => k / nl);
    if (n[2] < 0) n = n.map((k) => -k);
    if (n[2] < 0.04) continue;
    out.push({ pts: [a, b, c].map((p) => [p[0], -p[1]]), z: (a[2] + b[2] + c[2]) / 3, n, role: t.role });
  }
  out.sort((p, q) => p.z - q.z);
  return out;
}
