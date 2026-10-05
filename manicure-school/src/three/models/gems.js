import * as THREE from 'three';
import * as M from '../materials.js';
import { flakeAlpha, mulberry } from '../textures.js';

const GEO = {};

// Бриллиантовая огранка: площадка, корона, рундист, павильон
export function brilliantGeometry(segments = 16) {
  const key = 'brilliant' + segments;
  if (GEO[key]) return GEO[key];
  const pts = [
    [0.0005, -0.52], // калетта
    [0.22, -0.27],
    [0.5, 0.0], // рундист
    [0.5, 0.035],
    [0.41, 0.13],
    [0.29, 0.205], // край площадки
    [0.0005, 0.205],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const geo = new THREE.LatheGeometry(pts, segments);
  geo.computeVertexNormals();
  GEO[key] = geo;
  return geo;
}

// Страз «капля» / «маркиз» — вытянутая огранка
export function marquiseGeometry() {
  if (GEO.marquise) return GEO.marquise;
  const geo = brilliantGeometry(12).clone();
  geo.scale(1, 1, 0.55);
  geo.computeVertexNormals();
  GEO.marquise = geo;
  return geo;
}

export function pearlGeometry() {
  return (GEO.pearl ||= new THREE.SphereGeometry(0.5, 48, 32));
}

// Сморщенный кусочек фольги
export function flakeGeometry(seed = 1) {
  const key = 'flake' + seed;
  if (GEO[key]) return GEO[key];
  const geo = new THREE.PlaneGeometry(1, 1, 10, 10);
  const pos = geo.attributes.position;
  const rnd = mulberry(seed * 13 + 5);
  const f1 = 2 + rnd() * 3;
  const f2 = 2 + rnd() * 3;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = Math.sin(x * f1 * 3.1 + rnd() * 0.6) * 0.035 + Math.cos(y * f2 * 3.1) * 0.03 + (rnd() - 0.5) * 0.03;
    pos.setZ(i, z);
  }
  geo.computeVertexNormals();
  GEO[key] = geo;
  return geo;
}

const flakeMats = [];
export function flakeMaterial(i = 0) {
  if (!flakeMats[i % 4]) {
    flakeMats[i % 4] = M.gold(i % 2 ? '#e8c48c' : '#dcb06e', {
      side: THREE.DoubleSide,
      emissive: new THREE.Color('#3b2408'),
      alphaMap: flakeAlpha(i + 1),
      alphaTest: 0.5,
      roughness: 0.28,
      clearcoat: 0,
    });
  }
  return flakeMats[i % 4];
}

export function makeGem({ tint = null, size = 1, cheap = false, segments = 16 } = {}) {
  const mat = cheap ? M.crystal(tint || '#ffffff') : M.diamond(tint);
  const mesh = new THREE.Mesh(brilliantGeometry(segments), mat);
  mesh.scale.setScalar(size);
  return mesh;
}

export function makePearl({ size = 1, color } = {}) {
  const mat = M.pearl(color ? { color } : {});
  const mesh = new THREE.Mesh(pearlGeometry(), mat);
  mesh.scale.setScalar(size);
  return mesh;
}

export function makeFlake(seed = 1, size = 0.3) {
  const mesh = new THREE.Mesh(flakeGeometry(seed % 6), flakeMaterial(seed));
  mesh.scale.setScalar(size);
  return mesh;
}

// Мерцающие искры (точки с аддитивным смешиванием)
export function makeSparkles({ count = 160, spread = [8, 5, 4], center = [0, 1.5, 0], size = 26, color = '#ffe7e3', seed = 11 } = {}) {
  const rnd = mulberry(seed);
  const pos = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  const scale = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = center[0] + (rnd() - 0.5) * spread[0];
    pos[i * 3 + 1] = center[1] + (rnd() - 0.5) * spread[1];
    pos[i * 3 + 2] = center[2] + (rnd() - 0.5) * spread[2];
    phase[i] = rnd() * Math.PI * 2;
    scale[i] = 0.35 + Math.pow(rnd(), 3) * 1.4;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  geo.setAttribute('aScale', new THREE.BufferAttribute(scale, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: size },
      uOpacity: { value: 1 },
      uColor: { value: new THREE.Color(color) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
    },
    vertexShader: /* glsl */ `
      uniform float uTime; uniform float uSize; uniform float uPixelRatio;
      attribute float aPhase; attribute float aScale;
      varying float vTw;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.35 + aPhase) * 0.08;
        p.x += cos(uTime * 0.27 + aPhase * 1.3) * 0.06;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vTw = 0.5 + 0.5 * sin(uTime * (1.2 + aScale) + aPhase * 5.0);
        gl_PointSize = uSize * aScale * uPixelRatio * (0.4 + vTw * 0.8) / -mv.z;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor; uniform float uOpacity;
      varying float vTw;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        // четырёхлучевая звёздочка + мягкое ядро
        float cross = max(0.0, 1.0 - abs(uv.x) * 14.0) * max(0.0, 1.0 - abs(uv.y) * 2.2)
                    + max(0.0, 1.0 - abs(uv.y) * 14.0) * max(0.0, 1.0 - abs(uv.x) * 2.2);
        float core = smoothstep(0.22, 0.0, d);
        float a = (core + cross * 0.75) * vTw * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, min(a, 1.0));
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return points;
}
