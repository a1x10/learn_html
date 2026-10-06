import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Появление блоков, заголовков по строкам и буквам, слов манифеста и счётчиков
export function initReveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.3, stagger: 0.08, ease: 'expo.out', overwrite: 'auto' }),
  });

  // заголовки: строки выезжают из-под маски, буквы чуть поворачиваются в 3D
  document.querySelectorAll('[data-split]').forEach((el) => {
    SplitText.create(el, {
      // слова целиком, иначе строка может переломиться посреди слова или перед запятой
      type: 'lines,words,chars',
      mask: 'lines',
      linesClass: 'split-line',
      charsClass: 'ch',
      ignore: '.serif',
      autoSplit: true,
      onSplit() {
        el.classList.add('is-split');
        // курсивные слова с градиентом не режем на буквы — они выезжают целиком
        return gsap.from(el.querySelectorAll('.ch, .serif'), {
          yPercent: 120,
          rotationX: -70,
          transformOrigin: '50% 100% -20px',
          opacity: 0,
          duration: 1.2,
          stagger: { each: 0.018 },
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      },
    });
  });

  // манифест: слова «загораются» по мере прокрутки
  document.querySelectorAll('[data-words]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words', wordsClass: 'w' });
    const hot = /^(copy-paste|retyping|yesterday's|calm,|fast|better|faster\.)$/i;
    split.words.forEach((w) => hot.test(w.textContent.trim()) && w.classList.add('is-hot'));
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      end: 'bottom 45%',
      scrub: true,
      onUpdate: (self) => {
        const n = Math.round(self.progress * split.words.length);
        split.words.forEach((w, i) => {
          w.classList.toggle('on', i < n && !w.classList.contains('is-hot'));
          w.classList.toggle('hot', i < n && w.classList.contains('is-hot'));
        });
      },
    });
  });

  document.querySelectorAll('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count);
    const dec = Number(el.dataset.decimals || 0);
    const pre = el.dataset.prefix || '';
    const o = { v: to === 0 ? 99 : 0 };
    const fmt = () => (el.textContent = pre + o.v.toFixed(dec));
    fmt();
    gsap.to(o, {
      v: to,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: fmt,
    });
  });
}

export function showAll() {
  document.querySelectorAll('[data-reveal], [data-reveal-hero], [data-split]').forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
  document.querySelectorAll('[data-words]').forEach((el) => (el.style.color = 'var(--ink)'));
}
