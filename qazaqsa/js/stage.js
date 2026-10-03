// Один WebGL-холст на всю страницу: главная сцена (hero) + мини-сцены в карточках.
// Каждая «вью» рисуется в прямоугольник своего DOM-элемента (scissor).
import * as THREE from 'three';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import { buildCake, CAKES } from './cakes.js';

const TAU = Math.PI * 2;
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));
export const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

function addLights(scene, shadows) {
  scene.add(new THREE.HemisphereLight(0xfff3e2, 0x5a3e2a, 0.7));
  const key = new THREE.DirectionalLight(0xfff0dc, 2.6);
  key.position.set(3.5, 6, 4);
  if (shadows) {
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    const c = key.shadow.camera;
    c.left = c.bottom = -2.6; c.right = c.top = 2.6; c.near = 1; c.far = 20;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.02;
    key.shadow.radius = 4;
  }
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffd8ac, 1.4);
  rim.position.set(-4, 3, -4);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35);
  fill.position.set(-3, 1.5, 5);
  scene.add(fill);
}

function makeDust(count) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3), seed = new Float32Array(count), size = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = 1.9 + Math.random() * 3.6;
    const th = Math.random() * TAU;
    pos[i * 3] = Math.sin(th) * r;
    pos[i * 3 + 1] = -0.6 + Math.random() * 3.6;
    pos[i * 3 + 2] = Math.cos(th) * r;
    seed[i] = Math.random();
    size[i] = Math.random() < 0.12 ? 3 + Math.random() * 4 : 0.6 + Math.random() * 1.2;
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const m = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPix: { value: 1 }, uOpacity: { value: 1 } },
    vertexShader: /* glsl */ `
      attribute float aSeed; attribute float aSize;
      uniform float uTime; uniform float uPix;
      varying float vA; varying float vSeed; varying float vBig;
      void main(){
        vec3 p = position;
        float t = uTime * 0.22 + aSeed * 40.0;
        p.y += sin(t) * 0.28; p.x += cos(t * 0.7) * 0.16; p.z += sin(t * 0.9) * 0.16;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPix * 30.0 / -mv.z;
        vA = 0.35 + 0.65 * fract(aSeed * 7.13);
        vSeed = aSeed; vBig = step(2.5, aSize);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      varying float vA; varying float vSeed; varying float vBig;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float a = mix(smoothstep(0.5, 0.0, d), smoothstep(0.5, 0.35, d) * 0.45, vBig);
        vec3 col = mix(vec3(0.78, 0.55, 0.26), vec3(0.98, 0.86, 0.6), fract(vSeed * 13.7));
        gl_FragColor = vec4(col, a * vA * uOpacity * mix(0.75, 0.35, vBig));
      }`,
    transparent: true, depthWrite: false,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return pts;
}

