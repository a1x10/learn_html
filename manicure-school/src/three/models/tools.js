import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import * as M from '../materials.js';
import { gritTexture, makeCanvas, toTexture, FONTS, mulberry } from '../textures.js';
import { weldNormals, Bottle } from './bottle.js';
import { FingerNail } from './nail.js';

// Инструменты мастера для блока «Рабочее место»

const lathe = (pts, seg = 48) => {
  const g = new THREE.LatheGeometry(
    pts.map(([x, y]) => new THREE.Vector2(Math.max(x, 0.0005), y)),
    seg
  );
  g.computeVertexNormals();
  return weldNormals(g);
};

// ——— LED-лампа ———
function archShape(w, h, t) {
  const s = new THREE.Shape();
  const ow = w / 2;
  const iw = ow - t;
  s.moveTo(-ow, 0);
  s.lineTo(-ow, h * 0.42);
  s.bezierCurveTo(-ow, h * 0.92, -ow * 0.55, h, 0, h);
  s.bezierCurveTo(ow * 0.55, h, ow, h * 0.92, ow, h * 0.42);
  s.lineTo(ow, 0);
  s.lineTo(iw, 0);
  s.lineTo(iw, h * 0.42);
  s.bezierCurveTo(iw, (h - t) * 0.9, iw * 0.55, h - t, 0, h - t);
  s.bezierCurveTo(-iw * 0.55, h - t, -iw, (h - t) * 0.9, -iw, h * 0.42);
  s.lineTo(-iw, 0);
  s.closePath();
  return s;
}

