import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { $, $$, env } from '../core/env.js';

// Headline reveals: words rise out of line masks. Eyebrows decode like a terminal.
// The manifesto lights up word by word as you scroll through it.
export function initText() {
  if (env.reduced) return;

  $$('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines,words',
      mask: 'lines',
      linesClass: 'split-line',
      wordsClass: 'sw',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          yPercent: 115,
          rotate: 4,
          transformOrigin: '0% 100%',
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.045,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      },
    });
  });

  $$('.eyebrow').forEach((el) => {
    // keep the dot, scramble only the text node(s)
    const textNode = [...el.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
    if (!textNode) return;
    const span = document.createElement('span');
    span.textContent = textNode.textContent.trim();
    el.replaceChild(span, textNode);
    const final = span.textContent;
    span.style.minWidth = `${final.length * 0.62}em`;
    gsap.set(el, { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(el, { autoAlpha: 1, duration: 0.4 });
        gsap.fromTo(span, { scrambleText: { text: '' } }, { duration: 1.2, scrambleText: { text: final, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/_<>01', speed: 0.7, revealDelay: 0.2 } });
      },
    });
  });

  const fadeUps = $$('.lead, .ticks li, .desk-list li, .studio__cards .card, .download, .inst-tabs, .inst-status, .qa, .spec, .cta__buttons, .cta__dev, .ring__caption, .features__side, .footer__top');
  // opacity only (not visibility): links and buttons inside stay reachable with the keyboard;
  // tabbing to one scrolls it into view, which reveals it
  fadeUps.forEach((el) => gsap.set(el, { opacity: 0, y: 34 }));
  ScrollTrigger.batch(fadeUps, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.08, overwrite: true }),
  });
  document.addEventListener('focusin', (e) => {
    const el = fadeUps.find((f) => f.contains(e.target));
    if (el && +getComputedStyle(el).opacity < 1) gsap.to(el, { opacity: 1, y: 0, duration: 0.6, overwrite: true });
  });

  // manifesto: every word starts dim and lights up in reading order with the scroll
  const m = $('[data-words]');
  if (m) {
    const split = SplitText.create(m, { type: 'words', wordsClass: 'w' });
    gsap.to(split.words, {
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: { trigger: m, start: 'top 82%', end: 'bottom 45%', scrub: 0.6 },
    });
    $$('.mark-word', m).forEach((w) => {
      gsap.to(w, { '--u': 1, ease: 'none', scrollTrigger: { trigger: w, start: 'top 62%', end: 'top 45%', scrub: 0.6 } });
    });
  }
}
