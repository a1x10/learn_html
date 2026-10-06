import * as THREE from 'three';
import { wordTexture, chipTexture } from './textures.js';

// ——— Giant word behind the fox. Outline always; the fill lights up under the cursor. ———
export class HeroWord {
  constructor(world, getFox, { word = 'HARMONY', mobile = false } = {}) {
    this.world = world;
    this.getFox = getFox;
    const { texture } = wordTexture(word, mobile ? { width: 2048, height: 512 } : {});
    this.aspect = 4;
    this.uniforms = {
      uTex: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uLight: { value: 0 },
      uReveal: { value: 0 },
      uOut: { value: 0 },
      uAspect: { value: this.aspect },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uTex; uniform float uTime; uniform vec2 uMouse; uniform float uLight;
        uniform float uReveal; uniform float uOut; uniform float uAspect;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          uv.y += sin(uv.x * 9.0 + uTime * 0.7) * 0.006 * (1.0 + uOut * 4.0);
          vec2 d = (uv - uMouse) * vec2(uAspect, 1.0);
          float r = length(d);
          uv += (r > 0.0001 ? d / r : vec2(0.0)) / vec2(uAspect, 1.0) * sin(r * 26.0 - uTime * 3.5) * 0.004 * smoothstep(0.6, 0.0, r) * uLight;
          float split = 0.0008 + uOut * 0.01;
          vec4 tr = texture2D(uTex, uv + vec2(split, 0.0));
          vec4 tg = texture2D(uTex, uv);
          vec4 tb = texture2D(uTex, uv - vec2(split, 0.0));
          float outline = tg.r;
          float fill = tg.g;
          // reveal: letters rise through a soft horizontal edge
          float rev = smoothstep(0.0, 0.18, uReveal * 1.25 - (1.0 - vUv.y) * 0.25 - abs(vUv.x - 0.5) * 0.6);
          float light = smoothstep(0.75, 0.0, r) * uLight;
          vec3 warm = mix(vec3(1.0, 0.36, 0.08), vec3(1.0, 0.72, 0.4), smoothstep(0.2, 0.9, vUv.y));
          vec3 cool = vec3(0.62, 0.7, 1.0);
          vec3 col = vec3(tr.r, tg.r, tb.r) * cool * 0.2;
          col += warm * fill * (0.012 + light * 0.75);
          col *= rev * (1.0 - uOut);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    this.mesh.renderOrder = -10;
    this.object = this.mesh;
    this._ray = new THREE.Raycaster();
    this._hit = [];
    this.z = -5;
  }

  update(time) {
    const fox = this.getFox();
    const u = this.uniforms;
    this.mesh.visible = fox.visible && u.uOut.value < 0.999 && u.uReveal.value > 0.001;
    if (!this.mesh.visible) return;
    u.uTime.value = time;
    const view = this.world.viewSize(this.z);
    const k = view.h / this.world.viewSize(0).h; // same screen position at a deeper plane
    const w = view.w * 0.96;
    const h = w / this.aspect;
    this.mesh.position.set(0, (fox.pos.y + fox.scale * 0.12) * k, this.z);
    this.mesh.scale.set(w * (1 + u.uOut.value * 0.35), h * (1 + u.uOut.value * 0.35), 1);
    // cursor → uv on the plane
    this._ray.setFromCamera(this.world.pointer, this.world.camera);
    this._hit.length = 0;
    this._ray.intersectObject(this.mesh, false, this._hit);
    if (this._hit.length) u.uMouse.value.lerp(this._hit[0].uv, 0.2);
  }
}

// ——— SQL keyword chips orbiting the fox ———
const CHIP_WORDS = [
  ['SELECT', true],
  ['JOIN', false],
  ['WHERE', false],
  ['GROUP BY', false],
  ['PL/SQL', true],
  ['HAVING', false],
  ['.xlsx', false],
  ['ChatGPT', true],
  ['COUNT(*)', false],
  ['ORDER BY', false],
];

export class Chips {
  constructor(world, getCenter, { mobile = false } = {}) {
    this.world = world;
    this.getCenter = getCenter; // () => {pos: Vector3, scale}
    this.group = new THREE.Group();
    this.object = this.group;
    this.items = [];
    this.out = 0; // 0..1 scroll-away
    this.reveal = 0;
    const words = mobile ? CHIP_WORDS.slice(0, 6) : CHIP_WORDS;
    // three rings; chips in a ring share one speed so they keep their spacing
    const perRing = [0, 0, 0];
    words.forEach((_, i) => perRing[i % 3]++);
    const ringSpeed = [0.1, -0.075, 0.13];
    words.forEach(([w, accent], i) => {
      const { texture, aspect } = chipTexture(w, { accent });
      const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, opacity: 1, toneMapped: false });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(aspect, 1), mat);
      m.renderOrder = 5;
      const ring = i % 3;
      const slot = Math.floor(i / 3);
      this.items.push({
        mesh: m,
        phase: (slot / perRing[ring]) * Math.PI * 2 + ring * 1.1,
        speed: ringSpeed[ring],
        rx: 1.45 + ring * 0.38,
        ry: 0.5 + ring * 0.22,
        tilt: -0.35 + ring * 0.28,
        bob: Math.random() * 6,
        size: 0.13 + (accent ? 0.025 : 0),
      });
      this.group.add(m);
    });
    this._v = new THREE.Vector3();
  }

  update(time) {
    const c = this.getCenter();
    this.group.visible = c.visible && this.out < 0.999;
    if (!this.group.visible) return;
    const s = c.scale;
    for (const it of this.items) {
      const a = it.phase + time * it.speed;
      const x = Math.cos(a) * it.rx;
      const z = Math.sin(a) * it.rx * 0.8;
      let y = Math.sin(a) * it.ry * 0.35 + Math.sin(time * 0.7 + it.bob) * 0.06;
      y += x * Math.sin(it.tilt) * 0.3;
      const spread = 1 + this.out * 2.4;
      this._v.set(x * spread, y * spread + this.out * 0.6, z * spread + this.out * 2.0);
      it.mesh.position.copy(this._v).multiplyScalar(s).add(c.pos);
      it.mesh.quaternion.copy(this.world.camera.quaternion);
      const depth = (z / (it.rx * 0.8) + 1) / 2; // 0 back .. 1 front
      const k = it.size * s * (0.9 + depth * 0.3) * (0.6 + 0.4 * this.reveal);
      it.mesh.scale.set(k, k, k);
      it.mesh.material.opacity = (0.45 + depth * 0.55) * this.reveal * (1 - this.out);
    }
  }
}

