import * as THREE from 'three';

// Студийное окружение для отражений: тёмная комната и несколько софтбоксов.
// Две вертикальные стрип-лампы дают узкие блики по краям стекла и лака,
// как на рекламной съёмке косметики.
export function createStudioEnvironment(renderer) {
  const scene = new THREE.Scene();

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(40, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color('#3a2a30') },
        horizon: { value: new THREE.Color('#24161a') },
        bottom: { value: new THREE.Color('#0a0507') },
      },
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
        varying vec3 vDir;
        void main() {
          float h = vDir.y;
          vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.7)) : mix(horizon, bottom, pow(-h, 0.45));
          gl_FragColor = vec4(c, 1.0);
        }`,
    })
  );
  scene.add(sky);

  const target = new THREE.Vector3(0, 0, 0);
  const panel = (w, h, color, intensity, x, y, z) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(color).multiplyScalar(intensity),
        side: THREE.DoubleSide,
      })
    );
    mesh.position.set(x, y, z);
    mesh.lookAt(target);
    scene.add(mesh);
    return mesh;
  };

  // верхний ключевой софтбокс
  panel(10, 6, '#fff3ee', 2.6, 1.5, 11, 6);
  // узкие вертикальные стрипы слева и справа: тонкие линии бликов на стекле
  panel(0.34, 14, '#ffffff', 9, -9, 1.5, 3.5);
  panel(0.3, 14, '#ffeae6', 7, 9, 1.0, 2.5);
  // мягкие широкие «рассеиватели» по бокам, совсем неяркие
  panel(3, 10, '#ffe6e2', 0.6, -10, 0, -2);
  panel(3, 10, '#ffe6e2', 0.5, 10, 0, -3);
  // тонкий стрип спереди-сверху: «окно» на лаке
  panel(7, 0.7, '#ffffff', 5.0, 0, 5, 10);
  // тёплый контровой
  panel(8, 4, '#ff8f80', 1.6, 0, 4, -11);
  // мягкий заполняющий снизу-спереди (низко, чтобы плоские грани не «бликовали» целиком)
  panel(10, 2.2, '#ffd8d0', 0.35, 0, -6, 9);
  // отражённый вишнёвый свет снизу
  panel(18, 18, '#7a0c24', 0.45, 0, -10, 0);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0.03);
  pmrem.dispose();
  scene.traverse((o) => {
    if (o.isMesh) {
      o.geometry.dispose();
      o.material.dispose();
    }
  });
  return rt.texture;
}

// Окружение для страз: светлое, с тёмными и яркими «гранями» и цветными точками —
// зеркальные фасеты при повороте вспыхивают, как у кристалла
export function createGemEnvironment(renderer) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#8f878a');
  let seed = 77;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const geo = new THREE.PlaneGeometry(1, 1);
  const add = (color, mult, scaleMin, scaleMax) => {
    const dir = new THREE.Vector3(rnd() * 2 - 1, rnd() * 2 - 1, rnd() * 2 - 1).normalize();
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(mult), side: THREE.DoubleSide });
    const m = new THREE.Mesh(geo, mat);
    m.position.copy(dir.multiplyScalar(10));
    m.lookAt(0, 0, 0);
    m.rotateZ(rnd() * Math.PI);
    m.scale.set(scaleMin + rnd() * (scaleMax - scaleMin), scaleMin + rnd() * (scaleMax - scaleMin) * 0.6, 1);
    scene.add(m);
  };
  for (let i = 0; i < 46; i++) add('#050304', 1, 1.5, 5.5);
  for (let i = 0; i < 70; i++) add('#ffffff', 2 + rnd() * 6, 0.4, 2.2);
  for (let i = 0; i < 24; i++) add(new THREE.Color().setHSL(rnd(), 0.85, 0.6), 2 + rnd() * 4, 0.3, 1.2);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0);
  pmrem.dispose();
  return rt.texture;
}
