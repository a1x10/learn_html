import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { env } from '../ui/core.js';

const NS = 'http://www.w3.org/2000/svg';
const seg = (p, a, b) => Math.min(Math.max((p - a) / (b - a), 0), 1);

// Первый экран: закрепляется на 2,8 экрана прокрутки.
// 3D-сцена читает прогресс, а здесь — тексты, выноски с линиями и «заливка» лаком.
export function initHero(stage) {
  const section = document.querySelector('.hero');
  const pin = section.querySelector('.hero__pin');
  const flood = pin.querySelector('.hero__flood');
  const svg = pin.querySelector('.hero__lines');
  const callouts = [...pin.querySelectorAll('.callout')];
  const fading = [...pin.querySelectorAll('[data-hero-in]')];
  const intro = fading.map(() => ({ v: env.reduced ? 1 : 0 }));

  const lines = callouts.map(() => {
    const l = document.createElementNS(NS, 'line');
    const a = document.createElementNS(NS, 'circle');
    a.setAttribute('r', '3.5');
    const b = document.createElementNS(NS, 'circle');
    b.setAttribute('r', '2');
    svg.append(l, a, b);
    return { l, a, b };
  });

  let p = 0;
  let floodX = window.innerWidth / 2;
  let st = null;
  if (!env.reduced) {
    st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => '+=' + Math.round(window.innerHeight * 2.8),
      pin,
      anticipatePin: 1,
      onUpdate: (self) => {
        p = self.progress;
        stage?.setProgress(p);
      },
    });
  }

  function frame() {
    const sp = stage ? stage.p : p;
    const W = pin.clientWidth;
    const H = pin.clientHeight;

    // тексты первого экрана уходят в начале прокрутки
    const k = 1 - seg(sp, 0.015, 0.14);
    fading.forEach((el, i) => {
      const o = intro[i].v * k;
      el.style.opacity = o.toFixed(3);
      el.style.transform = `translateY(${((1 - intro[i].v) * 26 + (1 - k) * -36).toFixed(1)}px)`;
      el.style.visibility = o < 0.01 ? 'hidden' : '';
    });

    // выноски: появляются, пока флакон открыт
    callouts.forEach((c, i) => {
      const L = lines[i];
      const a = stage?.anchors[c.dataset.anchor];
      const vis = seg(sp, 0.4 + i * 0.035, 0.46 + i * 0.035) * (1 - seg(sp, 0.64, 0.69));
      if (!a || vis <= 0.001 || W < 700) {
        c.style.visibility = 'hidden';
        L.l.style.opacity = L.a.style.opacity = L.b.style.opacity = 0;
        return;
      }
      const w = c.offsetWidth;
      const h = c.offsetHeight;
      const side = c.dataset.side === 'left' ? -1 : 1;
      const gap = Math.min(210, W * 0.13);
      let x = side > 0 ? a.x + gap : a.x - gap - w;
      let y = a.y - h / 2 + (i % 2 ? 26 : -26);
      x = Math.min(Math.max(x, 16), W - w - 16);
      y = Math.min(Math.max(y, 90), H - h - 24);
      c.style.visibility = 'visible';
      c.style.opacity = vis.toFixed(3);
      c.style.transform = `translate(${x.toFixed(1)}px, ${(y + (1 - vis) * 16).toFixed(1)}px)`;
      const ex = side > 0 ? x : x + w;
      const ey = y + h / 2;
      const lx = a.x + (ex - a.x) * vis;
      const ly = a.y + (ey - a.y) * vis;
      L.l.setAttribute('x1', a.x.toFixed(1));
      L.l.setAttribute('y1', a.y.toFixed(1));
      L.l.setAttribute('x2', lx.toFixed(1));
      L.l.setAttribute('y2', ly.toFixed(1));
      L.a.setAttribute('cx', a.x.toFixed(1));
      L.a.setAttribute('cy', a.y.toFixed(1));
      L.b.setAttribute('cx', lx.toFixed(1));
      L.b.setAttribute('cy', ly.toFixed(1));
      L.l.style.opacity = L.a.style.opacity = L.b.style.opacity = vis.toFixed(3);
    });

    // заливка лаком из точки, где капля ушла за край экрана
    const d = stage?.anchors.drop;
    if (d && stage.bottle.drop.visible && d.y < H * 1.1) floodX = d.x;
    else if (stage?.anchors.brush && sp < 0.75) floodX = stage.anchors.brush.x;
    const F = seg(sp, 0.79, 0.95);
    if (F > 0) {
      const r = Math.hypot(Math.max(floodX, W - floodX), H) * 1.05 * gsap.parseEase('power2.in')(F);
      flood.style.clipPath = `circle(${r.toFixed(1)}px at ${floodX.toFixed(1)}px ${(H + 30).toFixed(1)}px)`;
    } else flood.style.clipPath = 'circle(0px at 50% 100%)';
    if (stage) stage.enabled = F < 0.999;
  }

  return {
    frame,
    st,
    playIntro() {
      if (env.reduced) return;
      intro.forEach((o, i) => gsap.to(o, { v: 1, duration: 1.4, delay: 0.55 + i * 0.08, ease: 'expo.out' }));
      if (stage) gsap.to(stage.intro, { t: 1, duration: 2.6, ease: 'power2.out' });
    },
    showStatic() {
      intro.forEach((o) => (o.v = 1));
      if (stage) stage.intro.t = 1;
    },
  };
}
