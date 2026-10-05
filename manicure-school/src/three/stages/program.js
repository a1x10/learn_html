import * as THREE from 'three';
import { gsap } from 'gsap';
import { Stage } from '../engine.js';
import { FingerNail } from '../models/nail.js';
import { makeSparkles, makePearl } from '../models/gems.js';
import { lookOf } from '../designs.js';
import { damp, pointer, fitDistance } from '../util.js';

// Программа: тренировочный палец, ноготь проходит этапы курса.
// Смена этапа — «мазок кисти» от кутикулы к кончику + смена формы, золота, страз и ракурса.

// ракурс для каждого модуля: поворот пальца и приближение
const VIEWS = [
  { ry: 0.3, rx: -0.3, zoom: 1.0, y: 0 },
  { ry: -0.25, rx: -0.55, zoom: 1.0, y: 0.15 },
  { ry: 0.15, rx: -0.2, zoom: 1.28, y: -0.35 },
  { ry: 0.72, rx: -0.3, zoom: 1.05, y: 0 },
  { ry: -0.4, rx: -0.35, zoom: 1.02, y: 0 },
  { ry: 0.35, rx: -0.4, zoom: 1.05, y: 0.05 },
  { ry: -0.12, rx: -0.3, zoom: 1.32, y: -0.15 },
  { ry: 0.45, rx: -0.35, zoom: 1.0, y: 0 },
  { ry: 0.0, rx: -0.3, zoom: 0.9, y: 0 },
];

export class NailStage extends Stage {
  constructor(el) {
    super(el, { fov: 28 });
    const s = this.scene;
    s.add(new THREE.HemisphereLight('#fff1ee', '#2a1218', 0.7));
    const key = new THREE.DirectionalLight('#ffffff', 1.9);
    key.position.set(3, 5, 6);
    s.add(key);
    const rim = new THREE.DirectionalLight('#ffb3bf', 2.4);
    rim.position.set(-4, 3, -5);
    s.add(rim);
    const fill = new THREE.DirectionalLight('#ffe2d8', 0.6);
    fill.position.set(-5, -1, 4);
    s.add(fill);

    this.pivot = new THREE.Group();
    s.add(this.pivot);
    this.model = new FingerNail({ design: 'overgrown' });
    this.model.position.y = 0.45;
    this.pivot.add(this.model);

    // жемчужины на фоне — немного глубины
    this.pearls = [makePearl({ size: 0.34 }), makePearl({ size: 0.2 }), makePearl({ size: 0.14 })];
    const pp = [
      [-1.9, 1.3, -1.6],
      [1.7, -0.6, -1.2],
      [1.3, 1.9, -2.2],
    ];
    this.pearls.forEach((p, i) => {
      p.position.set(...pp[i]);
      p.userData.base = p.position.clone();
      s.add(p);
    });

    this.sparkles = makeSparkles({ count: 70, spread: [3.2, 3.6, 2.4], center: [0, 0.9, 0.4], size: 26 });
    this.sparkles.material.uniforms.uOpacity.value = 0;
    s.add(this.sparkles);

    this.view = { ...VIEWS[0] };
    this.index = -1;
    this.state = { shape: 0, length: 1.58, irregular: 1, gems: 0, layout: 0, spin: 0 };
    this.showcase = 0;
    this.tl = null;
    this.target = new THREE.Vector3(0, 0.25, 0);
  }

  resize(w, h) {
    this.dist = fitDistance(this.camera, 3.9, 2.9);
  }

  goTo(i, design, showcase = false) {
    if (i === this.index) return;
    const first = this.index < 0;
    this.index = i;
    const look = lookOf(design);
    const m = this.model;
    const st = this.state;
    if (this.tl) this.tl.kill();
    gsap.killTweensOf(this.view);

    gsap.to(this.view, { ...VIEWS[i], duration: 1.6, ease: 'expo.inOut' });
    gsap.to(this, { showcase: showcase ? 1 : 0, duration: 1.2, ease: 'power2.inOut' });

    if (first) {
      m.applyDesign(design);
      Object.assign(st, { shape: look.shape, length: look.length, irregular: design === 'overgrown' ? 1 : 0 });
      return;
    }

    const same = m.design === design;
    const tl = gsap.timeline();
    this.tl = tl;
    if (!same) {
      m.beginDesign(design);
      m.mix = 0;
      tl.to(m, { mix: 1, duration: 1.25, ease: 'power2.inOut', onComplete: () => m.endDesign() }, 0);
    }
    tl.to(
      m.mat,
      {
        roughness: look.roughness,
        clearcoat: Math.max(look.clearcoat, 0.02),
        metalness: look.metalness,
        iridescence: Math.max(look.iridescence, 0.001),
        duration: 1.1,
        ease: 'power2.inOut',
      },
      0.1
    );
    tl.to(
      st,
      {
        shape: look.shape,
        length: look.length,
        irregular: design === 'overgrown' ? 1 : 0,
        duration: 1.2,
        ease: 'power3.inOut',
        onUpdate: () => m.setShape(st.shape, st.length, st.irregular),
      },
      0
    );
    // золото: появляется после мазка
    tl.to(m, { decalOpacity: look.decal ? 1 : 0, duration: 0.7, ease: 'power1.out' }, look.decal ? 0.75 : 0);
    // стразы «впрыгивают» по одной
    if (look.gems) {
      st.layout = look.gems;
      tl.fromTo(st, { gems: 0 }, { gems: 1, duration: 1.0, ease: 'power2.out', onUpdate: () => m.setGems(st.layout, st.gems) }, 0.9);
    } else if (m.gemAmount > 0) {
      tl.to(st, { gems: 0, duration: 0.45, ease: 'power2.in', onUpdate: () => m.setGems(st.layout, st.gems) }, 0);
    }
  }

  update(t, dt) {
    const v = this.view;
    const px = pointer.sx;
    const py = pointer.sy;
    const show = this.showcase;
    if (show > 0.02) this.state.spin += dt * show * 0.6;
    else this.state.spin = damp(this.state.spin, Math.round(this.state.spin / (Math.PI * 2)) * Math.PI * 2, 2.5, dt);
    this.pivot.rotation.y = v.ry + px * 0.35 + Math.sin(t * 0.5) * 0.06 + this.state.spin;
    this.pivot.rotation.x = v.rx + py * 0.12 + Math.sin(t * 0.4) * 0.03;
    this.pivot.rotation.z = Math.sin(t * 0.33) * 0.03;
    this.pivot.position.y = v.y + Math.sin(t * 0.7) * 0.04;

    const d = (this.dist || 9) / v.zoom;
    this.camera.position.set(px * 0.25, 0.35 - py * 0.2, d);
    this.camera.lookAt(this.target);

    this.pearls.forEach((p, i) => {
      const b = p.userData.base;
      p.position.set(b.x + px * 0.15 * (i + 1), b.y + Math.sin(t * 0.6 + i * 2) * 0.1, b.z);
    });
    const u = this.sparkles.material.uniforms;
    u.uTime.value = t;
    u.uOpacity.value = damp(u.uOpacity.value, 0.25 + show * 0.75, 3, dt);
  }
}
