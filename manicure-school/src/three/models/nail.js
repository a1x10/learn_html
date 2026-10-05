import * as THREE from 'three';
import * as M from '../materials.js';
import { designTexture, decalTexture, lookOf } from '../designs.js';
import { brilliantGeometry } from './gems.js';
import { weldNormals } from './bottle.js';

// Тренировочный палец с ногтевой пластиной.
// Пластина строится по сетке (u поперёк, v вдоль), поэтому форму свободного края
// можно плавно менять: 0 — мягкий квадрат, 1 — миндаль.

const NU = 36;
const NV = 64;
const W = 0.84; // ширина пластины
const K = 0.62; // поперечный изгиб (C-curve)
const R = 0.6; // радиус пальца
const FLAT = 0.8; // сплющенность пальца спереди-назад
export const CUTICLE_Y = -1.04; // где начинается пластина (у кутикулы)

const smooth = (a, b, x) => {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
  return t * t * (3 - 2 * t);
};

const uneven = (u) => 0.04 * Math.sin(u * 9.3 + 1.2) + 0.022 * Math.sin(u * 23.0 + 0.4) - 0.02;

function halfWidth(y, L, shape) {
  let base = (W / 2) * (1 + 0.035 * Math.min(y / L, 1));
  const rc = 0.21;
  if (y < rc) {
    const t = (rc - y) / rc;
    base *= Math.sqrt(Math.max(0, 1 - Math.pow(t, 2.2)));
  }
  const rq = 0.11;
  let sq = base;
  if (y > L - rq) {
    const d = Math.min((y - (L - rq)) / rq, 1);
    sq = base - rq + rq * Math.sqrt(Math.max(0, 1 - d * d));
  }
  const y0 = Math.max(L * 0.5, 0.98);
  let al = base;
  if (y > y0) {
    const d = Math.min((y - y0) / (L - y0), 1);
    al = base * Math.pow(Math.max(0, 1 - d * d), 0.6);
  }
  return sq + (al - sq) * shape;
}

// точка поверхности пластины (локальные координаты пластины)
function sample(u, v, p, out) {
  const Lu = p.length + uneven(u) * p.irregular;
  const y = v * Lu;
  const hw = halfWidth(y, Lu, p.shape);
  const x = (u - 0.5) * 2 * hw;
  const zc = -K * x * x;
  const zl = 0.035 * Math.sin(Math.PI * Math.min(y / 1.15, 1)) - (y > 1.05 ? 0.11 * (y - 1.05) ** 2 : 0);
  // у кутикулы и по бокам ложа пластина уходит под кожу
  const side = Math.abs(2 * u - 1);
  const sink = -0.05 * (1 - smooth(0, 0.3, y)) - 0.1 * smooth(0.7, 1.0, side) * (1 - smooth(1.0, 1.3, y));
  const T = 0.012 + 0.028 * smooth(0, 0.42, y);
  out.x = x;
  out.y = y;
  out.zb = zc + zl + sink;
  out.zt = out.zb + T;
  out.u = x / (W * 1.04) + 0.5;
  out.v = v;
  return out;
}

const V0 = 0.004;

