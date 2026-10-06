import * as THREE from 'three';
import { foxTriangles, subdivide } from './fox.js';
import { buildFormations, FORM, FORM_COUNT } from './formations.js';

// The fox is made of ~1.7k small triangular shards. All of them live in one mesh;
// a vertex shader moves every shard between two "formations" (A → B) stored in a
// float texture. A formation is placed on the page by a placement function
// (anchor position, scale and rotation), so the swarm can travel from the hero fox
// to an icon in the features section, an orbit around the AI orb, and back.

const TEX_W = 64;

const vertexHead = /* glsl */ `
  attribute vec3 aCenter;
  attribute float aIndex;
  attribute vec4 aRand;
  attribute float aSize;
  attribute vec2 aOrder;
  uniform highp sampler2D uForms;
  uniform float uRows;
  uniform float uFormA;
  uniform float uFormB;
  uniform float uMix;
  uniform mat4 uMatA;
  uniform mat4 uMatB;
  uniform float uScaleA;
  uniform float uScaleB;
  uniform float uFoxA;
  uniform float uFoxB;
  uniform mat3 uRefRot;
  uniform float uTime;
  uniform float uStagger;
  uniform vec3 uOrderW;
  uniform float uSwirl;
  uniform float uSpin;
  uniform vec3 uPointer;
  uniform float uHover;
  uniform float uHoverR;
  uniform vec3 uFoxCenter;
  uniform float uBreath;
  uniform float uBlink;
  uniform vec4 uEyeLine; // eye inner corner (xy) and outer corner (zw), right eye
  uniform vec2 uEyeR;    // falloff radii
  varying float vFree;
  varying float vHot;

  vec4 shardForm(float f) {
    float row = floor(aIndex / ${TEX_W}.0) + f * uRows;
    float col = mod(aIndex, ${TEX_W}.0);
    return texelFetch(uForms, ivec2(int(col), int(row)), 0);
  }
  vec3 rotAxis(vec3 v, vec3 k, float a) {
    float c = cos(a); float s = sin(a);
    return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
  }
`;

const vertexBody = /* glsl */ `
  vec4 FA = shardForm(uFormA);
  vec4 FB = shardForm(uFormB);
  float ord = dot(vec3(aRand.w, aOrder.x, aOrder.y), uOrderW);
  float t = clamp(uMix * (1.0 + uStagger) - ord * uStagger, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);

  vec3 cA = (uMatA * vec4(FA.xyz, 1.0)).xyz;
  vec3 cB = (uMatB * vec4(FB.xyz, 1.0)).xyz;
  vec3 c = mix(cA, cB, t);
  vec3 sw = normalize(aRand.xyz - 0.5 + 0.0001);
  c += sw * sin(3.14159265 * t) * uSwirl * (0.35 + aRand.w);

  // after an interrupted morph, slot A is a snapshot that remembers each shard's fox weight
  float foxA = uFoxA;
  if (abs(uFormA - ${FORM.SNAP}.0) < 0.5) foxA = shardForm(${FORM.SNAPW}.0).x;
  float wFox = foxA * (1.0 - t) + uFoxB * t;

  // living surface: a slow wave runs over the fox from chin to ears.
  // Evaluated per vertex (not per shard) so neighbouring facets stay sealed.
  vec3 vOut = uRefRot * normalize(position + vec3(0.0, 0.0, 0.0001));
  vec3 breath = vOut * sin(uTime * 1.7 - position.y * 4.0) * uBreath * wFox * uScaleA;
  vec3 out0 = c - uFoxCenter;
  float ol = length(out0);
  vec3 outward = ol > 0.0001 ? out0 / ol : vec3(0.0, 0.0, 1.0);

  // facets near the cursor lift and part
  vec2 dp = c.xy - uPointer.xy;
  float hd = length(dp);
  float lift = smoothstep(uHoverR, 0.0, hd) * uHover;
  c.xy += (hd > 0.0001 ? dp / hd : vec2(0.0)) * lift * 0.35;
  c += outward * lift * 0.6;
  vHot = lift;

  float sA = (FA.w < 0.0 ? aSize : FA.w) * uScaleA;
  float sB = (FB.w < 0.0 ? aSize : FB.w) * uScaleB;
  float s = mix(sA, sB, t);

  // free tumbling; wrapped to ±π so returning to the fox never unwinds many turns
  float af = uTime * (0.2 + aRand.w * 0.9) * uSpin + aRand.w * 40.0;
  af = mod(af + 3.14159265, 6.28318531) - 3.14159265;
  float ang = af * (1.0 - wFox);
  vec3 axis = normalize(aRand.zxy - 0.5 + 0.0001);
  // blink: the area around each eye folds onto the line between its corners.
  // A smooth field over positions, so facets stretch instead of tearing apart.
  vec3 bp = position;
  if (uBlink > 0.0) {
    float ax = abs(bp.x);
    vec2 ei = uEyeLine.xy; vec2 eo = uEyeLine.zw;
    vec2 ec = (ei + eo) * 0.5;
    vec2 dd = (vec2(ax, bp.y) - ec) / uEyeR;
    float fall = exp(-dot(dd, dd) * 1.6) * smoothstep(-0.05, 0.25, bp.z);
    float lineY = ei.y + (clamp(ax, ei.x, eo.x) - ei.x) * (eo.y - ei.y) / (eo.x - ei.x);
    bp.y = mix(bp.y, lineY, uBlink * fall * wFox);
  }
  vec3 local = uRefRot * (bp - aCenter) * (s / max(aSize, 0.0001));
  local = rotAxis(local, axis, ang);

  vec3 transformed = c + local + breath;
  vFree = 1.0 - wFox;
`;

