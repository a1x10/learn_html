import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import * as M from '../materials.js';
import { labelTexture, makeCanvas, toTexture, mulberry } from '../textures.js';

// Флакон гель-лака: толстое стекло, лак внутри, рифлёный колпачок,
// стержень с кистью и капля. Высота закрытого флакона ~3 единицы, низ в y=0.

const GEO = {};

export function weldNormals(geo, eps = 1e-4) {
  const pos = geo.attributes.position;
  const nor = geo.attributes.normal;
  const map = new Map();
  const key = (i) => `${Math.round(pos.getX(i) / eps)},${Math.round(pos.getY(i) / eps)},${Math.round(pos.getZ(i) / eps)}`;
  for (let i = 0; i < pos.count; i++) {
    const k = key(i);
    let e = map.get(k);
    if (!e) map.set(k, (e = { n: new THREE.Vector3(), ids: [] }));
    e.n.x += nor.getX(i);
    e.n.y += nor.getY(i);
    e.n.z += nor.getZ(i);
    e.ids.push(i);
  }
  for (const e of map.values()) {
    if (e.ids.length < 2) continue;
    e.n.normalize();
    for (const i of e.ids) nor.setXYZ(i, e.n.x, e.n.y, e.n.z);
  }
  nor.needsUpdate = true;
  return geo;
}

function capGeometry(ribbed = true) {
  const R = 0.33;
  const H = 1.3;
  const rr = 0.075;
  const pts = [new THREE.Vector2(0.0005, 0), new THREE.Vector2(R - 0.025, 0), new THREE.Vector2(R, 0.03)];
  for (let i = 1; i <= 12; i++) pts.push(new THREE.Vector2(R, 0.03 + ((H - rr - 0.03) * i) / 12));
  for (let i = 1; i <= 10; i++) {
    const a = (i / 10) * Math.PI * 0.5;
    pts.push(new THREE.Vector2(R - rr + rr * Math.cos(a), H - rr + rr * Math.sin(a)));
  }
  pts.push(new THREE.Vector2(0.0005, H));
  const geo = new THREE.LatheGeometry(pts, ribbed ? 288 : 96);
  if (ribbed) {
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const r = Math.hypot(v.x, v.z);
      if (r > R - 0.002 && v.y > 0.09 && v.y < H - rr - 0.02) {
        const th = Math.atan2(v.z, v.x);
        const rib = Math.pow(0.5 + 0.5 * Math.cos(th * 36), 2.2);
        const k = 1 - 0.028 * (1 - rib);
        pos.setXYZ(i, v.x * k, v.y, v.z * k);
      }
    }
  }
  geo.computeVertexNormals();
  weldNormals(geo);
  return geo;
}

function brushGeometry() {
  const pts = [
    [0.0005, 0.02],
    [0.036, 0.012],
    [0.05, -0.03],
    [0.072, -0.1],
    [0.088, -0.17],
    [0.088, -0.22],
    [0.072, -0.275],
    [0.042, -0.312],
    [0.0005, -0.326],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const geo = new THREE.LatheGeometry(pts, 40);
  geo.scale(1, 1, 0.36);
  geo.computeVertexNormals();
  weldNormals(geo);
  return geo;
}

export function dropGeometry() {
  const pts = [];
  const N = 18;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    // каплевидный профиль: узкий хвост сверху, круглое дно
    const y = -0.18 * t;
    const r = 0.056 * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.62)), 0.9);
    pts.push(new THREE.Vector2(Math.max(r, 0.0005), y));
  }
  const geo = new THREE.LatheGeometry(pts, 32);
  geo.computeVertexNormals();
  weldNormals(geo);
  return geo;
}