class NailPlateGeometry extends THREE.BufferGeometry {
  constructor() {
    super();
    const nTop = (NU + 1) * (NV + 1);
    const nL = (NV + 1) * 2;
    const nR = (NV + 1) * 2;
    const nT = (NU + 1) * 2;
    this.n = { nTop, nL, nR, nT };
    const total = nTop * 2 + nL + nR + nT;
    this.setAttribute('position', new THREE.BufferAttribute(new Float32Array(total * 3), 3));
    this.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(total * 3), 3));
    this.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(total * 2), 2));
    const idx = [];
    const top = (i, j) => j * (NU + 1) + i;
    const bot = (i, j) => nTop + j * (NU + 1) + i;
    for (let j = 0; j < NV; j++)
      for (let i = 0; i < NU; i++) {
        idx.push(top(i, j), top(i + 1, j), top(i, j + 1), top(i + 1, j), top(i + 1, j + 1), top(i, j + 1));
        idx.push(bot(i, j), bot(i, j + 1), bot(i + 1, j), bot(i + 1, j), bot(i, j + 1), bot(i + 1, j + 1));
      }
    const oL = nTop * 2;
    const oR = oL + nL;
    const oT = oR + nR;
    for (let j = 0; j < NV; j++) {
      const lt = oL + j * 2, lb = lt + 1, lt1 = lt + 2, lb1 = lt + 3;
      idx.push(lb, lt, lt1, lb, lt1, lb1);
      const rt = oR + j * 2, rb = rt + 1, rt1 = rt + 2, rb1 = rt + 3;
      idx.push(rb, rt1, rt, rb, rb1, rt1);
    }
    for (let i = 0; i < NU; i++) {
      const tt = oT + i * 2, tb = tt + 1, tt1 = tt + 2, tb1 = tt + 3;
      idx.push(tb, tt1, tb1, tb, tt, tt1);
    }
    this.setIndex(idx);
    this.topIndexCount = NU * NV * 6;
  }

  update(p) {
    const pos = this.attributes.position.array;
    const uv = this.attributes.uv.array;
    const { nTop, nL, nR } = this.n;
    const s = {};
    const put = (k, x, y, z, u, v) => {
      pos[k * 3] = x;
      pos[k * 3 + 1] = y;
      pos[k * 3 + 2] = z;
      uv[k * 2] = u;
      uv[k * 2 + 1] = v;
    };
    for (let j = 0; j <= NV; j++) {
      const v = V0 + (1 - V0) * (j / NV);
      for (let i = 0; i <= NU; i++) {
        sample(i / NU, v, p, s);
        const k = j * (NU + 1) + i;
        put(k, s.x, s.y, s.zt, s.u, s.v);
        put(nTop + k, s.x, s.y, s.zb, s.u, s.v);
      }
      sample(0, v, p, s);
      put(nTop * 2 + j * 2, s.x, s.y, s.zt, s.u, s.v);
      put(nTop * 2 + j * 2 + 1, s.x, s.y, s.zb, s.u, s.v);
      sample(1, v, p, s);
      put(nTop * 2 + nL + j * 2, s.x, s.y, s.zt, s.u, s.v);
      put(nTop * 2 + nL + j * 2 + 1, s.x, s.y, s.zb, s.u, s.v);
    }
    for (let i = 0; i <= NU; i++) {
      sample(i / NU, 1, p, s);
      const k = nTop * 2 + nL + nR + i * 2;
      put(k, s.x, s.y, s.zt, s.u, s.v);
      put(k + 1, s.x, s.y, s.zb, s.u, s.v);
    }
    this.attributes.position.needsUpdate = true;
    this.attributes.uv.needsUpdate = true;
    this.computeVertexNormals();
    this.computeBoundingSphere();
  }
}

// слой с золотом поверх покрытия — копия верхней поверхности
class DecalGeometry extends THREE.BufferGeometry {
  constructor(plate) {
    super();
    const nTop = plate.n.nTop;
    this.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nTop * 3), 3));
    this.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nTop * 3), 3));
    this.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(nTop * 2), 2));
    // в индексе пластины верх и низ чередуются блоками по 6 — оставляем только верх
    const src = plate.index.array;
    const idx = [];
    for (let q = 0; q < NU * NV; q++) for (let k = 0; k < 6; k++) idx.push(src[q * 12 + k]);
    this.setIndex(idx);
    this.plate = plate;
  }
  update() {
    const nTop = this.plate.n.nTop;
    const P = this.plate.attributes.position.array;
    const N = this.plate.attributes.normal.array;
    const U = this.plate.attributes.uv.array;
    const pos = this.attributes.position.array;
    const nor = this.attributes.normal.array;
    const uv = this.attributes.uv.array;
    for (let k = 0; k < nTop; k++) {
      const off = 0.0028;
      pos[k * 3] = P[k * 3] + N[k * 3] * off;
      pos[k * 3 + 1] = P[k * 3 + 1] + N[k * 3 + 1] * off;
      pos[k * 3 + 2] = P[k * 3 + 2] + N[k * 3 + 2] * off;
      nor[k * 3] = N[k * 3];
      nor[k * 3 + 1] = N[k * 3 + 1];
      nor[k * 3 + 2] = N[k * 3 + 2];
      uv[k * 2] = U[k * 2];
      uv[k * 2 + 1] = U[k * 2 + 1];
    }
    this.attributes.position.needsUpdate = true;
    this.attributes.normal.needsUpdate = true;
    this.attributes.uv.needsUpdate = true;
    this.computeBoundingSphere();
  }
}

