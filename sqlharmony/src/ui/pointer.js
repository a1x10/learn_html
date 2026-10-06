import { gsap } from 'gsap';
import { env } from './core.js';

// Курсор: точка + кольцо с подписью над карточками и видео
export function initCursor() {
  if (!env.fine || env.reduced) return;
  const root = document.querySelector('.cursor');
  if (!root) return;
  document.documentElement.classList.add('has-cursor');
  gsap.set(root, { autoAlpha: 0 });
  const dot = root.querySelector('.cursor__dot');
  const ring = root.querySelector('.cursor__ring');
  const label = root.querySelector('.cursor__label');
  const dx = gsap.quickSetter(dot, 'x', 'px');
  const dy = gsap.quickSetter(dot, 'y', 'px');
  const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  const spot = document.querySelector('.spot');
  const sx = spot ? gsap.quickTo(spot, 'x', { duration: 1.6, ease: 'power3' }) : null;
  const sy = spot ? gsap.quickTo(spot, 'y', { duration: 1.6, ease: 'power3' }) : null;
  let visible = false;
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      if (!visible) {
        visible = true;
        gsap.to(root, { autoAlpha: 1, duration: 0.3 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      sx?.(e.clientX);
      sy?.(e.clientY);
    },
    { passive: true }
  );
  window.addEventListener('pointerdown', () => root.classList.add('is-down'));
  window.addEventListener('pointerup', () => root.classList.remove('is-down'));
  document.addEventListener('mouseleave', () => {
    visible = false;
    gsap.to(root, { autoAlpha: 0, duration: 0.3 });
  });
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-cursor], a, button, summary, label, input');
    root.classList.remove('is-link', 'is-label');
    if (!t) return;
    if (t.dataset.cursor) {
      label.textContent = t.dataset.cursor;
      root.classList.add('is-label');
    } else if (!t.matches('input')) root.classList.add('is-link');
  });
}

// Магнитные кнопки: заливка расходится из точки под курсором
export function initMagnetic() {
  if (!env.fine || env.reduced) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const label = el.querySelector('.btn__label');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
    const lx = label ? gsap.quickTo(label, 'x', { duration: 0.6, ease: 'power3' }) : null;
    const ly = label ? gsap.quickTo(label, 'y', { duration: 0.6, ease: 'power3' }) : null;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      xTo(x * 0.28);
      yTo(y * 0.38);
      lx?.(x * 0.12);
      ly?.(y * 0.14);
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, 0.35)' });
      if (label) gsap.to(label, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, 0.35)' });
    });
  });
}

// Лёгкий 3D-наклон карточек
export function initTilt() {
  if (!env.fine || env.reduced) return;
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    gsap.set(el, { transformPerspective: 900 });
    const rX = gsap.quickTo(el, 'rotationX', { duration: 0.8, ease: 'power3' });
    const rY = gsap.quickTo(el, 'rotationY', { duration: 0.8, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      rY(x * 10);
      rX(-y * 8);
      el.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
      el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
    });
    el.addEventListener('pointerleave', () => {
      rX(0);
      rY(0);
    });
  });
}
