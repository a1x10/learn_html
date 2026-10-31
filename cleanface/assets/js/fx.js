/* =========================================================
   CLEANFACE — motion layer
   smooth scroll · cursor · magnetic buttons · topbar · progress
   kinetic marquee · counters · badge · hero glow · footer letters
   foggy-glass CTA you can wipe with a finger
   ========================================================= */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const html = document.documentElement;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lang = () => (html.lang === "en" ? "en" : "ru");
  const isLoading = () => document.body.classList.contains("is-loading");

  /* ---------------------------------------------------------
     SMOOTH SCROLL (Lenis) + anchors
     --------------------------------------------------------- */
  let lenis = null;
  if (window.Lenis && !reduced) {
    lenis = new window.Lenis({ lerp: 0.095, smoothWheel: true, wheelMultiplier: 0.95 });
    html.classList.add("cf-smooth");
    if (isLoading()) lenis.stop();
    document.addEventListener("cf:ready", () => lenis.start(), { once: true });
  }

  const scrollToTarget = (target) => {
    if (lenis) lenis.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
    else if (target === 0) window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    else target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };
  window.cfScrollTo = scrollToTarget;

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    const target = id === "#top" || id === "#" ? 0 : document.querySelector(id);
    if (target === null) return;
    e.preventDefault();
    scrollToTarget(target);
  });

  /* ---------------------------------------------------------
     SCROLL STATE shared by everything below
     --------------------------------------------------------- */
  let sy = scrollY, lastSy = scrollY, vel = 0, dir = 1;

  /* ---------------------------------------------------------
     CURSOR
     --------------------------------------------------------- */
  const cursor = $("#cursor");
  const cursorLabel = $("#cursorLabel");
  const LABELS = {
    view: ["Смотреть", "View"], zoom: ["Открыть", "Open"], order: ["Заказать", "Order"],
    wipe: ["Протереть", "Wipe"], more: ["Почему мы", "Why us"],
  };
  let cx = innerWidth / 2, cy = innerHeight / 2, rx = cx, ry = cy;
  if (finePointer && cursor) {
    html.classList.add("has-cursor");
    addEventListener("pointermove", (e) => {
      cx = e.clientX; cy = e.clientY;
      cursor.classList.add("is-on");
    }, { passive: true });
    document.addEventListener("pointerleave", () => cursor.classList.remove("is-on"));
    addEventListener("pointerdown", () => cursor.classList.add("is-down"));
    addEventListener("pointerup", () => cursor.classList.remove("is-down"));
    document.addEventListener("pointerover", (e) => {
      const lab = e.target.closest("[data-cursor]");
      const hot = e.target.closest("a, button, [role=button], select, label, .svc");
      const text = e.target.closest("input, textarea");
      if (lab) {
        const key = lab.dataset.cursor;
        cursorLabel.textContent = (LABELS[key] || [key, key])[lang() === "en" ? 1 : 0];
        cursor.classList.add("is-label");
      } else cursor.classList.remove("is-label");
      cursor.classList.toggle("is-hover", !!hot && !lab);
      cursor.classList.toggle("is-text", !!text);
    });
  }

  /* ---------------------------------------------------------
     MAGNETIC ELEMENTS (uses `translate`, so CSS animations on
     `transform` keep working)
     --------------------------------------------------------- */
  if (finePointer && !reduced) {
    $$("[data-magnetic]").forEach((el) => {
      const strength = el.classList.contains("badge") ? 0.25 : 0.35;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transition = "translate .25s cubic-bezier(.2,.7,.2,1)";
        el.style.translate = `${x * strength}px ${y * strength}px`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transition = "translate .8s cubic-bezier(.2,1.6,.4,1)";
        el.style.translate = "0px 0px";
      });
    });
  }

  /* ---------------------------------------------------------
     TOPBAR + PROGRESS
     --------------------------------------------------------- */
  const topbar = $("#topbar");
  const progress = $("#progressBar");
  const hero = $("#hero");
  const wipe = $("#wipe");

  /* ---------------------------------------------------------
     HERO GLOW + BADGE
     --------------------------------------------------------- */
  const glow = $("#heroGlow");
  const badgeRing = $("#badgeRing");
  let gx = 0.3, gy = 0.3, tgx = 0.3, tgy = 0.3;
  if (finePointer && hero) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      tgx = (e.clientX - r.left) / r.width; tgy = (e.clientY - r.top) / r.height;
    });
  }
  let badgeRot = 0;

  /* ---------------------------------------------------------
     KINETIC MARQUEE
     --------------------------------------------------------- */
  const rows = $$(".kinetic__row").map((row) => ({
    row, track: $(".kinetic__track", row), dir: +row.dataset.dir || 1, x: 0, w: 0,
  }));
  const measureRows = () => rows.forEach((r) => { r.w = r.track.firstElementChild.offsetWidth; });
  measureRows();
  addEventListener("resize", measureRows);
  document.addEventListener("cf:lang", () => requestAnimationFrame(measureRows));
  if (document.fonts) document.fonts.ready.then(measureRows);
  let kineticVisible = false;
  const kinetic = $("#kinetic");
  if (kinetic) new IntersectionObserver((e) => { kineticVisible = e[0].isIntersecting; }).observe(kinetic);

  /* ---------------------------------------------------------
     COUNTERS
     --------------------------------------------------------- */
  const counters = $$("[data-count]");
  counters.forEach((el) => { el.textContent = "0"; });
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      countIO.unobserve(en.target);
      const el = en.target, to = +el.dataset.count, t0 = performance.now(), dur = reduced ? 1 : 1800;
      (function step(now) {
        const p = clamp((now - t0) / dur);
        const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        el.textContent = Math.round(to * e).toLocaleString("ru-RU");
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => countIO.observe(el));

  /* ---------------------------------------------------------
     FOOTER — letters with their own fill and a hover wave
     --------------------------------------------------------- */
  const fw = $("#footerWord");
  if (fw) {
    fw.innerHTML = fw.textContent.trim().split("").map((c, i) => `<span style="--i:${i}">${c}</span>`).join("");
    const letters = $$("span", fw);
    if (finePointer && !reduced) {
      fw.addEventListener("pointermove", (e) => {
        letters.forEach((l) => {
          const r = l.getBoundingClientRect();
          const d = Math.abs(e.clientX - (r.left + r.width / 2)) / r.width;
          l.style.translate = `0 ${(-Math.max(0, 1.6 - d) * 6).toFixed(1)}%`;
        });
      });
      fw.addEventListener("pointerleave", () => letters.forEach((l) => { l.style.translate = "0 0"; }));
    }
  }

  /* ---------------------------------------------------------
     SECTION THEMES for the topbar/cursor (dark vs light)
     --------------------------------------------------------- */
  const darkSections = $$(".why, .kinetic");

  /* ---------------------------------------------------------
     MAIN LOOP
     --------------------------------------------------------- */
  let lastT = performance.now();
  function loop(now) {
    if (lenis) lenis.raf(now);
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    sy = scrollY;
    const delta = sy - lastSy;
    lastSy = sy;
    vel = lerp(vel, lenis ? lenis.velocity || delta : delta, 0.2);
    if (Math.abs(delta) > 0.5) dir = delta > 0 ? 1 : -1;
    const vh = innerHeight;

    // cursor
    if (finePointer && cursor) {
      rx = lerp(rx, cx, 0.18); ry = lerp(ry, cy, 0.18);
      cursor.style.setProperty("--x", cx + "px");
      cursor.style.setProperty("--y", cy + "px");
      cursor.style.setProperty("--rx", rx + "px");
      cursor.style.setProperty("--ry", ry + "px");
    }

    // progress + topbar
    const max = document.documentElement.scrollHeight - vh;
    if (progress) progress.style.transform = `scaleX(${clamp(sy / (max || 1)).toFixed(4)})`;
    if (topbar && hero) {
      const past = sy > hero.offsetHeight * 0.75;
      const wr = wipe ? wipe.getBoundingClientRect() : null;
      const inWipe = wr && wr.top < vh * 0.4 && wr.bottom > vh * 0.6;
      topbar.classList.toggle("is-on", past && dir < 0 && !inWipe || past && sy < hero.offsetHeight * 1.1);
      const dark = darkSections.some((s) => { const r = s.getBoundingClientRect(); return r.top < 60 && r.bottom > 60; });
      topbar.classList.toggle("is-dark", dark);
    }

    // hero glow + badge
    if (glow && sy < vh * 1.5) {
      gx = lerp(gx, tgx, 0.05); gy = lerp(gy, tgy, 0.05);
      glow.style.transform = `translate3d(${(gx * 50).toFixed(2)}%, ${(gy * 50).toFixed(2)}%, 0)`;
    }
    if (badgeRing && sy < vh * 1.5) {
      badgeRot += dt * (reduced ? 0 : 14) + Math.abs(vel) * 0.25;
      badgeRing.style.transform = `rotate(${badgeRot.toFixed(2)}deg)`;
    }

    // kinetic marquee — speeds up with scroll, flips with direction, skews with velocity
    if (kineticVisible && !reduced) {
      const boost = 1 + Math.min(Math.abs(vel) * 0.12, 6);
      rows.forEach((r) => {
        if (!r.w) return;
        r.x -= 50 * boost * dt * r.dir * dir;
        if (r.x <= -r.w) r.x += r.w;
        if (r.x > 0) r.x -= r.w;
        r.track.style.transform = `translate3d(${r.x.toFixed(2)}px,0,0) skewX(${clamp(-vel * 0.25, -10, 10).toFixed(2)}deg)`;
      });
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  /* ---------------------------------------------------------
     FOGGY GLASS CTA — wipe it with the pointer / finger
     --------------------------------------------------------- */
  const fogPanel = $("#fogPanel");
  const fogCanvas = $("#fogCanvas");
  if (fogPanel && fogCanvas) {
    const ctx = fogCanvas.getContext("2d");
    const meter = $("#fogMeter");
    const hint = $("#fogHint");
    // low-res mirror used to measure how much is clean
    const probe = document.createElement("canvas");
    probe.width = 64; probe.height = 40;
    const pctx = probe.getContext("2d", { willReadFrequently: true });
    // mask for the blurred "frost" layer: opaque = frosted, transparent = wiped clean
    const frost = $("#fogFrost");
    const mask = document.createElement("canvas");
    mask.width = 240; mask.height = 150;
    const mctx = mask.getContext("2d");
    let maskQueued = false;
    const pushMask = () => {
      if (maskQueued || !frost) return;
      maskQueued = true;
      requestAnimationFrame(() => {
        maskQueued = false;
        const url = `url(${mask.toDataURL()})`;
        frost.style.webkitMaskImage = url;
        frost.style.maskImage = url;
      });
    };
    let W = 0, H = 0, dpr = 1, cleared = 0, done = false, last = null, moves = 0, touched = false;

    function paintFog() {
      const r = fogPanel.getBoundingClientRect();
      W = Math.round(r.width); H = Math.round(r.height);
      if (!W || !H) return;
      dpr = Math.min(devicePixelRatio || 1, 1.5);
      fogCanvas.width = W * dpr; fogCanvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, "rgba(226,236,255,0.62)");
      g.addColorStop(0.5, "rgba(206,222,252,0.5)");
      g.addColorStop(1, "rgba(232,240,255,0.66)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      // condensation speckle
      for (let i = 0; i < (W * H) / 90; i++) {
        ctx.fillStyle = `rgba(255,255,255,${(Math.random() * 0.5).toFixed(2)})`;
        ctx.beginPath(); ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 1.6 + 0.3, 0, 6.283); ctx.fill();
      }
      for (let i = 0; i < (W * H) / 5000; i++) {
        const x = Math.random() * W, y = Math.random() * H, rr = Math.random() * 4 + 2;
        ctx.fillStyle = "rgba(140,170,230,0.25)";
        ctx.beginPath(); ctx.arc(x + rr * 0.2, y + rr * 0.3, rr, 0, 6.283); ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.75)";
        ctx.beginPath(); ctx.arc(x, y, rr, 0, 6.283); ctx.fill();
      }
      pctx.globalCompositeOperation = "source-over";
      pctx.fillStyle = "#000"; pctx.fillRect(0, 0, 64, 40);
      mctx.globalCompositeOperation = "source-over";
      mctx.fillStyle = "#000"; mctx.fillRect(0, 0, 240, 150);
      pushMask();
      cleared = 0; done = false; fogPanel.classList.remove("is-clear");
      fogPanel.style.setProperty("--fog", "1");
      if (meter) meter.textContent = "0%";
    }

    const brush = () => Math.max(46, Math.min(W, H) * 0.09);
    function stroke(x0, y0, x1, y1) {
      const b = brush();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = b;
      ctx.shadowColor = "rgba(0,0,0,1)"; ctx.shadowBlur = b * 0.5;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      ctx.shadowBlur = 0;
      // mirror on the probe
      pctx.globalCompositeOperation = "destination-out";
      pctx.strokeStyle = "#000"; pctx.lineCap = "round";
      pctx.lineWidth = b * (64 / W) * 1.1;
      pctx.beginPath(); pctx.moveTo(x0 * 64 / W, y0 * 40 / H); pctx.lineTo(x1 * 64 / W, y1 * 40 / H); pctx.stroke();
      mctx.globalCompositeOperation = "destination-out";
      mctx.lineCap = "round"; mctx.strokeStyle = "#000";
      mctx.lineWidth = b * (240 / W);
      mctx.shadowColor = "#000"; mctx.shadowBlur = b * (240 / W) * 0.6;
      mctx.beginPath(); mctx.moveTo(x0 * 240 / W, y0 * 150 / H); mctx.lineTo(x1 * 240 / W, y1 * 150 / H); mctx.stroke();
      mctx.shadowBlur = 0;
      pushMask();
      if (++moves % 6 === 0) measure();
    }
    function measure() {
      const d = pctx.getImageData(0, 0, 64, 40).data;
      let clear = 0;
      for (let i = 3; i < d.length; i += 4) if (d[i] < 128) clear++;
      cleared = clear / (64 * 40);
      fogPanel.style.setProperty("--fog", (1 - clamp(cleared / 0.5)).toFixed(3));
      if (meter) meter.textContent = Math.round(clamp(cleared / 0.5) * 100) + "%";
      if (cleared > 0.5 && !done) finish();
    }
    function finish() {
      done = true;
      fogPanel.classList.add("is-clear");
      if (meter) meter.textContent = "100%";
      fogPanel.style.setProperty("--fog", "0");
    }
    const pos = (e) => { const r = fogCanvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

    fogCanvas.addEventListener("pointerdown", (e) => {
      touched = true; hint && hint.classList.add("is-off");
      last = pos(e);
      stroke(last.x, last.y, last.x + 0.1, last.y + 0.1);
    });
    fogCanvas.addEventListener("pointermove", (e) => {
      if (done) return;
      // mouse wipes on hover, touch wipes while the finger is down
      if (e.pointerType !== "mouse" && e.buttons === 0) return;
      const p = pos(e);
      if (last) stroke(last.x, last.y, p.x, p.y);
      last = p;
      if (!touched) { touched = true; hint && hint.classList.add("is-off"); }
    });
    fogCanvas.addEventListener("pointerleave", () => { last = null; });
    fogCanvas.addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") last = null; });
    // a quick tap clears everything — handy on phones
    let tapT = 0, tapP = null;
    fogCanvas.addEventListener("pointerdown", (e) => { tapT = performance.now(); tapP = pos(e); });
    fogCanvas.addEventListener("pointerup", (e) => {
      const p = pos(e);
      if (e.pointerType !== "mouse" && tapP && performance.now() - tapT < 250 && Math.hypot(p.x - tapP.x, p.y - tapP.y) < 8) autoWipe(true);
    });

    // demo stroke when the panel first comes into view
    function autoWipe(full) {
      const pts = [];
      const rowsN = full ? 6 : 1;
      for (let k = 0; k < rowsN; k++) {
        const y = full ? H * (0.1 + k * 0.16) : H * 0.55;
        const from = k % 2 ? W * 0.95 : W * 0.05, to = k % 2 ? W * 0.05 : W * 0.95;
        for (let i = 0; i <= 24; i++) {
          const t = i / 24;
          pts.push({ x: lerp(from, to, t), y: y + Math.sin(t * Math.PI * 2) * H * (full ? 0.03 : 0.12) });
        }
        if (!full) break;
      }
      let i = 1;
      (function step() {
        if (i >= pts.length || (done && full)) { if (full) finish(); else measure(); return; }
        stroke(pts[i - 1].x, pts[i - 1].y, pts[i].x, pts[i].y);
        i++;
        requestAnimationFrame(step);
      })();
    }

    paintFog();
    let rT;
    addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(() => { if (!done) paintFog(); }, 200); });
    const fogIO = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        fogPanel.classList.add("in-view");
        fogIO.disconnect();
        setTimeout(() => { if (!touched) autoWipe(false); }, 900);
      }
    }, { threshold: 0.45 });
    fogIO.observe(fogPanel);
  }
})();
