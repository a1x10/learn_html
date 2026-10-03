// Процедурные 3D-торты: форма (lathe), «съедобный» шейдер и топпинги.
// Все торты строятся из кода — без внешних моделей.
import * as THREE from 'three';

const V2 = THREE.Vector2;
const TAU = Math.PI * 2;

/* ------------------------------------------------------------------ */
/*  GLSL                                                               */
/* ------------------------------------------------------------------ */

// 3D simplex noise — Ashima Arts / Stefan Gustavson (MIT)
const GLSL_NOISE = /* glsl */ `
vec3 cz_mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 cz_mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 cz_permute(vec4 x){return cz_mod289(((x*34.0)+10.0)*x);}
vec4 cz_taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=cz_mod289(i);
  vec4 p=cz_permute(cz_permute(cz_permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=cz_taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float czFbm(vec3 p){float a=0.5,s=0.0;for(int i=0;i<3;i++){s+=a*snoise(p);p=p*2.03+1.7;a*=0.5;}return s;}
`;

const GLSL_SHADE = /* glsl */ `
uniform vec3 cTop; uniform vec3 cTop2; uniform vec3 cSide; uniform vec3 cSide2;
uniform vec3 cInner; uniform vec3 cInner2; uniform vec3 cCrust; uniform vec3 cSpeck;
uniform vec3 cSkin; uniform vec3 cBand; uniform vec3 cPattern;
uniform float uTopStyle, uSideStyle, uLayers, uLayerMix, uCrustH, uSeeds, uSwirl;
uniform float uH, uR, uSkin, uCoat, uPattern, uBand, uSink, uGloss, uEdge, uBumpScale;
varying vec3 vCakePos;

// гасим высокие частоты вдали, чтобы не было «снега»
float czAA(vec3 p, float f){ return 1.0 - smoothstep(0.35, 1.0, length(fwidth(p)) * f); }
float czN(vec3 p, float f){ return snoise(p * f) * czAA(p, f); }

vec3 czCrumbs(vec3 p, vec3 c, out float h){
  float a = czN(p, 26.0);
  float b = czN(p + 11.0, 62.0);
  float m = a * 0.62 + b * 0.38;
  h = m * 0.009;
  return c * (0.8 + 0.32 * m);
}
float czTopY(float r){
  float u = clamp(r / max(uR - uEdge, 0.001), 0.0, 1.0);
  return uH - uSink * (1.0 - u * u);
}
vec3 czLayers(vec3 p){
  float wob = snoise(vec3(p.x * 2.2, p.y * 3.0, p.z * 2.2)) * 0.012;
  float span = max(uH - uCrustH - uCoat, 0.01);
  float f = fract((p.y + wob - uCrustH) / span * uLayers);
  float sponge = 1.0 - smoothstep(uLayerMix - 0.07, uLayerMix + 0.02, f);
  vec3 c = mix(cInner, cInner2, sponge);
  float pores = czN(p, 38.0);
  return c * (0.95 + 0.08 * pores * (0.35 + sponge));
}
vec3 czInner(vec3 p, float r, inout float rough, inout float h){
  vec3 c = cInner;
  float pores = czN(p, 34.0);
  if (uLayers > 0.5) c = czLayers(p); else c *= 0.985 + 0.025 * pores;
  h += pores * 0.0015;
  if (uSeeds > 0.0) {
    float sp = czN(p + 3.3, 30.0);
    float th = 0.66 - uSeeds * 0.2;
    float m = smoothstep(th, th + 0.08, sp);
    c = mix(c, cSpeck, m);
    h += m * 0.003;
  }
  float topY = czTopY(r);
  if (uBand > 0.0) {
    float b0 = topY - uCoat - uBand;
    float bm = smoothstep(b0 - 0.012, b0 + 0.004, p.y + snoise(p * 4.0) * 0.012);
    vec3 bc = cBand * (0.92 + 0.1 * czN(p + 5.0, 40.0));
    c = mix(c, bc, bm);
  }
  if (uCrustH > 0.0) {
    float cb = 1.0 - smoothstep(uCrustH - 0.012, uCrustH + 0.004, p.y + snoise(p * 6.0) * 0.009);
    float hh; vec3 cc = czCrumbs(p, cCrust, hh);
    c = mix(c, cc, cb); rough = mix(rough, 0.95, cb); h += hh * cb;
  }
  if (uCoat > 0.0) {
    float dTop = topY - p.y;
    float cm = 1.0 - smoothstep(uCoat * 0.6, uCoat, dTop + snoise(p * 10.0) * uCoat * 0.25);
    c = mix(c, cTop, cm); rough = mix(rough, 0.55, cm);
  }
  if (uSkin > 0.0) {
    float dS = uR - r;
    float sm = 1.0 - smoothstep(uSkin * 0.45, uSkin, dS + snoise(p * 9.0) * uSkin * 0.3);
    c = mix(c, cSkin, sm);
  }
  return c;
}

void cakeShade(vec3 p, out vec3 col, out float rough, out float h){
  float r = length(p.xz);
  float ny = clamp(p.y / uH, 0.0, 1.0);
  float n1 = czFbm(p * 2.2);
  float n2 = czFbm(p * 5.3 + 7.1);
  h = 0.0; rough = 0.6; col = cInner;
#if CAKE_ZONE == 0
  float ang = atan(p.z, p.x);
  if (uTopStyle < 0.5) {            // обожжённый баскский верх
    float rr = r / uR;
    float big = czFbm(p * 1.25 + 2.0);
    float burn = smoothstep(-0.55, 0.55, big + rr * 0.75 - 0.25);
    vec3 base = mix(cTop, cTop2, burn);
    float mott = czFbm(p * 5.5 + 3.0);
    base *= 0.9 + 0.16 * smoothstep(-0.45, 0.45, mott);
    float pore = czN(p, 22.0);
    col = base * (0.96 + 0.06 * pore);
    rough = mix(0.5, 0.68, burn);
    h = big * 0.03 + mott * 0.008 + pore * 0.0015;
  } else if (uTopStyle < 1.5) {     // какао-пудра
    float g = czN(p, 48.0) * 0.6 + czN(p + 3.0, 105.0) * 0.4;
    col = mix(cTop, cTop2, smoothstep(0.1, 0.7, n1) * 0.5) * (0.88 + 0.16 * g);
    rough = 0.97; h = g * 0.0025 + n1 * 0.006;
  } else if (uTopStyle < 2.5) {     // глянцевая глазурь с разводами
    float sw = sin(ang * 3.0 + r * 7.0 + n1 * 2.6);
    float swirl = smoothstep(0.35, 0.85, sw) * uSwirl;
    col = mix(cTop, cTop2, swirl) * (0.96 + 0.06 * n2);
    rough = uGloss + 0.08 * swirl; h = n1 * 0.004 + swirl * 0.004;
  } else if (uTopStyle < 3.5) {     // крошка
    float hh; col = czCrumbs(p, mix(cTop, cTop2, smoothstep(-0.2, 0.6, n1)), hh); h = hh; rough = 0.92;
  } else {                          // крем
    col = mix(cTop, cTop2, smoothstep(0.0, 0.8, n1) * 0.6) * (0.97 + 0.04 * n2);
    rough = 0.55; h = n1 * 0.012 + n2 * 0.006;
  }
  if (uPattern > 0.5 && uPattern < 1.5) {          // кремовый цветок (медовик)
    float petal = uR * (0.42 + 0.16 * cos(6.0 * ang));
    float w = 0.024;
    float line = 1.0 - smoothstep(w * 0.55, w, abs(r - petal));
    float ring = 1.0 - smoothstep(w * 0.55, w, abs(r - uR * 0.8));
    float dotc = 1.0 - smoothstep(0.07, 0.088, r);
    float m = max(max(line, dotc), ring);
    col = mix(col, cPattern, m); rough = mix(rough, 0.5, m); h += m * 0.012;
  } else if (uPattern > 1.5) {                     // полоски-драззл
    float lines = sin((p.x * 0.6 + p.z) * 13.0 + n1 * 2.0);
    float m = smoothstep(0.86, 0.97, lines) * czAA(p, 13.0);
    col = mix(col, cPattern, m); rough = mix(rough, 0.25, m); h += m * 0.006;
  }
#elif CAKE_ZONE == 1
  if (uSideStyle < 0.5) {           // следы пергамента (баскский)
    float s1 = czFbm(vec3(p.x * 1.7, p.y * 2.4, p.z * 1.7));
    float s2 = czFbm(vec3(p.x * 3.6, p.y * 0.9, p.z * 3.6) + 4.0);
    float fold = (1.0 - smoothstep(0.0, 0.05, abs(s2))) * 0.4;
    float patchM = smoothstep(0.02, 0.32, s1 + (ny - 0.45) * 0.45);
    float topB = smoothstep(0.8, 1.0, ny);
    float botB = (1.0 - smoothstep(0.0, 0.1, ny)) * 0.45;
    float m = clamp(patchM * (0.5 + 0.35 * smoothstep(-0.3, 0.4, s2)) + fold * 0.3 * (0.4 + patchM) + topB * 0.85 + botB, 0.0, 1.0);
    col = mix(cSide, cSide2, m) * (1.0 - fold * 0.06);
    rough = mix(0.6, 0.45, m);
    h = s1 * 0.008 + s2 * 0.007 - fold * 0.002;
  } else if (uSideStyle < 1.5) {    // гладкое покрытие
    col = mix(cSide, cSide2, smoothstep(0.1, 0.8, n1) * 0.35) * (0.97 + 0.04 * n2);
    rough = uGloss + 0.1; h = n2 * 0.0015;
  } else if (uSideStyle < 2.5) {    // «голый» торт — видно слои
    col = czLayers(p); rough = 0.7; h = n2 * 0.003;
  } else {                          // обсыпка крошкой
    float hh; col = czCrumbs(p, mix(cSide, cSide2, smoothstep(-0.2, 0.6, n1)), hh); h = hh; rough = 0.92;
  }
  if (uCrustH > 0.0) {
    float cb = 1.0 - smoothstep(uCrustH - 0.012, uCrustH + 0.004, p.y + n2 * 0.012);
    float hh; vec3 cc = czCrumbs(p, cCrust, hh);
    col = mix(col, cc, cb); rough = mix(rough, 0.9, cb); h = mix(h, hh, cb);
  }
#elif CAKE_ZONE == 2
  rough = 0.72;
  col = czInner(p, r, rough, h);
#else
  col = uCrustH > 0.0 ? cCrust * 0.85 : cSide * 0.8; rough = 0.9;
#endif
}

vec3 czPerturb(vec3 surf_pos, vec3 surf_norm, float hgt, float faceDir){
  vec3 sx = dFdx(surf_pos);
  vec3 sy = dFdy(surf_pos);
  vec3 R1 = cross(sy, surf_norm);
  vec3 R2 = cross(surf_norm, sx);
  float det = dot(sx, R1) * faceDir;
  vec3 grad = sign(det) * (dFdx(hgt) * R1 + dFdy(hgt) * R2);
  return normalize(abs(det) * surf_norm - grad);
}
`;

