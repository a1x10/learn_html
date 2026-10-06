import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from './core.js';

const hex = (h) => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const sm = (t) => t * t * (3 - 2 * t);

// Шапка (прячется вниз / появляется вверх), мобильное меню, плавная смена фона, прогресс
export function initChrome(engine) {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const fill = document.querySelector('.progress__fill');
  const sections = [...document.querySelectorAll('main > [data-bg], footer[data-bg]')];
  const navLinks = [...document.querySelectorAll('.nav a')];
  let marks = [];
  let lastY = window.scrollY;
  let lastBg = '';
  let docH = 1;

  function measure() {
    const y = window.scrollY;
    marks = sections.map((s) => {
      const r = s.getBoundingClientRect();
      const top = r.top + y;
      return { id: s.id, top, bottom: top + r.height, rgb: hex(s.dataset.bg) };
    });
    docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }
  measure();
  ScrollTrigger.addEventListener('refresh', measure);
  window.addEventListener('resize', measure);
  const find = (y) => {
    for (let i = 0; i < marks.length; i++) if (y < marks[i].bottom) return i;
    return marks.length - 1;
  };

  // мобильное меню
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  let open = false;
  const setMenu = (v) => {
    if (v === open) return;
    open = v;
    root.classList.toggle('menu-open', v);
    burger?.setAttribute('aria-expanded', String(v));
    burger?.setAttribute('aria-label', v ? 'Close menu' : 'Open menu');
    menu?.setAttribute('aria-hidden', String(!v));
    if (v) lenis?.stop();
    else lenis?.start();
  };
  burger?.addEventListener('click', () => setMenu(!open));
  document.addEventListener('menu:close', () => setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  return function update() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    if (!marks.length) return;
    const probe = y + vh * 0.5;
    const i = find(probe);
    const m = marks[i];
    const blend = vh * 0.3;
    let rgb = m.rgb;
    if (marks[i + 1] && probe > m.bottom - blend / 2) rgb = mix(m.rgb, marks[i + 1].rgb, sm((probe - (m.bottom - blend / 2)) / blend));
    else if (marks[i - 1] && probe < m.top + blend / 2) rgb = mix(marks[i - 1].rgb, m.rgb, sm((probe - (m.top - blend / 2)) / blend));
    const css = `rgb(${rgb[0] | 0}, ${rgb[1] | 0}, ${rgb[2] | 0})`;
    if (css !== lastBg) {
      lastBg = css;
      document.body.style.backgroundColor = css;
      engine?.pageBg?.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, 'srgb');
    }

    if (header && !open) {
      header.classList.toggle('is-scrolled', y > 30);
      if (y > lastY + 6 && y > vh * 0.8) header.classList.add('is-hidden');
      else if (y < lastY - 6 || y < vh * 0.5) header.classList.remove('is-hidden');
    }
    lastY = y;
    if (fill) fill.style.transform = `scaleX(${Math.min(1, y / docH).toFixed(4)})`;

    const cur = marks[find(y + vh * 0.45)]?.id;
    for (const a of navLinks) a.classList.toggle('is-current', a.getAttribute('href') === '#' + cur);
  };
}
