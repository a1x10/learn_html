import * as THREE from 'three';

// Cursor trail: tiny fox shards shed by the pointer. They tumble, drift and fade.
// Desktop only (fine pointer); one instanced draw call.
export class CursorTrail {
  constructor(world, { count = 90 } = {}) {
    this.world = world;
    const g = new THREE.BufferGeometry();
    // a thin, slightly irregular triangle
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0.62, 0, -0.42, -0.36, 0, 0.5, -0.26, 0]), 3));
    g.computeVertexNormals();
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, depthWrite: false, toneMapped: false });
    this.mesh = new THREE.InstancedMesh(g, mat, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 20;
    this.object = this.mesh;
    this.parts = [];
    const palette = ['#ff7a2a', '#ffb066', '#ffe3c6', '#ff5a1a', '#8fb0ff'];
    for (let i = 0; i < count; i++) {
      this.parts.push({
        life: 0,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        rot: new THREE.Euler(),
        spin: new THREE.Vector3(),
        size: 0,
      });
      const c = new THREE.Color(palette[i % palette.length]).multiplyScalar(i % 5 === 4 ? 1.4 : 1.8);
      this.mesh.setColorAt(i, c);
    }
    this.mesh.instanceColor.needsUpdate = true;
    this.next = 0;
    this.last = new THREE.Vector2(999, 999);
    this.acc = 0;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
    this._p = new THREE.Vector3();
    this.z = 4; // between the camera and the page content
    this.plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -this.z);
    this.ray = new THREE.Raycaster();
    this.enabled = true;
  }

  spawn(x, y, speed) {
    const p = this.parts[this.next];
    this.next = (this.next + 1) % this.parts.length;
    p.life = 1;
    p.pos.set(x, y, this.z);
    p.vel.set((Math.random() - 0.5) * 0.6, -0.15 - Math.random() * 0.5, (Math.random() - 0.5) * 0.4).multiplyScalar(0.6 + speed * 0.4);
    p.rot.set(Math.random() * 6.28, Math.random() * 6.28, Math.random() * 6.28);
    p.spin.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6);
    p.size = 0.03 + Math.random() * 0.045;
  }

  update(time, dt) {
    const w = this.world;
    const ptr = w.pointerRaw;
    // pointer → exact point on the trail plane (the camera has parallax, so cast a ray)
    this.ray.setFromCamera(ptr, w.camera);
    const hit = this.ray.ray.intersectPlane(this.plane, this._p);
    const dx = ptr.x - this.last.x;
    const dy = ptr.y - this.last.y;
    const moved = Math.hypot(dx * w.w, dy * w.h) * 0.5; // px since last frame
    if (hit && this.lastHit && this.last.x !== 999 && moved > 1.5) {
      this.acc += moved;
      const speed = Math.min(3, moved / 20);
      while (this.acc > 14) {
        this.acc -= 14;
        const k = Math.random();
        this.spawn(hit.x + (this.lastHit.x - hit.x) * k, hit.y + (this.lastHit.y - hit.y) * k, speed);
      }
    }
    this.last.copy(ptr);
    if (hit) (this.lastHit ||= new THREE.Vector3()).copy(hit);

    let alive = 0;
    for (let i = 0; i < this.parts.length; i++) {
      const p = this.parts[i];
      if (p.life <= 0) {
        this._m.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(i, this._m);
        continue;
      }
      alive++;
      p.life -= dt * 1.1;
      p.vel.y -= dt * 0.25;
      p.pos.addScaledVector(p.vel, dt);
      p.rot.x += p.spin.x * dt;
      p.rot.y += p.spin.y * dt;
      p.rot.z += p.spin.z * dt;
      const s = p.size * Math.max(0, p.life) * (1.4 - p.life * 0.4);
      this._q.setFromEuler(p.rot);
      this._s.setScalar(s);
      this._m.compose(p.pos, this._q, this._s);
      this.mesh.setMatrixAt(i, this._m);
    }
    this.mesh.visible = alive > 0;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
