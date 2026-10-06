import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { canvasTexture, FONTS, roundRectPath } from './textures.js';
import { projectFox, FOX_COLORS } from './fox.js';

// SQLHarmonyDesk on a laptop. The lid opens with the scroll, the screen powers on
// and shows a live desktop workbench: metadata sidebar, autocomplete while typing,
// paged results, SSO status. The back of the lid carries the fox emblem.

const SQL_LINES = [
  [['k', 'SELECT'], ['t', ' h.invoice_num, h.invoice_amount,']],
  [['t', '       s.vendor_name, h.invoice_date']],
  [['k', 'FROM'], ['t', '   ap_invoices_all h']],
  [['k', 'JOIN'], ['t', '   poz_suppliers_v s']],
  [['k', '  ON'], ['t', '   s.vendor_id = h.vendor_id']],
  [['k', 'WHERE'], ['t', '  h.invoice_amount > '], ['n', '1000']],
];
const COLUMNS = ['INVOICE_ID', 'INVOICE_NUM', 'INVOICE_DATE', 'INVOICE_AMOUNT', 'VENDOR_ID', 'PAYMENT_STATUS_FLAG'];
const TABLES = ['AP_INVOICES_ALL', 'AP_INVOICE_LINES_ALL', 'POZ_SUPPLIERS_V', 'GL_JE_HEADERS', 'GL_JE_LINES', 'PER_ALL_PEOPLE_F', 'HZ_PARTIES', 'RA_CUSTOMER_TRX_ALL'];
const RESULT = [
  ['INV-26-1187', '41 137.24', 'Acme Paper Ltd', '2026-09-30'],
  ['INV-26-1186', '11 205.80', 'Northwind GmbH', '2026-09-30'],
  ['NW-88213', '8 952.60', 'Northwind GmbH', '2026-09-29'],
  ['INV-26-1179', '4 582.03', 'Globex Corp', '2026-09-29'],
  ['GX-55120', '1 619.20', 'Globex Corp', '2026-09-28'],
  ['AC-00932', '1 634.00', 'Acme Paper Ltd', '2026-09-27'],
  ['INV-26-1160', '2 388.72', 'Initech LLC', '2026-09-26'],
];