/* ------------------------------------------------------------------ */
/*  Материал торта                                                     */
/* ------------------------------------------------------------------ */

const STYLE = { burnt: 0, cocoa: 1, glaze: 2, crumbs: 3, cream: 4 };
const SIDE = { basque: 0, smooth: 1, layers: 2, crumbs: 3 };
const PATTERN = { none: 0, flower: 1, drizzle: 2 };

function makeUniforms(P) {
  const c = (hex) => ({ value: new THREE.Color(hex) });
  const f = (v) => ({ value: v });
  return {
    cTop: c(P.top), cTop2: c(P.top2 ?? P.top),
    cSide: c(P.side), cSide2: c(P.side2 ?? P.side),
    cInner: c(P.inner), cInner2: c(P.inner2 ?? P.inner),
    cCrust: c(P.crust ?? 0xc58f50), cSpeck: c(P.speck ?? 0x3a2416),
    cSkin: c(P.skin ?? P.side2 ?? P.side), cBand: c(P.band ?? P.inner),
    cPattern: c(P.pattern ?? 0xf6efe3),
    uTopStyle: f(STYLE[P.topStyle] ?? 0), uSideStyle: f(SIDE[P.sideStyle] ?? 1),
    uLayers: f(P.layers ?? 0), uLayerMix: f(P.layerMix ?? 0.45),
    uCrustH: f(P.crustH ?? 0), uSeeds: f(P.seeds ?? 0), uSwirl: f(P.swirl ?? 0),
    uH: f(P.H), uR: f(P.R), uSkin: f(P.skinW ?? 0), uCoat: f(P.coat ?? 0),
    uPattern: f(PATTERN[P.patternType] ?? 0), uBand: f(P.bandH ?? 0),
    uSink: f(P.sink ?? 0), uGloss: f(P.gloss ?? 0.3), uEdge: f(P.edge),
    uBumpScale: f(1),
  };
}

