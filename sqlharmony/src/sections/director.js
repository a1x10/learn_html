import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FORM } from '../gl/formations.js';
import { $, $$, clamp } from '../core/env.js';

// Decides where the fox shards are, section by section, and which mood the sky has.
// Hero: scroll scrubs the fox into a cloud. Further down every section has a "stop"
// (formation + placement); entering the section sends the swarm there.

const FEATURE_FORMS = [FORM.COPY, FORM.HISTORY, FORM.FORMAT, FORM.GRID];

const STOPS = {
  Why: [FORM.CLOUD, 'cloud', { duration: 1.6, stagger: 0.5, glow: 0.22 }],
  Workbench: [FORM.HALO, 'halo', { duration: 2.0, stagger: 0.6, swirl: 1.2, glow: 0.4 }],
  Dialect: [FORM.SCATTER, 'identity', { duration: 1.6, stagger: 0.45, swirl: 0.4 }],
  'AI help': [FORM.SPHERE, 'ai', { duration: 1.9, stagger: 0.6, swirl: 1.4, glow: 0.45 }],
  Instances: [FORM.GALAXY, 'inst', { duration: 2.0, stagger: 0.6, swirl: 1.2, glow: 0.3 }],
  Editor: [FORM.SCATTER, 'identity', { duration: 1.5, stagger: 0.4, swirl: 0.4 }],
  Desktop: [FORM.SCATTER, 'identity', { duration: 1.5 }],
  Demo: [FORM.SCATTER, 'identity', { duration: 1.5 }],
  Specs: [FORM.SCATTER, 'identity', { duration: 1.5 }],
  FAQ: [FORM.SCATTER, 'identity', { duration: 1.5 }],
  Start: [FORM.FOX, 'cta', { duration: 2.6, stagger: 0.75, order: [0.25, 0.75, 0], swirl: 1.4 }],
  Contact: [FORM.FOX, 'cta', { duration: 2.6, stagger: 0.75, order: [0.25, 0.75, 0], swirl: 1.4 }],
};

// sky mood per section: warm/cold glow amounts and where they sit (-1..1 screen space)
const TONES = {
  hero: { warm: 0.12, cold: 0.14, wp: [-0.1, -0.9], cp: [0.85, 0.75] },
  cloud: { warm: 0.12, cold: 0.12, wp: [-0.8, 0.2], cp: [0.8, -0.4] },
  halo: { warm: 0.1, cold: 0.16, wp: [0.0, -0.9], cp: [0.0, 0.8] },
  ring: { warm: 0.14, cold: 0.08, wp: [0.0, 0.0], cp: [0.9, 0.9] },
  features: { warm: 0.12, cold: 0.12, wp: [-0.7, 0.0], cp: [0.9, -0.6] },
  ai: { warm: 0.12, cold: 0.2, wp: [0.6, -0.6], cp: [0.5, 0.3] },
  instances: { warm: 0.06, cold: 0.22, wp: [-0.8, -0.8], cp: [0.0, 0.0] },
  studio: { warm: 0.12, cold: 0.1, wp: [-0.6, 0.0], cp: [0.8, 0.6] },
  desktop: { warm: 0.16, cold: 0.12, wp: [0.5, -0.3], cp: [-0.7, 0.7] },
  video: { warm: 0.08, cold: 0.16, wp: [-0.8, -0.8], cp: [0.0, 0.2] },
  specs: { warm: 0.08, cold: 0.08, wp: [-0.5, 0.0], cp: [0.5, 0.0] },
  faq: { warm: 0.06, cold: 0.1, wp: [-0.9, 0.9], cp: [0.9, -0.9] },
  cta: { warm: 0.26, cold: 0.1, wp: [0.0, 0.25], cp: [0.0, -0.9] },
  footer: { warm: 0.18, cold: 0.08, wp: [0.0, -0.4], cp: [0.8, 0.8] },
};

