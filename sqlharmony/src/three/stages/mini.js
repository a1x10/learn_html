import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Stage } from '../engine.js';
import { damp, easeInOut, smooth } from '../util.js';

// Маленькие 3D-сцены в карточках возможностей. Каждая иллюстрирует свою функцию:
// copy — колонка ячеек копируется, history — спираль прошлых запросов,
// format — хаотичные строки выравниваются, excel — куб из ячеек таблицы.

const glass = (color, extra = {}) =>
  new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.18,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    iridescence: 0.4,
    envMapIntensity: 1.3,
    ...extra,
  });

export class MiniStage extends Stage {
  constructor(el, kind) {
    super(el, { fov: 28 });
    this.kind = kind;
    this.hover = 0;
    this.hoverTarget = 0;
    this.inView = 0;
    const s = this.scene;
    s.add(new THREE.AmbientLight('#9aa0ff', 0.4));
    const d = new THREE.DirectionalLight('#ffffff', 2);
    d.position.set(2, 3, 4);
    s.add(d);
    this.camera.position.set(0, 0, 6.4);
    this.root = new THREE.Group();
    this.root.position.y = -0.15;
    s.add(this.root);
    this[`build_${kind}`]();
    el.closest('.fcard')?.addEventListener('pointerenter', () => (this.hoverTarget = 1));
    el.closest('.fcard')?.addEventListener('pointerleave', () => (this.hoverTarget = 0));
  }

