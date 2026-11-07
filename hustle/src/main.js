import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initScene } from './scene.js';
import { initMarket } from './market.js';
import { PRICES } from './data.js';
import { $, $$, reduced, finePointer, tilt, modalHooks } from './ui.js';

gsap.registerPlugin(ScrollTrigger);
const root = document.documentElement;

// ——— Плавный скролл
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  window.__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  modalHooks.onOpen = () => lenis.stop();
  modalHooks.onClose = () => lenis.start();
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-open]')) closeMenu();
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const el = id === '#top' ? document.body : $(id);
  if (!el) return;
  e.preventDefault();
  closeMenu();
  if (lenis) lenis.scrollTo(id === '#top' ? 0 : el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
});

// ——— Тема
const scene = initScene($('#scene'));
function applyTheme(t, animate) {
  const swap = () => {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('hustle-theme', t); } catch {}
    $('meta[name=theme-color]').content = t === 'light' ? '#f4f2ee' : '#08080c';
    scene.setTheme(t);
  };
  if (animate && document.startViewTransition && !reduced) {
    const btn = $('#themeToggle').getBoundingClientRect();
    const x = btn.left + btn.width / 2, y = btn.top + btn.height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(swap).ready.then(() => {
      root.animate({ clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' });
    });
  } else swap();
}
applyTheme(root.getAttribute('data-theme') || 'dark', false);
$('#themeToggle').addEventListener('click', () => applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true));

// ——— Меню
const burger = $('#burger');
function closeMenu() { root.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); }
burger.addEventListener('click', () => {
  const on = root.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', on);
});

// ——— Шапка: прячется при скролле вниз
let lastY = 0;
const header = $('#header');
function onScroll(y) {
  header.classList.toggle('is-scrolled', y > 30);
  header.classList.toggle('is-hidden', y > 400 && y > lastY && !root.classList.contains('menu-open'));
  lastY = y;
}
if (lenis) lenis.on('scroll', (l) => onScroll(l.scroll)); else addEventListener('scroll', () => onScroll(scrollY), { passive: true });

// ——— Цены и год
$$('[data-price]').forEach((el) => { el.textContent = PRICES[el.dataset.price]; });
$('#year').textContent = new Date().getFullYear();

// ——— Разбивка заголовков на символы
function splitChars(el) {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.append(' '); return; }
          const word = document.createElement('span'); word.className = 'sw';
          [...w].forEach((ch) => { const s = document.createElement('span'); s.className = 'sc'; s.textContent = ch; word.append(s); });
          frag.append(word);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
    });
  };
  walk(el);
  return $$('.sc', el);
}

// ——— Курсор и магнитные кнопки
if (finePointer && !reduced) {
  root.classList.add('has-cursor');
  const dot = $('.cursor__dot'), ring = $('.cursor__ring');
  const dx = gsap.quickTo(dot, 'x', { duration: 0.1 }), dy = gsap.quickTo(dot, 'y', { duration: 0.1 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const hot = e.target.closest('a, button, .lot, label.drop, summary, select, .chip');
    root.classList.toggle('cursor-hot', !!hot);
    root.classList.toggle('cursor-text', !hot && !!e.target.closest('input, textarea'));
  });
  document.addEventListener('pointerdown', () => root.classList.add('cursor-down'));
  document.addEventListener('pointerup', () => root.classList.remove('cursor-down'));

  $$('.magnetic').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.35); y((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener('pointerleave', () => { x(0); y(0); });
  });

  // карточки-уведомления в hero реагируют на мышь
  const floats = $$('.float-card');
  addEventListener('pointermove', (e) => {
    const mx = e.clientX / innerWidth - 0.5, my = e.clientY / innerHeight - 0.5;
    floats.forEach((f) => gsap.to(f, { x: mx * 60 * f.dataset.depth, y: my * 40 * f.dataset.depth, rotateY: mx * 20, rotateX: -my * 20, duration: 1, overwrite: 'auto' }));
  }, { passive: true });
}
$$('.tilt').forEach((el) => tilt(el, 7));

