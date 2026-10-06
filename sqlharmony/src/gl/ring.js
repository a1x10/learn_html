import * as THREE from 'three';
import { ringTexture, FONTS } from './textures.js';

// Two counter-rotating rings of text: SQL keywords outside, product facts inside.
// Front faces are bright, the far side of the ring shows through, dimmer and warmer.
function ringMaterial(tex, { color = '#f3f5ff', back = '#ff8a3d', backAmt = 0.32, repeat = 1 } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTex: { value: tex },
      uOffset: { value: 0 },
      uRepeat: { value: repeat },
      uColor: { value: new THREE.Color(color) },
      uBack: { value: new THREE.Color(back) },
      uBackAmt: { value: backAmt },
      uFade: { value: 1 },
    },
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `
      varying vec2 vUv; varying float vSide;
      varying vec3 vN; varying vec3 vV;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uTex; uniform float uOffset; uniform float uRepeat;
      uniform vec3 uColor; uniform vec3 uBack; uniform float uBackAmt; uniform float uFade;
      varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main() {
        vec2 uv = vec2(fract(vUv.x * uRepeat + uOffset), vUv.y);
        if (!gl_FrontFacing) uv.x = fract(-vUv.x * uRepeat - uOffset + 0.5);
        vec4 t = texture2D(uTex, uv);
        float a = t.a;
        vec3 tc = t.rgb;
        float facing = abs(dot(normalize(vN), normalize(vV)));
        vec3 col;
        float alpha;
        if (gl_FrontFacing) {
          col = tc * uColor * (0.75 + 0.25 * facing);
          alpha = a * smoothstep(0.0, 0.35, facing);
        } else {
          col = mix(tc, uBack, 0.65);
          alpha = a * uBackAmt * smoothstep(0.0, 0.4, facing);
        }
        gl_FragColor = vec4(col, alpha * uFade);
      }`,
  });
}

export class TextRing {
  constructor(world, anchor, { mobile = false } = {}) {
    this.world = world;
    this.anchor = anchor;
    this.group = new THREE.Group();
    this.object = this.group;
    this.spin = 0;

    const outer = ringTexture(['SELECT', 'FROM', 'LEFT JOIN', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY', 'PL/SQL', 'XLSX'], {
      height: mobile ? 160 : 256,
      font: FONTS.display,
      weight: 700,
    });
    const inner = ringTexture(['SQL HARMONY', 'ORACLE FUSION CLOUD', 'WEB + WINDOWS', 'FREE TO START', 'CHATGPT INSIDE'], {
      height: mobile ? 96 : 128,
      font: FONTS.mono,
      weight: 500,
      color: '#ffb36b',
      sepColor: '#7d9bff',
    });

    const R1 = 3.3;
    const H1 = 0.62;
    const rep1 = Math.max(1, Math.round((2 * Math.PI * R1) / H1 / outer.aspect));
    this.outer = new THREE.Mesh(new THREE.CylinderGeometry(R1, R1, H1, 160, 1, true), ringMaterial(outer.texture, { repeat: rep1 }));
    const R2 = 2.35;
    const H2 = 0.2;
    const rep2 = Math.max(1, Math.round((2 * Math.PI * R2) / H2 / inner.aspect));
    this.inner = new THREE.Mesh(new THREE.CylinderGeometry(R2, R2, H2, 128, 1, true), ringMaterial(inner.texture, { repeat: rep2, color: '#ffc28a', back: '#6f8cff', backAmt: 0.22 }));

    // soft core glow
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uColor: { value: new THREE.Color('#ff7a2a') }, uAmt: { value: 0.22 } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader:
          'uniform vec3 uColor; uniform float uAmt; varying vec2 vUv; void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*4.0)*smoothstep(1.0, 0.55, d)*uAmt; gl_FragColor = vec4(uColor*a, 1.0); }',
      })
    );
    glow.scale.set(9, 5, 1);
    glow.position.z = -1.5;
    this.glow = glow;

    this.tilt = new THREE.Group();
    this.tilt.rotation.set(0.32, 0, -0.1);
    this.inner.rotation.x = -0.18;
    this.inner.rotation.z = 0.22;
    this.tilt.add(this.outer, this.inner);
    this.group.add(glow, this.tilt);
    this.group.visible = false;
  }

  update(time, dt) {
    const a = this.anchor;
    this.group.visible = a.visible;
    if (!a.visible) return;
    const vel = this.world.scrollVel || 0;
    this.spin += dt * (0.06 + Math.min(0.9, Math.abs(vel) / 2500)) * (vel < -30 ? -1 : 1);
    this.outer.material.uniforms.uOffset.value = this.spin;
    this.inner.material.uniforms.uOffset.value = -this.spin * 1.3 + time * 0.01;
    // fit the ring into the anchor
    const s = Math.min(a.w / 8.4, a.h / 4.3);
    this.group.position.set(a.x, a.y - a.h * 0.06, 0);
    this.group.scale.setScalar(s);
    // enter: rings tip up as the section scrolls through
    const p = a.progress;
    this.tilt.rotation.x = 0.55 - p * 0.45 + this.world.pointer.y * 0.08;
    this.tilt.rotation.y = this.world.pointer.x * 0.12;
    this.tilt.rotation.z = -0.1 + Math.sin(time * 0.3) * 0.02;
  }
}
