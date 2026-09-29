/* =========================================================
   Портфолио Алексея — анимации интерфейса
   GSAP + ScrollTrigger + Lenis (подключены из CDN)
   ========================================================= */

(() => {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE_POINTER = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const HAS_GSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const LOADER_MS = REDUCED ? 0 : 1450;

  // Общее состояние для 3D-сцен (читают hero.js и neural.js)
  window.__neural = window.__neural || { progress: 0, step: 0 };

  $('#year').textContent = new Date().getFullYear();
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) window.scrollTo(0, 0);

  /* ---------- Видимость элементов (для пауз циклов) ---------- */
  function watchVisible(el, cb, margin = '0px') {
    if (!el) return;
    const io = new IntersectionObserver(([e]) => cb(e.isIntersecting), { rootMargin: margin });
    io.observe(el);
  }

  /* ---------- Разбивка текста на слова ---------- */
  function splitWords(el) {
    const words = [];
    const make = (text, gradClasses) => {
      const w = document.createElement('span');
      w.className = 'w';
      const wi = document.createElement('span');
      wi.className = 'wi' + (gradClasses ? ' ' + gradClasses : '');
      wi.textContent = text;
      w.appendChild(wi);
      words.push(wi);
      return w;
    };
    const process = (node, gradClasses) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const parts = child.textContent.split(/([ \t\n\r]+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
            if (!p) return;
            if (/^[ \t\n\r]+$/.test(p)) frag.appendChild(document.createTextNode(' '));
            else frag.appendChild(make(p, gradClasses));
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          if (child.classList.contains('grad')) {
            const cls = child.className;
            child.className = '';
            process(child, cls);
          } else {
            process(child, gradClasses);
          }
        }
      });
    };
    process(el, '');
    return words;
  }

  function wrapWordsForScrub(el) {
    const text = el.textContent.trim().replace(/\s+/g, ' ');
    el.innerHTML = text
      .split(' ')
      .map((w) => `<span class="mw">${w}</span>`)
      .join(' ');
    return $$('.mw', el);
  }

  let lenis = null;

  /* ---------- Якоря ---------- */
  const scrollToTarget = (hash) => {
    const el = hash === '#top' ? null : $(hash);
    if (hash !== '#top' && !el) return;
    if (lenis) lenis.scrollTo(el || 0, { duration: 1.6 });
    else window.scrollTo({ top: el ? el.getBoundingClientRect().top + scrollY : 0, behavior: 'smooth' });
  };
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href');
      if (hash.length < 2) return;
      e.preventDefault();
      closeMenu();
      scrollToTarget(hash);
    });
  });

  /* ---------- Мобильное меню ---------- */
  const burger = $('.nav-burger');
  function closeMenu() {
    if (!document.body.classList.contains('menu-open')) return;
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    $('.mobile-menu').setAttribute('aria-hidden', 'true');
    lenis && lenis.start();
  }
  burger.addEventListener('click', () => {
    const open = !document.body.classList.contains('menu-open');
    if (!open) return closeMenu();
    document.body.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    $('.mobile-menu').setAttribute('aria-hidden', 'false');
    lenis && lenis.stop();
  });

  /* ---------- Без GSAP: всё просто видно ---------- */
  if (!HAS_GSAP) {
    document.documentElement.classList.add('no-anim');
    $$('[data-count]').forEach((el) => (el.textContent = el.dataset.count));
    $$('.lang').forEach((el) => el.classList.add('is-in'));
  }

  /* =========================================================
     Инициализация с GSAP
     ========================================================= */
  if (HAS_GSAP) {
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });

    /* ---------- Плавный скролл ---------- */
    if (!REDUCED && typeof window.Lenis !== 'undefined') {
      lenis = new window.Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
      window.__lenis = lenis;
    }

    /* ---------- Навигация: тень, прогресс, активный пункт ---------- */
    const nav = $('.nav');
    const progressBar = $('.nav-progress i');
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        nav.classList.toggle('is-scrolled', self.scroll() > 20);
        progressBar.style.transform = `scaleX(${self.progress})`;
      },
    });
    $$('.nav-links a').forEach((link) => {
      const sec = $(link.getAttribute('href'));
      if (!sec) return;
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (self) => link.classList.toggle('is-active', self.isActive),
      });
    });

    /* ---------- HERO: вступление ---------- */
    const heroName = $('.hero-name');
    const letters = [...heroName.textContent].map((ch) => {
      const s = document.createElement('span');
      s.className = 'hl';
      s.textContent = ch;
      return s;
    });
    heroName.textContent = '';
    letters.forEach((l) => heroName.appendChild(l));
    heroName.classList.add('is-split');

    if (!REDUCED) {
      gsap.set('.hero-anim', { opacity: 0, y: 30 });
      gsap.set(letters, { yPercent: 105, rotateX: -70, opacity: 0, transformPerspective: 800, transformOrigin: '50% 100%' });
      const intro = gsap.timeline({ delay: LOADER_MS / 1000 - 0.1 });
      intro
        .to('.hero-chip', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' })
        .to('.hero-title', { opacity: 1, y: 0, duration: 0.01 }, '<')
        .to(letters, { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.4, ease: 'expo.out', stagger: 0.055 }, '<0.05')
        .to('.hero-sub', { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' }, '<0.45')
        .to('.hero-actions', { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' }, '<0.12')
        .to(['.hero-foot', '.scroll-cue'], { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' }, '<0.2');
      window.dispatchEvent(new CustomEvent('hero:intro', { detail: { delay: LOADER_MS } }));

      gsap.to('.hero-content', {
        yPercent: -18,
        scale: 0.94,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
    }

    /* ---------- МАНИФЕСТ: подсветка слов при скролле ---------- */
    const manifestoWords = wrapWordsForScrub($('.manifesto-text'));
    if (!REDUCED) {
      gsap.timeline({
        scrollTrigger: { trigger: '.manifesto-pin', start: 'top top', end: '+=130%', pin: true, scrub: 0.6 },
      }).to(manifestoWords, { opacity: 1, stagger: 0.1, ease: 'none', duration: 0.4 });
    } else manifestoWords.forEach((w) => (w.style.opacity = 1));

    /* ---------- Счётчики ---------- */
    $$('[data-count]').forEach((el) => {
      const target = +el.dataset.count;
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () =>
          gsap.to(obj, {
            v: target,
            duration: REDUCED ? 0 : 2.2,
            ease: 'power3.out',
            onUpdate: () => (el.textContent = Math.round(obj.v)),
          }),
      });
    });

    /* ---------- Бегущая строка (скорость зависит от скролла) ---------- */
    $$('.marquee-row').forEach((row) => {
      row.innerHTML += row.innerHTML;
      const dir = +row.dataset.dir;
      let x = dir > 0 ? 0 : -row.scrollWidth / 2;
      let visible = false;
      watchVisible(row, (v) => (visible = v));
      gsap.ticker.add((t, dt) => {
        if (!visible || REDUCED) return;
        const vel = lenis ? Math.abs(lenis.velocity) : 0;
        const speed = (0.5 + Math.min(vel, 60) * 0.12) * (dt / 16.7);
        const half = row.scrollWidth / 2;
        x -= speed * dir;
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        row.style.transform = `translate3d(${x}px,0,0)`;
      });
    });

    /* ---------- 3D-карусель предметов ---------- */
    (() => {
      const car = $('.carousel');
      if (!car) return;
      const cards = $$('.ccard', car);
      const n = cards.length;
      const step = 360 / n;
      let R = 0;
      let rot = 0;
      let scrollRot = 0;
      let visible = false;
      const layout = () => {
        const w = car.offsetWidth;
        R = Math.round(w / 2 / Math.tan(Math.PI / n) + (w > 180 ? 50 : 34));
        cards.forEach((c, i) => (c.style.transform = `rotateY(${i * step}deg) translateZ(${R}px)`));
      };
      layout();
      addEventListener('resize', layout);
      watchVisible(car.parentElement, (v) => (visible = v), '100px');
      ScrollTrigger.create({
        trigger: '.subjects',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => (scrollRot = self.progress * 200),
      });
      gsap.ticker.add((t, dt) => {
        if (!visible) return;
        if (!REDUCED) rot += 0.08 * (dt / 16.7);
        const a = rot + scrollRot;
        car.style.transform = `translateZ(${-R}px) rotateX(-9deg) rotateY(${-a}deg)`;
        cards.forEach((c, i) => {
          const ang = ((i * step - a) * Math.PI) / 180;
          const f = (Math.cos(ang) + 1) / 2;
          c.style.opacity = (0.28 + f * 0.72).toFixed(3);
        });
      });
    })();

    /* ---------- Морфинг устройства: ученик → учитель → владелец ---------- */
    (() => {
      const showcase = $('.showcase');
      const device = $('.device');
      const wrap = $('.device-wrap');
      if (!device) return;
      const screens = { student: $('.screen-student'), teacher: $('.screen-teacher'), admin: $('.screen-admin') };
      const panels = $$('.spanel');
      $$('.ad-chart i').forEach((b, i) => b.style.setProperty('--d', i * 0.06));
      let current = 'student';
      const setState = (s) => {
        if (s === current) return;
        current = s;
        device.dataset.state = s;
        showcase.dataset.state = s;
        Object.entries(screens).forEach(([k, el]) => el.classList.toggle('is-active', k === s));
        panels.forEach((p) => p.classList.toggle('is-active', p.dataset.state === s));
      };
      panels[0].classList.add('is-active');
      const triggers = panels.map((p) =>
        ScrollTrigger.create({
          trigger: p,
          start: 'top 62%',
          end: 'bottom 38%',
          data: p.dataset.state,
          onToggle: () => {
            const act = triggers.filter((t) => t.isActive);
            if (act.length) setState(act[act.length - 1].vars.data);
          },
        })
      );
      if (FINE_POINTER) {
        $('.showcase-sticky').addEventListener('mousemove', (e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          wrap.style.setProperty('--ry', `${-12 + x * 22}deg`);
          wrap.style.setProperty('--rx', `${5 - y * 12}deg`);
        });
        $('.showcase-sticky').addEventListener('mouseleave', () => {
          wrap.style.removeProperty('--ry');
          wrap.style.removeProperty('--rx');
        });
      }
    })();

    /* ---------- Круговая схема ---------- */
    (() => {
      const vis = $('.loop-visual');
      if (!vis) return;
      const nodes = $$('.lnode', vis);
      const items = $$('.loop-list li');
      const dot = $('.loop-dot', vis);
      const fill = $('.loop-fill', vis);
      const center = $('.loop-center', vis);
      const stepEl = $('.loop-step', vis);
      const titleEl = $('.loop-title', vis);
      const descEl = $('.loop-desc', vis);
      const DATA = [
        ['Задание', 'Учитель собирает задание и отправляет классу'],
        ['Прохождение', 'Ученик проходит задание в приложении'],
        ['Проверка', 'Балл считает сервер. Правильные ответы в приложение не уходят'],
        ['Журнал', 'Балл сразу падает в журнал учителя'],
        ['Оценка', 'Оценка учителя появляется у ученика в профиле'],
      ];
      const PERIOD = 12; // секунд на круг
      let t = 0;
      let active = -1;
      let visible = false;
      watchVisible(vis, (v) => (visible = v));
      const setActive = (i) => {
        if (i === active) return;
        active = i;
        nodes.forEach((n, k) => n.classList.toggle('is-active', k === i));
        items.forEach((n, k) => n.classList.toggle('is-active', k === i));
        center.classList.add('is-swap');
        setTimeout(() => {
          stepEl.textContent = `Шаг ${i + 1}`;
          titleEl.textContent = DATA[i][0];
          descEl.textContent = DATA[i][1];
          center.classList.remove('is-swap');
        }, 220);
      };
      items.forEach((li, i) => {
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => (t = (i / 5) * PERIOD + 0.01));
      });
      const render = () => {
        const frac = (t % PERIOD) / PERIOD;
        const size = vis.offsetWidth;
        const R = size * 0.3864;
        const ang = -Math.PI / 2 + frac * Math.PI * 2;
        dot.style.transform = `translate(${Math.cos(ang) * R}px, ${Math.sin(ang) * R}px)`;
        fill.style.strokeDashoffset = (1 - frac).toFixed(4);
        setActive(Math.floor(frac * 5 + 0.0001) % 5);
      };
      render();
      gsap.ticker.add((time, dt) => {
        if (!visible) return;
        if (!REDUCED) t += dt / 1000;
        render();
      });
    })();

    /* ---------- Горизонтальная лента ---------- */
    const mm = gsap.matchMedia();
    mm.add('(min-width: 835px)', () => {
      const track = $('.hscroll-track');
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: '.hscroll',
          start: 'top top',
          end: () => '+=' + dist(),
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    });

    /* ---------- Stells Pro: закреплённая 3D-сцена ---------- */
    (() => {
      const steps = $$('.nstep');
      const dots = $$('.neural-dots i');
      let cur = 0;
      ScrollTrigger.create({
        trigger: '.neural-pin',
        start: 'top top',
        end: '+=320%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          window.__neural.progress = self.progress;
          const s = Math.min(3, Math.floor(self.progress * 4));
          if (s !== cur) {
            cur = s;
            window.__neural.step = s;
            steps.forEach((el, i) => el.classList.toggle('is-active', i === s));
            dots.forEach((el, i) => el.classList.toggle('is-active', i === s));
            window.dispatchEvent(new CustomEvent('neural:step', { detail: s }));
          }
        },
      });
      $('#fire-btn').addEventListener('click', () => window.dispatchEvent(new Event('neural:fire')));
    })();

    /* ---------- Механизм внимания ---------- */
    (() => {
      const demo = $('.att-demo');
      if (!demo) return;
      const svg = $('.att-svg', demo);
      const words = $$('.aw', demo);
      const list = $('.att-weights', demo);
      const W = {
        0: [0, 0.46, 0.3, 0.02, 0.08, 0.04, 0.1],
        1: [0.5, 0, 0.36, 0.02, 0.05, 0.03, 0.04],
        2: [0.14, 0.4, 0, 0.03, 0.18, 0.05, 0.2],
        3: [0.05, 0.25, 0.2, 0, 0.2, 0.1, 0.2],
        4: [0.07, 0.05, 0.72, 0.02, 0, 0.04, 0.1],
        5: [0.03, 0.05, 0.12, 0.02, 0.08, 0, 0.7],
        6: [0.04, 0.08, 0.46, 0.02, 0.28, 0.12, 0],
      };
      let focus = 4;
      let shown = false;
      const NS = 'http://www.w3.org/2000/svg';
      svg.innerHTML = `<defs><linearGradient id="attGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5e5ce6"/><stop offset=".5" stop-color="#0a84ff"/><stop offset="1" stop-color="#bf5af2"/></linearGradient></defs><g class="att-arcs"></g>`;
      const g = $('.att-arcs', svg);
      const draw = (animate) => {
        const box = demo.getBoundingClientRect();
        const f = words[focus].getBoundingClientRect();
        const fx = f.left + f.width / 2 - box.left;
        const fy = f.top - box.top - 4;
        g.innerHTML = '';
        const weights = W[focus];
        words.forEach((w, i) => {
          w.classList.toggle('is-focus', i === focus);
          w.classList.toggle('is-target', i !== focus);
          w.style.setProperty('--wgt', weights[i]);
          if (i === focus) return;
          const r = w.getBoundingClientRect();
          const tx = r.left + r.width / 2 - box.left;
          const ty = r.top - box.top - 4;
          const dist = Math.abs(tx - fx);
          const h = Math.min(120, 30 + dist * 0.35) + Math.abs(ty - fy) * 0.5;
          const top = Math.min(fy, ty) - h;
          const p = document.createElementNS(NS, 'path');
          p.setAttribute('d', `M${fx},${fy} C${fx},${top} ${tx},${top} ${tx},${ty}`);
          p.setAttribute('stroke', 'url(#attGrad)');
          p.setAttribute('stroke-width', (1.2 + weights[i] * 9).toFixed(2));
          p.setAttribute('opacity', (0.18 + weights[i] * 0.82).toFixed(2));
          g.appendChild(p);
          const len = p.getTotalLength();
          p.style.strokeDasharray = len;
          p.style.strokeDashoffset = animate ? len : 0;
          if (animate) {
            p.getBoundingClientRect();
            p.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1) ${i * 0.05}s`;
            requestAnimationFrame(() => (p.style.strokeDashoffset = 0));
          }
          // точка на конце дуги
          const c = document.createElementNS(NS, 'circle');
          c.setAttribute('cx', tx);
          c.setAttribute('cy', ty);
          c.setAttribute('r', 2 + weights[i] * 4);
          c.setAttribute('fill', '#5e5ce6');
          c.setAttribute('opacity', (0.3 + weights[i] * 0.7).toFixed(2));
          g.appendChild(c);
        });
        list.innerHTML = words
          .map((w, i) =>
            i === focus
              ? ''
              : `<div style="--wgt:${weights[i]}"><span>${w.textContent.replace(/[.,]/g, '')}<b>${Math.round(weights[i] * 100)}%</b></span><i></i></div>`
          )
          .join('');
      };
      words.forEach((w, i) => {
        const go = () => {
          if (focus === i) return;
          focus = i;
          draw(true);
        };
        w.addEventListener('mouseenter', go);
        w.addEventListener('click', go);
      });
      ScrollTrigger.create({
        trigger: demo,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          shown = true;
          setTimeout(() => draw(true), 250);
        },
      });
      addEventListener('resize', () => shown && draw(false));
    })();

    /* ---------- Конвейер мышления: линия + консоль ---------- */
    (() => {
      const steps = $$('.pstep');
      const line = $('.pipe-line i');
      if (!line) return;
      gsap.to(line, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.pipe-steps',
          start: 'top 70%',
          end: 'bottom 55%',
          scrub: 0.5,
          onUpdate: (self) => {
            const h = line.parentElement.offsetHeight;
            steps.forEach((s) => s.classList.toggle('is-on', self.progress * h >= s.offsetTop - 6));
          },
        },
      });
    })();

    /* ---------- Появление блоков ---------- */
    if (!REDUCED) {
      const revealUp = $$('.reveal-up');
      gsap.set(revealUp, { y: 50, opacity: 0 });
      const show = (els) =>
        gsap.to(els.filter((e) => !e.dataset.shown && (e.dataset.shown = '1')), {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.09,
          overwrite: 'auto',
        });
      ScrollTrigger.batch(revealUp, { start: 'top 90%', onEnter: show, onEnterBack: show });

      $$('.reveal-scale').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.88, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none play none' },
          }
        );
      });

      $$('.split').forEach((el) => {
        const words = splitWords(el);
        gsap.fromTo(
          words,
          { yPercent: 115, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.3,
            ease: 'expo.out',
            stagger: 0.07,
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none play none' },
          }
        );
      });

      // Заголовки продуктов: лёгкое масштабирование на скролле
      $$('.h-product').forEach((el) => {
        gsap.fromTo(el, { scale: 0.86 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 30%', scrub: true } });
      });

      // Цитата: подсветка слов
      const quoteWords = wrapWordsForScrub($('.quote-text'));
      gsap.to(quoteWords, {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: '.quote', start: 'top 80%', end: 'bottom 45%', scrub: 0.6 },
      });
    } else {
      $$('.quote-text').forEach((q) => wrapWordsForScrub(q).forEach((w) => (w.style.opacity = 1)));
    }

    /* ---------- Полоски навыков ---------- */
    $$('.lang').forEach((el) =>
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => el.classList.add('is-in') })
    );

    /* ---------- Stella Coder: 3D-сцена ---------- */
    (() => {
      const stage = $('.coder-stage');
      const scene = $('.coder-scene');
      if (!stage) return;
      const fit = () => stage.style.setProperty('--cs', Math.min(1, (stage.clientWidth - 12) / 1100).toFixed(4));
      fit();
      addEventListener('resize', fit);
      if (!REDUCED) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: stage, start: 'top 95%', end: 'center 55%', scrub: 1 },
        });
        tl.fromTo(scene, { '--rx': '38deg', '--ty': '80px' }, { '--rx': '8deg', '--ty': '0px', ease: 'none' }, 0)
          .fromTo('.win-editor', { opacity: 0.2, z: -200 }, { opacity: 1, z: 0, ease: 'none' }, 0)
          .fromTo('.win-term', { x: -260, y: 120, z: 420, opacity: 0 }, { x: 0, y: 0, z: 120, opacity: 1, ease: 'none' }, 0)
          .fromTo('.win-phone', { x: 260, y: 140, z: 520, opacity: 0 }, { x: 0, y: 0, z: 200, opacity: 1, ease: 'none' }, 0);
      }
      if (FINE_POINTER) {
        stage.addEventListener('mousemove', (e) => {
          const r = stage.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          gsap.to(scene, { '--ry': `${x * 10}deg`, duration: 0.8, ease: 'power3.out' });
        });
        stage.addEventListener('mouseleave', () => gsap.to(scene, { '--ry': '0deg', duration: 1, ease: 'power3.out' }));
      }
    })();

    /* ---------- Орбита моделей ---------- */
    (() => {
      const orbit = $('.orbit');
      if (!orbit) return;
      const orbs = $$('.orb', orbit);
      let t = 0;
      let visible = false;
      let hover = false;
      watchVisible(orbit, (v) => (visible = v));
      orbit.addEventListener('mouseenter', () => (hover = true));
      orbit.addEventListener('mouseleave', () => (hover = false));
      gsap.ticker.add((time, dt) => {
        if (!visible) return;
        if (!REDUCED) t += (dt / 1000) * (hover ? 0.08 : 0.28);
        const w = orbit.offsetWidth;
        const Rx = Math.min(270, w * 0.45);
        const Ry = Rx * 0.3555;
        orbs.forEach((o, i) => {
          const a = t + (i / orbs.length) * Math.PI * 2;
          const x = Math.cos(a) * Rx;
          const y = Math.sin(a) * Ry;
          const d = (Math.sin(a) + 1) / 2;
          o.style.transform = `translate(-50%,-50%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${(0.76 + d * 0.28).toFixed(3)})`;
          o.style.zIndex = d > 0.5 ? 60 : 10;
          o.style.opacity = (0.5 + d * 0.5).toFixed(3);
        });
      });
    })();

    /* ---------- Сфера навыков ---------- */
    (() => {
      const sphere = $('.tag-sphere');
      if (!sphere) return;
      const tags = $$('span', sphere);
      const COLORS = ['#0a84ff', '#5e5ce6', '#bf5af2', '#ff375f', '#ff9f0a', '#00a3c4', '#14b8a6'];
      const n = tags.length;
      const pts = tags.map((el, i) => {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const phi = i * Math.PI * (3 - Math.sqrt(5));
        el.dataset.c = COLORS[i % COLORS.length];
        return { el, x: Math.cos(phi) * r, y, z: Math.sin(phi) * r };
      });
      let ax = 0.0016;
      let ay = 0.0032;
      let tx = ax;
      let ty = ay;
      let visible = false;
      watchVisible(sphere, (v) => (visible = v));
      sphere.addEventListener('pointermove', (e) => {
        const r = sphere.getBoundingClientRect();
        tx = ((e.clientY - r.top) / r.height - 0.5) * -0.03;
        ty = ((e.clientX - r.left) / r.width - 0.5) * 0.03;
      });
      sphere.addEventListener('pointerleave', () => {
        tx = 0.0016;
        ty = 0.0032;
      });
      gsap.ticker.add((time, dt) => {
        if (!visible) return;
        const k = REDUCED ? 0 : dt / 16.7;
        ax = lerp(ax, tx, 0.05);
        ay = lerp(ay, ty, 0.05);
        const R = sphere.offsetWidth * 0.4;
        const cx = Math.cos(ax * k), sx = Math.sin(ax * k), cy = Math.cos(ay * k), sy = Math.sin(ay * k);
        pts.forEach((p) => {
          // вращение вокруг X, затем вокруг Y
          let y1 = p.y * cx - p.z * sx;
          let z1 = p.y * sx + p.z * cx;
          let x2 = p.x * cy + z1 * sy;
          let z2 = -p.x * sy + z1 * cy;
          p.x = x2;
          p.y = y1;
          p.z = z2;
          const depth = (p.z + 1) / 2; // 0 — сзади, 1 — спереди
          const s = 0.62 + depth * 0.55;
          const el = p.el;
          el.style.transform = `translate(-50%,-50%) translate3d(${(p.x * R).toFixed(1)}px,${(p.y * R).toFixed(1)}px,0) scale(${s.toFixed(3)})`;
          el.style.opacity = (0.18 + depth * 0.82).toFixed(3);
          el.style.zIndex = Math.round(depth * 100);
          el.style.color = depth > 0.55 ? el.dataset.c : '#86868b';
          el.style.background = depth > 0.7 ? '#ffffffd9' : 'transparent';
          el.style.boxShadow = depth > 0.7 ? '0 6px 18px -8px rgba(20,20,60,.25)' : 'none';
        });
      });
    })();

    /* ---------- Курсор ---------- */
    if (FINE_POINTER && !REDUCED) {
      const ring = $('.cursor');
      const dot = $('.cursor-dot');
      let mx = -100, my = -100, rx = -100, ry = -100;
      addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        document.body.classList.add('has-cursor');
      });
      document.addEventListener('mouseleave', () => document.body.classList.remove('has-cursor'));
      addEventListener('mousedown', () => ring.classList.add('is-down'));
      addEventListener('mouseup', () => ring.classList.remove('is-down'));
      gsap.ticker.add(() => {
        rx = lerp(rx, mx, 0.18);
        ry = lerp(ry, my, 0.18);
        ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
      });
      const hoverables = 'a, button, .tilt, .aw, .loop-list li, [data-cursor], #neural-canvas, .tag-sphere';
      document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverables)) ring.classList.add('is-hover');
      });
      document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverables) && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(hoverables))) ring.classList.remove('is-hover');
      });
    }

    /* ---------- Магнитные кнопки ---------- */
    if (FINE_POINTER && !REDUCED) {
      $$('.magnetic').forEach((el) => {
        el.addEventListener('mousemove', (e) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          gsap.to(el, { x: x * 0.28, y: y * 0.35, duration: 0.5, ease: 'power3.out' });
        });
        el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' }));
      });
    }

    /* ---------- 3D-наклон карточек ---------- */
    if (FINE_POINTER && !REDUCED) {
      $$('.tilt').forEach((el) => {
        el.addEventListener('mousemove', (e) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          el.style.setProperty('--gx', `${x * 100}%`);
          el.style.setProperty('--gy', `${y * 100}%`);
          gsap.to(el, { rotationY: (x - 0.5) * 12, rotationX: (0.5 - y) * 10, transformPerspective: 1000, duration: 0.6, ease: 'power3.out' });
        });
        el.addEventListener('mouseleave', () => gsap.to(el, { rotationY: 0, rotationX: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }));
      });
    }

    /* ---------- Пересчёт после загрузки шрифтов ---------- */
    ScrollTrigger.sort();
    const refresh = () => ScrollTrigger.refresh();
    document.fonts && document.fonts.ready.then(refresh);
    addEventListener('load', () => {
      refresh();
      if (location.hash && $(location.hash)) setTimeout(() => scrollToTarget(location.hash), LOADER_MS);
    });
  }

  /* =========================================================
     Анимированные демо (работают и без GSAP)
     ========================================================= */

  /* Печать строк по символам */
  async function typeLine(container, segments, speed = 16, cls = 'cl') {
    const line = document.createElement('span');
    line.className = cls;
    container.appendChild(line);
    const caret = document.createElement('i');
    caret.className = 'caret';
    for (const [c, text] of segments) {
      const s = document.createElement('span');
      if (c) s.className = c;
      line.appendChild(s);
      line.appendChild(caret);
      for (const ch of text) {
        s.textContent += ch;
        if (speed) await sleep(speed);
      }
    }
    caret.remove();
    return line;
  }

  function makeVisibilityGate(el) {
    let visible = false;
    let waiters = [];
    watchVisible(el, (v) => {
      visible = v;
      if (v) {
        waiters.forEach((r) => r());
        waiters = [];
      }
    });
    return () => (visible ? Promise.resolve() : new Promise((r) => waiters.push(r)));
  }

  /* Консоль «размышлений» Stells Pro */
  (async () => {
    const box = $('#think-console');
    if (!box) return;
    const gate = makeVisibilityGate(box);
    const LINES = [
      [['c-acc', '› '], ['', 'Задача: спроектировать платёжный модуль']],
      [['c-mut', '◌ '], ['', 'Декомпозиция… '], ['c-acc', '214 логических векторов']],
      [['c-mut', '◌ '], ['', 'Self-Tasking: '], ['c-acc', '12 подзадач']],
      [['c-mut', '◌ '], ['', 'Sandbox › гипотеза A: повторный платёж']],
      [['c-bad', '✕ '], ['c-bad', 'Ветка A — тупик, отсекаю']],
      [['c-mut', '◌ '], ['', 'Sandbox › гипотеза B: идемпотентные ключи']],
      [['c-warn', '◌ '], ['', 'Проверяю краевые случаи… '], ['c-ok', '38 / 38']],
      [['c-ok', '✓ '], ['c-ok', 'Верификация пройдена']],
      [['c-acc', '→ '], ['', 'Ответ готов.']],
    ];
    if (REDUCED) {
      for (const l of LINES) await typeLine(box, l, 0);
      return;
    }
    for (;;) {
      await gate();
      box.innerHTML = '';
      for (const l of LINES) {
        await gate();
        await typeLine(box, l, 22);
        await sleep(l[0][0] === 'c-bad' ? 700 : 380);
      }
      await sleep(3800);
    }
  })();

  /* Терминал Stella Coder */
  (async () => {
    const term = $('#term');
    if (!term) return;
    const gate = makeVisibilityGate(term);
    const LINES = [
      [['p', '❯ '], ['', 'stella fix --trace logs/error.log']],
      [['m', '◇ Индексирую проект… '], ['', '214 файлов']],
      [['m', '◇ Стектрейс: '], ['o', 'TypeError · server.ts:9']],
      [['m', '◇ Модель: '], ['', 'Ollama · локально']],
      [['g', '✓ Патч применён · тесты: 42 passed']],
      [['p', '❯ '], ['', 'stella new "API для магазина"']],
      [['m', '◇ Создаю: '], ['', 'package.json, Dockerfile, README']],
    ];
    if (REDUCED) {
      for (const l of LINES) await typeLine(term, l, 0, 'tl');
      return;
    }
    for (;;) {
      await gate();
      term.innerHTML = '';
      for (const l of LINES) {
        await gate();
        const isCmd = l[0][0] === 'p';
        await typeLine(term, l, isCmd ? 38 : 8, 'tl');
        await sleep(isCmd ? 500 : 320);
      }
      await sleep(4000);
    }
  })();

  /* Редактор Stella Coder: набор кода → ошибка → патч от ИИ */
  (async () => {
    const code = $('#ed-code');
    if (!code) return;
    const gate = makeVisibilityGate(code);
    const lines = $$('.ln', code).filter((l) => !l.classList.contains('ln-fix'));
    const ai = $('.ed-ai');
    const btn = $('.ai-btn');
    const setHidden = () => lines.forEach((l) => (l.style.clipPath = 'inset(0 100% 0 0)'));
    if (REDUCED) {
      code.classList.add('is-fixed');
      ai.classList.add('is-open');
      return;
    }
    for (;;) {
      await gate();
      code.classList.remove('has-bug', 'is-fixed');
      ai.classList.remove('is-open');
      lines.forEach((l) => l.getAnimations().forEach((a) => a.cancel()));
      setHidden();
      await sleep(400);
      for (const l of lines) {
        await gate();
        const n = Math.max(1, l.textContent.length);
        const dur = Math.min(900, n * 18);
        l.style.clipPath = '';
        l.animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }], { duration: dur, easing: `steps(${n})`, fill: 'forwards' });
        await sleep(dur + 60);
      }
      await sleep(500);
      code.classList.add('has-bug');
      await sleep(900);
      ai.classList.add('is-open');
      await sleep(2200);
      btn.classList.add('is-press');
      await sleep(180);
      btn.classList.remove('is-press');
      code.classList.remove('has-bug');
      code.classList.add('is-fixed');
      await sleep(4200);
    }
  })();
})();