// ——— Анимации по скроллу
function scrollAnims() {
  if (reduced) return;
  $$('.split').forEach((el) => {
    const chars = splitChars(el);
    gsap.from(chars, {
      yPercent: 110, rotateX: -80, opacity: 0, transformOrigin: '50% 100%', duration: 1, ease: 'expo.out', stagger: 0.018,
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
  $$('.reveal').forEach((el) => {
    gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  // бегущая строка — скорость и наклон от скролла
  const track = $('.marquee__track');
  const loop = gsap.to(track, { xPercent: -50, repeat: -1, duration: 26, ease: 'none' });
  ScrollTrigger.create({
    onUpdate: (s) => {
      const v = s.getVelocity();
      gsap.to(loop, { timeScale: 1 + Math.min(Math.abs(v) / 300, 6) * (v < 0 ? -1 : 1), duration: 0.3, overwrite: true });
      gsap.to('.marquee', { skewY: gsap.utils.clamp(-4, 4, v / -400), duration: 0.4, overwrite: true });
    },
  });
  ScrollTrigger.addEventListener('scrollEnd', () => gsap.to(loop, { timeScale: 1, duration: 0.8 }));

  // шаги — горизонтальная прокрутка на десктопе
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const track = $('#howTrack');
    const dist = () => track.scrollWidth - track.parentElement.clientWidth;
    gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: '.how__wrap', start: 'center center', end: () => '+=' + dist(), pin: '#how', scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 },
    });
  });
  mm.add('(max-width: 899px)', () => {
    $$('.step').forEach((s) => gsap.from(s, { y: 60, opacity: 0, rotateX: -20, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 88%' } }));
  });

  // орбита команды
  gsap.from('.orbit', { scale: 0.5, rotate: -90, opacity: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.orbit', start: 'top 80%' } });

  // тарифы веером
  gsap.from('.plan', { y: 120, rotateY: (i) => (i - 1) * -25, rotateX: 20, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: 0.12, scrollTrigger: { trigger: '.plans', start: 'top 80%' } });

  // футер: огромное слово выезжает
  gsap.fromTo('.footer__big', { yPercent: 60, scale: 0.9 }, { yPercent: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });
  // CTA-шар вращается от скролла
  gsap.to('.cta__orb', { rotate: 180, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom top', scrub: true } });
  // hero уходит
  gsap.to('.hero__inner', { yPercent: -18, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

// ——— Вступление
function intro() {
  const pre = $('#preloader');
  if (reduced) { pre.remove(); root.classList.add('is-ready'); return; }
  const num = $('#preloadNum'), o = { v: 0 };
  const tl = gsap.timeline();
  tl.from('.preloader__word span', { yPercent: 120, rotateX: -90, opacity: 0, stagger: 0.06, duration: 0.8, ease: 'expo.out' })
    .to(o, { v: 100, duration: 1.1, ease: 'power2.inOut', onUpdate: () => { num.textContent = Math.round(o.v); } }, 0)
    .to('.preloader__bar i', { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0)
    .to('.preloader__word span', { yPercent: -120, opacity: 0, stagger: 0.04, duration: 0.5, ease: 'power3.in' }, '+=0.1')
    .to(pre, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '-=0.2')
    .add(() => { pre.remove(); root.classList.add('is-ready'); })
    .from('.hero__title .word', { yPercent: 120, rotateX: -70, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.07 }, '-=0.5')
    .from('.hero__eyebrow, .hero__lead, .search, .hero__chips .chip, .hero__cta > *', { y: 30, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.05, clearProps: 'transform,opacity' }, '-=0.9')
    .from('.float-card', { scale: 0.5, opacity: 0, duration: 1, ease: 'back.out(1.8)', stagger: 0.12 }, '-=0.8')
    .from('.header', { yPercent: -100, opacity: 0, duration: 0.8, ease: 'expo.out', clearProps: 'transform,opacity' }, '-=1');
}

initMarket().then(() => ScrollTrigger.refresh());
scrollAnims();
intro();
addEventListener('load', () => ScrollTrigger.refresh());
