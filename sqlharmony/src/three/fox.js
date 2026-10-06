import * as THREE from 'three';

// Низкополигональная голова лисы — талисман SQL Harmony (его же видно в favicon сайта).
// Каждая грань — отдельный треугольник со своим центром, осью и «адресом» в таблице:
// шейдер умеет разбивать лису на осколки и раскладывать их в ячейки таблицы.

const P = {
  // центральная линия
  N: [0, -0.78, 1.1],
  NB: [0, -0.5, 0.98],
  BR: [0, 0.02, 0.64],
  FH: [0, 0.48, 0.5],
  CR: [0, 0.8, 0.05],
  NK: [0, 0.42, -0.58],
  CH: [0, -0.99, 0.8],
  TH: [0, -1.08, 0.12],
  BB: [0, -0.56, -0.52],
  // правая половина (левая — зеркально)
  SN: [0.17, -0.57, 0.92],
  SL: [0.2, -0.86, 0.86],
  MZ: [0.44, -0.5, 0.62],
  EI: [0.22, -0.05, 0.64],
  EO: [0.54, 0.09, 0.5],
  EY: [0.37, -0.2, 0.62],
  TM: [0.56, 0.44, 0.34],
  EBI: [0.27, 0.74, 0.24],
  EBO: [0.84, 0.42, 0.12],
  ET: [0.96, 1.46, 0.02],
  EIN: [0.7, 0.86, 0.2],
  EBK: [0.62, 0.8, -0.24],
  CK: [1.1, -0.38, 0.1],
  CL: [0.74, -0.8, 0.32],
  JW: [0.4, -0.96, 0.44],
  SD: [0.74, -0.1, -0.36],
};

const C = {
  o: '#ff6a2a', // рыжий
  d: '#d9481a', // тень рыжего
  a: '#ff9a48', // янтарь
  w: '#f5efe7', // белые щёки
  s: '#cfc6d8', // белый в тени
  k: '#17121f', // нос и глаза
  i: '#ffd2ad', // внутри уха
  e: '#2a1830', // глубина уха
};

// [a, b, c, цвет]; точки центральной линии не отражаются
const FACES = [
  ['NB', 'SN', 'N', 'o'],
  ['N', 'SN', 'SL', 'k'],
  ['N', 'SL', 'CH', 'w'],
  ['SL', 'JW', 'CH', 's'],
  ['SN', 'MZ', 'SL', 'w'],
  ['SL', 'MZ', 'JW', 's'],
  ['NB', 'BR', 'SN', 'a'],
  ['SN', 'BR', 'EI', 'o'],
  ['SN', 'EI', 'MZ', 'o'],
  ['EI', 'EY', 'MZ', 'a'],
  ['EI', 'EO', 'EY', 'k'],
  ['EI', 'BR', 'FH', 'o'],
  ['EI', 'FH', 'TM', 'o'],
  ['EI', 'TM', 'EO', 'd'],
  ['MZ', 'EY', 'EO', 'a'],
  ['MZ', 'EO', 'CK', 'w'],
  ['MZ', 'CK', 'CL', 'w'],
  ['MZ', 'CL', 'JW', 's'],
  ['EO', 'TM', 'EBO', 'o'],
  ['EO', 'EBO', 'CK', 'd'],
  ['FH', 'CR', 'EBI', 'o'],
  ['FH', 'EBI', 'TM', 'a'],
  ['TM', 'EBI', 'EBO', 'o'],
  ['EBI', 'EIN', 'ET', 'e'],
  ['EIN', 'EBO', 'ET', 'i'],
  ['EBI', 'EBO', 'EIN', 'd'],
  ['ET', 'EBO', 'EBK', 'd'],
  ['ET', 'EBK', 'EBI', 'o'],
  ['EBI', 'EBK', 'CR', 'd'],
  ['CR', 'EBK', 'NK', 'd'],
  ['EBK', 'SD', 'NK', 'd'],
  ['EBK', 'EBO', 'SD', 'o'],
  ['EBO', 'CK', 'SD', 'd'],
  ['CK', 'CL', 'SD', 's'],
  ['CL', 'JW', 'TH', 'w'],
  ['CL', 'TH', 'BB', 's'],
  ['CL', 'BB', 'SD', 's'],
  ['JW', 'CH', 'TH', 'w'],
  ['SD', 'BB', 'NK', 'd'],
];

function point(name, mirror) {
  const p = P[name];
  return new THREE.Vector3(mirror && p[0] !== 0 ? -p[0] : p[0], p[1], p[2]);
}

