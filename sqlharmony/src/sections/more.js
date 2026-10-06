import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, env, clamp, smooth } from '../core/env.js';

// ——— AI: the orb thinks, ChatGPT explains ORA-00904, the fix is applied ———
export function initAI(orb) {
  const card = $('.ai-card');
  if (!card) return;
  const fix = $('.ai-card__fix', card);
  const msg = $('.ai-card__msg', card);
  const apply = $('.ai-card__apply', card);
  const bubble = $('.ai-card__bubble', card);
  const wrap = $('.ai-card__bubble-wrap', card);
  const text = msg.dataset.msg;
  if (env.reduced) {
    msg.textContent = text;
    return;
  }
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 });
  tl.call(() => {
    card.classList.remove('is-fixed');
    msg.textContent = '';
    if (orb) {
      orb.think = 0;
      orb.ok = 0;
    }
  });
  tl.set(bubble, { autoAlpha: 0, y: 14 });
  tl.set(wrap, { height: 0 });
  tl.call(() => fix.classList.add('is-press'), null, 0.8);
  tl.call(
    () => {
      fix.classList.remove('is-press');
      if (orb) orb.think = 1;
    },
    null,
    1.05
  );
  tl.to(wrap, { height: 'auto', duration: 0.7, ease: 'expo.out' }, 1.15);
  tl.to(bubble, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 1.2);
  tl.to(msg, { duration: 1.8, text: { value: text }, ease: 'none' }, 1.5);
  tl.call(() => apply.classList.add('is-press'), null, 3.7);
  tl.call(
    () => {
      apply.classList.remove('is-press');
      card.classList.add('is-fixed');
      document.dispatchEvent(new CustomEvent('shards-flash', { detail: 0.5 }));
      if (orb) {
        orb.think = 0;
        orb.ok = 1;
      }
      gsap.fromTo(card, { boxShadow: '0 0 0 0 rgba(52,217,155,0.0)' }, { boxShadow: '0 0 0 6px rgba(52,217,155,0.25)', duration: 0.35, yoyo: true, repeat: 1 });
    },
    null,
    3.95
  );
  tl.call(() => orb && (orb.ok = 0), null, 5.6);
  tl.to(bubble, { autoAlpha: 0, y: -8, duration: 0.5, ease: 'power2.in' }, 6.6);
  tl.to(wrap, { height: 0, duration: 0.6, ease: 'expo.inOut' }, 6.8);
  tl.to({}, { duration: 0.6 });
  ScrollTrigger.create({
    trigger: card,
    start: 'top 85%',
    end: 'bottom 10%',
    onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
  });
  // card floats with a little 3D parallax
  gsap.fromTo(card, { y: 60, rotateX: 10, transformPerspective: 1200 }, { y: -20, rotateX: -4, ease: 'none', scrollTrigger: { trigger: '.ai', start: 'top bottom', end: 'bottom top', scrub: true } });
}

// ——— Instances: tabs drive the constellation, auto-cycling until touched ———
export function initInstances(constellation) {
  const tabs = $$('.inst-tabs [role="tab"]');
  const name = $('.inst-status__name');
  const live = $('.inst-status .sr-only');
  if (!tabs.length) return;
  const bar = $('.inst-tabs');
  const glider = document.createElement('span');
  glider.className = 'inst-tabs__glider';
  glider.setAttribute('aria-hidden', 'true');
  bar.prepend(glider);
  const moveGlider = (i, instant) => {
    const t = tabs[i];
    gsap.to(glider, { x: t.offsetLeft, width: t.offsetWidth, height: t.offsetHeight, y: t.offsetTop - parseFloat(getComputedStyle(glider).top || 0), duration: instant || env.reduced ? 0 : 0.7, ease: 'expo.out' });
  };
  window.addEventListener('resize', () => moveGlider(idx, true));
  let idx = 1;
  let user = false;
  const select = (i, fromUser) => {
    idx = i;
    if (fromUser) user = true;
    moveGlider(i);
    tabs.forEach((t, k) => t.setAttribute('aria-selected', String(k === i)));
    constellation?.setActive(i);
    // screen readers hear the final name only (and only when the visitor chose it)
    if (fromUser && live) live.textContent = `Working in ${tabs[i].textContent}`;
    if (name) {
      if (env.reduced) name.textContent = tabs[i].textContent;
      else gsap.to(name, { duration: 0.6, scrambleText: { text: tabs[i].textContent, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', speed: 0.6 } });
    }
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i, true));
    t.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const n = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
        tabs[n].focus();
        select(n, true);
      }
    });
  });
  let timer = null;
  ScrollTrigger.create({
    trigger: '.instances',
    start: 'top 70%',
    end: 'bottom 30%',
    onToggle: (self) => {
      clearInterval(timer);
      if (self.isActive && !env.reduced)
        timer = setInterval(() => {
          if (!user) select((idx + 1) % tabs.length, false);
        }, 2600);
    },
  });
  // the nodes in the 3D constellation are clickable too
  $('.instances')?.addEventListener('click', (e) => {
    if (e.target.closest('button, a')) return;
    if (constellation && constellation.hovered >= 0) select(constellation.hovered, true);
  });
  select(1, false);
  requestAnimationFrame(() => moveGlider(1, true));
  document.fonts?.ready.then(() => moveGlider(idx, true));
}

