import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { Engine } from './three/engine.js';
import { HeroStage } from './three/stages/hero.js';
import { NailStage } from './three/stages/program.js';
import { KitStage } from './three/stages/kit.js';
import { MiniStage, PlanStage } from './three/stages/mini.js';
import { PaletteStage } from './three/stages/palette.js';
import { GalleryRenderer } from './three/gallery.js';
import { updatePointer } from './three/util.js';

import { env, initSmooth, initAnchors, noiseDataURL, wait } from './ui/core.js';
import { createPreloader } from './ui/preloader.js';
import { initCursor, initMagnetic, initTilt } from './ui/pointer.js';
import { initChrome } from './ui/chrome.js';
import { initReveals, showAll } from './ui/reveal.js';
import { initMarquee, initFaq, initPricing, initForm, initReviews, initStamp, initDates } from './ui/widgets.js';
import { initHero } from './sections/hero.js';
import { initProgram } from './sections/program.js';
import { initKit, initWorks, initFormat } from './sections/misc.js';

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ nullTargetWarn: false });

const root = document.documentElement;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

async function boot() {
  root.classList.remove('no-js');
  root.classList.add('js');
  window.scrollTo(0, 0);
  const pre = createPreloader();
  const grain = document.querySelector('.grain');
  if (grain) grain.style.backgroundImage = `url(${noiseDataURL()})`;
  root.classList.add(env.reduced ? 'reduced' : 'anim');

  // шрифты нужны до того, как буквы заголовка попадут в 3D
  try {
    await Promise.race([
      Promise.all([document.fonts.load('400 120px "Prata"'), document.fonts.load('500 40px "Martian Mono"')]),
      wait(3500),
    ]);
  } catch (_) {
    /* без шрифтов тоже работаем */
  }
  pre.set(0.2);
  await Promise.race([document.fonts.ready, wait(2500)]);
  pre.set(0.28);

  // ——— 3D ———
  let engine = null;
  let hero = null;
  let nail = null;
  let kit = null;
  let palette = null;
  let gallery = null;
  try {
    engine = new Engine(document.getElementById('webgl'));
    if (engine.failed) engine = null;
  } catch (e) {
    engine = null;
  }

  if (engine) {
    root.classList.add('webgl-on');
    const q = (s) => document.querySelector(s);
    try {
      hero = engine.add(new HeroStage(q('[data-stage="hero"]')));
      hero.buildWord();
      nail = engine.add(new NailStage(q('[data-stage="nail"]')));
      kit = engine.add(new KitStage(q('[data-stage="kit"]'), { mobile: engine.isMobile }));
      document.querySelectorAll('[data-stage="mini"]').forEach((el) => engine.add(new MiniStage(el, el.dataset.model)));
      document.querySelectorAll('[data-stage="plan"]').forEach((el) => engine.add(new PlanStage(el, el.dataset.variant, { transmissive: true })));
      palette = engine.add(new PaletteStage(q('[data-stage="palette"]'), { transmissive: true }));
      pre.set(0.42);
      await engine.warmup((p) => pre.set(0.42 + p * 0.5));
      gallery = new GalleryRenderer(engine);
    } catch (e) {
      console.warn('3D отключено:', e);
      engine.stages.length = 0;
    }
  } else {
    root.classList.add('webgl-off');
  }
  pre.set(0.95);

  // ——— интерфейс и анимации ———
  const chrome = initChrome(engine);
  const heroCtl = initHero(hero);
  initProgram(nail);
  const kitCtl = initKit(kit);
  initFormat();
  initWorks(gallery);
  initDates();
  initPricing();
  initFaq();
  initForm(palette);
  initReviews();
  initStamp();

  // логотип в подвале заполняется лаком снизу вверх
  if (!env.reduced) {
    gsap.fromTo(
      '.footer__word',
      { '--fill': '0%' },
      { '--fill': '100%', ease: 'none', scrollTrigger: { trigger: '.footer__word', start: 'top bottom', end: 'bottom 85%', scrub: true } }
    );
  }

  if (palette && !env.reduced) {
    ScrollTrigger.create({
      trigger: '.cta',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => (palette.scrollP = self.progress),
    });
  }

  const lenis = initSmooth((t, dt) => {
    updatePointer(dt);
    heroCtl.frame();
    kitCtl.frame();
    chrome();
    engine?.render(t, dt);
  });
  lenis?.stop();
  initMarquee(lenis);
  initAnchors();

  if (env.reduced) {
    showAll();
    heroCtl.showStatic();
  } else {
    initReveals();
    initCursor();
    initMagnetic();
    initTilt();
  }

  ScrollTrigger.refresh();
  await pre.finish();
  root.classList.add('is-ready');
  lenis?.start();
  heroCtl.playIntro();

  // пересчёт после загрузки всех шрифтов и картинок
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

boot().catch((e) => {
  console.error(e);
  document.getElementById('preloader')?.remove();
  root.classList.remove('anim');
  showAll();
});
