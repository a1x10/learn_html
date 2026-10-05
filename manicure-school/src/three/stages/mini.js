import * as THREE from 'three';
import { Stage } from '../engine.js';
import { Bottle } from '../models/bottle.js';
import { FingerNail } from '../models/nail.js';
import { makeGem, makePearl, makeSparkles } from '../models/gems.js';
import { damp, pointer, fitDistance } from '../util.js';
import { CONFIG } from '../../config.js';

function lights(scene, warm = '#ffd2da') {
  scene.add(new THREE.HemisphereLight('#fff4f1', '#3a1c24', 0.9));
  const key = new THREE.DirectionalLight('#ffffff', 2);
  key.position.set(3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(warm, 1.6);
  rim.position.set(-4, 2, -4);
  scene.add(rim);
}

// Маленькие сцены в карточках «Для кого»: типса, флакон, кисть с каплей, кристалл
export class MiniStage extends Stage {
  constructor(el, model) {
    super(el, { fov: 30 });
    lights(this.scene);
    this.rig = new THREE.Group();
    this.scene.add(this.rig);
    this.kind = model;
    this.hover = 0;
    this.hoverTarget = 0;
    this.appear = 0;
    const card = el.closest('.acard');
    this.card = card;
    if (card) {
      card.addEventListener('pointerenter', () => (this.hoverTarget = 1));
      card.addEventListener('pointerleave', () => (this.hoverTarget = 0));
    }
    let size = 2.4;
    if (model === 'tip') {
      const n = new FingerNail({ finger: false, design: 'milky-french', cheapGems: true });
      n.setShape(0.85, 1.7, 0);
      n.position.set(0, -0.15, 0);
      n.nail.position.set(0, -0.85, 0);
      this.rig.add(n);
      this.rig.rotation.x = -0.5;
      size = 2.0;
    } else if (model === 'bottle') {
      const b = new Bottle({ color: CONFIG.shades[1].color, cap: 'rose', transmissive: false, ribbed: true, shadow: false, label: { brand: CONFIG.brand, shade: 'Nº 02 · MILKY ROSE', sub: 'GEL POLISH' } });
      b.position.y = -1.5;
      b.scale.setScalar(1);
      this.rig.add(b);
      size = 3.4;
    } else if (model === 'brush') {
      const b = new Bottle({ color: CONFIG.shades[0].color, cap: 'gold', transmissive: false, shadow: false, label: false });
      b.setOpen(1);
      b.body.visible = false;
      b.liquid.visible = false;
      b.neck.visible = false;
      b.children.forEach((c) => {
        if (c.geometry && c.geometry.type === 'CircleGeometry') c.visible = false;
      });
      b.capPivot.position.y = 0.4;
      b.updateMatrixWorld(true);
      const tip = new THREE.Vector3();
      b.brushTip.getWorldPosition(tip);
      b.drop.visible = true;
      b.drop.position.copy(b.worldToLocal(tip)).add(new THREE.Vector3(0, -0.05, 0));
      b.rotation.z = -0.5;
      b.position.set(-0.2, -0.5, 0);
      this.rig.add(b);
      this.brushBottle = b;
      size = 3.6;
    } else {
      const g = makeGem({ size: 1.25 });
      g.rotation.x = 0.35;
      this.rig.add(g);
      const p1 = makePearl({ size: 0.32 });
      p1.position.set(1.0, 0.45, -0.3);
      const p2 = makePearl({ size: 0.22 });
      p2.position.set(-0.95, -0.4, 0.4);
      this.rig.add(p1, p2);
      this.orbit = [p1, p2];
      size = 2.6;
    }
    this.size = size;
  }

  resize() {
    this.dist = fitDistance(this.camera, this.size, this.size);
  }

  update(t, dt) {
    this.hover = damp(this.hover, this.hoverTarget, 5, dt);
    const h = this.hover;
    const shown = !this.card || this.card.classList.contains('is-revealed') || !document.documentElement.classList.contains('anim');
    this.appear = damp(this.appear, shown ? 1 : 0, 3.5, dt);
    const a = this.appear;
    this.rig.rotation.y += dt * (0.35 + h * 1.6 + (1 - a) * 4);
    this.rig.position.y = Math.sin(t * 1.1 + this.size) * 0.06 + h * 0.08 - (1 - a) * 0.8;
    this.rig.scale.setScalar(0.4 + 0.6 * a);
    if (this.kind === 'brush' && this.brushBottle) {
      const d = this.brushBottle.drop;
      const k = (t * 0.6) % 1;
      d.scale.setScalar(0.6 + Math.sin(k * Math.PI) * 0.5);
    }
    if (this.orbit) {
      this.orbit.forEach((o, i) => {
        const a = t * (0.6 + i * 0.3) + i * 3;
        o.position.set(Math.cos(a) * (1.05 - i * 0.1), Math.sin(a * 1.3) * 0.35, Math.sin(a) * 0.6);
      });
    }
    this.camera.position.set(pointer.sx * 0.3, 0.2, this.dist || 8);
    this.camera.lookAt(0, 0, 0);
  }
}

// Флаконы над тарифами: База — молочный, Цвет — вишнёвый, Топ — шиммер с золотом
const PLAN = {
  base: { color: '#ecd2ce', cap: 'silver', shade: 'BASE · Nº 00', glitter: false },
  color: { color: null, cap: 'gold', shade: 'COLOR · Nº 01', glitter: false },
  top: { color: '#d7b98a', cap: 'black', shade: 'TOP · GOLD', glitter: true },
};

export class PlanStage extends Stage {
  constructor(el, variant, { transmissive = true } = {}) {
    super(el, { fov: 26, transmissive });
    lights(this.scene, variant === 'top' ? '#ffe0a8' : '#ffc0cc');
    const cfg = PLAN[variant] || PLAN.color;
    this.bottle = new Bottle({
      color: cfg.color || CONFIG.shades[0].color,
      cap: cfg.cap,
      transmissive,
      glitter: cfg.glitter,
      label: { brand: CONFIG.brand, shade: cfg.shade, sub: 'GEL POLISH · 12 ML' },
    });
    this.bottle.position.y = -1.5;
    this.rig = new THREE.Group();
    this.rig.add(this.bottle);
    this.scene.add(this.rig);
    this.variant = variant;
    if (variant === 'top') {
      this.sparkles = makeSparkles({ count: 50, spread: [3.2, 3.4, 2], center: [0, 0.2, 0], size: 22, color: '#ffe6b8' });
      this.scene.add(this.sparkles);
    }
    this.hover = 0;
    this.hoverTarget = 0;
    this.appear = 0;
    const card = el.closest('.plan');
    this.card = card;
    if (card) {
      card.addEventListener('pointerenter', () => (this.hoverTarget = 1));
      card.addEventListener('pointerleave', () => (this.hoverTarget = 0));
    }
    this.spin = variant === 'base' ? 0.6 : variant === 'top' ? -0.6 : 0;
  }

  resize() {
    this.dist = fitDistance(this.camera, 3.9, 2.4);
  }

  update(t, dt) {
    this.hover = damp(this.hover, this.hoverTarget, 4, dt);
    const h = this.hover;
    const shown = !this.card || this.card.classList.contains('is-revealed') || !document.documentElement.classList.contains('anim');
    this.appear = damp(this.appear, shown ? 1 : 0, 3, dt);
    const a = this.appear;
    this.spin += dt * (0.25 + h * 2.2 + (1 - a) * 5);
    this.rig.rotation.y = this.spin;
    this.rig.position.y = 0.3 + Math.sin(t * 0.9 + this.spin * 0.2) * 0.05 + h * 0.2 - (1 - a) * 1.4;
    this.rig.scale.setScalar(0.5 + 0.5 * a);
    this.bottle.setOpen(h * 0.18);
    if (this.sparkles) {
      this.sparkles.material.uniforms.uTime.value = t;
      this.sparkles.material.uniforms.uOpacity.value = 0.5 + h * 0.5;
    }
    this.camera.position.set(pointer.sx * 0.4, 0.5, this.dist || 9);
    this.camera.lookAt(0, 0.05, 0);
  }
}