// ——— палец ———
function fingerRadius(y) {
  if (y <= -0.1) {
    const knuckle = 0.05 * Math.exp(-(((y + 2.75) / 0.5) ** 2));
    const taper = 1 + Math.max(0, -y - 1) * 0.016;
    return R * taper + knuckle;
  }
  const t = Math.min((y + 0.1) / 0.66, 1);
  return R * Math.sqrt(Math.max(0, 1 - t * t));
}

// контур пластины на пальце (для валиков кожи)
let outlineCache = null;
function nailOutline() {
  if (outlineCache) return outlineCache;
  const p = { shape: 1, length: 1.76, irregular: 0 };
  const s = {};
  const pts = [];
  const yEnd = 1.12;
  const N = 40;
  for (let i = N; i >= 0; i--) {
    sample(0, V0 + (yEnd / p.length) * Math.pow(i / N, 1.4), p, s);
    pts.push([s.x, s.y + CUTICLE_Y]);
  }
  for (let i = 1; i <= N; i++) {
    sample(1, V0 + (yEnd / p.length) * Math.pow(i / N, 1.4), p, s);
    pts.push([s.x, s.y + CUTICLE_Y]);
  }
  outlineCache = { pts, yTop: CUTICLE_Y + yEnd };
  return outlineCache;
}

// расстояние от точки до контура: >0 снаружи пластины, <0 под ней
function outlineDistance(x, y) {
  const { pts, yTop } = nailOutline();
  let best = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i];
    const [bx, by] = pts[i + 1];
    const dx = bx - ax;
    const dy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1)));
    const d = Math.hypot(x - ax - dx * t, y - ay - dy * t);
    if (d < best) best = d;
  }
  const yl = y - CUTICLE_Y;
  const inside = yl > 0 && y < yTop && Math.abs(x) < halfWidth(yl, 1.76, 1);
  return inside ? -best : best;
}