function displayTexture() {
  const c = makeCanvas(256, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#0d0a0c';
  g.fillRect(0, 0, 256, 128);
  g.fillStyle = '#ffffff';
  g.font = `500 64px ${FONTS.mono}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('60', 128, 66);
  g.font = `400 18px ${FONTS.mono}`;
  g.fillStyle = '#c9b8ff';
  g.fillText('SEC', 210, 70);
  return toTexture(c);
}

export function lamp() {
  const grp = new THREE.Group();
  const white = M.plastic('#f6f0ef', { roughness: 0.22, clearcoat: 0.9, clearcoatRoughness: 0.08 });
  const W = 2.5;
  const H = 1.25;
  const D = 1.9;
  const shell = new THREE.ExtrudeGeometry(archShape(W, H, 0.13), {
    depth: D,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.045,
    bevelSegments: 5,
    curveSegments: 40,
  });
  shell.translate(0, 0, -D / 2);
  const dome = new THREE.Mesh(shell, white);
  grp.add(dome);

  // задняя стенка
  const backShape = new THREE.Shape();
  backShape.moveTo(-W / 2 + 0.1, 0);
  backShape.lineTo(-W / 2 + 0.1, H * 0.42);
  backShape.bezierCurveTo(-W / 2 + 0.1, H * 0.88, -W * 0.27, H - 0.1, 0, H - 0.1);
  backShape.bezierCurveTo(W * 0.27, H - 0.1, W / 2 - 0.1, H * 0.88, W / 2 - 0.1, H * 0.42);
  backShape.lineTo(W / 2 - 0.1, 0);
  backShape.closePath();
  const back = new THREE.Mesh(new THREE.ShapeGeometry(backShape, 24), M.plastic('#e9e1e0', { roughness: 0.4, side: THREE.DoubleSide }));
  back.position.z = -D / 2 + 0.1;
  grp.add(back);

  // светодиоды внутри
  const ledMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#e4d8ff').multiplyScalar(2.2), toneMapped: false });
  const ledGeo = new THREE.SphereGeometry(0.035, 12, 8);
  const leds = new THREE.InstancedMesh(ledGeo, ledMat, 27);
  const m4 = new THREE.Matrix4();
  let k = 0;
  for (let zi = 0; zi < 3; zi++)
    for (let ai = 0; ai < 9; ai++) {
      const a = Math.PI * (0.12 + (0.76 * ai) / 8);
      const x = Math.cos(a) * (W / 2 - 0.26);
      const y = 0.2 + Math.sin(a) * (H - 0.5);
      m4.makeTranslation(x, y, -0.55 + zi * 0.55);
      leds.setMatrixAt(k++, m4);
    }
  grp.add(leds);

  // мягкое фиолетовое свечение внутри
  const glowC = makeCanvas(128, 128);
  const gg = glowC.getContext('2d');
  const grd = gg.createRadialGradient(64, 40, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(190,160,255,0.9)');
  grd.addColorStop(1, 'rgba(120,80,255,0)');
  gg.fillStyle = grd;
  gg.fillRect(0, 0, 128, 128);
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(W * 0.9, H * 0.95),
    new THREE.MeshBasicMaterial({ map: toTexture(glowC), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, opacity: 0.55 })
  );
  glow.position.set(0, H * 0.48, -0.2);
  grp.add(glow);

  // дисплей
  const disp = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.04, 0.32, 3, 0.015), new THREE.MeshStandardMaterial({ color: '#111', roughness: 0.2 }));
  disp.position.set(0, H + 0.03, 0.3);
  grp.add(disp);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.24), new THREE.MeshBasicMaterial({ map: displayTexture(), toneMapped: false }));
  screen.rotation.x = -Math.PI / 2;
  screen.position.set(0, H + 0.052, 0.3);
  grp.add(screen);

  // подставка
  const base = new THREE.Mesh(new RoundedBoxGeometry(W + 0.12, 0.08, D + 0.12, 3, 0.03), M.plastic('#efe6e5', { roughness: 0.35 }));
  base.position.y = -0.04;
  grp.add(base);
  grp.userData.size = 2.6;
  return grp;
}

// ——— аппарат (ручка) с фрезой ———
export function bitHead(type = 'flame') {
  const grp = new THREE.Group();
  const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.0235, 0.0235, 0.36, 16), M.chrome());
  shank.position.y = -0.18;
  grp.add(shank);
  let head;
  if (type === 'flame') {
    head = new THREE.Mesh(
      lathe([[0, 0], [0.03, 0.01], [0.055, 0.06], [0.05, 0.12], [0.028, 0.18], [0, 0.205]], 32),
      M.gold('#d7b06e', { roughness: 0.55, clearcoat: 0 })
    );
  } else if (type === 'ball') {
    head = new THREE.Mesh(new THREE.SphereGeometry(0.06, 32, 20), M.lacquer('#b0122f', { roughness: 0.45, clearcoat: 0.2 }));
    head.position.y = 0.055;
  } else {
    const g = lathe([[0, 0], [0.05, 0], [0.05, 0.2], [0.035, 0.225], [0, 0.23]], 48);
    head = new THREE.Mesh(g, M.chrome({ roughness: 0.3 }));
  }
  grp.add(head);
  return grp;
}

export function efile() {
  const grp = new THREE.Group();
  const bodyMat = M.gold('#e5b8a6', { roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.1 });
  const body = new THREE.Mesh(
    lathe([
      [0.0, 0.0],
      [0.08, 0.005],
      [0.115, 0.04],
      [0.13, 0.12],
      [0.135, 0.5],
      [0.13, 1.25],
      [0.118, 1.42],
      [0.112, 1.8],
      [0.09, 1.95],
      [0.06, 2.02],
      [0.0, 2.03],
    ], 64),
    bodyMat
  );
  grp.add(body);
  // рифлёные кольца захвата
  const ringMat = M.plastic('#2a1a20', { roughness: 0.4 });
  for (let i = 0; i < 6; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.116, 0.012, 10, 48), ringMat);
    r.rotation.x = Math.PI / 2;
    r.position.y = 1.48 + i * 0.055;
    grp.add(r);
  }
  const collet = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.1, 32), M.chrome());
  collet.position.y = 2.07;
  grp.add(collet);
  const bit = bitHead('flame');
  bit.position.y = 2.3;
  grp.add(bit);
  // кабель
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, -0.4, 0.05),
    new THREE.Vector3(0.25, -0.9, 0.1),
    new THREE.Vector3(0.7, -1.2, 0.0),
    new THREE.Vector3(1.4, -1.25, -0.1),
  ]);
  const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.028, 10), M.plastic('#1b1215', { roughness: 0.35 }));
  grp.add(cable);
  grp.userData.size = 2.4;
  return grp;
}

export function bits() {
  const grp = new THREE.Group();
  ['flame', 'ball', 'cyl'].forEach((t, i) => {
    const b = bitHead(t);
    b.position.x = (i - 1) * 0.28;
    b.scale.setScalar(1.6);
    grp.add(b);
  });
  return grp;
}

// ——— пилка 180/240 ———
function pillShape(L, H, r) {
  const s = new THREE.Shape();
  s.moveTo(-L / 2 + r, -H / 2);
  s.lineTo(L / 2 - r, -H / 2);
  s.absarc(L / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
  s.lineTo(-L / 2 + r, H / 2);
  s.absarc(-L / 2 + r, 0, r, Math.PI / 2, Math.PI * 1.5, false);
  return s;
}

function remapUV(geo, L, H) {
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, (pos.getX(i) + L / 2) / L, (pos.getY(i) + H / 2) / H);
  uv.needsUpdate = true;
}

export function nailFile() {
  const L = 2.1;
  const H = 0.3;
  const geo = new THREE.ExtrudeGeometry(pillShape(L, H, 0.13), {
    depth: 0.03,
    bevelEnabled: true,
    bevelThickness: 0.008,
    bevelSize: 0.008,
    bevelSegments: 2,
    curveSegments: 24,
  });
  remapUV(geo, L, H);
  geo.translate(0, 0, -0.015);
  const mat = new THREE.MeshStandardMaterial({ map: gritTexture('#f6dcd8', '#ead0e8'), roughness: 0.95, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  const grp = new THREE.Group();
  grp.add(mesh);
  grp.userData.size = 2.1;
  return grp;
}

export function buffer() {
  const c = makeCanvas(256, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#f2c9cf';
  g.fillRect(0, 0, 256, 128);
  const rnd = mulberry(4);
  for (let i = 0; i < 3000; i++) {
    g.fillStyle = rnd() > 0.5 ? 'rgba(255,255,255,.25)' : 'rgba(150,80,90,.12)';
    g.fillRect(rnd() * 256, rnd() * 128, 1.5, 1.5);
  }
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(1.05, 0.3, 0.32, 4, 0.09), new THREE.MeshStandardMaterial({ map: toTexture(c), roughness: 1 }));
  const grp = new THREE.Group();
  grp.add(mesh);
  return grp;
}

// ——— пушер ———
export function pusher() {
  const geo = lathe(
    [
      [0.0, -1.08],
      [0.02, -1.06],
      [0.03, -1.0],
      [0.022, -0.9],
      [0.028, -0.8],
      [0.055, -0.62],
      [0.06, -0.5],
      [0.06, 0.5],
      [0.055, 0.62],
      [0.028, 0.8],
      [0.022, 0.9],
      [0.03, 1.0],
      [0.02, 1.06],
      [0.0, 1.08],
    ],
    40
  );
  // концы сплющиваем: лопатка и «топорик»
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y > 0.86) {
      const t = (y - 0.86) / 0.22;
      pos.setX(i, pos.getX(i) * (1 + 2.6 * t));
      pos.setZ(i, pos.getZ(i) * (1 - 0.75 * t));
    } else if (y < -0.86) {
      const t = (-0.86 - y) / 0.22;
      pos.setZ(i, pos.getZ(i) * (1 + 2.2 * t));
      pos.setX(i, pos.getX(i) * (1 - 0.7 * t));
    }
  }
  geo.computeVertexNormals();
  weldNormals(geo);
  const mesh = new THREE.Mesh(geo, M.chrome({ roughness: 0.14 }));
  // насечка на ручке
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.064, 0.064, 0.7, 40, 1, true), M.chrome({ roughness: 0.55 }));
  const grp = new THREE.Group();
  grp.add(mesh, grip);
  grp.userData.size = 2.2;
  return grp;
}

// ——— кисти для дизайна ———
export function artBrush(type = 'liner') {
  const grp = new THREE.Group();
  const handle = new THREE.Mesh(
    lathe([[0, 0], [0.04, 0.01], [0.055, 0.2], [0.06, 0.9], [0.05, 1.25], [0.0, 1.27]], 32),
    M.plastic(type === 'liner' ? '#160e11' : '#7e0b24', { roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.03 })
  );
  handle.position.y = -1.27;
  grp.add(handle);
  const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.045, 0.24, 32), M.gold());
  ferrule.position.y = 0.11;
  grp.add(ferrule);
  let bristles;
  if (type === 'liner') {
    bristles = new THREE.Mesh(lathe([[0.034, 0], [0.03, 0.08], [0.016, 0.32], [0.002, 0.46], [0, 0.47]], 20), M.plastic('#2a1d22', { roughness: 0.6 }));
  } else {
    const g = lathe([[0.038, 0], [0.05, 0.08], [0.058, 0.18], [0.05, 0.26], [0.0, 0.28]], 24);
    g.scale(1.3, 1, 0.3);
    bristles = new THREE.Mesh(g, M.plastic('#d8c3b3', { roughness: 0.55 }));
  }
  bristles.position.y = 0.23;
  grp.add(bristles);
  return grp;
}

export function brushes() {
  const grp = new THREE.Group();
  const a = artBrush('liner');
  const b = artBrush('flat');
  a.position.x = -0.16;
  b.position.x = 0.16;
  b.rotation.z = -0.05;
  grp.add(a, b);
  return grp;
}

// ——— масло для кутикулы ———
export function oil() {
  const grp = new THREE.Group();
  const glassMat = M.cheapGlass({ opacity: 0.25 });
  const shape = [[0, 0], [0.26, 0], [0.3, 0.04], [0.31, 0.5], [0.27, 0.62], [0.13, 0.7], [0.12, 0.78]];
  const bottle = new THREE.Mesh(lathe(shape, 48), glassMat);
  const liquid = new THREE.Mesh(lathe([[0, 0.03], [0.26, 0.03], [0.28, 0.06], [0.285, 0.44], [0, 0.44]], 40), M.lacquer('#d58b2c', { roughness: 0.05 }));
  const cap = new THREE.Mesh(lathe([[0, 0], [0.15, 0], [0.155, 0.4], [0.14, 0.44], [0, 0.45]], 48), M.gold());
  cap.position.y = 0.74;
  grp.add(liquid, bottle, cap);
  return grp;
}

// ——— ватные диски ———
export function cotton() {
  const grp = new THREE.Group();
  const geo = lathe([[0, -0.035], [0.38, -0.035], [0.42, -0.015], [0.425, 0.0], [0.42, 0.015], [0.38, 0.035], [0, 0.035]], 48);
  const mat = new THREE.MeshPhysicalMaterial({ color: '#fbf7f4', roughness: 1, sheen: 1, sheenColor: new THREE.Color('#ffffff'), sheenRoughness: 0.8 });
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(i * 0.05, i * 0.072, i * 0.03);
    m.rotation.y = i;
    grp.add(m);
  }
  return grp;
}

// ——— типса (ноготь без пальца) ———
export function tip(design = 'natural') {
  const n = new FingerNail({ finger: false, design, cheapGems: true });
  return n;
}

export function miniBottle(opts = {}) {
  return new Bottle({ transmissive: false, ribbed: false, shadow: false, ...opts });
}
