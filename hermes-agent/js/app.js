/* ==========================================================================
   Hermes Agent — interactions
   Preloader · smooth scroll · scroll choreography · cursor · magnetic UI ·
   learning loop · memory search · gateway chat · terminal · cron parser ·
   model ring · install tabs · FAQ · command palette
   ========================================================================== */
(function () {
  'use strict';

  var H = (window.HERMES = window.HERMES || {});
  var state = (H.state = H.state || { morph: 0, pulse: 0, ready: false });

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  if (hasGSAP) { gsap.registerPlugin(ScrollTrigger); ScrollTrigger.config({ ignoreMobileResize: true }); }
  else root.classList.add('no-gsap');

  /* ======================================================================
     Utilities
     ====================================================================== */
  var toastEl = $('#toast'), toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.querySelector('span').textContent = msg || 'Скопировано';
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1900);
  }

  function copyText(text) {
    var done = function () { toast('Скопировано в буфер обмена'); state.pulse = Math.max(state.pulse, 0.7); };
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    }
    fallbackCopy(text); done();
    return Promise.resolve();
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { /* noop */ }
    ta.remove();
  }

  function onVisible(el, cb, opts) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { cb(true); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { cb(e.isIntersecting, io); });
    }, opts || { threshold: 0.25 });
    io.observe(el);
    return io;
  }

  /* ======================================================================
     Text splitting
     ====================================================================== */
  function splitWords(el) {
    var nodes = Array.prototype.slice.call(el.childNodes);
    nodes.forEach(function (node) {
      if (node.nodeType === 3) {
        var frag = document.createDocumentFragment();
        node.textContent.split(/( +)/).forEach(function (part) {
          if (!part) return;
          if (/^ +$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          var w = document.createElement('span'); w.className = 'word';
          var i = document.createElement('span'); i.className = 'word__in'; i.textContent = part;
          w.appendChild(i); frag.appendChild(w);
        });
        node.replaceWith(frag);
      } else if (node.nodeType === 1) {
        if (node.tagName === 'EM') {
          var w2 = document.createElement('span'); w2.className = 'word word--em';
          var i2 = document.createElement('span'); i2.className = 'word__in';
          node.replaceWith(w2); i2.appendChild(node); w2.appendChild(i2);
        } else if (node.tagName !== 'BR') splitWords(node);
      }
    });
  }
  function splitManifesto(el) {
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var frag = document.createDocumentFragment();
        node.textContent.split(/( +)/).forEach(function (part) {
          if (!part) return;
          if (/^ +$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          var s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s);
        });
        node.replaceWith(frag);
      } else if (node.nodeType === 1) splitManifesto(node);
    });
  }
  $$('[data-split]').forEach(splitWords);
  $$('[data-words]').forEach(splitManifesto);

  // counters show real numbers without JS; reset for the count-up
  if (hasGSAP && !reduce) $$('[data-count]').forEach(function (el) { el.textContent = '0'; });

  /* ======================================================================
     Smooth scroll (Lenis)
     ====================================================================== */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
    if (hasGSAP) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  H.lenis = lenis;

  function scrollToTarget(target, offset) {
    var el = typeof target === 'string' ? $(target) : target;
    if (!el && typeof target !== 'number') return;
    if (lenis) lenis.scrollTo(el || target, { offset: offset || 0, duration: 1.8, easing: function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; } });
    else if (typeof target === 'number') window.scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' });
    else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
  H.scrollTo = scrollToTarget;

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id.length < 2 || !$(id)) return;
    e.preventDefault();
    closeMenu();
    scrollToTarget(id === '#top' ? 0 : id);
  });

  /* ======================================================================
     Preloader + intro
     ====================================================================== */
  function runPreloader() {
    var el = $('#loader');
    if (!el) return Promise.resolve();
    var num = $('#loader-num'), bar = $('.loader__bar span'), boots = $$('.loader__boot li');
    var sceneReady = !!state.ready, fontsReady = !document.fonts;
    window.addEventListener('hermes:scene-ready', function () { sceneReady = true; });
    if (document.fonts) document.fonts.ready.then(function () { fontsReady = true; });
    if (lenis) lenis.stop();
    root.style.overflow = 'hidden';

    var start = performance.now(), p = 0;
    return new Promise(function (resolve) {
      (function tick() {
        var t = performance.now() - start;
        var ready = (sceneReady && fontsReady) || t > 8000;
        var target = ready && t > (reduce ? 200 : 1100) ? 100 : Math.min(90, t / 15);
        p += (target - p) * (ready ? 0.14 : 0.07);
        if (target === 100 && 100 - p < 0.8) p = 100;
        num.textContent = String(Math.floor(p)).padStart(3, '0');
        bar.style.transform = 'scaleX(' + (p / 100) + ')';
        boots.forEach(function (li) { if (p >= +li.dataset.at) li.classList.add('is-done'); });
        if (p >= 100) return resolve();
        requestAnimationFrame(tick);
      })();
    }).then(function () {
      return new Promise(function (resolve) {
        var finish = function () {
          el.classList.add('is-gone');
          root.style.overflow = '';
          if (lenis) lenis.start();
        };
        if (hasGSAP && !reduce) {
          gsap.timeline({ onComplete: finish })
            .to('.loader__center, .loader__boot, .loader__count', { opacity: 0, y: -24, duration: 0.5, ease: 'power2.in', stagger: 0.06 })
            .add(resolve, '-=0.05')
            .to(el, { clipPath: 'inset(0 0 100% 0)', duration: 1.15, ease: 'expo.inOut' }, '-=0.05');
        } else { finish(); resolve(); }
      });
    });
  }

  function heroIntro() {
    state.pulse = 1;
    if (!hasGSAP || reduce) return;
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .from('.hero__title .line__in', { yPercent: 115, rotate: 5, duration: 1.7, stagger: 0.12 }, 0.2)
      .from('[data-hero]', { y: 34, opacity: 0, duration: 1.3, stagger: 0.1 }, 0.6)
      .from('.nav', { y: -40, opacity: 0, duration: 1.3 }, 0.3)
      .from('.hud, .scroll-badge, .rail', { opacity: 0, duration: 1.4, stagger: 0.06 }, 0.8);
  }

  /* ======================================================================
     Scroll choreography
     ====================================================================== */
  var progressBar = $('.scroll-progress span'), nav = $('#nav'), lastY = 0;
  function onScroll() {
    var y = lenis ? lenis.scroll : window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    if (nav) {
      nav.classList.toggle('is-scrolled', y > 40);
      if (!menuOpen) {
        if (y > lastY + 6 && y > 400) nav.classList.add('is-hidden');
        else if (y < lastY - 6) nav.classList.remove('is-hidden');
      }
    }
    lastY = y;
  }
  if (lenis) lenis.on('scroll', onScroll); else window.addEventListener('scroll', onScroll, { passive: true });

  var currentShape = 0, morphTarget = 0;
  function setShape(n) {
    if (n === currentShape) return;
    currentShape = n;
    if (hasGSAP) gsap.to(state, { morph: n, duration: reduce ? 0.01 : 2.4, ease: 'power2.inOut', overwrite: true });
    else morphTarget = n;
  }
  if (!hasGSAP) (function lerpMorph() { state.morph += (morphTarget - state.morph) * 0.04; requestAnimationFrame(lerpMorph); })();

  var railLinks = $$('.rail a'), navLinks = $$('.nav__links a');
  function setActive(id) {
    railLinks.forEach(function (a) { a.classList.toggle('is-active', a.dataset.rail === id); });
    navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + id); });
  }

  function setupScroll() {
    if (!hasGSAP) {
      $$('[data-shape]').forEach(function (sec) {
        onVisible(sec, function (vis) { if (vis) setShape(+sec.dataset.shape); }, { threshold: 0.4 });
      });
      $$('[data-count]').forEach(function (el) { el.textContent = el.dataset.count; });
      return;
    }

    var mm = gsap.matchMedia();

    /* --- pinned: learning loop (desktop) --- */
    mm.add('(min-width: 1025px)', function () {
      var st = ScrollTrigger.create({
        trigger: '#loop', start: 'top top', end: '+=280%', pin: true, anticipatePin: 1,
        onUpdate: function (self) { var i = Math.min(4, Math.floor(self.progress * 5)); if (i !== loop.current) loop.set(i); }
      });
      loop.pinned = st;
      return function () { loop.pinned = null; };
    });

    /* --- pinned: horizontal capabilities (desktop) --- */
    mm.add('(min-width: 901px)', function () {
      var track = $('#caps-track');
      var dist = function () { return Math.max(0, track.scrollWidth - document.documentElement.clientWidth); };
      var tw = gsap.to(track, {
        x: function () { return -dist(); }, ease: 'none',
        scrollTrigger: { trigger: '#caps', start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 }
      });
      return function () { gsap.set(track, { x: 0 }); };
    });

    /* --- particle morph per section --- */
    var shapeSecs = $$('[data-shape]');
    shapeSecs.forEach(function (sec, i) {
      ScrollTrigger.create({
        trigger: sec, start: 'top 62%',
        onEnter: function () { setShape(+sec.dataset.shape); },
        onLeaveBack: function () { setShape(i ? +shapeSecs[i - 1].dataset.shape : 0); }
      });
    });

    /* --- active chapter --- */
    var ids = railLinks.map(function (a) { return a.dataset.rail; });
    ids.forEach(function (id, i) {
      var sec = document.getElementById(id);
      if (!sec) return;
      ScrollTrigger.create({
        trigger: sec, start: 'top 50%',
        onEnter: function () { setActive(id); },
        onLeaveBack: function () { setActive(ids[Math.max(0, i - 1)]); }
      });
    });
    setActive('top');

    /* --- hero parallax out --- */
    if (!reduce) {
      gsap.to('.hero__inner', { yPercent: -12, opacity: 0.15, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hud, .scroll-badge', { opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: '20% top', end: '60% top', scrub: true } });
    }

    /* --- heading reveals --- */
    $$('[data-split]').forEach(function (h) {
      gsap.from(h.querySelectorAll('.word__in'), {
        yPercent: 118, rotate: 4, duration: 1.35, stagger: 0.055, ease: 'expo.out',
        scrollTrigger: { trigger: h, start: 'top 86%', once: true }
      });
    });

    /* --- generic reveals --- */
    gsap.set('[data-reveal]', { y: 44, opacity: 0 });
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%', once: true,
      onEnter: function (batch) { gsap.to(batch, { y: 0, opacity: 1, duration: 1.3, ease: 'expo.out', stagger: 0.09, overwrite: true, clearProps: 'transform' }); }
    });

    /* --- manifesto words light up --- */
    var words = $$('.manifesto__text .w');
    if (words.length) {
      gsap.to(words, {
        opacity: 1, stagger: 0.12, ease: 'none',
        scrollTrigger: { trigger: '.manifesto__text', start: 'top 78%', end: 'bottom 42%', scrub: 0.6 }
      });
    }

    /* --- counters --- */
    $$('[data-count]').forEach(function (el) {
      var end = +el.dataset.count;
      ScrollTrigger.create({
        trigger: el, start: 'top 92%', once: true,
        onEnter: function () {
          var o = { v: 0 };
          gsap.to(o, { v: end, duration: 2.2, ease: 'power3.out', onUpdate: function () { el.textContent = Math.round(o.v); } });
        }
      });
    });

    /* --- marquee skew with velocity --- */
    if (!reduce) {
      var skewTo = gsap.quickTo('.marquee__track', 'skewX', { duration: 0.5, ease: 'power3' });
      ScrollTrigger.create({
        trigger: '.marquee', start: 'top bottom', end: 'bottom top',
        onUpdate: function (self) { skewTo(Math.max(-8, Math.min(8, self.getVelocity() / -250))); }
      });
    }

    /* --- final title --- */
    if (!reduce) {
      gsap.from('.final__logo', { scale: 0.4, opacity: 0, rotate: -90, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.final', start: 'top 70%', once: true } });
    }

    /* --- traits bars --- */
    var traits = $('#traits');
    if (traits) ScrollTrigger.create({ trigger: traits, start: 'top 85%', once: true, onEnter: function () { traits.classList.add('is-in'); } });

    // pins alter layout → refresh once fonts are ready
    if (document.fonts) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }

  /* ======================================================================
     Cursor + magnetic + tilt + spotlight
     ====================================================================== */
  function setupPointerFX() {
    if (!finePointer) return;
    root.classList.add('has-cursor');
    var cur = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('.cursor__label');
    var mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)'; }, { passive: true });
    (function loopCursor() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(loopCursor);
    })();
    document.addEventListener('pointerover', function (e) {
      var t = e.target;
      var txt = t.closest('input, .term__screen');
      var lab = t.closest('[data-cursor]');
      var hov = t.closest('a, button, summary, [role="tab"], .platform, .step');
      cur.classList.toggle('is-text', !!txt && !lab);
      cur.classList.toggle('is-label', !!lab && !txt);
      cur.classList.toggle('is-hover', !!hov && !lab && !txt);
      label.textContent = lab ? lab.getAttribute('data-cursor') : '';
    });
    document.addEventListener('pointerdown', function () { cur.classList.add('is-down'); });
    document.addEventListener('pointerup', function () { cur.classList.remove('is-down'); });
    document.addEventListener('mouseleave', function () { mx = my = -100; });

    if (!hasGSAP || reduce) return;

    // magnetic buttons
    $$('[data-magnetic]').forEach(function (el) {
      var xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
      var yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        xTo(dx * 0.28); yTo(dy * 0.38);
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
      el.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
    });

    // 3D tilt
    $$('[data-tilt], .be, .cap, .istep').forEach(function (el) {
      var strength = el.hasAttribute('data-tilt') ? 7 : 5;
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(el, { rotateY: px * strength * 1.4, rotateX: -py * strength, transformPerspective: 1100, duration: 0.7, ease: 'power3.out' });
      });
      el.addEventListener('pointerleave', function () { gsap.to(el, { rotateY: 0, rotateX: 0, duration: 1.1, ease: 'elastic.out(1, 0.5)' }); });
    });

    // spotlight borders
    $$('[data-spot]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ======================================================================
     Mobile menu
     ====================================================================== */
  var menuOpen = false, burger = $('.nav__burger'), menu = $('#mobile-menu');
  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false; menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false'); burger.querySelector('use').setAttribute('href', '#i-menu');
    if (lenis) lenis.start();
  }
  if (burger) burger.addEventListener('click', function () {
    if (menuOpen) return closeMenu();
    menuOpen = true; menu.classList.add('is-open'); menu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true'); burger.querySelector('use').setAttribute('href', '#i-x');
    nav.classList.remove('is-hidden');
    if (lenis) lenis.stop();
  });

  /* ======================================================================
     HUD clock
     ====================================================================== */
  var clockEl = $('#hud-clock');
  if (clockEl) {
    var tickClock = function () { var d = new Date(); clockEl.textContent = [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()].map(function (n) { return String(n).padStart(2, '0'); }).join(':'); };
    tickClock(); setInterval(tickClock, 1000);
  }

  /* ======================================================================
     Copy buttons
     ====================================================================== */
  $$('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyText(btn.getAttribute('data-copy'));
      btn.classList.add('is-copied');
      var use = btn.querySelector('.cmd__icon use');
      if (use) use.setAttribute('href', '#i-check');
      setTimeout(function () { btn.classList.remove('is-copied'); if (use) use.setAttribute('href', '#i-copy'); }, 1700);
    });
  });

  /* ======================================================================
     01 — Learning loop
     ====================================================================== */
  var LOOP = [
    { title: 'telegram · @hermes', badge: 'ЗАДАЧА', html:
      '<div class="msg msg--user">Задеплой ветку <code>feature/auth</code> на staging и проверь health‑check</div>' +
      '<div class="msg msg--bot"><span class="tag">память</span>Ищу похожий опыт… Навыка для этой задачи пока нет — выполню вручную и запомню, как это делается.</div>' },
    { title: 'hermes · docker sandbox', badge: 'ДЕЙСТВИЕ', html:
      '<div class="tool"><b>terminal</b> › git fetch origin &amp;&amp; git checkout feature/auth <span class="ok">✓</span></div>' +
      '<div class="tool" style="animation-delay:.15s"><b>terminal</b> › docker compose -f staging.yml up -d --build <span class="ok">✓ 38s</span></div>' +
      '<div class="tool" style="animation-delay:.3s"><b>web</b> › GET staging.acme.dev/health → <span class="t-red">502</span></div>' +
      '<div class="tool" style="animation-delay:.45s"><b>terminal</b> › docker restart nginx → health <span class="ok">200 OK</span></div>' +
      '<div class="msg msg--bot" style="animation-delay:.6s">Готово: ветка на staging, health‑check зелёный. По пути пришлось перезапустить nginx.</div>' },
    { title: 'hermes · reflection', badge: 'РЕФЛЕКСИЯ', html:
      '<div class="msg msg--bot"><span class="tag">анализ</span>Задача заняла 14 шагов и повторяется каждую неделю. Стоит сохранить её как навык.</div>' +
      '<div class="reflect" style="animation-delay:.15s">' +
        '<div><span>Шагов выполнено</span><b>14</b></div>' +
        '<div><span>Ошибок в пути</span><b class="t-red">1 · nginx 502</b></div>' +
        '<div><span>Повторяемость</span><span class="meter"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span></div>' +
        '<div><span>Решение</span><b class="t-green">создать навык</b></div>' +
      '</div>' },
    { title: '~/.hermes/skills/deploy-staging/SKILL.md', badge: 'НАВЫК', html:
      '<div class="codefile"><span class="c">---</span>\n<span class="k">name:</span> <span class="s">deploy-staging</span>\n<span class="k">description:</span> <span class="s">Деплой ветки на staging с проверкой health</span>\n<span class="c">---</span>\n# Deploy to staging\n1. git fetch &amp;&amp; git checkout {branch}\n2. docker compose -f staging.yml up -d --build\n3. curl -fsS $STAGING_URL/health\n4. Отчитаться в исходный чат</div>' +
      '<div class="msg msg--bot" style="animation-delay:.2s"><span class="tag">навык</span>Сохранил. В следующий раз хватит одной фразы.</div>' },
    { title: 'SKILL.md · v2 → v3', badge: 'УЛУЧШЕНИЕ', html:
      '<div class="codefile">3. curl -fsS $STAGING_URL/health<span class="add">+ 3a. Если 502 — docker restart nginx и повторить</span><span class="add">+ 3b. Проверить миграции: alembic current</span>4. Отчитаться в исходный чат</div>' +
      '<div class="reflect" style="animation-delay:.15s">' +
        '<div><span>Версия навыка</span><b>v3</b></div>' +
        '<div><span>Успешных запусков</span><b class="t-green">12 / 12</b></div>' +
        '<div><span>Шагов на задачу</span><b>14 → 4</b></div>' +
      '</div>' }
  ];

  var loop = { current: 0, pinned: null, userTouched: false };
  (function setupLoop() {
    var steps = $$('.step'), nodes = $$('.orbit__node'), fill = $('.orbit__fill');
    var title = $('#loop-title'), badge = $('#loop-badge'), body = $('#loop-body'), foot = $('#loop-foot'), prog = $('#loop-progress');
    if (!body) return;
    loop.set = function (i) {
      loop.current = i;
      steps.forEach(function (s, k) {
        var on = k === i;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-selected', on ? 'true' : 'false');
        s.tabIndex = on ? 0 : -1;
      });
      nodes.forEach(function (n, k) { n.classList.toggle('is-on', k <= i); });
      if (fill) fill.style.strokeDashoffset = String(1 - (i + 1) / 5);
      title.textContent = LOOP[i].title; badge.textContent = LOOP[i].badge;
      body.innerHTML = LOOP[i].html;
      foot.textContent = 'step ' + (i + 1) + '/5';
      prog.style.width = ((i + 1) * 20) + '%';
      if (i === 3) state.pulse = Math.max(state.pulse, 0.5);
    };
    function go(i) {
      loop.userTouched = true;
      var st = loop.pinned;
      if (st) scrollToTarget(st.start + (st.end - st.start) * ((i + 0.5) / 5));
      else loop.set(i);
    }
    steps.forEach(function (s, k) {
      s.addEventListener('click', function () { go(k); });
      s.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(k); }
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(Math.min(4, k + 1)); steps[Math.min(4, k + 1)].focus(); }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(Math.max(0, k - 1)); steps[Math.max(0, k - 1)].focus(); }
      });
    });
    // autoplay when not pinned (mobile / tablet)
    var timer = null;
    onVisible($('#loop'), function (vis) {
      clearInterval(timer);
      if (vis && !loop.pinned) timer = setInterval(function () { if (!loop.userTouched && !loop.pinned) loop.set((loop.current + 1) % 5); }, 3800);
    }, { threshold: 0.35 });
  })();

  /* ======================================================================
     02 — Memory
     ====================================================================== */
  var SESSIONS = [
    { d: '28 сен', p: 'Slack', t: 'Миграция БД: orders и payments', x: 'Перенесли users, products и carts на новую схему. Остались orders и payments — продолжим в Docker‑песочнице.' },
    { d: '24 сен', p: 'Telegram', t: 'Еженедельный отчёт по GitHub', x: 'Собрал отчёт: 18 коммитов, 4 открытых PR. Настроили автоматическую отправку по понедельникам.' },
    { d: '19 сен', p: 'CLI', t: 'Рефакторинг API на TypeScript', x: 'Перевели сервис авторизации с JavaScript на TypeScript, добавили строгие типы и zod‑схемы.' },
    { d: '15 сен', p: 'Signal', t: 'Проверка SSL‑сертификатов', x: 'Проверили 6 доменов. У api.acme.dev сертификат истекал через 9 дней — обновили через certbot.' },
    { d: '11 сен', p: 'WhatsApp', t: 'Меню без глютена', x: 'Голосовое: составили меню на неделю без глютена и список покупок из 14 позиций.' },
    { d: '06 сен', p: 'Discord', t: 'Changelog к релизу 2.4', x: 'Сгруппировали 23 PR: 5 фич, 12 фиксов, 6 chore. Черновик changelog опубликован в треде.' },
    { d: '02 сен', p: 'Email', t: 'Отчёт по инцидентам за август', x: '3 инцидента, средний MTTR 42 минуты. Главная причина — переполнение диска на воркере.' },
    { d: '29 авг', p: 'Telegram', t: 'Первый деплой на staging', x: 'Ручной деплой feature/auth за 14 шагов. После него появился навык deploy-staging.' }
  ];
  (function setupMemory() {
    var input = $('#mem-search'), list = $('#mem-results'), meta = $('#mem-meta'), summary = $('#mem-summary');
    if (!input) return;
    var norm = function (s) { return s.toLowerCase().replace(/ё/g, 'е'); };
    var stem = function (w) { return w.length > 5 ? w.slice(0, -2) : w; };
    var reFor = function (w) { return new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/е/g, '[её]') + ')', 'gi'); };
    function hl(text, terms) {
      var out = esc(text);
      terms.forEach(function (t) { out = out.replace(reFor(esc(t)), '<mark>$1</mark>'); });
      return out;
    }
    function render(q) {
      var t0 = performance.now();
      var terms = norm(q).split(/[\s,.;:!?]+/).filter(Boolean).map(stem);
      var hits = SESSIONS.filter(function (s) {
        var hay = norm(s.t + ' ' + s.x + ' ' + s.p);
        return terms.every(function (t) { return hay.indexOf(t) !== -1; });
      });
      var ms = (performance.now() - t0).toFixed(2);
      meta.textContent = terms.length ? hits.length + ' из ' + SESSIONS.length + ' · ' + ms + ' мс' : SESSIONS.length + ' сессий';
      if (!hits.length) {
        list.innerHTML = '<li class="empty" style="display:block">Ничего не нашлось — но если расскажете, Hermes запомнит.</li>';
        summary.hidden = true; return;
      }
      list.innerHTML = hits.map(function (s, i) {
        return '<li style="animation-delay:' + (i * 0.04) + 's"><div class="r-meta"><b>' + s.d + '</b>' + s.p + '</div>' +
          '<div class="r-title">' + hl(s.t, terms) + '</div><div class="r-text">' + hl(s.x, terms) + '</div></li>';
      }).join('');
      if (terms.length) {
        var top = hits[0];
        summary.innerHTML = '<span class="tag">LLM‑сводка</span>' + (hits.length > 1 ? 'Нашлось ' + hits.length + ' обсуждения. ' : '') +
          'Последний раз — <b>' + top.d + '</b> в ' + top.p + ': «' + esc(top.t) + '». ' + esc(top.x.split('. ')[0]) + '.';
        summary.hidden = false;
        summary.style.animation = 'none'; void summary.offsetWidth; summary.style.animation = '';
      } else summary.hidden = true;
    }
    input.addEventListener('input', function () { render(input.value.trim()); });
    $$('[data-q]').forEach(function (b) { b.addEventListener('click', function () { input.value = b.dataset.q; render(b.dataset.q); }); });
    render('');

    // legend ↔ plates
    var plates = $$('.plate'), stack = $('.stack');
    $$('.legend li').forEach(function (li) {
      var k = li.dataset.layer;
      li.addEventListener('mouseenter', function () { stack.classList.add('is-open'); $('.plate--' + k).classList.add('is-hot'); li.classList.add('is-hot'); });
      li.addEventListener('mouseleave', function () { stack.classList.remove('is-open'); plates.forEach(function (p) { p.classList.remove('is-hot'); }); li.classList.remove('is-hot'); });
    });
  })();

  /* ======================================================================
     03 — Gateway chat
     ====================================================================== */
  function voiceHTML(len) {
    var bars = '';
    for (var i = 0; i < 26; i++) bars += '<i style="height:' + (4 + Math.round(Math.abs(Math.sin(i * 1.7) * 16) + (i % 3) * 2)) + 'px"></i>';
    return '<div class="voice"><span class="voice__play"></span><span class="voice__wave">' + bars + '</span><small>' + len + '</small></div>';
  }
  var CHATS = {
    telegram: { name: 'Hermes', sub: 'бот · онлайн', color: '#4fb6ff', label: 'Telegram', msgs: [
      ['u', 'Что с миграцией? На чём мы остановились?'],
      ['b', 'Вчера в Slack перенесли 3 из 5 таблиц. Остались <b>orders</b> и <b>payments</b>. Продолжить в Docker‑песочнице?'],
      ['u', 'Да, погнали 🚀'],
      ['b', '<span class="tag">terminal</span>alembic upgrade head ✓<br>Миграция завершена, тесты зелёные.']
    ] },
    discord: { name: '#dev · Hermes', sub: 'приложение · в сети', color: '#8b93ff', label: 'Discord', msgs: [
      ['u', '@Hermes собери changelog с прошлого релиза'],
      ['b', 'Нашёл 23 PR с тега v2.3. Сгруппировал: <b>5 фич</b>, <b>12 фиксов</b>, 6 chore.'],
      ['b', 'Черновик — в треде 👇 Отметить авторов?']
    ] },
    slack: { name: 'Hermes', sub: 'приложение · #ops', color: '#ff7ab8', label: 'Slack', msgs: [
      ['u', 'Подготовь сводку по инцидентам за неделю'],
      ['b', '<span class="tag">навык</span>weekly-incidents v4<br>3 инцидента, MTTR 42 мин. Главная причина — диск на воркере.'],
      ['u', 'Присылай это каждый понедельник'],
      ['b', 'Готово: cron <b>0 9 * * 1</b>, доставка в #ops.']
    ] },
    whatsapp: { name: 'Hermes', sub: 'в сети', color: '#4be08a', label: 'WhatsApp', msgs: [
      ['u', voiceHTML('0:07')],
      ['b', '🎙 <i>«Собери список покупок на неделю по моему рациону»</i>'],
      ['b', 'Учёл, что вы не едите глютен. Список из 14 позиций готов — отправить в заметки?']
    ] },
    signal: { name: 'Hermes', sub: 'защищённый чат', color: '#6f9bff', label: 'Signal', msgs: [
      ['u', 'Проверь, не истекают ли SSL‑сертификаты на моих доменах'],
      ['b', 'Проверил 6 доменов. <b>api.acme.dev</b> истекает через 9 дней.'],
      ['b', 'Обновить через certbot? Нужно ваше подтверждение.'],
      ['u', 'Подтверждаю ✅']
    ] },
    email: { name: 'hermes@acme.dev', sub: 'Re: недельный отчёт', color: '#f4c66a', label: 'Email', msgs: [
      ['u', '<b>Тема:</b> сводка по GitHub<br>Пришли, пожалуйста, итоги недели.'],
      ['b', 'Добрый день! Итоги недели:<br>• 18 коммитов, 4 открытых PR<br>• 2 PR ждут вашего ревью<br>• CI зелёный на main<br><br>— Hermes']
    ] },
    cli: { name: 'hermes', sub: '~/projects/acme', color: '#67e8ff', label: 'CLI', msgs: [
      ['u', 'почему падает test_auth?'],
      ['b', '<span class="t-cyan">⚙ terminal</span> pytest tests/test_auth.py -x'],
      ['b', '<span class="t-red">✗</span> token expired: часы в контейнере отстают на 5 мин'],
      ['b', '<span class="t-green">✓</span> добавил freezegun в фикстуру — 42 passed']
    ] }
  };
  (function setupGateway() {
    var phone = $('#phone'), body = $('#phone-body'), nameEl = $('#phone-name'), subEl = $('#phone-sub'), platEl = $('#phone-plat');
    if (!phone) return;
    var btns = $$('.platform'), order = btns.map(function (b) { return b.dataset.platform; });
    var token = 0, current = 'telegram', autoplay = true, visible = false, nextTimer = null;

    function play(key) {
      var c = CHATS[key], my = ++token;
      current = key;
      clearTimeout(nextTimer);
      btns.forEach(function (b) { var on = b.dataset.platform === key; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', on ? 'true' : 'false'); });
      phone.style.setProperty('--pc', c.color);
      phone.classList.toggle('phone--cli', key === 'cli');
      phone.classList.toggle('phone--email', key === 'email');
      nameEl.textContent = c.name; subEl.textContent = c.sub; platEl.textContent = c.label;
      body.innerHTML = '';
      var minute = 41;
      (async function () {
        for (var i = 0; i < c.msgs.length; i++) {
          if (my !== token) return;
          var m = c.msgs[i];
          if (m[0] === 'b') {
            var ty = document.createElement('div'); ty.className = 'typing'; ty.innerHTML = '<i></i><i></i><i></i>';
            body.appendChild(ty);
            await wait(reduce ? 50 : 850);
            if (my !== token) return;
            ty.remove();
          } else await wait(reduce ? 50 : (i ? 700 : 300));
          if (my !== token) return;
          var el = document.createElement('div');
          el.className = 'msg ' + (m[0] === 'u' ? 'msg--user' : 'msg--bot');
          el.innerHTML = m[1] + (key === 'cli' ? '' : '<time>09:' + (minute++) + '</time>');
          body.appendChild(el);
        }
        if (autoplay && visible && my === token) nextTimer = setTimeout(function () { play(order[(order.indexOf(current) + 1) % order.length]); }, 3200);
      })();
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { autoplay = false; play(b.dataset.platform); }); });
    var started = false;
    onVisible(phone, function (vis) {
      visible = vis;
      if (vis && !started) { started = true; play('telegram'); }
      else if (vis && autoplay && !nextTimer) play(current);
      if (!vis) { clearTimeout(nextTimer); nextTimer = null; }
    }, { threshold: 0.3 });
  })();

  /* ======================================================================
     04 — Terminal
     ====================================================================== */
  var term = (function setupTerminal() {
    var screen = $('#term-screen'), out = $('#term-out'), input = $('#term-input'), ps = $('#term-ps');
    if (!screen) return null;
    var mode = 'shell', busy = false, hist = [], hi = 0, model = 'nous:hermes-4-405b', personality = 'helpful';
    var autoplayCancelled = false;

    var PS_SHELL = '<b class="t-green">➜</b> <b class="t-cyan">~</b>';
    var PS_CHAT = '<b class="t-gold">☤ ›</b>';

    function line(html, cls) {
      var d = document.createElement('div');
      if (cls) d.className = cls;
      d.innerHTML = html == null ? '' : html;
      out.appendChild(d);
      screen.scrollTop = screen.scrollHeight;
      return d;
    }
    function lines(arr) { arr.forEach(function (l) { line(l); }); }
    async function slow(arr, delay) { for (var i = 0; i < arr.length; i++) { line(arr[i]); await wait(reduce ? 0 : delay || 110); } }
    function echo(cmd) { line((mode === 'shell' ? PS_SHELL : PS_CHAT) + ' ' + esc(cmd)); }
    function setMode(m) { mode = m; ps.innerHTML = m === 'shell' ? PS_SHELL : PS_CHAT; }

    async function typeText(el, text, speed) {
      for (var i = 0; i < text.length; i++) {
        el.textContent += text[i];
        screen.scrollTop = screen.scrollHeight;
        if (!reduce) await wait(speed || 12);
      }
    }
    async function spinner(label, ms) {
      var frames = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏', d = line('<span class="spin-ch">⠋</span> <span class="t-dim">' + label + '</span>'), s = d.firstChild, t0 = performance.now(), k = 0;
      while (performance.now() - t0 < (reduce ? 50 : ms)) { s.textContent = frames[k++ % frames.length]; await wait(70); }
      d.remove();
    }

    var SKILLS = ['deploy-staging        v3  · 12 запусков', 'weekly-incidents      v4  · 31 запуск', 'github-digest         v2  · 18 запусков', 'ssl-audit             v1  · 4 запуска', 'db-backup             v2  · 60 запусков', 'changelog-writer      v1  · 7 запусков'];

    var SHELL = {
      help: function () {
        lines([
          '<span class="t-gold">Hermes Agent — демо‑терминал</span>',
          '',
          '  <span class="t-cyan">hermes</span>                 интерактивный чат с агентом',
          '  <span class="t-cyan">hermes model</span>           выбрать провайдера и модель',
          '  <span class="t-cyan">hermes tools</span>           включённые инструменты',
          '  <span class="t-cyan">hermes gateway</span>         запустить шлюз мессенджеров',
          '  <span class="t-cyan">hermes setup</span>           мастер настройки',
          '  <span class="t-cyan">hermes doctor</span>          диагностика',
          '  <span class="t-cyan">hermes update</span>          обновление',
          '  <span class="t-cyan">hermes claw migrate</span>    переезд с OpenClaw',
          '  <span class="t-cyan">ls ~/.hermes</span>  <span class="t-cyan">cat SOUL.md</span>  <span class="t-cyan">clear</span>',
          '',
          '<span class="t-dim">↑/↓ — история · Tab — автодополнение · Ctrl+L — очистить</span>'
        ]);
      },
      hermes: async function () {
        await spinner('запуск агента…', 700);
        lines([
          '<span class="t-banner">  ╦ ╦╔═╗╦═╗╔╦╗╔═╗╔═╗\n  ╠═╣║╣ ╠╦╝║║║║╣ ╚═╗   ☤  A G E N T\n  ╩ ╩╚═╝╩╚═╩ ╩╚═╝╚═╝</span>',
          '',
          '  <span class="t-dim">модель</span>     ' + esc(model),
          '  <span class="t-dim">память</span>     142 факта · 38 навыков · 214 сессий',
          '  <span class="t-dim">шлюз</span>       telegram <span class="t-green">●</span> discord <span class="t-green">●</span> slack <span class="t-green">●</span>',
          '  <span class="t-dim">бэкенд</span>     docker <span class="t-dim">(изолировано)</span>',
          '',
          '<span class="t-muted">Напишите сообщение или /help. Выход — /exit</span>'
        ]);
        setMode('chat');
        state.pulse = Math.max(state.pulse, 0.6);
      },
      'hermes model': async function () {
        lines(['<span class="t-gold">?</span> Выберите провайдера:',
          '  <span class="t-gold">❯ Nous Portal</span>        <span class="t-dim">300+ моделей · Tool Gateway</span>',
          '    OpenRouter         <span class="t-dim">сотни моделей по одному ключу</span>',
          '    OpenAI',
          '    Custom endpoint    <span class="t-dim">vLLM · Ollama · llama.cpp</span>']);
        await spinner('проверка ключа…', 600);
        line('<span class="t-green">✓</span> Модель: <span class="t-gold">' + esc(model) + '</span> <span class="t-dim">— без изменений в коде</span>');
      },
      'hermes tools': function () {
        lines(['<span class="t-gold">Наборы инструментов</span>',
          '  <span class="t-green">✓</span> terminal     <span class="t-dim">shell · docker · ssh · modal</span>',
          '  <span class="t-green">✓</span> web          <span class="t-dim">поиск · извлечение · облачный браузер</span>',
          '  <span class="t-green">✓</span> files        <span class="t-dim">чтение · запись · патчи · поиск</span>',
          '  <span class="t-green">✓</span> vision       <span class="t-dim">анализ изображений</span>',
          '  <span class="t-green">✓</span> image_gen    <span class="t-dim">генерация изображений</span>',
          '  <span class="t-green">✓</span> tts          <span class="t-dim">голосовые ответы</span>',
          '  <span class="t-green">✓</span> memory       <span class="t-dim">MEMORY.md · USER.md · поиск по сессиям</span>',
          '  <span class="t-green">✓</span> skills       <span class="t-dim">38 навыков</span>',
          '  <span class="t-green">✓</span> cron         <span class="t-dim">планировщик</span>',
          '  <span class="t-green">✓</span> delegate     <span class="t-dim">субагенты</span>',
          '  <span class="t-dim">○ mcp          подключите любой MCP‑сервер</span>']);
      },
      'hermes gateway': async function () {
        line('<span class="t-gold">☤</span> Запуск шлюза сообщений…');
        await slow([
          '  <span class="t-green">●</span> telegram   подключён   <span class="t-dim">@my_hermes_bot</span>',
          '  <span class="t-green">●</span> discord    подключён   <span class="t-dim">acme · #dev</span>',
          '  <span class="t-green">●</span> slack      подключён   <span class="t-dim">acme.slack.com</span>',
          '  <span class="t-green">●</span> whatsapp   подключён',
          '  <span class="t-green">●</span> signal     подключён',
          '  <span class="t-green">●</span> email      <span class="t-dim">IMAP/SMTP ok</span>'
        ], 160);
        line('<span class="t-green">✓</span> Шлюз работает. Контекст общий для всех платформ.');
      },
      'hermes doctor': async function () {
        await slow([
          '<span class="t-green">✓</span> Python 3.14 и зависимости',
          '<span class="t-green">✓</span> Node.js, ripgrep, FFmpeg',
          '<span class="t-green">✓</span> Провайдер модели отвечает <span class="t-dim">(212 мс)</span>',
          '<span class="t-green">✓</span> Память: ~/.hermes доступна на запись',
          '<span class="t-green">✓</span> Docker‑бэкенд готов',
          '<span class="t-gold">!</span> Signal: рекомендуем обновить signal-cli'
        ], 170);
        line('<span class="t-green">Всё в порядке.</span> <span class="t-dim">1 рекомендация</span>');
      },
      'hermes setup': async function () {
        await slow([
          '<span class="t-gold">☤ Мастер настройки</span>',
          '  1/4 Провайдер модели ……… <span class="t-green">Nous Portal</span>',
          '  2/4 Инструменты ………… <span class="t-green">10 из 11</span>',
          '  3/4 Мессенджеры ……… <span class="t-green">telegram, slack</span>',
          '  4/4 Бэкенд терминала … <span class="t-green">docker</span>'
        ], 180);
        line('<span class="t-green">✓</span> Готово. Запустите <span class="t-cyan">hermes</span>');
      },
      'hermes update': async function () { await spinner('проверка обновлений…', 800); line('<span class="t-green">✓</span> У вас последняя версия.'); },
      'hermes claw migrate': async function () {
        line('Найдено: <span class="t-cyan">~/.openclaw</span>');
        await slow(['  <span class="t-green">✓</span> SOUL.md — персона', '  <span class="t-green">✓</span> MEMORY.md, USER.md — 96 записей', '  <span class="t-green">✓</span> навыки → ~/.hermes/skills/openclaw-imports/', '  <span class="t-green">✓</span> настройки мессенджеров и ключи'], 150);
        line('<span class="t-green">Миграция завершена.</span>');
      },
      ls: function (arg) {
        if (/hermes/.test(arg || '')) line('<span class="t-cyan">memories/</span>  <span class="t-cyan">skills/</span>  <span class="t-cyan">sessions/</span>  config.yaml  SOUL.md  .env');
        else line('<span class="t-cyan">projects/</span>  <span class="t-cyan">.hermes/</span>  notes.md');
      },
      cat: function (arg) {
        if (/soul/i.test(arg || '')) lines(['<span class="t-dim"># SOUL.md — персона агента</span>', 'Ты — Hermes. Отвечай кратко и по делу.', 'Перед опасными командами — спрашивай подтверждение.', 'Учись на каждой задаче и сохраняй удачные решения как навыки.']);
        else if (arg) line('cat: ' + esc(arg) + ': Нет такого файла');
        else line('<span class="t-dim">usage: cat SOUL.md</span>');
      },
      clear: function () { out.innerHTML = ''; },
      whoami: function () { line('вы. А Hermes знает об этом больше — см. <span class="t-cyan">USER.md</span> 🙂'); },
      date: function () { line(new Date().toString()); },
      pwd: function () { line('/home/you'); },
      echo: function (arg) { line(esc(arg || '')); },
      sudo: function () { line('<span class="t-gold">✋</span> Опасные команды требуют вашего подтверждения. Так безопаснее.'); },
      exit: function () { line('<span class="t-dim">logout? Лучше листайте дальше ↓</span>'); }
    };

    var SLASH = {
      '/help': function () {
        lines(['<span class="t-gold">Слэш‑команды</span>',
          '  <span class="t-cyan">/skills</span>          навыки агента',
          '  <span class="t-cyan">/model</span> [p:m]     сменить модель',
          '  <span class="t-cyan">/personality</span> [n] сменить персону',
          '  <span class="t-cyan">/usage</span>           расход токенов',
          '  <span class="t-cyan">/compress</span>        сжать контекст',
          '  <span class="t-cyan">/new</span>             новый разговор',
          '  <span class="t-cyan">/retry</span> /undo     повторить / отменить ход',
          '  <span class="t-cyan">/exit</span>            выйти в shell']);
      },
      '/skills': function () { line('<span class="t-gold">38 навыков</span> <span class="t-dim">· топ по использованию</span>'); SKILLS.forEach(function (s) { line('  <span class="t-violet">◆</span> ' + esc(s)); }); },
      '/model': function (arg) {
        if (arg) { model = arg; line('<span class="t-green">✓</span> Модель переключена на <span class="t-gold">' + esc(arg) + '</span>. Память и навыки сохранены.'); }
        else line('Текущая модель: <span class="t-gold">' + esc(model) + '</span> <span class="t-dim">— /model provider:model</span>');
      },
      '/personality': function (arg) { if (arg) personality = arg; line('Персона: <span class="t-gold">' + esc(personality) + '</span>'); },
      '/usage': function () { lines(['Сессия: <span class="t-gold">18 412</span> токенов вход · <span class="t-gold">3 207</span> выход', 'Контекст: <span class="t-cyan">▓▓▓▓▓░░░░░░░░░░</span> 14%']); },
      '/compress': async function () { await spinner('сжатие контекста…', 700); line('<span class="t-green">✓</span> 18.4k → 3.1k токенов. Суть сохранена.'); },
      '/insights': function () { lines(['За 7 дней: <span class="t-gold">46</span> задач · <span class="t-gold">3</span> новых навыка · <span class="t-gold">5</span> улучшено']); },
      '/new': function () { line('<span class="t-green">✓</span> Новый разговор. Долговременная память на месте.'); },
      '/reset': function () { SLASH['/new'](); },
      '/retry': function () { line('<span class="t-dim">↻ повторяю последний ход…</span>'); },
      '/undo': function () { line('<span class="t-dim">↶ последний ход отменён</span>'); },
      '/stop': function () { line('<span class="t-dim">■ остановлено</span>'); },
      '/exit': function () { setMode('shell'); line('<span class="t-dim">Сессия сохранена. До встречи!</span>'); }
    };

    function reply(text) {
      var t = text.toLowerCase();
      var short = text.length > 42 ? text.slice(0, 40) + '…' : text;
      if (/привет|здравств|хай|hello|hi\b|hey/.test(t)) return { text: 'Привет! Рад снова вас видеть. Помню, что вы любите краткие ответы и TypeScript. Чем займёмся?' };
      if (/кто ты|что ты|who are you|что умеешь/.test(t)) return { text: 'Я Hermes — агент от Nous Research. Учусь на задачах, храню память у вас в ~/.hermes и отвечаю в семи местах сразу.' };
      if (/погод|weather/.test(t)) return { tools: [['web_search', '«погода Афины сегодня»']], text: 'В Афинах +24° и ясно. Отличная погода для вестника богов ☀️' };
      if (/депло|deploy|выкат/.test(t)) return { tools: [['skill', 'deploy-staging v3'], ['terminal', 'docker compose -f staging.yml up -d --build'], ['web', 'GET /health → 200']], text: 'Задеплоил по навыку deploy-staging за 4 шага вместо 14. Health‑check зелёный.' };
      if (/напомни|кажд|ежеднев|расписан|cron|remind|every/.test(t)) return { tools: [['cron', 'новая задача в планировщике']], text: 'Готово — задача в планировщике. Результат пришлю в Telegram.' };
      if (/навык|skill/.test(t)) return { text: 'У меня 38 навыков. Чаще всего использую deploy-staging, weekly-incidents и github-digest. Список — /skills.' };
      if (/помни|памят|remember|memory|знаешь обо мне/.test(t)) return { tools: [['memory', 'USER.md']], text: 'Помню 142 факта. Например: вы пишете на TypeScript, живёте в UTC+3 и не деплоите в пятницу без подтверждения.' };
      if (/тест|test|баг|bug|ошибк|код|code|почин|fix/.test(t)) return { tools: [['terminal', 'rg -n "FIXME" src/'], ['terminal', 'pytest -x -q']], text: 'Нашёл 3 падающих теста — все из‑за устаревшей фикстуры. Исправить и прислать дифф?' };
      if (/найди|поищи|исследу|search|research|сравни/.test(t)) return { tools: [['delegate', '3 субагента · параллельно'], ['web_search', 'источники: 12']], text: 'Три субагента прочитали 12 источников параллельно. Сводку положил в заметки — пересказать?' };
      if (/спасибо|thanks|thx/.test(t)) return { text: 'Всегда пожалуйста. Кстати, запомнил, как мы это решили, — в следующий раз будет быстрее.' };
      return { tools: [['memory', 'поиск похожего опыта'], ['delegate', 'план из 3 шагов']], text: 'Принял: «' + short + '». Разбил на 3 шага и начинаю. Если задача повторится — сохраню её как навык.' };
    }

    async function agent(text) {
      await spinner('думаю…', 900);
      var r = reply(text);
      for (var i = 0; r.tools && i < r.tools.length; i++) {
        line('<span class="t-cyan">⚙ ' + r.tools[i][0] + '</span> <span class="t-dim">›</span> ' + esc(r.tools[i][1]));
        await wait(reduce ? 0 : 380);
      }
      var d = line('<span class="t-gold">☤</span> <span></span>');
      await typeText(d.lastChild, r.text, 14);
    }

    var ALL = Object.keys(SHELL).concat(Object.keys(SLASH));

    async function run(raw) {
      var cmd = raw.trim();
      echo(raw);
      if (!cmd) return;
      hist.push(cmd); hi = hist.length;
      busy = true;
      try {
        if (mode === 'chat') {
          if (cmd === 'exit' || cmd === 'quit') { await SLASH['/exit'](); }
          else if (cmd === 'clear') SHELL.clear();
          else if (cmd[0] === '/') {
            var sp = cmd.indexOf(' '), name = sp > 0 ? cmd.slice(0, sp) : cmd, arg = sp > 0 ? cmd.slice(sp + 1) : '';
            if (SLASH[name]) await SLASH[name](arg);
            else line('Неизвестная команда ' + esc(name) + ' <span class="t-dim">— /help</span>');
          } else await agent(cmd);
        } else {
          var key = cmd.replace(/\s+/g, ' ');
          if (SHELL[key]) await SHELL[key]();
          else {
            var first = key.split(' ')[0], rest = key.slice(first.length + 1);
            if (first === 'hermes' && rest) line('hermes: неизвестная подкоманда «' + esc(rest) + '» <span class="t-dim">— см. help</span>');
            else if (SHELL[first]) await SHELL[first](rest);
            else if (key[0] === '/') line('<span class="t-dim">Слэш‑команды работают внутри чата — сначала запустите</span> <span class="t-cyan">hermes</span>');
            else line('zsh: command not found: ' + esc(first) + ' <span class="t-dim">— попробуйте help</span>');
          }
        }
      } finally { busy = false; }
    }

    async function autoType(cmd) {
      input.value = '';
      for (var i = 0; i < cmd.length; i++) {
        if (autoplayCancelled) return false;
        input.value += cmd[i];
        await wait(reduce ? 0 : 55 + Math.random() * 60);
      }
      await wait(250);
      if (autoplayCancelled) return false;
      input.value = '';
      await run(cmd);
      return true;
    }

    input.addEventListener('keydown', function (e) {
      autoplayCancelled = true;
      if (e.key === 'Enter') {
        e.preventDefault();
        if (busy) return;
        var v = input.value; input.value = '';
        run(v);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault(); if (hi > 0) { hi--; input.value = hist[hi] || ''; }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault(); if (hi < hist.length) { hi++; input.value = hist[hi] || ''; }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        var v2 = input.value; if (!v2) return;
        var m = ALL.filter(function (c) { return c.indexOf(v2) === 0; });
        if (m.length === 1) input.value = m[0] + ' ';
        else if (m.length > 1) { echo(v2); line('<span class="t-dim">' + m.join('   ') + '</span>'); }
      } else if (e.key.toLowerCase() === 'l' && e.ctrlKey) {
        e.preventDefault(); out.innerHTML = '';
      } else if (e.key.toLowerCase() === 'c' && e.ctrlKey && !input.value) {
        e.preventDefault(); echo('^C');
      }
    });
    screen.addEventListener('click', function () {
      if (window.getSelection && String(window.getSelection())) return;
      input.focus({ preventScroll: true });
    });
    $$('#term-hints [data-cmd]').forEach(function (b) {
      b.addEventListener('click', async function () {
        autoplayCancelled = true;
        if (busy) return;
        var c = b.dataset.cmd;
        if (mode === 'chat' && /^hermes|^ls|^help$/.test(c)) { setMode('shell'); }
        await run(c);
      });
    });

    // intro autoplay on first view
    var played = false;
    onVisible(screen, function (vis) {
      if (!vis || played) return;
      played = true;
      (async function () {
        line('<span class="t-dim">Last login: ' + new Date().toLocaleString('ru-RU') + ' on ttys001</span>');
        await wait(500);
        if (!(await autoType('hermes'))) return;
        await wait(700);
        await autoType('Привет! Что ты обо мне помнишь?');
      })();
    }, { threshold: 0.45 });

    return { run: run, focus: function () { input.focus({ preventScroll: true }); } };
  })();

  /* ======================================================================
     05 — Capability visuals
     ====================================================================== */
  (function setupCapViz() {
    var px = $('#px-grid');
    if (px) {
      var html = '', cols = 16, rows = 10;
      for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
        var t = (x / cols + y / rows) / 2;
        var c = t < 0.4 ? '#f4c66a' : t < 0.7 ? '#67e8ff' : '#9d8cff';
        var cx = x - cols / 2 + 0.5, cy = (y - rows / 2 + 0.5) * 1.4;
        var inBlob = Math.sqrt(cx * cx + cy * cy) < 6.2 + Math.sin(x * 1.3) * 0.8;
        html += '<i style="--d:' + ((x + y) * 0.06).toFixed(2) + 's;--c:' + (inBlob ? c : 'rgba(255,255,255,.07)') + '"></i>';
      }
      px.innerHTML = html;
    }
    var wave = $('#wave');
    if (wave) {
      var w = '';
      for (var i = 0; i < 44; i++) {
        var h = 20 + Math.abs(Math.sin(i * 0.45) * Math.cos(i * 0.13)) * 90;
        w += '<i style="--h:' + h.toFixed(0) + 'px;--d:' + (-(i * 0.07)).toFixed(2) + 's"></i>';
      }
      wave.innerHTML = w;
    }
  })();

  /* ======================================================================
     06 — Natural language → cron
     ====================================================================== */
  var DAYS = [
    { re: /понедельн|monday|\bпн\b/, n: 1, name: 'понедельникам' },
    { re: /вторник|tuesday|\bвт\b/, n: 2, name: 'вторникам' },
    { re: /сред[аыу]\b|wednesday|\bср\b/, n: 3, name: 'средам' },
    { re: /четверг|thursday|\bчт\b/, n: 4, name: 'четвергам' },
    { re: /пятниц|friday|\bпт\b/, n: 5, name: 'пятницам' },
    { re: /суббот|saturday|\bсб\b/, n: 6, name: 'субботам' },
    { re: /воскрес|sunday|\bвс\b/, n: 0, name: 'воскресеньям' }
  ];
  var PLATFORMS = [
    { re: /телеграм|telegram|\btg\b|тг\b/, name: 'Telegram', icon: 'telegram' },
    { re: /дискорд|discord/, name: 'Discord', icon: 'discord' },
    { re: /слак|slack/, name: 'Slack', icon: 'slack' },
    { re: /ватсап|вотсап|whatsapp/, name: 'WhatsApp', icon: 'whatsapp' },
    { re: /сигнал|signal/, name: 'Signal', icon: 'signal' },
    { re: /почт|e-?mail|имейл|мейл/, name: 'Email', icon: 'mail' }
  ];
  function pad2(n) { return String(n).padStart(2, '0'); }

  function nlToCron(text) {
    var s = text.toLowerCase().replace(/ё/g, 'е');
    var minute = '0', hour = '9', dom = '*', month = '*', dow = '*', m;
    var when = '', every = null;

    if ((m = s.match(/кажд\S*\s+(\d+)\s*мин/)) || (m = s.match(/every\s+(\d+)\s*min/))) {
      every = { expr: '*/' + m[1] + ' * * * *', human: 'каждые <b>' + m[1] + ' мин</b>' };
    } else if (/кажд\S*\s+минут|every minute/.test(s)) {
      every = { expr: '* * * * *', human: '<b>каждую минуту</b>' };
    } else if ((m = s.match(/кажд\S*\s+(\d+)\s*час/)) || (m = s.match(/every\s+(\d+)\s*hour/))) {
      every = { expr: '0 */' + m[1] + ' * * *', human: 'каждые <b>' + m[1] + ' ч</b>, в начале часа' };
    } else if (/кажд\S*\s+час|ежечасн|hourly|every hour/.test(s)) {
      every = { expr: '0 * * * *', human: '<b>каждый час</b>, в начале часа' };
    }

    // time of day
    var h = null, mi = 0;
    if (/полноч|midnight/.test(s)) { h = 0; }
    else if (/полдень|noon/.test(s)) { h = 12; }
    else if ((m = s.match(/(?:\bв|\bat|\bк)\s*(\d{1,2})(?:[:.](\d{2}))?\s*(утра|дня|вечера|ночи|am|pm)?/))) {
      h = +m[1]; mi = m[2] ? +m[2] : 0;
      var mer = m[3];
      if ((mer === 'вечера' || mer === 'дня' || mer === 'pm') && h < 12) h += 12;
      if ((mer === 'ночи' || mer === 'am') && h === 12) h = 0;
      if (h > 23) h = 23; if (mi > 59) mi = 59;
    }
    else if (/утр|morning/.test(s)) h = 9;
    else if (/вечер|evening/.test(s)) h = 19;
    else if (/ноч|night/.test(s)) h = 3;
    if (h === null) h = 9;
    hour = String(h); minute = String(mi);
    var hhmm = pad2(h) + ':' + pad2(mi);

    // days
    if (/будн|рабоч\S*\s+д|weekday/.test(s)) { dow = '1-5'; when = 'по <b>будням</b>'; }
    else if (/выходн|weekend/.test(s)) { dow = '0,6'; when = 'по <b>выходным</b>'; }
    else {
      var found = DAYS.filter(function (d) { return d.re.test(s); });
      if (found.length) {
        dow = found.map(function (d) { return d.n; }).sort().join(',');
        when = 'по <b>' + found.map(function (d) { return d.name; }).join(', ') + '</b>';
      } else if ((m = s.match(/(\d{1,2})\s*-?\s*(?:го|ого|числа)/)) || /(кажд\S*|ежемесячн\S*)\s+месяц|ежемесячно|monthly|первого числа/.test(s)) {
        dom = m ? String(Math.min(31, Math.max(1, +m[1]))) : '1';
        when = '<b>' + dom + '‑го числа</b> каждого месяца';
      } else if (/недел|weekly/.test(s)) { dow = '1'; when = 'раз в неделю, по <b>понедельникам</b>'; }
      else when = '<b>каждый день</b>';
    }

    var platform = { name: 'Текущий чат', icon: 'send' };
    for (var i = 0; i < PLATFORMS.length; i++) if (PLATFORMS[i].re.test(s)) { platform = PLATFORMS[i]; break; }

    var expr, human;
    if (every) { expr = every.expr; human = 'Запуск ' + every.human; }
    else { expr = [minute, hour, dom, month, dow].join(' '); human = 'Запуск ' + when + ' в <b>' + hhmm + '</b>'; }

    // task prompt: strip schedule & delivery phrases
    var task = text
      .replace(/(каждые?|каждую|каждый|каждое|каждого)\s+(\d+\s*)?(минут[уы]?|час[аов]*|день|дня|ночь|утро|вечер|недел[юи]|месяц[а]?|будний\s+день|будни)/gi, '')
      .replace(/(каждую|каждый|каждое)\s+(понедельник|вторник|среду|четверг|пятницу|субботу|воскресенье)/gi, '')
      .replace(/по\s+(будням|выходным|понедельникам|вторникам|средам|четвергам|пятницам|субботам|воскресеньям)/gi, '')
      .replace(/\d{1,2}\s*-?\s*(го|ого)\s+числа(\s+каждого\s+месяца)?/gi, '')
      .replace(/(в|к|at)\s*\d{1,2}([:.]\d{2})?\s*(утра|дня|вечера|ночи|am|pm)?/gi, '')
      .replace(/в\s+(полночь|полдень)/gi, '')
      .replace(/(в|на|во)\s+(telegram|телеграм\S*|discord|дискорд\S*|slack|слак\S*|whatsapp|ватсап\S*|signal|сигнал\S*|email|e-mail|почту|имейл)/gi, '')
      .replace(/ежедневно|ежечасно|еженедельно|ежемесячно/gi, '')
      .replace(/\s*[—–-]\s*/g, ' ').replace(/\s{2,}/g, ' ').replace(/^[\s,.:;]+|[\s,.:;]+$/g, '');
    if (!task) task = text.trim();
    task = task.charAt(0).toUpperCase() + task.slice(1);

    var slug = /github|гитхаб/i.test(s) ? 'github-digest' : /бэкап|бекап|backup|резерв/.test(s) ? 'db-backup' : /аптайм|uptime|доступн/.test(s) ? 'uptime-check'
      : /сч[её]т|invoice/.test(s) ? 'invoices' : /новост|news|дайджест/.test(s) ? 'news-digest' : /продаж|sales/.test(s) ? 'sales-report' : /отч[её]т|сводк|report/.test(s) ? 'weekly-report' : 'scheduled-task';

    return { expr: expr, human: human, platform: platform, task: task, slug: slug };
  }

  function parseField(str, min, max) {
    var set = {};
    str.split(',').forEach(function (part) {
      var ps = part.split('/'), range = ps[0], step = ps[1] ? +ps[1] : 1, a, b;
      if (range === '*') { a = min; b = max; }
      else if (range.indexOf('-') > -1) { var ab = range.split('-'); a = +ab[0]; b = +ab[1]; }
      else { a = +range; b = ps[1] ? max : a; }
      for (var v = a; v <= b; v += step) set[v] = true;
    });
    return set;
  }
  function nextRuns(expr, count) {
    var f = expr.split(' ');
    var M = parseField(f[0], 0, 59), Hh = parseField(f[1], 0, 23), D = parseField(f[2], 1, 31), Mo = parseField(f[3], 1, 12), W = parseField(f[4], 0, 6);
    var domStar = f[2] === '*', dowStar = f[4] === '*';
    var d = new Date(); d.setSeconds(0, 0); d.setMinutes(d.getMinutes() + 1);
    var res = [], guard = 0;
    while (res.length < count && guard++ < 200000) {
      if (!Mo[d.getMonth() + 1]) { d.setMonth(d.getMonth() + 1, 1); d.setHours(0, 0, 0, 0); continue; }
      var dayOk = domStar && dowStar ? true : domStar ? !!W[d.getDay()] : dowStar ? !!D[d.getDate()] : (!!D[d.getDate()] || !!W[d.getDay()]);
      if (!dayOk) { d.setDate(d.getDate() + 1); d.setHours(0, 0, 0, 0); continue; }
      if (!Hh[d.getHours()]) { d.setHours(d.getHours() + 1, 0, 0, 0); continue; }
      if (!M[d.getMinutes()]) { d.setMinutes(d.getMinutes() + 1, 0, 0); continue; }
      res.push(new Date(d.getTime()));
      d.setMinutes(d.getMinutes() + 1);
    }
    return res;
  }
  function relTime(d) {
    var diff = Math.round((d - new Date()) / 60000);
    if (diff < 60) return 'через ' + Math.max(1, diff) + ' мин';
    var hrs = Math.floor(diff / 60), mins = diff % 60;
    if (hrs < 24) return 'через ' + hrs + ' ч' + (mins ? ' ' + mins + ' мин' : '');
    var days = Math.floor(hrs / 24), h2 = hrs % 24;
    return 'через ' + days + ' д' + (h2 ? ' ' + h2 + ' ч' : '');
  }

  (function setupScheduler() {
    var input = $('#sched-input'), exprEl = $('#cron-expr');
    if (!input || !exprEl) return;
    var human = $('#cron-human'), deliver = $('#cron-deliver'), next = $('#cron-next'), yaml = $('#cron-yaml');
    exprEl.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';
    var spans = $$('span', exprEl);
    var dayFmt = new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });
    function render() {
      var r = nlToCron(input.value || '');
      r.expr.split(' ').forEach(function (p, i) {
        if (spans[i].textContent !== p) {
          spans[i].textContent = p; spans[i].title = p;
          spans[i].classList.remove('is-flip'); void spans[i].offsetWidth; spans[i].classList.add('is-flip');
        }
      });
      human.innerHTML = r.human;
      deliver.innerHTML = '<svg><use href="#i-' + r.platform.icon + '"/></svg>' + r.platform.name;
      next.innerHTML = nextRuns(r.expr, 3).map(function (d, i) {
        return '<li style="animation-delay:' + (i * 0.06) + 's">' + dayFmt.format(d) + ' · ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + '<span>' + relTime(d) + '</span></li>';
      }).join('');
      yaml.innerHTML =
        '<span class="c"># задача планировщика Hermes — из вашей фразы</span>\n' +
        '<span class="k">name:</span> <span class="s">' + r.slug + '</span>\n' +
        '<span class="k">schedule:</span> <span class="s">"' + r.expr + '"</span>\n' +
        '<span class="k">deliver:</span> <span class="s">' + (r.platform.icon === 'send' ? 'origin' : r.platform.name.toLowerCase()) + '</span>\n' +
        '<span class="k">prompt:</span> <span class="s">"' + esc(r.task) + '"</span>';
    }
    var t;
    input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(render, 120); });
    $$('#sched-chips button').forEach(function (b) {
      b.addEventListener('click', function () { input.value = b.textContent; render(); state.pulse = Math.max(state.pulse, 0.4); });
    });
    render();
  })();

  /* ======================================================================
     08 — Model ring
     ====================================================================== */
  (function setupRing() {
    var ring = $('#ring'), rot = $('#ring-rot');
    if (!ring || !rot) return;
    var items = $$('.ring__item', rot), n = items.length, step = 360 / n;
    var MODELS = ['nous:hermes-4-405b', 'openrouter:auto', 'openai:gpt', 'openrouter:anthropic/claude', 'openrouter:google/gemini', 'openrouter:deepseek', 'openrouter:qwen', 'openrouter:moonshotai/kimi', 'custom:localhost:11434/v1', 'custom:llama.cpp'];
    var sw = $('#switch-val');
    var ry = 0, vel = -0.12, auto = -0.12, dragging = false, lastX = 0, running = false, front = -1;

    function layout() {
      var r = Math.max(260, Math.min(560, ring.clientWidth * 0.42));
      items.forEach(function (it) { it.style.setProperty('--rz', r + 'px'); });
    }
    layout();
    window.addEventListener('resize', layout);

    function frame() {
      if (!running) return;
      if (!dragging) { vel += (auto - vel) * 0.02; ry += reduce ? 0 : vel; }
      rot.style.setProperty('--ry', ry + 'deg');
      var best = 0, bestCos = -2;
      items.forEach(function (it, i) {
        var a = ((i * step + ry) % 360) * Math.PI / 180, c = Math.cos(a);
        it.style.opacity = (0.22 + 0.78 * (c * 0.5 + 0.5)).toFixed(3);
        if (c > bestCos) { bestCos = c; best = i; }
      });
      if (best !== front) {
        if (items[front]) items[front].classList.remove('is-front');
        front = best; items[front].classList.add('is-front');
        if (sw) sw.textContent = MODELS[front] || '';
      }
      requestAnimationFrame(frame);
    }
    onVisible(ring, function (vis) { if (vis && !running) { running = true; frame(); } else if (!vis) running = false; }, { threshold: 0.05 });

    ring.addEventListener('pointerdown', function (e) { dragging = true; lastX = e.clientX; ring.setPointerCapture(e.pointerId); });
    ring.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - lastX; lastX = e.clientX;
      ry += dx * 0.25; vel = dx * 0.25;
    });
    var end = function () { dragging = false; };
    ring.addEventListener('pointerup', end); ring.addEventListener('pointercancel', end);
  })();

  /* ======================================================================
     Install tabs
     ====================================================================== */
  (function setupInstall() {
    var OS = {
      unix: { p: '$', c: 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash', n: 'Установщик сам поставит Python, Node.js, ripgrep и FFmpeg. Затем: <code class="ic">source ~/.bashrc</code> и <code class="ic">hermes</code>' },
      win: { p: 'PS>', c: 'iex (irm https://hermes-agent.nousresearch.com/install.ps1)', n: 'Нативная Windows без WSL: CLI, шлюз, TUI и инструменты работают из коробки. Установка — в <code class="ic">%LOCALAPPDATA%\\hermes</code>' },
      android: { p: '→', c: 'https://hermes-agent.nousresearch.com/docs/getting-started/termux', n: 'Подписанный APT‑репозиторий для aarch64 (каналы stable и canary): Python, Node.js и TUI в одном пакете. Следуйте руководству Termux по ссылке.' }
    };
    var tabs = $$('.tabs [data-os]'), ink = $('.tabs__ink'), code = $('#install-code'), prompt = $('#install-prompt'), note = $('#install-note'), btn = $('#install-copy');
    if (!code) return;
    var cur = 'unix';
    function moveInk(t) { if (!ink || !t) return; ink.style.width = t.offsetWidth + 'px'; ink.style.transform = 'translateX(' + t.offsetLeft + 'px)'; }
    function select(t) {
      cur = t.dataset.os;
      tabs.forEach(function (x) { var on = x === t; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', on ? 'true' : 'false'); });
      moveInk(t);
      var o = OS[cur];
      if (hasGSAP && !reduce) {
        gsap.fromTo([code, note], { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', stagger: 0.05 });
      }
      prompt.textContent = o.p; code.textContent = o.c; note.innerHTML = o.n;
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { select(t); }); });
    requestAnimationFrame(function () { moveInk($('.tabs .is-active')); });
    window.addEventListener('resize', function () { moveInk($('.tabs .is-active')); });
    if (document.fonts) document.fonts.ready.then(function () { moveInk($('.tabs .is-active')); });
    btn.addEventListener('click', function () {
      copyText(OS[cur].c);
      btn.classList.add('is-copied'); btn.querySelector('span').textContent = 'Скопировано';
      btn.querySelector('use').setAttribute('href', '#i-check');
      setTimeout(function () { btn.classList.remove('is-copied'); btn.querySelector('span').textContent = 'Копировать'; btn.querySelector('use').setAttribute('href', '#i-copy'); }, 1800);
    });
    H.installCommand = function () { return OS.unix.c; };
  })();

  /* ======================================================================
     FAQ accordion
     ====================================================================== */
  (function setupFAQ() {
    var items = $$('.qa');
    items.forEach(function (d) {
      var sum = d.querySelector('summary'), body = d.querySelector('.qa__a');
      sum.addEventListener('click', function (e) {
        if (!hasGSAP || reduce) return;
        e.preventDefault();
        if (d.open) {
          gsap.to(body, { height: 0, duration: 0.5, ease: 'power3.inOut', onComplete: function () { d.open = false; body.style.height = ''; } });
        } else {
          items.forEach(function (o) { if (o !== d && o.open) { var b = o.querySelector('.qa__a'); gsap.to(b, { height: 0, duration: 0.5, ease: 'power3.inOut', onComplete: function () { o.open = false; b.style.height = ''; } }); } });
          d.open = true;
          gsap.fromTo(body, { height: 0 }, { height: body.scrollHeight, duration: 0.6, ease: 'power3.out', onComplete: function () { body.style.height = ''; } });
        }
      });
    });
  })();

  /* ======================================================================
     Command palette (⌘K)
     ====================================================================== */
  (function setupPalette() {
    var pal = $('#palette'), input = $('#palette-input'), list = $('#palette-list');
    if (!pal) return;
    var ICON = function (id) { return '<svg><use href="#i-' + id + '"/></svg>'; };
    var ITEMS = [
      { t: 'Цикл обучения', k: 'раздел', i: '01', go: '#loop' },
      { t: 'Память и поиск по сессиям', k: 'раздел', i: '02', go: '#memory' },
      { t: 'Шлюз сообщений', k: 'раздел', i: '03', go: '#gateway' },
      { t: 'Интерактивный терминал', k: 'раздел', i: '04', go: '#terminal' },
      { t: 'Возможности', k: 'раздел', i: '05', go: '#caps' },
      { t: 'Автоматизация (cron)', k: 'раздел', i: '06', go: '#schedule' },
      { t: 'Среды исполнения', k: 'раздел', i: '07', go: '#backends' },
      { t: 'Модели', k: 'раздел', i: '08', go: '#models' },
      { t: 'Установка', k: 'раздел', i: ICON('arrow'), go: '#install' },
      { t: 'Вопросы и ответы', k: 'раздел', i: '?', go: '#faq' },
      { t: 'Скопировать команду установки', k: 'действие', i: ICON('copy'), run: function () { copyText(H.installCommand ? H.installCommand() : 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash'); } },
      { t: 'Запустить hermes в терминале', k: 'действие', i: ICON('terminal'), run: function () { scrollToTarget('#terminal'); if (term) setTimeout(function () { term.run('hermes'); term.focus(); }, 1500); } },
      { t: 'Открыть GitHub', k: 'ссылка', i: ICON('github'), run: function () { window.open('https://github.com/NousResearch/hermes-agent', '_blank', 'noopener'); } },
      { t: 'Открыть документацию', k: 'ссылка', i: ICON('book'), run: function () { window.open('https://hermes-agent.nousresearch.com/docs/', '_blank', 'noopener'); } },
      { t: 'Импульс частиц ✦', k: 'пасхалка', i: ICON('spark'), run: function () { state.pulse = 1; } },
      { t: 'Наверх', k: 'навигация', i: '↑', go: 0 }
    ];
    var filtered = ITEMS, sel = 0, isOpen = false, lastFocus = null;

    function render() {
      var q = input.value.trim().toLowerCase().replace(/ё/g, 'е');
      filtered = ITEMS.filter(function (it) { return !q || (it.t + ' ' + it.k).toLowerCase().replace(/ё/g, 'е').indexOf(q) !== -1; });
      sel = Math.min(sel, Math.max(0, filtered.length - 1));
      list.innerHTML = filtered.length ? filtered.map(function (it, i) {
        return '<li role="option" data-i="' + i + '" class="' + (i === sel ? 'is-sel' : '') + '" aria-selected="' + (i === sel) + '"><span class="pi">' + it.i + '</span>' + esc(it.t) + '<small>' + it.k + '</small></li>';
      }).join('') : '<li class="empty">Ничего не найдено</li>';
    }
    function open() {
      if (isOpen) return;
      isOpen = true; lastFocus = document.activeElement;
      pal.hidden = false; input.value = ''; sel = 0; render();
      setTimeout(function () { input.focus(); }, 10);
      if (lenis) lenis.stop();
    }
    function close() {
      if (!isOpen) return;
      isOpen = false; pal.hidden = true;
      if (lenis) lenis.start();
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }
    function exec(i) {
      var it = filtered[i]; if (!it) return;
      close();
      if (it.go !== undefined) scrollToTarget(it.go);
      if (it.run) it.run();
    }
    H.palette = { open: open, close: close };

    input.addEventListener('input', function () { sel = 0; render(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, filtered.length); render(); scrollSel(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + filtered.length) % Math.max(1, filtered.length); render(); scrollSel(); }
      else if (e.key === 'Enter') { e.preventDefault(); exec(sel); }
      else if (e.key === 'Escape') { e.preventDefault(); close(); }
    });
    function scrollSel() { var el = list.querySelector('.is-sel'); if (el) el.scrollIntoView({ block: 'nearest' }); }
    list.addEventListener('click', function (e) { var li = e.target.closest('li[data-i]'); if (li) exec(+li.dataset.i); });
    list.addEventListener('mousemove', function (e) { var li = e.target.closest('li[data-i]'); if (li && +li.dataset.i !== sel) { sel = +li.dataset.i; render(); } });
    $$('[data-palette-open]').forEach(function (b) { b.addEventListener('click', open); });
    $$('[data-palette-close]').forEach(function (b) { b.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); isOpen ? close() : open(); }
      else if (e.key === 'Escape') { if (isOpen) close(); else closeMenu(); }
      else if (e.key === '/' && !isOpen && !/INPUT|TEXTAREA/.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); open(); }
    });
  })();

  /* ======================================================================
     Boot
     ====================================================================== */
  setupScroll();
  setupPointerFX();
  runPreloader().then(function () {
    heroIntro();
    if (hasGSAP) setTimeout(function () { ScrollTrigger.refresh(); }, 100);
  });
})();