let fingerGeoCache = null;
function fingerGeometry() {
  if (fingerGeoCache) return fingerGeoCache;
  // строки по высоте: редко у основания, густо в зоне ногтя, «шапочка» на кончике
  const rows = [];
  for (let y = -6.4; y < -1.6; y += 0.2) rows.push(y);
  for (let y = -1.6; y < -0.1; y += 0.018) rows.push(y);
  for (let i = 0; i <= 44; i++) {
    const a = (i / 44) * Math.PI * 0.5;
    rows.push(-0.1 + 0.66 * Math.sin(a));
  }
  const SEG = 144;
  const verts = [];
  const cols = [];
  for (let j = 0; j < rows.length; j++) {
    const y = rows[j];
    const r = Math.max(fingerRadius(y), 0.0004);
    for (let i = 0; i <= SEG; i++) {
      const th = (i / SEG) * Math.PI * 2;
      let x = r * Math.sin(th);
      let z = -FLAT * r * Math.cos(th);
      let tint = 0;
      if (z > 0.05 && y > CUTICLE_Y - 0.5 && y < CUTICLE_Y + 1.3) {
        const d = outlineDistance(x, y);
        // мягкий валик сразу за краем пластины
        const ridge = 0.03 * Math.exp(-(((d - 0.035) / 0.05) ** 2));
        // под пластиной кожа чуть ниже — ногтевое ложе
        const bed = d < 0 ? -0.025 * Math.min(1, -d / 0.06) : 0;
        const k = ridge + bed;
        x += Math.sin(th) * k * 0.4;
        z += k;
        tint = Math.exp(-(((d - 0.05) / 0.12) ** 2));
      }
      verts.push(x, y, z);
      const tip = smooth(-1.8, 0.55, y);
      const palm = z < 0 ? 0.025 : 0;
      cols.push(1 - tip * 0.02 + palm, 1 - tip * 0.1 - tint * 0.06 + palm * 0.5, 1 - tip * 0.08 - tint * 0.05);
    }
  }
  const idx = [];
  const W1 = SEG + 1;
  for (let j = 0; j < rows.length - 1; j++)
    for (let i = 0; i < SEG; i++) {
      const a = j * W1 + i;
      const b = a + 1;
      const c = a + W1;
      const d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  weldNormals(geo);
  fingerGeoCache = geo;
  return geo;
}

// ——— материал пластины с «мазком кисти» при смене дизайна ———
function plateMaterial() {
  const mat = M.lacquer('#ffffff', { roughness: 0.4, clearcoat: 0.3, iridescenceIOR: 1.8, iridescenceThicknessRange: [300, 800] });
  mat.userData.uMapB = { value: null };
  mat.userData.uMix = { value: 0 };
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uMapB = mat.userData.uMapB;
    shader.uniforms.uMix = mat.userData.uMix;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <map_pars_fragment>', '#include <map_pars_fragment>\nuniform sampler2D uMapB;\nuniform float uMix;')
      .replace(
        '#include <map_fragment>',
        /* glsl */ `
        #ifdef USE_MAP
          vec4 cA = texture2D(map, vMapUv);
          vec4 cB = texture2D(uMapB, vMapUv);
          float wave = sin(vMapUv.x * 31.0) * 0.012 + sin(vMapUv.x * 11.0 + 1.7) * 0.018;
          float edge = uMix * 1.3 - 0.15;
          float m = smoothstep(edge + 0.05, edge - 0.03, vMapUv.y + wave);
          vec4 sampledDiffuseColor = mix(cA, cB, m);
          // свежий мазок чуть светлее по фронту
          float front = smoothstep(0.05, 0.0, abs(vMapUv.y + wave - edge)) * step(0.001, uMix) * step(uMix, 0.999);
          sampledDiffuseColor.rgb += front * 0.08;
          diffuseColor *= sampledDiffuseColor;
        #endif`
      );
  };
  mat.customProgramCacheKey = () => 'nail-wipe';
  return mat;
}

const GEMS = {
  3: [
    [0.5, 0.185, 0.13],
    [0.33, 0.23, 0.1],
    [0.67, 0.23, 0.1],
  ],
  5: [
    [0.5, 0.17, 0.12],
    [0.35, 0.21, 0.1],
    [0.65, 0.21, 0.1],
    [0.23, 0.29, 0.08],
    [0.77, 0.29, 0.08],
  ],
};

export class FingerNail extends THREE.Group {
  constructor({ finger = true, design = 'overgrown', cheapGems = false, skinColor } = {}) {
    super();
    this.params = { shape: 0, length: 1.5, irregular: 1 };
    this.plateGeo = new NailPlateGeometry();
    this.mat = plateMaterial();
    this.plate = new THREE.Mesh(this.plateGeo, this.mat);

    this.decalGeo = new DecalGeometry(this.plateGeo);
    this.decalMat = M.gold('#e2bd84', {
      transparent: true,
      depthWrite: false,
      roughness: 0.22,
      clearcoat: 0.6,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      opacity: 0,
    });
    this.decal = new THREE.Mesh(this.decalGeo, this.decalMat);
    this.decal.visible = false;

    this.nail = new THREE.Group();
    this.nail.position.set(0, CUTICLE_Y, FLAT * R);
    this.nail.add(this.plate, this.decal);
    this.add(this.nail);

    if (finger) {
      const skinMat = M.skin({ vertexColors: true });
      if (skinColor) skinMat.color.set(skinColor);
      this.finger = new THREE.Mesh(fingerGeometry(), skinMat);
      this.add(this.finger);
    }

    // стразы
    this.gems = [];
    const gemMat = cheapGems ? M.crystal('#ffffff') : M.diamond();
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Mesh(brilliantGeometry(16), gemMat);
      g.visible = false;
      g.userData.s = 0;
      this.nail.add(g);
      this.gems.push(g);
    }
    this.gemLayout = 0;
    this.gemAmount = 0;

