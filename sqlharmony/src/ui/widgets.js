import { gsap } from 'gsap';
import { env } from './core.js';
import { config } from '../config.js';

// ——— бегущая строка: скорость и наклон зависят от скорости прокрутки ———
export function initMarquee(lenis) {
  const rows = [];
  document.querySelectorAll('.marquee__row').forEach((row) => {
    const track = row.querySelector('.marquee__track');
    let guard = 0;
    while (row.scrollWidth < window.innerWidth * 2.4 && guard++ < 6) {
      const c = track.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      row.appendChild(c);
    }
    const tracks = row.querySelectorAll('.marquee__track');
    const dir = Number(row.dataset.marquee) || 1;
    const tween = gsap.fromTo(tracks, { xPercent: dir > 0 ? 0 : -100 }, { xPercent: dir > 0 ? -100 : 0, duration: dir > 0 ? 30 : 38, ease: 'none', repeat: -1 });
    rows.push({ tween, skew: gsap.quickTo(row, 'skewX', { duration: 0.5, ease: 'power3' }) });
  });
  if (env.reduced) {
    rows.forEach((r) => r.tween.pause());
    return;
  }
  let scale = 1;
  let sign = 1;
  lenis?.on('scroll', ({ velocity, direction }) => {
    if (direction) sign = direction;
    scale = 1 + Math.min(Math.abs(velocity) * 0.2, 7);
    rows.forEach((r) => r.skew(gsap.utils.clamp(-9, 9, velocity * -0.3)));
  });
  gsap.ticker.add(() => {
    scale += (1 - scale) * 0.05;
    rows.forEach((r) => r.tween.timeScale(sign * scale));
  });
}

// ——— «расшифровка» текста ссылок при наведении ———
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*_<>/';
export function initScramble() {
  if (env.reduced || !env.fine) return;
  document.querySelectorAll('[data-scramble]').forEach((el) => {
    const text = el.textContent;
    let raf = 0;
    el.addEventListener('pointerenter', () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const run = (now) => {
        const p = Math.min(1, (now - start) / 450);
        const reveal = Math.floor(p * text.length);
        el.textContent = text
          .split('')
          .map((ch, i) => (i < reveal || ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join('');
        if (p < 1) raf = requestAnimationFrame(run);
      };
      raf = requestAnimationFrame(run);
    });
  });
}

// ——— ссылки и данные из config.js ———
export function initLinks() {
  document.querySelectorAll('[data-link]').forEach((a) => {
    const url = config.links[a.dataset.link];
    if (url) a.setAttribute('href', url);
  });
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
}

// ——— копирование SHA-256 ———
export function initCopy() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.parentElement.querySelector('[data-hash]');
      const text = code.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const r = document.createRange();
        r.selectNodeContents(code);
        const s = getSelection();
        s.removeAllRanges();
        s.addRange(r);
      }
      btn.textContent = 'Copied';
      btn.classList.add('is-done');
      // эффект: хеш «пересобирается»
      if (!env.reduced) {
        const o = { p: 0 };
        gsap.to(o, {
          p: 1,
          duration: 0.6,
          ease: 'none',
          onUpdate: () => {
            const k = Math.floor(o.p * text.length);
            code.textContent = text.slice(0, k) + text.slice(k).replace(/./g, () => '0123456789abcdef'[(Math.random() * 16) | 0]);
          },
          onComplete: () => (code.textContent = text),
        });
      }
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('is-done');
      }, 1800);
    });
  });
}

// ——— видео: обложка, по клику подгружается YouTube ———
export function initVideo() {
  const btn = document.querySelector('[data-video]');
  if (!btn) return;
  const id = btn.dataset.video;
  // в предпросмотре на claude.ai чужие сайты встраивать нельзя — там ролик открывается на YouTube в новой вкладке
  if (document.documentElement.classList.contains('is-artifact')) {
    const a = document.createElement('a');
    a.className = btn.className;
    a.href = `https://www.youtube.com/watch?v=${id}`;
    a.target = '_blank';
    a.rel = 'noopener';
    a.dataset.cursor = 'YouTube';
    a.setAttribute('aria-label', 'Watch the SQL Harmony demo on YouTube');
    a.append(...btn.childNodes);
    btn.replaceWith(a);
    return;
  }
  const thumb = btn.querySelector('.demo__thumb');
  const img = new Image();
  img.onload = () => {
    if (img.naturalWidth > 200) {
      thumb.style.setProperty('--img', `url(${img.src})`);
      thumb.classList.add('has-img');
    }
  };
  img.src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  btn.addEventListener('click', () => {
    const frame = btn.parentElement;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    iframe.title = 'SQL Harmony — how it works';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    gsap.to(btn, {
      opacity: 0,
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        btn.remove();
        frame.appendChild(iframe);
      },
    });
  });
}

// ——— переключатель экземпляров Fusion ———
export function initInstances(stage) {
  const chips = [...document.querySelectorAll('[data-inst]')];
  const name = document.querySelector('[data-inst-name]');
  const subs = ['fusion-dev', 'fusion-test', 'fusion-uat', 'fusion-prod'];
  let auto = !env.reduced;
  const set = (i) => {
    chips.forEach((c, k) => {
      c.classList.toggle('is-active', k === i);
      c.setAttribute('aria-selected', String(k === i));
    });
    if (name) {
      gsap.fromTo(name, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4 });
      name.textContent = subs[i];
    }
    stage?.setActive(i);
  };
  chips.forEach((c, i) =>
    c.addEventListener('click', () => {
      auto = false;
      set(i);
    })
  );
  // пока посетитель не выбрал сам, экземпляры переключаются по кругу
  let i = 3;
  setInterval(() => {
    if (!auto || document.hidden) return;
    const r = document.querySelector('.instances')?.getBoundingClientRect();
    if (!r || r.bottom < 0 || r.top > window.innerHeight) return;
    i = (i + 1) % chips.length;
    set(i);
  }, 3200);
}
