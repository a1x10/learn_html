import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { env } from '../ui/core.js';

// Возможности: карточки «переворачиваются» в 3D при появлении
export function initFeatures() {
  if (env.reduced) return;
  gsap.from('.fcard', {
    rotationX: -35,
    rotationY: 18,
    z: -200,
    transformOrigin: '50% 100%',
    duration: 1.6,
    stagger: 0.12,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.fgrid', start: 'top 85%', once: true },
  });
  gsap.from('.fact', {
    rotationY: -40,
    transformOrigin: '0% 50%',
    duration: 1.4,
    stagger: 0.1,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.facts', start: 'top 88%', once: true },
  });
}

// Видео: рамка выпрямляется из наклона и увеличивается
export function initDemo() {
  if (env.reduced) return;
  gsap.fromTo(
    '[data-demo]',
    { rotationX: 32, scale: 0.82, y: 60 },
    { rotationX: 0, scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: '.demo__frame-wrap', start: 'top 95%', end: 'top 25%', scrub: true } }
  );
}

// Ноутбук: крышка открывается по прокрутке
export function initDesktop(laptop) {
  if (!laptop) return;
  if (env.reduced) {
    laptop.progress = 1;
    return;
  }
  const mobile = window.matchMedia('(max-width: 980px)');
  ScrollTrigger.create({
    trigger: '.desktop',
    start: () => (mobile.matches ? 'top 80%' : 'top 70%'),
    end: () => (mobile.matches ? 'bottom 60%' : 'bottom bottom'),
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => (laptop.progress = self.progress),
  });
}

// Финальный призыв: кольца «звучат» при наведении на кнопки
export function initCta(rings, instances) {
  if (rings) {
    document.querySelectorAll('[data-energy]').forEach((b) => {
      b.addEventListener('pointerenter', () => (rings.energyTarget = 1));
      b.addEventListener('pointerleave', () => (rings.energyTarget = 0));
    });
  }
  if (instances && !env.reduced) {
    ScrollTrigger.create({
      trigger: '.instances',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => (instances.scrollP = self.progress),
    });
  }
  if (!env.reduced) {
    gsap.fromTo('.footer__word', { '--fill': '0%' }, { '--fill': '100%', ease: 'none', scrollTrigger: { trigger: '.footer__word', start: 'top bottom', end: 'bottom 95%', scrub: true } });
    gsap.from('.cta__title', { scale: 0.86, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'center center', scrub: true } });
  }
}
