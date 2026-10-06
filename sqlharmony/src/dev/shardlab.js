// Dev lab: the world with backdrop, dust and shards.
// ?a=FOX&b=CLOUD&mix=0.5&t=3  (formation names from FORM)
import * as THREE from 'three';
import { World } from '../gl/world.js';
import { Backdrop, Dust } from '../gl/backdrop.js';
import { Shards } from '../gl/shards.js';
import { FORM } from '../gl/formations.js';

const q = new URLSearchParams(location.search);
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%';
document.body.appendChild(canvas);
const world = new World(canvas, { mobile: false });
world.add(new Backdrop());
world.add(new Dust());
const shards = world.add(new Shards({ levels: +(q.get('lv') || 2) }));
const sc = +(q.get('scale') || 1.6);
const ry = THREE.MathUtils.degToRad(+(q.get('ry') || -20));
const rx = THREE.MathUtils.degToRad(+(q.get('rx') || 6));
shards.place('center', (p) => {
  p.pos.set(+(q.get('x') || 0), +(q.get('y') || 0), 0);
  p.scale = sc;
  p.quat.setFromEuler(new THREE.Euler(rx, ry, 0));
});
const A = FORM[q.get('a') || 'FOX'];
const B = FORM[q.get('b') || 'FOX'];
const placeOf = (f) => (f === FORM.CLOUD || f === FORM.SCATTER || f === FORM.HALO ? 'identity' : 'center');
shards.scrub(A, placeOf(A), B, placeOf(B), +(q.get('mix') || 0), { from: +(q.get('mix') || 0) });
if (q.get('hover')) {
  shards.uniforms.uPointer.value.set(+(q.get('hx') || 0.3), +(q.get('hy') || 0.4), 0);
  shards.uniforms.uHover.value = +q.get('hover');
}
if (q.get('blink')) shards.uniforms.uBlink.value = +q.get('blink');
const T = +(q.get('t') || 2);
world.time = T;
world.render(0.016);
document.title = `shards ${shards.N}`;
window.__done = true;
