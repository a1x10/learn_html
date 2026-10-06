import { $ } from '../core/env.js';
import { TextRing } from '../gl/ring.js';
import { Orb } from '../gl/orb.js';
import { Constellation } from '../gl/constellation.js';
import { Keycaps } from '../gl/keycaps.js';
import { Laptop } from '../gl/laptop.js';
import { Portal } from '../gl/portal.js';
import { initWorkbench } from './workbench.js';
import { initFeatures } from './features.js';
import { initAI, initInstances, initDesktop, initRing, initCta, initStudio, initVideoFrame } from './more.js';

// Section controllers. gl() builds the 3D objects before shader warm-up,
// initSections() wires DOM animations and returns one per-frame callback.
export function initSections(world, gl, env) {
  const frames = [];
  frames.push(initWorkbench(env));
  frames.push(initFeatures(gl.director));
  initAI(gl.orb);
  initInstances(gl.constellation);
  frames.push(initDesktop(gl.laptop));
  initRing();
  initCta();
  initStudio(gl.keys);
  initVideoFrame();
  return {
    frame(dt) {
      for (const f of frames) f?.(dt);
    },
  };
}

initSections.gl = async (world, gl, env) => {
  const a = (sel, opts) => world.anchor($(sel), opts);
  gl.ring = world.add(new TextRing(world, a('[data-anchor="ring"]', { margin: 0.3 }), { mobile: env.mobile }));
  gl.orb = world.add(new Orb(world, a('[data-anchor="orb"]', { margin: 0.3 }), { mobile: env.mobile }));
  gl.constellation = world.add(new Constellation(world, a('[data-anchor="constellation"]', { margin: 0.3 }), { mobile: env.mobile }));
  gl.keys = world.add(new Keycaps(world, a('[data-anchor="keys"]', { margin: 0.3 })));
  gl.laptop = world.add(new Laptop(world, a('[data-anchor="laptop"]', { margin: 0.3 }), { mobile: env.mobile }));
  gl.portal = world.add(new Portal(world, a('[data-anchor="cta"]', { margin: 0.5 })));
};
