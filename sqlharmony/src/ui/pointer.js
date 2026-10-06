import { gsap } from 'gsap';
import { $, $$, env } from '../core/env.js';

// Custom cursor: a dot that sticks to the pointer and a ring that follows with lag.
// Links grow the ring; elements with data-cursor="Label" show a filled disc with text.
export function initCursor() {
  if (!env.fine || env.reduced) return { frame() {} };
  const el = $('.cursor');
  const dot = $('.cursor__dot', el);
  const ring = $('.cursor__ring', el);
  const label = $('.cursor__label', el);
  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const ringPos = { x: pos.x, y: pos.y };
  let visible = false;

  window.addEventListener(
    'pointermove',
    (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = 1;
        ringPos.x = pos.x;
        ringPos.y = pos.y;
      }
    },
    { passive: true }
  );
  document.addEventListener('pointerleave', () => {
    visible = false;
    el.style.opacity = 0;
  });
  window.addEventListener('pointerdown', () => el.classList.add('is-down'));
  window.addEventListener('pointerup', () => el.classList.remove('is-down'));

  let domTarget = null;
  let glText = null;
  const apply = () => {
    const text = domTarget?.dataset.cursor || (!domTarget && glText) || null;
    el.classList.toggle('is-label', !!text);
    el.classList.toggle('is-link', !!domTarget && !text);
    if (text) label.textContent = text;
  };
  document.addEventListener('pointerover', (e) => {
    domTarget = e.target.closest('[data-cursor], a, button, summary, [role="tab"], label');
    apply();
  });
  // 3D objects (keys, instance nodes) ask for a label while hovered
  document.addEventListener('cursor-label', (e) => {
    glText = e.detail || null;
    apply();
  });

  return {
    frame(dt) {
      const k = 1 - Math.pow(0.0004, dt);
      ringPos.x += (pos.x - ringPos.x) * k;
      ringPos.y += (pos.y - ringPos.y) * k;
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
    },
  };
}

// Magnetic buttons: pulled towards the cursor, the label a little more, with a light spot.
export function initMagnetic() {
  if (!env.fine || env.reduced) return;
  $$('[data-magnetic]').forEach((btn) => {
    const label = $('.btn__label', btn);
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'power3.out' });
    const lx = label ? gsap.quickTo(label, 'x', { duration: 0.6, ease: 'power3.out' }) : null;
    const ly = label ? gsap.quickTo(label, 'y', { duration: 0.6, ease: 'power3.out' }) : null;
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      xTo(dx * 0.28);
      yTo(dy * 0.38);
      lx?.(dx * 0.12);
      ly?.(dy * 0.16);
      btn.style.setProperty('--mx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
    btn.addEventListener('pointerleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, 0.35)' });
      if (label) gsap.to(label, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, 0.35)' });
    });
  });
  // the rolling label copy for buttons
  $$('.btn__label').forEach((l) => {
    if (!l.dataset.text) l.dataset.text = l.textContent.trim();
  });
}

// Cards and frames that tilt towards the cursor, with a moving light spot.
export function initTilt() {
  if (!env.fine || env.reduced) return;
  // cards: GSAP owns their transform (scroll entrance), so the tilt goes through GSAP too
  $$('[data-tilt]').forEach((card) => {
    gsap.set(card, { transformPerspective: 900 });
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3.out' });
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3.out' });
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      rx((0.5 - py) * 7);
      ry((px - 0.5) * 7);
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
    });
  });
  $$('.video').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${(px - 0.5) * 5}deg`);
      card.style.setProperty('--rx', `${(0.5 - py) * 5}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}
