/* ==========================================================================
   Hermes Agent — WebGL scene
   20k morphing particles (sphere → caduceus → neural net → orbits → grid),
   a living noise-displaced core, comet rings, starfield and bloom.
   Classic script + dynamic import(), so the page also works from file://.
   ========================================================================== */
(function () {
  'use strict';

  var H = (window.HERMES = window.HERMES || {});
  var state = (H.state = H.state || { morph: 0, pulse: 0, ready: false });
  // per-section overrides tweened by app.js: x/y offset, core scale, particle brightness
  if (state.sx == null) { state.sx = 2.5; state.sy = 0.35; state.core = 0.85; state.dim = 1; }
  var canvas = document.getElementById('webgl');
  if (!canvas) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.matchMedia('(max-width: 900px)');
  var lowPower = window.matchMedia('(max-width: 820px)').matches || (navigator.hardwareConcurrency || 8) <= 4;

  function fail(err) {
    document.documentElement.classList.add('no-webgl');
    state.ready = true;
    window.dispatchEvent(new Event('hermes:scene-ready'));
    if (err) console.warn('[hermes] WebGL disabled:', err);
  }

  // quick capability check before downloading three.js
  try {
    var probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return fail('no webgl');
  } catch (e) { return fail(e); }

  Promise.all([
    import('three'),
    import('three/addons/postprocessing/EffectComposer.js'),
    import('three/addons/postprocessing/RenderPass.js'),
    import('three/addons/postprocessing/UnrealBloomPass.js'),
    import('three/addons/postprocessing/OutputPass.js')
  ]).then(function (mods) {
    try { init(mods[0], mods[1].EffectComposer, mods[2].RenderPass, mods[3].UnrealBloomPass, mods[4].OutputPass); }
    catch (e) { fail(e); }
  }).catch(fail);

  /* ------------------------------------------------------------------ */
  var NOISE = [
    'vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}',
    'vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}',
    'vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}',
    'vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}',
    'float snoise(vec3 v){',
    ' const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);',
    ' vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);',
    ' vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);',
    ' vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;',
    ' i=mod289(i);',
    ' vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));',
    ' float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;',
    ' vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);',
    ' vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);',
    ' vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);',
    ' vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));',
    ' vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;',
    ' vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);',
    ' vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));',
    ' p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;',
    ' vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;',
    ' return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));',
    '}'
  ].join('\n');

  /* ------------------------------------------------------------------ */
  function init(THREE, EffectComposer, RenderPass, UnrealBloomPass, OutputPass) {
    var W = window.innerWidth, Hh = window.innerHeight;
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
    var dpr = Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, Hh, false);
    renderer.setClearColor(0x020308, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(42, W / Hh, 0.1, 120);
    camera.position.set(0, 0, 9);

    var root = new THREE.Group();
    scene.add(root);

    /* ---------------- particle shapes ---------------- */
    var N = lowPower ? 9000 : 20000;
    var rnd = mulberry32(7);
    var P = [0, 1, 2, 3, 4].map(function () { return new Float32Array(N * 3); });
    var aRand = new Float32Array(N), aSize = new Float32Array(N), aDir = new Float32Array(N * 3);
    var TAU = Math.PI * 2;

    function set(arr, i, x, y, z) { arr[i * 3] = x; arr[i * 3 + 1] = y; arr[i * 3 + 2] = z; }
    function gauss() { return (rnd() + rnd() + rnd() - 1.5) / 1.5; }

    // 0 — core sphere + tilted halo disk
    (function () {
      var shell = Math.floor(N * 0.6), tx = 0.42, tz = -0.22;
      var cx = Math.cos(tx), sx = Math.sin(tx), cz = Math.cos(tz), sz = Math.sin(tz);
      for (var i = 0; i < N; i++) {
        if (i < shell) {
          var y = 1 - (i / (shell - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963229728653;
          var R = 2.15 + gauss() * 0.05;
          set(P[0], i, Math.cos(th) * r * R, y * R, Math.sin(th) * r * R);
        } else {
          var a = rnd() * TAU, rr = 2.9 + Math.pow(rnd(), 1.8) * 1.9;
          var px = Math.cos(a) * rr, py = gauss() * 0.04, pz = Math.sin(a) * rr;
          // tilt around X then Z
          var y1 = py * cx - pz * sx, z1 = py * sx + pz * cx;
          var x2 = px * cz - y1 * sz, y2 = px * sz + y1 * cz;
          set(P[0], i, x2, y2, z1);
        }
      }
    })();

    // 1 — caduceus: staff, two serpents, wings
    (function () {
      var s = 0.82;
      for (var i = 0; i < N; i++) {
        var u = rnd(), x, y, z;
        if (u < 0.1) { // staff
          var t = rnd(), a = rnd() * TAU;
          x = Math.cos(a) * 0.07; z = Math.sin(a) * 0.07; y = -3.3 + t * 6.2;
        } else if (u < 0.14) { // orb on top
          var a2 = rnd() * TAU, b = Math.acos(2 * rnd() - 1), r2 = 0.26;
          x = Math.sin(b) * Math.cos(a2) * r2; y = 3.2 + Math.cos(b) * r2; z = Math.sin(b) * Math.sin(a2) * r2;
        } else if (u < 0.74) { // serpents
          var ph = u < 0.44 ? 0 : Math.PI, t2 = rnd();
          var yy = -3.1 + t2 * 5.3;
          var rad = 0.18 + 0.95 * Math.pow(Math.sin(Math.PI * (0.08 + 0.84 * t2)), 0.9);
          var ang = t2 * TAU * 2.25 + ph;
          var thick = 0.07 + 0.05 * Math.sin(Math.PI * t2);
          x = Math.cos(ang) * rad + gauss() * thick; z = Math.sin(ang) * rad + gauss() * thick; y = yy + gauss() * thick;
          if (t2 > 0.97) { x *= 1.02; y += 0.06; } // heads
        } else { // wings — feathers fanning outwards
          var side = rnd() < 0.5 ? -1 : 1;
          var k = Math.floor(rnd() * 12), su = k / 11;
          var bx = 0.2 + su * 2.5, by = 2.35 + 0.75 * Math.sin(su * 2.4);
          var ang2 = -Math.PI / 2 + 0.25 + su * 1.15;
          var len = 0.45 + su * 1.25 + (k % 2) * 0.12;
          var st = rnd();
          x = side * (bx + Math.cos(ang2) * st * len * 0.6);
          y = by + Math.sin(ang2) * st * len;
          z = gauss() * 0.04 + (1 - st) * 0.02;
          // top arc edge
          if (rnd() < 0.18) { var e = rnd(); x = side * (0.2 + e * 2.6); y = 2.4 + 0.8 * Math.sin(e * 2.4) + gauss() * 0.02; }
        }
        set(P[1], i, x * s, y * s, z * s);
      }
    })();

    // 2 — neural constellation
    (function () {
      var M = 64, nodes = [];
      for (var n = 0; n < M; n++) {
        var a = rnd() * TAU, b = Math.acos(2 * rnd() - 1), r = 1.1 + Math.pow(rnd(), 0.6) * 1.8;
        nodes.push([Math.sin(b) * Math.cos(a) * r * 1.15, Math.cos(b) * r * 0.9, Math.sin(b) * Math.sin(a) * r]);
      }
      var edges = [];
      for (var p = 0; p < M; p++) {
        var d = [];
        for (var q = 0; q < M; q++) if (q !== p) {
          var dx = nodes[p][0] - nodes[q][0], dy = nodes[p][1] - nodes[q][1], dz = nodes[p][2] - nodes[q][2];
          d.push([dx * dx + dy * dy + dz * dz, q]);
        }
        d.sort(function (A, B) { return A[0] - B[0]; });
        for (var e = 0; e < 3; e++) if (p < d[e][1] || e === 0) edges.push([p, d[e][1]]);
      }
      for (var i = 0; i < N; i++) {
        if (rnd() < 0.32) {
          var nd = nodes[Math.floor(rnd() * M)], sp = 0.05 + rnd() * 0.07;
          set(P[2], i, nd[0] + gauss() * sp, nd[1] + gauss() * sp, nd[2] + gauss() * sp);
        } else {
          var ed = edges[Math.floor(rnd() * edges.length)], A = nodes[ed[0]], B = nodes[ed[1]], t = rnd();
          var bow = Math.sin(t * Math.PI) * 0.12;
          set(P[2], i, A[0] + (B[0] - A[0]) * t + gauss() * 0.015, A[1] + (B[1] - A[1]) * t + bow, A[2] + (B[2] - A[2]) * t + gauss() * 0.015);
        }
      }
    })();

    // 3 — seven orbits (seven platforms) around a hub
    (function () {
      var rings = [];
      for (var k = 0; k < 7; k++) rings.push({ r: 1.45 + k * 0.36, ax: (rnd() - 0.5) * 1.3, az: (rnd() - 0.5) * 1.3 });
      for (var i = 0; i < N; i++) {
        if (rnd() < 0.07) {
          var a = rnd() * TAU, b = Math.acos(2 * rnd() - 1), r = 0.55 * Math.cbrt(rnd());
          set(P[3], i, Math.sin(b) * Math.cos(a) * r, Math.cos(b) * r, Math.sin(b) * Math.sin(a) * r);
          continue;
        }
        var R = rings[Math.floor(rnd() * 7)], t = rnd() * TAU;
        var px = Math.cos(t) * R.r, py = gauss() * 0.025, pz = Math.sin(t) * R.r;
        var cx = Math.cos(R.ax), sx = Math.sin(R.ax), cz = Math.cos(R.az), sz = Math.sin(R.az);
        var y1 = py * cx - pz * sx, z1 = py * sx + pz * cx;
        set(P[3], i, px * cz - y1 * sz, px * sz + y1 * cz, z1);
      }
    })();

    // 4 — infrastructure grid (floor + data pillars)
    (function () {
      var step = 0.55, half = 7;
      for (var i = 0; i < N; i++) {
        var u = rnd(), x, y, z;
        if (u < 0.82) {
          var along = rnd() * half * 2 - half, line = (Math.round((rnd() * 2 - 1) * half / step)) * step;
          if (rnd() < 0.5) { x = along; z = line; } else { x = line; z = along; }
          y = -1.9 + 0.28 * Math.sin(x * 0.7) * Math.cos(z * 0.55);
        } else {
          var gx = Math.round((rnd() * 2 - 1) * 5 / step) * step, gz = Math.round((rnd() * 2 - 1) * 4 / step) * step;
          var hgt = 0.4 + Math.abs(Math.sin(gx * 3.1 + gz * 1.7)) * 2.4;
          x = gx; z = gz; y = -1.9 + rnd() * hgt;
        }
        set(P[4], i, x, y, z - 1.2);
      }
    })();

    for (var i = 0; i < N; i++) {
      aRand[i] = rnd();
      aSize[i] = 0.55 + Math.pow(rnd(), 3) * 2.2;
      var a = rnd() * TAU, b = Math.acos(2 * rnd() - 1);
      aDir[i * 3] = Math.sin(b) * Math.cos(a); aDir[i * 3 + 1] = Math.cos(b); aDir[i * 3 + 2] = Math.sin(b) * Math.sin(a);
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(P[0].slice(), 3));
    for (var s = 0; s < 5; s++) geo.setAttribute('aP' + s, new THREE.BufferAttribute(P[s], 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(aRand, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(aSize, 1));
    geo.setAttribute('aDir', new THREE.BufferAttribute(aDir, 3));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 12);

    var pMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 }, uMorph: { value: 0 }, uPixelRatio: { value: dpr }, uSize: { value: lowPower ? 5.2 : 4.6 },
        uMouse: { value: new THREE.Vector3(99, 99, 0) }, uMouseStrength: { value: 0 }, uPulse: { value: 0 }, uDim: { value: 1 }
      },
      vertexShader: [
        'uniform float uTime, uMorph, uPixelRatio, uSize, uMouseStrength, uPulse, uDim;',
        'uniform vec3 uMouse;',
        'attribute vec3 aP0, aP1, aP2, aP3, aP4, aDir;',
        'attribute float aRand, aSize;',
        'varying float vAlpha; varying vec3 vColor;',
        'vec3 shape(float i){',
        '  if(i<0.5) return aP0; if(i<1.5) return aP1; if(i<2.5) return aP2;',
        '  if(i<3.5) return aP3; if(i<4.5) return aP4; return aP0*1.12;',
        '}',
        'void main(){',
        '  float m = clamp(uMorph, 0.0, 5.0);',
        '  float fi = floor(m); float f = m - fi;',
        '  float t = clamp((f - aRand*0.35)/0.65, 0.0, 1.0);',
        '  t = t*t*(3.0-2.0*t);',
        '  vec3 p = mix(shape(fi), shape(min(fi+1.0, 5.0)), t);',
        '  float burst = sin(t*3.14159);',
        '  p += aDir * burst * (0.5 + aRand*1.1);',
        '  p *= 1.0 + uPulse * (0.15 + aRand*0.35);',
        '  float tt = uTime*0.35 + aRand*40.0;',
        '  p += vec3(sin(tt + p.y*1.3), cos(tt*0.9 + p.x*1.1), sin(tt*1.1 + p.z)) * 0.035;',
        '  vec4 world = modelMatrix * vec4(p, 1.0);',
        '  vec2 d = world.xy - uMouse.xy;',
        '  float dist = length(d);',
        '  float push = smoothstep(1.7, 0.0, dist) * uMouseStrength;',
        '  world.xy += normalize(d + 1e-4) * push * 0.6;',
        '  vec4 mv = viewMatrix * world;',
        '  gl_Position = projectionMatrix * mv;',
        '  float size = uSize * aSize * (1.0 + burst*0.8 + uPulse);',
        '  gl_PointSize = size * uPixelRatio * (7.5 / -mv.z);',
        '  float tw = 0.6 + 0.4*sin(uTime*1.7 + aRand*60.0);',
        '  vAlpha = tw * (0.35 + 0.5*aRand) * smoothstep(30.0, 3.0, -mv.z) * uDim;',
        '  vec3 gold = vec3(1.0, 0.76, 0.40); vec3 cyan = vec3(0.38, 0.88, 1.0); vec3 violet = vec3(0.62, 0.52, 1.0);',
        '  float k = fract(aRand*7.13);',
        '  vec3 c = k < 0.52 ? mix(gold, vec3(1.0,0.93,0.8), k*0.9) : (k < 0.86 ? cyan : violet);',
        '  vColor = mix(c, vec3(1.0), clamp(push*0.9 + burst*0.25, 0.0, 1.0));',
        '}'
      ].join('\n'),
      fragmentShader: [
        'varying float vAlpha; varying vec3 vColor;',
        'void main(){',
        '  vec2 uv = gl_PointCoord - 0.5;',
        '  float d = length(uv);',
        '  float a = smoothstep(0.5, 0.0, d);',
        '  a = a*a*(0.6 + 0.4*a);',
        '  float core = smoothstep(0.12, 0.0, d);',
        '  gl_FragColor = vec4(vColor * (a + core*0.8) * vAlpha, 1.0);',
        '}'
      ].join('\n')
    });
    var points = new THREE.Points(geo, pMat);
    root.add(points);

    /* ---------------- living core ---------------- */
    var coreGroup = new THREE.Group();
    root.add(coreGroup);
    var coreMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPulse: { value: 0 } },
      vertexShader: [
        NOISE,
        'uniform float uTime, uPulse;',
        'varying vec3 vN; varying vec3 vV; varying float vD;',
        'void main(){',
        '  float d = snoise(normal*1.5 + vec3(uTime*0.22)) * 0.2 + snoise(normal*4.2 - vec3(uTime*0.35)) * 0.06;',
        '  d += uPulse*0.25;',
        '  vD = d;',
        '  vec3 p = position + normal*d;',
        '  vec4 mv = modelViewMatrix * vec4(p,1.0);',
        '  vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);',
        '  gl_Position = projectionMatrix * mv;',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform float uTime;',
        'varying vec3 vN; varying vec3 vV; varying float vD;',
        'void main(){',
        '  float fr = pow(1.0 - max(dot(vN, vV), 0.0), 2.4);',
        '  vec3 gold = vec3(1.0, 0.74, 0.36); vec3 cyan = vec3(0.35, 0.86, 1.0); vec3 violet = vec3(0.55, 0.45, 1.0);',
        '  float band = 0.5 + 0.5*sin(vD*22.0 + uTime*1.2);',
        '  vec3 iri = mix(mix(gold, cyan, smoothstep(-0.15, 0.2, vD)), violet, band*0.35);',
        '  vec3 base = vec3(0.006, 0.008, 0.02) + iri * 0.025;',
        '  float lines = pow(band, 22.0) * 0.4;',
        '  vec3 col = base + iri * (fr*0.95 + lines*0.45) + gold * pow(fr, 5.0) * 0.35;',
        '  gl_FragColor = vec4(col, 1.0);',
        '}'
      ].join('\n')
    });
    var core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, lowPower ? 24 : 48), coreMat);
    coreGroup.add(core);

    var wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.32, 1)),
      new THREE.LineBasicMaterial({ color: 0xf4c66a, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    coreGroup.add(wire);

    /* ---------------- comet rings ---------------- */
    var rings = new THREE.Group();
    coreGroup.add(rings);
    var ringMats = [];
    [[1.62, 0.9, 0.2, 0.9, 0xffd28a], [1.95, -0.6, 0.5, 0.6, 0x67e8ff], [2.35, 0.25, -0.9, 0.45, 0x9d8cff]].forEach(function (cfg, idx) {
      var seg = 256, pos = new Float32Array(seg * 3), tt = new Float32Array(seg);
      for (var k = 0; k < seg; k++) {
        var a = (k / seg) * TAU; pos[k * 3] = Math.cos(a) * cfg[0]; pos[k * 3 + 1] = 0; pos[k * 3 + 2] = Math.sin(a) * cfg[0]; tt[k] = k / seg;
      }
      var g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('aT', new THREE.BufferAttribute(tt, 1));
      var m = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uSpeed: { value: cfg[3] * (idx % 2 ? -1 : 1) }, uColor: { value: new THREE.Color(cfg[4]) }, uOpacity: { value: 1 } },
        vertexShader: 'attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: 'uniform float uTime, uSpeed, uOpacity; uniform vec3 uColor; varying float vT; void main(){ float h = fract(vT - uTime*uSpeed*0.12); float tail = pow(h, 7.0); gl_FragColor = vec4(uColor*(0.06 + tail*1.6)*uOpacity, 1.0); }'
      });
      ringMats.push(m);
      var line = new THREE.LineLoop(g, m);
      line.rotation.set(cfg[1], 0, cfg[2]);
      rings.add(line);
    });

    /* ---------------- starfield ---------------- */
    var SN = lowPower ? 900 : 1800, sPos = new Float32Array(SN * 3), sR = new Float32Array(SN);
    for (var q = 0; q < SN; q++) {
      var a3 = rnd() * TAU, b3 = Math.acos(2 * rnd() - 1), r3 = 18 + rnd() * 30;
      sPos[q * 3] = Math.sin(b3) * Math.cos(a3) * r3; sPos[q * 3 + 1] = Math.cos(b3) * r3; sPos[q * 3 + 2] = Math.sin(b3) * Math.sin(a3) * r3 - 10;
      sR[q] = rnd();
    }
    var sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    sGeo.setAttribute('aRand', new THREE.BufferAttribute(sR, 1));
    var sMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uPixelRatio: { value: dpr } },
      vertexShader: 'uniform float uTime, uPixelRatio; attribute float aRand; varying float vA; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = (1.0 + aRand*2.2) * uPixelRatio; vA = 0.25 + 0.75*abs(sin(uTime*0.6 + aRand*50.0)); }',
      fragmentShader: 'varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d); gl_FragColor = vec4(vec3(0.75,0.82,1.0)*a*vA*0.8, 1.0); }'
    });
    var stars = new THREE.Points(sGeo, sMat);
    scene.add(stars);

    /* ---------------- post-processing ---------------- */
    var composer = null, bloom = null;
    try {
      composer = new EffectComposer(renderer);
      composer.setPixelRatio(dpr);
      composer.setSize(W, Hh);
      composer.addPass(new RenderPass(scene, camera));
      bloom = new UnrealBloomPass(new THREE.Vector2(W, Hh), lowPower ? 0.55 : 0.7, 0.42, 0.24);
      if (lowPower) bloom.resolution.set(W / 2, Hh / 2);
      composer.addPass(bloom);
      composer.addPass(new OutputPass());
    } catch (e) { composer = null; }

    /* ---------------- per-section presets ---------------- */
    //                0 sphere 1 caduceus 2 network 3 orbits 4 grid 5 finale
    var PRESET = {
      camZ:   [9.0,   9.2,   9.0,  9.6,  7.6,  9.6],
      camY:   [0.0,   0.0,   0.0,  0.0,  0.8,  0.0],
      rings:  [1.0,   0.0,   0.25, 0.85, 0.0,  1.0],
      spin:   [0.06,  0.22,  0.07, 0.09, 0.03, 0.08]
    };
    function sample(arr, m) {
      var i = Math.max(0, Math.min(arr.length - 1, Math.floor(m))), j = Math.min(arr.length - 1, i + 1), f = m - i;
      f = f * f * (3 - 2 * f);
      return arr[i] + (arr[j] - arr[i]) * f;
    }

    /* ---------------- interaction ---------------- */
    var mouse = new THREE.Vector2(0, 0), mouseTarget = new THREE.Vector2(0, 0), mouseActive = 0, lastMove = 0;
    var raycaster = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), hit = new THREE.Vector3();
    window.addEventListener('pointermove', function (e) {
      mouseTarget.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
      lastMove = performance.now();
    }, { passive: true });

    function resize() {
      W = window.innerWidth; Hh = window.innerHeight;
      camera.aspect = W / Hh; camera.updateProjectionMatrix();
      renderer.setSize(W, Hh, false);
      if (composer) { composer.setSize(W, Hh); if (lowPower && bloom) bloom.resolution.set(W / 2, Hh / 2); }
    }
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(resize, 120); });

    var running = true;
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) { clock.getDelta(); loop(); }
    });

    H.scene = {
      pulse: function () { state.pulse = 1; }
    };

    /* ---------------- loop ---------------- */
    var clock = new THREE.Clock(), time = 0, first = true;
    var fpsEl = document.getElementById('hud-fps'), fpsAcc = 0, fpsFrames = 0;
    var speed = reduceMotion ? 0.25 : 1;
    var rotY = 0;

    function loop() {
      if (!running) return;
      requestAnimationFrame(loop);
      var dt = Math.min(clock.getDelta(), 0.05);
      time += dt * speed;

      fpsAcc += dt; fpsFrames++;
      if (fpsAcc > 0.5) { if (fpsEl) fpsEl.textContent = Math.round(fpsFrames / fpsAcc); fpsAcc = 0; fpsFrames = 0; }

      var m = Math.max(0, Math.min(5, state.morph || 0));
      state.pulse = Math.max(0, (state.pulse || 0) - dt * 1.4);
      var pulse = state.pulse * state.pulse;

      mouse.lerp(mouseTarget, 0.08);
      var idle = performance.now() - lastMove > 2500;
      mouseActive += ((idle ? 0 : 1) - mouseActive) * 0.05;

      // mouse → world plane
      raycaster.setFromCamera(mouse, camera);
      if (raycaster.ray.intersectPlane(plane, hit)) pMat.uniforms.uMouse.value.copy(hit);
      pMat.uniforms.uMouseStrength.value = mouseActive * (reduceMotion ? 0.3 : 1);

      pMat.uniforms.uTime.value = time;
      pMat.uniforms.uMorph.value = m;
      pMat.uniforms.uPulse.value = pulse;
      coreMat.uniforms.uTime.value = time;
      coreMat.uniforms.uPulse.value = pulse;
      sMat.uniforms.uTime.value = time;
      var ro = sample(PRESET.rings, m);
      for (var r = 0; r < ringMats.length; r++) { ringMats[r].uniforms.uTime.value = time; ringMats[r].uniforms.uOpacity.value = ro; }
      rings.visible = ro > 0.01;

      var cs = state.core * (narrow.matches ? 0.7 : 1) * (1 + pulse * 0.25);
      coreGroup.scale.setScalar(Math.max(cs, 0.0001));
      coreGroup.visible = cs > 0.01;
      core.rotation.y += dt * 0.15 * speed;
      wire.rotation.y -= dt * 0.08 * speed; wire.rotation.x += dt * 0.05 * speed;
      rings.rotation.y += dt * 0.05 * speed;

      rotY += dt * sample(PRESET.spin, m) * speed;
      var isNarrow = narrow.matches;
      var off = isNarrow ? 0 : state.sx;
      root.position.x += (off - root.position.x) * 0.06;
      root.position.y += ((isNarrow ? (m < 0.5 ? 1.7 : 0) : state.sy) - root.position.y) * 0.06;
      pMat.uniforms.uDim.value = state.dim * (isNarrow ? (m < 0.5 ? 0.8 : 0.6) : 1);
      root.rotation.y = rotY + mouse.x * 0.25;
      root.rotation.x += (-mouse.y * 0.12 - root.rotation.x) * 0.05;

      var cz = sample(PRESET.camZ, m) + (isNarrow ? 3.2 : 0);
      camera.position.z += (cz - camera.position.z) * 0.05;
      var cy = sample(PRESET.camY, m);
      camera.position.y += (cy - camera.position.y) * 0.05;
      camera.lookAt(0, cy * 0.4, 0);

      stars.rotation.y += dt * 0.004 * speed;
      stars.rotation.x = -mouse.y * 0.03;

      if (composer) composer.render(); else renderer.render(scene, camera);

      if (first) {
        first = false;
        state.ready = true;
        document.documentElement.classList.add('webgl-ready');
        window.dispatchEvent(new Event('hermes:scene-ready'));
      }
    }
    loop();
  }

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
})();
