import * as THREE from 'three';
import { Stage } from '../engine.js';
import { pointer, damp, fitDistance } from '../util.js';
import { labelTexture } from '../textures.js';

export const INSTANCES = [
  { name: 'DEV', sub: 'fusion-dev', color: '#7aa2ff' },
  { name: 'TEST', sub: 'fusion-test', color: '#b48cff' },
  { name: 'UAT', sub: 'fusion-uat', color: '#2bd49a' },
  { name: 'PROD', sub: 'fusion-prod', color: '#ff7a3a' },
];

// Несколько экземпляров Oracle Fusion вокруг ядра SQL Harmony.
// Активный экземпляр подсвечен, к нему по лучу бегут пакеты данных; вокруг ядра — кольцо кэша.
export class InstancesStage extends Stage {
  constructor(el) {
    super(el, { fov: 30 });
    this.active = 3;
    this.spin = 0;
    this.scrollP = 0;
    const s = this.scene;
    s.add(new THREE.AmbientLight('#9aa0ff', 0.35));
    const d = new THREE.DirectionalLight('#ffffff', 1.8);
    d.position.set(3, 4, 5);
    s.add(d);
    this.pt = new THREE.PointLight('#ff7a3a', 6, 6, 1.5);
    s.add(this.pt);

    this.root = new THREE.Group();
    s.add(this.root);

    // ядро: огранённый кристалл со светящейся сердцевиной
    this.core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.75, 1),
      new THREE.MeshPhysicalMaterial({ color: '#c9d0ff', roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.42, iridescence: 1, flatShading: true, envMapIntensity: 2, depthWrite: false })
    );
    this.heart = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34, 2), new THREE.MeshBasicMaterial({ color: '#ff8a4a' }));
    this.root.add(this.heart, this.core);
    this.coreWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.05, 1)),
      new THREE.LineBasicMaterial({ color: '#8b97ff', transparent: true, opacity: 0.25 })
    );
    this.root.add(this.coreWire);

    // кольцо кэша
    this.cache = new THREE.InstancedMesh(new THREE.BoxGeometry(0.14, 0.05, 0.22), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.3, clearcoat: 1, emissive: '#3b45c9', emissiveIntensity: 0.6 }), 64);
    this.cacheTilt = new THREE.Group();
    this.cacheTilt.rotation.x = 1.2;
    this.cacheTilt.add(this.cache);
    this.root.add(this.cacheTilt);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3(1, 1, 1);
    this._c = new THREE.Color();

    // экземпляры
    this.nodes = INSTANCES.map((inst, i) => {
      const g = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.36, 0),
        new THREE.MeshPhysicalMaterial({ color: inst.color, roughness: 0.2, clearcoat: 1, flatShading: true, emissive: inst.color, emissiveIntensity: 0.15, envMapIntensity: 1.2 })
      );
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.012, 8, 64), new THREE.MeshBasicMaterial({ color: inst.color, transparent: true, opacity: 0.5 }));
      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(inst.name, inst.sub, inst.color), transparent: true, depthWrite: false, depthTest: false }));
      label.renderOrder = 10;
      label.scale.set(1.2, 0.45, 1);
      label.position.set(0, 0.86, 0);
      g.add(body, halo, label);
      g.userData = { body, halo, label, a: (i / INSTANCES.length) * Math.PI * 2 + 0.6, glow: 0 };
      this.root.add(g);

      // луч ядро → экземпляр с бегущими штрихами
      const beamGeo = new THREE.BufferGeometry();
      beamGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(2 * 3 * 32), 3));
      const t = new Float32Array(64);
      for (let k = 0; k < 64; k++) t[k] = Math.floor(k / 2) / 31 + (k % 2) / 31;
      beamGeo.setAttribute('aT', new THREE.BufferAttribute(t, 1));
      const beam = new THREE.LineSegments(
        beamGeo,
        new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(inst.color) }, uOn: { value: 0 } },
          vertexShader: `attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
          fragmentShader: `uniform float uTime; uniform vec3 uColor; uniform float uOn; varying float vT;
            void main(){ float dash = smoothstep(0.55, 1.0, sin(vT * 40.0 - uTime * 8.0));
              float a = (0.12 + uOn * (0.35 + dash * 0.9)) * smoothstep(0.0, 0.15, vT);
              gl_FragColor = vec4(uColor * (1.0 + dash), a); }`,
        })
      );
      beam.frustumCulled = false;
      this.root.add(beam);
      g.userData.beam = beam;

      // пакеты данных
      const packets = [];
      for (let k = 0; k < 4; k++) {
        const pk = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 8), new THREE.MeshBasicMaterial({ color: inst.color, transparent: true }));
        pk.userData.off = k / 4;
        this.root.add(pk);
        packets.push(pk);
      }
      g.userData.packets = packets;
      return g;
    });
  }

  setActive(i) {
    this.active = i;
    this.pulse = 1;
  }

  resize(w, h) {
    this.dist = fitDistance(this.camera, 4.6, 6.6);
  }

  update(time, dt) {
    const t = this.time;
    this.pulse = damp(this.pulse || 0, 0, 2.5, dt);
    this.spin += dt * 0.12;
    const tilt = 0.32;

    this.core.rotation.y = t * 0.3;
    this.core.rotation.x = t * 0.17;
    this.coreWire.rotation.y = -t * 0.12;
    this.heart.scale.setScalar(1 + Math.sin(t * 3) * 0.06 + this.pulse * 0.4);
    const act = INSTANCES[this.active];
    this.heart.material.color.lerp(this._c.set(act.color), 1 - Math.exp(-dt * 3));
    this.pt.color.copy(this.heart.material.color);

    // кэш: плитки вращаются и вспыхивают, когда в них «пишется» запрос
    for (let i = 0; i < 64; i++) {
      const a = (i / 64) * Math.PI * 2 + t * 0.4;
      const r = 1.45 + Math.sin(i * 3.1) * 0.05;
      this._v.set(Math.cos(a) * r, Math.sin(t * 2 + i) * 0.03, Math.sin(a) * r);
      this._q.setFromAxisAngle(this._v.clone().set(0, 1, 0), -a);
      const flash = Math.max(0, Math.sin(t * 2.2 - i * 0.6)) ** 12;
      this._s.set(1, 1 + flash * 3, 1);
      this._m.compose(this._v, this._q, this._s);
      this.cache.setMatrixAt(i, this._m);
      this.cache.setColorAt(i, this._c.set('#ffffff').lerp(this._c.clone().set(act.color), flash));
    }
    this.cache.instanceMatrix.needsUpdate = true;
    this.cache.instanceColor.needsUpdate = true;

    this.nodes.forEach((g, i) => {
      const u = g.userData;
      const a = u.a + this.spin;
      const R = 2.55;
      g.position.set(Math.cos(a) * R, Math.sin(a) * R * tilt * 0.5 + Math.sin(t + i) * 0.08, Math.sin(a) * R * 0.6);
      const on = i === this.active ? 1 : 0;
      u.glow = damp(u.glow, on, 4, dt);
      u.body.rotation.y = t * (0.6 + u.glow);
      u.body.rotation.x = t * 0.3;
      u.body.scale.setScalar(1 + u.glow * 0.35);
      u.body.material.emissiveIntensity = 0.12 + u.glow * 0.9;
      u.halo.rotation.set(Math.PI / 2 + Math.sin(t + i) * 0.3, t * 0.5, 0);
      u.halo.scale.setScalar(1 + u.glow * 0.3 + Math.sin(t * 4) * 0.03 * u.glow);
      u.halo.material.opacity = 0.2 + u.glow * 0.6;
      u.label.material.opacity = 0.55 + u.glow * 0.45;

      // луч
      const pos = u.beam.geometry.attributes.position;
      for (let k = 0; k < 32; k++) {
        for (let e = 0; e < 2; e++) {
          const f = (k + e) / 32;
          // лёгкая дуга
          const lift = Math.sin(f * Math.PI) * 0.35;
          pos.setXYZ(k * 2 + e, g.position.x * f, g.position.y * f + lift, g.position.z * f);
        }
      }
      pos.needsUpdate = true;
      u.beam.material.uniforms.uTime.value = t;
      u.beam.material.uniforms.uOn.value = u.glow;
      u.packets.forEach((pk) => {
        const f = (t * 0.45 + pk.userData.off) % 1;
        const back = Math.floor(t * 0.45 + pk.userData.off) % 2 === 1;
        const ff = back ? 1 - f : f;
        pk.position.set(g.position.x * ff, g.position.y * ff + Math.sin(ff * Math.PI) * 0.35, g.position.z * ff);
        pk.material.opacity = u.glow * Math.sin(f * Math.PI);
        pk.scale.setScalar(0.6 + u.glow * 0.8);
      });
    });

    this.root.rotation.y = pointer.sx * 0.25;
    this.root.rotation.x = 0.12 + pointer.sy * 0.1;
    const cam = this.camera;
    cam.position.set(0, 1.1, (this.dist || 10) * (1.06 - this.scrollP * 0.12));
    cam.lookAt(0, 0.1, 0);
  }
}