// ——— Harmonic wave floor: lines of light rippling like a sound spectrum ———
export class WaveFloor {
  constructor(world, getFox, { rows = 46, cols = 150, mobile = false } = {}) {
    this.world = world;
    this.getFox = getFox;
    if (mobile) {
      rows = 30;
      cols = 90;
    }
    const segs = rows * (cols - 1);
    const pos = new Float32Array(segs * 2 * 3);
    let k = 0;
    for (let r = 0; r < rows; r++) {
      const z = -r / (rows - 1); // 0 front .. -1 back
      for (let c = 0; c < cols - 1; c++) {
        const x0 = c / (cols - 1) - 0.5;
        const x1 = (c + 1) / (cols - 1) - 0.5;
        pos.set([x0, 0, z, x1, 0, z], k);
        k += 6;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.uniforms = {
      uTime: { value: 0 },
      uAmp: { value: 1 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uFade: { value: 1 },
      uFade2: { value: 1 },
      uWarm: { value: new THREE.Color('#ff8a3d') },
      uCold: { value: new THREE.Color('#3d5cff') },
      uPulse: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        uniform float uTime; uniform float uAmp; uniform vec2 uMouse; uniform float uPulse;
        varying float vZ; varying float vX; varying float vH;
        void main() {
          vec3 p = position;
          float x = p.x * 26.0;
          float z = p.z * 30.0;
          // sum of harmonics: a chord, not noise
          float h = sin(x * 0.42 + uTime * 0.9) * 0.5
                  + sin(x * 0.84 - z * 0.3 + uTime * 1.3) * 0.25
                  + sin(x * 1.26 + z * 0.5 - uTime * 0.7) * 0.16
                  + sin(z * 0.7 + uTime * 0.5) * 0.3;
          float centre = exp(-p.x * p.x * 7.0);
          h *= (0.35 + centre * 0.9);
          // ripple from the cursor
          vec2 q = vec2(x, z) - uMouse;
          float d = length(q);
          h += sin(d * 1.2 - uTime * 3.0) * exp(-d * 0.18) * 0.35;
          h += uPulse * sin(d * 0.6 - uTime * 6.0) * exp(-d * 0.08);
          vec3 w = vec3(x, h * uAmp, z);
          vZ = -p.z; vX = p.x; vH = h;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(w, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uWarm; uniform vec3 uCold; uniform float uFade; uniform float uFade2;
        varying float vZ; varying float vX; varying float vH;
        void main() {
          float centre = exp(-vX * vX * 9.0);
          vec3 col = mix(uCold, uWarm, centre * 0.85 + clamp(vH, 0.0, 1.0) * 0.25);
          float a = (1.0 - vZ) * (1.0 - vZ) * smoothstep(0.5, 0.36, abs(vX)) * (0.05 + centre * 0.17);
          gl_FragColor = vec4(col * a * uFade * uFade2, 1.0);
        }`,
    });
    this.mesh = new THREE.LineSegments(geo, mat);
    this.mesh.frustumCulled = false;
    this.object = this.mesh;
    this._mouse = new THREE.Vector2();
  }

  update(time) {
    const fox = this.getFox();
    this.mesh.visible = fox.visible && this.uniforms.uFade.value * this.uniforms.uFade2.value > 0.001;
    if (!this.mesh.visible) return;
    const u = this.uniforms;
    u.uTime.value = time;
    // the floor sits under the fox and recedes into the distance
    this.mesh.position.set(0, fox.pos.y - fox.scale * 1.55, 3);
    this._mouse.set(this.world.pointer.x * 12, (this.world.pointer.y + 1) * -8);
    u.uMouse.value.lerp(this._mouse, 0.05);
  }
}
