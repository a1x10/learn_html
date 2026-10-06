import * as THREE from 'three';
import { labelTexture, FONTS } from './textures.js';

// Instances as a small constellation: SQL Harmony in the middle, Fusion instances
// around it. Light packets run along arched beams; the selected instance glows.

const NAMES = ['DEV1', 'DEV2', 'TEST', 'UAT', 'PROD'];

const beamVert = /* glsl */ `
  varying float vT;
  attribute float aT;
  void main() { vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const beamFrag = /* glsl */ `
  uniform float uTime; uniform float uActive; uniform vec3 uColor; uniform vec3 uHot; uniform float uFade;
  varying float vT;
  void main() {
    float base = 0.12 + uActive * 0.25;
    float speed = 0.35 + uActive * 0.6;
    float k = fract(vT * 3.0 - uTime * speed);
    float packet = smoothstep(0.0, 0.08, k) * smoothstep(0.2, 0.08, k);
    float back = fract((1.0 - vT) * 2.0 - uTime * speed * 0.7);
    float packet2 = (smoothstep(0.0, 0.06, back) * smoothstep(0.14, 0.06, back)) * 0.5;
    vec3 col = mix(uColor, uHot, uActive) * (base + (packet + packet2) * (0.8 + uActive * 1.6));
    float ends = smoothstep(0.0, 0.06, vT) * smoothstep(1.0, 0.92, vT);
    gl_FragColor = vec4(col * ends * uFade, 1.0);
  }`;

export class Constellation {
  constructor(world, anchor, { mobile = false } = {}) {
    this.world = world;
    this.anchor = anchor;
    this.group = new THREE.Group();
    this.object = this.group;
    this.active = 1;
    this.tilt = new THREE.Group();
    this.group.add(this.tilt);
    this.nodes = [];
    this.time = 0;

    // hub: a faceted crystal core with a glow
    const hubMat = new THREE.MeshPhysicalMaterial({
      color: '#ff8a3d',
      emissive: '#ff5a1a',
      emissiveIntensity: 0.9,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 1,
      flatShading: true,
    });
    this.hub = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), hubMat);
    this.hubGlow = glowSprite('#ff6a1a', 1.2);
    this.hubGlow.scale.setScalar(2.2);
    const hubLabel = makeLabel('SQL HARMONY', { color: '#ffd2ad', size: 52 });
    hubLabel.position.set(0, -0.62, 0);
    hubLabel.scale.multiplyScalar(0.34);
    this.hubLabel = hubLabel;
    this.tilt.add(this.hubGlow, this.hub, hubLabel);
    this._q = new THREE.Quaternion();

    const nodeGeo = new THREE.SphereGeometry(0.11, 24, 16);
    const hitGeo = new THREE.SphereGeometry(0.42, 12, 8);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    this.hits = [];
    this.hovered = -1;
    this.ray = new THREE.Raycaster();
    const ringGeo = new THREE.TorusGeometry(0.2, 0.006, 6, 64);
    NAMES.forEach((name, i) => {
      const a = (i / NAMES.length) * Math.PI * 2 + 0.35;
      const r = 2.25 + (i % 2) * 0.35;
      const pos = new THREE.Vector3(Math.cos(a) * r, Math.sin(i * 1.7) * 0.35, Math.sin(a) * r * 0.9);
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#8fb0ff') });
      const node = new THREE.Mesh(nodeGeo, mat);
      node.position.copy(pos);
      const hit = new THREE.Mesh(hitGeo, hitMat);
      hit.position.copy(pos);
      hit.userData.index = i;
      this.hits.push(hit);
      this.tilt.add(hit);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: '#8fb0ff', transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false }));
      ring.position.copy(pos);
      const glow = glowSprite('#4d7cff', 0.9);
      glow.position.copy(pos);
      glow.scale.setScalar(0.9);
      const label = makeLabel(name, { color: '#e6ecff', size: 56 });
      label.position.copy(pos).add(new THREE.Vector3(0, 0.36, 0));
      label.scale.multiplyScalar(0.36);

      // arched beam from the hub to the node
      const mid = pos.clone().multiplyScalar(0.5).add(new THREE.Vector3(0, 0.9 + (i % 2) * 0.3, 0));
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), mid, pos);
      const pts = curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      geo.setAttribute('aT', new THREE.BufferAttribute(new Float32Array(pts.map((_, k) => k / (pts.length - 1))), 1));
      const beamMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uActive: { value: 0 },
          uColor: { value: new THREE.Color('#5f86ff') },
          uHot: { value: new THREE.Color('#ffb36b') },
          uFade: { value: 1 },
        },
        vertexShader: beamVert,
        fragmentShader: beamFrag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const beam = new THREE.Line(geo, beamMat);
      // a second, offset line makes the beam read thicker
      const beam2 = new THREE.Line(geo, beamMat);
      beam2.position.y = 0.012;
      this.tilt.add(beam, beam2, glow, node, ring, label);
      this.nodes.push({ node, ring, glow, label, beamMat, mat, phase: i * 1.3, act: i === this.active ? 1 : 0 });
    });

    // orbit rings around the hub
    for (let k = 0; k < 2; k++) {
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(1.1 + k * 0.55, 0.004, 4, 160),
        new THREE.MeshBasicMaterial({ color: k ? '#4d7cff' : '#ff8a3d', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      orbit.rotation.x = Math.PI / 2;
      this.tilt.add(orbit);
    }
    this.tilt.rotation.x = 0.42;
    this.group.visible = false;
  }

  setActive(i) {
    this.active = i;
  }

  update(time, dt) {
    const a = this.anchor;
    this.group.visible = a.visible;
    if (!a.visible) {
      if (this.hovered >= 0) {
        this.hovered = -1;
        document.dispatchEvent(new CustomEvent('cursor-label', { detail: null }));
      }
      return;
    }
    // hover: which instance node is under the cursor
    this.ray.setFromCamera(this.world.pointer, this.world.camera);
    const hit = this.ray.intersectObjects(this.hits, false)[0];
    const hv = hit ? hit.object.userData.index : -1;
    if (hv !== this.hovered) {
      this.hovered = hv;
      document.dispatchEvent(new CustomEvent('cursor-label', { detail: hv >= 0 ? NAMES[hv] : null }));
    }
    const s = Math.min(a.w / 6.4, a.h / 3.4);
    this.group.position.set(a.x, a.y - a.h * 0.04, 0);
    this.group.scale.setScalar(s);
    this.tilt.rotation.y = time * 0.05 + this.world.pointer.x * 0.25;
    this.tilt.rotation.x = 0.42 - this.world.pointer.y * 0.1;
    this.hub.rotation.y = time * 0.6;
    this.hub.rotation.x = Math.sin(time * 0.5) * 0.3;
    // billboards live inside the tilted group: undo the parent's rotation, then face the camera
    this.tilt.updateWorldMatrix(true, false);
    const cam = this.tilt.getWorldQuaternion(this._q).invert().multiply(this.world.camera.quaternion);
    this.hubLabel.quaternion.copy(cam);
    this.nodes.forEach((n, i) => {
      const target = i === this.active ? 1 : 0;
      n.act += (target - n.act) * Math.min(1, dt * 4);
      const pulse = 1 + Math.sin(time * 2 + n.phase) * 0.06;
      n.node.scale.setScalar((1 + n.act * 0.6) * pulse);
      n.ring.scale.setScalar(1 + n.act * 0.9 + Math.sin(time * 1.5 + n.phase) * 0.08);
      n.ring.quaternion.copy(cam);
      n.mat.color.set(n.act > 0.5 ? '#ffd2ad' : '#8fb0ff').lerp(new THREE.Color('#ffffff'), n.act * 0.3);
      n.ring.material.color.set(n.act > 0.5 ? '#ff9a50' : '#8fb0ff');
      n.glow.material.opacity = 0.45 + n.act * 0.5;
      n.glow.scale.setScalar(0.7 + n.act * 0.6);
      n.label.quaternion.copy(cam);
      n.label.material.opacity = 0.55 + n.act * 0.45;
      n.beamMat.uniforms.uTime.value = time + n.phase;
      n.beamMat.uniforms.uActive.value = n.act;
    });
  }
}

function glowSprite(color, amt) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uColor: { value: new THREE.Color(color) }, opacity: { value: amt } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc;
        gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform vec3 uColor; uniform float opacity; varying vec2 vUv;
        void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*5.0) * smoothstep(1.0, 0.6, d) * opacity; gl_FragColor = vec4(uColor*a, 1.0); }`,
    })
  );
  Object.defineProperty(m.material, 'opacity', {
    get() {
      return m.material.uniforms.opacity.value;
    },
    set(v) {
      if (m.material.uniforms) m.material.uniforms.opacity.value = v;
    },
  });
  return m;
}

function makeLabel(text, { color, size }) {
  const { texture, aspect } = labelTexture(text, { size, color, font: FONTS.mono, weight: 600, bg: 'rgba(10,14,30,0.55)', border: 'rgba(150,170,255,0.35)' });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(aspect, 1), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, toneMapped: false }));
  return m;
}
