import * as THREE from 'three';
import { FingerNail } from './models/nail.js';
import { makeCanvas, toTexture } from './textures.js';
import { forgetDesign } from './designs.js';

// «Фото» дизайнов для галереи: рендерим палец с нужным дизайном прямо в основной канве
// (в начале кадра, до обычной отрисовки) и копируем пиксели в картинку.

const BG = {
  'milky-french': ['#f2e2de', '#d8bcb6'],
  cherry: ['#3a131c', '#140a0d'],
  'baby-boomer': ['#f4e8e5', '#dcc5c1'],
  'pearl-chrome': ['#ebe4ee', '#cdc1d6'],
  'cat-eye': ['#2a1019', '#0e0709'],
  'gold-foil': ['#f1e3d8', '#d6bfac'],
  aura: ['#f4dfe9', '#dab6c9'],
  'line-art': ['#f5eee9', '#dccfc5'],
  'red-french': ['#eedbd6', '#cfb1aa'],
  tortoise: ['#40291a', '#1a0f09'],
  'silver-chrome': ['#e0e1e6', '#b4b5be'],
  crystals: ['#2b161c', '#100a0c'],
};

function bgTexture([a, b]) {
  const c = makeCanvas(512, 640);
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(256, 250, 10, 256, 320, 460);
  grd.addColorStop(0, a);
  grd.addColorStop(1, b);
  g.fillStyle = grd;
  g.fillRect(0, 0, 512, 640);
  return toTexture(c);
}

export class GalleryRenderer {
  constructor(engine) {
    this.engine = engine;
    const s = (this.scene = new THREE.Scene());
    s.environment = engine.env;
    s.add(new THREE.HemisphereLight('#fff4f1', '#3a1c24', 0.8));
    const key = new THREE.DirectionalLight('#ffffff', 2.2);
    key.position.set(3, 6, 6);
    s.add(key);
    const rim = new THREE.DirectionalLight('#ffc0cc', 2.0);
    rim.position.set(-4, 3, -5);
    s.add(rim);
    this.camera = new THREE.PerspectiveCamera(24, 4 / 5, 0.1, 60);
    this.pivot = new THREE.Group();
    s.add(this.pivot);
    this.model = new FingerNail({ design: 'natural' });
    this.model.position.y = 0.4;
    this.pivot.add(this.model);
    this.bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ toneMapped: false }));
    s.add(this.bg);
    this.out = makeCanvas(8, 8);
    this.ctx = this.out.getContext('2d');
  }

  // поставить задачу; результат — Blob с картинкой
  shot({ design, angle = 0, tilt = -0.32, roll = 0, w = 600, h = 750, bg }) {
    return new Promise((resolve) => {
      this.engine.jobs.push(() => {
        const r = this.engine.renderer;
        const dpr = r.getPixelRatio();
        const bufW = r.domElement.width;
        const bufH = r.domElement.height;
        const k = Math.min(1, bufW / w, bufH / h);
        const ow = Math.floor(w * k);
        const oh = Math.floor(h * k);

        this.model.applyDesign(design);
        this.pivot.rotation.set(tilt, angle, roll);
        const cam = this.camera;
        cam.aspect = w / h;
        cam.fov = w > h ? 22 : 24;
        cam.updateProjectionMatrix();
        const dist = w > h ? 9.5 : 8.6;
        cam.position.set(0, 0.5, dist);
        cam.lookAt(0, w > h ? 0.25 : 0.05, 0);

        const tex = bgTexture(bg || BG[design] || ['#f1e3e0', '#d9c0bb']);
        this.bg.material.map = tex;
        this.bg.material.needsUpdate = true;
        const bd = dist + 6;
        const bh = 2 * bd * Math.tan((cam.fov * Math.PI) / 360) * 1.1;
        this.bg.scale.set(bh * cam.aspect, bh, 1);
        this.bg.position.set(0, 0, -6);
        this.bg.lookAt(cam.position);

        r.setScissorTest(true);
        r.setViewport(0, 0, ow / dpr, oh / dpr);
        r.setScissor(0, 0, ow / dpr, oh / dpr);
        r.setClearColor(0x000000, 1);
        r.clear();
        r.render(this.scene, cam);
        this.out.width = ow;
        this.out.height = oh;
        this.ctx.drawImage(r.domElement, 0, bufH - oh, ow, oh, 0, 0, ow, oh);
        r.setScissorTest(false);
        r.setClearColor(0x000000, 0);
        tex.dispose();
        this.out.toBlob((blob) => resolve(blob), 'image/jpeg', 0.9);
      });
    });
  }

  dispose(keep = []) {
    for (const d of Object.keys(BG)) if (!keep.includes(d)) forgetDesign(d);
  }
}
