import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { env } from './env.js';

export let lenis = null;
const frameFns = new Set();

/** One frame loop for everything (GSAP ticker → Lenis → 3D). */
export function initSmooth() {
  if (!env.reduced) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.4, syncTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
  }
  let last = performance.now();
  // ?dtcap=1 lets slow software-rendered test browsers keep real-time pace
  const cap = /[?&]dtcap=1/.test(location.search) ? 1 : 0.1;
  gsap.ticker.add(() => {
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, cap);
    last = now;
    if (lenis) lenis.raf(now);
    for (const fn of frameFns) fn(dt, now / 1000);
  });
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function onFrame(fn) {
  frameFns.add(fn);
  return () => frameFns.delete(fn);
}

export function scrollVelocity() {
  return lenis ? lenis.velocity * 60 : 0;
}

export function scrollToTarget(target, opts = {}) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4), ...opts });
  } else {
    const y = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY + (opts.offset || 0);
    window.scrollTo({ top: y, behavior: env.reduced ? 'auto' : 'smooth' });
  }
}

/** in-page anchors go through the smooth scroller; pinned sections scroll to their spacer */
export function initAnchors(onNavigate) {
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
    onNavigate?.(id);
    // keyboard users continue from the section they jumped to
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  });
  document.querySelectorAll('[data-to-top]').forEach((b) => b.addEventListener('click', () => scrollToTarget(0, { duration: 2.6 })));
}
