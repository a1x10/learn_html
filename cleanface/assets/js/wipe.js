/* =========================================================
   CLEANFACE — "squeegee" scroll scene
   A wet, fogged glass panel full of drops. While you scroll,
   a squeegee slides down: above the blade the glass is crystal
   clear, the water it collects rides along under the rubber.
   ========================================================= */
(() => {
  "use strict";

  const section = document.getElementById("wipe");
  const panel = document.getElementById("wipePanel");
  const wet = document.getElementById("wipeWet");
  const canvas = document.getElementById("wipeDrops");
  const sq = document.getElementById("squeegee");
  const meter = document.getElementById("wipeMeter");
  if (!section || !canvas) return;

  const ctx = canvas.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const rand = (a, b) => a + Math.random() * (b - a);

  let W = 0, H = 0, dpr = 1, bladeH = 26;
  let staticLayer = null;          // all resting drops, pre-rendered once
  let drops = [];                  // [{y, a}] sorted by y — used for collected water
  let prefixArea = [];
  let beads = [];                  // beads riding under the blade
  let runners = [];                // drops sliding down the glass
  const sprites = new Map();

  /* ---------- drop sprite ---------- */
  function drawDrop(c, x, y, r, alpha = 1) {
    c.save();
    c.translate(x, y);
    c.scale(1, 1.08);
    c.globalAlpha = alpha;
    // soft contact shadow under the drop
    let g = c.createRadialGradient(r * 0.15, r * 0.35, r * 0.2, r * 0.15, r * 0.35, r * 1.25);
    g.addColorStop(0, "rgba(6,30,90,0.30)");
    g.addColorStop(1, "rgba(6,30,90,0)");
    c.fillStyle = g;
    c.beginPath(); c.arc(r * 0.15, r * 0.35, r * 1.25, 0, Math.PI * 2); c.fill();
    // body: clear centre, brighter rim (lens)
    g = c.createRadialGradient(0, r * 0.2, r * 0.1, 0, 0, r);
    g.addColorStop(0, "rgba(255,255,255,0.10)");
    g.addColorStop(0.7, "rgba(220,235,255,0.20)");
    g.addColorStop(1, "rgba(255,255,255,0.55)");
    c.fillStyle = g;
    c.beginPath(); c.arc(0, 0, r, 0, Math.PI * 2); c.fill();
    // darker lower rim
    c.strokeStyle = "rgba(10,40,120,0.35)";
    c.lineWidth = Math.max(0.6, r * 0.12);
    c.beginPath(); c.arc(0, 0, r * 0.94, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke();
    // refracted light pooled at the bottom
    c.fillStyle = "rgba(255,255,255,0.45)";
    c.beginPath(); c.ellipse(0, r * 0.55, r * 0.55, r * 0.22, 0, 0, Math.PI * 2); c.fill();
    // specular highlight
    if (r > 1.6) {
      c.fillStyle = "rgba(255,255,255,0.95)";
      c.beginPath(); c.ellipse(-r * 0.35, -r * 0.42, r * 0.26, r * 0.17, -0.6, 0, Math.PI * 2); c.fill();
    }
    c.restore();
  }

  function sprite(r) {
    const key = Math.round(r * 2) / 2;
    if (sprites.has(key)) return sprites.get(key);
    const pad = Math.ceil(key * 1.7 + 2);
    const s = document.createElement("canvas");
    s.width = s.height = Math.ceil(pad * 2 * dpr);
    const c = s.getContext("2d");
    c.scale(dpr, dpr);
    drawDrop(c, pad, pad, key);
    const out = { c: s, pad };
    sprites.set(key, out);
    return out;
  }
  const blit = (x, y, r, a = 1) => {
    const s = sprite(r);
    ctx.globalAlpha = a;
    ctx.drawImage(s.c, (x - s.pad) * dpr, (y - s.pad) * dpr, s.pad * 2 * dpr, s.pad * 2 * dpr);
    ctx.globalAlpha = 1;
  };

  /* ---------- build the wet glass ---------- */
  function build() {
    const r = panel.getBoundingClientRect();
    W = Math.round(r.width); H = Math.round(r.height);
    if (!W || !H) return;
    bladeH = (sq.querySelector(".squeegee__blade").offsetHeight || 21) + 5;
    dpr = Math.min(window.devicePixelRatio || 1, W < 700 ? 1.75 : 1.5);
    sprites.clear();
    canvas.width = W * dpr; canvas.height = H * dpr;
    wet.style.setProperty("--blur", (W < 700 ? 9 : 14) + "px");

    staticLayer = document.createElement("canvas");
    staticLayer.width = W * dpr; staticLayer.height = H * dpr;
    const c = staticLayer.getContext("2d");
    c.scale(dpr, dpr);

    // fine mist
    const mist = Math.round((W * H) / 260);
    for (let i = 0; i < mist; i++) {
      const x = Math.random() * W, y = Math.random() * H, rr = rand(0.4, 1.3);
      c.fillStyle = `rgba(255,255,255,${rand(0.18, 0.45).toFixed(2)})`;
      c.beginPath(); c.arc(x, y, rr, 0, Math.PI * 2); c.fill();
    }

    // drops — mostly small, a few big ones; avoid heavy overlap with a coarse grid
    drops = [];
    const count = Math.round((W * H) / (W < 700 ? 1500 : 1700));
    const cell = 22, cols = Math.ceil(W / cell), occ = new Uint8Array(cols * Math.ceil(H / cell));
    for (let i = 0; i < count; i++) {
      const rr = 1.1 + Math.pow(Math.random(), 3.4) * (W < 700 ? 8 : 11);
      const x = Math.random() * W, y = Math.random() * H;
      if (rr > 5) {
        const k = Math.floor(y / cell) * cols + Math.floor(x / cell);
        if (occ[k]) continue;
        occ[k] = 1;
      }
      drawDrop(c, x, y, rr, rand(0.75, 1));
      drops.push({ y, a: rr * rr });
    }
    // a few dried trails (vertical streak lines of tiny beads)
    for (let t = 0; t < Math.round(W / 140); t++) {
      let x = Math.random() * W, y = Math.random() * H * 0.6;
      const len = rand(60, 220);
      for (let k = 0; k < len; k += rand(5, 11)) {
        x += rand(-1.2, 1.2);
        drawDrop(c, x, y + k, rand(0.8, 1.8), 0.8);
      }
      const rr = rand(4, 7);
      drawDrop(c, x, y + len + rr, rr);
      drops.push({ y: y + len, a: rr * rr * 2 });
    }

    drops.sort((p, q) => p.y - q.y);
    prefixArea = new Float64Array(drops.length + 1);
    for (let i = 0; i < drops.length; i++) prefixArea[i + 1] = prefixArea[i] + drops[i].a;

    beads = [];
    for (let x = rand(2, 10); x < W; x += rand(9, 22)) beads.push({ x, s: rand(0.45, 1.15), wob: rand(0, 6.28) });

    runners = Array.from({ length: Math.max(4, Math.round(W / 180)) }, () => newRunner(-1, true));
  }

  function newRunner(bladeY, anywhere) {
    const top = Math.max(0, bladeY + 30);
    return {
      x: rand(10, W - 10),
      y: anywhere ? rand(top, H) : rand(top, top + (H - top) * 0.5),
      r: rand(3.2, 6.5),
      v: rand(14, 46),
      pause: rand(0, 2),
      trail: [],
    };
  }

  // area of water collected above y (binary search on sorted drops)
  function collected(y) {
    let lo = 0, hi = drops.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (drops[m].y < y) lo = m + 1; else hi = m; }
    return prefixArea[lo] / (prefixArea[drops.length] || 1);
  }

  /* ---------- scroll + render loop ---------- */
  let target = 0, prog = 0, prevProg = 0, visible = false, last = performance.now(), rot = 0;

  function readScroll() {
    const r = section.getBoundingClientRect();
    const total = section.offsetHeight - innerHeight;
    target = clamp(-r.top / (total || 1));
  }

  function render(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!visible) { requestAnimationFrame(render); return; }
    readScroll();
    prog += (target - prog) * (reduced ? 1 : 0.11);
    const vel = prog - prevProg;
    prevProg = prog;

    // entrance tilt (3D) while the panel arrives
    const enter = clamp(target / 0.08);
    panel.style.setProperty("--tilt", ((1 - enter) * 14).toFixed(2) + "deg");
    panel.style.setProperty("--scale", (0.94 + enter * 0.06).toFixed(4));

    // blade position
    const p = clamp((prog - 0.1) / 0.72);
    const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    const bladeY = -40 + eased * (H + 90);
    rot += (clamp(vel * 900, -3.5, 3.5) - rot) * 0.15;
    sq.style.setProperty("--sy", bladeY.toFixed(1) + "px");
    sq.style.setProperty("--sr", (rot * 0.35 + Math.sin(now / 900) * 0.25 * (p > 0 && p < 1 ? 1 : 0)).toFixed(2) + "deg");
    sq.style.setProperty("--hr", (-14 - rot * 2.2).toFixed(2) + "deg");
    const cut = clamp(bladeY + bladeH - 3, 0, H);
    wet.style.setProperty("--wy", cut.toFixed(1) + "px");
    meter.textContent = Math.round(clamp(cut / H) * 100) + "%";
    panel.classList.toggle("is-started", p > 0.02);
    panel.classList.toggle("is-clean", p >= 0.995);

    // draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (cut < H && staticLayer) {
      const sy = Math.floor(cut * dpr);
      ctx.drawImage(staticLayer, 0, sy, staticLayer.width, staticLayer.height - sy, 0, sy, staticLayer.width, staticLayer.height - sy);

      // sliding drops with trails
      runners.forEach((d, i) => {
        if (d.pause > 0) d.pause -= dt;
        else { d.y += d.v * dt * (0.6 + Math.random() * 0.8); d.x += Math.sin(now / 400 + i) * 0.08; }
        if (d.trail.length === 0 || d.y - d.trail[d.trail.length - 1].y > 6) {
          d.trail.push({ x: d.x + Math.random() - 0.5, y: d.y - d.r * 0.8, r: Math.random() * 1.1 + 0.6 });
          if (d.trail.length > 40) d.trail.shift();
        }
        if (d.y > H + 20 || d.y < cut) { runners[i] = newRunner(cut - 30, false); return; }
        d.trail.forEach((t, k) => { if (t.y > cut) blit(t.x, t.y, t.r, (k / d.trail.length) * 0.9); });
        blit(d.x, d.y, d.r);
      });
    }

    // water collected under the rubber
    if (bladeY > -30 && bladeY < H + 30) {
      const fill = collected(bladeY);
      const lineY = bladeY + bladeH;
      if (fill > 0.002) {
        const gr = ctx.createLinearGradient(0, lineY * dpr - 4 * dpr, 0, lineY * dpr + 6 * dpr);
        gr.addColorStop(0, "rgba(255,255,255,0)");
        gr.addColorStop(0.5, `rgba(235,244,255,${(0.25 + fill * 0.4).toFixed(2)})`);
        gr.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gr;
        ctx.fillRect(0, (lineY - 4) * dpr, canvas.width, 10 * dpr);
        const size = 1.2 + Math.sqrt(fill) * (W < 700 ? 4.5 : 6.5);
        beads.forEach((b) => {
          const r = size * b.s;
          blit(b.x, lineY + r * 0.4 + Math.sin(now / 300 + b.wob) * 0.4, r);
        });
      }
    }
    requestAnimationFrame(render);
  }

  const vis = new IntersectionObserver((e) => { visible = e[0].isIntersecting; }, { rootMargin: "200px 0px" });
  vis.observe(section);

  let rT;
  const onResize = () => { clearTimeout(rT); rT = setTimeout(build, 150); };
  addEventListener("resize", onResize);
  if ("ResizeObserver" in window) new ResizeObserver(onResize).observe(panel);

  build();
  requestAnimationFrame(render);
})();
