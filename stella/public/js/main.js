// ═══════════════════════════════════════════════════════════
//  STELLA — анимации и интерактив страницы
// ═══════════════════════════════════════════════════════════

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const isMobile = () => window.innerWidth < 768;

if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

// 3D-сцена грузится отдельно, чтобы не задерживать страницу
import('./scene.js').catch((err) => {
  console.warn('[STELLA] 3D-сцена не загрузилась:', err);
  document.documentElement.classList.add('no-webgl');
  window.dispatchEvent(new Event('stella:scene-ready'));
});

const scene = () => window.STELLA_SCENE;

// ─────────────────────────────── общий API
const toastEl = $('#toast');
let toastTimer;
const STELLA = (window.STELLA = window.STELLA || {});
STELLA.toast = (text, ms = 3200) => {
  toastEl.textContent = text;
  toastEl.classList.add('is-shown');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-shown'), ms);
};

// ─────────────────────────────── плавный скролл
let lenis = null;
if (window.Lenis && !reduced) {
  lenis = new window.Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
  if (gsap) {
    lenis.on('scroll', () => ScrollTrigger && ScrollTrigger.update());
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
}
STELLA.lenis = lenis;
STELLA.lockScroll = (lock) => {
  if (lenis) lock ? lenis.stop() : lenis.start();
  document.documentElement.style.overflow = lock ? 'hidden' : '';
};

function scrollToTarget(target) {
  if (lenis) lenis.scrollTo(target, { offset: -70, duration: 1.6 });
  else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = id === '#top' ? document.body : $(id);
  if (!target) return;
  e.preventDefault();
  closeMenu();
  scrollToTarget(id === '#top' ? 0 : target);
});

// ─────────────────────────────── прелоадер
const preloader = $('#preloader');
const preBar = $('[data-preload-bar]');
const prePct = $('[data-preload-pct]');
const preText = $('[data-preload-text]');
const preSteps = ['Инициализация нейроядра', 'Загрузка 3D-моделей', 'Подключение AI-моделей', 'Калибровка голоса', 'Готово'];
let preProgress = 0;
let preTarget = 15;
const loadFlags = { fonts: false, scene: false, page: false };

function updatePreTarget() {
  preTarget = 15 + (loadFlags.fonts ? 20 : 0) + (loadFlags.page ? 25 : 0) + (loadFlags.scene ? 40 : 0);
}

document.fonts?.ready.then(() => {
  loadFlags.fonts = true;
  updatePreTarget();
});
window.addEventListener('load', () => {
  loadFlags.page = true;
  updatePreTarget();
});
window.addEventListener('stella:scene-ready', () => {
  loadFlags.scene = true;
  updatePreTarget();
});
if (window.STELLA_SCENE?.ready) loadFlags.scene = true;
updatePreTarget();

const preStart = performance.now();
let introStarted = false;
(function preloadTick() {
  const elapsed = performance.now() - preStart;
  const forced = elapsed > 6500;
  const target = forced ? 100 : preTarget;
  preProgress += (target - preProgress) * 0.08 + 0.15;
  preProgress = Math.min(preProgress, target, 100);
  const shown = Math.floor(preProgress);
  prePct.textContent = shown;
  preBar.style.width = shown + '%';
  preText.textContent = preSteps[Math.min(preSteps.length - 1, Math.floor(shown / 22))];
  if (shown >= 99.5 || (preTarget >= 100 && shown >= 99) || forced) {
    if (!introStarted && elapsed > 900) {
      introStarted = true;
      prePct.textContent = '100';
      preBar.style.width = '100%';
      finishPreloader();
      return;
    }
  }
  requestAnimationFrame(preloadTick);
})();

function finishPreloader() {
  document.body.classList.remove('is-loading');
  if (gsap) {
    gsap
      .timeline()
      .to('.preloader__core, .preloader__name, .preloader__status, .preloader__bar', { opacity: 0, y: -30, stagger: 0.05, duration: 0.5, ease: 'power2.in' })
      .to(preloader, { clipPath: 'circle(0% at 50% 50%)', duration: 1.1, ease: 'expo.inOut' }, '-=0.15')
      .add(() => preloader.remove());
    preloader.style.clipPath = 'circle(150% at 50% 50%)';
  } else {
    preloader.remove();
  }
  heroIntro();
}

