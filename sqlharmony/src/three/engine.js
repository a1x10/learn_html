import * as THREE from 'three';
import { createStudioEnvironment } from './env.js';

// Одна WebGL-канва на всю страницу (лежит под текстом). Каждая 3D-сцена («сцена-окно»)
// привязана к своему DOM-блоку и рисуется только в его прямоугольнике (scissor),
// поэтому 3D-объекты прокручиваются вместе с вёрсткой, а контекст WebGL один.

export class Stage {
  constructor(el, opts = {}) {
    this.el = el;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(opts.fov ?? 30, 1, opts.near ?? 0.1, opts.far ?? 100);
    this.width = 0;
    this.height = 0;
    this.enabled = true;
    this.visible = false;
    // сцены со стеклом: фон для «преломления», если в сцене нет своего задника
    this.transmissive = !!opts.transmissive;
    this.bgColor = opts.bgColor ? new THREE.Color(opts.bgColor) : null;
    this.margin = opts.margin ?? 0;
    this.time = 0;
  }

  resize() {}
  update() {}
}

export class Engine {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.stages = [];
    this.failed = false;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    this.isMobile = coarse || window.innerWidth < 760;
    this.maxDpr = opts.maxDpr ?? (this.isMobile ? 1.5 : 1.75);
    this.dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr);

    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        stencil: false,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      this.failed = true;
      return;
    }

    const r = this.renderer;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1;
    r.autoClear = false;
    r.setClearColor(0x000000, 0);
    // прозрачные области канвы показывают фон страницы
    this.pageBg = new THREE.Color('#07080F');
    this.env = createStudioEnvironment(r);
    this.cw = 0;
    this.ch = 0;
    this.resize();
    this._ro = new ResizeObserver(() => this.resize());
    this._ro.observe(canvas);
    this._frames = [];
    this._last = performance.now();
    this._quietFrames = 0;
    // разовые задачи в начале кадра (рендер картинок для галереи)
    this.jobs = [];
  }

  add(stage) {
    stage.engine = this;
    if (stage.scene.environment === null) stage.scene.environment = this.env;
    this.stages.push(stage);
    return stage;
  }

  resize() {
    if (this.failed) return;
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    if (w === this.cw && h === this.ch && this.renderer.getPixelRatio() === this.dpr) return;
    this.cw = w;
    this.ch = h;
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(w, h, false);
  }

  // Предварительная компиляция шейдеров и прогрев (пока виден прелоадер)
  async warmup(onProgress) {
    if (this.failed) return;
    const r = this.renderer;
    const n = this.stages.length;
    for (let i = 0; i < n; i++) {
      const s = this.stages[i];
      s.camera.aspect = 1;
      s.camera.updateProjectionMatrix();
      // скрытые объекты тоже компилируем, чтобы не было подвисаний при появлении
      const hidden = [];
      s.scene.traverse((o) => {
        if (!o.visible) {
          hidden.push(o);
          o.visible = true;
        }
      });
      try {
        await r.compileAsync(s.scene, s.camera);
      } catch (e) {
        /* старые браузеры без parallel compile */
      }
      // один кадр в крошечном окне — создаёт буферы преломления и грузит текстуры на GPU
      r.setScissorTest(true);
      r.setViewport(0, 0, 8, 8);
      r.setScissor(0, 0, 8, 8);
      r.setClearColor(this.pageBg, 1);
      r.render(s.scene, s.camera);
      for (const o of hidden) o.visible = false;
      onProgress?.((i + 1) / n);
      await new Promise((res) => requestAnimationFrame(res));
    }
    r.setScissorTest(false);
    r.setClearColor(0x000000, 0);
    r.clear();
  }

  render(time, dt) {
    if (this.failed) return;
    const r = this.renderer;
    const W = this.cw;
    const H = this.ch;
    let any = false;
    let dirty = false;
    if (this.jobs.length) {
      const job = this.jobs.shift();
      try {
        job();
      } catch (e) {
        console.warn(e);
      }
      dirty = true;
    }

    for (const s of this.stages) {
      if (!s.enabled) {
        if (s.visible) {
          s.visible = false;
          s.onVisibility?.(false);
        }
        continue;
      }
      const rect = s.el.getBoundingClientRect();
      const m = s.margin;
      const left = rect.left - m;
      const top = rect.top - m;
      const w = rect.width + m * 2;
      const h = rect.height + m * 2;
      const vis = w > 2 && h > 2 && top < H && top + h > 0 && left < W && left + w > 0;
      if (vis !== s.visible) {
        s.visible = vis;
        s.onVisibility?.(vis);
      }
      s._rect = vis ? { left, top, w, h } : null;
      if (vis) any = true;
    }

    if (!any) {
      if (dirty) this._quietFrames = 0;
      if (this._quietFrames++ < 2) {
        r.setScissorTest(false);
        r.setClearColor(0x000000, 0);
        r.clear();
      }
      return;
    }
    this._quietFrames = 0;

    r.setScissorTest(false);
    r.setClearColor(0x000000, 0);
    r.clear();

    for (const s of this.stages) {
      if (!s.visible || !s._rect) continue;
      const { left, top, w, h } = s._rect;
      if (Math.abs(s.width - w) > 0.5 || Math.abs(s.height - h) > 0.5) {
        s.width = w;
        s.height = h;
        s.camera.aspect = w / h;
        s.camera.updateProjectionMatrix();
        s.resize(w, h);
      }
      s.time += dt;
      s.update(time, dt);

      const y = H - (top + h);
      r.setViewport(left, y, w, h);
      const sx = Math.max(0, left);
      const sy = Math.max(0, y);
      const sw = Math.min(W, left + w) - sx;
      const sh = Math.min(H, y + h) - sy;
      if (sw <= 0 || sh <= 0) continue;
      r.setScissor(sx, sy, sw, sh);
      r.setScissorTest(true);
      r.clearDepth();
      if (s.transmissive) r.setClearColor(s.bgColor || this.pageBg, 1);
      else r.setClearColor(0x000000, 0);
      r.render(s.scene, s.camera);
    }
    r.setScissorTest(false);
    r.setClearColor(0x000000, 0);
    this._adapt();
  }

  // если кадры долгие — понижаем плотность пикселей
  _adapt() {
    const now = performance.now();
    const ft = now - this._last;
    this._last = now;
    if (ft > 200) return; // вкладка была неактивна
    this._frames.push(ft);
    if (this._frames.length < 90) return;
    const avg = this._frames.reduce((a, b) => a + b, 0) / this._frames.length;
    this._frames.length = 0;
    if (avg > 26 && this.dpr > 1) {
      this.dpr = Math.max(1, this.dpr - 0.25);
      this.resize();
    }
  }
}
