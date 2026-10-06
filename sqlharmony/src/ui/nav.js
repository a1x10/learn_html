import { gsap } from 'gsap';
import { $, $$, env } from '../core/env.js';

// Header that hides on the way down and returns on the way up, scroll progress line,
// side rail with the current section, active nav link, mobile menu.
export function initNav() {
  const root = document.documentElement;
  const nav = $('#nav');
  const bar = $('.progress span');
  const railNum = $('.rail__num');
  const railName = $('.rail__name');
  const railLine = $('.rail__line i');
  const burger = $('.burger');
  const menu = $('#menu');
  const links = $$('.nav__links a');
  let lastY = window.scrollY;
  let hidden = false;

  const setMenu = (open) => {
    root.classList.toggle('menu-open', open);
    burger?.setAttribute('aria-expanded', String(open));
    burger?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu?.setAttribute('aria-hidden', String(!open));
    if (open) {
      gsap.fromTo($$('.menu__links a, .menu__foot .btn'), { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.05, ease: 'expo.out', delay: 0.2 });
      setTimeout(() => $('.menu__links a')?.focus({ preventScroll: true }), 250);
    } else if (menu?.contains(document.activeElement)) {
      burger?.focus({ preventScroll: true });
    }
  };
  burger?.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
  menu?.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) setMenu(false);
  });

  const map = { Workbench: '#workbench', Features: '#features', 'AI help': '#ai', Desktop: '#desktop', FAQ: '#faq' };
  let count = 0;
  document.addEventListener('section', (e) => {
    const { name, index } = e.detail;
    count = Math.max(count, $$('[data-section]').length);
    if (railNum) gsap.to(railNum, { duration: 0.6, scrambleText: { text: String(index + 1).padStart(2, '0'), chars: '0123456789', speed: 0.6 } });
    if (railName) gsap.to(railName, { duration: 0.8, scrambleText: { text: name, chars: 'upperCase', speed: 0.5 } });
    const href = map[name];
    links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === href));
  });

  return {
    closeMenu: () => setMenu(false),
    frame() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? y / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
      if (railLine) railLine.style.transform = `scaleY(${p})`;
      nav?.classList.toggle('is-scrolled', y > 30);
      const dy = y - lastY;
      if (!root.classList.contains('menu-open')) {
        if (dy > 6 && y > 500 && !hidden) {
          hidden = true;
          nav?.classList.add('is-hidden');
        } else if ((dy < -6 || y < 200) && hidden) {
          hidden = false;
          nav?.classList.remove('is-hidden');
        }
      }
      lastY = y;
    },
  };
}
