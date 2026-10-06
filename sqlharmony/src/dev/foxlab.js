// Dev lab: renders the fox alone. URL params: ry, rx (degrees), sub (levels), wire=1
import * as THREE from 'three';
import { foxTriangles, subdivide } from '../gl/fox.js';
import { createEnvironment } from '../gl/env.js';

const q = new URLSearchParams(location.search);
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.setClearColor('#070a14');
const scene = new THREE.Scene();
scene.environment = createEnvironment(renderer);
const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 0, +(q.get('cz') || 9));

const tris = subdivide(foxTriangles(), +(q.get('sub') || 0));
const pos = new Float32Array(tris.length * 9);
const col = new Float32Array(tris.length * 9);
tris.forEach((t, i) => {
  pos.set([...t.a, ...t.b, ...t.c], i * 9);
  for (let k = 0; k < 3; k++) col.set(t.color, i * 9 + k * 3);
});
const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
const mat = new THREE.MeshPhysicalMaterial({
  vertexColors: true,
  flatShading: true,
  roughness: 0.38,
  metalness: 0.0,
  clearcoat: 1,
  clearcoatRoughness: 0.12,
  side: THREE.DoubleSide,
  envMapIntensity: 1.1,
});
const mesh = new THREE.Mesh(geo, mat);
mesh.rotation.y = THREE.MathUtils.degToRad(+(q.get('ry') || 0));
mesh.rotation.x = THREE.MathUtils.degToRad(+(q.get('rx') || 0));
scene.add(mesh);
if (q.get('wire')) {
  const w = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 1), new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.35 }));
  mesh.add(w);
}
const key = new THREE.DirectionalLight('#ffe7d0', 1.6);
key.position.set(-3, 4, 5);
scene.add(key);
const rim = new THREE.DirectionalLight('#5b8cff', 1.4);
rim.position.set(3, 2, -6);
scene.add(rim);
scene.add(new THREE.AmbientLight('#404a70', 0.4));
renderer.render(scene, camera);
document.title = `tris ${tris.length}`;
window.__done = true;
