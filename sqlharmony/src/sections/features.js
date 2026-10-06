import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { $, $$, env, clamp } from '../core/env.js';

// Features: a pinned horizontal track. The panel nearest the centre is "active":
// its demo plays, the counter flips, and the fox shards form its icon.
export function initFeatures(director) {
  const sec = $('.features');
  if (!sec) return () => {};
  const root = document.documentElement;
  const pin = $('.features__pin', sec);
  const track = $('.features__track', sec);
  const panels = $$('.feature', sec);
  const cur = $('.features__cur', sec);
  const bar = $('.features__progress i', sec);
  const demos = panels.map((p, i) => [makeCopyDemo, makeHistoryDemo, makeFormatDemo, makeExcelDemo][i]?.(p));
  let active = -1;

  const setActive = (i) => {
    if (i === active) return;
    const prev = active;
    active = i;
    director?.setFeature(i);
    demos.forEach((d, k) => (k === i ? d?.play() : d?.pause()));
    if (cur) {
      const dir = prev < i ? 1 : -1;
      gsap.fromTo(cur, { yPercent: 60 * dir, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: 'expo.out' });
      cur.textContent = String(i + 1).padStart(2, '0');
    }
    panels.forEach((p, k) => p.classList.toggle('is-active', k === i));
  };

  // reduced motion: the cards stack (CSS) and every demo shows its finished state
  if (env.reduced) {
    demos.forEach((d) => d?.rest());
    director?.setFeature(0);
    return () => {};
  }

  let tween = null;
  const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
  const mm = gsap.matchMedia();
  // tall enough: pinned horizontal track
  mm.add('(min-height: 561px)', () => {
    root.classList.remove('feat-stack');
    tween = gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        pin,
        start: 'top top',
        end: () => '+=' + Math.round(dist() * 1.25 + window.innerHeight * 0.4),
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (bar) bar.style.transform = `scaleX(${self.progress})`;
        },
      },
    });
    return () => {
      tween = null;
      panels.forEach((p) => {
        p.style.transform = '';
        p.style.opacity = '';
      });
    };
  });
  // landscape phones and short windows: the cards stack, each demo plays while its card is on screen
  mm.add('(max-height: 560px)', () => {
    root.classList.add('feat-stack');
    const sts = panels.map((p, i) => ScrollTrigger.create({ trigger: p, start: 'top 70%', end: 'bottom 30%', onToggle: (self) => self.isActive && setActive(i) }));
    return () => {
      root.classList.remove('feat-stack');
      sts.forEach((t) => t.kill());
    };
  });

  setActive(0);
  let idle = false;
  return () => {
    const st = tween?.scrollTrigger;
    if (!st) return;
    // only touch the DOM while the pinned track is (nearly) on screen
    const near = st.isActive || (window.scrollY > st.start - window.innerHeight && window.scrollY < st.end + window.innerHeight);
    if (!near) {
      if (!idle) {
        idle = true;
        if (st.progress <= 0) setActive(0);
      }
      return;
    }
    idle = false;
    // a little depth: panels away from the centre turn and sink
    const cx = window.innerWidth / 2;
    let best = 0;
    let bestD = Infinity;
    panels.forEach((p, i) => {
      const r = p.getBoundingClientRect();
      const off = (r.left + r.width / 2 - cx) / window.innerWidth;
      const d = Math.abs(off);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
      const k = clamp(d * 1.4);
      p.style.transform = `perspective(1400px) rotateY(${-off * 16}deg) translateZ(${-k * 120}px) scale(${1 - k * 0.06})`;
      p.style.opacity = String(1 - k * 0.45);
    });
    if (st.isActive) setActive(best);
    else if (st.progress <= 0) setActive(0);
  };
}

// ——— 01 copy: a column lights up, its cells fly into the clipboard ———
function makeCopyDemo(panel) {
  const demo = $('.demo--copy', panel);
  if (!demo) return null;
  const cells = $$('.mg-row:not(.mg-head) .pick', demo);
  const clip = $('.clip__text', demo);
  const final = clip.textContent;
  clip.textContent = '';
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.6 });
  tl.call(() => {
    demo.classList.remove('is-picked');
    clip.textContent = '';
  });
  tl.call(() => demo.classList.add('is-picked'), null, 0.4);
  cells.forEach((cell, i) => {
    tl.call(
      () => {
        const dr = demo.getBoundingClientRect();
        const r = cell.getBoundingClientRect();
        const cr = clip.getBoundingClientRect();
        const fly = document.createElement('span');
        fly.className = 'fly';
        fly.textContent = cell.textContent;
        demo.appendChild(fly);
        gsap.fromTo(
          fly,
          { x: r.left - dr.left, y: r.top - dr.top, scale: 1, autoAlpha: 1 },
          {
            x: cr.left - dr.left + i * 18,
            y: cr.top - dr.top,
            scale: 0.8,
            duration: 0.75,
            ease: 'power3.inOut',
            onComplete: () => gsap.to(fly, { autoAlpha: 0, duration: 0.2, onComplete: () => fly.remove() }),
          }
        );
      },
      null,
      0.8 + i * 0.14
    );
  });
  tl.to(clip, { duration: 1.1, scrambleText: { text: final, chars: "'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-", speed: 0.8 } }, 1.5);
  tl.to({}, { duration: 1.8 });
  return {
    play: () => tl.play(),
    pause: () => tl.pause(),
    rest: () => {
      demo.classList.add('is-picked');
      clip.textContent = final;
    },
  };
}

