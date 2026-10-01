// ═══════════════════════════════════════════════════════════
//  STELLA — 3D-сцена (Three.js)
//  Нейроядро с шейдерной деформацией, галактика из частиц,
//  орбитальные кольца с «кометами» и процедурные 3D-модели.
//  Управление снаружи: window.STELLA_SCENE
// ═══════════════════════════════════════════════════════════
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const canvas = document.getElementById('webgl');
const coarse = matchMedia('(pointer: coarse)').matches;
const isMobile = matchMedia('(max-width: 768px)').matches || coarse;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const cores = navigator.hardwareConcurrency || 4;
const lowPower = isMobile && cores <= 4;

// Состояние, которое анимирует main.js (GSAP + ScrollTrigger)
const state = {
  x: 0,
  y: 0,
  z: 0,
  scale: 1,
  camZ: 8,
  tilt: 0,
  glow: 1,
  models: 1,
  galaxy: 1,
  burst: 0,
  intro: 0,
  anchorMix: 0,
};

const api = {
  state,
  ready: false,
  velocity: 0,
  anchorEl: null,
  // anchor — CSS-селектор элемента страницы, к которому «пристыковывается» ядро
  set(values, duration = 1.6) {
    const { anchor, ...rest } = values;
    const el = anchor ? document.querySelector(anchor) : null;
    if (el) api.anchorEl = el;
    rest.anchorMix = el ? 1 : 0;
    if (window.gsap) window.gsap.to(state, { ...rest, duration, ease: 'power3.inOut', overwrite: 'auto' });
    else Object.assign(state, rest);
  },
  pulse(strength = 1) {
    uniforms.pulse.value = Math.min(2, uniforms.pulse.value + strength);
  },
  burst() {
    if (window.gsap) {
      window.gsap.timeline().to(state, { burst: 1, duration: 0.7, ease: 'power3.out' }).to(state, { burst: 0, duration: 2.4, ease: 'power2.inOut' });
    }
    api.pulse(2);
  },
  intro() {
    if (window.gsap) window.gsap.to(state, { intro: 1, duration: reduced ? 0.01 : 2.6, ease: 'expo.out' });
    else state.intro = 1;
  },
  paused: false,
  setPaused(v) {
    api.paused = v;
  },
};
window.STELLA_SCENE = api;

const uniforms = {
  time: { value: 0 },
  pulse: { value: 0 },
};

function fail(err) {
  console.warn('[STELLA] WebGL недоступен, включён упрощённый фон.', err);
  document.documentElement.classList.add('no-webgl');
  api.ready = true;
  window.dispatchEvent(new Event('stella:scene-ready'));
}

try {
  init();
} catch (err) {
  fail(err);
}

