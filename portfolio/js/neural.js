/* =========================================================
   STELLS PRO — 3D-нейросеть: слои, связи, сигналы
   ========================================================= */

(() => {
  'use strict';

  let THREE;
  let RoomEnvironment;
  const canvas = document.getElementById('neural-canvas');
  const labelsBox = document.querySelector('.neural-labels');
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOBILE = matchMedia('(max-width: 760px)').matches;
  const state = (window.__neural = window.__neural || { progress: 0, step: 0 });

  const LAYERS = [
    { n: 8, label: 'Токены', color: '#32ade6', shape: 'column', size: 0.13 },
    { n: 30, label: 'Эмбеддинг', color: '#0a84ff', shape: 'disk', size: 0.085 },
    { n: 56, label: 'Self-Attention', color: '#5e5ce6', shape: 'disk', size: 0.08, attn: true },
    { n: 56, label: 'Self-Attention ×N', color: '#7a5af8', shape: 'disk', size: 0.08, attn: true },
    { n: 30, label: 'Feed-Forward', color: '#bf5af2', shape: 'disk', size: 0.085 },
    { n: 6, label: 'Выход', color: '#ff375f', shape: 'column', size: 0.14 },
  ];
  const STEP_LAYERS = [[0, 1], [2, 3], [4], [5]];
  const GAP = 2.75;

  if (canvas) {
    (async () => {
      try {
        THREE = await import('three');
        ({ RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js'));
        init();
      } catch (e) {
        console.warn('Neural: WebGL или Three.js недоступны', e);
      }
    })();
  }

  function init() {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, MOBILE ? 1.6 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf2f1fb, 15, 32);
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.add(new THREE.HemisphereLight(0xffffff, 0xdcd9ff, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(4, 8, 6);
    scene.add(key);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    const net = new THREE.Group();
    scene.add(net);

    /* ---------- Нейроны ---------- */
    const neurons = []; // { layer, pos, act }
    const layerInfo = LAYERS.map((L, li) => {
      const x = (li - (LAYERS.length - 1) / 2) * GAP;
      const r = L.shape === 'disk' ? 0.3 * Math.sqrt(L.n) + 0.25 : (L.n - 1) * 0.42 * 0.5;
      const ids = [];
      for (let i = 0; i < L.n; i++) {
        let p;
        if (L.shape === 'column') {
          p = new THREE.Vector3(x, (i - (L.n - 1) / 2) * 0.42, 0);
        } else {
          const rr = r * Math.sqrt((i + 0.5) / L.n);
          const th = i * Math.PI * (3 - Math.sqrt(5));
          p = new THREE.Vector3(x + (Math.random() - 0.5) * 0.12, Math.sin(th) * rr, Math.cos(th) * rr);
        }
        ids.push(neurons.length);
        neurons.push({ layer: li, pos: p, act: 0 });
      }
      return { x, r, ids, color: new THREE.Color(L.color) };
    });

    const sphereGeo = new THREE.SphereGeometry(1, 24, 18);
    const neuronMat = new THREE.MeshPhysicalMaterial({ roughness: 0.28, metalness: 0, clearcoat: 0.7, clearcoatRoughness: 0.2, envMapIntensity: 0.9 });
    const inst = new THREE.InstancedMesh(sphereGeo, neuronMat, neurons.length);
    inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    net.add(inst);
    const baseGray = new THREE.Color('#e4e3ef');
    const tmpM = new THREE.Matrix4();
    const tmpC = new THREE.Color();
    const tmpQ = new THREE.Quaternion();
    const tmpS = new THREE.Vector3();
    neurons.forEach((n, i) => {
      n.base = baseGray.clone().lerp(layerInfo[n.layer].color, 0.16);
      n.size = LAYERS[n.layer].size;
      inst.setColorAt(i, n.base);
    });

    /* ---------- Связи ---------- */
    const conns = []; // { a, b, pts[], len, act, color, seg0, segN }
    const outgoing = neurons.map(() => []);
    const addConn = (a, b, pts) => {
      let len = 0;
      for (let i = 1; i < pts.length; i++) len += pts[i].distanceTo(pts[i - 1]);
      const c = { a, b, pts, len, act: 0, layer: neurons[a].layer };
      outgoing[a].push(conns.length);
      conns.push(c);
    };
    const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
    for (let li = 0; li < LAYERS.length - 1; li++) {
      const A = layerInfo[li].ids;
      const B = layerInfo[li + 1].ids;
      const incoming = new Map();
      const k = li === 0 ? 6 : li === LAYERS.length - 2 ? 2 : 3;
      A.forEach((a) => {
        const picked = new Set();
        while (picked.size < Math.min(k, B.length)) picked.add(rnd(B));
        picked.forEach((b) => {
          addConn(a, b, [neurons[a].pos, neurons[b].pos]);
          incoming.set(b, (incoming.get(b) || 0) + 1);
        });
      });
      B.forEach((b) => {
        if (!incoming.get(b)) {
          const a = rnd(A);
          addConn(a, b, [neurons[a].pos, neurons[b].pos]);
        }
      });
    }
    // Дуги внимания внутри слоёв
    layerInfo.forEach((L, li) => {
      if (!LAYERS[li].attn) return;
      for (let k = 0; k < (MOBILE ? 14 : 22); k++) {
        const a = rnd(L.ids);
        let b = rnd(L.ids);
        if (a === b) continue;
        const pa = neurons[a].pos, pb = neurons[b].pos;
        const bulge = (0.5 + pa.distanceTo(pb) * 0.35) * (li === 2 ? -1 : 1);
        const pts = [];
        for (let s = 0; s <= 14; s++) {
          const t = s / 14;
          const p = pa.clone().lerp(pb, t);
          p.x += Math.sin(Math.PI * t) * bulge;
          pts.push(p);
        }
        addConn(a, b, pts);
      }
    });

    let segCount = 0;
    conns.forEach((c) => {
      c.seg0 = segCount;
      c.segN = c.pts.length - 1;
      segCount += c.segN;
    });
    const linePos = new Float32Array(segCount * 6);
    const lineCol = new Float32Array(segCount * 6);
    const lineBase = new THREE.Color('#cfd0e2');
    conns.forEach((c) => {
      for (let s = 0; s < c.segN; s++) {
        const o = (c.seg0 + s) * 6;
        const p0 = c.pts[s], p1 = c.pts[s + 1];
        linePos.set([p0.x, p0.y, p0.z, p1.x, p1.y, p1.z], o);
        lineCol.set([lineBase.r, lineBase.g, lineBase.b, lineBase.r, lineBase.g, lineBase.b], o);
      }
    });
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    const lineColAttr = new THREE.BufferAttribute(lineCol, 3);
    lineColAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute('color', lineColAttr);
    const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.85, fog: true, toneMapped: false }));
    net.add(lines);

    /* ---------- Сигналы ---------- */
    const MAX = MOBILE ? 260 : 520;
    const pPos = new Float32Array(MAX * 3);
    const pCol = new Float32Array(MAX * 3);
    const pSize = new Float32Array(MAX);
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3).setUsage(THREE.DynamicDrawUsage));
    pGeo.setAttribute('aColor', new THREE.BufferAttribute(pCol, 3).setUsage(THREE.DynamicDrawUsage));
    pGeo.setAttribute('aSize', new THREE.BufferAttribute(pSize, 1).setUsage(THREE.DynamicDrawUsage));
    const pMat = new THREE.ShaderMaterial({
      uniforms: { uPR: { value: renderer.getPixelRatio() } },
      vertexShader: /* glsl */ `
        attribute float aSize; attribute vec3 aColor; varying vec3 vColor; uniform float uPR;
        void main(){ vColor = aColor; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPR * (320.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d); vec3 col = mix(vColor, vec3(1.0), smoothstep(0.22, 0.0, d) * 0.7);
          gl_FragColor = vec4(col, core); }`,
      transparent: true,
      depthWrite: false,
    });
    const points = new THREE.Points(pGeo, pMat);
    points.frustumCulled = false;
    net.add(points);

    const pulses = [];
    let boost = 0;
    const spawn = (ci) => {
      if (pulses.length >= MAX || ci === undefined) return;
      pulses.push({ c: ci, t: 0, v: 3.2 + Math.random() * 2.2 });
    };
    const fromNeuron = (ni, count = 1) => {
      const outs = outgoing[ni];
      if (!outs.length) return;
      for (let k = 0; k < count; k++) spawn(rnd(outs));
    };
    const pointAt = (c, t) => {
      const f = t * c.segN;
      const i = Math.min(c.segN - 1, Math.floor(f));
      return c.pts[i].clone().lerp(c.pts[i + 1], f - i);
    };

    const fire = () => {
      boost = 1;
      layerInfo[0].ids.forEach((ni) => {
        neurons[ni].act = 1;
        outgoing[ni].forEach((ci) => spawn(ci));
      });
    };
    addEventListener('neural:fire', fire);
    addEventListener('neural:step', (e) => {
      STEP_LAYERS[e.detail].forEach((li) =>
        layerInfo[li].ids.forEach((ni) => {
          if (Math.random() < 0.5) {
            neurons[ni].act = 1;
            fromNeuron(ni);
          }
        })
      );
    });

    /* ---------- Подписи слоёв ---------- */
    const labels = LAYERS.map((L) => {
      const el = document.createElement('div');
      el.className = 'nlabel';
      el.textContent = L.label;
      labelsBox && labelsBox.appendChild(el);
      return el;
    });

    /* ---------- Управление камерой ---------- */
    let dragAz = 0, dragVel = 0, dragging = false, lastX = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    canvas.style.touchAction = 'pan-y';
    canvas.addEventListener('pointerdown', (e) => {
      dragging = true;
      lastX = e.clientX;
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (dragging) {
        dragVel = (e.clientX - lastX) * 0.006;
        dragAz += dragVel;
        lastX = e.clientX;
      }
    });
    const endDrag = () => (dragging = false);
    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(canvas);
    resize();

    let visible = false;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);

    /* ---------- Цикл ---------- */
    const FOCUS_X = [-5.2, -1.2, 2.75, 6.6];
    const target = new THREE.Vector3();
    const camPos = new THREE.Vector3();
    const v3 = new THREE.Vector3();
    const clock = new THREE.Clock();
    let t = 0;
    let spawnAcc = 0;
    let smoothP = state.progress;
    let first = true;
    const smooth = (x) => x * x * (3 - 2 * x);

    const render = () => {
      requestAnimationFrame(render);
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!visible) return;
      const k = REDUCED ? 0.25 : 1;
      t += dt;

      smoothP += (state.progress - smoothP) * 0.08;
      const f = Math.max(0, Math.min(3, smoothP * 4 - 0.5));
      const i0 = Math.floor(f), i1 = Math.min(3, i0 + 1);
      const focusX = FOCUS_X[i0] + (FOCUS_X[i1] - FOCUS_X[i0]) * smooth(f - i0);
      const aspect = camera.aspect;
      const narrow = aspect < 0.9;

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      if (!dragging) {
        dragAz += dragVel;
        dragVel *= 0.94;
      }

      target.set(focusX * (narrow ? 1 : 0.42), 0, 0);
      const az = -0.62 + smoothP * 1.0 + mouse.x * 0.18 + dragAz;
      const el = 0.26 + mouse.y * -0.08;
      const dist = (narrow ? 12.5 : 15.2 - Math.sin(smoothP * Math.PI) * 2.2) / Math.min(1, Math.max(0.75, aspect / 1.6));
      camPos.set(Math.sin(az) * Math.cos(el) * dist, Math.sin(el) * dist, Math.cos(az) * Math.cos(el) * dist).add(target);
      if (first) {
        camera.position.copy(camPos);
        first = false;
      } else camera.position.lerp(camPos, 0.12);
      camera.lookAt(target);
      net.position.y = Math.sin(t * 0.6) * 0.08 - (narrow ? 0.3 : 0.2);

      // автоматические сигналы
      spawnAcc += dt * k;
      const interval = boost > 0.1 ? 0.03 : 0.08;
      while (spawnAcc > interval) {
        spawnAcc -= interval;
        const ni = rnd(layerInfo[0].ids);
        neurons[ni].act = Math.max(neurons[ni].act, 0.8);
        fromNeuron(ni);
      }
      boost *= Math.pow(0.4, dt);

      // движение сигналов
      const focusLayers = STEP_LAYERS[state.step] || [];
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const c = conns[p.c];
        p.t += (dt * p.v * k) / c.len;
        c.act = 1;
        if (p.t >= 1) {
          const nb = neurons[c.b];
          nb.act = 1;
          const prob = 0.42 + boost * 0.5 + (focusLayers.includes(nb.layer) ? 0.18 : 0);
          if (Math.random() < prob) fromNeuron(c.b, Math.random() < 0.3 + boost * 0.4 ? 2 : 1);
          pulses.splice(i, 1);
        }
      }

      // буферы сигналов
      for (let i = 0; i < MAX; i++) {
        const p = pulses[i];
        if (!p) {
          pSize[i] = 0;
          continue;
        }
        const c = conns[p.c];
        const pos = pointAt(c, Math.min(1, p.t));
        pPos[i * 3] = pos.x;
        pPos[i * 3 + 1] = pos.y;
        pPos[i * 3 + 2] = pos.z;
        const col = layerInfo[neurons[c.b].layer].color;
        pCol[i * 3] = col.r;
        pCol[i * 3 + 1] = col.g;
        pCol[i * 3 + 2] = col.b;
        pSize[i] = 0.2 + Math.sin(Math.PI * p.t) * 0.08;
      }
      pGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.aColor.needsUpdate = true;
      pGeo.attributes.aSize.needsUpdate = true;

      // нейроны
      neurons.forEach((n, i) => {
        n.act *= Math.pow(0.12, dt);
        const inFocus = focusLayers.includes(n.layer);
        const s = n.size * (1 + n.act * 0.7 + (inFocus ? 0.15 : 0));
        tmpS.set(s, s, s);
        tmpM.compose(n.pos, tmpQ, tmpS);
        inst.setMatrixAt(i, tmpM);
        tmpC.copy(n.base).lerp(layerInfo[n.layer].color, Math.min(1, n.act + (inFocus ? 0.28 : 0)));
        inst.setColorAt(i, tmpC);
      });
      inst.instanceMatrix.needsUpdate = true;
      inst.instanceColor.needsUpdate = true;

      // связи
      conns.forEach((c) => {
        if (c.act < 0.002 && !c.dirty) return;
        c.act *= Math.pow(0.08, dt);
        c.dirty = c.act > 0.002;
        const col = layerInfo[neurons[c.b].layer].color;
        const a = Math.min(1, c.act * 0.9);
        const r = lineBase.r + (col.r - lineBase.r) * a;
        const g = lineBase.g + (col.g - lineBase.g) * a;
        const b = lineBase.b + (col.b - lineBase.b) * a;
        for (let s = 0; s < c.segN; s++) {
          const o = (c.seg0 + s) * 6;
          lineCol[o] = lineCol[o + 3] = r;
          lineCol[o + 1] = lineCol[o + 4] = g;
          lineCol[o + 2] = lineCol[o + 5] = b;
        }
      });
      lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);

      // подписи
      if (labelsBox) {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        net.updateMatrixWorld();
        layerInfo.forEach((L, li) => {
          v3.set(L.x, -L.r - 0.55, 0).applyMatrix4(net.matrixWorld).project(camera);
          const el = labels[li];
          if (v3.z > 1 || v3.x < -1.2 || v3.x > 1.2) {
            el.style.opacity = 0;
            return;
          }
          const x = (v3.x * 0.5 + 0.5) * w;
          const y = (-v3.y * 0.5 + 0.5) * h;
          el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, 0)`;
          el.style.opacity = narrow && !focusLayers.includes(li) ? 0.35 : 1;
          el.classList.toggle('is-active', focusLayers.includes(li));
        });
      }
    };
    render();
  }
})();
