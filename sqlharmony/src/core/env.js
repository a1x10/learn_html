const mq = (q) => window.matchMedia(q).matches;

export const env = {
  reduced: mq('(prefers-reduced-motion: reduce)'),
  fine: mq('(pointer: fine)') && mq('(hover: hover)'),
  mobile: mq('(max-width: 760px)') || (mq('(pointer: coarse)') && Math.min(screen.width, screen.height) < 820),
  artifact: document.documentElement.classList.contains('is-artifact'),
};

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, v) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
export const $ = (s, root = document) => root.querySelector(s);
export const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
