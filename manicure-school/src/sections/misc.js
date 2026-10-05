import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { env } from '../ui/core.js';

const seg = (p, a, b) => Math.min(Math.max((p - a) / (b - a), 0), 1);

// ——— рабочее место: закрепление + подписи над предметами ———
export function initKit(stage) {
  const section = document.querySelector('.kit');
  const pin = section.querySelector('.kit__pin');
  const labels = [...pin.querySelectorAll('.kit__label')];
  const content = pin.querySelector('.kit__content');
  let st = null;
  if (!env.reduced) {
    st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => '+=' + Math.round(window.innerHeight * 1.7),
      pin,
      anticipatePin: 1,
      onUpdate: (self) => stage?.setProgress(self.progress),
    });
    gsap.from(content.children, {
      opacity: 0,
      x: -30,
      stagger: 0.07,
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: section, start: 'top 60%', once: true },
    });
  } else stage?.setProgress(1);

  function frame() {
    if (!stage || !stage.visible) return;
    const pos = stage.labelPositions();
    const W = pin.clientWidth;
    const mobile = W < 980;
    labels.forEach((el, i) => {
      const it = pos.find((q) => q.key === el.dataset.item);
      if (!it) return;
      const vis = seg(stage.p, 0.6 + i * 0.025, 0.7 + i * 0.025);
      const hideOnMobile = mobile && ['bits', 'pusher', 'oil', 'file'].includes(el.dataset.item);
      const o = hideOnMobile ? 0 : vis;
      el.style.opacity = o.toFixed(3);
      el.style.transform = `translate(${(it.x - 10).toFixed(1)}px, ${(it.y - 14 + (1 - vis) * 12).toFixed(1)}px)`;
    });
  }
  return { frame, st };
}

// ——— галерея дизайнов: горизонтальная прокрутка ———
export function initWorks(gallery) {
  const section = document.querySelector('.works');
  const pin = section.querySelector('.works__pin');
  const track = section.querySelector('.works__track');
  const viewport = section.querySelector('.works__viewport');
  const bar = section.querySelector('.works__bar span');
  const cards = [...section.querySelectorAll('.work')];
  const mm = gsap.matchMedia();

  mm.add('(min-width: 981px) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.remove('is-native');
    const dist = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
    const skewTo = gsap.quickTo(cards, 'skewX', { duration: 0.6, ease: 'power3' });
    const tween = gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + Math.round(dist() * 1.05),
        pin,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          bar.style.transform = `scaleX(${(0.08 + self.progress * 0.92).toFixed(4)})`;
          const v = gsap.utils.clamp(-4, 4, self.getVelocity() / -400);
          skewTo(v);
        },
      },
    });
    const onEnd = () => skewTo(0);
    ScrollTrigger.addEventListener('scrollEnd', onEnd);
    gsap.from(cards, {
      y: (i) => 90 + (i % 3) * 36,
      opacity: 0,
      duration: 1.3,
      stagger: 0.07,
      ease: 'expo.out',
      scrollTrigger: { trigger: section, start: 'top 65%', once: true },
    });
    return () => {
      ScrollTrigger.removeEventListener('scrollEnd', onEnd);
      gsap.set(track, { x: 0 });
      gsap.set(cards, { skewX: 0 });
    };
  });
  mm.add('(max-width: 980px), (prefers-reduced-motion: reduce)', () => {
    section.classList.add('is-native');
  });

  // рендерим «фото» дизайнов, когда секция близко
  if (!gallery) {
    cards.forEach((c) => {
      const box = c.querySelector('.work__img');
      box.classList.add('is-loaded');
      if (!c.querySelector('img').getAttribute('src')) box.classList.add('is-fallback');
    });
    return;
  }
  let started = false;
  const start = async () => {
    if (started) return;
    started = true;
    const poster = document.querySelector('[data-render]');
    if (poster) {
      const blob = await gallery.shot({ design: 'cherry', w: 960, h: 540, angle: -0.2, tilt: -0.15, roll: -1.2, bg: ['#3d1420', '#120a0d'] });
      poster.src = URL.createObjectURL(blob);
      poster.onload = () => poster.classList.add('is-loaded');
    }
    for (const card of cards) {
      const img = card.querySelector('img');
      // если у карточки уже есть настоящее фото — 3D-рендер не нужен
      if (img.getAttribute('src') || !card.dataset.design) {
        const done = () => card.querySelector('.work__img').classList.add('is-loaded');
        if (img.complete) done();
        else img.addEventListener('load', done, { once: true });
        continue;
      }
      const blob = await gallery.shot({ design: card.dataset.design, angle: Number(card.dataset.angle) || 0 });
      img.src = URL.createObjectURL(blob);
      img.onload = () => card.querySelector('.work__img').classList.add('is-loaded');
      await new Promise((r) => setTimeout(r, 40));
    }
    gallery.dispose(['cherry', 'final', 'french', 'foil', 'base', 'clean', 'natural', 'overgrown']);
  };
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        start();
      }
    },
    { rootMargin: '250% 0px' }
  );
  io.observe(section);
  io.observe(document.querySelector('.format'));
  setTimeout(start, 6000);
}

// ——— формат: «личный кабинет» выпрямляется при скролле ———
export function initFormat() {
  const platform = document.querySelector('[data-platform]');
  if (!platform) return;
  if (env.reduced) return;
  gsap.fromTo(
    platform,
    { rotationX: 18, rotationY: -12, y: 90, transformPerspective: 1600 },
    {
      rotationX: 0,
      rotationY: 0,
      y: 0,
      ease: 'none',
      scrollTrigger: { trigger: '.format__layout', start: 'top 95%', end: 'top 25%', scrub: 1 },
    }
  );
  const tl = gsap.timeline({ scrollTrigger: { trigger: platform, start: 'top 70%', once: true } });
  tl.from(platform.querySelector('.platform__progress em'), { scaleX: 0, duration: 1.4, ease: 'expo.out' })
    .from(platform.querySelector('.platform__track span'), { scaleX: 0, duration: 1.6, ease: 'power2.out' }, 0)
    .from(platform.querySelectorAll('.platform__list li'), { opacity: 0, x: 20, stagger: 0.08, duration: 0.7, ease: 'expo.out' }, 0.2)
    .from(platform.querySelectorAll('.platform__msg'), { opacity: 0, y: 18, scale: 0.94, stagger: 0.6, duration: 0.7, ease: 'back.out(1.6)' }, 0.8);
  const b = platform.querySelector('.platform__progress b');
  const o = { v: 0 };
  tl.to(o, { v: 62, duration: 1.4, ease: 'expo.out', onUpdate: () => (b.textContent = Math.round(o.v) + '%') }, 0);
}
