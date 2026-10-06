import * as THREE from 'three';

// Behind the reassembled fox at the end: tilted light rings that orbit like a gyroscope,
// a warm core glow and slow god-rays.
export class Portal {
  constructor(world, anchor) {
    this.world = world;
    this.anchor = anchor;
    this.group = new THREE.Group();
    this.object = this.group;
    this.reveal = 0;
    this.rings = [];
    const ringMat = (c1, c2) =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uC1: { value: new THREE.Color(c1) }, uC2: { value: new THREE.Color(c2) }, uAmt: { value: 0 } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader: `uniform float uTime; uniform vec3 uC1; uniform vec3 uC2; uniform float uAmt; varying vec2 vUv;
          void main(){ float t = fract(vUv.x - uTime*0.08); float head = pow(t, 6.0);
          vec3 c = mix(uC2, uC1, t); gl_FragColor = vec4(c * (0.18 + head*1.6) * uAmt, 1.0); }`,
      });
    const specs = [
      [1.75, '#ffb36b', '#ff5a1a', [1.2, 0.2, 0]],
      [2.05, '#8fb0ff', '#4d7cff', [0.4, 1.0, 0.3]],
      [2.35, '#ffd2ad', '#ff6b1a', [-0.6, 0.5, 1.1]],
    ];
    for (const [r, c1, c2, rot] of specs) {
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.012, 8, 220), ringMat(c1, c2));
      m.rotation.set(...rot);
      this.rings.push({ m, speed: 0.12 + r * 0.04, axis: new THREE.Vector3(...rot).normalize() });
      this.group.add(m);
    }
    // core glow + rays
    this.glow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uAmt: { value: 0 } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader: `uniform float uTime; uniform float uAmt; varying vec2 vUv;
          void main(){ vec2 p = (vUv - 0.5) * 2.0; float d = length(p); float a = atan(p.y, p.x);
          float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 0.25), 6.0) * 0.6 + pow(0.5 + 0.5 * sin(a * 5.0 - uTime * 0.18), 8.0) * 0.5;
          float core = exp(-d * d * 7.0);
          float halo = exp(-d * 2.6) * rays * smoothstep(1.0, 0.2, d);
          vec3 c = vec3(1.0, 0.45, 0.14) * core * 0.9 + vec3(1.0, 0.6, 0.3) * halo * 0.45;
          gl_FragColor = vec4(c * uAmt * smoothstep(1.0, 0.7, d), 1.0); }`,
      })
    );
    this.glow.scale.set(9, 9, 1);
    this.glow.position.z = -2.2;
    this.group.add(this.glow);
    this.group.visible = false;
  }

  update(time) {
    const a = this.anchor;
    this.group.visible = a.visible;
    if (!a.visible) return;
    // reveal as the section comes in
    const target = Math.min(1, Math.max(0, (a.progress - 0.12) / 0.3));
    this.reveal += (target - this.reveal) * 0.05;
    const s = (a.h / 2.3) * 0.95;
    this.group.position.set(a.x, a.y, 0);
    this.group.scale.setScalar(s * (0.8 + this.reveal * 0.2));
    for (const r of this.rings) {
      r.m.rotateOnAxis(r.axis, 0.0025 + r.speed * 0.004);
      r.m.material.uniforms.uTime.value = time * r.speed * 3;
      r.m.material.uniforms.uAmt.value = this.reveal;
    }
    this.glow.material.uniforms.uTime.value = time;
    this.glow.material.uniforms.uAmt.value = this.reveal * 0.8;
  }
}