export class Shards {
  constructor({ levels = 2 } = {}) {
    const tris = subdivide(foxTriangles({ height: 2 }), levels);
    const lm = foxTriangles.landmarks;
    const N = tris.length;
    this.N = N;
    const position = new Float32Array(N * 9);
    const center = new Float32Array(N * 9);
    const color = new Float32Array(N * 9);
    const index = new Float32Array(N * 3);
    const rand = new Float32Array(N * 12);
    const size = new Float32Array(N * 3);
    const order = new Float32Array(N * 6);
    const centers = new Float32Array(N * 3);
    this.sizes = new Float32Array(N);
    this.rnd = new Float32Array(N * 4);
    this.ord = new Float32Array(N * 2);
    this.roles = [];

    let minY = Infinity;
    let maxY = -Infinity;
    let maxR = 0;
    tris.forEach((t, i) => {
      const cx = (t.a[0] + t.b[0] + t.c[0]) / 3;
      const cy = (t.a[1] + t.b[1] + t.c[1]) / 3;
      const cz = (t.a[2] + t.b[2] + t.c[2]) / 3;
      centers.set([cx, cy, cz], i * 3);
      minY = Math.min(minY, cy);
      maxY = Math.max(maxY, cy);
      maxR = Math.max(maxR, Math.hypot(cx, cy));
    });

    let seed = 99;
    const r = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };

