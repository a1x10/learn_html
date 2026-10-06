import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { createEnvironment } from './env.js';

// One fixed full-screen WebGL canvas behind the page. Every 3D object can be
// "anchored" to a DOM element: each frame the element's rectangle is turned into
// world coordinates on a plane at the object's depth, so 3D scrolls with the layout.

export const CAM_Z = 12;
export const FOV = 30;

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uShift: { value: 0 },
    uVignette: { value: 0.9 },
    uRes: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uShift;
    uniform float uVignette;
    uniform vec2 uRes;
    varying vec2 vUv;
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      // lens-like RGB split, stronger at the edges and while scrolling fast
      vec2 off = c * (0.0012 + uShift) * (0.3 + r2 * 2.4);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      // vignette
      float v = smoothstep(0.95, 0.18, r2 * uVignette * 1.6);
      col *= mix(0.62, 1.0, v);
      // fine dither against banding in the dark gradients
      float n = fract(sin(dot(gl_FragCoord.xy + uTime * 61.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) / 255.0 * 2.0;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export class World {
  constructor(canvas, { mobile = false, reduced = false } = {}) {
    this.canvas = canvas;
    this.mobile = mobile;
    this.reduced = reduced;
    this.things = [];
    this.anchors = new Set();
    this.failed = false;
    this.time = 0;
    this.pointer = new THREE.Vector2(0, 0); // -1..1, smoothed
    this.pointerRaw = new THREE.Vector2(0, 0);
    this.scrollVel = 0;

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: false,
        stencil: false,
        powerPreference: 'high-performance',
      });
      if (!this.renderer.capabilities.isWebGL2) throw new Error('WebGL2 required');
    } catch (e) {
      this.failed = true;
      return;
    }

    const r = this.renderer;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1.0;
    r.setClearColor('#05070e', 1);

    this.maxDpr = mobile ? 1.5 : 1.75;
    this.dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr);
    this.useBloom = !mobile;

    this.scene = new THREE.Scene();
    this.env = createEnvironment(r);
    this.scene.environment = this.env;
    this.camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 220);
    this.camera.position.set(0, 0, CAM_Z);
    this.camBase = new THREE.Vector3(0, 0, CAM_Z);
    this.lookAt = new THREE.Vector3(0, 0, 0);

    // shared lights (objects that want them use standard/physical materials)
    const key = new THREE.DirectionalLight('#fff0e0', 1.9);
    key.position.set(-3, 4, 5);
    const rim = new THREE.DirectionalLight('#5b8cff', 0.9);
    rim.position.set(3, 2.5, -8);
    const amb = new THREE.AmbientLight('#3b4670', 0.2);
    // warm bounce from below lifts facets that face down (the fox's cream cheeks)
    const hemi = new THREE.HemisphereLight('#b9c6ff', '#ffb27a', 0.75);
    this.scene.add(key, rim, amb, hemi);
    this.lights = { key, rim, amb, hemi };

    this.w = 0;
    this.h = 0;
    this._buildPost();
    this.resize();
    window.addEventListener('resize', () => this.resize());

    this._frames = [];
    this._last = performance.now();
    this._slowStrikes = 0;

    window.addEventListener(
      'pointermove',
      (e) => {
        this.pointerRaw.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
      },
      { passive: true }
    );
  }

  _buildPost() {
    const r = this.renderer;
    const rt = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType,
      samples: this.mobile ? 0 : 4,
    });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.45, 0.6, 0.9);
    this.bloom.enabled = this.useBloom;
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.final = new ShaderPass(FinalShader);
    this.composer.addPass(this.final);
  }

  resize() {
    if (this.failed) return;
    const w = window.innerWidth;
    let h = window.innerHeight;
    // touch browsers resize the viewport when the address bar slides; the canvas is
    // sized to the large viewport (100lvh), so only grow, unless the width changed
    if (this.mobile && w === this.w && h < this.h) h = this.h;
    if (w === this.w && h === this.h && this.renderer.getPixelRatio() === this.dpr) return;
    this.w = w;
    this.h = h;
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.dpr);
    this.composer.setSize(w, h);
    // bloom at reduced resolution
    this.bloom.resolution.set(w * 0.5, h * 0.5);
    this.final.uniforms.uRes.value.set(w * this.dpr, h * this.dpr);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    for (const t of this.things) t.resize?.(w, h);
  }

  add(thing) {
    thing.world = this;
    this.things.push(thing);
    if (thing.object) this.scene.add(thing.object);
    return thing;
  }

  /** world units per CSS pixel on the plane at depth z */
  unitsPerPx(z = 0) {
    const d = this.camBase.z - z;
    return (2 * d * Math.tan(THREE.MathUtils.degToRad(FOV / 2))) / this.h;
  }

  /** visible world-space size of the viewport at depth z */
  viewSize(z = 0) {
    const u = this.unitsPerPx(z);
    return { w: this.w * u, h: this.h * u };
  }

  /** anchor: follows a DOM element; read .x .y .w .h (world units) and .visible */
  anchor(el, { z = 0, margin = 0.25 } = {}) {
    const a = { el, z, margin, x: 0, y: 0, w: 1, h: 1, px: { left: 0, top: 0, width: 0, height: 0 }, visible: false, progress: 0 };
    this.anchors.add(a);
    return a;
  }

  _updateAnchors() {
    const W = this.w;
    const H = this.h;
    for (const a of this.anchors) {
      if (!a.el) continue;
      const r = a.el.getBoundingClientRect();
      const m = a.margin * H;
      a.px.left = r.left;
      a.px.top = r.top;
      a.px.width = r.width;
      a.px.height = r.height;
      a.visible = r.width > 0 && r.bottom > -m && r.top < H + m;
      const u = this.unitsPerPx(a.z);
      a.x = (r.left + r.width / 2 - W / 2) * u;
      a.y = -(r.top + r.height / 2 - H / 2) * u;
      a.w = r.width * u;
      a.h = r.height * u;
      // 0 when the element's top enters from below, 1 when its bottom leaves at the top
      a.progress = THREE.MathUtils.clamp((H - r.top) / (H + r.height), 0, 1);
    }
  }

  async warmup() {
    if (this.failed) return;
    const hidden = [];
    this.scene.traverse((o) => {
      if (!o.visible) {
        hidden.push(o);
        o.visible = true;
      }
    });
    try {
      await this.renderer.compileAsync(this.scene, this.camera);
    } catch (e) {
      /* parallel shader compile not supported */
    }
    this.composer.render(0.016);
    for (const o of hidden) o.visible = false;
  }

  render(dt) {
    if (this.failed) return;
    this.time += dt;
    const t = this.time;

    // smooth pointer
    const k = 1 - Math.pow(0.0015, dt);
    this.pointer.lerp(this.pointerRaw, k);

    this._updateAnchors();
    for (const thing of this.things) {
      if (thing.enabled === false) continue;
      thing.update?.(t, dt);
    }

    // gentle camera parallax
    const cam = this.camera;
    cam.position.x = this.camBase.x + this.pointer.x * 0.35;
    cam.position.y = this.camBase.y + this.pointer.y * 0.22;
    cam.position.z = this.camBase.z;
    cam.lookAt(this.lookAt);

    // layout viewport can change without a resize event (phones, zoom): follow it
    if (window.innerWidth !== this.w || (!this.mobile && window.innerHeight !== this.h)) this.resize();

    this.final.uniforms.uTime.value = t;
    const vel = Math.min(Math.abs(this.scrollVel) / 4000, 1);
    this.final.uniforms.uShift.value += (vel * 0.012 - this.final.uniforms.uShift.value) * Math.min(1, dt * 6);

    this.composer.render(dt);
    this._adapt();
  }

  // drop resolution, then bloom, if frames are slow
  _adapt() {
    const now = performance.now();
    const ft = now - this._last;
    this._last = now;
    if (ft > 250) return;
    this._frames.push(ft);
    if (this._frames.length < 60) return;
    this._frames.sort((a, b) => a - b);
    const med = this._frames[30];
    this._frames.length = 0;
    if (med > 24) {
      if (this.dpr > 1) {
        this.dpr = Math.max(1, this.dpr - 0.25);
        this.resize();
      } else if (this.bloom.enabled && ++this._slowStrikes > 1) {
        this.bloom.enabled = false;
      }
    }
  }
}