function cakeMaterial(uniforms, zone) {
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.6, metalness: 0,
    side: zone === 2 ? THREE.DoubleSide : THREE.FrontSide,
  });
  mat.defines = { CAKE_ZONE: zone };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vCakePos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvCakePos = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + GLSL_NOISE + GLSL_SHADE)
      .replace('#include <color_fragment>',
        '#include <color_fragment>\nvec3 czCol; float czRough; float czH;\ncakeShade(vCakePos, czCol, czRough, czH);\ndiffuseColor.rgb = czCol;')
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = czRough;')
      .replace('#include <normal_fragment_maps>',
        '#include <normal_fragment_maps>\nnormal = czPerturb(-vViewPosition, normal, czH * uBumpScale, faceDirection);');
  };
  mat.customProgramCacheKey = () => 'qz-cake-1';
  return mat;
}

/* ------------------------------------------------------------------ */
/*  Профиль (форма торта)                                              */
/* ------------------------------------------------------------------ */

function dedupe(pts) {
  const out = [];
  for (const p of pts) {
    const l = out[out.length - 1];
    if (!l || Math.hypot(l.x - p.x, l.y - p.y) > 1e-5) out.push(p);
  }
  return out;
}

function makeProfile(P) {
  const { R, H } = P;
  const e = P.edge, b = P.bevel, s = P.sink ?? 0, pf = P.puff ?? 0, bulge = P.bulge ?? 0;
  const topY = (r) => {
    const u = Math.min(1, r / (R - e));
    return H - s * (1 - u * u) + pf * Math.pow(u, 8);
  };
  const bottom = [new V2(0, 0), new V2((R - b) * 0.5, 0), new V2(R - b, 0)];
  const side = [];
  for (let i = 0; i <= 4; i++) {
    const a = -Math.PI / 2 + (i / 4) * (Math.PI / 2);
    side.push(new V2(R - b + b * Math.cos(a), b + b * Math.sin(a)));
  }
  const n = 10;
  for (let i = 1; i <= n; i++) {
    const y = b + (H - e - b) * (i / n);
    side.push(new V2(R + bulge * Math.sin(Math.PI * i / n), y));
  }
  const top = [];
  for (let i = 0; i <= 8; i++) {
    const a = (i / 8) * (Math.PI / 2);
    top.push(new V2(R - e + e * Math.cos(a), H - e + (e + pf) * Math.sin(a)));
  }
  const m = 22;
  for (let i = 1; i <= m; i++) {
    const r = (R - e) * (1 - i / m);
    top.push(new V2(r, topY(r)));
  }
  const outline = dedupe([...bottom, ...side, ...top]);
  return { bottom, side, top, outline, topY };
}

/* ------------------------------------------------------------------ */
/*  Топпинги                                                           */
/* ------------------------------------------------------------------ */

function colorize(geo, hex) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const c = new THREE.Color(hex);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  if (g.attributes.uv1) g.deleteAttribute('uv1');
  return g;
}

function merge(geos) {
  let n = 0;
  for (const g of geos) n += g.attributes.position.count;
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), col = new Float32Array(n * 3);
  let o = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, o * 3);
    nor.set(g.attributes.normal.array, o * 3);
    col.set(g.attributes.color.array, o * 3);
    o += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return out;
}

function roundedRect(w, h, r) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -h / 2);
  s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return s;
}

function rosetteGeo() {
  const pts = [[0, 0], [0.075, 0], [0.082, 0.02], [0.074, 0.045], [0.05, 0.072], [0.026, 0.097], [0.008, 0.112], [0, 0.116]]
    .map(([x, y]) => new V2(x, y));
  const g = new THREE.LatheGeometry(pts, 40);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const r = Math.hypot(x, z);
    const a = Math.atan2(z, x) + y * 7;
    const k = 1 + 0.16 * Math.cos(8 * Math.atan2(z, x) + y * 30);
    p.setXYZ(i, Math.cos(a) * r * k, y, Math.sin(a) * r * k);
  }
  g.computeVertexNormals();
  return colorize(g, 0xffffff);
}

function heartGeo() {
  const s = new THREE.Shape();
  s.moveTo(0, -0.012);
  s.bezierCurveTo(0.004, -0.006, 0.016, 0.0, 0.016, 0.008);
  s.bezierCurveTo(0.016, 0.016, 0.006, 0.018, 0, 0.011);
  s.bezierCurveTo(-0.006, 0.018, -0.016, 0.016, -0.016, 0.008);
  s.bezierCurveTo(-0.016, 0.0, -0.004, -0.006, 0, -0.012);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.006, bevelEnabled: false, curveSegments: 6 });
  g.center();
  return colorize(g, 0xffffff);
}

function goldLeafGeo() {
  const g = new THREE.PlaneGeometry(0.06, 0.045, 4, 3);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) p.setZ(i, (Math.sin(i * 12.9898) * 43758.5453 % 1) * 0.008);
  g.computeVertexNormals();
  return colorize(g, 0xffffff);
}

