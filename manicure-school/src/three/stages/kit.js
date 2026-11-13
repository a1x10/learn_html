import * as THREE from 'three';
import { Stage } from '../engine.js';
import * as Tools from '../models/tools.js';
import { Bottle } from '../models/bottle.js';
import { makeGem, makePearl } from '../models/gems.js';
import { makeCanvas, toTexture, mulberry } from '../textures.js';
import { clamp, lerp, seg, smooth, easeInOut, damp, pointer, fitDistance } from '../util.js';
import { CONFIG } from '../../config.js';

// Рабочее место: инструменты парят «в беспорядке» и по скроллу
// раскладываются на столе в аккуратный флэтлей.

let blobTex = null;
function blob() {
  if (blobTex) return blobTex;
  const s = 128;
  const c = makeCanvas(s, s);
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grd.addColorStop(0, 'rgba(0,0,0,0.55)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, s, s);
  blobTex = toTexture(c, { srgb: false });
  return blobTex;
}

const Q = (x, y, z) => new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z));

export class KitStage extends Stage {
  constructor(el, { mobile = false } = {}) {
    super(el, { fov: 32, transmissive: false });
    const s = this.scene;
    s.add(new THREE.HemisphereLight('#fff3f0', '#1d0c12', 0.75));
    const key = new THREE.DirectionalLight('#ffffff', 2.1);
    key.position.set(-3, 9, 5);
    s.add(key);
    const rim = new THREE.DirectionalLight('#ff9fb0', 1.8);
    rim.position.set(5, 3, -6);
    s.add(rim);

    this.progress = 0;
    this.p = 0;
    this.items = [];
    this.root = new THREE.Group();
    s.add(this.root);
    const rnd = mulberry(31);

    // label — подпись в DOM, layout — положение на столе [x, z, поворот], lie — как лежит
    const add = (obj, { key, label, x, z, rot = 0, lie = [0, 0, 0], y = 0, scale = 1, shadow = 1 }) => {
      const holder = new THREE.Group();
      holder.add(obj);
      this.root.add(holder);
      const start = new THREE.Vector3((rnd() - 0.5) * 11, 1.5 + (rnd() - 0.2) * 6, (rnd() - 0.5) * 6 - 1);
      const startQ = Q(rnd() * 6, rnd() * 6, rnd() * 6);
      const endQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(lie[0], rot, lie[2], 'YXZ'));
      let sh = null;
      if (shadow) {
        sh = new THREE.Mesh(
          new THREE.PlaneGeometry(1, 1),
          new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false, toneMapped: false, opacity: 0 })
        );
        sh.rotation.x = -Math.PI / 2;
        sh.scale.set(shadow * scale, shadow * scale * 0.7, 1);
        sh.position.set(x, 0.005, z);
        this.root.add(sh);
      }
      this.items.push({
        key,
        label,
        holder,
        start,
        startQ,
        end: new THREE.Vector3(x, y, z),
        endQ,
        scale,
        shadow: sh,
        delay: this.items.length * 0.035,
        spin: new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(0.6),
      });
    };

    const lamp = Tools.lamp();
    add(lamp, { key: 'lamp', x: 2.75, z: -1.75, rot: -0.35, scale: 1, shadow: 3.2 });

    const efile = Tools.efile();
    add(efile, { key: 'efile', x: 0.35, z: 1.3, rot: 0.25, lie: [0, 0, -Math.PI / 2], y: 0.14, shadow: 2.4 });

    const bits = Tools.bits();
    add(bits, { key: 'bits', x: 2.35, z: 1.95, rot: 0.4, lie: [Math.PI / 2, 0, 0], y: 0.06, scale: 1, shadow: 0.9 });

    const file = Tools.nailFile();
    add(file, { key: 'file', x: -1.45, z: -0.55, rot: 0.55, lie: [-Math.PI / 2, 0, 0], y: 0.03, shadow: 2.2 });

    const buffer = Tools.buffer();
    add(buffer, { key: 'buffer', x: -1.75, z: 0.95, rot: -0.3, y: 0.15, shadow: 1.3 });

    const pusher = Tools.pusher();
    add(pusher, { key: 'pusher', x: 1.05, z: -0.3, rot: -0.9, lie: [0, 0, Math.PI / 2], y: 0.07, shadow: 2.2 });

    const brushes = Tools.brushes();
    add(brushes, { key: 'brushes', x: 4.25, z: 1.1, rot: 0.95, lie: [0, 0, Math.PI / 2], y: 0.07, shadow: 2 });

    const colors = ['#ecd2ce', CONFIG.shades[0].color, '#f3efe9'];
    const caps = ['silver', 'gold', 'black'];
    const names = ['BASE', 'COLOR', 'TOP'];
    colors.forEach((c, i) => {
      const b = new Bottle({ color: c, cap: caps[i], transmissive: false, ribbed: false, shadow: false, label: { brand: CONFIG.brand, shade: names[i], sub: '12 ML' }, glitter: i === 2 });
      b.scale.setScalar(0.5);
      add(b, { key: i === 1 ? 'bottles' : 'bottle' + i, x: -0.55 + i * 0.85, z: -2.35 + (i === 1 ? -0.25 : 0), rot: -0.15 + i * 0.12, shadow: 1.1 });
    });

    const oil = Tools.oil();
    add(oil, { key: 'oil', x: 4.7, z: -0.55, rot: 0.2, scale: 1, shadow: 1 });

    const cotton = Tools.cotton();
    add(cotton, { key: 'cotton', x: -1.85, z: -2.15, rot: 0.3, y: 0.04, shadow: 1.2 });

    const g1 = makeGem({ size: 0.32 });
    add(g1, { key: 'gem1', x: 1.9, z: 0.6, lie: [0.2, 0, 0.1], y: 0.12, shadow: 0.4 });
    const g2 = makeGem({ size: 0.22, tint: '#ffc2d2' });
    add(g2, { key: 'gem2', x: -0.6, z: 0.4, lie: [0.3, 0, -0.2], y: 0.09, shadow: 0.3 });
    const p1 = makePearl({ size: 0.26 });
    add(p1, { key: 'pearl1', x: 3.3, z: 0.5, y: 0.13, shadow: 0.35 });
    const p2 = makePearl({ size: 0.18 });
    add(p2, { key: 'pearl2', x: -0.2, z: -1.1, y: 0.09, shadow: 0.25 });

    this.labelAnchors = {
      lamp: new THREE.Vector3(2.75, 1.45, -1.75),
      efile: new THREE.Vector3(-0.45, 0.35, 1.35),
      bits: new THREE.Vector3(2.35, 0.3, 1.95),
      file: new THREE.Vector3(-1.45, 0.15, -0.55),
      bottles: new THREE.Vector3(0.3, 1.7, -2.6),
      pusher: new THREE.Vector3(1.05, 0.2, -0.3),
      brushes: new THREE.Vector3(4.25, 0.2, 1.1),
      oil: new THREE.Vector3(4.7, 1.4, -0.55),
    };
    this.labels = {};
    this.mobile = mobile;
    this.camTarget = new THREE.Vector3();
  }

  resize(w, h) {
    this.wide = w / h;
    const portrait = this.wide < 0.9;
    // на широком экране слева текст: стол занимает правые ~2/3 кадра
    this.distEnd = portrait ? fitDistance(this.camera, 6.4, 7.6) : fitDistance(this.camera, 6.2, 13.2);
  }

  setProgress(p) {
    this.progress = p;
  }

  update(t, dt) {
    this.p = damp(this.p, this.progress, 6, dt);
    const p = this.p;
    const A = seg(p, 0.02, 0.62);
    const cam = this.camera;
    const portrait = this.wide < 0.9;

    // камера: от «парящего» вида к виду сверху; на десктопе стол смещён вправо (слева текст)
    const shiftX = portrait ? 1.45 : -1.05;
    const e = easeInOut(seg(p, 0.0, 0.7));
    const dist = (this.distEnd || 14) * lerp(1.15, 1, e);
    const pitch = lerp(0.35, 0.95, e); // угол наклона камеры
    this.camTarget.set(shiftX * lerp(0.6, 1, e), lerp(1.6, portrait ? -0.6 : 0.1, e), lerp(0, 0.3, e));
    const px = pointer.sx;
    const py = pointer.sy;
    cam.position.set(
      this.camTarget.x + px * 0.6 + Math.sin(t * 0.2) * 0.15,
      this.camTarget.y + Math.sin(pitch) * dist - py * 0.3,
      this.camTarget.z + Math.cos(pitch) * dist
    );
    cam.lookAt(this.camTarget);

    for (const it of this.items) {
      const k = smooth(clamp((A - it.delay) / (1 - 0.6)));
      const h = it.holder;
      const float = 1 - k;
      h.position.lerpVectors(it.start, it.end, k);
      h.position.y += Math.sin(t * 0.8 + it.delay * 40) * 0.18 * float;
      h.quaternion.slerpQuaternions(it.startQ, it.endQ, k);
      if (float > 0.001) {
        h.rotateX(Math.sin(t * 0.5 + it.delay * 9) * 0.25 * float);
        h.rotateY(t * it.spin.y * float);
      }
      h.scale.setScalar(it.scale * (0.75 + 0.25 * k));
      if (it.shadow) it.shadow.material.opacity = k * k * 0.9;
    }
    this.assembled = A;
  }

  // экранные позиции подписей
  labelPositions() {
    const out = [];
    for (const [key, v] of Object.entries(this.labelAnchors)) {
      const p = v.clone().project(this.camera);
      out.push({ key, x: (p.x * 0.5 + 0.5) * this.width, y: (-p.y * 0.5 + 0.5) * this.height, z: p.z });
    }
    return out;
  }
}