// ——— Desktop: the lid opens with the scroll; list items light up in turn ———
export function initDesktop(laptop) {
  const sec = $('.desktop');
  if (!sec) return () => {};
  const pin = $('.desktop__pin', sec);
  const items = $$('.desk-list li', sec);
  let target = 0;
  let p = 0;
  const canPin = () => window.innerWidth > 1100 && window.innerHeight >= 700;
  if (!env.reduced) {
    ScrollTrigger.matchMedia({
      '(min-width: 1101px) and (min-height: 700px)': () => {
        const st = ScrollTrigger.create({ trigger: sec, pin, start: 'top top', end: '+=120%', onUpdate: (self) => (target = self.progress) });
        return () => st.kill();
      },
      '(max-width: 1100px), (max-height: 699px)': () => {
        const st = ScrollTrigger.create({ trigger: sec, start: 'top 85%', end: 'center 45%', onUpdate: (self) => (target = self.progress) });
        return () => st.kill();
      },
    });
  } else {
    target = 1;
  }
  return (dt) => {
    p += (target - p) * (1 - Math.pow(0.002, dt));
    if (laptop) laptop.open = smooth(0.02, canPin() ? 0.5 : 0.85, p);
    items.forEach((li, i) => li.classList.toggle('is-lit', p > 0.3 + i * 0.12 || !canPin()));
  };
}

// ——— Ring section: the giant caption words drift with the scroll ———
export function initRing() {
  const cap = $('.ring__caption');
  if (!cap || env.reduced) return;
  const [a, b] = $$('span', cap);
  gsap.fromTo(a, { x: -60 }, { x: 40, ease: 'none', scrollTrigger: { trigger: '.ring', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.fromTo(b, { x: 60 }, { x: -40, ease: 'none', scrollTrigger: { trigger: '.ring', start: 'top bottom', end: 'bottom top', scrub: true } });
}

// ——— CTA: the title scales in from the depth as the fox reassembles ———
export function initCta() {
  const t = $('.cta__title');
  if (!t || env.reduced) return;
  gsap.fromTo('.cta__inner', { y: 80 }, { y: 0, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'top top', scrub: true } });
  // a short hold so the fox can finish assembling before the footer arrives
  ScrollTrigger.matchMedia({
    '(min-height: 640px)': () => {
      const st = ScrollTrigger.create({ trigger: '.cta', pin: '.cta__pin', start: 'top top', end: '+=55%' });
      return () => st.kill();
    },
  });
}

// ——— Studio: cards slide in on a slight angle ———
export function initStudio(keys) {
  $('.studio')?.addEventListener('pointerdown', () => keys?.click());
  if (env.reduced) return;
  $$('.studio__cards .card').forEach((c, i) => {
    // rotation stays free for the hover tilt; the entrance slides and straightens
    gsap.fromTo(c, { x: env.mobile ? 0 : 60 + i * 20, rotationZ: 2.5 }, { x: 0, rotationZ: 0, ease: 'none', scrollTrigger: { trigger: c, start: 'top 98%', end: 'top 60%', scrub: true } });
  });
}

// ——— Video: the frame tips up from the floor as it scrolls in ———
export function initVideoFrame() {
  const v = $('.video');
  if (!v || env.reduced) return;
  gsap.fromTo(
    '.video-wrap',
    { rotateX: 24, scale: 0.88, y: 60, transformPerspective: 1600, transformOrigin: '50% 100%' },
    { rotateX: 0, scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: '.video-wrap', start: 'top bottom', end: 'center 60%', scrub: true } }
  );
}
