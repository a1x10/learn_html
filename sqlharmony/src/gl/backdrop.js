import * as THREE from 'three';

// Full-screen night sky behind everything: ink gradient with two slow light pools —
// a warm "fox" glow and a cold "data" glow — whose colours and places change per section.
export class Backdrop {
  constructor() {
    this.uniforms = {
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uTop: { value: new THREE.Color('#050812') },
      uBottom: { value: new THREE.Color('#020308') },
      uWarm: { value: new THREE.Color('#ff8f3d') },
      uCold: { value: new THREE.Color('#3d63ff') },
      uWarmPos: { value: new THREE.Vector2(-0.55, -0.6) },
      uColdPos: { value: new THREE.Vector2(0.75, 0.55) },
      uWarmAmt: { value: 0.16 },
      uColdAmt: { value: 0.14 },
      uScroll: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      depthTest: false,
      depthWrite: false,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform float uAspect; uniform float uScroll; uniform vec2 uPointer;
        uniform vec3 uTop; uniform vec3 uBottom; uniform vec3 uWarm; uniform vec3 uCold;
        uniform vec2 uWarmPos; uniform vec2 uColdPos; uniform float uWarmAmt; uniform float uColdAmt;
        varying vec2 vUv;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
        }
        float fbm(vec2 p) { float v = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; } return v; }
        void main() {
          vec2 p = (vUv - 0.5) * 2.0; p.x *= uAspect;
          vec3 col = mix(uBottom, uTop, smoothstep(-1.2, 1.0, p.y));
          float n = fbm(p * 0.9 + vec2(uTime * 0.02, -uTime * 0.015 + uScroll * 0.08));
          vec2 wp = uWarmPos * vec2(uAspect, 1.0) + vec2(sin(uTime * 0.11), cos(uTime * 0.09)) * 0.12;
          vec2 cp = uColdPos * vec2(uAspect, 1.0) + vec2(cos(uTime * 0.07), sin(uTime * 0.1)) * 0.14;
          float w = exp(-dot(p - wp, p - wp) * 0.9) * (0.65 + n * 0.7);
          float c = exp(-dot(p - cp, p - cp) * 0.8) * (0.65 + n * 0.7);
          col += uWarm * w * uWarmAmt * 0.26;
          col += uCold * c * uColdAmt * 0.3;
          // a faint light that follows the cursor
          vec2 mp = uPointer * vec2(uAspect, 1.0);
          float m = exp(-dot(p - mp, p - mp) * 6.0);
          col += mix(uWarm, uCold, 0.5) * m * 0.018;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1000;
    this.object = this.mesh;
  }

  resize(w, h) {
    this.uniforms.uAspect.value = w / h;
  }

  update(time) {
    this.uniforms.uTime.value = time;
    if (this.world) this.uniforms.uPointer.value.copy(this.world.pointer);
  }
}

// Floating dust with depth parallax: near specks move faster than far ones when scrolling.
export class Dust {
  constructor({ count = 1400 } = {}) {
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = -28 + Math.random() * 34;
      rnd[i * 4] = Math.random();
      rnd[i * 4 + 1] = Math.random();
      rnd[i * 4 + 2] = Math.random();
      rnd[i * 4 + 3] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(rnd, 4));
    this.uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uPx: { value: 1 },
      uOpacity: { value: 1 },
      uWarm: { value: new THREE.Color('#ffae6b') },
      uCold: { value: new THREE.Color('#9fb8ff') },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute vec4 aRand;
        uniform float uTime; uniform float uScroll; uniform float uPx;
        varying float vA; varying float vWarm;
        void main() {
          vec3 p = position;
          float depth = clamp((p.z + 28.0) / 34.0, 0.0, 1.0);
          p.y += uScroll * (0.002 + depth * 0.006);
          p.y = mod(p.y + 10.0, 20.0) - 10.0;
          p.x += sin(uTime * (0.1 + aRand.x * 0.2) + aRand.y * 6.28) * 0.3;
          p.y += cos(uTime * (0.08 + aRand.z * 0.2) + aRand.x * 6.28) * 0.25;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float size = (0.6 + aRand.w * 1.8) * uPx;
          gl_PointSize = size * (14.0 / -mv.z);
          vA = (0.25 + 0.75 * (0.5 + 0.5 * sin(uTime * (0.6 + aRand.z * 1.5) + aRand.y * 20.0))) * smoothstep(-0.5, -4.0, mv.z);
          vWarm = step(0.82, aRand.x);
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity; uniform vec3 uWarm; uniform vec3 uCold;
        varying float vA; varying float vWarm;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d);
          a *= a;
          gl_FragColor = vec4(mix(uCold, uWarm, vWarm) * a * vA * uOpacity * 0.9, 1.0);
        }`,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.object = this.points;
  }

  resize(w, h) {
    this.uniforms.uPx.value = Math.min(window.devicePixelRatio || 1, 1.75) * (h / 900) * 1.4;
  }

  update(time) {
    this.uniforms.uTime.value = time;
    this.uniforms.uScroll.value = window.scrollY;
  }
}
