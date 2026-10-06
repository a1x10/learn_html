import { gsap } from 'gsap';
import { env } from './core.js';

const QUERY = 'SELECT harmony FROM oracle_fusion;';

// Прелоадер: печатается запрос, «выбираются строки», затем шторки-строки уезжают
export function createPreloader() {
  const el = document.getElementById('preloader');
  if (!el || env.reduced) return { set() {}, finish: async () => el?.remove() };
  const typed = el.querySelector('[data-preload-typed]');
  const rows = el.querySelector('[data-preload-rows]');
  const count = el.querySelector('[data-preload-count]');
  const bar = el.querySelector('.preloader__bar span');
  const state = { shown: 0, target: 0, chars: 0 };

  gsap.to(state, {
    chars: QUERY.length,
    duration: 1.1,
    ease: 'none',
    onUpdate: () => (typed.textContent = QUERY.slice(0, Math.round(state.chars))),
  });

  const tick = () => {
    state.shown += (state.target - state.shown) * 0.08;
    const p = Math.min(1, state.shown);
    count.textContent = Math.round(p * 100);
    rows.textContent = Math.round(p * 1024).toLocaleString('en-US');
    bar.style.setProperty('--p', p.toFixed(3));
  };
  gsap.ticker.add(tick);

  return {
    set(p) {
      state.target = Math.max(state.target, p);
    },
    async finish() {
      state.target = 1;
      await gsap.to(state, { shown: 1, duration: 0.5, ease: 'power2.out' });
      tick();
      gsap.ticker.remove(tick);
      const tl = gsap.timeline();
      tl.to(el.querySelector('.preloader__inner'), { y: -30, opacity: 0, duration: 0.6, ease: 'power3.in' });
      // шторки: сначала закрывают, потом фон исчезает и они уезжают вправо, открывая сайт
      tl.to(el.querySelectorAll('.preloader__shutter span'), { scaleX: 1, duration: 0.01 }, '<');
      tl.add(() => el.classList.add('is-leaving'));
      tl.to(el.querySelector('.preloader__grid'), { opacity: 0, duration: 0.4 }, '<');
      tl.to(el.querySelectorAll('.preloader__shutter span'), {
        scaleX: 0,
        transformOrigin: '100% 50%',
        duration: 0.9,
        ease: 'expo.inOut',
        stagger: { each: 0.05, from: 'center' },
      });
      await tl;
      el.remove();
    },
  };
}
