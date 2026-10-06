import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$, env, clamp, smooth, lerp } from '../core/env.js';

// The product window. Pinned: as you scroll it straightens out of perspective,
// the query types itself, Submit runs it, rows arrive, two columns get copied
// and the result is exported. Everything is a pure function of scroll progress.

const SQL = [
  [['k', 'SELECT'], ['', ' invoice_id,']],
  [['', '       invoice_num,']],
  [['', '       invoice_date,']],
  [['', '       invoice_amount,']],
  [['', '       amount_paid,']],
  [['', '       invoice_currency_code']],
  [['k', 'FROM'], ['', '   ap_invoices_all']],
  [['k', 'WHERE'], ['', '  invoice_date >= '], ['p', ':p_from_date']],
  [['', '  '], ['k', 'AND'], ['', '  org_id = '], ['p', ':p_org_id']],
  [['k', 'ORDER BY'], ['', ' invoice_date '], ['k', 'DESC']],
];

const ROWS = [
  ['300000047112381', 'INV-26-1187', '2026-09-30', '41 137.24', '0.00', 'USD'],
  ['300000047112377', 'INV-26-1186', '2026-09-30', '11 205.80', '11 205.80', 'USD'],
  ['300000047112352', 'NW-88213', '2026-09-29', '8 952.60', '0.00', 'EUR'],
  ['300000047112349', 'INV-26-1179', '2026-09-29', '4 582.03', '4 582.03', 'USD'],
  ['300000047112330', 'GX-55120', '2026-09-28', '619.20', '0.00', 'GBP'],
  ['300000047112318', 'INV-26-1171', '2026-09-28', '298.42', '298.42', 'USD'],
  ['300000047112301', 'AC-00932', '2026-09-27', '1 634.00', '0.00', 'EUR'],
  ['300000047112296', 'INV-26-1165', '2026-09-27', '725.39', '725.39', 'USD'],
  ['300000047112288', 'NW-88197', '2026-09-26', '559.50', '0.00', 'EUR'],
  ['300000047112270', 'INV-26-1160', '2026-09-26', '388.72', '388.72', 'USD'],
];

