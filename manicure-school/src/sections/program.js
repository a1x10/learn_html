import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { env, scrollToTarget } from '../ui/core.js';

// Программа: секция закрепляется, модули сменяют друг друга по скроллу,
// а 3D-ноготь проходит соответствующий этап.
export function initProgram(stage) {
  const section = document.querySelector('.program');
  const pin = section.querySelector('.program__pin');
  const modules = [...pin.querySelectorAll('.module')];
  const nav = [...pin.querySelectorAll('.program__nav button')];
  const bar = pin.querySelector('.program__progress span');
  const capNum = pin.querySelector('.program__caption-num');
  const capText = pin.querySelector('.program__caption-text');
  const N = modules.length;
  let current = -1;

  const pad = (n) => String(n).padStart(2, '0');

  function activate(i, dir = 1, instant = false) {
    if (i === current) return;
    const prev = current;
    current = i;
    const out = modules[prev];
    const inn = modules[i];
    if (out) {
      gsap.killTweensOf(out);
      gsap.to(out, {
        autoAlpha: 0,
        y: dir * -36,
        duration: instant ? 0 : 0.45,
        ease: 'power2.in',
        onComplete: () => out.classList.remove('is-active'),
      });
    }
    inn.classList.add('is-active');
    gsap.killTweensOf(inn);
    if (instant || env.reduced) gsap.set(inn, { autoAlpha: 1, y: 0 });
    else {
      gsap.fromTo(inn, { autoAlpha: 0, y: dir * 46 }, { autoAlpha: 1, y: 0, duration: 0.9, delay: out ? 0.18 : 0, ease: 'expo.out' });
      gsap.fromTo(
        inn.querySelectorAll('.module__lessons li, .module__result'),
        { opacity: 0, x: 26 },
        { opacity: 1, x: 0, stagger: 0.045, duration: 0.8, delay: 0.3, ease: 'expo.out' }
      );
    }
    nav.forEach((b, j) => {
      b.classList.toggle('is-active', j === i);
      b.classList.toggle('is-done', j < i);
      if (j === i) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    capNum.textContent = 'Nº ' + pad(i + 1);
    if (instant || env.reduced) capText.textContent = inn.dataset.caption;
    else
      gsap.to(capText, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        onComplete: () => {
          capText.textContent = inn.dataset.caption;
          gsap.fromTo(capText, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' });
        },
      });
    stage?.goTo(i, inn.dataset.design, inn.hasAttribute('data-showcase'));
  }

  activate(0, 1, true);

  if (env.reduced) {
    section.classList.add('is-static');
    return { st: null };
  }

  const st = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: () => '+=' + Math.round(window.innerHeight * N * 0.72),
    pin,
    anticipatePin: 1,
    onUpdate: (self) => {
      const i = Math.min(N - 1, Math.floor(self.progress * N * 0.9999));
      activate(i, self.direction);
      bar.style.transform = `scaleX(${self.progress.toFixed(4)})`;
    },
  });

  nav.forEach((b, i) =>
    b.addEventListener('click', () => {
      const y = st.start + ((i + 0.5) / N) * (st.end - st.start);
      scrollToTarget(y, { duration: 1.2 });
    })
  );
  return { st };
}
