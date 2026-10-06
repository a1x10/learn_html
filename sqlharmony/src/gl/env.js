import * as THREE from 'three';

// Night studio for reflections: an ink-blue dome with a few soft boxes.
// A warm key from the top-left, a cold data-blue rim from behind and two thin
// strip lights that draw crisp highlights along the facets.
export function createEnvironment(renderer) {
  const scene = new THREE.Scene();

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(40, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color('#1b2340') },
        horizon: { value: new THREE.Color('#0d1124') },
        bottom: { value: new THREE.Color('#05060c') },
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
          vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.8)) : mix(horizon, bottom, pow(-h, 0.5));
          gl_FragColor = vec4(c, 1.0);
        }`,
    })
  );
  scene.add(dome);

  const target = new THREE.Vector3();
  const panel = (w, h, color, intensity, x, y, z) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide })
    );
    m.position.set(x, y, z);
    m.lookAt(target);
    scene.add(m);
  };

  // warm key, top-left-front
  panel(9, 6, '#ffe2c4', 3.2, -6, 9, 7);
  // soft fill from the front
  panel(14, 4, '#ffd9bd', 1.1, 2, 0, 12);
  // low front fill so facets that face down are not muddy
  panel(12, 3, '#fff0e0', 0.8, 0, -6, 9);
  // cold rim lights behind
  panel(10, 5, '#4f7dff', 2.0, 5, 3, -10);
  panel(6, 8, '#3d5cff', 0.6, -8, 1, -8);
  // thin strips for crisp highlights
  panel(0.35, 16, '#ffffff', 6, -10, 1, 1);
  panel(0.3, 16, '#ffd2a6', 7, 10, 0, 2);
  panel(9, 0.45, '#ffffff', 3.5, 0, 7, 9);
  // ember bounce from below
  panel(20, 20, '#ff6a1a', 0.22, 0, -12, 0);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0.035);
  pmrem.dispose();
  scene.traverse((o) => {
    if (o.isMesh) {
      o.geometry.dispose();
      o.material.dispose();
    }
  });
  return rt.texture;
}