// ─────────────────────────────── HERO
const heroTitle = $('[data-hero-title]');
const titleLetters = $$(':scope > span', heroTitle);
titleLetters.forEach((s, i) => s.style.setProperty('--i', i));

function heroIntro() {
  scene()?.intro();
  if (!gsap) return;
  const tl = gsap.timeline({ delay: 0.35 });
  tl.from(titleLetters, {
    yPercent: 110,
    rotateX: -110,
    z: -400,
    opacity: 0,
    stagger: 0.08,
    duration: 1.8,
    ease: 'expo.out',
  })
    .from('[data-hero-in]', { y: 40, opacity: 0, stagger: 0.1, duration: 1.2, ease: 'power3.out', clearProps: 'transform' }, 0.2)
    .from('.nav', { y: -90, opacity: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform,opacity' }, 0.5)
    .from('.hud-chip', { opacity: 0, filter: 'blur(12px)', duration: 1.2, stagger: 0.12, ease: 'power2.out', clearProps: 'filter' }, 0.9)
    .from('.hero__scroll', { opacity: 0, duration: 0.8 }, 1.2);

  // при скролле буквы разлетаются в 3D
  if (ScrollTrigger) {
    gsap.fromTo(
      titleLetters,
      { x: 0, z: 0, rotateY: 0, opacity: 1 },
      {
        x: (i) => (i - 2.5) * (isMobile() ? 18 : 70),
        z: (i) => (i % 2 ? 260 : -160),
        rotateY: (i) => (i - 2.5) * 16,
        opacity: 0.15,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
      },
    );
    gsap.fromTo(
      '.hero__content',
      { yPercent: 0, opacity: 1 },
      {
        yPercent: -18,
        opacity: 0,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: 0.6 },
      },
    );
  }
}

// параллакс HUD и заголовка за курсором
const hud = $('.hero__hud');
if (finePointer) {
  let tx = 0;
  let ty = 0;
  let cx = 0;
  let cy = 0;
  window.addEventListener('pointermove', (e) => {
    tx = e.clientX / window.innerWidth - 0.5;
    ty = e.clientY / window.innerHeight - 0.5;
  });
  (function hudLoop() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    if (hud) {
      hud.style.setProperty('--hud-ry', `${cx * 14}deg`);
      hud.style.setProperty('--hud-rx', `${-cy * 10}deg`);
    }
    heroTitle.style.transform = `perspective(1200px) rotateY(${cx * 16}deg) rotateX(${-cy * 10}deg)`;
    requestAnimationFrame(hudLoop);
  })();
}

// ─────────────────────────────── навигация
const nav = $('#nav');
const burger = $('.nav__burger');
const menu = $('#mobileMenu');
function closeMenu() {
  if (menu.hidden) return;
  menu.hidden = true;
  burger.setAttribute('aria-expanded', 'false');
}
burger.addEventListener('click', () => {
  const open = menu.hidden;
  menu.hidden = !open;
  burger.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('[data-register]')) closeMenu();
});

let lastY = window.scrollY;
let velocity = 0;
const progressBar = $('.scroll-progress');
const marquee = $('.marquee');
const marqueeAnim = () => $('.marquee__track')?.getAnimations?.()[0];

function onScrollFrame() {
  const y = window.scrollY;
  const dy = y - lastY;
  lastY = y;
  velocity += (dy - velocity) * 0.2;

  if (Math.abs(dy) > 2 && menu.hidden) nav.classList.toggle('is-hidden', dy > 0 && y > 300);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);

  const v = clamp(velocity, -60, 60);
  if (scene()) scene().velocity = v / 20;
  marquee.style.setProperty('--skew', `${clamp(-v * 0.15, -10, 10)}deg`);
  const anim = marqueeAnim();
  if (anim) anim.playbackRate = 1 + Math.min(4, Math.abs(v) / 10);
  requestAnimationFrame(onScrollFrame);
}
requestAnimationFrame(onScrollFrame);
marquee.style.transform = 'rotate(-2.5deg) scale(1.05) skewX(var(--skew, 0deg))';