class Screen {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.c = document.createElement('canvas');
    this.c.width = w;
    this.c.height = h;
    this.g = this.c.getContext('2d');
    this.tex = canvasTexture(this.c, { mips: false, aniso: 8 });
    this.t = 0;
    this.chars = [];
    SQL_LINES.forEach((line, li) => {
      for (const [cls, txt] of line) for (const ch of txt) this.chars.push([cls, ch, li]);
      this.chars.push(['t', '\n', li]);
    });
    this.draw(0);
  }

  draw(t) {
    const { g, w, h } = this;
    const S = w / 1280;
    g.setTransform(S, 0, 0, S, 0, 0);
    const W = 1280;
    const H = 800;
    // window
    g.fillStyle = '#0b0e17';
    g.fillRect(0, 0, W, H);
    // title bar
    g.fillStyle = '#111522';
    g.fillRect(0, 0, W, 40);
    this.drawFox(g, 14, 8, 24);
    g.font = `600 15px ${FONTS.body}`;
    g.fillStyle = '#e6eaf7';
    g.textBaseline = 'middle';
    g.fillText('SQLHarmonyDesk', 48, 21);
    g.fillStyle = '#6f7896';
    g.fillText('—  DEV2', 178, 21);
    g.strokeStyle = '#8a93ad';
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(W - 132, 21);
    g.lineTo(W - 120, 21);
    g.stroke();
    g.strokeRect(W - 84, 15, 11, 11);
    g.beginPath();
    g.moveTo(W - 38, 15);
    g.lineTo(W - 27, 26);
    g.moveTo(W - 27, 15);
    g.lineTo(W - 38, 26);
    g.stroke();

    // sidebar
    g.fillStyle = '#0e1220';
    g.fillRect(0, 40, 270, H - 72);
    g.fillStyle = '#6f7896';
    g.font = `600 12px ${FONTS.mono}`;
    g.fillText('TABLES', 20, 66);
    roundRectPath(g, 16, 80, 238, 30, 8);
    g.fillStyle = '#161b2c';
    g.fill();
    g.fillStyle = '#8a93ad';
    g.font = `13px ${FONTS.mono}`;
    g.fillText('⌕  ap_inv', 28, 96);
    let y = 132;
    TABLES.forEach((tname, i) => {
      const open = i === 0;
      g.fillStyle = open ? '#ffb36b' : '#c3cae0';
      g.font = `${open ? 600 : 400} 13px ${FONTS.mono}`;
      g.fillText(`${open ? '▾' : '▸'} ${tname}`, 20, y);
      y += 26;
      if (open) {
        COLUMNS.forEach((col, k) => {
          const hl = Math.floor(t * 0.8) % COLUMNS.length === k;
          if (hl) {
            g.fillStyle = 'rgba(255,122,42,0.14)';
            g.fillRect(12, y - 12, 246, 22);
          }
          g.fillStyle = hl ? '#ffe3c6' : '#8a93ad';
          g.font = `12px ${FONTS.mono}`;
          g.fillText(`   ${col.toLowerCase()}`, 22, y);
          g.fillStyle = '#4f5878';
          g.fillText(k === 2 ? 'DATE' : k === 3 || k === 0 || k === 4 ? 'NUMBER' : 'VARCHAR2', 196, y);
          y += 22;
        });
        y += 6;
      }
    });

    // tabs + toolbar
    const X = 270;
    g.fillStyle = '#0b0e17';
    g.fillRect(X, 40, W - X, 44);
    const tabs = ['invoices.sql', 'suppliers.sql', '+'];
    let tx = X + 14;
    tabs.forEach((tn, i) => {
      g.font = `13px ${FONTS.body}`;
      const tw = g.measureText(tn).width + 30;
      if (i === 0) {
        roundRectPath(g, tx, 50, tw, 34, 8);
        g.fillStyle = '#151a2a';
        g.fill();
        g.fillStyle = '#ff8a3d';
        g.fillRect(tx + 10, 82, tw - 20, 2);
      }
      g.fillStyle = i === 0 ? '#eef1fb' : '#6f7896';
      g.fillText(tn, tx + 15, 68);
      tx += tw + 6;
    });
    // toolbar buttons
    const btn = (bx, label, bg, fg) => {
      g.font = `600 13px ${FONTS.body}`;
      const bw = g.measureText(label).width + 26;
      roundRectPath(g, bx, 96, bw, 30, 8);
      g.fillStyle = bg;
      g.fill();
      g.fillStyle = fg;
      g.fillText(label, bx + 13, 112);
      return bx + bw + 8;
    };
    const running = (t % 9) > 4.2 && (t % 9) < 4.9;
    let bx = X + 14;
    bx = btn(bx, running ? '■  Running' : '▶  Run', running ? '#b45309' : '#16a34a', '#fff');
    bx = btn(bx, 'PL/SQL', '#151a2a', '#a9b2cf');
    bx = btn(bx, 'Export CSV', '#151a2a', '#a9b2cf');
    bx = btn(bx, 'Export XLSX', '#151a2a', '#a9b2cf');
    g.font = `12px ${FONTS.mono}`;
    g.fillStyle = '#34d99b';
    g.fillText('●', W - 230, 112);
    g.fillStyle = '#a9b2cf';
    g.fillText('SSO · signed in', W - 212, 112);

    // editor
    const EY = 136;
    g.fillStyle = '#0d1120';
    g.fillRect(X, EY, W - X, 250);
    const typedN = Math.min(this.chars.length, Math.floor(((t % 9) / 4) * this.chars.length));
    let line = 0;
    let col = 0;
    g.font = `15px ${FONTS.mono}`;
    const cw = g.measureText('M').width;
    for (let i = 0; i < 6; i++) {
      g.fillStyle = '#3d4566';
      g.fillText(String(i + 1).padStart(2, ' '), X + 14, EY + 26 + i * 26);
    }
    let caretX = X + 56;
    let caretY = EY + 26;
    for (let i = 0; i < typedN; i++) {
      const [cls, ch] = this.chars[i];
      if (ch === '\n') {
        line++;
        col = 0;
        continue;
      }
      g.fillStyle = cls === 'k' ? '#8fb0ff' : cls === 'n' ? '#ffb36b' : '#e6eaf7';
      g.fillText(ch, X + 56 + col * cw, EY + 26 + line * 26);
      col++;
      caretX = X + 56 + col * cw;
      caretY = EY + 26 + line * 26;
    }
    if (Math.floor(t * 2) % 2 === 0 || typedN < this.chars.length) {
      g.fillStyle = '#ff8a3d';
      g.fillRect(caretX + 1, caretY - 11, 2, 20);
    }
    // autocomplete popup (metadata while you type)
    const ac = (t % 9) > 1.2 && (t % 9) < 2.6;
    if (ac) {
      const px = X + 56 + 14 * cw;
      const py = EY + 40;
      roundRectPath(g, px, py, 300, 128, 10);
      g.fillStyle = '#161b2c';
      g.fill();
      g.strokeStyle = 'rgba(150,170,255,0.25)';
      g.lineWidth = 1;
      g.stroke();
      ['invoice_num        VARCHAR2', 'invoice_amount     NUMBER', 'invoice_date       DATE', 'invoice_currency   VARCHAR2'].forEach((s, i) => {
        if (i === 0) {
          g.fillStyle = 'rgba(255,122,42,0.18)';
          g.fillRect(px + 6, py + 8 + i * 28, 288, 26);
        }
        g.fillStyle = i === 0 ? '#ffe3c6' : '#a9b2cf';
        g.font = `13px ${FONTS.mono}`;
        g.fillText(s, px + 16, py + 22 + i * 28);
      });
    }

    // results
    const RY = EY + 262;
    g.fillStyle = '#0b0e17';
    g.fillRect(X, RY, W - X, H - RY - 32);
    const shown = (t % 9) > 4.9 ? Math.min(RESULT.length, Math.floor(((t % 9) - 4.9) * 8)) : (t % 9) < 4.2 ? RESULT.length : 0;
    const colsX = [X + 18, X + 230, X + 410, X + 690];
    g.font = `600 12px ${FONTS.mono}`;
    g.fillStyle = '#6f7896';
    ['INVOICE_NUM', 'INVOICE_AMOUNT', 'VENDOR_NAME', 'INVOICE_DATE'].forEach((hname, i) => g.fillText(hname, colsX[i], RY + 22));
    g.fillStyle = 'rgba(150,170,255,0.12)';
    g.fillRect(X, RY + 36, W - X, 1);
    for (let r = 0; r < shown; r++) {
      const ry = RY + 58 + r * 30;
      if (r % 2) {
        g.fillStyle = 'rgba(255,255,255,0.025)';
        g.fillRect(X, ry - 16, W - X, 30);
      }
      g.font = `13px ${FONTS.mono}`;
      RESULT[r].forEach((v, i) => {
        g.fillStyle = i === 1 ? '#ffd2ad' : '#c3cae0';
        g.fillText(v, colsX[i], ry);
      });
    }
    // pager
    g.font = `12px ${FONTS.mono}`;
    g.fillStyle = '#8a93ad';
    g.fillText('Rows 1–50 of 1 284', X + 18, H - 52);
    const pg = 1 + (Math.floor(t / 3) % 4);
    g.fillText(`‹  Page ${pg} / 26  ›`, W - 190, H - 52);

    // status bar
    g.fillStyle = '#111522';
    g.fillRect(0, H - 32, W, 32);
    g.fillStyle = '#34d99b';
    g.fillText('●', 14, H - 15);
    g.fillStyle = '#a9b2cf';
    g.fillText('Connected · DEV2 · Oracle Fusion Cloud', 32, H - 15);
    g.fillStyle = '#6f7896';
    g.fillText('UTF-8   PL/SQL off   v0.5.0', W - 250, H - 15);
    this.tex.needsUpdate = true;
  }

  drawFox(g, x, y, size) {
    if (!this._fox) this._fox = projectFox({ ry: -16, rx: 8 });
    g.save();
    g.translate(x + size / 2, y + size / 2);
    g.scale(size / 2.4, size / 2.4);
    for (const p of this._fox) {
      g.beginPath();
      g.moveTo(p.pts[0][0], p.pts[0][1] + 0.15);
      g.lineTo(p.pts[1][0], p.pts[1][1] + 0.15);
      g.lineTo(p.pts[2][0], p.pts[2][1] + 0.15);
      g.closePath();
      g.fillStyle = FOX_COLORS[p.role];
      g.fill();
    }
    g.restore();
  }
}

function emblemTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const polys = projectFox({ ry: 0, rx: 0 });
  g.translate(128, 132);
  g.scale(92, 92);
  for (const p of polys) {
    g.beginPath();
    g.moveTo(...p.pts[0]);
    g.lineTo(...p.pts[1]);
    g.lineTo(...p.pts[2]);
    g.closePath();
    const lum = 0.75 + 0.25 * p.n[2];
    g.fillStyle = `rgba(255,${Math.round(150 * lum)},${Math.round(90 * lum)},${0.9})`;
    g.fill();
    g.strokeStyle = 'rgba(255,200,150,0.6)';
    g.lineWidth = 0.008;
    g.stroke();
  }
  return canvasTexture(c);
}

export class Laptop {
  constructor(world, anchor, { mobile = false } = {}) {
    this.world = world;
    this.anchor = anchor;
    this.mobile = mobile;
    this.group = new THREE.Group();
    this.object = this.group;
    this.open = 0; // 0 closed .. 1 open (set by the section)
    this.power = 0;
    this.spin = 0;
    this._acc = 0;

    const alu = new THREE.MeshPhysicalMaterial({ color: '#2b303c', metalness: 0.82, roughness: 0.3, clearcoat: 0.35, clearcoatRoughness: 0.25 });
    const dark = new THREE.MeshStandardMaterial({ color: '#0c0e15', roughness: 0.55, metalness: 0.2 });

    // base
    const base = new THREE.Mesh(new RoundedBoxGeometry(3.4, 0.12, 2.3, 4, 0.05), alu);
    base.position.y = 0.06;
    // keyboard well and keys
    const well = new THREE.Mesh(new THREE.PlaneGeometry(2.96, 1.1), new THREE.MeshStandardMaterial({ color: '#141824', roughness: 0.7, metalness: 0.3 }));
    well.rotation.x = -Math.PI / 2;
    well.position.set(0, 0.1205, -0.32);
    const keyGeo = new RoundedBoxGeometry(0.17, 0.03, 0.155, 2, 0.02);
    const cols = 14;
    const rows = 5;
    const keys = new THREE.InstancedMesh(keyGeo, dark, cols * rows);
    const m = new THREE.Matrix4();
    let n = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        m.makeTranslation(-1.33 + c * 0.205, 0.128, -0.76 + r * 0.205);
        keys.setMatrixAt(n++, m);
      }
    }
    // trackpad
    const pad = new THREE.Mesh(new RoundedBoxGeometry(1.25, 0.004, 0.78, 2, 0.002), new THREE.MeshPhysicalMaterial({ color: '#343a48', metalness: 0.6, roughness: 0.22, clearcoat: 0.8 }));
    pad.position.set(0, 0.121, 0.62);

    // lid (pivots at the hinge)
    this.lid = new THREE.Group();
    this.lid.position.set(0, 0.12, -1.15);
    const lidBody = new THREE.Mesh(new RoundedBoxGeometry(3.4, 2.26, 0.06, 4, 0.03), alu);
    lidBody.position.set(0, 1.13, -0.03);
    const bezel = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 2.16), new THREE.MeshPhysicalMaterial({ color: '#05060a', roughness: 0.15, metalness: 0.0, clearcoat: 1 }));
    bezel.position.set(0, 1.13, 0.0012);
    const W = mobile ? 960 : 1280;
    this.screen = new Screen(W, Math.round(W * 0.625));
    this.screenMat = new THREE.MeshBasicMaterial({ map: this.screen.tex, color: new THREE.Color(0, 0, 0), toneMapped: false });
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(3.16, 1.975), this.screenMat);
    scr.position.set(0, 1.15, 0.0025);
    // emblem on the back of the lid
    const emblem = new THREE.Mesh(
      new THREE.PlaneGeometry(0.62, 0.62),
      new THREE.MeshBasicMaterial({ map: emblemTexture(), transparent: true, depthWrite: false, toneMapped: false, color: new THREE.Color(1.2, 1.2, 1.2) })
    );
    emblem.position.set(0, 1.13, -0.0615);
    emblem.rotation.y = Math.PI;
    this.lid.add(lidBody, bezel, scr, emblem);

    // soft contact shadow
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 4.4),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
        fragmentShader: 'varying vec2 vUv; void main(){ vec2 d=(vUv-0.5)*vec2(1.0,1.3); float a=exp(-dot(d,d)*9.0)*0.75*smoothstep(0.5,0.38,length(vUv-0.5)); gl_FragColor=vec4(0.0,0.0,0.0,a);}',
      })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.01;
    // screen light spilling on the keyboard
    const spill = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 1.6),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uAmt: { value: 0 } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
        fragmentShader:
          'uniform float uAmt; varying vec2 vUv; void main(){ float a = smoothstep(0.0,1.0,vUv.y) * (1.0 - abs(vUv.x-0.5)*1.6) * uAmt; gl_FragColor=vec4(vec3(0.35,0.45,0.9)*a*0.35,1.0);}',
      })
    );
    spill.rotation.x = -Math.PI / 2;
    spill.position.set(0, 0.145, -0.35);
    this.spill = spill;

    this.body = new THREE.Group();
    this.body.add(shadow, base, well, keys, pad, spill, this.lid);
    this.body.position.set(0, -0.9, 0.3);
    this.group.add(this.body);
    this.group.visible = false;
  }

  update(time, dt) {
    const a = this.anchor;
    this.group.visible = a.visible;
    if (!a.visible) return;
    const s = this.world.w < 760 ? Math.min(a.w / 5.3, a.h / 3.7) : Math.min(a.w / 4.3, a.h / 3.3);
    this.group.position.set(a.x, a.y, 0);
    this.group.scale.setScalar(s);
    const o = this.open;
    // lid: closed (flat) → open ~105°
    this.lid.rotation.x = THREE.MathUtils.lerp(Math.PI / 2 - 0.02, -0.26, o);
    // turn from a three-quarter top view to a calmer front view
    const px = this.world.pointer.x;
    const py = this.world.pointer.y;
    this.group.rotation.set(THREE.MathUtils.lerp(0.62, 0.2, o) - py * 0.06, THREE.MathUtils.lerp(-0.75, -0.32, o) + px * 0.12 + Math.sin(time * 0.3) * 0.03, THREE.MathUtils.lerp(0.08, 0, o));
    this.body.position.y = -0.9 + Math.sin(time * 0.8) * 0.03;
    // screen power
    const target = o > 0.55 ? 1 : 0;
    this.power += (target - this.power) * Math.min(1, dt * 2.5);
    const flick = this.power < 0.95 ? 0.85 + Math.random() * 0.15 : 1;
    const b = this.power * flick;
    this.screenMat.color.setRGB(b * 1.05, b * 1.05, b * 1.05);
    this.spill.material.uniforms.uAmt.value = this.power;
    // redraw the live screen ~12 fps (8 on phones)
    if (this.power > 0.01) {
      this._acc += dt;
      if (this._acc > (this.mobile ? 0.125 : 0.083)) {
        this._acc = 0;
        this.screen.draw(time);
      }
    }
  }
}
