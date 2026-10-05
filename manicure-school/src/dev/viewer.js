// Отладочный просмотрщик моделей: viewer.html?model=bottle&ry=0.4
import * as THREE from 'three';
import { Engine, Stage } from '../three/engine.js';
import { Bottle } from '../three/models/bottle.js';
import { FingerNail } from '../three/models/nail.js';
import { makeGem, makePearl, makeFlake } from '../three/models/gems.js';
import * as Tools from '../three/models/tools.js';

const q = new URLSearchParams(location.search);
const model = q.get('model') || 'bottle';
const ry = parseFloat(q.get('ry') || '0');
const rx = parseFloat(q.get('rx') || '0');
const bg = q.get('bg') || '#130B0E';
document.body.style.background = bg;

const engine = new Engine(document.getElementById('webgl'));
engine.pageBg.set(bg);
const stage = new Stage(document.getElementById('box'), { fov: 30, transmissive: true });
engine.add(stage);
const s = stage.scene;
s.add(new THREE.HemisphereLight('#fff3f0', '#2a1218', 0.6));
const key = new THREE.DirectionalLight('#ffffff', 1.6);
key.position.set(3, 5, 6);
s.add(key);

let obj;
const cam = stage.camera;
if (model === 'bottle') {
  obj = new Bottle({ color: q.get('color') || '#7E0B24', cap: q.get('cap') || 'gold', glitter: q.has('glitter') });
  obj.setOpen(parseFloat(q.get('open') || '0'));
  cam.position.set(0, 1.6, 9.5);
  cam.lookAt(0, 1.5, 0);
} else if (model === 'nail') {
  obj = new FingerNail({ design: q.get('design') || 'overgrown' });
  cam.position.set(0, 0.2, 5.2);
  cam.lookAt(0, -0.45, 0);
  const rim = new THREE.DirectionalLight('#ffd6cc', 2.2);
  rim.position.set(-4, 3, -5);
  s.add(rim);
} else if (model === 'gems') {
  obj = new THREE.Group();
  const g = makeGem({ size: 1.2 });
  g.rotation.x = 0.5;
  obj.add(g);
  const p = makePearl({ size: 0.9 });
  p.position.x = 1.6;
  obj.add(p);
  const f = makeFlake(2, 1.0);
  f.position.x = -1.6;
  f.rotation.set(0.5, 0.3, 0.2);
  obj.add(f);
  cam.position.set(0, 0.5, 7);
  cam.lookAt(0, 0, 0);
} else {
  obj = Tools[model]();
  cam.position.set(0, 1.5, 7);
  cam.lookAt(0, 0, 0);
}
obj.rotation.y = ry;
obj.rotation.x = rx;
s.add(obj);
window.__obj = obj;

let last = performance.now();
function loop(t) {
  const dt = Math.min((t - last) / 1000, 0.05);
  last = t;
  engine.render(t / 1000, dt);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
window.__ready = true;
