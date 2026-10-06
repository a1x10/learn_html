import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, env, smooth } from '../core/env.js';

// Hero: the fox assembles, the giant word rises behind it, the title slides up.
// Scrolling away blows the fox apart (director) and lifts the copy off the page.
export function initHero({ word, chips, floor, director }) {
  const hero = $('.hero');
  const words = $$('.hero__words', hero);
  const pill = $('.pill', hero);
  const bottom = $('.hero__bottom', hero);
  const meta = $$('.hero__meta li', hero);
  const scroll = $('.hero__scroll', hero);
  const nav = $('#nav');

  if (!env.reduced) {
    gsap.set(words, { yPercent: 118, rotate: 3, transformOrigin: '0% 100%' });
    gsap.set([pill, bottom, scroll], { autoAlpha: 0, y: 24 });
    gsap.set(meta, { autoAlpha: 0, y: 14 });
    gsap.set(nav, { yPercent: -100, autoAlpha: 0 });

    // leaving the hero: copy lifts and dissolves
    const out = gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    out.to(words[0], { yPercent: -60, autoAlpha: 0, filter: 'blur(8px)', ease: 'power1.in', duration: 0.6 }, 0.05);
    out.to(words[1], { yPercent: -40, autoAlpha: 0, filter: 'blur(8px)', ease: 'power1.in', duration: 0.6 }, 0.1);
    out.to(bottom, { y: -60, autoAlpha: 0, ease: 'power1.in', duration: 0.45 }, 0);
    out.to([pill, scroll, ...meta], { autoAlpha: 0, duration: 0.25 }, 0);
  }

  if (floor) document.addEventListener('fox-poke', () => gsap.fromTo(floor.uniforms.uPulse, { value: 1.2 }, { value: 0, duration: 2.4, ease: 'power2.out', overwrite: true }));

  return {
    intro() {
      if (env.reduced) return;
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      if (word) tl.to(word.uniforms.uReveal, { value: 1, duration: 2.6, ease: 'power2.inOut' }, 0.2);
      if (floor) tl.fromTo(floor.uniforms.uFade, { value: 0 }, { value: 1, duration: 2.4, ease: 'power2.out' }, 0.4);
      if (chips) tl.to(chips, { reveal: 1, duration: 2.2, ease: 'power3.out' }, 2.0);
      tl.to(words, { yPercent: 0, rotate: 0, duration: 1.5, stagger: 0.12 }, 1.15);
      tl.to(pill, { autoAlpha: 1, y: 0, duration: 1.2 }, 1.5);
      tl.to(bottom, { autoAlpha: 1, y: 0, duration: 1.3 }, 1.6);
      tl.to(meta, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.07 }, 1.75);
      tl.to(scroll, { autoAlpha: 1, y: 0, duration: 1 }, 2.1);
      tl.to(nav, { yPercent: 0, autoAlpha: 1, duration: 1.3 }, 1.4);
      return tl;
    },
    frame() {
      const p = director ? director.state.heroP : 0;
      if (word) word.uniforms.uOut.value = smooth(0.02, 0.75, p);
      if (chips) chips.out = smooth(0.0, 0.65, p);
      if (floor) {
        floor.uniforms.uAmp.value = 1 + p * 2.5;
        floor.uniforms.uFade2.value = 1 - smooth(0.05, 0.6, p);
      }
    },
  };
}

export { ScrollTrigger };