// общий кусок вершинного шейдера: разлёт и раскладка в таблицу
const SHATTER_PARS = /* glsl */ `
  attribute vec3 aCenter;
  attribute vec3 aTarget;
  attribute vec3 aAxis;
  attribute float aRand;
  attribute vec3 aCorner;
  attribute vec3 aCellColor;
  uniform float uExplode;
  uniform float uGrid;
  uniform float uTime;
  varying float vRand;
  vec3 rotAxis(vec3 v, vec3 k, float a) {
    float c = cos(a), s = sin(a);
    return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
  }
`;
const SHATTER_MAIN = /* glsl */ `
  vec3 local = transformed - aCenter;
  float e = uExplode;
  vec3 dir = normalize(aCenter + vec3(0.0, 0.0, 0.35));
  vec3 scatter = aCenter + dir * e * (1.4 + aRand * 3.2)
    + vec3(sin(uTime * 0.6 + aRand * 20.0), cos(uTime * 0.5 + aRand * 13.0), 0.0) * e * 0.25;
  float ang = e * (aRand * 7.0 + 2.0) * (1.0 - uGrid);
  local = rotAxis(local, aAxis, ang);
  // в таблице осколок ложится плоско и чуть дышит
  vec3 cell = aTarget + vec3(0.0, 0.0, sin(uTime * 1.4 + aTarget.x * 1.7 + aTarget.y * 2.3) * 0.05);
  float gp = smoothstep(0.0, 1.0, uGrid);
  vec3 c = mix(scatter, cell, gp);
  // в таблице каждая пара граней превращается в прямоугольную ячейку
  float shape = smoothstep(0.35, 1.0, uGrid);
  transformed = c + mix(local * mix(1.0, 0.7, gp), aCorner, shape);
  vRand = aRand;
`;

