// Небольшие помощники для анимаций
export const clamp = (v, a = 0, b = 1) => Math.min(Math.max(v, a), b);
export const lerp = (a, b, t) => a + (b - a) * t;
export const seg = (p, a, b) => clamp((p - a) / (b - a));
export const smooth = (t) => t * t * (3 - 2 * t);
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const easeIn = (t) => t * t * t;
export const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt));

// общий указатель мыши (-1..1), сглаженный
export const pointer = { x: 0, y: 0, sx: 0, sy: 0, active: false };
if (typeof window !== 'undefined') {
  window.addEventListener(
    'pointermove',
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.active = true;
    },
    { passive: true }
  );
}
export function updatePointer(dt) {
  pointer.sx = damp(pointer.sx, pointer.x, 3.2, dt);
  pointer.sy = damp(pointer.sy, pointer.y, 3.2, dt);
}

// камера на расстоянии, при котором влезают нужные высота и ширина
export function fitDistance(camera, needH, needW) {
  const t = Math.tan((camera.fov * Math.PI) / 360);
  const byH = needH / 2 / t;
  const byW = needW / camera.aspect / 2 / t;
  return Math.max(byH, byW);
}
