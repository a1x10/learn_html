import * as THREE from 'three';
import { Stage } from '../engine.js';
import { createFox } from '../fox.js';
import { pointer, damp, seg, lerp, easeInOut, fitDistance } from '../util.js';
import { keywordTexture } from '../textures.js';

const KEYWORDS = ['SELECT', 'JOIN', 'WHERE', 'GROUP BY', 'HAVING', 'PL/SQL', 'MERGE', 'UNION', 'OVER()', 'COMMIT', 'WITH', 'ORDER BY', 'LISTAGG', 'NVL()'];

// Первый экран: лиса из граней, кольцо SQL-слов, поток данных и «море» точек под ней.
// Прокрутка: лиса раскалывается и складывается в таблицу.
export class HeroStage extends Stage {
  constructor(el, opts = {}) {
    super(el, { fov: 32 });
    this.mobile = !!opts.mobile;
    this.progress = 0; // прокрутка первого экрана 0..1
    this.intro = 0; // сборка лисы при загрузке 0..1
    this.boost = 0; // всплеск при наведении на кнопку

    const s = this.scene;
    s.add(new THREE.AmbientLight('#8a90ff', 0.35));
    const key = new THREE.DirectionalLight('#ffd7b8', 2.2);
    key.position.set(-3, 4, 5);
    s.add(key);
    const rim = new THREE.DirectionalLight('#5b6bff', 2.6);
    rim.position.set(4, 1, -3);
    s.add(rim);

    this.root = new THREE.Group();
    s.add(this.root);

    // лиса
    this.fox = createFox();
    this.foxPivot = new THREE.Group();
    this.foxPivot.add(this.fox.group);
    this.root.add(this.foxPivot);

    // мягкое свечение позади
    const glowTex = radialTexture();
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ff7a3a', transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.glow.scale.set(6.5, 6.5, 1);
    this.glow.position.set(0, 0, -1.6);
    this.root.add(this.glow);
    this.glow2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#4053ff', transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.glow2.scale.set(9, 9, 1);
    this.glow2.position.set(1.4, -0.8, -3);
    this.root.add(this.glow2);

    // кольцо ключевых слов
    this.ring = new THREE.Group();
    this.ring.rotation.set(0.32, 0, -0.18);
    this.words = KEYWORDS.map((w, i) => {
      const { texture, aspect } = keywordTexture(w, i % 3 === 0 ? '#ffb07a' : '#b9c3ff');
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, opacity: 0.9 }));
      const h = 0.17;
      sp.scale.set(h * aspect, h, 1);
      sp.userData.a = (i / KEYWORDS.length) * Math.PI * 2;
      this.ring.add(sp);
      return sp;
    });
    this.root.add(this.ring);

    // поток частиц, затягивающийся спиралью к лисе
    this.stream = createStream(this.mobile ? 900 : 1800);
    this.root.add(this.stream);

    // «море» точек
    this.sea = createSea(this.mobile ? 70 : 110);
    this.sea.position.set(0, -2.1, -1);
    this.root.add(this.sea);
  }

  resize(w, h) {
    this.aspect = w / h;
    this.narrow = this.aspect < 0.9;
    if (!this.narrow) {
      // широкий экран: лиса справа от заголовка
      this.layout = { x: 1.75, y: 0.05, s: 1, gy: 0.62, gs: 1 };
      this.baseDist = fitDistance(this.camera, 4.6, 8.6);
      return;
    }
    // узкий экран: лиса в свободной полосе между шапкой и текстом (slot — в пикселях, его меряет sections/hero.js)
    this.baseDist = fitDistance(this.camera, 1, 4.3);
    const u = (2 * this.baseDist * Math.tan((this.camera.fov * Math.PI) / 360)) / h;
    const slot = this.slot || { top: h * 0.1, bottom: h * 0.42 };
    const sh = Math.max(110, slot.bottom - slot.top);
    const s = Math.min(1, (sh * u) / 2.75);
    const cy = (slot.top + slot.bottom) / 2;
    this.layout = { x: 0, y: (h / 2 - cy) * u - 0.19 * s, s, gy: 1.1, gs: 0.92 };
  }

  update(time, dt) {
    const t = this.time;
    const p = this.progress;
    const u = this.fox.uniforms;
    u.uTime.value = t;
    this.boost = damp(this.boost, this.boostTarget || 0, 4, dt);

    // разлёт: при загрузке грани слетаются, при прокрутке разлетаются и ложатся в таблицу
    const introE = 1 - easeInOut(this.intro);
    const scrollE = seg(p, 0.08, 0.5);
    const gridP = easeInOut(seg(p, 0.38, 0.92));
    u.uExplode.value = Math.max(introE, scrollE * (1 - gridP * 0.0)) + this.boost * 0.06;
    u.uGrid.value = gridP;
    u.uGlow.value = 0.28 + this.boost * 0.5 + seg(p, 0.1, 0.4) * 0.4;

    // лиса следит за курсором
    const L = this.layout || { x: 1.7, y: 0, s: 1 };
    const look = 1 - gridP;
    this.foxPivot.rotation.y = damp(this.foxPivot.rotation.y, (pointer.sx * 0.55 - 0.18 + Math.sin(t * 0.4) * 0.06) * look, 4, dt);
    this.foxPivot.rotation.x = damp(this.foxPivot.rotation.x, (pointer.sy * 0.3 + 0.05) * look, 4, dt);
    this.foxPivot.position.y = Math.sin(t * 1.1) * 0.06 * look;

    this.root.position.x = lerp(L.x, 0, gridP);
    this.root.position.y = lerp(L.y, L.gy ?? 0.62, gridP);
    this.root.scale.setScalar(lerp(L.s ?? 1, L.gs ?? 1, gridP));

    // кольцо слов
    const ringR = 1.75 + scrollE * 1.2;
    this.ring.rotation.z = -0.18 + pointer.sx * 0.08;
    this.words.forEach((sp, i) => {
      const a = sp.userData.a + t * 0.22;
      sp.position.set(Math.cos(a) * ringR, Math.sin(a * 2 + i) * 0.08, Math.sin(a) * ringR);
      // слова позади лисы гаснут
      sp.material.opacity = (0.25 + 0.75 * (Math.sin(a) * 0.5 + 0.5)) * (1 - gridP) * Math.min(1, this.intro * 1.5);
    });

    this.stream.material.uniforms.uTime.value = t;
    this.stream.material.uniforms.uFade.value = (1 - gridP * 0.85) * this.intro;
    this.stream.material.uniforms.uBoost.value = this.boost;
    this.sea.material.uniforms.uTime.value = t;
    this.sea.material.uniforms.uFade.value = this.intro;

    this.glow.material.opacity = (0.45 + Math.sin(t * 1.3) * 0.08 + this.boost * 0.3) * this.intro;
    this.glow2.material.opacity = 0.45 * this.intro;

    // камера: лёгкий параллакс и наезд на таблицу
    const dist = (this.baseDist || 9) * lerp(1, this.narrow ? 1 : 0.92, gridP);
    const cam = this.camera;
    cam.position.x = damp(cam.position.x, pointer.sx * 0.35, 3, dt);
    cam.position.y = damp(cam.position.y, -pointer.sy * 0.22 + gridP * 0.2, 3, dt);
    cam.position.z = dist;
    cam.lookAt(this.root.position.x * 0.0, 0, 0);
  }
}

function radialTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.25, 'rgba(255,255,255,0.45)');
  gr.addColorStop(0.6, 'rgba(255,255,255,0.08)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function createStream(n) {
  const geo = new THREE.BufferGeometry();
  const seed = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    seed[i * 4] = Math.random(); // фаза
    seed[i * 4 + 1] = Math.random() * Math.PI * 2; // угол
    seed[i * 4 + 2] = 0.4 + Math.random() * 0.8; // скорость
    seed[i * 4 + 3] = Math.random(); // цвет/размер
  }
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uFade: { value: 0 }, uBoost: { value: 0 }, uPx: { value: Math.min(window.devicePixelRatio || 1, 2) } },
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      uniform float uTime; uniform float uBoost; uniform float uPx;
      varying float vLife; varying float vHue;
      void main() {
        float life = fract(aSeed.x + uTime * 0.07 * aSeed.z * (1.0 + uBoost * 2.0));
        float r = mix(5.5, 0.35, life);
        float a = aSeed.y + life * 5.0 * (0.6 + aSeed.z);
        float y = sin(aSeed.y * 3.0 + life * 6.0) * mix(1.6, 0.1, life);
        vec3 p = vec3(cos(a) * r, y, sin(a) * r * 0.75);
        vLife = life; vHue = aSeed.w;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (2.0 + aSeed.w * 3.0) * uPx * (6.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uFade;
      varying float vLife; varying float vHue;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.0, length(d));
        vec3 c = mix(vec3(0.38, 0.48, 1.0), vec3(1.0, 0.55, 0.25), smoothstep(0.35, 0.95, vLife + vHue * 0.2));
        float a = m * smoothstep(0.0, 0.15, vLife) * smoothstep(1.0, 0.85, vLife) * uFade;
        gl_FragColor = vec4(c, a * 0.9);
      }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}

function createSea(n) {
  const pos = new Float32Array(n * n * 3);
  let k = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      pos[k++] = (i / (n - 1) - 0.5) * 16;
      pos[k++] = 0;
      pos[k++] = (j / (n - 1) - 0.5) * 12 - 2;
    }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uFade: { value: 0 }, uPx: { value: Math.min(window.devicePixelRatio || 1, 2) } },
    vertexShader: /* glsl */ `
      uniform float uTime; uniform float uPx;
      varying float vH; varying float vD;
      void main() {
        vec3 p = position;
        float d = length(p.xz - vec2(0.0, 1.0));
        float h = sin(d * 1.6 - uTime * 1.4) * 0.12 * smoothstep(7.0, 1.0, d)
                + sin(p.x * 0.7 + uTime * 0.6) * cos(p.z * 0.9 - uTime * 0.4) * 0.12;
        p.y += h;
        vH = h; vD = d;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = 1.6 * uPx * (7.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uFade;
      varying float vH; varying float vD;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.1, length(d));
        vec3 c = mix(vec3(0.3, 0.36, 0.95), vec3(1.0, 0.5, 0.22), smoothstep(0.02, 0.2, vH));
        gl_FragColor = vec4(c, m * uFade * 0.55 * smoothstep(8.0, 2.0, vD));
      }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}