const GEO_BUILDERS = {
  oreo: () => merge([
    colorize(new THREE.CylinderGeometry(0.15, 0.15, 0.02, 32).translate(0, 0.018, 0), 0x1d1513),
    colorize(new THREE.CylinderGeometry(0.138, 0.138, 0.017, 32), 0xf1ece2),
    colorize(new THREE.CylinderGeometry(0.15, 0.15, 0.02, 32).translate(0, -0.018, 0), 0x1d1513),
  ]),
  lotus: () => {
    const g = new THREE.ExtrudeGeometry(roundedRect(0.28, 0.18, 0.035),
      { depth: 0.022, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 6 });
    g.center(); g.rotateX(Math.PI / 2);
    return colorize(g, 0xb4672a);
  },
  strawberry: () => {
    const pts = [[0, 0], [0.05, 0.006], [0.074, 0.03], [0.07, 0.068], [0.046, 0.108], [0.014, 0.134], [0, 0.14]].map(([x, y]) => new V2(x, y));
    return merge([
      colorize(new THREE.LatheGeometry(pts, 20), 0xc0122a),
      colorize(new THREE.ConeGeometry(0.066, 0.022, 7).rotateX(Math.PI).translate(0, 0.004, 0), 0x3f7d2a),
    ]);
  },
  coconut: () => colorize(new THREE.BoxGeometry(0.036, 0.0045, 0.018), 0xffffff),
  chunk: () => colorize(new THREE.IcosahedronGeometry(0.034, 0), 0xffffff),
  crumb: () => colorize(new THREE.IcosahedronGeometry(0.018, 0), 0xffffff),
  ball: () => colorize(new THREE.SphereGeometry(0.032, 14, 10), 0xffffff),
  peanut: () => colorize(new THREE.SphereGeometry(0.022, 10, 7).scale(1.5, 1, 1), 0xffffff),
  seed: () => colorize(new THREE.SphereGeometry(0.0145, 7, 5).scale(1, 0.8, 1), 0xffffff),
  pistachio: () => colorize(new THREE.IcosahedronGeometry(0.022, 0), 0xffffff),
  hazelnut: () => colorize(new THREE.SphereGeometry(0.047, 14, 10).scale(1, 1.1, 1), 0xffffff),
  honeycomb: () => colorize(new THREE.CylinderGeometry(0.07, 0.07, 0.032, 6), 0xffffff),
  cube: () => colorize(new THREE.BoxGeometry(0.12, 0.1, 0.12), 0xffffff),
  flake: () => colorize(new THREE.BoxGeometry(0.05, 0.005, 0.028), 0xffffff),
  bean: () => colorize(new THREE.SphereGeometry(0.026, 12, 8).scale(1, 0.62, 0.74), 0xffffff),
  strand: () => colorize(new THREE.CylinderGeometry(0.0038, 0.0038, 0.09, 4), 0xffffff),
  rosette: rosetteGeo,
  heart: heartGeo,
  goldleaf: goldLeafGeo,
  bar: () => merge([      // «Марс/Сникерс»: нуга + карамель + шоколад
    colorize(new THREE.BoxGeometry(0.24, 0.036, 0.09).translate(0, 0.018, 0), 0xffffff),
    colorize(new THREE.BoxGeometry(0.24, 0.022, 0.09).translate(0, 0.047, 0), 0xc0782b),
    colorize(new THREE.BoxGeometry(0.25, 0.022, 0.096).translate(0, 0.069, 0), 0x3a2014),
  ]).translate(0, -0.04, 0),
  bueno: () => {
    const parts = [colorize(new THREE.BoxGeometry(0.3, 0.036, 0.085), 0xe3b878)];
    for (const x of [-0.105, -0.035, 0.035, 0.105])
      parts.push(colorize(new THREE.SphereGeometry(0.044, 14, 8).scale(0.85, 0.55, 0.95).translate(x, 0.018, 0), 0xe8c189));
    for (const z of [-0.026, 0, 0.026])
      parts.push(colorize(new THREE.BoxGeometry(0.29, 0.007, 0.008).translate(0, 0.043, z), 0x3d2416));
    return merge(parts);
  },
};

const MAT_PROPS = {
  default: { roughness: 0.55 },
  ball: { roughness: 0.25 },
  strawberry: { roughness: 0.32 },
  honeycomb: { roughness: 0.18 },
  goldleaf: { roughness: 0.28, metalness: 1, side: THREE.DoubleSide },
  rosette: { roughness: 0.6 },
  coconut: { roughness: 0.8 },
  crumb: { roughness: 0.9 },
  cube: { roughness: 0.85 },
  hazelnut: { roughness: 0.45 },
};