function init() {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
    stencil: false,
  });
  let dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 1.75);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x04030a, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x04030a, 0.022);

  const camera = new THREE.PerspectiveCamera(isMobile ? 55 : 42, window.innerWidth / window.innerHeight, 0.1, 300);
  camera.position.set(0, 0, 18);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  // ─────────────────────────────── шум (Ashima, simplex 3D)
  const NOISE = /* glsl */ `
    vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
    float snoise(vec3 v){
      const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
      vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
      vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
      vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
      i=mod289(i);
      vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
      float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
      vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
      vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
      vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
      vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
      vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
      vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
      vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
      p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
      vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
      return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
    }`;

  // ─────────────────────────────── фон-туманность
  const nebula = new THREE.Mesh(
    new THREE.SphereGeometry(120, 48, 32),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: { uTime: uniforms.time },
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; varying vec3 vDir;
        ${NOISE}
        float fbm(vec3 p){ float f=0.0; float a=0.5; for(int i=0;i<${isMobile ? 3 : 4};i++){ f+=a*snoise(p); p*=2.03; a*=0.5; } return f; }
        void main(){
          vec3 d = normalize(vDir);
          float n1 = fbm(d*2.2 + vec3(uTime*0.01, 0.0, uTime*0.006));
          float n2 = fbm(d*3.4 - vec3(0.0, uTime*0.008, 0.0) + 7.0);
          vec3 col = vec3(0.012,0.008,0.03);
          col += vec3(0.20,0.09,0.55) * smoothstep(-0.1,0.8,n1) * 0.55;
          col += vec3(0.05,0.35,0.55) * smoothstep(0.2,0.9,n2) * 0.32;
          col += vec3(0.55,0.10,0.45) * smoothstep(0.35,0.95,n1*n2*2.0) * 0.25;
          gl_FragColor = vec4(col, 1.0);
        }`,
    }),
  );
  nebula.renderOrder = -10;
  scene.add(nebula);

  // ─────────────────────────────── звёзды
  const starGeo = new THREE.BufferGeometry();
  const STARS = isMobile ? 1400 : 3000;
  {
    const pos = new Float32Array(STARS * 3);
    const seed = new Float32Array(STARS);
    for (let i = 0; i < STARS; i++) {
      const r = 30 + Math.random() * 70;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      pos[i * 3 + 2] = r * Math.cos(ph);
      seed[i] = Math.random();
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    starGeo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  }
  const stars = new THREE.Points(
    starGeo,
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false,
      uniforms: { uTime: uniforms.time, uPR: { value: dpr } },
      vertexShader: /* glsl */ `
        uniform float uTime; uniform float uPR; attribute float aSeed; varying float vA;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          vA = 0.35 + 0.65 * (0.5 + 0.5*sin(uTime*(0.6+aSeed*2.0) + aSeed*40.0));
          gl_PointSize = (1.0 + aSeed*2.2) * uPR * (60.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        varying float vA;
        void main(){ float d = length(gl_PointCoord-0.5); float s = smoothstep(0.5,0.0,d); gl_FragColor = vec4(vec3(0.85,0.88,1.0)*s*vA, s*vA); }`,
    }),
  );
  scene.add(stars);

  // ─────────────────────────────── «сцена» (двигается по скроллу)
  const stage = new THREE.Group();
  scene.add(stage);

  // ── нейроядро
  const coreGroup = new THREE.Group();
  stage.add(coreGroup);

  const coreUniforms = {
    uTime: uniforms.time,
    uPulse: uniforms.pulse,
    uAmp: { value: 0.22 },
    uFreq: { value: 1.25 },
    uGlow: { value: 1 },
    uColA: { value: new THREE.Color('#2a1480') },
    uColB: { value: new THREE.Color('#2de2ff') },
    uColC: { value: new THREE.Color('#ff4fd8') },
  };
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.25, isMobile ? 40 : 80),
    new THREE.ShaderMaterial({
      uniforms: coreUniforms,
      vertexShader: /* glsl */ `
        uniform float uTime; uniform float uAmp; uniform float uFreq; uniform float uPulse;
        varying vec3 vNormal; varying vec3 vView; varying float vNoise;
        ${NOISE}
        float field(vec3 p){
          return snoise(p*uFreq + vec3(uTime*0.22)) + 0.38*snoise(p*uFreq*2.4 - vec3(uTime*0.35));
        }
        vec3 displaced(vec3 p){ return p + normalize(p) * field(p) * (uAmp + uPulse*0.12); }
        void main(){
          vec3 n0 = normalize(position);
          vec3 helper = abs(n0.y) > 0.99 ? vec3(1.0,0.0,0.0) : vec3(0.0,1.0,0.0);
          vec3 t = normalize(cross(n0, helper));
          vec3 b = normalize(cross(n0, t));
          float e = 0.012;
          vec3 p0 = displaced(position);
          vec3 p1 = displaced(position + t*e);
          vec3 p2 = displaced(position + b*e);
          vec3 nn = normalize(cross(p1-p0, p2-p0));
          if (dot(nn, n0) < 0.0) nn = -nn;
          vNoise = field(position);
          vec4 mv = modelViewMatrix * vec4(p0,1.0);
          vView = normalize(-mv.xyz);
          vNormal = normalize(normalMatrix * nn);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uColA; uniform vec3 uColB; uniform vec3 uColC; uniform float uTime; uniform float uGlow; uniform float uPulse;
        varying vec3 vNormal; varying vec3 vView; varying float vNoise;
        void main(){
          vec3 n = normalize(vNormal); vec3 v = normalize(vView);
          float fres = pow(1.0 - max(dot(n,v),0.0), 2.4);
          float t = clamp(vNoise*0.5+0.5, 0.0, 1.0);
          vec3 base = mix(uColA, uColB, smoothstep(0.25, 0.95, t));
          float bands = sin(vNoise*10.0 + uTime*0.9)*0.5+0.5;
          base = mix(base, uColC, bands*0.28);
          vec3 L1 = normalize(vec3(0.6,0.8,0.7));
          vec3 L2 = normalize(vec3(-0.7,-0.3,0.5));
          float diff = max(dot(n,L1),0.0);
          float spec = pow(max(dot(reflect(-L1,n),v),0.0), 32.0);
          float back = max(dot(n,L2),0.0);
          vec3 col = base*(0.14 + 0.66*diff) + uColC*back*0.3 + vec3(spec)*0.45;
          col += mix(uColB, uColC, 0.5 + 0.5*sin(uTime*0.5)) * fres * 0.95;
          col *= uGlow * (0.85 + uPulse*0.5);
          gl_FragColor = vec4(col, 1.0);
        }`,
    }),
  );
  coreGroup.add(core);

  // атмосфера
  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(1.9, 64, 64),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uColor: { value: new THREE.Color('#7b4dff') }, uPulse: uniforms.pulse },
      vertexShader: /* glsl */ `
        varying vec3 vN; varying vec3 vV;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor; uniform float uPulse; varying vec3 vN; varying vec3 vV;
        void main(){ float i = pow(clamp(0.72 + dot(vN, vV), 0.0, 1.0), 4.0); gl_FragColor = vec4(uColor * i * (0.55 + uPulse*0.6), i); }`,
    }),
  );
  coreGroup.add(atmo);

  // каркасная оболочка
  const shell = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.05, 1)),
    new THREE.LineBasicMaterial({ color: 0x8b5cff, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  coreGroup.add(shell);
  const shellDots = new THREE.Points(
    new THREE.IcosahedronGeometry(2.05, 1),
    new THREE.PointsMaterial({ color: 0x9fe9ff, size: 0.045, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  shell.add(shellDots);

  // ── кольца с кометами
  const rings = new THREE.Group();
  coreGroup.add(rings);
  const ringDefs = [
    { r: 2.65, color: '#2de2ff', rot: [1.2, 0.2, 0], speed: 0.35 },
    { r: 3.1, color: '#ff4fd8', rot: [1.75, -0.5, 0.4], speed: -0.25 },
    { r: 3.6, color: '#8b5cff', rot: [0.9, 0.8, -0.3], speed: 0.18 },
  ];
  const cometMats = [];
  for (const def of ringDefs) {
    const holder = new THREE.Group();
    holder.rotation.set(...def.rot);
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(def.r, 0.006, 6, 220),
      new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    holder.add(torus);
    const N = 260;
    const pos = new Float32Array(N * 3);
    const ang = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      pos[i * 3] = Math.cos(a) * def.r;
      pos[i * 3 + 1] = Math.sin(a) * def.r;
      ang[i] = i / N;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aT', new THREE.BufferAttribute(ang, 1));
    const m = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: uniforms.time, uSpeed: { value: def.speed }, uColor: { value: new THREE.Color(def.color) }, uPR: { value: dpr } },
      vertexShader: /* glsl */ `
        uniform float uTime; uniform float uSpeed; uniform float uPR; attribute float aT; varying float vA;
        void main(){
          float head = fract(uTime*uSpeed*0.25);
          float k = uSpeed > 0.0 ? fract(head - aT) : fract(aT - head);
          vA = pow(1.0 - k, 10.0);
          vec4 mv = modelViewMatrix*vec4(position,1.0);
          gl_PointSize = (2.0 + 9.0*vA) * uPR * (8.0 / -mv.z);
          gl_Position = projectionMatrix*mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor; varying float vA;
        void main(){ float d = length(gl_PointCoord-0.5); float s = smoothstep(0.5,0.0,d); gl_FragColor = vec4((uColor + vec3(0.4)*vA) * s * vA * 1.6, s*vA); }`,
    });
    cometMats.push(m);
    holder.add(new THREE.Points(g, m));
    holder.userData.speed = def.speed;
    rings.add(holder);
  }

  // ── галактика
  const GALAXY = isMobile ? (lowPower ? 5000 : 8000) : 16000;
  const galaxyGeo = new THREE.BufferGeometry();
  {
    const pos = new Float32Array(GALAXY * 3);
    const col = new Float32Array(GALAXY * 3);
    const scl = new Float32Array(GALAXY);
    const rnd = new Float32Array(GALAXY * 3);
    const inside = new THREE.Color('#ffb4f2');
    const mid = new THREE.Color('#8b5cff');
    const outside = new THREE.Color('#2de2ff');
    const branches = 4;
    const radius = 11;
    for (let i = 0; i < GALAXY; i++) {
      const r = Math.pow(Math.random(), 1.6) * radius + 2.2;
      const branch = ((i % branches) / branches) * Math.PI * 2;
      const spin = r * 0.42;
      const rp = (v) => Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * v * r * 0.18;
      pos[i * 3] = Math.cos(branch + spin) * r;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = Math.sin(branch + spin) * r;
      rnd[i * 3] = rp(1);
      rnd[i * 3 + 1] = rp(0.45);
      rnd[i * 3 + 2] = rp(1);
      const t = (r - 2.2) / radius;
      const c = t < 0.45 ? inside.clone().lerp(mid, t / 0.45) : mid.clone().lerp(outside, (t - 0.45) / 0.55);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      scl[i] = Math.random();
    }
    galaxyGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    galaxyGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    galaxyGeo.setAttribute('aScale', new THREE.BufferAttribute(scl, 1));
    galaxyGeo.setAttribute('aRandom', new THREE.BufferAttribute(rnd, 3));
  }
  const galaxyUniforms = {
    uTime: uniforms.time,
    uSize: { value: (isMobile ? 34 : 28) * dpr },
    uBurst: { value: 0 },
    uAlpha: { value: 1 },
    uSpin: { value: 0 },
  };
  const galaxy = new THREE.Points(
    galaxyGeo,
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      uniforms: galaxyUniforms,
      vertexShader: /* glsl */ `
        uniform float uTime; uniform float uSize; uniform float uBurst; uniform float uSpin;
        attribute float aScale; attribute vec3 aRandom;
        varying vec3 vColor; varying float vTw;
        void main(){
          vec3 p = position;
          float ang = atan(p.z, p.x);
          float d = length(p.xz);
          ang += (1.0/d) * (uTime*0.9 + uSpin) ;
          p.x = cos(ang)*d; p.z = sin(ang)*d;
          p += aRandom;
          p *= 1.0 + uBurst*(0.5 + aScale*1.2);
          p.y += uBurst * aRandom.y * 6.0;
          vec4 mv = modelViewMatrix*vec4(p,1.0);
          vTw = 0.55 + 0.45*sin(uTime*(1.0+aScale*3.0) + aScale*60.0);
          gl_PointSize = uSize * (0.35 + aScale*0.9) * (1.0 / -mv.z);
          gl_Position = projectionMatrix*mv;
          vColor = color;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uAlpha; varying vec3 vColor; varying float vTw;
        void main(){
          float d = length(gl_PointCoord-0.5);
          float s = pow(max(1.0 - d*2.0, 0.0), 2.6);
          gl_FragColor = vec4(vColor * s * vTw * 0.75 * uAlpha, s);
        }`,
    }),
  );
  const galaxyHolder = new THREE.Group();
  galaxyHolder.rotation.set(0.52, 0, 0.18);
  galaxyHolder.add(galaxy);
  stage.add(galaxyHolder);

  // ── свет для моделей
  scene.add(new THREE.AmbientLight(0x6a5acd, 0.35));
  const lightA = new THREE.PointLight(0x8b5cff, 40, 30, 1.6);
  const lightB = new THREE.PointLight(0x2de2ff, 30, 30, 1.6);
  const lightC = new THREE.PointLight(0xff4fd8, 25, 30, 1.6);
  lightA.position.set(-5, 3, 4);
  lightB.position.set(5, -2, 4);
  lightC.position.set(0, 4, -4);
  scene.add(lightA, lightB, lightC);

  // ─────────────────────────────── процедурные 3D-модели
  function roundedRectShape(w, h, r) {
    const s = new THREE.Shape();
    const x = -w / 2;
    const y = -h / 2;
    s.moveTo(x + r, y);
    s.lineTo(x + w - r, y);
    s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r);
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h);
    s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r);
    s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }

  function screenGeometry(w, h, r) {
    const g = new THREE.ShapeGeometry(roundedRectShape(w, h, r), 8);
    const p = g.attributes.position;
    const uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + w / 2) / w, (p.getY(i) + h / 2) / h);
    return g;
  }

  function canvasTexture(w, h, draw) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    draw(ctx, w, h);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }

  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  const metal = new THREE.MeshPhysicalMaterial({ color: 0x1b1830, metalness: 0.9, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.2 });
  const gold = new THREE.MeshPhysicalMaterial({ color: 0xffc76b, metalness: 1, roughness: 0.22 });
  const FONT = '600 26px Manrope, system-ui, sans-serif';

  // телефон с перепиской
  function makePhone() {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new RoundedBoxGeometry(0.66, 1.32, 0.08, 4, 0.1), metal));
    const tex = canvasTexture(320, 640, (ctx, w, h) => {
      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, '#0f1a22');
      grd.addColorStop(1, '#0b141a');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#1f2c34';
      ctx.fillRect(0, 0, w, 92);
      ctx.fillStyle = '#e7556b';
      ctx.beginPath();
      ctx.arc(42, 58, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = FONT;
      ctx.fillText('Продавец', 74, 66);
      const bubbles = [
        [0, 120, 200, 'Цена 45 000 ₽'],
        [1, 190, 230, 'Заберём сегодня за 38 000?'],
        [0, 260, 190, 'Давайте 40 000'],
        [1, 330, 200, 'Договорились 🤝'],
      ];
      for (const [out, y, bw, text] of bubbles) {
        ctx.fillStyle = out ? '#005c4b' : '#202c33';
        const x = out ? w - bw - 18 : 18;
        rr(ctx, x, y, bw, 52, 14);
        ctx.fill();
        ctx.fillStyle = '#e9edef';
        ctx.font = '600 19px Manrope, system-ui, sans-serif';
        ctx.fillText(text, x + 14, y + 33, bw - 24);
      }
      const ok = ctx.createLinearGradient(40, 0, w - 40, 0);
      ok.addColorStop(0, '#7dffc6');
      ok.addColorStop(1, '#3dffa8');
      ctx.fillStyle = ok;
      rr(ctx, 40, 420, w - 80, 56, 28);
      ctx.fill();
      ctx.fillStyle = '#04120b';
      ctx.font = '800 20px Manrope, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Сэкономлено 5 000 ₽', w / 2, 455);
      ctx.textAlign = 'left';
    });
    const screen = new THREE.Mesh(screenGeometry(0.6, 1.25, 0.08), new THREE.MeshBasicMaterial({ map: tex, color: 0xa8a8b8 }));
    screen.position.z = 0.041;
    g.add(screen);
    return g;
  }

  // SIM-карта
  function makeSim() {
    const g = new THREE.Group();
    const s = new THREE.Shape();
    const w = 0.62;
    const h = 0.86;
    const c = 0.16;
    s.moveTo(-w / 2, -h / 2);
    s.lineTo(w / 2, -h / 2);
    s.lineTo(w / 2, h / 2 - c);
    s.lineTo(w / 2 - c, h / 2);
    s.lineTo(-w / 2, h / 2);
    s.closePath();
    const body = new THREE.Mesh(
      new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.012, bevelSegments: 3 }),
      new THREE.MeshPhysicalMaterial({ color: 0x6d4dff, metalness: 0.35, roughness: 0.25, iridescence: 1, iridescenceIOR: 1.6, clearcoat: 1 }),
    );
    body.position.z = -0.015;
    g.add(body);
    const chipTex = canvasTexture(128, 128, (ctx) => {
      ctx.fillStyle = '#f7c766';
      ctx.fillRect(0, 0, 128, 128);
      ctx.strokeStyle = '#a77a22';
      ctx.lineWidth = 5;
      ctx.strokeRect(6, 6, 116, 116);
      ctx.beginPath();
      ctx.moveTo(64, 6);
      ctx.lineTo(64, 122);
      ctx.moveTo(6, 44);
      ctx.lineTo(122, 44);
      ctx.moveTo(6, 84);
      ctx.lineTo(122, 84);
      ctx.stroke();
    });
    const chip = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.3, 0.02, 2, 0.04), new THREE.MeshPhysicalMaterial({ map: chipTex, metalness: 1, roughness: 0.25 }));
    chip.position.set(0, -0.08, 0.035);
    g.add(chip);
    return g;
  }

  // глобус
  function makeGlobe() {
    const g = new THREE.Group();
    g.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 32, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x0b1a3a, metalness: 0.2, roughness: 0.15, clearcoat: 1, transparent: true, opacity: 0.85 }),
      ),
    );
    g.add(
      new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.SphereGeometry(0.44, 18, 12)),
        new THREE.LineBasicMaterial({ color: 0x2de2ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending }),
      ),
    );
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.012, 8, 120), new THREE.MeshBasicMaterial({ color: 0xff4fd8 }));
    ring.rotation.x = 1.2;
    g.add(ring);
    const moon = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    moon.position.set(0.62, 0, 0);
    ring.add(moon);
    g.userData.ring = ring;
    return g;
  }

  // монитор (удалённое управление)
  function makeMonitor() {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new RoundedBoxGeometry(1.16, 0.74, 0.05, 4, 0.04), metal));
    const tex = canvasTexture(512, 320, (ctx, w, h) => {
      const grd = ctx.createLinearGradient(0, 0, w, h);
      grd.addColorStop(0, '#1b1450');
      grd.addColorStop(1, '#0a2a4a');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      rr(ctx, 60, 40, 390, 230, 12);
      ctx.fill();
      ctx.fillStyle = '#e2e2ee';
      rr(ctx, 60, 40, 390, 28, 12);
      ctx.fill();
      const colors = ['#ff5f57', '#febc2e', '#28c840'];
      colors.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(80 + i * 18, 54, 6, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.fillStyle = '#c9c9da';
      for (let i = 0; i < 4; i++) {
        rr(ctx, 84, 92 + i * 36, 250 - i * 30, 20, 6);
        ctx.fill();
      }
      const b = ctx.createLinearGradient(84, 0, 220, 0);
      b.addColorStop(0, '#7b4dff');
      b.addColorStop(1, '#e543d0');
      ctx.fillStyle = b;
      rr(ctx, 84, 236, 120, 24, 8);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(300, 200);
      ctx.lineTo(300, 236);
      ctx.lineTo(310, 228);
      ctx.lineTo(318, 244);
      ctx.lineTo(324, 241);
      ctx.lineTo(316, 225);
      ctx.lineTo(328, 225);
      ctx.closePath();
      ctx.fill();
    });
    const screen = new THREE.Mesh(screenGeometry(1.08, 0.66, 0.03), new THREE.MeshBasicMaterial({ map: tex, color: 0x9a9aaa }));
    screen.position.z = 0.027;
    g.add(screen);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.3, 16), metal);
    neck.position.set(0, -0.5, -0.05);
    g.add(neck);
    const base = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.03, 0.22, 2, 0.012), metal);
    base.position.set(0, -0.65, -0.05);
    g.add(base);
    return g;
  }

  // пузырь сообщения
  function makeBubble() {
    const g = new THREE.Group();
    const s = roundedRectShape(0.86, 0.56, 0.2);
    const tail = new THREE.Shape();
    tail.moveTo(-0.28, -0.26);
    tail.lineTo(-0.4, -0.46);
    tail.lineTo(-0.08, -0.27);
    const mat = new THREE.MeshPhysicalMaterial({ color: 0x25d366, metalness: 0.1, roughness: 0.2, clearcoat: 1, emissive: 0x0b5a2c, emissiveIntensity: 0.4 });
    const opts = { depth: 0.1, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 5, curveSegments: 16 };
    const body = new THREE.Mesh(new THREE.ExtrudeGeometry([s, tail], opts), mat);
    body.position.z = -0.05;
    g.add(body);
    for (let i = 0; i < 3; i++) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 16), new THREE.MeshBasicMaterial({ color: 0xd8ffe8 }));
      dot.position.set(-0.2 + i * 0.2, 0, 0.1);
      g.add(dot);
    }
    g.userData.dots = g.children.slice(1);
    return g;
  }

  // AI-чип
  function makeChip() {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new RoundedBoxGeometry(0.66, 0.66, 0.1, 3, 0.05), new THREE.MeshPhysicalMaterial({ color: 0x15122a, metalness: 0.6, roughness: 0.35, clearcoat: 1 })));
    const pins = new THREE.InstancedMesh(new THREE.BoxGeometry(0.05, 0.12, 0.03), gold, 24);
    const m = new THREE.Matrix4();
    let k = 0;
    for (let side = 0; side < 4; side++) {
      for (let i = 0; i < 6; i++) {
        const off = -0.25 + i * 0.1;
        const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), (side * Math.PI) / 2);
        const p = new THREE.Vector3(off, 0.39, 0).applyQuaternion(q);
        m.compose(p, q, new THREE.Vector3(1, 1, 1));
        pins.setMatrixAt(k++, m);
      }
    }
    g.add(pins);
    const tex = canvasTexture(256, 256, (ctx, w, h) => {
      const grd = ctx.createLinearGradient(0, 0, w, h);
      grd.addColorStop(0, '#2de2ff');
      grd.addColorStop(0.5, '#8b5cff');
      grd.addColorStop(1, '#ff4fd8');
      ctx.fillStyle = grd;
      rr(ctx, 8, 8, w - 16, h - 16, 30);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '900 110px Unbounded, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('AI', w / 2, h / 2 + 6);
    });
    const top = new THREE.Mesh(screenGeometry(0.42, 0.42, 0.06), new THREE.MeshBasicMaterial({ map: tex, color: 0xb0b0c0 }));
    top.position.z = 0.052;
    g.add(top);
    return g;
  }

  // документ
  function makeDoc() {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.82, 0.02, 2, 0.01), new THREE.MeshPhysicalMaterial({ color: 0x9c98b8, roughness: 0.5 })));
    const tex = canvasTexture(256, 340, (ctx, w, h) => {
      ctx.fillStyle = '#f7f6ff';
      ctx.fillRect(0, 0, w, h);
      const grd = ctx.createLinearGradient(0, 0, w, 0);
      grd.addColorStop(0, '#2de2ff');
      grd.addColorStop(1, '#8b5cff');
      ctx.fillStyle = grd;
      rr(ctx, 22, 24, 150, 22, 8);
      ctx.fill();
      ctx.fillStyle = '#c9c6e0';
      for (let i = 0; i < 6; i++) {
        rr(ctx, 22, 70 + i * 22, 210 - (i % 3) * 30, 10, 5);
        ctx.fill();
      }
      const bars = [60, 95, 75, 120, 100];
      bars.forEach((bh, i) => {
        ctx.fillStyle = i % 2 ? '#8b5cff' : '#2de2ff';
        rr(ctx, 30 + i * 40, 320 - bh, 26, bh, 5);
        ctx.fill();
      });
    });
    const face = new THREE.Mesh(screenGeometry(0.6, 0.8, 0.01), new THREE.MeshBasicMaterial({ map: tex, color: 0x8a8898 }));
    face.position.z = 0.011;
    g.add(face);
    return g;
  }

  const models = new THREE.Group();
  stage.add(models);
  const makers = [makePhone, makeSim, makeGlobe, makeMonitor, makeBubble, makeChip, makeDoc];
  const orbitR = isMobile ? 3.0 : 4.6;
  const modelItems = makers.map((make, i) => {
    const pivot = new THREE.Group();
    const obj = make();
    const a = (i / makers.length) * Math.PI * 2;
    pivot.userData = { a, speed: 0.07 + (i % 3) * 0.015, phase: i * 1.7, radius: orbitR + (i % 2 ? 0.5 : -0.2), y: (i % 3 - 1) * 0.9 };
    obj.scale.setScalar(isMobile ? 0.62 : 0.85);
    obj.userData.base = obj.scale.x;
    obj.userData.spin = (i % 2 ? 1 : -1) * (0.25 + (i % 4) * 0.08);
    pivot.add(obj);
    models.add(pivot);
    return { pivot, obj, hover: 0, sphere: new THREE.Sphere(new THREE.Vector3(), 0.8) };
  });
  models.rotation.x = 0.22;

  // ─────────────────────────────── постобработка
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(dpr);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  const bloomScale = isMobile ? 0.5 : 1;
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth * bloomScale, window.innerHeight * bloomScale),
    isMobile ? 0.5 : 0.62,
    0.5,
    0.3,
  );
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // ─────────────────────────────── ввод
  const pointer = { x: 0, y: 0, sx: 0, sy: 0, active: false };
  window.addEventListener(
    'pointermove',
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      pointer.active = true;
    },
    { passive: true },
  );

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.fov = w < 768 ? 55 : 42;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w * bloomScale, h * bloomScale);
  }
  let resizeRaf = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(resize);
  });

  // ─────────────────────────────── цикл
  const clock = new THREE.Clock();
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const target = new THREE.Vector3();
  const rayA = new THREE.Raycaster();
  const ndcA = new THREE.Vector2();
  const planeA = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const hitA = new THREE.Vector3();
  let frames = 0;
  let fpsTime = 0;
  let adapted = false;
  let first = true;

  function tick() {
    requestAnimationFrame(tick);
    if (api.paused) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    uniforms.time.value = reduced ? t * 0.25 : t;
    uniforms.pulse.value *= Math.pow(0.12, dt);

    // мягкое следование за курсором
    pointer.sx += (pointer.x - pointer.sx) * Math.min(1, dt * 3);
    pointer.sy += (pointer.y - pointer.sy) * Math.min(1, dt * 3);

    const intro = state.intro;
    const vel = Math.max(-3, Math.min(3, api.velocity || 0));

    // камера
    camera.position.x = pointer.sx * 0.7;
    camera.position.y = pointer.sy * 0.45;
    camera.position.z = state.camZ + (1 - intro) * 12;
    camera.lookAt(0, 0, 0);

    // сцена
    const mobileK = window.innerWidth < 768 ? 0.35 : 1;
    target.set(state.x * mobileK, state.y, state.z);
    if (api.anchorEl && state.anchorMix > 0.001) {
      const r = api.anchorEl.getBoundingClientRect();
      if (r.width || r.height) {
        ndcA.set(((r.left + r.width / 2) / window.innerWidth) * 2 - 1, -((r.top + r.height / 2) / window.innerHeight) * 2 + 1);
        rayA.setFromCamera(ndcA, camera);
        planeA.constant = -state.z;
        if (rayA.ray.intersectPlane(planeA, hitA)) target.lerp(hitA, state.anchorMix);
      }
    }
    stage.position.lerp(target, first ? 1 : 1 - Math.exp(-dt * 7));
    stage.rotation.z = state.tilt;
    const sc = state.scale * (0.2 + intro * 0.8);
    coreGroup.scale.setScalar(sc);
    coreGroup.rotation.y += dt * (0.12 + Math.abs(vel) * 0.06);
    coreGroup.rotation.x = pointer.sy * 0.25;
    core.rotation.y += dt * 0.1;
    shell.rotation.y -= dt * 0.08;
    shell.rotation.z += dt * 0.04;
    coreUniforms.uGlow.value = state.glow;
    rings.children.forEach((r, i) => {
      r.rotation.z += dt * r.userData.speed * 0.4;
      r.rotation.y += dt * 0.02 * (i + 1);
    });

    galaxyHolder.rotation.y += dt * (0.02 + vel * 0.02);
    galaxyUniforms.uSpin.value += dt * vel * 0.4;
    galaxyUniforms.uBurst.value = state.burst;
    galaxyUniforms.uAlpha.value = state.galaxy * intro;
    galaxyHolder.scale.setScalar(0.6 + intro * 0.4);

    stars.rotation.y += dt * 0.004;
    nebula.rotation.y += dt * 0.003;

    // модели на орбите
    models.visible = state.models > 0.02;
    ndc.set(pointer.x, pointer.y);
    raycaster.setFromCamera(ndc, camera);
    for (const item of modelItems) {
      const u = item.pivot.userData;
      u.a += dt * u.speed * (1 + Math.abs(vel) * 0.5);
      const r = u.radius * (0.7 + 0.3 * intro);
      item.pivot.position.set(Math.cos(u.a) * r, u.y + Math.sin(t * 0.8 + u.phase) * 0.18, Math.sin(u.a) * r);
      item.obj.rotation.y += dt * item.obj.userData.spin * (1 + item.hover * 4);
      item.obj.rotation.x = Math.sin(t * 0.5 + u.phase) * 0.25;
      item.obj.getWorldPosition(item.sphere.center);
      item.sphere.radius = 0.7 * item.obj.userData.base * state.models;
      const hit = pointer.active && raycaster.ray.intersectsSphere(item.sphere);
      item.hover += ((hit ? 1 : 0) - item.hover) * Math.min(1, dt * 6);
      item.obj.scale.setScalar(item.obj.userData.base * state.models * intro * (1 + item.hover * 0.35));
      if (item.obj.userData.ring) item.obj.userData.ring.rotation.z += dt * 1.2;
      if (item.obj.userData.dots) item.obj.userData.dots.forEach((d, k) => (d.position.y = Math.sin(t * 6 - k * 0.8) * 0.05));
    }

    lightA.position.x = Math.sin(t * 0.3) * 6;
    lightB.position.y = Math.cos(t * 0.25) * 4;

    composer.render(dt);

    if (first) {
      first = false;
      api.ready = true;
      window.dispatchEvent(new Event('stella:scene-ready'));
    }

    // адаптивное качество
    if (!adapted) {
      frames++;
      fpsTime += dt;
      if (fpsTime > 2.5) {
        adapted = true;
        const fps = frames / fpsTime;
        if (fps < 32) {
          dpr = Math.max(1, dpr * 0.7);
          renderer.setPixelRatio(dpr);
          composer.setPixelRatio(dpr);
          resize();
          if (fps < 22) bloom.enabled = false;
        }
      }
    }
  }

  // компиляция шейдеров заранее, чтобы не было рывка
  renderer.compile(scene, camera);
  tick();
}
