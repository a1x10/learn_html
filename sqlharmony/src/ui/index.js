import { initCursor, initMagnetic, initTilt } from './pointer.js';
import { initNav } from './nav.js';
import { initText } from './text.js';
import { initFaq, initCopy, initCounters, initVideo, initFooterWord, initMarquee } from './widgets.js';
import { initSound } from './sound.js';

export function initUI(env) {
  const cursor = initCursor();
  initMagnetic();
  initTilt();
  const nav = initNav();
  initText();
  initFaq();
  initCopy();
  initCounters();
  initVideo();
  initFooterWord();
  const marquee = initMarquee();
  const sound = initSound();
  return {
    closeMenu: nav.closeMenu,
    frame(dt) {
      cursor.frame(dt);
      nav.frame(dt);
      marquee.frame(dt);
      sound?.frame(dt);
    },
  };
}