function shadowTexture() {
  const s = 256;
  const c = makeCanvas(s, s);
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grd.addColorStop(0, 'rgba(0,0,0,0.55)');
  grd.addColorStop(0.45, 'rgba(0,0,0,0.22)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, s, s);
  return toTexture(c, { srgb: false });
}

// «Блёстки» внутри лака: случайные нормали по мелкой сетке
function glitterNormalMap(seed = 7) {
  const s = 256;
  const c = makeCanvas(s, s);
  const g = c.getContext('2d');
  const img = g.createImageData(s, s);
  const rnd = mulberry(seed);
  const cell = 3;
  for (let y = 0; y < s; y += cell) {
    for (let x = 0; x < s; x += cell) {
      const flake = rnd() > 0.55;
      const nx = flake ? rnd() * 2 - 1 : 0;
      const ny = flake ? rnd() * 2 - 1 : 0;
      const nz = Math.sqrt(Math.max(0.05, 1 - nx * nx * 0.6 - ny * ny * 0.6));
      for (let yy = 0; yy < cell; yy++)
        for (let xx = 0; xx < cell; xx++) {
          const i = ((y + yy) * s + (x + xx)) * 4;
          img.data[i] = (nx * 0.5 + 0.5) * 255;
          img.data[i + 1] = (ny * 0.5 + 0.5) * 255;
          img.data[i + 2] = nz * 255;
          img.data[i + 3] = 255;
        }
    }
  }
  g.putImageData(img, 0, 0);
  const t = toTexture(c, { srgb: false, repeat: true });
  t.repeat.set(3, 3);
  return t;
}

function geos() {
  if (GEO.body) return GEO;
  GEO.body = new RoundedBoxGeometry(1.5, 1.72, 1.06, 7, 0.27);
  GEO.liquid = new RoundedBoxGeometry(1.28, 1.14, 0.84, 6, 0.17);
  GEO.neck = new THREE.CylinderGeometry(0.235, 0.25, 0.22, 48, 1, false);
  GEO.hole = new THREE.CircleGeometry(0.17, 40);
  GEO.capRibbed = capGeometry(true);
  GEO.capSmooth = capGeometry(false);
  GEO.band = new THREE.CylinderGeometry(0.338, 0.338, 0.07, 96, 1, true);
  GEO.stem = new THREE.CylinderGeometry(0.03, 0.034, 1.42, 16);
  GEO.brush = brushGeometry();
  GEO.drop = dropGeometry();
  GEO.label = new THREE.PlaneGeometry(0.96, 0.6);
  GEO.shadow = new THREE.PlaneGeometry(2.8, 1.5);
  GEO.shadowTex = shadowTexture();
  return GEO;
}

let glitterTex = null;

export class Bottle extends THREE.Group {
  constructor({
    color = '#7E0B24',
    cap = 'gold',
    ribbed = true,
    label = null,
    labelColor = '#ffffff',
    transmissive = true,
    glitter = false,
    shadow = true,
  } = {}) {
    super();
    const G = geos();

    this.glassMat = transmissive ? M.glass() : M.cheapGlass();
    this.liquidMat = M.lacquer(color);
    if (glitter) {
      glitterTex ||= glitterNormalMap();
      this.liquidMat.metalness = 0.55;
      this.liquidMat.roughness = 0.3;
      this.liquidMat.normalMap = glitterTex;
      this.liquidMat.normalScale.set(0.9, 0.9);
    }

    const capMat =
      cap === 'black'
        ? M.plastic('#120c0e', { roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.05 })
        : cap === 'rose'
          ? M.gold('#e3ac9b')
          : cap === 'silver'
            ? M.chrome()
            : M.gold();
    const accentMat = cap === 'black' ? M.gold() : M.plastic('#130b0e', { roughness: 0.25 });

    // стекло
    this.body = new THREE.Mesh(G.body, this.glassMat);
    this.body.position.y = 0.86;
    this.add(this.body);

    // лак внутри
    this.liquid = new THREE.Mesh(G.liquid, this.liquidMat);
    this.liquid.position.y = 0.81;
    this.add(this.liquid);

    this.neck = new THREE.Mesh(G.neck, this.glassMat);
    this.neck.position.y = 1.8;
    this.add(this.neck);

    const hole = new THREE.Mesh(G.hole, new THREE.MeshBasicMaterial({ color: '#050203' }));
    hole.rotation.x = -Math.PI / 2;
    hole.position.y = 1.912;
    this.add(hole);

    // этикетка
    if (label !== false) {
      const tex = labelTexture({ ...(label || {}), color: labelColor });
      const lm = new THREE.MeshStandardMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        roughness: 0.35,
        metalness: labelColor === '#ffffff' ? 0 : 0.6,
        polygonOffset: true,
        polygonOffsetFactor: -2,
      });
      this.label = new THREE.Mesh(G.label, lm);
      this.label.position.set(0, 0.86, 0.532);
      this.add(this.label);
    }

    // колпачок: pivot в центре колпачка, чтобы его можно было «держать» под углом
    this.capPivot = new THREE.Group();
    this.capPivot.position.y = 1.76 + 0.62;
    this.add(this.capPivot);
    this.capInner = new THREE.Group();
    this.capInner.position.y = -0.62;
    this.capPivot.add(this.capInner);

    this.cap = new THREE.Mesh(ribbed ? G.capRibbed : G.capSmooth, capMat);
    this.capInner.add(this.cap);
    const band = new THREE.Mesh(G.band, accentMat);
    band.position.y = 0.035;
    this.capInner.add(band);

    this.stem = new THREE.Mesh(G.stem, M.plastic('#1a1114', { roughness: 0.2 }));
    this.stem.position.y = -0.71;
    this.capInner.add(this.stem);

    this.brush = new THREE.Mesh(G.brush, this.liquidMat);
    this.brush.position.y = -1.41;
    this.capInner.add(this.brush);

    this.brushTip = new THREE.Object3D();
    this.brushTip.position.y = -1.73;
    this.capInner.add(this.brushTip);

    this.drop = new THREE.Mesh(G.drop, this.liquidMat);
    this.drop.visible = false;
    this.add(this.drop);

    if (shadow) {
      this.shadow = new THREE.Mesh(
        G.shadow,
        new THREE.MeshBasicMaterial({ map: G.shadowTex, transparent: true, depthWrite: false, opacity: 0.9, toneMapped: false })
      );
      this.shadow.rotation.x = -Math.PI / 2;
      this.shadow.position.y = -0.02;
      this.add(this.shadow);
    }

    this._open = 0;
  }

  setColor(color) {
    this.liquidMat.color.set(color);
  }

  // 0 — закрыт; 0..0.5 — откручиваем; 0.5..1 — поднимаем кисть из флакона
  setOpen(t) {
    this._open = t;
    const unscrew = Math.min(t / 0.5, 1);
    const lift = Math.max((t - 0.5) / 0.5, 0);
    const easeLift = lift * lift * (3 - 2 * lift);
    this.capPivot.rotation.y = -unscrew * Math.PI * 3;
    this.capPivot.position.y = 1.76 + 0.62 + unscrew * 0.16 + easeLift * 1.78;
  }
}