const geoCache = new Map();
const matCache = new Map();
function getGeo(t) {
  if (!geoCache.has(t)) geoCache.set(t, GEO_BUILDERS[t]());
  return geoCache.get(t);
}
function getMat(t) {
  if (!matCache.has(t)) {
    const props = MAT_PROPS[t] || MAT_PROPS.default;
    matCache.set(t, new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0, ...props }));
  }
  return matCache.get(t);
}

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function inRange(a, start, len, margin) {
  const d = (((a - start) % TAU) + TAU) % TAU;
  return d >= margin && d <= len - margin;
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _qa = new THREE.Quaternion(),
  _p = new THREE.Vector3(), _s = new THREE.Vector3(), _e = new THREE.Euler(), _c = new THREE.Color(),
  AX = new THREE.Vector3(1, 0, 0), AY = new THREE.Vector3(0, 1, 0);

function placeToppings(group, P, prof, spec, phiStart, phiLen, rng) {
  const items = [];
  const R = P.R;
  const size = spec.size ?? 0.05;
  if (spec.ring) {
    for (let k = 0; k < spec.ring; k++) {
      const a = (spec.off ?? 0) + k * TAU / spec.ring;
      const r = spec.r * R;
      if (inRange(a, phiStart, phiLen, size / r)) items.push({ a, r });
    }
  } else if (spec.at) {
    for (const [a, rf] of spec.at) {
      const r = rf * R;
      if (inRange(a, phiStart, phiLen, size / Math.max(r, 0.15))) items.push({ a, r });
    }
  } else {
    const count = Math.round(spec.scatter * phiLen / TAU);
    const r0 = spec.rMin ?? 0, r1 = spec.rMax ?? 0.92;
    for (let i = 0; i < count; i++) {
      const r = R * Math.sqrt(r0 * r0 + rng() * (r1 * r1 - r0 * r0));
      const m = size / Math.max(r, 0.06);
      if (phiLen - 2 * m <= 0) continue;
      items.push({ a: phiStart + m + rng() * (phiLen - 2 * m), r });
    }
  }
  if (!items.length) return;

  const mesh = new THREE.InstancedMesh(getGeo(spec.t), getMat(spec.t), items.length);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  const colors = spec.colors ?? [0xffffff];
  const [s0, s1] = spec.scale ?? [1, 1];
  items.forEach((it, i) => {
    const y = prof.topY(Math.min(it.r, R - P.edge)) + (spec.lift ?? 0);
    _p.set(Math.sin(it.a) * it.r, y, Math.cos(it.a) * it.r);
    const mode = spec.mode ?? 'random';
    if (mode === 'stand') {            // стоит ребром, лицом наружу
      _q.setFromAxisAngle(AY, it.a);
      _qa.setFromAxisAngle(AX, Math.PI / 2 - (spec.tilt ?? 0.35));
      _q.multiply(_qa);
    } else if (mode === 'upright') {   // стоит вертикально, лёгкий наклон
      _e.set((rng() - 0.5) * 0.35, rng() * TAU, (rng() - 0.5) * 0.35);
      _q.setFromEuler(_e);
    } else if (mode === 'lie') {       // лежит, повернут по касательной
      _e.set((rng() - 0.5) * 0.2, it.a + (spec.yaw ?? Math.PI / 2) + (rng() - 0.5) * 0.4, (spec.roll ?? 0) + (rng() - 0.5) * 0.2);
      _q.setFromEuler(_e);
    } else {
      _e.set(rng() * TAU, rng() * TAU, rng() * TAU);
      _q.setFromEuler(_e);
    }
    const sc = s0 + (s1 - s0) * rng();
    _s.set(sc, sc, sc);
    _m.compose(_p, _q, _s);
    mesh.setMatrixAt(i, _m);
    mesh.setColorAt(i, _c.set(colors[Math.floor(rng() * colors.length)]));
  });
  group.add(mesh);
}

function addDrips(group, P, spec, phiStart, phiLen, rng) {
  const R = P.R, H = P.H;
  const mat = new THREE.MeshStandardMaterial({ color: spec.color, roughness: spec.rough ?? 0.22 });
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(R + 0.011, R + 0.011, 0.075, Math.max(6, Math.ceil(96 * phiLen / TAU)), 1, true, phiStart, phiLen),
    mat);
  band.position.y = H - 0.034;
  band.castShadow = true;
  group.add(band);
  const n = spec.count ?? 18;
  const rr = mulberry32(spec.seed ?? 7);
  for (let k = 0; k < n; k++) {
    const a = k * TAU / n + (rr() - 0.5) * 0.18;
    const len = 0.04 + rr() * (spec.len ?? 0.28);
    if (!inRange(a, phiStart, phiLen, 0.04)) continue;
    const g = new THREE.CapsuleGeometry(0.026, len, 4, 10);
    const m = new THREE.Mesh(g, mat);
    m.position.set(Math.sin(a) * (R + 0.006), H - 0.05 - len / 2, Math.cos(a) * (R + 0.006));
    m.castShadow = true;
    group.add(m);
  }
}

/* ------------------------------------------------------------------ */
/*  Сборка                                                             */
/* ------------------------------------------------------------------ */

function buildWedge(P, prof, mats, phiStart, phiLen, seed) {
  const g = new THREE.Group();
  const seg = Math.max(3, Math.ceil((P.segments ?? 96) * phiLen / TAU));
  const add = (pts, mat) => {
    const m = new THREE.Mesh(new THREE.LatheGeometry(pts, seg, phiStart, phiLen), mat);
    m.castShadow = true; m.receiveShadow = true;
    g.add(m);
  };
  add(prof.bottom, mats[3]);
  add(prof.side, mats[1]);
  add(prof.top, mats[0]);
  const shapeGeo = new THREE.ShapeGeometry(new THREE.Shape(prof.outline));
  for (const phi of [phiStart, phiStart + phiLen]) {
    const geo = shapeGeo.clone();
    geo.rotateY(phi - Math.PI / 2);
    const m = new THREE.Mesh(geo, mats[2]);
    m.castShadow = true; m.receiveShadow = true;
    g.add(m);
  }
  const rng = mulberry32(seed);
  for (const spec of P.toppings ?? []) placeToppings(g, P, prof, spec, phiStart, phiLen, rng);
  if (P.drips) addDrips(g, P, P.drips, phiStart, phiLen, rng);
  return g;
}

function prepParams(base) {
  const shape = SHAPES[base.shape ?? 'classic'];
  return { ...shape, ...base };
}

function makeMats(P) {
  const u = makeUniforms(P);
  return [0, 1, 2, 3].map((z) => cakeMaterial(u, z));
}

let _shadowTex = null;
function shadowTexture() {
  if (_shadowTex) return _shadowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(40,22,10,0.55)');
  g.addColorStop(0.5, 'rgba(40,22,10,0.3)');
  g.addColorStop(0.75, 'rgba(40,22,10,0.09)');
  g.addColorStop(1, 'rgba(40,22,10,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 256);
  _shadowTex = new THREE.CanvasTexture(c);
  _shadowTex.colorSpace = THREE.SRGBColorSpace;
  return _shadowTex;
}

const boardMat = new THREE.MeshStandardMaterial({ color: 0xe8c47a, metalness: 0.85, roughness: 0.24, envMapIntensity: 1.9 });

function addBoard(group, R) {
  const board = new THREE.Mesh(new THREE.CylinderGeometry(R * 1.17, R * 1.17, 0.035, 96), boardMat);
  board.position.y = -0.0185;
  board.receiveShadow = true;
  group.add(board);
  const sh = new THREE.Mesh(
    new THREE.PlaneGeometry(R * 2.75, R * 2.75),
    new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false, toneMapped: false }));
  sh.rotation.x = -Math.PI / 2;
  sh.position.y = -0.04;
  sh.renderOrder = -1;
  group.add(sh);
}