export class Stage {
  constructor(canvas, { mobile = false } = {}) {
    this.canvas = canvas;
    this.mobile = mobile;
    const r = (this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: true, alpha: true, powerPreference: 'high-performance',
    }));
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.6 : 1.8);
    r.setPixelRatio(this.pixelRatio);
    r.setClearColor(0x000000, 0);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.autoClear = false;

    const pmrem = new THREE.PMREMGenerator(r);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    this.heroScene = new THREE.Scene();
    this.heroScene.environment = env;
    this.heroScene.environmentIntensity = 0.55;
    addLights(this.heroScene, true);

    this.cardScene = new THREE.Scene();
    this.cardScene.environment = env;
    this.cardScene.environmentIntensity = 0.55;
    addLights(this.cardScene, false);

    this.heroCam = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
    this.cakes = {};
    this.views = [];
    this.modalView = null;
    this.hero = { p: 0, sp: 0, idle: 0, introStart: null, mx: 0, my: 0, smx: 0, smy: 0, rotP: 0, visible: true };
    this.onFrame = null;
    this.clock = new THREE.Clock();
    this._size = { w: 0, h: 0 };
    this._target = new THREE.Vector3();
    this._perf = { acc: 0, n: 0 };
  }

  async init(products, onProgress = () => {}) {
    const seg = this.mobile ? 72 : 96;
    const ids = [...new Set(products.map((p) => p.cake))];
    let done = 0;
    const total = ids.length + 3;
    // главный торт
    this.heroCake = buildCake(CAKES.hero, { segments: this.mobile ? 110 : 160 });
    this.heroScene.add(this.heroCake.group);
    this.dust = makeDust(this.mobile ? 90 : 170);
    this.dust.material.uniforms.uPix.value = this.pixelRatio;
    this.heroScene.add(this.dust);
    onProgress(++done / total);
    await nextFrame();
    for (const id of ids) {
      this.cakes[id] = buildCake(CAKES[id], { segments: seg });
      onProgress(++done / total);
      if (done % 3 === 0) await nextFrame();
    }
    // компилируем шейдеры заранее, пока висит заставка
    this._resize();
    const tmp = new THREE.Group();
    Object.values(this.cakes).forEach((c, i) => { c.group.position.x = (i % 6) * 0.01; tmp.add(c.group); });
    this.cardScene.add(tmp);
    const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
    cam.position.set(0, 2.5, 6);
    cam.lookAt(0, 0.3, 0);
    try {
      if (this.renderer.compileAsync) {
        await this.renderer.compileAsync(this.cardScene, cam);
        onProgress(++done / total);
        this.heroCam.position.set(0, 1.5, 6);
        this.heroCam.lookAt(0, 0.3, 0);
        await this.renderer.compileAsync(this.heroScene, this.heroCam);
      }
    } catch (e) { /* не критично — скомпилируется при первом кадре */ }
    Object.values(this.cakes).forEach((c) => { tmp.remove(c.group); c.group.position.set(0, 0, 0); });
    this.cardScene.remove(tmp);
    onProgress(1);
  }

  addView(el, cakeId, kind = 'card') {
    const v = {
      el, kind, cake: this.cakes[cakeId], cakeId,
      cam: new THREE.PerspectiveCamera(kind === 'feature' ? 28 : 26, 1, 0.1, 60),
      state: { hover: false, h: 0, px: 0, py: 0, rot: Math.random() * TAU, seed: Math.random() * 10, vel: 0, tilt: 0.0, drag: false, idleT: 0 },
    };
    this.views.push(v);
    return v;
  }

  removeView(v) {
    const i = this.views.indexOf(v);
    if (i >= 0) this.views.splice(i, 1);
    if (this.modalView === v) this.modalView = null;
  }

  setModal(v) { this.modalView = v; }

  startIntro() { this.hero.introStart = this.clock.getElapsedTime(); }

  start() {
    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      this.frame();
    };
    loop();
  }

  // слабое устройство? — понижаем плотность пикселей
  _adapt(dt) {
    if (this.hero.introStart == null || document.hidden) return;
    const pf = this._perf;
    pf.acc += dt; pf.n++;
    if (pf.n < 90) return;
    const avg = pf.acc / pf.n;
    pf.acc = 0; pf.n = 0;
    if (avg > 1 / 38 && this.pixelRatio > 1) {
      this.pixelRatio = Math.max(1, this.pixelRatio - 0.3);
      this.renderer.setPixelRatio(this.pixelRatio);
      this._size = { w: 0, h: 0 };
      if (this.dust) this.dust.material.uniforms.uPix.value = this.pixelRatio;
    }
  }

  _resize() {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    if (w !== this._size.w || h !== this._size.h) {
      this._size = { w, h };
      this.renderer.setSize(w, h, false);
    }
  }

  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const t = this.clock.getElapsedTime();
    this._adapt(dt);
    this._resize();
    const r = this.renderer;
    const { w: W, h: H } = this._size;
    const cr = this.canvas.getBoundingClientRect();
    r.setScissorTest(false);
    r.clear();
    r.setScissorTest(true);

    const draw = (el, fn) => {
      const rect = el.getBoundingClientRect();
      const left = rect.left - cr.left, top = rect.top - cr.top;
      const right = left + rect.width, bottom = top + rect.height;
      if (rect.width < 2 || rect.height < 2 || bottom < 0 || top > H || right < 0 || left > W) return false;
      const cl = Math.max(0, left), ct = Math.max(0, top), crt = Math.min(W, right), cb = Math.min(H, bottom);
      r.setViewport(left, H - bottom, rect.width, rect.height);
      r.setScissor(cl, H - cb, crt - cl, cb - ct);
      r.clearDepth();
      fn(rect);
      return true;
    };

    if (this.modalView) {
      const v = this.modalView;
      draw(v.el, (rect) => this._renderView(v, t, dt, rect));
    } else {
      if (this.heroEl) {
        this.hero.visible = draw(this.heroEl, (rect) => this._renderHero(t, dt, rect));
      }
      for (const v of this.views) if (v.show !== false) draw(v.el, (rect) => this._renderView(v, t, dt, rect));
    }
    if (this.onFrame) this.onFrame(t, dt);
  }

  /* ---------------- hero ---------------- */
  _renderHero(t, dt, rect) {
    const S = this.hero;
    S.sp = damp(S.sp, S.p, 4.5, dt);
    S.smx = damp(S.smx, S.mx, 3, dt);
    S.smy = damp(S.smy, S.my, 3, dt);
    const p = S.sp;
    const cake = this.heroCake;
    const g = cake.group;

    // появление: торт опускается сверху с закруткой
    const it = S.introStart == null ? 0 : clamp01((t - S.introStart) / 1.9);
    const drop = easeOutCubic(it);
    const bounce = Math.sin(it * Math.PI) * 0.12 * (1 - it);

    // полный оборот на 360° за скролл
    S.rotP = easeInOut(clamp01((p - 0.03) / 0.74));
    S.idle += dt * 0.14 * (1 - S.rotP * 0.6);
    g.rotation.y = -0.5 + S.idle + S.rotP * TAU - (1 - drop) * 2.4;
    g.position.y = lerp(3.4, 0, drop) + bounce + Math.sin(t * 1.1) * 0.035 * drop;
    const sc = lerp(0.6, 1, drop);
    g.scale.setScalar(sc);

    // кусочек выезжает и возвращается
    const o = smooth(0.2, 0.36, p) * (1 - smooth(0.6, 0.76, p));
    const idleSlice = 0.06 + Math.sin(t * 1.3) * 0.02;
    cake.setSlice(idleSlice * (1 - o) + o * 0.75, o * 0.32, -o * 0.24);

    // камера
    const aspect = rect.width / rect.height;
    const k = aspect < 1 ? lerp(1.15, 2.05, clamp01((1 - aspect) / 0.55)) : (aspect < 1.3 ? 1.12 : 1);
    const a = smooth(0, 0.55, p), b = smooth(0.55, 1, p);
    const dm = lerp(1, 1.32, b);
    const camY = lerp(lerp(2.35, 3.1, a), 6.0, b) * dm;
    const camZ = lerp(lerp(6.9, 6.2, a), 4.2, b) * dm;
    const cam = this.heroCam;
    cam.aspect = aspect;
    cam.position.set(S.smx * 0.45, (camY + S.smy * 0.25) * k, camZ * k);
    const ty = lerp(0.2, 0.12, a) - b * (aspect < 1 ? 0.9 : 0.85) + (aspect < 1 ? -0.12 : 0);
    this._target.set(0, ty, 0);
    cam.lookAt(this._target);
    cam.updateProjectionMatrix();

    this.dust.material.uniforms.uTime.value = t;
    this.dust.material.uniforms.uOpacity.value = drop;
    this.dust.rotation.y = -S.rotP * 1.4 + t * 0.02;
    this.renderer.render(this.heroScene, cam);
  }

  /* ---------------- карточки / модалка ---------------- */
  _renderView(v, t, dt, rect) {
    const s = v.state;
    const cake = v.cake;
    const g = cake.group;
    const aspect = rect.width / rect.height;
    const cam = v.cam;
    cam.aspect = aspect;

    if (v.kind === 'modal') {
      if (!s.drag) {
        s.rot += s.vel * dt;
        s.vel = damp(s.vel, 0, 2.2, dt);
        s.idleT += dt;
        if (s.idleT > 1.2) s.rot += dt * 0.35 * Math.min(1, (s.idleT - 1.2));
        s.tilt = damp(s.tilt, 0, 1.5, dt);
      }
      g.rotation.set(s.tilt, s.rot, 0);
      g.position.set(0, Math.sin(t * 1.1) * 0.03, 0);
      g.scale.setScalar(1);
      cake.setSlice(0.42 + Math.sin(t * 1.4) * 0.04, 0.02, 0);
      const k = aspect < 1.25 ? 1 + (1.25 - aspect) * 0.85 : 1;
      cam.position.set(0, 2.7 * k, 7.0 * k);
      cam.lookAt(0, 0.22, 0);
    } else if (v.kind === 'feature') {
      s.h = damp(s.h, s.hover ? 1 : 0, 5, dt);
      s.rot += dt * (0.18 + s.h * 0.5);
      g.rotation.set(0, s.rot, 0);
      g.position.set(0, Math.sin(t * 1.0 + s.seed) * 0.04, 0);
      g.scale.setScalar(1);
      cake.setSlice(0.2 + 0.25 * s.h + Math.sin(t * 1.2) * 0.04, 0.04 * s.h, 0);
      const k = (aspect < 1 ? 1 + (1 - aspect) * 0.8 : 1) * 1.12;
      cam.position.set(0, 3.9 * k, 4.6 * k);
      cam.lookAt(0, 0.12, 0);
    } else {
      s.h = damp(s.h, s.hover ? 1 : 0, 6, dt);
      s.rot += dt * (0.24 + s.h * 0.9);
      s.appear = Math.min(1, (s.appear ?? 1) + dt * 1.3);
      const ap = easeOutBack(s.appear);
      g.rotation.set(0, s.rot + s.px * 0.45 * s.h - (1 - ap) * 1.6, 0);
      g.position.set(0, Math.sin(t * 1.1 + s.seed) * 0.035 + s.h * 0.06 + (1 - easeOutCubic(s.appear)) * 0.9, 0);
      g.scale.setScalar(0.6 + 0.4 * ap);
      cake.setSlice(0.3 + 0.22 * s.h + Math.sin(t * 1.3 + s.seed) * 0.03, 0.04 * s.h, 0);
      const k = aspect < 1.1 ? 1 + (1.1 - aspect) * 0.75 : 1;
      cam.position.set(0, 2.45 * k, 5.5 * k);
      cam.lookAt(0, 0.3 - s.h * 0.02, 0);
    }
    cam.updateProjectionMatrix();
    this.cardScene.add(g);
    this.renderer.render(this.cardScene, cam);
    this.cardScene.remove(g);
  }
}