    this.design = null;
    this.applyDesign(design);
  }

  rebuild() {
    this.plateGeo.update(this.params);
    this.decalGeo.update();
    this.placeGems();
  }

  setShape(shape, length = this.params.length, irregular = this.params.irregular) {
    this.params.shape = shape;
    this.params.length = length;
    this.params.irregular = irregular;
    this.rebuild();
  }

  placeGems() {
    const layout = GEMS[this.gemLayout] || [];
    const s = {};
    const up = new THREE.Vector3(0, 1, 0);
    const n = new THREE.Vector3();
    const q = new THREE.Quaternion();
    this.gems.forEach((g, i) => {
      const L = layout[i];
      if (!L || this.gemAmount <= 0.001) {
        g.visible = false;
        return;
      }
      const [u, v, size] = L;
      sample(u, v, this.params, s);
      // нормаль по разности соседних точек
      const a = sample(u - 0.02, v, this.params, {});
      const b = sample(u + 0.02, v, this.params, {});
      const c2 = sample(u, v + 0.02, this.params, {});
      const tx = new THREE.Vector3(b.x - a.x, b.y - a.y, b.zt - a.zt);
      const ty = new THREE.Vector3(c2.x - s.x, c2.y - s.y, c2.zt - s.zt);
      n.crossVectors(tx, ty).normalize();
      q.setFromUnitVectors(up, n);
      g.quaternion.copy(q);
      g.rotateY(i * 0.7);
      const k = Math.min(1, Math.max(0, this.gemAmount * 1.6 - i * 0.12));
      const pop = k < 1 ? 1 + Math.sin(k * Math.PI) * 0.25 : 1;
      g.scale.setScalar(size * k * pop);
      g.position.set(s.x, s.y, s.zt + 0.012).addScaledVector(n, size * 0.18 * k);
      g.visible = k > 0.001;
    });
  }

  setGems(layout, amount) {
    this.gemLayout = layout;
    this.gemAmount = amount;
    this.placeGems();
  }

  // мгновенно применить дизайн (без анимации)
  applyDesign(name) {
    const look = lookOf(name);
    this.design = name;
    this.mat.map = designTexture(name);
    this.mat.userData.uMapB.value = this.mat.map;
    this.mat.userData.uMix.value = 0;
    // clearcoat и iridescence держим чуть выше нуля, чтобы шейдер не перекомпилировался
    this.mat.roughness = look.roughness;
    this.mat.clearcoat = Math.max(look.clearcoat, 0.02);
    this.mat.metalness = look.metalness;
    this.mat.iridescence = Math.max(look.iridescence, 0.001);
    this.mat.needsUpdate = true;
    const dt = decalTexture(look.decal);
    if (dt) {
      this.decalMat.alphaMap = dt;
      this.decalMat.opacity = 1;
      this.decalMat.needsUpdate = true;
      this.decal.visible = true;
    } else {
      this.decalMat.opacity = 0;
      this.decal.visible = false;
    }
    this.params.shape = look.shape;
    this.params.length = look.length;
    this.params.irregular = name === 'overgrown' ? 1 : 0;
    this.gemLayout = look.gems || 0;
    this.gemAmount = look.gems ? 1 : 0;
    this.rebuild();
    return look;
  }

  // начать «мазок» к новому дизайну; прогресс задаётся через mix (0..1)
  beginDesign(name) {
    if (this.mat.userData.uMix.value >= 0.5 && this.mat.userData.uMapB.value) this.mat.map = this.mat.userData.uMapB.value;
    this.mat.userData.uMapB.value = designTexture(name);
    this.mat.userData.uMix.value = 0;
    this.design = name;
    const look = lookOf(name);
    const dt = decalTexture(look.decal);
    if (dt) {
      this.decalMat.alphaMap = dt;
      this.decalMat.needsUpdate = true;
    }
    return look;
  }

  get mix() {
    return this.mat.userData.uMix.value;
  }

  set mix(v) {
    this.mat.userData.uMix.value = v;
  }

  endDesign() {
    this.mat.map = this.mat.userData.uMapB.value;
    this.mat.userData.uMix.value = 0;
  }

  set decalOpacity(v) {
    this.decalMat.opacity = v;
    this.decal.visible = v > 0.002;
  }

  get decalOpacity() {
    return this.decalMat.opacity;
  }
}

export { sample as nailSample };