export function initWorkbench(env2) {
  const sec = $('.workbench');
  if (!sec) return () => {};
  const pin = $('.workbench__pin', sec);
  const stage = $('.workbench__stage', sec);
  const wrap = $('.app-wrap', sec);
  const app = $('.app', sec);
  const code = $('#wb-code');
  const gutter = $('.ed__gutter', sec);
  const tbody = $('#wb-rows');
  const submit = $('.tb--submit', sec);
  const cols = $('.tb--cols', sec);
  const xlsx = $('.tb--xlsx', sec);
  const fmt = $('.tb--format', sec);
  const status = $('.app__status .st', sec);
  const toast = $('.app__toast', sec);
  const toastText = $('.app__toast-text', sec);
  const steps = $$('.step', sec);
  const picks = $$('th.col-pick', sec);
  const plsql = $('.cb[data-callout-target="plsql"]', sec);
  const callouts = $$('.callout', sec);

  // flatten the SQL into characters with classes
  const chars = [];
  SQL.forEach((line, li) => {
    for (const [cls, txt] of line) for (const ch of txt) chars.push([cls, ch]);
    if (li < SQL.length - 1) chars.push(['', '\n']);
  });
  gutter.textContent = Array.from({ length: 12 }, (_, i) => i + 1).join('\n');

  // rows
  tbody.innerHTML = ROWS.map((r) => `<tr>${r.map((c, i) => `<td class="${i === 1 || i === 3 ? 'pk' : ''}${i > 3 ? ' hide-s' : ''}">${c}</td>`).join('')}</tr>`).join('');
  const trs = $$('tr', tbody);
  const pickCells = $$('td.pk', tbody);

  let typed = -1;
  const renderCode = (n) => {
    if (n === typed) return;
    typed = n;
    let html = '';
    let cur = null;
    let buf = '';
    const flush = () => {
      if (!buf) return;
      html += cur ? `<span class="${cur}">${buf}</span>` : buf;
      buf = '';
    };
    for (let i = 0; i < n; i++) {
      const [cls, ch] = chars[i];
      if (cls !== cur) {
        flush();
        cur = cls;
      }
      buf += ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch;
    }
    flush();
    code.innerHTML = html + '<span class="ed__caret"></span>';
  };

  // —— fit the window into the stage ——
  let dw = 1040;
  let dh = 600;
  const fit = () => {
    const small = window.innerWidth <= 760;
    dw = small ? 620 : 1040;
    dh = small ? 560 : 600;
    app.style.width = dw + 'px';
    app.style.height = dh + 'px';
    const r = stage.getBoundingClientRect();
    const s = Math.min((r.width - 8) / dw, (r.height - 8) / dh, 1.25);
    wrap.style.setProperty('--app-w', `${dw * s}px`);
    wrap.style.setProperty('--app-h', `${dh * s}px`);
    app.style.setProperty('--app-s', s);
    placeCallouts(s);
  };

  // callouts sit just above their targets, in the window's own (scaled) coordinates
  const placeCallouts = (s) => {
    const ar = app.getBoundingClientRect();
    const k = ar.width / dw || 1;
    callouts.forEach((c) => {
      const t = $(`[data-callout-target="${c.dataset.for}"]`, app);
      if (!t || t.offsetParent === null) {
        c.style.display = 'none';
        return;
      }
      c.style.display = '';
      const tr = t.getBoundingClientRect();
      const x = ((tr.left + tr.width / 2 - ar.left) / k) * s;
      const y = ((tr.top - ar.top) / k) * s;
      const dy = parseFloat(c.dataset.dy || '0');
      // keep the pill inside the window's width
      const half = c.offsetWidth / 2 + 4;
      const ww = dw * s;
      c.style.left = `${Math.min(ww - half, Math.max(half, x))}px`;
      c.style.top = `${y - dy}px`;
      c.style.setProperty('--stem', `${10 + Math.max(0, dy)}px`);
    });
  };

  // which callouts belong to which step
  const calloutStep = { instances: 0, tabs: 0, params: 1, plsql: 1, fix: 1, format: 2, xlsx: 2, history: 2 };

  let target = 0;
  let p = 0;
  let last = -1;
  let frameDt = 0.016;
  const pointer = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX / innerWidth - 0.5;
    pointer.y = e.clientY / innerHeight - 0.5;
  });

  if (!env.reduced) {
    ScrollTrigger.create({
      trigger: sec,
      pin,
      start: 'top top',
      end: () => '+=' + Math.round(window.innerHeight * (window.innerWidth <= 760 ? 2.2 : 2.8)),
      onUpdate: (self) => (target = self.progress),
      onRefresh: fit,
    });
  } else {
    target = 1;
  }
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);

  const setClass = (el, cls, on) => el && el.classList.toggle(cls, on);

  const render = (p) => {
    // 1. out of perspective
    const t1 = env.reduced ? 1 : smooth(0, 0.2, p);
    const rx = lerp(34, 0, t1) - pointer.y * 4 * t1;
    const ry = lerp(-18, 0, t1) + pointer.x * 6 * t1;
    const rz = lerp(5, 0, t1);
    const z = lerp(-280, 0, t1);
    const y = lerp(80, 0, t1);
    wrap.style.transform = `translate3d(0, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
    app.style.setProperty('--sheen', `${lerp(-80, 180, smooth(0.04, 0.3, p))}%`);

    // 2. typing
    const t2 = clamp((p - 0.14) / 0.28);
    renderCode(Math.round(t2 * chars.length));

    // 3. run
    const pressing = p > 0.44 && p < 0.5;
    setClass(submit, 'is-press', pressing);
    setClass(plsql, 'is-on', false);
    const st = p < 0.44 ? 'Ready' : p < 0.5 ? 'Running…' : 'Successful Response · 10 rows';
    if (status.textContent !== st) {
      status.textContent = st;
      status.className = 'st' + (p >= 0.44 && p < 0.5 ? ' is-run' : p >= 0.5 ? ' is-ok' : '');
    }

    // 4. rows cascade in
    const t3 = clamp((p - 0.5) / 0.16);
    trs.forEach((tr, i) => {
      const k = clamp(t3 * trs.length - i);
      tr.style.opacity = k;
      tr.style.transform = `translateY(${(1 - k) * 10}px)`;
    });

    // 5. reuse: pick two columns, copy, export
    const picked = p > 0.72;
    picks.forEach((th) => setClass(th, 'is-picked', picked));
    pickCells.forEach((td) => setClass(td, 'is-picked', picked));
    setClass(cols, 'is-press', p > 0.78 && p < 0.82);
    setClass(xlsx, 'is-press', p > 0.9 && p < 0.94);
    setClass(fmt, 'is-press', false);
    let toastOn = 0;
    let msg = '';
    if (p > 0.8 && p < 0.89) {
      toastOn = smooth(0.8, 0.82, p) * (1 - smooth(0.87, 0.89, p));
      msg = '2 columns copied';
    } else if (p > 0.92) {
      toastOn = smooth(0.92, 0.94, p);
      msg = 'results.xlsx exported';
    }
    if (msg && toastText.textContent !== msg) toastText.textContent = msg;
    toast.style.opacity = toastOn;
    toast.style.transform = `translateY(${(1 - toastOn) * 14}px) scale(${0.96 + toastOn * 0.04})`;

    // steps + callouts
    const step = p < 0.44 ? 0 : p < 0.72 ? 1 : 2;
    const ranges = [
      [0.1, 0.44],
      [0.44, 0.72],
      [0.72, 1],
    ];
    steps.forEach((s, i) => {
      setClass(s, 'is-on', i === step);
      s.style.setProperty('--p', clamp((p - ranges[i][0]) / (ranges[i][1] - ranges[i][0])));
    });
    callouts.forEach((c) => {
      const cs = calloutStep[c.dataset.for];
      const on = !env.reduced && p > 0.16 && cs === step ? 1 : 0;
      const cur = parseFloat(c.dataset.on || '0');
      const next = cur + (on - cur) * Math.min(1, frameDt * 9);
      c.dataset.on = next.toFixed(3);
      c.style.opacity = next;
      c.style.transform = `translate(-50%, calc(-100% - ${4 + next * 8}px)) scale(${0.92 + next * 0.08})`;
    });
  };

  return (dt) => {
    frameDt = dt;
    const k = 1 - Math.pow(0.0005, dt);
    p += (target - p) * k;
    if (Math.abs(p - last) > 0.00005 || pointer.x || pointer.y || callouts.some((c) => { const v = parseFloat(c.dataset.on || '0'); return v > 0.001 && v < 0.999; })) {
      render(p);
      last = p;
    }
  };
}
