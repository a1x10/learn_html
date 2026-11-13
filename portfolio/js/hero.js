/* =========================================================
   HERO — живая перламутровая форма на Three.js
   ========================================================= */

(() => {
  'use strict';

  let THREE;
  let RoomEnvironment;
  const canvas = document.getElementById('hero-canvas');
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOBILE = matchMedia('(max-width: 760px)').matches;

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

  const BLOB_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vObjN;
  varying float vDisp;
  ${NOISE}
  const float RADIUS = 1.55;
  float disp(vec3 p){
    float n = snoise(p * uFreq + vec3(uTime * 0.16, uTime * 0.11, -uTime * 0.07));
    float n2 = snoise(p * uFreq * 2.2 + vec3(-uTime * 0.1, uTime * 0.18, uTime * 0.05)) * 0.32;
    return (n + n2) * uAmp;
  }
  void main(){
    vec3 n0 = normalize(position);
    float d = disp(n0);
    vec3 pos = n0 * (RADIUS + d);
    vec3 helper = abs(n0.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 t = normalize(cross(n0, helper));
    vec3 b = normalize(cross(n0, t));
    float e = 0.012;
    vec3 n1 = normalize(n0 + t * e);
    vec3 n2 = normalize(n0 + b * e);
    vec3 p1 = n1 * (RADIUS + disp(n1));
    vec3 p2 = n2 * (RADIUS + disp(n2));
    vec3 nrm = normalize(cross(p1 - pos, p2 - pos));
    if (dot(nrm, n0) < 0.0) nrm = -nrm;
    vDisp = d;
    vObjN = nrm;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vView = -mv.xyz;
    vN = normalize(normalMatrix * nrm);
    gl_Position = projectionMatrix * mv;
  }`;

  const BLOB_FRAG = /* glsl */ `
  uniform float uTime;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vObjN;
  varying float vDisp;
  vec3 pal(float t){
    vec3 a = vec3(0.74, 0.73, 0.87);
    vec3 b = vec3(0.27, 0.24, 0.15);
    vec3 d = vec3(0.00, 0.20, 0.45);
    return a + b * cos(6.28318 * (t + d));
  }
  void main(){
    vec3 N = normalize(vN);
    vec3 V = normalize(vView);
    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = pow(1.0 - ndv, 2.6);
    float t = vObjN.y * 0.32 + vObjN.x * 0.18 + vDisp * 1.35 + uTime * 0.035;
    vec3 base = pal(t);
    vec3 L1 = normalize(vec3(-0.45, 0.9, 0.65));
    vec3 L2 = normalize(vec3(0.85, -0.25, 0.45));
    float dif = max(dot(N, L1), 0.0) * 0.5 + max(dot(N, L2), 0.0) * 0.22 + 0.5;
    vec3 col = base * dif;
    vec3 H = normalize(L1 + V);
    col += vec3(1.0) * pow(max(dot(N, H), 0.0), 90.0) * 0.6;
    col += vec3(1.0) * pow(max(dot(N, normalize(L2 + V)), 0.0), 40.0) * 0.12;
    vec3 rim = pal(t + 0.45 + fres * 0.5);
    col = mix(col, rim * 1.12, fres * 0.8);
    col += smoothstep(0.55, 1.0, N.y) * 0.05;
    gl_FragColor = vec4(min(col, vec3(1.0)), 1.0);
  }`;

  function roundSprite() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.45, 'rgba(255,255,255,.85)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  if (canvas) {
    (async () => {
      try {
        THREE = await import('three');
        ({ RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js'));
        init();
      } catch (e) {
        console.warn('Hero: WebGL или Three.js недоступны', e);
      }
    })();
  }

  function init() {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, MOBILE ? 1.6 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const root = new THREE.Group();
    scene.add(root);

    /* --- Капля --- */
    const seg = MOBILE ? 140 : 220;
    const blobMat = new THREE.ShaderMaterial({
      vertexShader: BLOB_VERT,
      fragmentShader: BLOB_FRAG,
      uniforms: { uTime: { value: 0 }, uAmp: { value: 0.22 }, uFreq: { value: 1.05 } },
      toneMapped: false,
    });
    const blob = new THREE.Mesh(new THREE.SphereGeometry(1, seg, seg), blobMat);
    root.add(blob);

    /* --- Орбиты и жемчужины --- */
    const pearlMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.14,
      metalness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      iridescence: 1,
      iridescenceIOR: 1.35,
      iridescenceThicknessRange: [180, 620],
      envMapIntensity: 1.25,
    });
    const orbits = [
      { r: 2.55, tilt: [1.2, 0.35], speed: 0.32, size: 0.2, phase: 0 },
      { r: 2.95, tilt: [1.35, -0.55], speed: -0.22, size: 0.13, phase: 2.1 },
      { r: 2.3, tilt: [0.25, 0.9], speed: 0.42, size: 0.1, phase: 4.2 },
    ];
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8c88d8, transparent: true, opacity: 0.22, toneMapped: false });
    orbits.forEach((o) => {
      o.group = new THREE.Group();
      o.group.rotation.set(o.tilt[0], o.tilt[1], 0);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(o.r, 0.0065, 8, 220), ringMat);
      o.group.add(ring);
      o.pearl = new THREE.Mesh(new THREE.SphereGeometry(o.size, 48, 48), pearlMat);
      o.group.add(o.pearl);
      root.add(o.group);
    });

    /* --- Пыль --- */
    const COUNT = MOBILE ? 180 : 360;
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 3.2 + Math.random() * 5;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7;
      pos[i * 3 + 2] = r * Math.cos(ph) - 2;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({ size: 0.06, map: roundSprite(), color: 0x8f8ad6, transparent: true, opacity: 0.55, depthWrite: false, toneMapped: false })
    );
    scene.add(dust);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xe8e6ff, 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(-3, 5, 4);
    scene.add(dir);

    /* --- Размеры --- */
    let baseScale = 1;
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      baseScale = camera.aspect < 0.8 ? 0.72 : camera.aspect < 1.2 ? 0.86 : 1;
      camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(canvas);
    resize();

    /* --- Мышь --- */
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, energy: 0 };
    let lastX = 0, lastY = 0;
    addEventListener('pointermove', (e) => {
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;
      mouse.energy = Math.min(1, mouse.energy + Math.hypot(nx - lastX, ny - lastY) * 1.6);
      lastX = nx;
      lastY = ny;
      mouse.tx = nx;
      mouse.ty = ny;
    });

    /* --- Видимость --- */
    let visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);

    /* --- Цикл --- */
    const clock = new THREE.Clock();
    const introAt = REDUCED ? 0 : 1.25;
    const t0 = performance.now();
    let t = 0;
    const easeOutElastic = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : Math.pow(2, -9 * x) * Math.sin((x * 10 - 0.75) * ((2 * Math.PI) / 3.2)) + 1);

    const render = () => {
      requestAnimationFrame(render);
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!visible) return;
      t += REDUCED ? 0 : dt;

      const real = (performance.now() - t0) / 1000;
      const intro = REDUCED ? 1 : easeOutElastic(Math.min(1, Math.max(0, (real - introAt) / 2.2)));
      const scrollP = Math.min(1.2, scrollY / Math.max(1, innerHeight));

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      mouse.energy *= 0.96;

      blobMat.uniforms.uTime.value = t;
      blobMat.uniforms.uAmp.value = 0.2 + mouse.energy * 0.14 + scrollP * 0.12 + Math.sin(t * 0.6) * 0.025;

      root.rotation.y = t * 0.08 + mouse.x * 0.45;
      root.rotation.x = mouse.y * 0.28 + scrollP * 0.6;
      const s = baseScale * (0.35 + intro * 0.65) * (1 + scrollP * 0.35);
      root.scale.setScalar(s);
      root.position.y = scrollP * 1.4 + Math.sin(t * 0.8) * 0.06;

      orbits.forEach((o) => {
        const a = o.phase + t * o.speed;
        o.pearl.position.set(Math.cos(a) * o.r, Math.sin(a) * o.r, 0);
      });
      ringMat.opacity = 0.22 * intro;
      pearlMat.opacity = 1;

      dust.rotation.y = t * 0.02 + mouse.x * 0.1;
      dust.rotation.x = mouse.y * 0.06;

      renderer.render(scene, camera);
    };
    render();
  }
})();
