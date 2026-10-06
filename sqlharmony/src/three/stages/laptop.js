import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Stage } from '../engine.js';
import { pointer, damp, seg, easeInOut, easeOut, lerp, fitDistance } from '../util.js';
import { screenTexture, keyboardTexture } from '../textures.js';

// Ноутбук с SQLHarmonyDesk: при прокрутке крышка открывается, экран загорается,
// ноутбук разворачивается к зрителю. Вокруг парят «файлы» CSV и XLSX.
export class LaptopStage extends Stage {
  constructor(el) {
    super(el, { fov: 28, margin: 60 });
    this.progress = 0;
    const s = this.scene;
    s.add(new THREE.AmbientLight('#a0a6ff', 0.35));
    const key = new THREE.DirectionalLight('#ffffff', 2.4);
    key.position.set(-3, 5, 4);
    s.add(key);
    const warm = new THREE.DirectionalLight('#ff8a4a', 1.6);
    warm.position.set(4, 1, 2);
    s.add(warm);

    this.root = new THREE.Group();
    s.add(this.root);

    const alu = new THREE.MeshPhysicalMaterial({ color: '#2a2d3e', metalness: 0.85, roughness: 0.32, clearcoat: 0.4, envMapIntensity: 1.2 });
    const W = 3.2;
    const D = 2.15;

    // корпус
    const base = new THREE.Mesh(new RoundedBoxGeometry(W, 0.1, D, 4, 0.05), alu);
    this.root.add(base);
    const kb = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.92, D * 0.88), new THREE.MeshStandardMaterial({ map: keyboardTexture(), roughness: 0.7, metalness: 0.2 }));
    kb.rotation.x = -Math.PI / 2;
    kb.position.y = 0.052;
    this.root.add(kb);

    // крышка на шарнире у заднего края
    this.hinge = new THREE.Group();
    this.hinge.position.set(0, 0.05, -D / 2);
    this.root.add(this.hinge);
    const lid = new THREE.Mesh(new RoundedBoxGeometry(W, D * 0.98, 0.07, 4, 0.035), alu);
    lid.position.set(0, (D * 0.98) / 2, -0.035);
    this.hinge.add(lid);
    this.screenMat = new THREE.MeshBasicMaterial({ map: screenTexture(), color: '#000000', toneMapped: false });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.94, D * 0.98 * 0.9), this.screenMat);
    screen.position.set(0, (D * 0.98) / 2, 0.002);
    this.hinge.add(screen);
    // логотип-лиса на крышке — светящийся треугольник
    const logo = new THREE.Mesh(
      new THREE.CircleGeometry(0.22, 3),
      new THREE.MeshBasicMaterial({ color: '#ff7a3a', transparent: true, opacity: 0.9 })
    );
    logo.rotation.set(0, Math.PI, -Math.PI / 2);
    logo.position.set(0, (D * 0.98) / 2, -0.072);
    this.hinge.add(logo);

    // свечение экрана на столе
    const glowC = document.createElement('canvas');
    glowC.width = glowC.height = 128;
    const gg = glowC.getContext('2d');
    const gr = gg.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(120,140,255,0.9)');
    gr.addColorStop(1, 'rgba(120,140,255,0)');
    gg.fillStyle = gr;
    gg.fillRect(0, 0, 128, 128);
    this.floorGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(5.2, 3.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(glowC), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })
    );
    this.floorGlow.rotation.x = -Math.PI / 2;
    this.floorGlow.position.y = -0.06;
    this.root.add(this.floorGlow);

    // файлы экспорта
    this.files = ['CSV', 'XLSX', 'XLSX', 'CSV', 'SQL'].map((label, i) => {
      const c = document.createElement('canvas');
      c.width = 200;
      c.height = 256;
      const g = c.getContext('2d');
      const col = label === 'XLSX' ? '#2bd49a' : label === 'CSV' ? '#7aa2ff' : '#ff7a3a';
      g.fillStyle = '#f3f4fb';
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(150, 0);
      g.lineTo(200, 50);
      g.lineTo(200, 256);
      g.lineTo(0, 256);
      g.closePath();
      g.fill();
      g.fillStyle = '#d6d9ea';
      g.beginPath();
      g.moveTo(150, 0);
      g.lineTo(150, 50);
      g.lineTo(200, 50);
      g.fill();
      g.fillStyle = col;
      g.fillRect(0, 150, 200, 64);
      g.fillStyle = '#fff';
      g.font = '700 40px "Geist", sans-serif';
      g.textAlign = 'center';
      g.fillText(label, 100, 196);
      for (let k = 0; k < 4; k++) {
        g.fillStyle = '#c3c7de';
        g.fillRect(24, 40 + k * 24, 100 + (k % 2) * 30, 10);
      }
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.54), new THREE.MeshBasicMaterial({ map: t, transparent: true, side: THREE.DoubleSide, toneMapped: false }));
      m.userData = { i, a: (i / 5) * Math.PI * 2, r: 2.1 + (i % 2) * 0.35, y: 0.6 + (i % 3) * 0.45 };
      this.root.add(m);
      return m;
    });
  }

  resize() {
    this.dist = fitDistance(this.camera, 3.6, 5.2);
  }

  update(time, dt) {
    const t = this.time;
    const p = this.progress;
    const open = easeInOut(seg(p, 0.05, 0.5));
    // закрыто: крышка лежит; открыто: ~105°
    this.hinge.rotation.x = lerp(Math.PI / 2 - 0.02, -0.28, open);
    const on = easeOut(seg(p, 0.35, 0.6));
    this.screenMat.color.setScalar(on);
    this.floorGlow.material.opacity = on * 0.55;

    this.root.rotation.y = lerp(-0.9, -0.25, easeInOut(seg(p, 0, 0.7))) + pointer.sx * 0.15 + Math.sin(t * 0.4) * 0.04;
    this.root.rotation.x = lerp(0.35, 0.12, open) + pointer.sy * 0.05;
    this.root.position.y = -0.55 + Math.sin(t * 0.8) * 0.04;

    const files = seg(p, 0.45, 0.8);
    this.files.forEach((m) => {
      const u = m.userData;
      const a = u.a + t * 0.25;
      const f = easeOut(Math.min(1, Math.max(0, files * 1.4 - u.i * 0.1)));
      m.position.set(Math.cos(a) * u.r * f, u.y * f + 0.4 + Math.sin(t * 1.3 + u.i) * 0.08, Math.sin(a) * u.r * 0.6 * f + 0.2);
      m.rotation.set(Math.sin(t + u.i) * 0.2, -this.root.rotation.y + Math.sin(t * 0.7 + u.i) * 0.4, Math.sin(t * 0.5 + u.i) * 0.15);
      m.scale.setScalar(Math.max(0.001, f));
    });

    const cam = this.camera;
    cam.position.set(0, 1.4, (this.dist || 8) * lerp(1.15, 0.92, open));
    cam.lookAt(0, 0.35, 0);
  }
}