/**
 * Собирает торт. Возвращает { group, slice, setSlice(d, lift, tilt) }.
 * Кусочек (slice) — 1/8 торта, его можно выдвигать.
 */
export function buildCake(def, opts = {}) {
  const group = new THREE.Group();
  const root = new THREE.Group();
  group.add(root);
  let slice, sliceDir;
  let R;

  if (def.mix) {
    // микс: 8 кусочков разных вкусов
    const n = def.mix.length;
    const W = TAU / n;
    const wedges = [];
    def.mix.forEach((sub, i) => {
      const P = prepParams({ ...sub, segments: opts.segments ?? sub.segments });
      R = P.R;
      const prof = makeProfile(P);
      const w = new THREE.Group();
      const start = i * W;
      w.add(buildWedge(P, prof, makeMats(P), start, W, 11 + i * 17));
      const mid = start + W / 2;
      w.userData.dir = new THREE.Vector3(Math.sin(mid), 0, Math.cos(mid));
      w.position.copy(w.userData.dir).multiplyScalar(0.035);
      root.add(w);
      wedges.push(w);
    });
    slice = wedges[0];
    sliceDir = slice.userData.dir;
  } else {
    const P = prepParams({ ...def, segments: opts.segments ?? def.segments });
    R = P.R;
    const prof = makeProfile(P);
    const mats = makeMats(P);
    const W = TAU / 8;
    const gap = 0; // кусочек смотрит на +Z
    root.add(buildWedge(P, prof, mats, gap + W / 2, TAU - W, def.seed ?? 3));
    slice = new THREE.Group();
    slice.add(buildWedge(P, prof, mats, gap - W / 2, W, (def.seed ?? 3) + 101));
    root.add(slice);
    sliceDir = new THREE.Vector3(Math.sin(gap), 0, Math.cos(gap));
  }
  if (opts.board !== false) addBoard(group, R);

  const basePos = slice.position.clone();
  return {
    group,
    slice,
    R,
    setSlice(d = 0, lift = 0, tilt = 0) {
      slice.position.copy(basePos).addScaledVector(sliceDir, d);
      slice.position.y = basePos.y + lift;
      slice.rotation.set(0, 0, 0);
      if (tilt) slice.rotateOnAxis(new THREE.Vector3(sliceDir.z, 0, -sliceDir.x), tilt);
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Формы и рецепты                                                    */
/* ------------------------------------------------------------------ */

const SHAPES = {
  basque: { R: 1.2, H: 0.74, edge: 0.09, bevel: 0.05, sink: 0.05, puff: 0.035, bulge: 0.012, segments: 96 },
  classic: { R: 1.2, H: 0.66, edge: 0.035, bevel: 0.025, sink: 0, puff: 0, bulge: 0, segments: 96 },
  torte: { R: 1.12, H: 0.92, edge: 0.04, bevel: 0.03, sink: 0, puff: 0, bulge: 0, segments: 96 },
};

const basque = (o) => ({
  shape: 'basque', topStyle: 'burnt', sideStyle: 'basque',
  top: 0x9a6232, top2: 0x2c1507, side: 0xf2e0b4, side2: 0xae7032,
  inner: 0xf5e6bf, skinW: 0.035, skin: 0xc68d4c, coat: 0.022, ...o,
});

const choc = { top: 0x3b2116, top2: 0x5a3422, gloss: 0.16 };

export const CAKES = {
  hero: basque({ seeds: 0.4, speck: 0xd2a35a, seed: 5,
    toppings: [{ t: 'seed', scatter: 90, rMin: 0.05, rMax: 0.82, colors: [0xc99541, 0xb9843a, 0xd9aa5c], size: 0.02, lift: 0.006 }] }),

  kazakh: basque({ seed: 1 }),
  spanish: basque({ top: 0x8a5426, top2: 0x1f0d04, side2: 0x8a4c1c, skin: 0xa86b30, seed: 2 }),
  tary: basque({ top: 0xb27a3c, top2: 0x4a240c, seeds: 0.5, speck: 0xd09a48, seed: 9,
    toppings: [{ t: 'seed', scatter: 380, rMin: 0.0, rMax: 0.86, colors: [0xe0ab48, 0xd39a35, 0xeec36a, 0xb98030], size: 0.02, lift: 0.006 }] }),

  oreo: {
    shape: 'classic', topStyle: 'cream', sideStyle: 'smooth',
    top: 0xf1ece3, top2: 0xe2dbcf, side: 0xeee8de, inner: 0xf3eee6, crust: 0x2a1e1a, crustH: 0.13,
    seeds: 0.75, speck: 0x2a1d19, gloss: 0.5,
    toppings: [
      { t: 'oreo', ring: 10, r: 0.8, mode: 'stand', tilt: 0.45, lift: 0.07, size: 0.15 },
      { t: 'crumb', scatter: 260, rMin: 0.0, rMax: 0.65, colors: [0x231915, 0x2e211c], scale: [0.6, 1.4], size: 0.02 },
    ],
  },
  lotus: {
    shape: 'classic', topStyle: 'glaze', sideStyle: 'smooth',
    top: 0xb26a2a, top2: 0xd9a05a, swirl: 0.9, gloss: 0.2, side: 0xf0dfbf, side2: 0xe6cfa6,
    inner: 0xf2e2c4, crust: 0xb8763a, crustH: 0.12, seeds: 0.5, speck: 0xa86328, coat: 0.03,
    toppings: [
      { t: 'lotus', ring: 9, r: 0.8, mode: 'stand', tilt: 0.42, lift: 0.1, size: 0.2, scale: [1.35, 1.35] },
      { t: 'crumb', scatter: 160, rMin: 0.0, rMax: 0.55, colors: [0xb4672a, 0xc98a45], scale: [0.7, 1.5], size: 0.02 },
    ],
  },
  coconut: {
    shape: 'classic', topStyle: 'cream', sideStyle: 'smooth',
    top: 0xf7f2ea, top2: 0xeee5d8, side: 0xf3d3d3, side2: 0xedc0c2, inner: 0xf6efe6,
    crust: 0xe2c693, crustH: 0.1, band: 0xe9909d, bandH: 0.12, seeds: 0.35, speck: 0xd2465b, gloss: 0.5,
    toppings: [
      { t: 'coconut', scatter: 650, rMin: 0.0, rMax: 0.95, colors: [0xffffff, 0xf6f0e6], size: 0.02, lift: 0.004 },
      { t: 'strawberry', ring: 8, r: 0.74, mode: 'upright', size: 0.11, off: 0.2, scale: [1.25, 1.4] },
      { t: 'strawberry', at: [[0.0, 0.0], [2.2, 0.3], [4.1, 0.32]], mode: 'upright', size: 0.11, scale: [1.3, 1.4] },
    ],
  },
  honeyCheese: {
    shape: 'classic', topStyle: 'glaze', sideStyle: 'smooth',
    top: 0xc47f16, top2: 0xe3a536, swirl: 0.7, gloss: 0.1, side: 0xf3e2bf, side2: 0xead2a2,
    inner: 0xf3e0b5, crust: 0xc28a49, crustH: 0.11, coat: 0.035,
    drips: { color: 0xc98317, count: 20, len: 0.24, rough: 0.12, seed: 4 },
    toppings: [
      { t: 'honeycomb', at: [[0.4, 0.2], [1.3, 0.55], [2.5, 0.35], [3.6, 0.6], [4.6, 0.25], [5.5, 0.6], [5.9, 0.15]], mode: 'lie', size: 0.08, lift: 0.01, colors: [0xe3a42a, 0xd8961f] },
    ],
  },
  tiramisu: {
    shape: 'classic', topStyle: 'cocoa', sideStyle: 'smooth',
    top: 0x5a3824, top2: 0x6e472e, side: 0xf1e5cd, side2: 0xe7d6b6, inner: 0xf3e8d2, inner2: 0x8a5a36,
    layers: 2, layerMix: 0.28, crust: 0xc28f58, crustH: 0.1, coat: 0.02, gloss: 0.55,
    toppings: [
      { t: 'rosette', ring: 10, r: 0.82, mode: 'upright', size: 0.09, colors: [0xf6efe2] },
      { t: 'bean', scatter: 30, rMin: 0.05, rMax: 0.6, colors: [0x3a2012, 0x4a2a17], size: 0.03, mode: 'lie' },
    ],
  },
  dubai: {
    shape: 'classic', topStyle: 'glaze', sideStyle: 'smooth', ...choc,
    side: 0x3b2116, side2: 0x4b2b1c, inner: 0xf0e2c6, band: 0x95b04f, bandH: 0.16, coat: 0.04,
    crust: 0x2c1a12, crustH: 0.1, skinW: 0.03, skin: 0x3b2116,
    toppings: [
      { t: 'strand', scatter: 420, rMin: 0.0, rMax: 0.62, colors: [0xc9a24a, 0xb58c3a, 0x9fae4a], size: 0.04, lift: 0.01 },
      { t: 'pistachio', scatter: 200, rMin: 0.0, rMax: 0.9, colors: [0x8fb04a, 0x6f9a3a, 0xa9c060], size: 0.02 },
      { t: 'goldleaf', scatter: 10, rMin: 0.1, rMax: 0.7, size: 0.04, lift: 0.02, colors: [0xffd47a] },
    ],
  },
  mars: {
    shape: 'classic', topStyle: 'glaze', sideStyle: 'smooth', ...choc, patternType: 'drizzle', pattern: 0xc98a3a,
    side: 0x3b2116, side2: 0x4b2b1c, inner: 0xeedfc5, band: 0xc17f35, bandH: 0.07, coat: 0.04,
    crust: 0x2c1a12, crustH: 0.1, skinW: 0.03, skin: 0x3b2116,
    drips: { color: 0xc27c2c, count: 16, len: 0.22, rough: 0.18, seed: 12 },
    toppings: [
      { t: 'bar', ring: 7, r: 0.6, mode: 'lie', yaw: 0, size: 0.14, lift: 0.04, off: 0.3, colors: [0xd1a774] },
      { t: 'bar', at: [[0, 0]], mode: 'lie', size: 0.12, lift: 0.04, colors: [0xd1a774] },
    ],
  },
  snickers: {
    shape: 'classic', topStyle: 'glaze', sideStyle: 'smooth', top: 0xb9732c, top2: 0x4a2a1a, swirl: 0.8, gloss: 0.18,
    side: 0x4a2a1a, side2: 0x5a3422, inner: 0xe8d2a8, seeds: 0.5, speck: 0xb78a52, coat: 0.04,
    crust: 0x2c1a12, crustH: 0.1, skinW: 0.03, skin: 0x4a2a1a,
    drips: { color: 0x4a2a1a, count: 18, len: 0.26, rough: 0.2, seed: 21 },
    toppings: [
      { t: 'bar', ring: 6, r: 0.6, mode: 'lie', yaw: 0, size: 0.14, lift: 0.04, colors: [0xdcc29a] },
      { t: 'peanut', scatter: 120, rMin: 0.0, rMax: 0.88, colors: [0xc8975f, 0xb9844d, 0xd8aa72], size: 0.03, mode: 'random' },
    ],
  },
  brownie: {
    shape: 'classic', topStyle: 'glaze', sideStyle: 'smooth', top: 0x2b170f, top2: 0x3f2418, gloss: 0.2, swirl: 0.3,
    side: 0xf1e3c7, side2: 0xe6d2ad, inner: 0xf1e3c7, crust: 0x3b2418, crustH: 0.24, coat: 0.05, seeds: 0.4, speck: 0x3b2418,
    drips: { color: 0x2b170f, count: 18, len: 0.2, rough: 0.2, seed: 33 },
    toppings: [
      { t: 'cube', ring: 8, r: 0.66, mode: 'upright', size: 0.1, lift: 0.04, colors: [0x3a2216, 0x432819] },
      { t: 'ball', scatter: 40, rMin: 0.0, rMax: 0.45, colors: [0xf3ead8, 0x6b3f22, 0xc9893f], size: 0.035, lift: 0.02 },
    ],
  },
  honeyCake: {
    shape: 'torte', topStyle: 'crumbs', sideStyle: 'crumbs', top: 0xb2702f, top2: 0xc98b45, side: 0xb2702f, side2: 0xc4843c,
    inner: 0xf3e3c2, inner2: 0xa45e22, layers: 8, layerMix: 0.5, patternType: 'flower', pattern: 0xf6eee0,
    coat: 0.03, skinW: 0.03, skin: 0xb2702f,
  },
  napoleon: {
    shape: 'torte', topStyle: 'crumbs', sideStyle: 'crumbs', top: 0xe8c58a, top2: 0xf3dcae, side: 0xe3bd7c, side2: 0xf0d6a2,
    inner: 0xf7e9c6, inner2: 0xd9a65c, layers: 14, layerMix: 0.42, coat: 0.03, skinW: 0.025, skin: 0xe3bd7c, H: 0.98,
  },
  kinder: {
    shape: 'torte', topStyle: 'glaze', sideStyle: 'smooth', top: 0x6b4026, top2: 0x7d5032, gloss: 0.2,
    patternType: 'drizzle', pattern: 0xf4ece0, side: 0x6b4026, side2: 0x7d5032,
    inner: 0xf1e6d4, inner2: 0x4a2c1c, layers: 4, layerMix: 0.5, coat: 0.03, skinW: 0.03, skin: 0x6b4026,
    drips: { color: 0xf1e7d6, count: 18, len: 0.22, rough: 0.3, seed: 8 },
    toppings: [
      { t: 'bueno', ring: 8, r: 0.72, mode: 'stand', tilt: 0.25, lift: 0.1, size: 0.16 },
      { t: 'hazelnut', at: [[0, 0], [1.5, 0.3], [3.1, 0.32], [4.7, 0.3]], mode: 'upright', size: 0.05, lift: 0.03, colors: [0x9b6233] },
    ],
  },
  nutella: {
    shape: 'torte', topStyle: 'glaze', sideStyle: 'smooth', top: 0x52301b, top2: 0x80502c, swirl: 1, gloss: 0.14,
    side: 0x52301b, side2: 0x633b22, inner: 0x8a5a3a, inner2: 0x3a2116, layers: 5, layerMix: 0.5,
    coat: 0.04, skinW: 0.03, skin: 0x52301b,
    drips: { color: 0x52301b, count: 20, len: 0.3, rough: 0.14, seed: 15 },
    toppings: [
      { t: 'hazelnut', ring: 12, r: 0.82, mode: 'upright', size: 0.06, lift: 0.03, colors: [0x9b6233, 0xa86d3a] },
      { t: 'hazelnut', at: [[0, 0], [2.1, 0.25], [4.2, 0.25]], mode: 'upright', size: 0.06, lift: 0.03, colors: [0x9b6233] },
      { t: 'ball', scatter: 30, rMin: 0.1, rMax: 0.6, colors: [0xc98b3f, 0x6b3f22], size: 0.035, lift: 0.02 },
    ],
  },
};

const mixBase = { shape: 'classic', sideStyle: 'smooth', crust: 0xc58f50, crustH: 0.1, H: 0.62 };
CAKES.mix = {
  mix: [
    { ...mixBase, topStyle: 'glaze', ...choc, side: 0x3b2116, inner: 0xead8bb, coat: 0.05, skinW: 0.02, skin: 0x3b2116,
      toppings: [{ t: 'ball', scatter: 40, rMin: 0.3, rMax: 0.9, colors: [0xf3ead8, 0x6b3f22], size: 0.04, lift: 0.02 }] },
    { ...mixBase, topStyle: 'glaze', top: 0x4a2a1a, top2: 0x5a3422, gloss: 0.2, side: 0x4a2a1a, inner: 0xead8bb, coat: 0.05,
      toppings: [{ t: 'flake', scatter: 60, rMin: 0.3, rMax: 0.85, colors: [0xf4eee4], size: 0.03, lift: 0.01 }] },
    { ...basque({}), crustH: 0, H: 0.66, shape: 'classic', sink: 0 },
    { ...mixBase, topStyle: 'cream', top: 0xf6efe1, top2: 0xeee3cf, side: 0xf2ead9, inner: 0xf4ecdc, seeds: 0.2, speck: 0xe0cfae, gloss: 0.5 },
    { ...mixBase, topStyle: 'cream', top: 0xf7f2ea, top2: 0xece2d2, side: 0xf3e9dc, inner: 0xf6efe6,
      toppings: [{ t: 'coconut', scatter: 160, rMin: 0.3, rMax: 0.95, colors: [0xffffff], size: 0.02 }] },
    { ...mixBase, topStyle: 'cocoa', top: 0xd9c2a5, top2: 0x6e472e, side: 0xf1e5cd, inner: 0xf3e8d2, coat: 0.02 },
    { ...mixBase, topStyle: 'cream', top: 0xfbf8f2, top2: 0xf1e9dc, side: 0xf6f0e6, inner: 0xf6efe6,
      toppings: [
        { t: 'rosette', scatter: 14, rMin: 0.35, rMax: 0.9, colors: [0xfffbf4], size: 0.08, mode: 'upright' },
        { t: 'heart', scatter: 40, rMin: 0.3, rMax: 0.9, colors: [0xd7263d], size: 0.02, lift: 0.05 },
      ] },
    { ...mixBase, topStyle: 'crumbs', top: 0xc98b45, top2: 0xe2b06d, side: 0xf2e2c4, inner: 0xf2e2c4 },
  ],
};
