import * as THREE from 'three';

// окружение для страз задаёт движок (см. engine.js)
let GEM_ENV = null;
const gemMats = [];
export function setGemEnvironment(tex) {
  GEM_ENV = tex;
  for (const m of gemMats) {
    m.envMap = tex;
    m.needsUpdate = true;
  }
}

// Общие физические материалы. Цвета задаются в sRGB (как в CSS).

export function lacquer(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.14,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    specularIntensity: 0.9,
    envMapIntensity: 1.15,
    ...opts,
  });
}

export function glass(opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 0,
    roughness: 0.025,
    transmission: 1,
    thickness: 0.55,
    ior: 1.5,
    dispersion: 0.35,
    attenuationColor: new THREE.Color('#fff4f5'),
    attenuationDistance: 5,
    specularIntensity: 1,
    envMapIntensity: 1.35,
    ...opts,
  });
}

// стекло без прохода преломления — для мелких флаконов, где важна скорость
export function cheapGlass(opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 0,
    roughness: 0.04,
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
    specularIntensity: 1,
    envMapIntensity: 1.6,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    ...opts,
  });
}

export function gold(color = '#dcb67f', opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 1,
    roughness: 0.2,
    clearcoat: 0.6,
    clearcoatRoughness: 0.08,
    envMapIntensity: 1.3,
    ...opts,
  });
}

export function chrome(opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: '#ece7ea',
    metalness: 1,
    roughness: 0.09,
    envMapIntensity: 1.35,
    ...opts,
  });
}

export function pearl(opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: '#f6eee8',
    roughness: 0.2,
    metalness: 0.04,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    iridescence: 1,
    iridescenceIOR: 1.7,
    iridescenceThicknessRange: [260, 720],
    sheen: 0.7,
    sheenColor: new THREE.Color('#ffd5df'),
    sheenRoughness: 0.35,
    envMapIntensity: 1.2,
    ...opts,
  });
}

// «Бриллиант»: зеркальные грани отражают россыпь бликов — дешевле и ярче, чем преломление
export function diamond(tint = null, opts = {}) {
  const m = new THREE.MeshPhysicalMaterial({
    color: tint || '#ffffff',
    metalness: 1,
    roughness: 0.015,
    envMap: GEM_ENV,
    envMapIntensity: 1.7,
    flatShading: true,
    iridescence: 0.45,
    iridescenceIOR: 2.1,
    iridescenceThicknessRange: [200, 900],
    clearcoat: 1,
    clearcoatRoughness: 0,
    ...opts,
  });
  gemMats.push(m);
  return m;
}

// цветной кристалл — то же зеркальное «искрение» с оттенком
export function crystal(color = '#ffffff', opts = {}) {
  return diamond(color, opts);
}

// матовый силикон тренировочного пальца
export function skin(opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: '#f0c6b5',
    roughness: 0.5,
    metalness: 0,
    sheen: 0.8,
    sheenColor: new THREE.Color('#ffcabb'),
    sheenRoughness: 0.5,
    clearcoat: 0.1,
    clearcoatRoughness: 0.45,
    envMapIntensity: 0.95,
    ...opts,
  });
}

export function plastic(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.32,
    metalness: 0,
    clearcoat: 0.5,
    clearcoatRoughness: 0.15,
    envMapIntensity: 1,
    ...opts,
  });
}

export function matte(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...opts });
}
