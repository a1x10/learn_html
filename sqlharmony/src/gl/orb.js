import * as THREE from 'three';

// The AI orb: a liquid sphere shaped by layered noise, iridescent at the rim,
// with a faint lattice around it. It "thinks" (ripples harder, brighter) while
// the assistant is working and flashes green when the fix is applied.

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

export class Orb {
  constructor(world, anchor, { mobile = false } = {}) {
    this.world = world;
    this.anchor = anchor;
    this.group = new THREE.Group();
    this.object = this.group;
    this.think = 0;
    this.ok = 0;
    this.uniforms = {
      uTime: { value: 0 },
      uThink: { value: 0 },
      uOk: { value: 0 },
      uPointer: { value: new THREE.Vector2() },
    };
    const geo = new THREE.IcosahedronGeometry(1, mobile ? 28 : 56);
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        ${NOISE}
        uniform float uTime; uniform float uThink; uniform vec2 uPointer;
        varying vec3 vN; varying vec3 vV; varying float vD; varying vec3 vP;
        float field(vec3 p) {
          float sp = 0.22 + uThink * 0.5;
          float n = snoise(p * 1.25 + vec3(0.0, uTime * sp, 0.0)) * 0.55;
          n += snoise(p * 2.6 - vec3(uTime * sp * 1.3)) * 0.22;
          n += snoise(p * 5.0 + vec3(uTime * sp * 2.0)) * 0.08 * (0.4 + uThink);
          return n;
        }
        void main() {
          vec3 p = position;
          float amp = 0.1 + uThink * 0.12;
          float d = field(p) * amp;
          // pointer pushes a gentle bulge
          d += max(0.0, dot(normalize(p), normalize(vec3(uPointer, 0.6)))) * 0.06;
          vec3 disp = p * (1.0 + d);
          // normal by finite differences on the displaced sphere
          vec3 t1 = normalize(cross(p, vec3(0.0, 1.0, 0.0001)));
          vec3 t2 = normalize(cross(p, t1));
          float e = 0.02;
          vec3 pa = normalize(p + t1 * e); vec3 pb = normalize(p + t2 * e);
          vec3 da = pa * (1.0 + field(pa) * amp);
          vec3 db = pb * (1.0 + field(pb) * amp);
          vec3 n = normalize(cross(da - disp, db - disp));
          if (dot(n, p) < 0.0) n = -n;
          vN = normalize(normalMatrix * n);
          vec4 mv = modelViewMatrix * vec4(disp, 1.0);
          vV = normalize(-mv.xyz);
          vD = d;
          vP = p;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform float uThink; uniform float uOk;
        varying vec3 vN; varying vec3 vV; varying float vD; varying vec3 vP;
        vec3 pal(float t) {
          // fox orange → amber → violet → data blue
          vec3 a = vec3(1.0, 0.42, 0.1);
          vec3 b = vec3(1.0, 0.66, 0.3);
          vec3 c = vec3(0.45, 0.33, 1.0);
          vec3 d = vec3(0.22, 0.58, 1.0);
          t = fract(t);
          if (t < 0.33) return mix(a, b, t / 0.33);
          if (t < 0.66) return mix(b, c, (t - 0.33) / 0.33);
          return mix(c, d, (t - 0.66) / 0.34);
        }
        void main() {
          vec3 n = normalize(vN);
          float f = 1.0 - max(0.0, dot(n, normalize(vV)));
          float fr = pow(f, 2.2);
          float band = vD * 2.6 + fr * 0.9 + vP.y * 0.25 + uTime * 0.04;
          vec3 irid = pal(band);
          vec3 core = vec3(0.025, 0.03, 0.07);
          vec3 col = mix(core, irid * 0.4, 0.18 + vD * 1.2);
          col += irid * fr * (1.25 + uThink * 1.6);
          // soft key light from top-left
          float l = max(0.0, dot(n, normalize(vec3(-0.5, 0.7, 0.6))));
          col += vec3(1.0, 0.85, 0.75) * pow(l, 18.0) * 0.9;
          col += pal(band + 0.5) * pow(l, 3.0) * 0.12;
          col = mix(col, vec3(0.2, 1.0, 0.65) * (0.4 + fr * 1.6), uOk * 0.75);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.sphere = new THREE.Mesh(geo, mat);

    // lattice
    const lat = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.42, 2)),
      new THREE.LineBasicMaterial({ color: new THREE.Color('#8fa8ff'), transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    this.lattice = lat;

    // halo
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uAmt: { value: 0.55 }, uThink: this.uniforms.uThink, uOk: this.uniforms.uOk },
        vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader: `uniform float uAmt; uniform float uThink; uniform float uOk; varying vec2 vUv;
          void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*3.0) * smoothstep(1.0, 0.55, d) * (uAmt + uThink*0.35);
          vec3 c = mix(vec3(1.0,0.35,0.25), vec3(0.45,0.4,1.0), smoothstep(0.0,1.0,d));
          c = mix(c, vec3(0.2,1.0,0.6), uOk*0.7);
          gl_FragColor = vec4(c*a*0.55, 1.0); }`,
      })
    );
    halo.scale.set(5.2, 5.2, 1);
    halo.position.z = -1.2;
    this.halo = halo;
    this.group.add(halo, this.sphere, lat);
    this.group.visible = false;
  }

  update(time, dt) {
    const a = this.anchor;
    this.group.visible = a.visible;
    if (!a.visible) return;
    const u = this.uniforms;
    u.uTime.value = time;
    u.uThink.value += (this.think - u.uThink.value) * Math.min(1, dt * 3);
    u.uOk.value += (this.ok - u.uOk.value) * Math.min(1, dt * 4);
    u.uPointer.value.lerp(this.world.pointer, 0.05);
    const s = Math.min(a.w, a.h) * 0.3;
    this.group.position.set(a.x, a.y, 0);
    this.group.scale.setScalar(s * (1 + Math.sin(time * 1.3) * 0.012 + u.uThink.value * 0.04));
    this.sphere.rotation.y = time * 0.12;
    this.lattice.rotation.set(time * 0.05, -time * 0.08, 0);
    this.lattice.material.opacity = 0.12 + u.uThink.value * 0.2;
  }
}
