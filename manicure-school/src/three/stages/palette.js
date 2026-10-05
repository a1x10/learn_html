import * as THREE from 'three';
import { Stage } from '../engine.js';
import { Bottle } from '../models/bottle.js';
import { makeSparkles } from '../models/gems.js';
import { damp, pointer, fitDistance } from '../util.js';
import { CONFIG } from '../../config.js';

// Палитра в блоке записи: кольцо флаконов всех оттенков.
// Выбранный оттенок поворачивается к зрителю и приподнимается.

export class PaletteStage extends Stage {
  constructor(el, { transmissive = true } = {}) {
    super(el, { fov: 30, transmissive });
    const s = this.scene;
    s.add(new THREE.HemisphereLight('#fff4f1', '#2a1018', 0.7));
    const key = new THREE.DirectionalLight('#ffffff', 2.1);
    key.position.set(3, 6, 7);
    s.add(key);
    const rim = new THREE.DirectionalLight('#ff9fb0', 2.2);
    rim.position.set(-5, 3, -6);
    s.add(rim);

    this.ring = new THREE.Group();
    s.add(this.ring);
    this.bottles = [];
    const shades = CONFIG.shades;
    this.R = 2.9;
    shades.forEach((sh, i) => {
      const b = new Bottle({
        color: sh.color,
        cap: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'rose' : 'black',
        ribbed: true,
        transmissive,
        label: { brand: CONFIG.brand, shade: `Nº ${String(i + 1).padStart(2, '0')} · ${sh.name.toUpperCase()}`, sub: 'GEL POLISH · 12 ML' },
        labelColor: ['milk', 'pearl'].includes(sh.id) ? '#7e0b24' : '#ffffff',
      });
      const a = (i / shades.length) * Math.PI * 2;
      const holder = new THREE.Group();
      holder.position.set(Math.sin(a) * this.R, 0, Math.cos(a) * this.R);
      holder.rotation.y = a;
      b.position.y = -1.55;
      b.scale.setScalar(0.7);
      holder.add(b);
      this.ring.add(holder);
      this.bottles.push({ b, holder, a, lift: 0 });
    });
    this.sparkles = makeSparkles({ count: 90, spread: [7, 4, 7], center: [0, 0.4, 0], size: 26 });
    s.add(this.sparkles);
    this.selected = 0;
    this.angle = 0;
    this.targetAngle = 0;
    this.idle = 0;
    this.scrollP = 0;
  }

  select(i) {
    const n = this.bottles.length;
    this.selected = i;
    const want = -(i / n) * Math.PI * 2;
    // кратчайший поворот
    let d = want - (this.targetAngle % (Math.PI * 2));
    d = ((d + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
    this.targetAngle += d;
    this.idle = 0;
  }

  // после отправки заявки: кольцо делает оборот, искры вспыхивают
  celebrate() {
    this.burst = 1;
    this.targetAngle += Math.PI * 2;
  }

  resize() {
    this.dist = fitDistance(this.camera, 3.9, 7.0);
  }

  update(t, dt) {
    this.idle += dt;
    this.angle = damp(this.angle, this.targetAngle, 3.2, dt);
    this.ring.rotation.y = this.angle + Math.sin(t * 0.25) * 0.08 + this.scrollP * 0.6;
    this.bottles.forEach((o, i) => {
      const on = i === this.selected ? 1 : 0;
      o.lift = damp(o.lift, on, 4, dt);
      o.holder.position.y = o.lift * 0.45 + Math.sin(t * 0.9 + i) * 0.05;
      o.b.rotation.y = o.lift * Math.sin(t * 0.6) * 0.5;
      o.b.setOpen(o.lift * 0.12);
    });
    this.burst = damp(this.burst || 0, 0, 1.2, dt);
    const u = this.sparkles.material.uniforms;
    u.uTime.value = t;
    u.uOpacity.value = 1 + this.burst * 2;
    u.uSize.value = 26 * (1 + this.burst * 1.5);
    this.camera.position.set(pointer.sx * 0.5, 1.5 - pointer.sy * 0.3, this.dist || 10);
    this.camera.lookAt(0, 0.1, 0);
  }
}
