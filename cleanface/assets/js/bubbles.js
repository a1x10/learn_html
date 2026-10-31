/* =========================================================
   CLEANFACE — 3D soap bubbles behind "Why us"
   Thin-film iridescence + fresnel rim, wobbling surface,
   mouse parallax and scroll drift. Pauses off-screen.
   ========================================================= */
import * as THREE from "three";

const canvas = document.getElementById("whyGL");
const section = document.getElementById("why");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch (e) { return false; }
}

if (canvas && section && supportsWebGL()) init();

function init() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  const vert = /* glsl */ `
    uniform float uTime;
    uniform float uSeed;
    varying vec3 vN;
    varying vec3 vV;
    varying vec3 vW;
    void main() {
      vec3 p = position;
      float w = sin(p.x * 2.1 + uTime * 1.3 + uSeed) * sin(p.y * 2.4 + uTime * 1.1 + uSeed * 2.0) * 0.045
              + sin(p.z * 3.0 + uTime * 1.7 + uSeed * 3.0) * 0.025;
      p += normal * w;
      vec4 wp = modelMatrix * vec4(p, 1.0);
      vW = wp.xyz;
      vN = normalize(mat3(modelMatrix) * normal);
      vV = normalize(cameraPosition - wp.xyz);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`;

  const frag = /* glsl */ `
    uniform float uTime;
    uniform float uSeed;
    varying vec3 vN;
    varying vec3 vV;
    varying vec3 vW;
    vec3 film(float t) {
      return 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.33, 0.67) + t));
    }
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(vV);
      float ndv = abs(dot(N, V));
      float fres = pow(1.0 - ndv, 2.4);
      float swirl = sin(vW.y * 1.7 + uTime * 0.6 + uSeed) * 0.25 + sin(vW.x * 1.3 - uTime * 0.4) * 0.2;
      vec3 irid = film(ndv * 1.4 + swirl + uTime * 0.05 + uSeed * 0.1);
      vec3 base = mix(vec3(0.75, 0.88, 1.0), irid, 0.8);
      // two soft lights for highlights
      vec3 L1 = normalize(vec3(-0.5, 0.7, 0.6));
      vec3 L2 = normalize(vec3(0.7, -0.2, 0.5));
      float s1 = pow(max(dot(N, normalize(L1 + V)), 0.0), 120.0);
      float s2 = pow(max(dot(N, normalize(L2 + V)), 0.0), 40.0) * 0.35;
      vec3 col = base * (fres * 1.25 + 0.06) + vec3(s1 + s2);
      float a = clamp(fres * 0.95 + 0.05 + s1, 0.0, 1.0);
      gl_FragColor = vec4(col, a);
    }`;

  const geo = new THREE.IcosahedronGeometry(1, 24);
  const bubbles = [];
  const small = innerWidth < 760;
  const N = small ? 9 : 16;

  for (let i = 0; i < N; i++) {
    const mat = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: { uTime: { value: 0 }, uSeed: { value: Math.random() * 10 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const m = new THREE.Mesh(geo, mat);
    const s = i === 0 ? 2.6 : 0.25 + Math.pow(Math.random(), 1.6) * 1.5;
    m.scale.setScalar(s);
    const spread = small ? 5 : 9;
    m.position.set(
      i === 0 ? (small ? 1.5 : 4.2) : (Math.random() - 0.5) * spread * 2,
      i === 0 ? 1.2 : (Math.random() - 0.5) * 12,
      i === 0 ? -1 : (Math.random() - 0.5) * 6 - 1
    );
    m.userData = {
      base: m.position.clone(),
      speed: 0.15 + Math.random() * 0.35,
      amp: 0.2 + Math.random() * 0.5,
      phase: Math.random() * 6.28,
      rise: 0.12 + Math.random() * 0.3,
    };
    scene.add(m);
    bubbles.push(m);
  }

  // drifting sparkles (tiny droplets)
  const PCOUNT = small ? 140 : 320;
  const pos = new Float32Array(PCOUNT * 3);
  for (let i = 0; i < PCOUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 26;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }
  const pgeo = new THREE.BufferGeometry();
  pgeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const dot = document.createElement("canvas");
  dot.width = dot.height = 64;
  const dc = dot.getContext("2d");
  const gr = dc.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, "rgba(255,255,255,1)");
  gr.addColorStop(0.3, "rgba(200,240,160,.6)");
  gr.addColorStop(1, "rgba(255,255,255,0)");
  dc.fillStyle = gr; dc.fillRect(0, 0, 64, 64);
  const points = new THREE.Points(pgeo, new THREE.PointsMaterial({
    size: 0.09, map: new THREE.CanvasTexture(dot), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  scene.add(points);

  // sizing
  function resize() {
    const w = section.clientWidth, h = section.clientHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // keep the composition similar on tall (mobile) sections
    camera.fov = camera.aspect < 0.8 ? 60 : 40;
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener("resize", resize);
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(section);

  // interaction
  let mx = 0, my = 0, cx = 0, cy = 0;
  addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });

  let visible = false;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }, { rootMargin: "100px 0px" }).observe(section);

  const clock = new THREE.Clock();
  let t = 0;
  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(0.05, clock.getDelta());
    if (!visible) return;
    t += reduced ? 0 : dt;
    cx += (mx - cx) * 0.04; cy += (my - cy) * 0.04;
    const r = section.getBoundingClientRect();
    const sp = (innerHeight - r.top) / (innerHeight + r.height); // 0..1 while passing
    camera.position.x = cx * 1.6;
    camera.position.y = -cy * 1.2 - (sp - 0.5) * 3;
    camera.lookAt(0, -(sp - 0.5) * 3, 0);

    bubbles.forEach((b) => {
      const u = b.userData;
      b.material.uniforms.uTime.value = t;
      let y = u.base.y + ((t * u.rise) % 14);
      if (y > 7) y -= 14;
      b.position.set(
        u.base.x + Math.sin(t * u.speed + u.phase) * u.amp,
        b === bubbles[0] ? u.base.y + Math.sin(t * 0.5) * 0.3 : y,
        u.base.z + Math.cos(t * u.speed * 0.8 + u.phase) * u.amp * 0.6
      );
      b.rotation.y = t * 0.2 + u.phase;
    });
    points.rotation.y = t * 0.02;
    points.position.y = Math.sin(t * 0.3) * 0.3;
    renderer.render(scene, camera);
  }
  tick();
}