// ─────────────────────────────── хореография 3D-сцены по секциям
const sceneKeyframes = {
  hero: { anchor: '[data-hero-title]', x: 0, y: 0, scale: 1, camZ: 8, models: 1, galaxy: 1, glow: 1, tilt: 0 },
  agent: { anchor: '.phone3d', x: 0, y: 0, scale: 0.72, camZ: 9, models: 0.55, galaxy: 0.75, glow: 1, tilt: 0.12 },
  replace: { x: 5.2, y: 1.9, scale: 0.5, camZ: 10, models: 0.35, galaxy: 1.1, glow: 0.9, tilt: 0 },
  features: { x: -5.2, y: 1.7, scale: 0.5, camZ: 11, models: 0.3, galaxy: 1.2, glow: 0.9, tilt: -0.2 },
  benefits: { x: 5.2, y: 1.9, scale: 0.55, camZ: 10, models: 0.4, galaxy: 1, glow: 1, tilt: 0.1 },
  scenarios: { anchor: '[data-carousel]', x: 0, y: 0, scale: 0.62, camZ: 9, models: 0, galaxy: 1.3, glow: 1, tilt: 0 },
  how: { anchor: '.console', x: 0, y: 0, scale: 0.72, camZ: 9, models: 0.45, galaxy: 0.9, glow: 1, tilt: 0.15 },
  why: { anchor: '.versus__vs', x: 0, y: 0, scale: 0.32, camZ: 10, models: 0.25, galaxy: 1, glow: 1.1, tilt: 0 },
  pricing: { x: 5.6, y: 2.6, scale: 0.42, camZ: 11, models: 0.15, galaxy: 0.7, glow: 0.8, tilt: 0 },
  where: { anchor: '.orbit__center svg', x: 0, y: 0, scale: 0.5, camZ: 9, models: 0, galaxy: 1, glow: 1.1, tilt: 0 },
  start: { anchor: '.start .btn', x: 0, y: 0, scale: 0.9, camZ: 7.5, models: 0.8, galaxy: 1.25, glow: 1.1, tilt: 0 },
};

