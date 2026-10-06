import * as THREE from 'three';

// Студийное окружение для отражений: тёмно-индиговая комната, тёплый «лисий»
// софтбокс слева, холодный синий справа и узкие стрип-лампы — блики на гранях.
export function createStudioEnvironment(renderer) {
  const scene = new THREE.Scene();

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(40, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color('#1d2150') },
        horizon: { value: new THREE.Color('#10122a') },
        bottom: { value: new THREE.Color('#040409') },
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

  const target = new THREE.Vector3();
  const panel = (w, h, color, intensity, x, y, z) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide })
    );
    mesh.position.set(x, y, z);
    mesh.lookAt(target);
    scene.add(mesh);
  };
  panel(9, 9, '#ffffff', 2.2, 0, 14, 4); // верхний
  panel(6, 10, '#ff8a3d', 3.2, -12, 2, 6); // тёплый слева
  panel(6, 10, '#4d6bff', 3.0, 12, 1, 4); // холодный справа
  panel(1.2, 16, '#ffffff', 5, -7, 0, 11); // стрип
  panel(1.2, 16, '#c9d4ff', 4, 8, 0, 10); // стрип
  panel(14, 3, '#7b4dff', 1.4, 0, -6, -12); // контровой снизу

  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0.035);
  pmrem.dispose();
  scene.traverse((o) => {
    o.geometry?.dispose();
    o.material?.dispose();
  });
  return rt.texture;
}
