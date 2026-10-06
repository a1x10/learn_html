import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { Engine } from './three/engine.js';
import { HeroStage } from './three/stages/hero.js';
import { MiniStage } from './three/stages/mini.js';
import { InstancesStage } from './three/stages/instances.js';
import { LaptopStage } from './three/stages/laptop.js';
import { RingsStage } from './three/stages/rings.js';
import { updatePointer } from './three/util.js';

import { env, initSmooth, initAnchors, noiseDataURL, wait } from './ui/core.js';
import { createPreloader } from './ui/preloader.js';
import { initCursor, initMagnetic, initTilt } from './ui/pointer.js';
import { initChrome } from './ui/chrome.js';
import { initReveals, showAll } from './ui/reveal.js';
import { initMarquee, initScramble, initLinks, initCopy, initVideo, initInstances } from './ui/widgets.js';
import { initHero } from './sections/hero.js';
import { initEditor } from './sections/editor.js';
import { initFeatures, initDemo, initDesktop, initCta } from './sections/misc.js';

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ nullTargetWarn: false });

const root = document.documentElement;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

async function boot() {
  root.classList.remove('no-js');
  root.classList.add('js', env.reduced ? 'reduced' : 'anim');
  window.scrollTo(0, 0);
  initLinks();
  const pre = createPreloader();
  const grain = document.querySelector('.grain');
  if (grain) grain.style.backgroundImage = `url(${noiseDataURL()})`;

  // шрифты нужны до того, как текст попадёт на 3D-текстуры
  try {
    await Promise.race([
      Promise.all([document.fonts.load('600 64px "Geist"'), document.fonts.load('500 40px "Geist Mono"'), document.fonts.load('650 120px "Bricolage Grotesque"')]),
      wait(3500),
    ]);
  } catch (_) {
    /* без шрифтов тоже работаем */
  }
  pre.set(0.25);

  // ——— 3D ———
  let engine = null;
  const st = {};
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
      st.hero = engine.add(new HeroStage(q('[data-stage="hero"]'), { mobile: engine.isMobile }));
      document.querySelectorAll('[data-stage="mini"]').forEach((el) => engine.add(new MiniStage(el, el.dataset.model)));
      st.instances = engine.add(new InstancesStage(q('[data-stage="instances"]')));
      st.laptop = engine.add(new LaptopStage(q('[data-stage="laptop"]')));
      st.rings = engine.add(new RingsStage(q('[data-stage="rings"]'), { mobile: engine.isMobile }));
      pre.set(0.4);
      await engine.warmup((p) => pre.set(0.4 + p * 0.5));
    } catch (e) {
      console.warn('3D disabled:', e);
      engine.stages.length = 0;
      for (const k in st) st[k] = null;
      root.classList.replace('webgl-on', 'webgl-off');
    }
  } else {
    root.classList.add('webgl-off');
  }
  pre.set(0.95);

  // ——— интерфейс и анимации ———
  const chrome = initChrome(engine);
  const hero = initHero(st.hero);
  const editor = initEditor();
  initFeatures();
  initDemo();
  initDesktop(st.laptop);
  initCta(st.rings, st.instances);
  initInstances(st.instances);
  initVideo();
  initCopy();

  const lenis = initSmooth((t, dt) => {
    updatePointer(dt);
    hero.frame();
    editor.frame();
    chrome();
    engine?.render(t, dt);
  });
  lenis?.stop();
  initMarquee(lenis);
  initAnchors();

  if (env.reduced) {
    showAll();
    hero.showStatic();
  } else {
    initReveals();
    initCursor();
    initMagnetic();
    initTilt();
    initScramble();
  }

  ScrollTrigger.refresh();
  await pre.finish();
  root.classList.add('is-ready');
  lenis?.start();
  hero.playIntro();
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

boot().catch((e) => {
  console.error(e);
  document.getElementById('preloader')?.remove();
  root.classList.remove('anim');
  showAll();
});
