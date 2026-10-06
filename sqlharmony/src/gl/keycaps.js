import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { canvasTexture, FONTS } from './textures.js';

// Floating sculpted keycaps. They type S-Q-L and then hit the orange RUN key;
// the key under the cursor presses down too.

function keyGeometry(w, d) {
  const g = new RoundedBoxGeometry(w, 0.5, d, 5, 0.12);
  // sculpt: narrow the top, dish it slightly
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    const t = (y + 0.25) / 0.5; // 0 bottom .. 1 top
    const k = 1 - t * 0.14;
    p.setX(i, p.getX(i) * k);
    p.setZ(i, p.getZ(i) * k - t * 0.04);
    if (t > 0.98) p.setY(i, y - 0.02 * (1 - (p.getX(i) ** 2 + p.getZ(i) ** 2) / (w * w * 0.25)));
  }
  g.computeVertexNormals();
  return g;
}

function legend(text, { w = 256, h = 256, color = '#ffb36b', size = 120, font = FONTS.display, weight = 700, sub = '' } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.clearRect(0, 0, w, h);
  g.fillStyle = color;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `${weight} ${size}px ${font}`;
  g.fillText(text, w / 2, h / 2 + (sub ? -size * 0.1 : size * 0.04));
  if (sub) {
    g.font = `500 ${size * 0.32}px ${FONTS.mono}`;
    g.globalAlpha = 0.7;
    g.fillText(sub, w / 2, h / 2 + size * 0.55);
  }
  return canvasTexture(c);
}

const KEYS = [
  { t: 'S', x: -1.55, y: 0.55, z: 0.2, rx: 0.5, ry: 0.25, rz: 0.18 },
  { t: 'Q', x: -0.35, y: 1.05, z: -0.4, rx: 0.42, ry: -0.2, rz: -0.12 },
  { t: 'L', x: 0.95, y: 0.6, z: 0.1, rx: 0.55, ry: 0.15, rz: 0.1 },
  { t: 'Ctrl', x: -1.2, y: -0.75, z: 0.5, rx: 0.62, ry: 0.3, rz: -0.2, w: 1.3, size: 70 },
  { t: 'RUN', x: 0.55, y: -0.8, z: 0.6, rx: 0.5, ry: -0.25, rz: 0.08, w: 1.9, accent: true, size: 92, sub: 'SUBMIT' },
  { t: 'Tab', x: 1.95, y: -0.1, z: -0.6, rx: 0.4, ry: -0.35, rz: -0.22, size: 78 },
];

export class Keycaps {
  constructor(world, anchor) {
    this.world = world;
    this.anchor = anchor;
    this.group = new THREE.Group();
    this.object = this.group;
    this.keys = [];
    this.seqT = 0;
    this.ray = new THREE.Raycaster();
    const dark = new THREE.MeshPhysicalMaterial({ color: '#1d2130', roughness: 0.46, metalness: 0.05, clearcoat: 0.5, clearcoatRoughness: 0.35, sheen: 0.35, sheenRoughness: 0.5, sheenColor: new THREE.Color('#ff9a50') });
    const fox = new THREE.MeshPhysicalMaterial({ color: '#ff6b1a', roughness: 0.32, metalness: 0.0, clearcoat: 1, clearcoatRoughness: 0.12, emissive: '#ff4a0a', emissiveIntensity: 0.15 });
    for (const k of KEYS) {
      const w = k.w || 1;
      const holder = new THREE.Group();
      holder.position.set(k.x, k.y, k.z);
      holder.rotation.set(k.rx, k.ry, k.rz);
      const body = new THREE.Mesh(keyGeometry(w, 1), k.accent ? fox.clone() : dark);
      // backlit legend: bright enough to bloom on the dark caps
      const top = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 0.74, 0.74),
        new THREE.MeshBasicMaterial({
          map: legend(k.t, { w: Math.round(256 * w), color: k.accent ? '#1a0a03' : '#ffffff', size: k.size || 120, sub: k.sub }),
          color: k.accent ? new THREE.Color(1, 1, 1) : new THREE.Color(2.4, 1.25, 0.55),
          transparent: true,
          depthWrite: false,
          toneMapped: false,
        })
      );
      top.rotation.x = -Math.PI / 2;
      top.position.y = 0.262;
      top.position.z = -0.03;
      top.renderOrder = 3;
      body.add(top);
      holder.add(body);
      this.group.add(holder);
      this.keys.push({ holder, body, base: holder.position.clone(), press: 0, target: 0, phase: Math.random() * 6, accent: !!k.accent, t: k.t });
    }
    this.run = this.keys.find((k) => k.accent);
    this.group.visible = false;
  }

  /** click: press the hovered key hard */
  click() {
    if (!this.hovered) return false;
    this.hovered.kick = 1.2;
    return true;
  }

  update(time, dt) {
    const a = this.anchor;
    this.group.visible = a.visible;
    if (!a.visible) {
      if (this.hovered) {
        this.hovered = null;
        document.dispatchEvent(new CustomEvent('cursor-label', { detail: null }));
      }
      return;
    }
    const s = Math.min(a.w / 5.2, a.h / 3.6);
    this.group.position.set(a.x, a.y, 0);
    this.group.scale.setScalar(s);
    this.group.rotation.y = this.world.pointer.x * 0.25 + Math.sin(time * 0.2) * 0.08;
    this.group.rotation.x = -this.world.pointer.y * 0.15;

    // sequence: S, Q, L, (pause), RUN
    this.seqT = (this.seqT + dt) % 4.2;
    const order = ['S', 'Q', 'L', 'RUN'];
    const times = [0.4, 0.75, 1.1, 1.9];
    for (const k of this.keys) {
      const idx = order.indexOf(k.t);
      let auto = 0;
      if (idx >= 0) {
        const d = this.seqT - times[idx];
        if (d > 0 && d < 0.26) auto = Math.sin((d / 0.26) * Math.PI);
      }
      k.target = Math.max(auto, k.hover || 0);
    }
    // hover press via raycast from the pointer
    this.ray.setFromCamera(this.world.pointer, this.world.camera);
    this.bodies ||= this.keys.map((k) => k.body);
    const hits = this.ray.intersectObjects(this.bodies, false);
    const hit = hits[0]?.object;
    const hk = this.keys.find((k) => k.body === hit) || null;
    if (hk !== this.hovered) {
      this.hovered = hk;
      document.dispatchEvent(new CustomEvent('cursor-label', { detail: hk ? 'Press' : null }));
    }
    for (const k of this.keys) {
      k.kick = Math.max(0, (k.kick || 0) - dt * 3);
      k.target = Math.max(k.target, k.kick);
      k.hover = k.body === hit ? 0.35 : 0;
      k.press += (k.target - k.press) * Math.min(1, dt * 14);
      const bob = Math.sin(time * 0.9 + k.phase) * 0.06;
      k.holder.position.set(k.base.x, k.base.y + bob, k.base.z);
      k.body.position.y = -k.press * 0.16;
      k.body.scale.setScalar(1 - k.press * 0.03);
      if (k.accent) k.body.material.emissiveIntensity = 0.15 + k.press * 1.6;
    }
  }
}
