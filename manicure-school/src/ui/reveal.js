import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Появление блоков, заголовков по строкам, слов манифеста и счётчиков
export function initReveals() {
  ScrollTrigger.batch('[data-reveal]:not([data-reveal="clip"])', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => {
      els.forEach((el) => el.classList.add('is-revealed'));
      gsap.to(els, { opacity: 1, y: 0, duration: 1.2, stagger: 0.09, ease: 'expo.out', overwrite: true });
    },
  });

  document.querySelectorAll('[data-reveal="clip"]').forEach((el) => {
    gsap.to(el, {
      clipPath: 'inset(0% 0 0 0 round 40px)',
      duration: 1.6,
      ease: 'expo.inOut',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      onComplete: () => (el.style.clipPath = 'none'),
    });
  });

  document.querySelectorAll('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 115,
          rotate: 2,
          duration: 1.3,
          stagger: 0.09,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        });
      },
    });
  });

  document.querySelectorAll('[data-words]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words', wordsClass: 'w' });
    gsap.to(split.words, {
      opacity: 1,
      stagger: 0.12,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 42%', scrub: true },
    });
  });

  document.querySelectorAll('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count);
    const o = { v: 0 };
    el.textContent = '0';
    gsap.to(o, {
      v: to,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = Math.round(o.v)),
    });
  });
}

// Если анимации выключены — всё видно сразу
export function showAll() {
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = 'none';
    el.style.clipPath = 'none';
    el.classList.add('is-revealed');
  });
}
