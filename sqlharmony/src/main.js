import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { TextPlugin } from 'gsap/TextPlugin';

import { env, wait, $ } from './core/env.js';
import { initSmooth, onFrame, initAnchors, scrollVelocity } from './core/smooth.js';
import { createPreloader } from './ui/preloader.js';

import { World } from './gl/world.js';
import { Backdrop, Dust } from './gl/backdrop.js';
import { Shards } from './gl/shards.js';
import { HeroWord, Chips, WaveFloor } from './gl/hero.js';
import { CursorTrail } from './gl/trail.js';

import { initDirector } from './sections/director.js';
import { initHero } from './sections/hero.js';
import { initSections } from './sections/index.js';
import { initUI } from './ui/index.js';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, CustomEase, Flip, TextPlugin);
gsap.config({ nullTargetWarn: false });
// phones: the address bar showing/hiding must not re-layout pinned sections
ScrollTrigger.config({ ignoreMobileResize: true });
CustomEase.create('silk', '0.16, 1, 0.3, 1');

const root = document.documentElement;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function noiseDataURL(size = 180) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const img = g.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return c.toDataURL('image/png');
}

async function boot() {
  root.classList.remove('no-js');
  root.classList.add('js', env.reduced ? 'reduced' : 'anim');
  if (env.fine) root.classList.add('has-cursor');
  window.scrollTo(0, 0);
  const pre = createPreloader();
  const grain = $('.grain');
  if (grain) grain.style.backgroundImage = `url(${noiseDataURL()})`;

  // fonts first: the 3D word and chips are drawn with them
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load('800 200px "Bricolage Grotesque"'),
        document.fonts.load('500 40px "JetBrains Mono"'),
        document.fonts.load('italic 400 40px "Instrument Serif"'),
        document.fonts.load('400 16px "Geist"'),
      ]),
      wait(4000),
    ]);
  } catch (_) {
    /* fall back to system fonts */
  }
  pre.set(0.3);

  // ——— 3D ———
  let world = null;
  const gl = {};
  try {
    world = new World($('#gl'), { mobile: env.mobile, reduced: env.reduced });
    if (world.failed) world = null;
  } catch (e) {
    console.warn('WebGL off:', e);
    world = null;
  }
  if (world) {
    try {
      root.classList.add('webgl-on');
      gl.backdrop = world.add(new Backdrop());
      gl.dust = world.add(new Dust({ count: env.mobile ? 650 : 1400 }));
      gl.shards = world.add(new Shards({ levels: 2 }));
      gl.director = initDirector(world, gl.shards, { backdrop: gl.backdrop, mobile: env.mobile, reduced: env.reduced });
      const getFox = () => gl.director.state.fox;
      gl.word = world.add(new HeroWord(world, getFox, { mobile: env.mobile }));
      gl.floor = world.add(new WaveFloor(world, getFox, { mobile: env.mobile }));
      gl.chips = world.add(new Chips(world, getFox, { mobile: env.mobile }));
      if (env.fine && !env.reduced) gl.trail = world.add(new CursorTrail(world));
      pre.set(0.45);
      await initSections.gl?.(world, gl, env);
      pre.set(0.6);
      await world.warmup();
      pre.set(0.92);
    } catch (e) {
      console.warn('3D disabled:', e);
      root.classList.remove('webgl-on');
      root.classList.add('webgl-off');
      world = null;
    }
  } else {
    root.classList.add('webgl-off');
  }

  if (/[?&]debug=1/.test(location.search)) window.__gl = { world, ...gl };

  // ——— interface ———
  const lenis = initSmooth();
  lenis?.stop();
  const hero = initHero({ word: gl.word, chips: gl.chips, floor: gl.floor, director: gl.director });
  const sections = initSections(world, gl, env);
  const ui = initUI(env);
  initAnchors(() => ui.closeMenu?.());

  onFrame((dt) => {
    if (world) {
      world.scrollVel = scrollVelocity();
      gl.director?.frame();
      hero.frame();
      sections.frame?.(dt);
      world.render(dt);
    } else {
      sections.frame?.(dt);
    }
    ui.frame?.(dt);
  });

  ScrollTrigger.refresh();
  await pre.finish();
  root.classList.add('is-ready');
  lenis?.start();
  gl.director?.intro();
  hero.intro();
  ui.intro?.();

  window.addEventListener('load', () => ScrollTrigger.refresh());
  if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
}

boot().catch((e) => {
  console.error(e);
  $('#preloader')?.classList.add('is-done');
  root.classList.remove('anim');
  root.classList.add('is-ready');
});