// ——— 02 history: typing a search filters the list down to matches ———
function makeHistoryDemo(panel) {
  const demo = $('.demo--history', panel);
  if (!demo) return null;
  const q = $('.hist-search__q', demo);
  const items = $$('.hist-list li', demo);
  const word = 'invoice';
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.8 });
  tl.call(() => {
    q.textContent = '';
    items.forEach((li) => li.classList.remove('is-hit'));
  });
  tl.set(items, { height: 'auto', autoAlpha: 1, paddingTop: 7, paddingBottom: 7 });
  for (let i = 1; i <= word.length; i++) tl.call(() => (q.textContent = word.slice(0, i)), null, 0.4 + i * 0.12);
  const miss = items.filter((li) => li.dataset.k !== 'invoice');
  const hit = items.filter((li) => li.dataset.k === 'invoice');
  tl.to(miss, { height: 0, paddingTop: 0, paddingBottom: 0, autoAlpha: 0, duration: 0.5, ease: 'expo.inOut', stagger: 0.05 }, 1.5);
  tl.call(() => hit[0]?.classList.add('is-hit'), null, 2.1);
  tl.fromTo(hit[0] || {}, { x: 0 }, { x: 6, duration: 0.15, yoyo: true, repeat: 1 }, 2.15);
  tl.to({}, { duration: 2.2 });
  return {
    play: () => tl.play(),
    pause: () => tl.pause(),
    rest: () => {
      q.textContent = word;
      miss.forEach((li) => (li.style.display = 'none'));
      hit[0]?.classList.add('is-hit');
    },
  };
}

// ——— 03 format: a one-line query reflows into tidy SQL (FLIP) ———
function makeFormatDemo(panel) {
  const demo = $('.demo--format', panel);
  if (!demo) return null;
  const code = $('.fmt-code code', demo);
  const btn = $('.fmt-btn', demo);
  // [text, kind, lineBreakBefore, indent]
  const toks = [
    ['select', 'k', 0, 0],
    ['invoice_id,', '', 0, 0],
    ['invoice_num,', '', 1, 7],
    ['amount', '', 1, 7],
    ['from', 'k', 1, 0],
    ['ap_invoices_all', '', 0, 0],
    ['where', 'k', 1, 0],
    ['amount', '', 0, 0],
    ['>', '', 0, 0],
    ['1000', 'p', 0, 0],
    ['order', 'k', 1, 0],
    ['by', 'k', 0, 0],
    ['invoice_num', '', 0, 0],
  ];
  const spans = toks.map(([t, kind]) => {
    const s = document.createElement('span');
    s.className = 'tok' + (kind ? ' ' + kind : '');
    s.textContent = t;
    s._raw = t;
    s._up = kind === 'k' ? t.toUpperCase() : t;
    return s;
  });
  const messy = () => {
    code.textContent = '';
    spans.forEach((s, i) => {
      s.textContent = s._raw;
      code.appendChild(s);
      if (i < spans.length - 1) code.appendChild(document.createTextNode(' '));
    });
  };
  const tidy = () => {
    code.textContent = '';
    spans.forEach((s, i) => {
      const [, , br, ind] = toks[i];
      if (i > 0) code.appendChild(document.createTextNode(br ? '\n' + ' '.repeat(ind) : ' '));
      s.textContent = s._up;
      // align the first token after a keyword column
      code.appendChild(s);
    });
  };
  messy();
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.4 });
  tl.call(() => messy());
  tl.call(() => btn.classList.add('is-press'), null, 0.9);
  tl.call(() => btn.classList.remove('is-press'), null, 1.15);
  tl.call(
    () => {
      const state = Flip.getState(spans);
      tidy();
      Flip.from(state, { duration: 1.1, ease: 'expo.inOut', stagger: 0.02, scale: true });
    },
    null,
    1.15
  );
  tl.to({}, { duration: 2.8 });
  return {
    play: () => tl.play(),
    pause: () => tl.pause(),
    rest: () => tidy(),
  };
}

// ——— 04 excel: cells light up and stream into an .xlsx file ———
function makeExcelDemo(panel) {
  const demo = $('.demo--excel', panel);
  if (!demo) return null;
  const cells = $$('.xl-cells span', demo);
  const bar = $('.xl-file__bar i', demo);
  const name = $('.xl-file__name', demo);
  const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.6 });
  tl.call(() => {
    cells.forEach((c) => c.classList.remove('is-lit'));
    name.textContent = 'results.xlsx';
  });
  tl.set(bar, { scaleX: 0 });
  cells.forEach((c, i) => tl.call(() => c.classList.add('is-lit'), null, 0.3 + i * 0.08));
  tl.to(bar, { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, 0.6);
  tl.call(() => (name.textContent = 'results.xlsx  ✓'), null, 1.85);
  tl.to(cells, { scale: 0.9, duration: 0.2, yoyo: true, repeat: 1, stagger: 0.02 }, 1.9);
  tl.to({}, { duration: 1.6 });
  return {
    play: () => tl.play(),
    pause: () => tl.pause(),
    rest: () => {
      cells.forEach((c) => c.classList.add('is-lit'));
      gsap.set(bar, { scaleX: 1 });
      name.textContent = 'results.xlsx  ✓';
    },
  };
}
