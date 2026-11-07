// 3D-сцена в первом экране: переливающееся «ядро» и парящие объекты-категории
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { reduced } from './ui.js';

const PALETTE = {
  dark: { core: 0x7c5cff, a: 0xc6ff3d, b: 0xff4fd8, c: 0x38e1ff, d: 0xffffff, coin: 0xffcf3d, env: 0.9 },
  light: { core: 0x6a4bff, a: 0x9be000, b: 0xff3fb4, c: 0x00b3e6, d: 0x15151c, coin: 0xffb400, env: 1.1 },
};

function rubTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#ffcf3d'; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(0,0,0,.18)'; g.lineWidth = 10; g.beginPath(); g.arc(128, 128, 108, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#3a2600'; g.font = '800 150px Unbounded, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('₽', 128, 138);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function initScene(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch { canvas.remove(); return { setTheme() {} }; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  const root = new THREE.Group();
  scene.add(root);

  // ——— Ядро: икосаэдр, деформируемый шумом в вершинном шейдере
  const uniforms = { uTime: { value: 0 }, uAmp: { value: 0.32 } };
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: PALETTE.dark.core, roughness: 0.12, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.08,
    iridescence: 1, iridescenceIOR: 1.6, iridescenceThicknessRange: [200, 900], sheen: 0.6, sheenColor: new THREE.Color(0xff4fd8),
  });
  coreMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uTime; uniform float uAmp;
        vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
        vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
        vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
        float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
          vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
          vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
          i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
          float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
          vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
          vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
          vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
          return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
        float disp(vec3 p){return snoise(p*.75+vec3(0.,0.,uTime*.25))*uAmp;}`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        vec3 tang=normalize(cross(objectNormal,vec3(0.,1.,.001)));vec3 bit=normalize(cross(objectNormal,tang));
        float e=.02;vec3 p0=position+objectNormal*disp(position);
        vec3 pa=position+tang*e;pa+=normalize(pa)*disp(pa);vec3 pb=position+bit*e;pb+=normalize(pb)*disp(pb);
        objectNormal=normalize(cross(pa-p0,pb-p0));`)
      .replace('#include <begin_vertex>', `vec3 transformed=position+normal*disp(position);`);
  };
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(2.1, 48), coreMat);
  root.add(core);

  // Кольцо вокруг ядра
  const ringMat = new THREE.MeshPhysicalMaterial({ color: PALETTE.dark.a, metalness: 0.6, roughness: 0.2, clearcoat: 1 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.1, 0.06, 16, 160), ringMat);
  ring.rotation.set(1.2, 0.3, 0);
  root.add(ring);

  // ——— Парящие объекты
  const coinTex = rubTexture();
  const mats = {
    a: new THREE.MeshPhysicalMaterial({ color: PALETTE.dark.a, roughness: 0.25, metalness: 0.1, clearcoat: 1 }),
    b: new THREE.MeshPhysicalMaterial({ color: PALETTE.dark.b, roughness: 0.2, metalness: 0.2, clearcoat: 1 }),
    c: new THREE.MeshPhysicalMaterial({ color: PALETTE.dark.c, roughness: 0.05, transmission: 0.9, thickness: 1.2, ior: 1.4 }),
    d: new THREE.MeshPhysicalMaterial({ color: PALETTE.dark.d, roughness: 0.35, metalness: 0.9 }),
    coinSide: new THREE.MeshStandardMaterial({ color: PALETTE.dark.coin, metalness: 1, roughness: 0.25 }),
    coinFace: new THREE.MeshStandardMaterial({ map: coinTex, metalness: 0.7, roughness: 0.3 }),
  };
  const geos = {
    box: new THREE.BoxGeometry(1, 1, 1, 4, 4, 4),
    torus: new THREE.TorusGeometry(0.55, 0.22, 24, 64),
    sphere: new THREE.SphereGeometry(0.55, 48, 32),
    cone: new THREE.ConeGeometry(0.55, 1.1, 4),
    knot: new THREE.TorusKnotGeometry(0.42, 0.14, 128, 16),
    coin: new THREE.CylinderGeometry(0.62, 0.62, 0.14, 48),
    oct: new THREE.OctahedronGeometry(0.62),
  };
  const defs = [
    ['coin', 'coin', [-5.2, 2.2, 0.5], 1.15], ['torus', 'b', [5.1, 2.4, -0.5], 1.1], ['box', 'a', [-4.4, -2.6, 1], 0.9],
    ['sphere', 'c', [4.6, -2.2, 1.6], 1.2], ['knot', 'd', [0.2, 3.6, -2.5], 1], ['coin', 'coin', [3.2, -3.8, -1], 0.85],
    ['cone', 'b', [-2.6, -4, -2], 0.9], ['oct', 'a', [6.6, 0.1, -3], 0.9], ['sphere', 'b', [-6.8, -0.2, -3], 0.7],
    ['coin', 'coin', [-1.6, 4.4, -4], 0.7], ['torus', 'c', [1.8, -4.6, 1.2], 0.6], ['box', 'd', [6.2, 4.2, -5], 0.6],
  ];
  const floaters = defs.map(([g, m, p, s], i) => {
    const mesh = g === 'coin'
      ? new THREE.Mesh(geos.coin, [mats.coinSide, mats.coinFace, mats.coinFace])
      : new THREE.Mesh(geos[g], mats[m]);
    if (g === 'coin') mesh.rotation.x = Math.PI / 2;
    mesh.position.set(...p); mesh.scale.setScalar(s);
    mesh.userData = { base: new THREE.Vector3(...p), sp: 0.4 + (i % 5) * 0.13, ph: i * 1.7, rot: new THREE.Vector3((i % 3) * 0.2 + 0.15, (i % 4) * 0.15 + 0.1, 0.08) };
    root.add(mesh);
    return mesh;
  });

  // Частицы
  const N = 420, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - 0.5) * 30; pos[i * 3 + 1] = (Math.random() - 0.5) * 18; pos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4; }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.04, color: 0xffffff, transparent: true, opacity: 0.6, depthWrite: false });
  const points = new THREE.Points(pg, pMat);
  scene.add(points);

  // Свет
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(4, 6, 6); scene.add(key);
  const rim = new THREE.PointLight(0xff4fd8, 30, 30); rim.position.set(-6, -3, 3); scene.add(rim);
  const rim2 = new THREE.PointLight(0x38e1ff, 30, 30); rim2.position.set(6, 3, 2); scene.add(rim2);

  // ——— Ввод
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', (e) => { mouse.tx = e.clientX / innerWidth - 0.5; mouse.ty = e.clientY / innerHeight - 0.5; }, { passive: true });
  let scrollK = 0;
  addEventListener('scroll', () => { scrollK = Math.min(1, scrollY / innerHeight); }, { passive: true });

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // на узких экранах отодвигаем камеру, чтобы объекты не вылезали
    camera.position.z = w < 700 ? 24 : w < 1100 ? 16 : 15;
    // на широких экранах ядро уходит вправо, освобождая место заголовку
    root.position.x = w >= 1100 ? 3.2 : w >= 700 ? 1.6 : 0;
    root.position.y = w < 700 ? 3.2 : 0;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);

  const clock = new THREE.Clock();
  let intro = 0;
  function tick() {
    requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    const speed = reduced ? 0.15 : 1;
    intro = Math.min(1, intro + dt * 0.6);
    const ei = 1 - Math.pow(1 - intro, 4);

    mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
    uniforms.uTime.value = t * speed;
    uniforms.uAmp.value = 0.28 + Math.sin(t * 0.7) * 0.06 + scrollK * 0.25;

    core.rotation.y = t * 0.15 * speed + mouse.x * 0.8;
    core.rotation.x = mouse.y * 0.5;
    core.scale.setScalar((0.4 + 0.6 * ei) * (1 - scrollK * 0.25));
    ring.rotation.z = t * 0.3 * speed;
    ring.rotation.x = 1.2 + mouse.y * 0.4;

    floaters.forEach((m) => {
      const u = m.userData;
      const k = 1 + (1 - ei) * 1.6 + scrollK * 0.6; // разлёт при скролле и при появлении
      m.position.set(
        u.base.x * k + Math.cos(t * u.sp * speed + u.ph) * 0.25,
        u.base.y * k + Math.sin(t * u.sp * speed + u.ph) * 0.45,
        u.base.z + Math.sin(t * 0.3 + u.ph) * 0.3,
      );
      m.rotation.x += u.rot.x * dt * speed; m.rotation.y += u.rot.y * dt * speed; m.rotation.z += u.rot.z * dt * speed;
    });
    points.rotation.y = t * 0.02; points.position.y = scrollK * 2;

    root.rotation.y = mouse.x * 0.35;
    root.rotation.x = mouse.y * 0.2;
    camera.position.y = -scrollK * 2.5;
    camera.lookAt(0, -scrollK * 1.2, 0);
    renderer.render(scene, camera);
  }
  tick();

  function setTheme(theme) {
    const p = PALETTE[theme] || PALETTE.dark;
    coreMat.color.setHex(p.core); ringMat.color.setHex(p.a);
    mats.a.color.setHex(p.a); mats.b.color.setHex(p.b); mats.c.color.setHex(p.c); mats.d.color.setHex(p.d);
    mats.coinSide.color.setHex(p.coin);
    pMat.color.setHex(theme === 'light' ? 0x3b2b8f : 0xffffff);
    pMat.opacity = theme === 'light' ? 0.35 : 0.6;
    renderer.toneMappingExposure = p.env;
  }
  return { setTheme };
}
