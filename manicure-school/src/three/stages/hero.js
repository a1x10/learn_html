import * as THREE from 'three';
import { Stage } from '../engine.js';
import { Bottle } from '../models/bottle.js';
import { makeGem, makePearl, makeFlake, makeSparkles } from '../models/gems.js';
import { glyphTexture, glowTexture } from '../textures.js';
import { clamp, lerp, seg, smooth, easeInOut, easeOut, damp, pointer, fitDistance } from '../util.js';
import { CONFIG } from '../../config.js';

// Первый экран: флакон крутится по скроллу, затем откручивается колпачок,
// кисть выходит из флакона, с неё падает капля — и экран заливает лаком.

const _v = new THREE.Vector3();
const _w = new THREE.Vector3();

export class HeroStage extends Stage {
  constructor(el, { word = 'Маникюр' } = {}) {
    super(el, { fov: 30, near: 0.1, far: 80, transmissive: true });
    this.progress = 0;
    this.p = 0;
    this.intro = { t: 0 };
    this.anchors = {};
    this.dropScreen = { x: 0, y: 0, visible: false };

    const s = this.scene;
    s.add(new THREE.HemisphereLight('#ffe9e6', '#1a0a10', 0.55));
    const key = new THREE.DirectionalLight('#fff1ec', 2.2);
    key.position.set(4, 6, 7);
    s.add(key);
    const rim = new THREE.DirectionalLight('#ff8fa0', 2.6);
    rim.position.set(-6, 4, -6);
    s.add(rim);
    const rim2 = new THREE.DirectionalLight('#ffd9c9', 1.2);
    rim2.position.set(6, -2, -5);
    s.add(rim2);

    // задник со свечением — его «видит» стекло при преломлении
    this.backdrop = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: glowTexture({ inner: '#4d0a1b', mid: '#26090f', outer: '#130B0E' }), toneMapped: false })
    );
    this.backdrop.position.z = -7;
    s.add(this.backdrop);

    // буквы заголовка
    this.word = new THREE.Group();
    this.word.position.z = -2.4;
    s.add(this.word);
    this.letters = [];
    this.wordText = word;

    // флакон
    this.bottleRig = new THREE.Group();
    s.add(this.bottleRig);
    this.bottle = new Bottle({
      color: CONFIG.shades[0].color,
      cap: 'gold',
      label: { brand: CONFIG.brand, shade: 'Nº 01 · ' + CONFIG.shades[0].name.toUpperCase(), sub: 'GEL POLISH · 12 ML', res: 1 },
      shadow: false,
    });
    this.bottle.position.y = -1.55;
    this.bottleRig.add(this.bottle);

    // декор: стразы, жемчуг, фольга
    this.decor = [];
    const add = (mesh, pos, spin, depthK) => {
      mesh.position.set(...pos);
      mesh.userData.base = new THREE.Vector3(...pos);
      mesh.userData.spin = spin;
      mesh.userData.depth = depthK;
      mesh.userData.phase = Math.random() * Math.PI * 2;
      s.add(mesh);
      this.decor.push(mesh);
    };
    // декор держим в «свободных» зонах кадра — между словом, флаконом и текстом
    add(makeGem({ size: 0.62 }), [-2.75, 1.0, 0.6], [0.4, 0.6, 0.1], 1.2);
    add(makeGem({ size: 0.4, tint: '#ffd1dc' }), [2.45, 1.05, 1.0], [0.3, -0.7, 0.2], 1.6);
    add(makeGem({ size: 0.28 }), [1.15, 2.35, -1.1], [0.6, 0.4, 0.3], 0.7);
    add(makePearl({ size: 0.5 }), [3.1, 0.3, -0.6], [0, 0.2, 0], 0.8);
    add(makePearl({ size: 0.3 }), [-1.3, 0.3, 1.5], [0, 0.2, 0], 1.5);
    add(makePearl({ size: 0.2 }), [-0.85, 2.45, -1.4], [0, 0.2, 0], 0.6);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + 0.4;
      const r = 2.3 + (i % 3) * 0.55;
      add(makeFlake(i + 1, 0.22 + (i % 3) * 0.08), [Math.cos(a) * r * 1.15, Math.sin(a) * r * 0.75, -0.8 + (i % 4) * 0.6], [0.9, 1.3, 0.6], 1 + (i % 3) * 0.3);
    }

    this.sparkles = makeSparkles({ count: 140, spread: [9, 6, 5], center: [0, 0.2, 0], size: 30 });
    s.add(this.sparkles);
    this.brushSparkles = makeSparkles({ count: 40, spread: [1.2, 1.2, 1.2], center: [0, 0, 0], size: 22, color: '#ffd4dc', seed: 5 });
    this.brushSparkles.material.uniforms.uOpacity.value = 0;
    s.add(this.brushSparkles);

    this.camTarget = new THREE.Vector3();
    this.camDist = 9;
  }

  // буквы рисуются, когда загружены шрифты
  buildWord() {
    for (const l of this.letters) {
      this.word.remove(l);
      l.geometry.dispose();
      l.material.map.dispose();
      l.material.dispose();
    }
    this.letters = [];
    const glyphs = [...this.wordText].map((ch) => ({ ch, ...glyphTexture(ch, { px: 360 }) }));
    const geo = new THREE.PlaneGeometry(1, 1);
    let pen = 0;
    for (const g of glyphs) {
      const mat = new THREE.MeshBasicMaterial({
        map: g.texture,
        alphaTest: 0.5,
        alphaToCoverage: true,
        toneMapped: false,
        side: THREE.DoubleSide,
      });
      const m = new THREE.Mesh(geo, mat);
      m.userData.g = g;
      m.userData.pen = pen;
      pen += g.advance / 360;
      this.word.add(m);
      this.letters.push(m);
    }
    this.wordAdvance = pen;
    this.layoutWord();
  }

  layoutWord() {
    if (!this.letters.length || !this.width) return;
    const cam = this.camera;
    const portrait = cam.aspect < 0.85;
    const dist = this.baseDist + Math.abs(this.word.position.z);
    const visH = 2 * dist * Math.tan((cam.fov * Math.PI) / 360);
    const visW = visH * cam.aspect;
    const S = (visW * (portrait ? 0.92 : 0.9)) / this.wordAdvance; // кегль в мировых единицах
    this.wordScale = S;
    const start = (-this.wordAdvance * S) / 2;
    // базовая линия: верх слова примерно на 30–35% высоты экрана
    const yTop = visH * (portrait ? 0.245 : 0.14);
    const capH = 0.72 * S;
    const baseline = yTop - capH;
    for (const m of this.letters) {
      const g = m.userData.g;
      const w = (g.w / 360) * S;
      const h = (g.h / 360) * S;
      const left = start + m.userData.pen * S - g.left * S;
      const top = baseline + g.ascent * S;
      m.scale.set(w, h, 1);
      m.userData.home = new THREE.Vector3(left + w / 2, top - h / 2, 0);
    }
  }

  resize(w, h) {
    const portrait = w / h < 0.85;
    this.portrait = portrait;
    // расстояние камеры: на десктопе флакон занимает ~2/3 высоты,
    // на телефоне — меньше и выше центра, чтобы снизу поместился текст
    this.baseDist = fitDistance(this.camera, portrait ? 7.4 : 4.7, portrait ? 3.6 : 3.2);
    this.openDist = fitDistance(this.camera, portrait ? 9.6 : 6.6, portrait ? 5.4 : 5.6);
    this.lift = portrait ? 0.075 : 0; // доля высоты экрана, на которую флакон выше центра
    const spreadX = portrait ? Math.max(0.42, this.camera.aspect / 1.3) : 1;
    for (const d of this.decor) {
      d.userData.sx = spreadX;
      d.userData.sy = portrait ? 0.62 : 1;
      d.userData.ss = portrait ? 0.7 : 1;
    }
    this.layoutWord();
  }

  setProgress(p) {
    this.progress = p;
  }

  update(t, dt) {
    const cam = this.camera;
    this.p = damp(this.p, this.progress, 7, dt);
    const p = this.p;
    const it = this.intro.t;

    const A = seg(p, 0.0, 0.36); // поворот
    const B = seg(p, 0.3, 0.6); // открываем
    const C = seg(p, 0.58, 0.7); // кисть наклоняется, капля набирается
    const D = seg(p, 0.69, 0.82); // капля падает
    const E = seg(p, 0.82, 1.0); // уходим

    // камера
    const dist = lerp(this.baseDist, this.openDist, easeInOut(B)) + E * 2;
    this.camDist = dist;
    const px = pointer.sx;
    const py = pointer.sy;
    const visH = 2 * dist * Math.tan((cam.fov * Math.PI) / 360);
    this.camTarget.set(0, lerp(0, 0.95, easeInOut(B)) + E * 0.6 - (this.lift || 0) * visH, 0);
    cam.position.set(px * 0.45 + this.camTarget.x, this.camTarget.y - py * 0.3 + 0.25, dist);
    cam.lookAt(this.camTarget);

    // задник закрывает весь кадр
    const bd = dist + Math.abs(this.backdrop.position.z);
    const bh = 2 * bd * Math.tan((cam.fov * Math.PI) / 360) * 1.3;
    this.backdrop.scale.set(bh * cam.aspect * 1.2, bh, 1);
    this.backdrop.position.x = cam.position.x * 0.5;
    this.backdrop.position.y = this.camTarget.y;

    // флакон
    const introB = easeOut(clamp(it * 1.35));
    const idle = Math.sin(t * 0.8) * 0.06;
    this.bottleRig.position.y = idle + (1 - introB) * 5.5 - E * 1.2;
    this.bottleRig.rotation.y = -0.55 + (1 - introB) * -2.4 + easeInOut(A) * Math.PI * 2 + B * 0.5 + px * 0.25 + Math.sin(t * 0.35) * 0.06;
    this.bottleRig.rotation.x = -0.05 + py * 0.06 + Math.sin(t * 0.6) * 0.02;
    this.bottleRig.rotation.z = Math.sin(t * 0.5) * 0.025 - A * (1 - A) * 0.35;
    const sc = 1 - E * 0.25;
    this.bottleRig.scale.setScalar(sc);

    const b = this.bottle;
    b.setOpen(easeInOut(B));
    // кисть «в руке»: наклон вправо и к зрителю
    const cc = smooth(C);
    b.capPivot.rotation.z = -cc * 0.55;
    b.capPivot.rotation.x = cc * 0.25;
    b.capPivot.position.x = cc * 1.05;
    b.capPivot.position.y += cc * 0.15;
    b.capPivot.rotation.y += Math.sin(t * 0.9) * 0.05 * B;

    // капля
    b.updateMatrixWorld(true);
    b.brushTip.getWorldPosition(_w);
    b.worldToLocal(_v.copy(_w));
    if (C > 0.15 && D < 1) {
      const grow = smooth(seg(C, 0.15, 1));
      b.drop.visible = true;
      const fall = D * D * 7.5;
      b.drop.position.set(_v.x, _v.y - 0.02 - grow * 0.03 - fall, _v.z);
      const stretch = 1 + D * 0.7;
      b.drop.scale.set(grow / Math.sqrt(stretch), grow * stretch, grow / Math.sqrt(stretch));
    } else {
      b.drop.visible = false;
    }

    // искры у кисти
    this.brushSparkles.position.copy(_w);
    this.brushSparkles.material.uniforms.uOpacity.value = B * (1 - D) * 0.9;
    this.brushSparkles.material.uniforms.uTime.value = t;
    this.sparkles.material.uniforms.uTime.value = t;
    this.sparkles.material.uniforms.uOpacity.value = introB * (1 - E);

    // буквы: поднимаются при появлении; при повороте флакона расходятся в стороны
    // и уходят в глубину, за задник
    const n = this.letters.length;
    const S = this.wordScale || 1;
    for (let i = 0; i < n; i++) {
      const m = this.letters[i];
      const home = m.userData.home;
      if (!home) continue;
      const li = easeOut(clamp(it * 1.8 - i * 0.09));
      const c = i - (n - 1) / 2;
      const side = Math.sign(c) || (i % 2 ? 1 : -1);
      const spread = easeInOut(clamp(A * 1.25 - Math.abs(c) * 0.03));
      m.position.set(
        home.x + side * spread * S * (0.9 + Math.abs(c) * 0.35),
        home.y - (1 - li) * S * 1.1 - spread * S * 0.25 * (1 + Math.abs(c) * 0.2),
        -spread * (2.5 + Math.abs(c) * 0.9)
      );
      m.rotation.x = (1 - li) * 0.9;
      m.rotation.y = side * spread * 0.9;
      m.visible = li > 0.001 && spread < 0.999;
    }

    // декор плавает и разлетается
    for (const d of this.decor) {
      const u = d.userData;
      const k = u.depth;
      const away = 1 + easeInOut(A) * 0.35 * k + E * 0.8;
      const sx = u.sx ?? 1;
      d.position.set(
        u.base.x * away * sx + px * 0.18 * k,
        u.base.y * away * (u.sy ?? 1) + Math.sin(t * 0.7 + u.phase) * 0.12 - py * 0.12 * k + (1 - introB) * -3 - (this.lift || 0) * 1.2,
        u.base.z
      );
      d.rotation.x += u.spin[0] * dt;
      d.rotation.y += u.spin[1] * dt;
      d.rotation.z += u.spin[2] * dt;
      const di = easeOut(clamp(it * 1.5 - 0.3));
      d.scale.setScalar((d.userData.s0 ??= d.scale.x) * di * (u.ss ?? 1));
    }

    // экранные координаты «якорей» — для выносок с линиями
    this.project('brush', _w);
    b.localToWorld(_v.set(-0.74, 1.4, 0.35));
    this.project('edge', _v);
    b.localToWorld(_v.set(0.5, 0.55, 0.53));
    this.project('liquid', _v);
    b.capInner.localToWorld(_v.set(-0.2, 1.05, 0.25));
    this.project('cap', _v);
    if (b.drop.visible) {
      b.drop.getWorldPosition(_v);
      this.project('drop', _v);
    }
  }

  project(name, v) {
    const p = v.clone().project(this.camera);
    const a = (this.anchors[name] ||= { x: 0, y: 0 });
    a.x = (p.x * 0.5 + 0.5) * this.width;
    a.y = (-p.y * 0.5 + 0.5) * this.height;
    a.z = p.z;
  }
}
