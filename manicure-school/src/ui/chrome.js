import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis, env } from './core.js';

const hex = (h) => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const sm = (t) => t * t * (3 - 2 * t);

// Шапка, меню, цвет фона между секциями, прогресс
export function initChrome(engine) {
  const header = document.getElementById('header');
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
      return { id: s.id, top, bottom: top + r.height, rgb: hex(s.dataset.bg), theme: s.dataset.theme };
    });
    docH = document.documentElement.scrollHeight - window.innerHeight;
  }
  measure();
  ScrollTrigger.addEventListener('refresh', measure);
  window.addEventListener('resize', measure);

  const find = (y) => {
    for (let i = 0; i < marks.length; i++) if (y < marks[i].bottom) return i;
    return marks.length - 1;
  };

  // меню
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');
  let menuOpen = false;
  const setMenu = (open) => {
    if (open === menuOpen || !menu) return;
    menuOpen = open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    header.classList.remove('is-hidden');
    if (open) {
      menu.hidden = false;
      lenis?.stop();
      gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'expo.inOut' });
      gsap.fromTo(menu.querySelectorAll('.menu__nav a, .menu__cta'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, delay: 0.25, ease: 'expo.out' });
      header.classList.remove('is-light');
    } else {
      lenis?.start();
      gsap.to(menu, { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'expo.inOut', onComplete: () => (menu.hidden = true) });
    }
  };
  burger?.addEventListener('click', () => setMenu(!menuOpen));
  document.addEventListener('menu:close', () => setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  return function update() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    if (!marks.length) return;

    // фон
    const probe = y + vh * 0.55;
    const i = find(probe);
    const m = marks[i];
    const blend = vh * 0.16;
    let rgb = m.rgb;
    if (marks[i + 1] && probe > m.bottom - blend / 2) rgb = mix(m.rgb, marks[i + 1].rgb, sm((probe - (m.bottom - blend / 2)) / blend));
    else if (marks[i - 1] && probe < m.top + blend / 2) rgb = mix(marks[i - 1].rgb, m.rgb, sm((probe - (m.top - blend / 2)) / blend));
    const css = `rgb(${rgb[0] | 0}, ${rgb[1] | 0}, ${rgb[2] | 0})`;
    if (css !== lastBg) {
      lastBg = css;
      document.body.style.backgroundColor = css;
      engine?.pageBg?.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, 'srgb');
    }

    // тема шапки
    if (!menuOpen) {
      const h = marks[find(y + 40)];
      header.classList.toggle('is-light', h.theme === 'light');
    }

    // прячем шапку при прокрутке вниз
    if (!menuOpen) {
      if (y > lastY + 6 && y > vh * 0.9) header.classList.add('is-hidden');
      else if (y < lastY - 6 || y < vh * 0.5) header.classList.remove('is-hidden');
    }
    lastY = y;

    if (fill) fill.style.transform = `scaleY(${Math.min(1, y / docH).toFixed(4)})`;

    // активный пункт меню
    const cur = marks[find(y + vh * 0.4)]?.id;
    for (const a of navLinks) a.classList.toggle('is-active', a.getAttribute('href') === '#' + cur);
  };
}