export function initDirector(world, shards, { backdrop, mobile, reduced = false }) {
  const hero = $('.hero');
  const heroA = world.anchor($('[data-anchor="hero"]'), { margin: 2 });
  const ctaA = world.anchor($('[data-anchor="cta"]'), { margin: 1 });
  const aiA = world.anchor($('[data-anchor="orb"]'), { margin: 1 });
  const instA = world.anchor($('[data-anchor="constellation"]'), { margin: 1 });
  const featA = $$('.feature__icon').map((el) => world.anchor(el, { margin: 1 }));

  const pointer = world.pointer;
  const eul = new THREE.Euler();
  const q = new THREE.Quaternion();
  const state = {
    intro: true,
    section: 'Intro',
    feature: 0,
    heroP: 0,
    fox: { pos: new THREE.Vector3(), scale: 1, visible: true },
    spin: 0, // drag-to-spin offset (radians)
    spinVel: 0,
    dragging: false,
  };

  // drag the fox sideways to spin it; it glides and settles facing you again
  const dragZones = $$('[data-anchor="hero"], [data-anchor="cta"]');
  let lastX = 0;
  dragZones.forEach((z) => {
    z.addEventListener('pointerdown', (e) => {
      state.dragging = true;
      lastX = e.clientX;
      z.setPointerCapture?.(e.pointerId);
      shards.uniforms.uFlash.value = 0.12;
      gsap.to(shards.uniforms.uFlash, { value: 0, duration: 0.8, ease: 'power2.out', overwrite: true });
      document.dispatchEvent(new CustomEvent('fox-poke'));
    });
    z.addEventListener('pointermove', (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      state.spin += dx * 0.012;
      state.spinVel = dx * 0.012 * 60;
    });
    const end = () => (state.dragging = false);
    z.addEventListener('pointerup', end);
    z.addEventListener('pointercancel', end);
  });

  // px (viewport) → world on the z=0 plane
  const toWorld = (px, py, out) => {
    const u = world.unitsPerPx(0);
    out.set((px - world.w / 2) * u, -(py - world.h / 2) * u, 0);
    return out;
  };

  // —— placements ——
  shards.place('hero', (p) => {
    const a = heroA;
    // sticky with a little parallax: the fox stays on screen while it breaks apart
    const docTop = a.px.top + window.scrollY;
    const y = reduced ? a.px.top + a.px.height * 0.5 : docTop + a.px.height * 0.5 - window.scrollY * 0.32;
    toWorld(a.px.left + a.px.width / 2, y, p.pos);
    p.scale = (a.px.height * world.unitsPerPx(0)) / 2.25;
    const t = world.time;
    eul.set(0.1 - pointer.y * 0.22 + Math.sin(t * 0.6) * 0.03 + state.heroP * 0.5, -0.3 + pointer.x * 0.55 + Math.sin(t * 0.37) * 0.06 + state.heroP * 1.4 + state.spin, pointer.x * -0.06, 'YXZ');
    p.quat.setFromEuler(eul);
    state.fox.pos.copy(p.pos);
    state.fox.scale = p.scale;
  });
  // the cloud and the halo are wide shapes: on a portrait screen they stand on end
  const portrait = () => world.w < world.h;
  shards.place('cloud', (p) => {
    eul.set(0, world.time * 0.018, portrait() ? Math.PI / 2 : 0, 'ZYX');
    p.quat.setFromEuler(eul);
    p.pos.set(0, 0, 0);
  });
  shards.place('halo', (p) => {
    const s = world.viewSize(-3.5);
    eul.set(-0.2, 0, world.time * 0.03 + (portrait() ? Math.PI / 2 : 0), 'XYZ');
    p.quat.setFromEuler(eul);
    p.scale = Math.min(1, (portrait() ? s.h : s.w) / 16);
  });
  // one placement per feature panel, so a morph between two panels starts where the old icon is
  featA.forEach((a, i) => {
    shards.place('feat' + i, (p) => {
      p.pos.set(a.x, a.y, 0);
      p.scale = Math.min(a.w / 3.4, a.h / 3.0);
      eul.set(0.18 + pointer.y * -0.12, -0.32 + Math.sin(world.time * 0.4 + i) * 0.22 + pointer.x * 0.2, 0, 'XYZ');
      p.quat.setFromEuler(eul);
    });
  });
  shards.place('ai', (p) => {
    p.pos.set(aiA.x, aiA.y, 0);
    p.scale = Math.min(aiA.w, aiA.h) / 3.9;
    eul.set(0.3, world.time * 0.12, 0.1, 'XYZ');
    p.quat.setFromEuler(eul);
  });
  shards.place('inst', (p) => {
    p.pos.set(instA.x, instA.y - instA.h * 0.04, 0);
    // same footprint and tilt as the constellation, the spiral sits inside the node ring
    p.scale = Math.min(instA.w / 6.4, instA.h / 3.4) * 0.95;
    eul.set(0.42 - pointer.y * 0.1, world.time * 0.05 + pointer.x * 0.25, 0, 'XYZ');
    p.quat.setFromEuler(eul);
  });
  shards.place('cta', (p) => {
    p.pos.set(ctaA.x, ctaA.y, 0);
    p.scale = (ctaA.h * 1) / 2.3;
    const t = world.time;
    eul.set(0.08 - pointer.y * 0.2 + Math.sin(t * 0.5) * 0.04, -0.15 + pointer.x * 0.5 + Math.sin(t * 0.3) * 0.08 + state.spin, 0, 'YXZ');
    p.quat.setFromEuler(eul);
  });

  // —— sky mood ——
  const setTone = (name) => {
    const t = TONES[name];
    if (!t || !backdrop) return;
    const u = backdrop.uniforms;
    gsap.to(u.uWarmAmt, { value: t.warm, duration: 1.6, ease: 'power2.inOut', overwrite: true });
    gsap.to(u.uColdAmt, { value: t.cold, duration: 1.6, ease: 'power2.inOut', overwrite: true });
    gsap.to(u.uWarmPos.value, { x: t.wp[0], y: t.wp[1], duration: 2.4, ease: 'power2.inOut', overwrite: true });
    gsap.to(u.uColdPos.value, { x: t.cp[0], y: t.cp[1], duration: 2.4, ease: 'power2.inOut', overwrite: true });
  };

  // —— section tracking ——
  const sections = $$('[data-section]');
  sections.forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 55%',
      end: 'bottom 55%',
      // created before the pinned sections: refresh after them so pin spacing counts
      refreshPriority: -10,
      onToggle: (self) => {
        if (!self.isActive) return;
        state.section = el.dataset.section;
        setTone(el.dataset.tone);
        document.dispatchEvent(new CustomEvent('section', { detail: { name: el.dataset.section, index: i, el } }));
      },
    });
  });
  setTone('hero');

  const heroHeight = () => hero.offsetHeight;
  let pointerMoved = false;
  window.addEventListener('pointermove', () => (pointerMoved = true), { once: true, passive: true });

  return {
    state,
    setFeature(i) {
      state.feature = i;
    },
    // intro: shards rush in from behind the camera and assemble the fox
    intro() {
      if (reduced) {
        // no flight: the fox is simply there
        shards.A = { form: FORM.FOX, place: 'hero' };
        shards.B = { form: FORM.FOX, place: 'hero' };
        shards.mix = 1;
        shards.mode = 'tween';
        shards.tween = null;
        shards.uniforms.uBreath.value = 0;
        state.intro = false;
        return;
      }
      state.intro = true;
      shards.A = { form: FORM.SCATTER, place: 'identity' };
      shards.B = { form: FORM.SCATTER, place: 'identity' };
      shards.mix = 1;
      shards.go(FORM.FOX, 'hero', { duration: 2.8, stagger: 0.75, order: [0.3, 0.7, 0], swirl: 1.6 });
      shards.tween.onDone = () => {
        state.intro = false;
      };
      gsap.fromTo(shards.uniforms.uFlash, { value: 0 }, { value: 0.5, duration: 0.5, delay: 2.4, yoyo: true, repeat: 1, ease: 'sine.inOut' });
    },
    frame() {
      if (reduced) {
        // reduced motion: only the whole fox, in the hero and in the finale, no flights
        const inCta = state.section === 'Start' || state.section === 'Contact';
        const place = inCta ? 'cta' : 'hero';
        shards.A = shards.B = { form: FORM.FOX, place };
        shards.mix = 1;
        shards.tween = null;
        state.heroP = 0;
        shards.mesh.visible = inCta || window.scrollY < hero.offsetHeight * 0.9;
        return;
      }
      // spin inertia, then a soft spring back to the nearest full turn
      const dt = 1 / 60;
      if (!state.dragging) {
        state.spin += state.spinVel * dt;
        state.spinVel *= 0.94;
        const home = Math.round(state.spin / (Math.PI * 2)) * Math.PI * 2;
        if (Math.abs(state.spinVel) < 0.6) state.spin += (home - state.spin) * 0.04;
      }
      // facets near the cursor lift when the fox is whole (hero or finale)
      const u = shards.uniforms;
      u.uBreath.value = 0.012 + Math.min(0.05, Math.abs(state.spinVel) * 0.004);
      const foxNow = shards.B.form === FORM.FOX || (shards.A.form === FORM.FOX && shards.mix < 0.5);
      toWorld(((pointer.x + 1) / 2) * world.w, ((1 - pointer.y) / 2) * world.h, u.uPointer.value);
      const hoverTarget = foxNow && pointerMoved ? (mobile ? 0.15 : 0.32) : 0;
      u.uHover.value += (hoverTarget - u.uHover.value) * 0.08;
      u.uHoverR.value = state.fox.scale * 0.55;
      const hh = heroHeight();
      const y = window.scrollY;
      state.heroP = clamp(y / (hh * 0.85));
      state.fox.visible = y < hh * 1.2;
      if (state.intro) return;
      if (y < hh * 0.98) {
        const atCloud = shards.B.form === FORM.CLOUD && shards.B.place === 'cloud';
        const atFox = shards.B.form === FORM.FOX && shards.B.place === 'hero';
        if (shards.mode === 'scrub' || ((atCloud || atFox) && shards.settled)) {
          shards.scrub(FORM.FOX, 'hero', FORM.CLOUD, 'cloud', state.heroP, { from: atFox ? 0 : 1, stagger: 0.7, order: [0.4, 0, 0.6], swirl: 1.3 });
          shards.uniforms.uGlow.value = 0.55 - state.heroP * 0.33;
        } else if (!atCloud) {
          shards.go(FORM.CLOUD, 'cloud', { duration: 1.3, stagger: 0.4 });
        }
        return;
      }
      let stop = STOPS[state.section];
      if (state.section === 'Features') stop = [FEATURE_FORMS[state.feature] ?? FORM.COPY, 'feat' + state.feature, { duration: 1.5, stagger: 0.55, swirl: 1.1 }];
      if (state.section === 'Intro') stop = STOPS.Why;
      if (!stop) return;
      const [form, place, opts] = stop;
      if (shards.B.form !== form || shards.B.place !== place || shards.mode === 'scrub') {
        shards.go(form, place, opts);
        gsap.to(shards.uniforms.uGlow, { value: opts.glow ?? 0.55, duration: opts.duration ?? 1.5, ease: 'power2.inOut', overwrite: true });
      }
    },
  };
}
