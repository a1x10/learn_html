import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, env } from '../core/env.js';
import { lenis } from '../core/smooth.js';

// FAQ: <details> with animated height (still works without JS)
export function initFaq() {
  $$('.qa').forEach((d) => {
    const sum = $('summary', d);
    const body = $('.qa__a', d);
    sum.addEventListener('click', (e) => {
      if (env.reduced) return;
      e.preventDefault();
      if (d.open) {
        gsap.to(body, {
          height: 0,
          duration: 0.6,
          ease: 'expo.out',
          onComplete: () => {
            d.open = false;
            gsap.set(body, { clearProps: 'height' });
            ScrollTrigger.refresh();
          },
        });
      } else {
        d.open = true;
        gsap.fromTo(body, { height: 0 }, { height: 'auto', duration: 0.8, ease: 'expo.out', onComplete: () => ScrollTrigger.refresh() });
        gsap.fromTo($('p', body), { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'expo.out', delay: 0.05 });
      }
    });
  });
  // the hash details in the download card behave the same way
  const more = $('.download__more');
  if (more) {
    more.addEventListener('toggle', () => ScrollTrigger.refresh());
  }
}

// Copy buttons (SHA-256 fingerprints)
export function initCopy() {
  $$('[data-copy]').forEach((b) => {
    b.addEventListener('click', async () => {
      const text = b.dataset.copy;
      let ok = false;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch (_) {
        const code = b.previousElementSibling;
        if (code) {
          const r = document.createRange();
          r.selectNodeContents(code);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(r);
        }
      }
      b.textContent = ok ? 'Copied' : 'Selected';
      b.classList.add('is-done');
      setTimeout(() => {
        b.textContent = 'Copy';
        b.classList.remove('is-done');
      }, 1800);
    });
  });
}

// Number counters in the specs band
export function initCounters() {
  $$('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const pre = el.dataset.prefix || '';
    if (env.reduced) return;
    const o = { v: end === 0 ? 99 : 0 };
    el.textContent = pre + o.v.toFixed(dec);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(o, {
          v: end,
          duration: end === 0 ? 1.6 : 2,
          ease: 'expo.out',
          onUpdate: () => (el.textContent = pre + o.v.toFixed(dec)),
        }),
    });
  });
}

// Demo video: opens a lightbox with the YouTube player (falls back to the link)
export function initVideo() {
  const link = $('.video');
  const modal = $('#video-modal');
  if (!link || !modal) return;
  const box = $('.modal__video', modal);
  const frame = $('.modal__frame', modal);
  const id = link.dataset.video;
  const open = () => {
    modal.hidden = false;
    lenis?.stop();
    if (env.artifact) {
      box.innerHTML = `<div class="modal__fallback"><p>The video opens on YouTube.</p><a class="btn btn--fox" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"><span class="btn__label">Watch on YouTube</span></a></div>`;
    } else {
      box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="SQL Harmony demo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }
    for (const el of document.querySelectorAll('main, header, footer')) el.inert = true;
    gsap.fromTo($('.modal__backdrop', modal), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
    gsap.fromTo(frame, { scale: 0.86, y: 40, opacity: 0, rotateX: 8 }, { scale: 1, y: 0, opacity: 1, rotateX: 0, duration: 0.9, ease: 'expo.out' });
    $('.modal__close', modal).focus({ preventScroll: true });
  };
  const close = () => {
    for (const el of document.querySelectorAll('main, header, footer')) el.inert = false;
    gsap.to(frame, { scale: 0.92, opacity: 0, duration: 0.35, ease: 'power2.in' });
    gsap.to($('.modal__backdrop', modal), {
      autoAlpha: 0,
      duration: 0.4,
      onComplete: () => {
        modal.hidden = true;
        box.innerHTML = '';
        lenis?.start();
        link.focus({ preventScroll: true });
      },
    });
  };
  link.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  });
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) close();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
}

// Footer wordmark: letters rise into place, then lean towards the cursor
export function initFooterWord() {
  const word = $('.footer__word');
  if (!word) return;
  const letters = $$('.fw', word).filter((l) => !l.classList.contains('fw--gap'));
  if (env.reduced) return;
  gsap.from(letters, {
    yPercent: 70,
    rotateX: -80,
    autoAlpha: 0,
    duration: 1.4,
    ease: 'expo.out',
    stagger: 0.05,
    scrollTrigger: { trigger: word, start: 'top 96%', once: true },
  });
  if (!env.fine) return;
  const setters = letters.map((l) => ({
    l,
    y: gsap.quickTo(l, 'y', { duration: 0.6, ease: 'power3.out' }),
    r: gsap.quickTo(l, 'rotateX', { duration: 0.6, ease: 'power3.out' }),
    s: gsap.quickTo(l, 'scaleY', { duration: 0.6, ease: 'power3.out' }),
  }));
  word.addEventListener('pointermove', (e) => {
    for (const st of setters) {
      const r = st.l.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2)) / r.width;
      const k = Math.max(0, 1 - d / 2.2);
      st.y(-k * r.height * 0.12);
      st.r(k * -18);
      st.s(1 + k * 0.08);
    }
  });
  word.addEventListener('pointerleave', () => setters.forEach((st) => (st.y(0), st.r(0), st.s(1))));
}

// Infinite DOM marquee whose speed and skew follow the scroll velocity
export function initMarquee() {
  const track = $('.marquee__track');
  if (!track || env.reduced) return { frame() {} };
  track.innerHTML += track.innerHTML;
  let x = 0;
  let w = track.scrollWidth / 2;
  window.addEventListener('resize', () => (w = track.scrollWidth / 2));
  let skew = 0;
  return {
    frame(dt) {
      const v = lenis ? lenis.velocity : 0;
      x -= Math.min(4000, 60 + Math.abs(v) * 30) * dt * (v < 0 ? -1 : 1);
      if (w > 0) x = (((x % w) + w) % w) - w;
      skew += (Math.max(-12, Math.min(12, v * 0.6)) - skew) * 0.1;
      track.style.transform = `translate3d(${x}px,0,0) skewX(${-skew}deg)`;
    },
  };
}
