import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export const env = {
  reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  fine: window.matchMedia('(pointer: fine)').matches,
  mobile: window.matchMedia('(max-width: 980px)').matches || window.matchMedia('(pointer: coarse)').matches,
};

export let lenis = null;

// Плавный скролл + один общий цикл кадров (GSAP ticker)
export function initSmooth(onFrame) {
  if (!env.reduced) {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
  }
  let last = performance.now();
  gsap.ticker.add((time) => {
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (lenis) lenis.raf(now);
    onFrame(time, dt);
  });
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function scrollToTarget(target, opts = {}) {
  if (lenis) lenis.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4), ...opts });
  else {
    const y = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY + (opts.offset || 0);
    window.scrollTo({ top: y, behavior: env.reduced ? 'auto' : 'smooth' });
  }
}

// якорные ссылки
export function initAnchors() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const spacer = el.parentElement && el.parentElement.classList.contains('pin-spacer') ? el.parentElement : el;
    scrollToTarget(id === '#top' ? 0 : spacer);
    document.dispatchEvent(new CustomEvent('menu:close'));
  });
  document.querySelector('[data-to-top]')?.addEventListener('click', () => scrollToTarget(0, { duration: 2.2 }));
}

export function noiseDataURL(size = 160) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const img = g.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return c.toDataURL('image/png');
}

export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
