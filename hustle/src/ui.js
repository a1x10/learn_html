import gsap from 'gsap';

export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
export const rub = (n) => Number(n).toLocaleString('ru-RU') + ' ₽';

export function ago(ts) {
  const m = Math.max(1, Math.round((Date.now() - ts) / 60000));
  if (m < 60) return `${m} мин назад`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} ч назад`;
  const d = Math.round(h / 24);
  return `${d} дн назад`;
}

let toastT;
export function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('is-on'), 2800);
}

// Модальные окна
let lastFocus = null;
export const modalHooks = { onOpen: () => {}, onClose: () => {} };
export function openModal(el) {
  lastFocus = document.activeElement;
  el.hidden = false;
  document.documentElement.classList.add('modal-open');
  modalHooks.onOpen();
  const panel = $('.modal__panel', el);
  panel.scrollTop = 0;
  if (!reduced) {
    gsap.fromTo($('.modal__backdrop', el), { opacity: 0 }, { opacity: 1, duration: 0.35 });
    gsap.fromTo(panel, { y: 60, opacity: 0, rotateX: -12, scale: 0.96 }, { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 0.6, ease: 'expo.out' });
  }
  setTimeout(() => ($('input:not([type=radio]):not([type=file]), button', panel) || panel).focus({ preventScroll: true }), 50);
}
export function closeModal(el) {
  if (el.hidden) return;
  const done = () => {
    el.hidden = true;
    if (!$$('.modal').some((m) => !m.hidden)) { document.documentElement.classList.remove('modal-open'); modalHooks.onClose(); }
    lastFocus?.focus?.({ preventScroll: true });
  };
  if (reduced) return done();
  gsap.to($('.modal__backdrop', el), { opacity: 0, duration: 0.25 });
  gsap.to($('.modal__panel', el), { y: 40, opacity: 0, scale: 0.97, duration: 0.3, ease: 'power2.in', onComplete: done });
}
document.addEventListener('click', (e) => {
  const c = e.target.closest('[data-close]');
  if (c) closeModal(c.closest('.modal'));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { const open = $$('.modal').filter((m) => !m.hidden).pop(); if (open) closeModal(open); }
});

// 3D-наклон карточек за курсором
export function tilt(el, max = 8) {
  if (!finePointer || reduced || el._tilt) return;
  el._tilt = true;
  const qx = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3' });
  const qy = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3' });
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    qx((px - 0.5) * max * 2); qy(-(py - 0.5) * max * 2);
    el.style.setProperty('--mx', px * 100 + '%'); el.style.setProperty('--my', py * 100 + '%');
  });
  el.addEventListener('pointerleave', () => { qx(0); qy(0); });
}
