import * as THREE from 'three';
import { Stage } from '../engine.js';
import { pointer, damp } from '../util.js';

// «Гармония»: концентрические кольца, по которым бегут волны, как звук по струнам.
// Курсор и наведение на кнопку раскачивают амплитуду.
export class RingsStage extends Stage {
  constructor(el, opts = {}) {
    super(el, { fov: 35 });
    this.energy = 0;
    this.energyTarget = 0;
    const count = opts.mobile ? 16 : 26;
    this.uniforms = { uTime: { value: 0 }, uEnergy: { value: 0 }, uMouse: { value: new THREE.Vector2() } };
    this.root = new THREE.Group();
    this.scene.add(this.root);
    const seg = 360;
    for (let i = 0; i < count; i++) {
      const f = i / (count - 1);
      const pos = new Float32Array(seg * 3);
      for (let k = 0; k < seg; k++) {
        const a = (k / seg) * Math.PI * 2;
        pos[k * 3] = Math.cos(a);
        pos[k * 3 + 1] = 0;
        pos[k * 3 + 2] = Math.sin(a);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { ...this.uniforms, uR: { value: 0.5 + f * 4.2 }, uF: { value: f } },
        vertexShader: /* glsl */ `
          uniform float uTime; uniform float uEnergy; uniform float uR; uniform float uF; uniform vec2 uMouse;
          varying float vF; varying float vH;
          void main() {
            float a = atan(position.z, position.x);
            float amp = (0.08 + uEnergy * 0.35) * (0.4 + uF);
            float h = sin(a * 3.0 + uTime * 1.2 + uF * 6.0) * amp
                    + sin(a * 5.0 - uTime * 1.7 + uF * 9.0) * amp * 0.5
                    + sin(uF * 12.0 - uTime * 2.0) * 0.12;
            // волна от курсора
            h += cos(a - atan(uMouse.y, uMouse.x)) * length(uMouse) * 0.35 * uF;
            vec3 p = vec3(position.x * uR, h, position.z * uR);
            vF = uF; vH = h;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }`,
        fragmentShader: /* glsl */ `
          uniform float uEnergy;
          varying float vF; varying float vH;
          void main() {
            vec3 c = mix(vec3(1.0, 0.5, 0.2), vec3(0.36, 0.42, 1.0), smoothstep(0.0, 0.7, vF));
            c = mix(c, vec3(0.75, 0.4, 1.0), smoothstep(0.7, 1.0, vF));
            float a = (0.35 + uEnergy * 0.4) * (1.0 - vF * 0.55) + abs(vH) * 0.6;
            gl_FragColor = vec4(c, a);
          }`,
      });
      const line = new THREE.LineLoop(geo, mat);
      line.frustumCulled = false;
      this.root.add(line);
    }
    this.root.rotation.x = 0.42;
  }

  update(time, dt) {
    this.energy = damp(this.energy, this.energyTarget, 3, dt);
    this.uniforms.uTime.value = this.time;
    this.uniforms.uEnergy.value = this.energy;
    this.uniforms.uMouse.value.set(
      damp(this.uniforms.uMouse.value.x, pointer.sx, 3, dt),
      damp(this.uniforms.uMouse.value.y, pointer.sy, 3, dt)
    );
    this.root.rotation.y = this.time * 0.05;
    this.root.rotation.x = 0.42 + pointer.sy * 0.12;
    const cam = this.camera;
    cam.position.set(0, 2.2, 8.5 / Math.min(1, Math.max(0.55, cam.aspect)));
    cam.lookAt(0, 0, 0);
  }
}
