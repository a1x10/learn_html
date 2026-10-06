import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { env } from '../ui/core.js';
import { seg } from '../three/util.js';

// Первый экран: вступление после прелоадера и сценарий прокрутки
export function initHero(stage) {
  const section = document.querySelector('.hero');
  const content = section.querySelector('.hero__content');
  const outro = section.querySelector('.hero__outro');
  const bottom = section.querySelectorAll('.hero__ticker, .hero__scroll');
  const title = section.querySelector('[data-hero-title]');
  let split = null;
  if (!env.reduced) {
    SplitText.create(title, { type: 'lines,words,chars', linesClass: 'split-line', charsClass: 'ch', mask: 'lines', ignore: '.serif' });
    split = title.querySelectorAll('.ch, .serif');
    gsap.set(split, { yPercent: 120, rotationX: -80, opacity: 0, transformOrigin: '50% 100% -30px' });
    gsap.set(bottom, { opacity: 0 });
  }

  // кнопки «раскачивают» 3D-сцену
  document.querySelectorAll('[data-boost]').forEach((b) => {
    b.addEventListener('pointerenter', () => stage && (stage.boostTarget = 1));
    b.addEventListener('pointerleave', () => stage && (stage.boostTarget = 0));
  });

  // на узком экране 3D-лиса занимает полосу между шапкой и текстом — меряем её
  const header = document.querySelector('[data-header]');
  const badge = content.querySelector('.hero__badge');
  const measure = () => {
    if (!stage) return;
    stage.slot = { top: (header?.offsetHeight || 70) + 6, bottom: content.offsetTop + badge.offsetTop - 10 };
    if (stage.width) stage.resize(stage.width, stage.height);
  };
  measure();
  window.addEventListener('resize', measure);
  ScrollTrigger.addEventListener('refresh', measure);

  let p = 0;
  if (!env.reduced && stage) {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => (p = self.progress),
    });
  }

  return {
    playIntro() {
      if (env.reduced) return;
      const tl = gsap.timeline();
      if (stage) tl.to(stage, { intro: 1, duration: 2.6, ease: 'expo.out' }, 0);
      tl.to(split, { yPercent: 0, rotationX: 0, opacity: 1, duration: 1.5, stagger: 0.022, ease: 'expo.out' }, 0.15);
      tl.fromTo('[data-reveal-hero]', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.3, stagger: 0.1, ease: 'expo.out' }, 0.35);
      tl.to(bottom, { opacity: 1, duration: 1.2 }, 1);
    },
    showStatic() {
      if (stage) stage.intro = 1;
    },
    frame() {
      if (!stage || env.reduced) return;
      stage.progress = p;
      // текст уходит вверх и растворяется, пока лиса раскалывается
      const out = seg(p, 0.04, 0.3);
      content.style.opacity = String(1 - out);
      content.style.transform = `translate3d(0, ${-out * 80}px, 0)`;
      content.style.filter = out > 0.01 ? `blur(${out * 8}px)` : '';
      content.style.pointerEvents = out > 0.5 ? 'none' : '';
      bottom.forEach((b) => (b.style.visibility = out > 0.3 ? 'hidden' : ''));
      const o = seg(p, 0.62, 0.8) * (1 - seg(p, 0.95, 1));
      outro.style.opacity = String(o);
      outro.style.transform = `translate3d(0, ${(1 - seg(p, 0.62, 0.85)) * 40}px, 0)`;
    },
  };
}