    tris.forEach((t, i) => {
      const cx = centers[i * 3];
      const cy = centers[i * 3 + 1];
      const cz = centers[i * 3 + 2];
      const sz = Math.max(...[t.a, t.b, t.c].map((p) => Math.hypot(p[0] - cx, p[1] - cy, p[2] - cz)));
      this.sizes[i] = sz;
      const rr = [r(), r(), r(), r()];
      this.rnd.set(rr, i * 4);
      const oy = (cy - minY) / (maxY - minY);
      const orad = Math.hypot(cx, cy) / maxR;
      this.ord.set([oy, orad], i * 2);
      this.roles.push(t.role);
      [t.a, t.b, t.c].forEach((p, k) => {
        const v = i * 3 + k;
        position.set(p, v * 3);
        center.set([cx, cy, cz], v * 3);
        color.set(t.color, v * 3);
        index[v] = i;
        rand.set(rr, v * 4);
        size[v] = sz;
        order.set([oy, orad], v * 2);
      });
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
    geo.setAttribute('aCenter', new THREE.BufferAttribute(center, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(color, 3));
    geo.setAttribute('aIndex', new THREE.BufferAttribute(index, 1));
    geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 4));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aOrder', new THREE.BufferAttribute(order, 2));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);

    // formations → float texture: TEX_W columns, `rows` rows per formation
    this.forms = buildFormations(centers, N);
    this.rows = Math.ceil(N / TEX_W);
    const data = new Float32Array(TEX_W * this.rows * FORM_COUNT * 4);
    this.forms.forEach((f, fi) => this._writeForm(data, fi, f));
    this.texData = data;
    this.tex = new THREE.DataTexture(data, TEX_W, this.rows * FORM_COUNT, THREE.RGBAFormat, THREE.FloatType);
    this.tex.minFilter = THREE.NearestFilter;
    this.tex.magFilter = THREE.NearestFilter;
    this.tex.needsUpdate = true;

    this.uniforms = {
      uForms: { value: this.tex },
      uRows: { value: this.rows },
      uFormA: { value: FORM.SCATTER },
      uFormB: { value: FORM.FOX },
      uMix: { value: 0 },
      uMatA: { value: new THREE.Matrix4() },
      uMatB: { value: new THREE.Matrix4() },
      uScaleA: { value: 1 },
      uScaleB: { value: 1 },
      uFoxA: { value: 0 },
      uFoxB: { value: 1 },
      uRefRot: { value: new THREE.Matrix3() },
      uTime: { value: 0 },
      uStagger: { value: 0.6 },
      uOrderW: { value: new THREE.Vector3(1, 0, 0) },
      uSwirl: { value: 0.6 },
      uSpin: { value: 1 },
      uPointer: { value: new THREE.Vector3(999, 999, 0) },
      uHover: { value: 0 },
      uHoverR: { value: 0.9 },
      uFoxCenter: { value: new THREE.Vector3() },
      uBreath: { value: 0.012 },
      uBlink: { value: 0 },
      uEyeLine: { value: new THREE.Vector4() },
      uEyeR: { value: new THREE.Vector2(0.26, 0.17) },
      uGlow: { value: 0.55 },
      uSelfLit: { value: 0.1 },
      uFlash: { value: 0 },
    };

    const mat = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.36,
      metalness: 0.0,
      clearcoat: 0.85,
      clearcoatRoughness: 0.22,
      side: THREE.DoubleSide,
      envMapIntensity: 1.15,
    });
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\n' + vertexHead)
        .replace('#include <begin_vertex>', vertexBody);
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform float uGlow;\nuniform float uSelfLit;\nuniform float uFlash;\nvarying float vFree;\nvarying float vHot;'
        )
        .replace(
          '#include <emissivemap_fragment>',
          '#include <emissivemap_fragment>\n totalEmissiveRadiance += vColor.rgb * (uSelfLit + vFree * uGlow + uFlash + vHot * 0.6);'
        );
    };
    mat.customProgramCacheKey = () => 'fox-shards';
    this.material = mat;
    this.uniforms.uEyeLine.value.set(lm.eyeI[0], lm.eyeI[1], lm.eyeO[0], lm.eyeO[1]);
    // eye size in normalised space sets the falloff
    const ew = lm.eyeO[0] - lm.eyeI[0];
    const eh = lm.eyeT[1] - lm.eyeB[1];
    this.uniforms.uEyeR.value.set(ew * 0.75, eh * 0.95);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.object = this.mesh;

    // director state
    this.places = { identity: () => {} };
    this.A = { form: FORM.SCATTER, place: 'identity' };
    this.B = { form: FORM.FOX, place: 'identity' };
    this.mix = 0;
    this.tween = null;
    this.mode = 'tween';
    this._p = { pos: new THREE.Vector3(), quat: new THREE.Quaternion(), scale: 1 };
    this._matA = new THREE.Matrix4();
    this._matB = new THREE.Matrix4();
    this._refRot = new THREE.Matrix3();
    this._m4 = new THREE.Matrix4();
  }

  _writeForm(data, fi, f) {
    const base = fi * this.rows * TEX_W * 4;
    data.set(f, base);
  }

  /** register a placement: fn(p) sets p.pos (Vector3), p.quat (Quaternion), p.scale (number) */
  place(name, fn) {
    this.places[name] = fn;
  }

  _placement(slot, outMat) {
    const p = this._p;
    p.pos.set(0, 0, 0);
    p.quat.identity();
    p.scale = 1;
    const fn = this.places[slot.place];
    if (fn) fn(p);
    (this._sv ||= new THREE.Vector3()).setScalar(p.scale);
    outMat.compose(p.pos, p.quat, this._sv);
    return p.scale;
  }

  get settled() {
    return !this.tween && this.mix >= 1;
  }
  get target() {
    return this.B;
  }

  /**
   * Move the swarm to a formation. opts: duration, stagger, order:[rand,height,radial], swirl, ease
   */
  go(form, place, opts = {}) {
    if (this.B.form === form && this.B.place === place && this.mode === 'tween') {
      if (this.tween || this.mix >= 1) return;
    }
    this.mode = 'tween';
    if (this.mix > 0 && this.mix < 1) this._snapshot();
    else if (this.mix >= 1) this.A = this.B;
    this.B = { form, place };
    this.mix = 0;
    const u = this.uniforms;
    u.uStagger.value = opts.stagger ?? 0.55;
    u.uOrderW.value.set(...(opts.order || [1, 0, 0]));
    u.uSwirl.value = opts.swirl ?? 0.8;
    this.tween = { t: 0, dur: opts.duration ?? 1.8, ease: opts.ease || ((x) => x) };
  }

  /** drive A→B directly (scroll scrub); damped towards t */
  scrub(formA, placeA, formB, placeB, t, opts = {}) {
    if (this.mode !== 'scrub' || this.A.form !== formA || this.B.form !== formB || this.A.place !== placeA || this.B.place !== placeB) {
      this.mode = 'scrub';
      this.tween = null;
      this.A = { form: formA, place: placeA };
      this.B = { form: formB, place: placeB };
      if (opts.from != null) this.mix = opts.from;
    }
    const u = this.uniforms;
    u.uStagger.value = opts.stagger ?? 0.7;
    u.uOrderW.value.set(...(opts.order || [0.35, 0, 0.65]));
    u.uSwirl.value = opts.swirl ?? 1.2;
    this._scrubTarget = t;
  }

  // freeze the current in-between positions into the SNAP slot (world space)
  _snapshot() {
    const N = this.N;
    const u = this.uniforms;
    const fa = this.forms[this.A.form];
    const fb = this.forms[this.B.form];
    const sa = this._placement(this.A, this._matA);
    const sb = this._placement(this.B, this._matB);
    const snap = this.forms[FORM.SNAP];
    const snapW = this.forms[FORM.SNAPW];
    const nextW = this._nextW || (this._nextW = new Float32Array(N));
    const foxBw = this.B.form === FORM.FOX ? 1 : 0;
    const ow = u.uOrderW.value;
    const st = u.uStagger.value;
    const sw = u.uSwirl.value;
    const va = new THREE.Vector3();
    const vb = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const rw = this.rnd[i * 4 + 3];
      const ord = rw * ow.x + this.ord[i * 2] * ow.y + this.ord[i * 2 + 1] * ow.z;
      let t = Math.min(1, Math.max(0, this.mix * (1 + st) - ord * st));
      t = t * t * (3 - 2 * t);
      va.set(fa[i * 4], fa[i * 4 + 1], fa[i * 4 + 2]).applyMatrix4(this._matA);
      vb.set(fb[i * 4], fb[i * 4 + 1], fb[i * 4 + 2]).applyMatrix4(this._matB);
      va.lerp(vb, t);
      // swirl offset
      const sx = this.rnd[i * 4] - 0.5;
      const sy = this.rnd[i * 4 + 1] - 0.5;
      const sz = this.rnd[i * 4 + 2] - 0.5;
      const sl = Math.hypot(sx, sy, sz) || 1;
      const k = Math.sin(Math.PI * t) * sw * (0.35 + rw);
      va.x += (sx / sl) * k;
      va.y += (sy / sl) * k;
      va.z += (sz / sl) * k;
      const sizeA = (fa[i * 4 + 3] < 0 ? this.sizes[i] : fa[i * 4 + 3]) * sa;
      const sizeB = (fb[i * 4 + 3] < 0 ? this.sizes[i] : fb[i * 4 + 3]) * sb;
      snap[i * 4] = va.x;
      snap[i * 4 + 1] = va.y;
      snap[i * 4 + 2] = va.z;
      snap[i * 4 + 3] = sizeA + (sizeB - sizeA) * t;
      const foxAw = this.A.form === FORM.SNAP ? snapW[i * 4] : this.A.form === FORM.FOX ? 1 : 0;
      nextW[i] = foxAw * (1 - t) + foxBw * t;
    }
    for (let i = 0; i < N; i++) snapW[i * 4] = nextW[i];
    this._writeForm(this.texData, FORM.SNAP, snap);
    this._writeForm(this.texData, FORM.SNAPW, snapW);
    this.tex.needsUpdate = true;
    this.A = { form: FORM.SNAP, place: 'identity' };
    this.mix = 0;
  }

  update(time, dt) {
    const u = this.uniforms;
    u.uTime.value = time;

    if (this.mode === 'tween' && this.tween) {
      const tw = this.tween;
      tw.t = Math.min(1, tw.t + dt / tw.dur);
      this.mix = tw.ease(tw.t);
      if (tw.t >= 1) {
        this.tween = null;
        this.mix = 1;
        tw.onDone?.();
      }
    } else if (this.mode === 'scrub') {
      const k = 1 - Math.pow(0.002, dt);
      this.mix += (this._scrubTarget - this.mix) * k;
    }

    u.uFormA.value = this.A.form;
    u.uFormB.value = this.B.form;
    u.uMix.value = this.mix;
    u.uScaleA.value = this._placement(this.A, u.uMatA.value);
    const qa = this._p.quat.clone();
    const pa = this._p.pos.clone();
    u.uScaleB.value = this._placement(this.B, u.uMatB.value);
    const qb = this._p.quat.clone();
    const pb = this._p.pos.clone();
    const foxA = this.A.form === FORM.FOX ? 1 : 0;
    const foxB = this.B.form === FORM.FOX ? 1 : 0;
    u.uFoxA.value = foxA;
    u.uFoxB.value = foxB;
    // sticky reference orientation (keeps free shards from flipping between formations)
    if (foxA || foxB) {
      const q = foxA && foxB ? qa.slerp(qb, this.mix) : foxA ? qa : qb;
      this._m4.makeRotationFromQuaternion(q);
      u.uRefRot.value.setFromMatrix4(this._m4);
      u.uFoxCenter.value.copy(foxA && foxB ? pa.lerp(pb, this.mix) : foxA ? pa : pb);
    }
  }
}