  build_copy() {
    const geo = new RoundedBoxGeometry(1.15, 0.36, 0.36, 3, 0.08);
    const a = glass('#ff6a2a');
    const b = glass('#5b6bff', { transparent: true, opacity: 0.85 });
    this.colA = [];
    this.colB = [];
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(geo, a);
      m.position.set(-0.75, 1.05 - i * 0.42, 0);
      this.root.add(m);
      this.colA.push(m);
      const m2 = new THREE.Mesh(geo, b);
      this.root.add(m2);
      this.colB.push(m2);
    }
    this.root.rotation.set(0.25, -0.5, 0);
  }

  build_history() {
    const geo = new RoundedBoxGeometry(1.5, 0.08, 0.95, 3, 0.04);
    this.cards = [];
    for (let i = 0; i < 12; i++) {
      const col = new THREE.Color().setHSL(0.66 - i * 0.045, 0.75, 0.6);
      const m = new THREE.Mesh(geo, glass(col));
      this.root.add(m);
      this.cards.push(m);
    }
    this.root.rotation.set(0.35, 0, 0.08);
    this.root.scale.setScalar(0.85);
  }

  build_format() {
    const geo = new RoundedBoxGeometry(1, 0.2, 0.2, 2, 0.08);
    const mats = [glass('#ff6a2a'), glass('#7a8cff'), glass('#e8e6f5'), glass('#2bd49a')];
    // упорядоченная раскладка: отступы как у отформатированного SQL
    const layout = [
      [0, 1.0, 0],
      [0.45, 1.6, 2],
      [0.45, 1.2, 2],
      [0, 0.9, 1],
      [0.45, 1.8, 2],
      [0, 1.1, 0],
      [0.45, 1.4, 3],
    ];
    this.bars = layout.map(([indent, len, mi], i) => {
      const m = new THREE.Mesh(geo, mats[mi]);
      m.userData = {
        order: new THREE.Vector3(-1.3 + indent + len / 2, 1.2 - i * 0.4, 0),
        len,
        chaos: new THREE.Vector3((Math.random() - 0.5) * 2.6, (Math.random() - 0.5) * 2.4, (Math.random() - 0.5) * 1.6),
        rot: new THREE.Euler(Math.random() * 3, Math.random() * 3, Math.random() * 3),
      };
      this.root.add(m);
      return m;
    });
    this.root.rotation.set(0.2, -0.35, 0);
  }

  build_excel() {
    const geo = new RoundedBoxGeometry(0.42, 0.42, 0.42, 2, 0.06);
    const greens = [glass('#2bd49a'), glass('#1f9e72'), glass('#d8fff0', { transmission: 0.4, thickness: 0.4 })];
    this.cells = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) {
          const m = new THREE.Mesh(geo, greens[(x + y + z + 3) % 3]);
          m.userData.home = new THREE.Vector3(x, y, z).multiplyScalar(0.5);
          m.userData.r = Math.random();
          this.root.add(m);
          this.cells.push(m);
        }
    this.root.rotation.set(0.5, 0.6, 0);
  }

  update(time, dt) {
    const t = this.time;
    this.hover = damp(this.hover, this.hoverTarget, 5, dt);
    const h = this.hover;
    const spin = 1 + h * 1.5;

    if (this.kind === 'copy') {
      const cyc = (t * 0.35 * spin) % 1;
      const p = easeInOut(Math.min(1, Math.max(0, (cyc - 0.1) / 0.5)));
      const fade = cyc > 0.85 ? 1 - (cyc - 0.85) / 0.15 : 1;
      this.colA.forEach((m, i) => {
        const q = easeInOut(Math.min(1, Math.max(0, p * 1.6 - i * 0.12)));
        const b = this.colB[i];
        b.position.set(-0.75 + q * 1.5, m.position.y, q * 0.15);
        b.scale.setScalar(Math.max(0.001, fade * (0.6 + q * 0.4)));
        m.rotation.x = Math.sin(t * 2 + i) * 0.05;
      });
      this.root.rotation.y = -0.5 + Math.sin(t * 0.5) * 0.15;
    }

    if (this.kind === 'history') {
      this.cards.forEach((m, i) => {
        const a = i * 0.55 + t * 0.6 * spin;
        const r = 0.95;
        m.position.set(Math.cos(a) * r * 0.35, 1.3 - i * 0.24 + Math.sin(t + i) * 0.02, Math.sin(a) * r * 0.35);
        m.rotation.y = -a * 0.5;
        const lift = i === 0 ? 0.2 + Math.sin(t * 2) * 0.05 : 0;
        m.position.y += lift;
      });
      this.root.rotation.y = t * 0.15;
    }

    if (this.kind === 'format') {
      const cyc = (t * 0.22 * spin) % 1;
      // долго держим порядок, затем короткий «беспорядок» и снова щелчок в строй
      const order = cyc < 0.6 ? 1 : cyc < 0.75 ? 1 - easeInOut((cyc - 0.6) / 0.15) : cyc < 0.82 ? 0 : easeInOut((cyc - 0.82) / 0.18);
      const o = Math.max(order, h * 0.85);
      this.bars.forEach((m, i) => {
        const u = m.userData;
        m.position.lerpVectors(u.chaos, u.order, o);
        m.rotation.set(u.rot.x * (1 - o), u.rot.y * (1 - o), u.rot.z * (1 - o));
        m.scale.x = u.len * (0.5 + 0.5 * o);
        m.position.z += Math.sin(t * 2 + i) * 0.03;
      });
      this.root.rotation.y = -0.35 + Math.sin(t * 0.4) * 0.2;
    }

    if (this.kind === 'excel') {
      const breathe = smooth(Math.sin(t * 0.9) * 0.5 + 0.5);
      const spread = 1 + breathe * 0.35 + h * 0.5;
      this.cells.forEach((m) => {
        const u = m.userData;
        m.position.copy(u.home).multiplyScalar(spread);
        const pop = Math.max(0, Math.sin(t * 3 + u.r * 30) - 0.85) * 3;
        m.scale.setScalar(1 - pop * 0.25);
      });
      this.root.rotation.x = 0.5 + t * 0.2 * spin;
      this.root.rotation.y = 0.6 + t * 0.3 * spin;
    }

    this.camera.position.z = 6.4 - h * 0.6;
    this.camera.lookAt(0, 0, 0);
  }
}
