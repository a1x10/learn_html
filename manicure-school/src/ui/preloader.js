import { gsap } from 'gsap';

// Прелоадер: ноготь заполняется лаком по мере загрузки
export function createPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return { set() {}, finish: async () => {} };
  const count = el.querySelector('[data-preload-count]');
  const note = el.querySelector('.preloader__note');
  const notes = ['Наносим первый слой', 'Сушим в лампе', 'Запечатываем торец', 'Финишный глянец'];
  let target = 0.04;
  let shown = 0;
  let raf = 0;
  let noteIdx = 0;

  const tick = () => {
    shown += (target - shown) * 0.09;
    if (Math.abs(target - shown) < 0.001) shown = target;
    el.style.setProperty('--p', shown.toFixed(4));
    count.textContent = Math.round(shown * 100);
    const n = Math.min(notes.length - 1, Math.floor(shown * notes.length));
    if (n !== noteIdx) {
      noteIdx = n;
      note.textContent = notes[n];
    }
    raf = requestAnimationFrame(tick);
  };
  tick();

  return {
    set(p) {
      target = Math.max(target, Math.min(p, 1));
    },
    finish() {
      target = 1;
      return new Promise((resolve) => {
        const check = () => {
          if (shown > 0.995) {
            cancelAnimationFrame(raf);
            el.style.setProperty('--p', 1);
            count.textContent = '100';
            const inner = el.querySelector('.preloader__inner');
            const curtain = el.querySelector('.preloader__curtain');
            const tl = gsap.timeline({
              onComplete: () => {
                el.remove();
                resolve();
              },
            });
            tl.to(inner, { y: -24, opacity: 0, duration: 0.6, ease: 'power3.in' }, 0.15)
              .to(curtain, { scaleY: 1, duration: 0.7, ease: 'expo.inOut' }, 0.35)
              .set(el, { backgroundColor: 'transparent' })
              .set(curtain, { transformOrigin: '50% 0%' })
              .to(curtain, { scaleY: 0, duration: 0.9, ease: 'expo.inOut' })
              .add(() => resolve(), '-=0.55');
          } else requestAnimationFrame(check);
        };
        check();
      });
    },
  };
}