export function createFox() {
  const pos = [];
  const col = [];
  const center = [];
  const target = [];
  const axis = [];
  const rand = [];
  const corner = [];
  const cellColor = [];
  const linePos = [];
  const lineAttr = { center: [], target: [], axis: [], rand: [], corner: [], cellColor: [] };

  const tris = [];
  for (const mirror of [false, true]) {
    for (const f of FACES) {
      const a = point(f[0], mirror);
      const b = point(f[1], mirror);
      const c = point(f[2], mirror);
      // у зеркальной половины меняем обход, чтобы нормали смотрели наружу
      tris.push({ v: mirror ? [a, c, b] : [a, b, c], color: f[3] });
    }
  }

  // адреса в таблице: сортируем грани сверху вниз и слева направо — разлёт выглядит упорядоченным
  const order = tris
    .map((t, i) => {
      const cx = (t.v[0].x + t.v[1].x + t.v[2].x) / 3;
      const cy = (t.v[0].y + t.v[1].y + t.v[2].y) / 3;
      return { i, key: -cy * 10 + cx };
    })
    .sort((a, b) => a.key - b.key);
  // таблица результатов: 4 колонки, первая строка — заголовок
  const cols = 4;
  const rows = Math.ceil(tris.length / 2 / cols);
  const cw = 0.92;
  const chh = 0.24;
  const gx = 0.06;
  const gy = 0.05;
  const slot = new Array(tris.length);
  order.forEach((o, k) => (slot[o.i] = k));

  const tmpColor = new THREE.Color();
  tris.forEach((t, i) => {
    const cen = t.v[0].clone().add(t.v[1]).add(t.v[2]).multiplyScalar(1 / 3);
    const k = slot[i];
    const cell = Math.floor(k / 2);
    const half = k % 2;
    const r = Math.floor(cell / cols);
    const cc = cell % cols;
    const tgt = new THREE.Vector3((cc - (cols - 1) / 2) * (cw + gx), ((rows - 1) / 2 - r) * (chh + gy), 0);
    const W = cw / 2;
    const H = chh / 2;
    const corners = half ? [[-W, H], [W, H], [-W, -H]] : [[W, H], [W, -H], [-W, -H]];
    const cellCol = new THREE.Color(r === 0 ? '#ff6a2a' : (r + cc) % 2 ? '#262b5e' : '#1d2149');
    if (r > 0 && cc === 3) cellCol.set('#3b2a5a');
    const ax = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    const rnd = Math.random();
    tmpColor.set(C[t.color]);
    const hsl = {};
    tmpColor.getHSL(hsl);
    tmpColor.setHSL(hsl.h + (Math.random() - 0.5) * 0.012, hsl.s, hsl.l * (0.94 + Math.random() * 0.1));
    t.v.forEach((v, vi) => {
      corner.push(corners[vi][0], corners[vi][1], 0);
      cellColor.push(cellCol.r, cellCol.g, cellCol.b);
      pos.push(v.x, v.y, v.z);
      col.push(tmpColor.r, tmpColor.g, tmpColor.b);
      center.push(cen.x, cen.y, cen.z);
      target.push(tgt.x, tgt.y, tgt.z);
      axis.push(ax.x, ax.y, ax.z);
      rand.push(rnd);
    });
    // рёбра грани — для светящегося каркаса
    for (const [p, q] of [
      [0, 1],
      [1, 2],
      [2, 0],
    ]) {
      for (const vi of [p, q]) {
        const o = t.v[vi];
        linePos.push(o.x, o.y, o.z);
        lineAttr.corner.push(corners[vi][0], corners[vi][1], 0);
        lineAttr.cellColor.push(0, 0, 0);
        lineAttr.center.push(cen.x, cen.y, cen.z);
        lineAttr.target.push(tgt.x, tgt.y, tgt.z);
        lineAttr.axis.push(ax.x, ax.y, ax.z);
        lineAttr.rand.push(rnd);
      }
    }
  });

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setAttribute('aCenter', new THREE.Float32BufferAttribute(center, 3));
  geo.setAttribute('aTarget', new THREE.Float32BufferAttribute(target, 3));
  geo.setAttribute('aAxis', new THREE.Float32BufferAttribute(axis, 3));
  geo.setAttribute('aRand', new THREE.Float32BufferAttribute(rand, 1));
  geo.setAttribute('aCorner', new THREE.Float32BufferAttribute(corner, 3));
  geo.setAttribute('aCellColor', new THREE.Float32BufferAttribute(cellColor, 3));
  geo.computeVertexNormals();

  const lgeo = new THREE.BufferGeometry();
  lgeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
  lgeo.setAttribute('aCenter', new THREE.Float32BufferAttribute(lineAttr.center, 3));
  lgeo.setAttribute('aTarget', new THREE.Float32BufferAttribute(lineAttr.target, 3));
  lgeo.setAttribute('aAxis', new THREE.Float32BufferAttribute(lineAttr.axis, 3));
  lgeo.setAttribute('aRand', new THREE.Float32BufferAttribute(lineAttr.rand, 1));
  lgeo.setAttribute('aCorner', new THREE.Float32BufferAttribute(lineAttr.corner, 3));
  lgeo.setAttribute('aCellColor', new THREE.Float32BufferAttribute(lineAttr.cellColor, 3));

  const uniforms = {
    uExplode: { value: 0 },
    uGrid: { value: 0 },
    uTime: { value: 0 },
    uGlow: { value: 0.35 },
  };

  const mat = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    flatShading: true,
    roughness: 0.32,
    metalness: 0.05,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    iridescence: 0.35,
    iridescenceIOR: 1.6,
    envMapIntensity: 1.25,
    side: THREE.DoubleSide,
  });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + SHATTER_PARS)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + SHATTER_MAIN)
      .replace('#include <color_vertex>', '#include <color_vertex>\nvColor.rgb = mix(vColor.rgb, aCellColor, smoothstep(0.4, 1.0, uGrid));');
    // в режиме таблицы грани подсвечиваются изнутри, как выделенные ячейки
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uGrid; uniform float uTime; varying float vRand;')
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         float pulse = smoothstep(0.75, 1.0, sin(uTime * 1.6 + vRand * 40.0) * 0.5 + 0.5);
         totalEmissiveRadiance += diffuseColor.rgb * (0.08 + uGrid * (0.25 + pulse * 0.6));`
      );
  };
  mat.customProgramCacheKey = () => 'fox-shatter';

  const lineMat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      ${SHATTER_PARS}
      varying float vDepth;
      void main() {
        vec3 transformed = position;
        ${SHATTER_MAIN}
        vec4 mv = modelViewMatrix * vec4(transformed, 1.0);
        vDepth = transformed.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uGlow; uniform float uGrid; uniform float uTime;
      varying float vRand; varying float vDepth;
      void main() {
        vec3 warm = vec3(1.0, 0.62, 0.32);
        vec3 cool = vec3(0.45, 0.55, 1.0);
        vec3 c = mix(warm, cool, uGrid * 0.8 + vRand * 0.2);
        float flick = 0.75 + 0.25 * sin(uTime * 3.0 + vRand * 30.0);
        gl_FragColor = vec4(c * flick, uGlow * (1.0 - uGrid * 0.85) * (0.55 + 0.45 * smoothstep(-0.6, 1.0, vDepth)));
      }`,
  });

  const group = new THREE.Group();
  const mesh = new THREE.Mesh(geo, mat);
  const lines = new THREE.LineSegments(lgeo, lineMat);
  lines.renderOrder = 2;
  group.add(mesh, lines);
  return { group, mesh, lines, uniforms, grid: { cols, rows } };
}
