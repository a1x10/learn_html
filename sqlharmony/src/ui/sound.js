import { $, env } from '../core/env.js';
import { lenis } from '../core/smooth.js';

// "Harmony" — an optional ambient chord synthesised in the browser (no audio files).
// Slow pads drift between notes of D Lydian through a soft filter and a generated
// reverb; hovering links plays tiny pentatonic ticks. Off until the visitor turns it on.
export function initSound() {
  const btn = $('.sound');
  if (!btn) return;
  let ctx = null;
  let master = null;
  let filter = null;
  let on = false;
  let timer = null;
  const SCALE = [146.83, 220.0, 277.18, 329.63, 369.99, 415.3, 440.0, 554.37, 659.25]; // D Lydian-ish
  const TICKS = [880, 987.77, 1108.73, 1318.51, 1479.98];

  function impulse(seconds = 4.5, decay = 2.6) {
    const rate = ctx.sampleRate;
    const len = rate * seconds;
    const buf = ctx.createBuffer(2, len, rate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  function setup() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0;
    filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1200;
    filter.Q.value = 0.4;
    const verb = ctx.createConvolver();
    verb.buffer = impulse();
    const wet = ctx.createGain();
    wet.gain.value = 0.7;
    const dry = ctx.createGain();
    dry.gain.value = 0.35;
    filter.connect(dry).connect(master);
    filter.connect(verb).connect(wet).connect(master);
    master.connect(ctx.destination);
  }

  function pad(freq, start, dur) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(0.05, start + dur * 0.4);
    g.gain.linearRampToValueAtTime(0, start + dur);
    g.connect(filter);
    for (const det of [-6, 0, 7]) {
      const o = ctx.createOscillator();
      o.type = det === 0 ? 'sine' : 'triangle';
      o.frequency.value = freq;
      o.detune.value = det;
      o.connect(g);
      o.start(start);
      o.stop(start + dur + 0.1);
    }
  }

  function phrase() {
    if (!on) return;
    const now = ctx.currentTime;
    const root = SCALE[Math.floor(Math.random() * 3)];
    pad(root / 2, now, 9);
    for (let i = 0; i < 3; i++) {
      const f = SCALE[2 + Math.floor(Math.random() * (SCALE.length - 2))];
      pad(f, now + i * 0.9 + Math.random() * 0.6, 6 + Math.random() * 3);
    }
    timer = setTimeout(phrase, 5200 + Math.random() * 1800);
  }

  function tick(freq = TICKS[Math.floor(Math.random() * TICKS.length)], vol = 0.035) {
    if (!on || !ctx) return;
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(vol, now + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    o.connect(g).connect(filter);
    o.start(now);
    o.stop(now + 0.4);
  }

  function toggle() {
    on = !on;
    if (on && !ctx) setup();
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Turn ambient sound off' : 'Turn ambient sound on');
    if (!ctx) return;
    ctx.resume();
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(on ? 0.9 : 0, now + (on ? 2.5 : 0.8));
    clearTimeout(timer);
    if (on) {
      phrase();
      tick(1318.51, 0.05);
    }
  }

  btn.addEventListener('click', toggle);
  if (env.fine) {
    document.addEventListener('pointerover', (e) => {
      const t = e.target.closest('a, button, summary, [role="tab"]');
      if (t && t !== btn) tick();
    });
  }
  return {
    frame() {
      if (!on || !filter) return;
      const v = Math.min(1, Math.abs(lenis ? lenis.velocity : 0) / 40);
      filter.frequency.setTargetAtTime(1100 + v * 2600, ctx.currentTime, 0.25);
    },
  };
}