const navLinks = $$('.nav__links a');
let currentSceneKey = 'hero';
window.addEventListener('stella:scene-ready', () => scene()?.set(sceneKeyframes[currentSceneKey], 0.01));
if (ScrollTrigger) {
  $$('[data-scene]').forEach((section) => {
    const key = section.dataset.scene;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 45%',
      onToggle: (self) => {
        if (!self.isActive) return;
        currentSceneKey = key;
        if (sceneKeyframes[key]) scene()?.set(sceneKeyframes[key]);
        navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${section.id}`));
      },
    });
  });
}

// ─────────────────────────────── разбивка заголовков на слова
function splitWords(el) {
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(' '));
          } else {
            const w = document.createElement('span');
            w.className = 'w';
            const wi = document.createElement('span');
            wi.className = 'wi';
            wi.textContent = part;
            w.appendChild(wi);
            frag.appendChild(w);
          }
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  };
  walk(el);
  el.classList.add('is-split');
}

if (gsap && ScrollTrigger && !reduced) {
  $$('[data-split]').forEach((el) => {
    splitWords(el);
    gsap.from($$('.wi', el), {
      yPercent: 115,
      rotateX: -75,
      opacity: 0,
      duration: 1.2,
      stagger: 0.05,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  $$('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      rotateX: -18,
      transformPerspective: 800,
      duration: 1.1,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  const batchIn = (selector, vars) =>
    ScrollTrigger.batch(selector, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: 80,
          rotateX: 35,
          z: -150,
          transformPerspective: 1000,
          duration: 1.2,
          stagger: 0.09,
          ease: 'expo.out',
          clearProps: 'transform,opacity',
          ...vars,
        }),
    });
  batchIn('.card');
  batchIn('.stat');
  batchIn('.plan');
  batchIn('.flip', { rotateX: 0, rotateY: -40 });
  batchIn('.caps li', { y: 30, rotateX: 0, z: 0, x: 40 });
  batchIn('.vs-card', { rotateY: (i) => (i ? -30 : 30), rotateX: 0 });

  gsap.from('.console', {
    opacity: 0,
    rotateY: -40,
    x: 80,
    duration: 1.4,
    ease: 'expo.out',
    clearProps: 'transform,opacity',
    scrollTrigger: { trigger: '.console', start: 'top 85%', once: true },
  });

  gsap.from('.orbit', {
    opacity: 0,
    scale: 0.6,
    duration: 1.6,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.orbit', start: 'top 85%', once: true },
  });

  gsap.from('.total', {
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.4)',
    scrollTrigger: { trigger: '.total', start: 'top 90%', once: true },
  });
}

// ─────────────────────────────── 3D-наклон карточек
if (finePointer && !reduced) {
  $$('[data-tilt]').forEach((el) => {
    let raf = 0;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.classList.add('is-tilting');
        el.style.setProperty('--ry', `${(px - 0.5) * 16}deg`);
        el.style.setProperty('--rx', `${(0.5 - py) * 14}deg`);
        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
      });
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      el.classList.remove('is-tilting');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--rx', '0deg');
    });
  });
}

// ─────────────────────────────── магнитные кнопки и курсор
if (finePointer && !reduced) {
  $$('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });

  const cursor = $('.cursor');
  const dot = $('.cursor__dot');
  const ring = $('.cursor__ring');
  let mx = -100;
  let my = -100;
  let rx = -100;
  let ry = -100;
  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    const interactive = e.target.closest('a, button, label, input, select, [data-tilt], .flip, .carousel, .caps li');
    cursor.classList.toggle('is-hover', Boolean(interactive));
  });
  window.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  window.addEventListener('pointerup', () => cursor.classList.remove('is-down'));
  (function cursorLoop() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(cursorLoop);
  })();
}

// ─────────────────────────────── видимость элементов
function whenVisible(el, onIn, onOut, threshold = 0.25) {
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? onIn?.() : onOut?.())),
    { threshold },
  );
  io.observe(el);
}

// ─────────────────────────────── 3D-телефон: живые демо
const phoneEl = $('[data-phone]');
const phoneBody = $('[data-phone-body]');
const phoneToast = $('[data-phone-toast]');
const tabs = $$('.phone-tabs button');
const capsItems = $$('[data-mode-link]');
const MODES = ['chat', 'call', 'parse', 'pc'];
let mode = 'chat';
let runToken = 0;
let phoneVisible = false;
let phoneRunning = false;

const alive = (tok) => tok === runToken && phoneVisible;

function showToast(text) {
  phoneToast.textContent = text;
  phoneToast.classList.add('is-shown');
  setTimeout(() => phoneToast.classList.remove('is-shown'), 2600);
}

function setMode(next, user = false) {
  mode = next;
  tabs.forEach((t) => {
    const on = t.dataset.mode === next;
    t.classList.toggle('is-active', on);
    t.setAttribute('aria-selected', String(on));
  });
  $$('[data-screen]').forEach((s) => s.classList.toggle('is-active', s.dataset.screen === next));
  capsItems.forEach((li) => li.classList.toggle('is-active', li.dataset.modeLink === next));
  phoneToast.classList.remove('is-shown');
  // разворачиваем телефон немного по-разному для каждого режима
  const rot = { chat: [-22, 8, 2], call: [18, 6, -3], parse: [-14, -4, 1], pc: [24, 10, -2] }[next];
  phoneEl.style.setProperty('--base-ry', rot[0]);
  phoneEl.style.setProperty('--base-rx', rot[1]);
  phoneEl.style.setProperty('--base-rz', rot[2]);
  scene()?.pulse(0.6);
  runMode(user);
}

async function runMode() {
  const tok = ++runToken;
  if (!phoneVisible) {
    phoneRunning = false;
    return;
  }
  phoneRunning = true;
  const scripts = { chat: playChat, call: playCall, parse: playParse, pc: playPc };
  const finished = await scripts[mode](tok);
  if (finished && alive(tok)) {
    await wait(2600);
    if (alive(tok)) setMode(MODES[(MODES.indexOf(mode) + 1) % MODES.length]);
  }
}

tabs.forEach((t) => t.addEventListener('click', () => setMode(t.dataset.mode, true)));
capsItems.forEach((li) => {
  li.addEventListener('click', () => setMode(li.dataset.modeLink, true));
  if (finePointer) li.addEventListener('pointerenter', () => li.dataset.modeLink !== mode && setMode(li.dataset.modeLink, true));
});

whenVisible(
  phoneEl,
  () => {
    if (phoneVisible) return;
    phoneVisible = true;
    if (!phoneRunning) runMode();
  },
  () => {
    phoneVisible = false;
    phoneRunning = false;
    runToken++;
  },
  0.3,
);

// поворот телефона за курсором и при скролле
{
  let mx = 0;
  let my = 0;
  let sx = 0;
  let sy = 0;
  const stage = $('.agent__stage');
  if (finePointer) {
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    });
    stage.addEventListener('pointerleave', () => {
      mx = 0;
      my = 0;
    });
  }
  (function phoneLoop() {
    sx += (mx - sx) * 0.08;
    sy += (my - sy) * 0.08;
    const r = phoneEl.getBoundingClientRect();
    const scrollK = clamp((r.top + r.height / 2) / window.innerHeight - 0.5, -1, 1);
    const cs = phoneEl.style;
    const bry = Number(cs.getPropertyValue('--base-ry') || -22);
    const brx = Number(cs.getPropertyValue('--base-rx') || 8);
    const brz = Number(cs.getPropertyValue('--base-rz') || 2);
    phoneBody.style.setProperty('--pry', `${bry + sx * 30 + scrollK * 18}deg`);
    phoneBody.style.setProperty('--prx', `${brx - sy * 18 + scrollK * 10}deg`);
    phoneBody.style.setProperty('--prz', `${brz}deg`);
    requestAnimationFrame(phoneLoop);
  })();
}

// — WhatsApp: STELLA торгуется за вас
const waBody = $('[data-wa-body]');
const waStatus = $('[data-wa-status]');
function timeNow(offsetMin = 0) {
  const d = new Date(Date.now() + offsetMin * 60000);
  return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}
function waAdd(kind, html) {
  const el = document.createElement('div');
  el.className = `msg msg--${kind}`;
  el.innerHTML = kind === 'typing' ? '<i></i><i></i><i></i>' : `${html}${kind === 'sys' ? '' : `<time>${timeNow()}</time>`}`;
  waBody.appendChild(el);
  while (waBody.children.length > 8) waBody.firstElementChild.remove();
  return el;
}
async function playChat(tok) {
  waBody.innerHTML = '';
  waStatus.textContent = 'в сети';
  const script = [
    ['out', 'Здравствуйте! Диван из объявления ещё продаётся?', 900],
    ['in', 'Добрый день! Да, актуально. 45 000 ₽', 1300],
    ['out', 'Отличное состояние 👍 Заберём сегодня сами, без доставки. Отдадите за 38 000?', 1500],
    ['in', 'Хм… давайте за 40 000 — и договорились', 1500],
    ['out', 'Договорились 🤝 Будем в 19:00. Пришлёте адрес?', 1200],
    ['in', 'ул. Лесная, 12. Жду!', 1100],
  ];
  for (const [dir, text, delay] of script) {
    const typing = waAdd('typing');
    typing.classList.add(dir === 'in' ? 'msg--in' : 'msg--out');
    waStatus.textContent = dir === 'in' ? 'печатает…' : 'в сети';
    await wait(delay);
    if (!alive(tok)) return false;
    typing.remove();
    waAdd(dir, text);
    waStatus.textContent = 'в сети';
    await wait(450);
    if (!alive(tok)) return false;
  }
  waAdd('sys', '✓ Сделка: 40 000 ₽ вместо 45 000 ₽');
  showToast('💸 −5 000 ₽ за 1 минуту');
  scene()?.pulse(1);
  await wait(2200);
  return alive(tok);
}

// — Звонок человеческим голосом
const callLines = $('[data-call-lines]');
const callTimer = $('[data-call-timer]');
const wave = $('[data-call-wave]');
const BARS = 26;
for (let i = 0; i < BARS; i++) wave.appendChild(document.createElement('i'));
const bars = [...wave.children];
let waveLevel = 0;
let waveRaf = 0;
function waveLoop() {
  const t = performance.now() / 1000;
  bars.forEach((b, i) => {
    const n = Math.abs(Math.sin(t * 9 + i * 0.7) * Math.cos(t * 4.3 + i * 1.3));
    b.style.height = `${12 + n * 88 * waveLevel}%`;
  });
  waveRaf = requestAnimationFrame(waveLoop);
}
async function playCall(tok) {
  callLines.innerHTML = '';
  cancelAnimationFrame(waveRaf);
  waveLoop();
  const started = Date.now();
  const timer = setInterval(() => {
    const s = Math.floor((Date.now() - started) / 1000);
    callTimer.textContent = `00:${String(s).padStart(2, '0')}`;
  }, 250);
  const script = [
    ['them', 'Клиника', 'Стоматология «Улыбка», здравствуйте!', 1500],
    ['me', 'STELLA', 'Добрый день! Хочу записать Анну Смирнову на чистку. Есть время в четверг?', 2300],
    ['them', 'Клиника', 'В четверг свободно 11:00 и 15:30.', 1600],
    ['me', 'STELLA', 'Давайте 15:30. Подтверждение пришлите, пожалуйста, в WhatsApp.', 2100],
    ['them', 'Клиника', 'Записала! Ждём вас в четверг.', 1500],
  ];
  try {
    for (const [who, label, text, dur] of script) {
      waveLevel = who === 'me' ? 1 : 0.45;
      const el = document.createElement('div');
      el.className = `call__line call__line--${who}`;
      el.innerHTML = `<b>${label}</b>${text}`;
      callLines.appendChild(el);
      while (callLines.children.length > 3) callLines.firstElementChild.remove();
      await wait(dur);
      if (!alive(tok)) return false;
      waveLevel = 0.1;
      await wait(350);
      if (!alive(tok)) return false;
    }
    waveLevel = 0;
    const ok = document.createElement('div');
    ok.className = 'call__line call__line--ok';
    ok.textContent = '✓ Запись: четверг, 15:30 — в календаре';
    callLines.appendChild(ok);
    while (callLines.children.length > 3) callLines.firstElementChild.remove();
    showToast('📅 Записала вас к врачу');
    scene()?.pulse(1);
    await wait(2400);
    return alive(tok);
  } finally {
    clearInterval(timer);
    if (mode !== 'call' || tok === runToken) {
      cancelAnimationFrame(waveRaf);
      waveLevel = 0;
    }
  }
}

// — Парсинг сайтов
const parseTable = $('[data-parse-table]');
const parseBar = $('[data-parse-bar]');
const parseStatus = $('[data-parse-status]');
const parseFile = $('[data-parse-file]');
async function playParse(tok) {
  $$('.parse__row:not(.parse__row--head)', parseTable).forEach((r) => r.remove());
  parseFile.classList.remove('is-shown');
  parseBar.style.width = '0%';
  const rows = [
    ['Магазин A', '45 990 ₽', true],
    ['Магазин B', '43 490 ₽', true],
    ['Магазин C', '44 200 ₽', false],
    ['Магазин D', '41 990 ₽', true],
    ['Магазин E', '46 500 ₽', true],
    ['Магазин F', '42 750 ₽', true],
  ];
  for (let i = 0; i < rows.length; i++) {
    parseStatus.textContent = `Обхожу сайты… ${i * 2 + 2}/12`;
    await wait(650);
    if (!alive(tok)) return false;
    const [shop, price, ok] = rows[i];
    const row = document.createElement('div');
    row.className = 'parse__row';
    row.dataset.price = price.replace(/\D/g, '');
    row.innerHTML = `<span>${shop}</span><span>${price}</span><span class="${ok ? 'ok' : 'no'}">${ok ? 'есть' : 'нет'}</span>`;
    parseTable.appendChild(row);
    parseBar.style.width = `${((i + 1) / rows.length) * 100}%`;
  }
  await wait(500);
  if (!alive(tok)) return false;
  const best = $$('.parse__row:not(.parse__row--head)', parseTable)
    .filter((r) => r.lastElementChild.classList.contains('ok'))
    .sort((a, b) => a.dataset.price - b.dataset.price)[0];
  best?.classList.add('parse__row--best');
  parseStatus.textContent = 'Готово: 12 сайтов, лучшая цена найдена';
  parseFile.classList.add('is-shown');
  showToast('📊 Таблица с ценами готова');
  scene()?.pulse(1);
  await wait(2600);
  return alive(tok);
}

// — Удалённое управление компьютером
const pcWin = $('[data-pc-win]');
const pcUrl = $('[data-pc-url]');
const pcContent = $('[data-pc-content]');
const pcCursor = $('[data-pc-cursor]');
const pcLog = $('[data-pc-log]');
function pcSay(text) {
  const d = document.createElement('div');
  d.textContent = text;
  pcLog.appendChild(d);
  while (pcLog.children.length > 3) pcLog.firstElementChild.remove();
}
function moveCursor(x, y) {
  pcCursor.style.left = `${x}%`;
  pcCursor.style.top = `${y}%`;
}
async function typeInto(el, text, tok) {
  el.classList.add('is-focus');
  for (const ch of text) {
    el.textContent += ch;
    await wait(55);
    if (!alive(tok)) return false;
  }
  el.classList.remove('is-focus');
  return true;
}
async function playPc(tok) {
  pcLog.innerHTML = '';
  pcWin.classList.remove('is-open');
  pcContent.innerHTML = '';
  pcUrl.textContent = 'stella://agent';
  moveCursor(70, 80);
  pcSay('Подключаюсь к «Рабочий ПК»…');
  await wait(900);
  if (!alive(tok)) return false;
  moveCursor(30, 30);
  await wait(700);
  if (!alive(tok)) return false;
  pcWin.classList.add('is-open');
  pcSay('Открываю сайт бронирования');
  await wait(500);
  pcUrl.textContent = 'booking.example/hotels';
  pcContent.innerHTML =
    '<b>Найти отель</b><div class="pc__field"></div><div class="pc__field"></div><div class="pc__field"></div><span class="pc__btn">Забронировать</span>';
  const fields = $$('.pc__field', pcContent);
  const values = ['Казань, центр', '12–14 октября', '2 гостя, до 9 000 ₽'];
  for (let i = 0; i < fields.length; i++) {
    moveCursor(45 + i * 4, 38 + i * 13);
    await wait(500);
    if (!alive(tok)) return false;
    if (i === 0) pcSay('Заполняю форму');
    if (!(await typeInto(fields[i], values[i], tok))) return false;
  }
  moveCursor(22, 82);
  await wait(700);
  if (!alive(tok)) return false;
  const btn = $('.pc__btn', pcContent);
  btn.classList.add('is-pressed');
  await wait(220);
  btn.classList.remove('is-pressed');
  pcSay('Сравниваю 38 вариантов…');
  await wait(1000);
  if (!alive(tok)) return false;
  const done = document.createElement('div');
  done.className = 'pc__done';
  done.textContent = '✓ Бронь: «Отель на Баумана», 8 400 ₽';
  pcContent.appendChild(done);
  pcSay('Готово. Отчёт отправлен вам в WhatsApp');
  showToast('🖥 Сделала на вашем ПК');
  scene()?.pulse(1);
  await wait(2600);
  return alive(tok);
}

setMode('chat');

// ─────────────────────────────── флип-карточки «Что заменяет»
const flips = $$('.flip');
let flipsDone = false;
whenVisible(
  $('[data-flips]'),
  async () => {
    if (flipsDone) return;
    flipsDone = true;
    await wait(700);
    for (const f of flips) {
      f.classList.add('is-flipped');
      await wait(reduced ? 0 : 320);
    }
  },
  null,
  0.35,
);
flips.forEach((f) => {
  if (finePointer) {
    f.addEventListener('pointerenter', () => f.classList.toggle('is-flipped'));
  } else {
    f.addEventListener('click', () => f.classList.toggle('is-flipped'));
  }
  f.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      f.classList.toggle('is-flipped');
    }
  });
});

// ─────────────────────────────── счётчики
$$('[data-count]').forEach((el) => {
  const target = Number(el.dataset.count);
  let done = false;
  whenVisible(
    el,
    () => {
      if (done) return;
      done = true;
      if (!gsap || reduced) {
        el.textContent = target.toLocaleString('ru-RU');
        return;
      }
      const o = { v: 0 };
      gsap.to(o, {
        v: target,
        duration: 2.2,
        ease: 'power3.out',
        onUpdate: () => (el.textContent = Math.round(o.v).toLocaleString('ru-RU')),
      });
    },
    null,
    0.6,
  );
});

// ─────────────────────────────── 3D-карусель сценариев
{
  const carousel = $('[data-carousel]');
  const ring = $('[data-carousel-ring]');
  const cards = [...ring.children];
  const n = cards.length;
  const step = 360 / n;
  let rot = 0;
  let vel = 0;
  let dragging = false;
  let lastX = 0;
  let visible = false;
  const auto = reduced ? 0 : -0.12;

  function layout() {
    const w = cards[0].offsetWidth;
    const r = Math.round(w / 2 / Math.tan(Math.PI / n)) + (isMobile() ? 24 : 70);
    carousel.style.setProperty('--r', `${r}px`);
    ring.style.setProperty('--step', `${step}deg`);
    cards.forEach((c, i) => c.style.setProperty('--i', i));
  }
  layout();
  window.addEventListener('resize', layout);

  carousel.addEventListener('pointerdown', (e) => {
    dragging = true;
    lastX = e.clientX;
    carousel.classList.add('is-dragging');
    carousel.setPointerCapture(e.pointerId);
  });
  carousel.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    vel = dx * 0.28;
    rot += vel;
  });
  const end = () => {
    dragging = false;
    carousel.classList.remove('is-dragging');
  };
  carousel.addEventListener('pointerup', end);
  carousel.addEventListener('pointercancel', end);

  whenVisible(carousel, () => (visible = true), () => (visible = false), 0.05);

  (function carouselLoop() {
    if (visible) {
      if (!dragging) {
        vel += (auto + velocity * 0.02 - vel) * 0.04;
        rot += vel;
      }
      ring.style.setProperty('--rot', `${rot}deg`);
      cards.forEach((c, i) => {
        const a = (((i * step + rot) % 360) + 360) % 360;
        const facing = Math.cos((a * Math.PI) / 180);
        c.style.opacity = (0.25 + 0.75 * Math.max(0, facing)).toFixed(3);
      });
    }
    requestAnimationFrame(carouselLoop);
  })();
}

// ─────────────────────────────── консоль «задача → результат»
{
  const steps = $$('[data-cstep]');
  const bar = $('[data-console-bar]');
  const apply = (p) => {
    const idx = Math.min(steps.length, Math.floor(p * (steps.length + 0.999)));
    steps.forEach((s, i) => {
      s.classList.toggle('is-done', i < idx);
      s.classList.toggle('is-active', i === idx);
    });
    bar.style.width = `${Math.round(p * 100)}%`;
  };
  if (ScrollTrigger && !reduced) {
    ScrollTrigger.create({
      trigger: '.how',
      start: 'top 65%',
      end: 'bottom 55%',
      scrub: true,
      onUpdate: (self) => apply(self.progress),
    });
  } else {
    apply(1);
  }
}

// ─────────────────────────────── политика (из футера)
$('[data-open-policy]')?.addEventListener('click', () => {
  const dlg = document.createElement('dialog');
  dlg.className = 'policy-dialog';
  dlg.setAttribute('data-lenis-prevent', '');
  dlg.innerHTML = `<div class="policy">${$('[data-policy]').innerHTML}</div><button class="btn btn--primary btn--block" type="button">Понятно</button>`;
  Object.assign(dlg.style, {
    maxWidth: 'min(600px, calc(100% - 32px))',
    border: '0',
    borderRadius: '24px',
    padding: '20px',
    background: '#120e28',
    color: 'inherit',
    boxShadow: '0 40px 120px -20px rgba(139,92,255,.6), inset 0 0 0 1px rgba(255,255,255,.12)',
  });
  $('.policy', dlg).style.maxHeight = '60vh';
  dlg.querySelector('button').addEventListener('click', () => dlg.close());
  dlg.addEventListener('close', () => {
    dlg.remove();
    STELLA.lockScroll(false);
  });
  document.body.appendChild(dlg);
  STELLA.lockScroll(true);
  dlg.showModal();
});

$$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

window.addEventListener('load', () => ScrollTrigger?.refresh());
