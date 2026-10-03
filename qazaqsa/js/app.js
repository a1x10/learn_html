import { CONFIG, PRODUCTS, I18N } from './data.js';

document.documentElement.classList.add('js');

/* ------------------------------------------------------------------ */
/*  Утилиты                                                            */
/* ------------------------------------------------------------------ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (a, b, x) => { const k = clamp01((x - a) / (b - a)); return k * k * (3 - 2 * k); };
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const mqMobile = matchMedia('(max-width: 900px)');
const isTouch = matchMedia('(hover: none)').matches;
const isMobile = mqMobile.matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* приватный режим */ } },
};

const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
const sizeOf = (p, id) => p.sizes.find((s) => s.id === id) || p.sizes[0];
const sizeLabel = (s) => [s.id, s.w].filter(Boolean).join(' · ');
const fmt = (n) => `${n.toLocaleString('ru-RU')} ₸`;

function sanitizeCart(c) {
  if (!Array.isArray(c)) return [];
  return c
    .filter((it) => it && byId[it.id] && byId[it.id].sizes.some((s) => s.id === it.size) && it.qty > 0)
    .map((it) => ({ id: it.id, size: it.size, qty: Math.min(99, Math.floor(it.qty)) }));
}

const state = {
  lang: store.get('qz-lang', 'ru') === 'kz' ? 'kz' : 'ru',
  cart: sanitizeCart(store.get('qz-cart', [])),
  filter: 'all',
  sel: {},
};
const t = (k) => I18N[state.lang][k] ?? I18N.ru[k] ?? k;

/* ------------------------------------------------------------------ */
/*  WhatsApp                                                           */
/* ------------------------------------------------------------------ */
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const absUrl = (path) => (/^https?:$/.test(location.protocol) ? new URL(path, location.href).href : '');

function fmtDate(v) {
  const [y, m, d] = v.split('-');
  return y && m && d ? `${d}.${m}.${y}` : v;
}

function buildMessage(items, form = {}) {
  const lines = [t('wa.hello'), ''];
  let total = 0;
  items.forEach((it, i) => {
    const p = byId[it.id];
    const s = sizeOf(p, it.size);
    const sum = s.price * it.qty;
    total += sum;
    const label = sizeLabel(s);
    lines.push(`${i + 1}. *${p.name}*${label ? ` (${label})` : ''} × ${it.qty} = ${fmt(sum)}`);
    const photo = absUrl(p.photo);
    if (photo) lines.push(`   ${t('wa.photo')}: ${photo}`);
  });
  lines.push('', `*${t('wa.total')}: ${fmt(total)}*`);
  const extra = [];
  if (form.name) extra.push(`${t('wa.name')}: ${form.name}`);
  if (form.date) extra.push(`${t('wa.date')}: ${fmtDate(form.date)}`);
  if (form.get) extra.push(`${t('wa.get')}: ${form.get === 'deliv' ? t('cart.deliv') : t('cart.pick')}`);
  if (form.get === 'deliv' && form.addr) extra.push(`${t('wa.addr')}: ${form.addr}`);
  if (form.comment) extra.push(`${t('wa.comment')}: ${form.comment}`);
  if (extra.length) lines.push('', ...extra);
  return lines.join('\n');
}

function openWa(text) {
  toast(t('toast.wa'));
  const url = waLink(text);
  const w = window.open(url, '_blank');
  if (w) w.opener = null;
  else location.href = url;
}

/* ------------------------------------------------------------------ */
/*  3D                                                                 */
/* ------------------------------------------------------------------ */
let stage = null;
const cardViews = new Map();
const gatedViews = new Map(); // элемент с .reveal → 3D-вью, которая ждёт его появления
let featureView = null;

async function initStage(onProgress) {
  try {
    const { Stage } = await import('./stage.js');
    stage = new Stage($('#gl'), { mobile: isMobile });
    stage.heroEl = $('#heroStage');
    await stage.init(PRODUCTS, onProgress);
    return true;
  } catch (e) {
    console.warn('3D недоступно, показываем картинки:', e);
    document.documentElement.classList.add('no-webgl');
    stage = null;
    return false;
  }
}

function attachCardViews() {
  if (!stage) return;
  cardViews.forEach((v) => stage.removeView(v));
  cardViews.clear();
  for (const el of gatedViews.keys()) if (!el.isConnected) gatedViews.delete(el);
  $$('.card').forEach((card) => {
    const p = byId[card.dataset.id];
    const v = stage.addView($('.card__stage', card), p.cake, 'card');
    // торт появляется вместе с карточкой
    v.show = card.classList.contains('is-in');
    cardViews.set(card.dataset.id, v);
    gatedViews.set(card, v);
  });
  if (!featureView) {
    const fs = $('#featureStage');
    featureView = stage.addView(fs, 'mix', 'feature');
    featureView.show = fs.classList.contains('is-in');
    gatedViews.set(fs, featureView);
  }
}

/* ------------------------------------------------------------------ */
/*  Меню                                                               */
/* ------------------------------------------------------------------ */
function cardHTML(p, i) {
  const s = sizeOf(p, state.sel[p.id]);
  const meta = p.sizes.length > 1
    ? `<div class="seg" role="radiogroup" aria-label="${esc(t('modal.weight'))}">${p.sizes
      .map((z) => `<button type="button" role="radio" aria-checked="${z.id === s.id}" class="${z.id === s.id ? 'is-on' : ''}" data-size="${z.id}">${esc(sizeLabel(z))}</button>`)
      .join('')}</div>`
    : (s.w ? `<span class="card__weight">${esc(s.w)}</span>` : '');
  return `
  <article class="card reveal" data-id="${p.id}" data-cat="${p.cat}" tabindex="0" aria-label="${esc(p.name)}">
    <div class="card__stage"><img class="card__fallback" src="assets/cakes/${p.id}.webp" alt="" loading="lazy"></div>
    ${p.tag ? `<span class="card__tag">${esc(t('tag.' + p.tag))}</span>` : ''}
    <span class="card__num">${String(i + 1).padStart(2, '0')}</span>
    <div class="card__body">
      <h3 class="card__name">${esc(p.name)}</h3>
      <p class="card__desc">${esc(p.desc[state.lang])}</p>
      <div class="card__meta">${meta}</div>
      <div class="card__foot">
        <span class="card__price">${fmt(s.price)}</span>
        <button type="button" class="add-btn" data-add aria-label="${esc(t('add'))}: ${esc(p.name)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg><span>${esc(t('add'))}</span>
        </button>
      </div>
    </div>
  </article>`;
}

function renderGrid() {
  const grid = $('#grid');
  const wasIn = new Set($$('.card.is-in', grid).map((c) => c.dataset.id));
  grid.innerHTML = PRODUCTS.map(cardHTML).join('');
  $$('.card', grid).forEach((c, i) => {
    c.style.transitionDelay = `${(i % 3) * 70}ms`;
    if (wasIn.has(c.dataset.id)) c.classList.add('is-in');
    else revealObserver.observe(c);
  });
  applyFilter(false);
  attachCardViews();
}

function updateCardPrice(card) {
  const p = byId[card.dataset.id];
  const s = sizeOf(p, state.sel[p.id]);
  $('.card__price', card).textContent = fmt(s.price);
  $$('[data-size]', card).forEach((b) => {
    const on = b.dataset.size === s.id;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-checked', on);
  });
}

function applyFilter(animate = true) {
  $$('.filters__btn').forEach((b) => b.classList.toggle('is-on', b.dataset.filter === state.filter));
  movePill();
  $$('.card').forEach((c) => {
    const show = state.filter === 'all' || c.dataset.cat === state.filter;
    const was = !c.classList.contains('is-hidden');
    c.classList.toggle('is-hidden', !show);
    if (show && animate && !was && !reduced) {
      c.animate([{ opacity: 0, transform: 'translateY(24px) scale(.97)' }, { opacity: 1, transform: 'none' }],
        { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)' });
    }
  });
}

function movePill() {
  const on = $('.filters__btn.is-on');
  const pill = $('.filters__pill');
  if (!on || !pill) return;
  pill.style.width = `${on.offsetWidth}px`;
  pill.style.transform = `translateX(${on.offsetLeft}px)`;
}

function bindGrid() {
  const grid = $('#grid');
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const id = card.dataset.id;
    const sizeBtn = e.target.closest('[data-size]');
    if (sizeBtn) {
      state.sel[id] = sizeBtn.dataset.size;
      updateCardPrice(card);
      return;
    }
    const add = e.target.closest('[data-add]');
    if (add) {
      addToCart(id, sizeOf(byId[id], state.sel[id]).id, 1, $('.card__stage', card));
      add.classList.add('is-added');
      $('span', add).textContent = t('added');
      $('svg', add).innerHTML = '<path d="M5 12.5 10 17 19 7"/>';
      clearTimeout(add._t);
      add._t = setTimeout(() => {
        add.classList.remove('is-added');
        $('span', add).textContent = t('add');
        $('svg', add).innerHTML = '<path d="M12 5v14M5 12h14"/>';
      }, 1600);
      return;
    }
    openModal(id);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('card')) openModal(e.target.dataset.id);
  });
  if (!isTouch) {
    grid.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--rx', `${(0.5 - y) * 5}deg`);
      card.style.setProperty('--ry', `${(x - 0.5) * 7}deg`);
      const v = cardViews.get(card.dataset.id);
      if (v) { v.state.hover = true; v.state.px = (x - 0.5) * 2; }
    });
    grid.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.card');
      if (!card || card.contains(e.relatedTarget)) return;
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      const v = cardViews.get(card.dataset.id);
      if (v) { v.state.hover = false; v.state.px = 0; }
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Корзина                                                            */
/* ------------------------------------------------------------------ */
function cartTotals() {
  return state.cart.reduce((a, it) => {
    const s = sizeOf(byId[it.id], it.size);
    a.count += it.qty;
    a.sum += s.price * it.qty;
    return a;
  }, { count: 0, sum: 0 });
}

function saveCart() { store.set('qz-cart', state.cart); }

function addToCart(id, size, qty = 1, fromEl = null) {
  const it = state.cart.find((x) => x.id === id && x.size === size);
  if (it) it.qty = Math.min(99, it.qty + qty);
  else state.cart.push({ id, size, qty });
  saveCart();
  renderCart(true);
  flyToCart(id, fromEl);
  toast(`<b>${esc(byId[id].name)}</b> ${esc(t('toast.added'))}`, { label: t('cart.open'), fn: openCart });
}

function renderCart(animateNew = false) {
  const { count, sum } = cartTotals();
  $('#cartCount').textContent = count;
  $('#cartBarCount').textContent = count;
  $('#cartBarTotal').textContent = fmt(sum);
  $('#cartTotal').textContent = fmt(sum);
  document.body.classList.toggle('has-cart', count > 0);
  $('#drawer').classList.toggle('is-empty', count === 0);
  const list = $('#cartList');
  list.innerHTML = state.cart.map((it, i) => {
    const p = byId[it.id];
    const s = sizeOf(p, it.size);
    return `
    <li class="ci" data-i="${i}" style="${animateNew ? '' : 'animation:none'}">
      <div class="ci__img"><img src="assets/cakes/${p.id}.webp" alt=""></div>
      <div>
        <div class="ci__name">${esc(p.name)}</div>
        <div class="ci__meta">${esc([sizeLabel(s), fmt(s.price)].filter(Boolean).join(' · '))}</div>
        <button type="button" class="ci__rm" data-rm>${esc(t('cart.rm'))}</button>
      </div>
      <div class="ci__right">
        <span class="ci__price">${fmt(s.price * it.qty)}</span>
        <div class="stepper"><button type="button" data-dec aria-label="−">−</button><span>${it.qty}</span><button type="button" data-inc aria-label="+">+</button></div>
      </div>
    </li>`;
  }).join('');
}

function bindCart() {
  const drawer = $('#drawer');
  $('#cartBtn').addEventListener('click', openCart);
  $('#cartBar').addEventListener('click', openCart);
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeCart();
    if (e.target.closest('[data-goto-menu]')) { closeCart(); scrollToEl($('#menu')); return; }
    const li = e.target.closest('.ci');
    if (!li) return;
    const it = state.cart[+li.dataset.i];
    if (!it) return;
    if (e.target.closest('[data-inc]')) it.qty = Math.min(99, it.qty + 1);
    else if (e.target.closest('[data-dec]')) it.qty -= 1;
    else if (e.target.closest('[data-rm]')) it.qty = 0;
    else return;
    state.cart = state.cart.filter((x) => x.qty > 0);
    saveCart();
    renderCart();
  });
  const form = $('#cartForm');
  const today = new Date();
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const F = form.elements;
  F.date.min = iso(today);
  const saved = store.get('qz-form', {});
  if (saved.name) F.name.value = saved.name;
  form.addEventListener('change', () => {
    form.classList.toggle('is-deliv', F.get.value === 'deliv');
    store.set('qz-form', { name: F.name.value });
  });
  form.addEventListener('submit', (e) => e.preventDefault());
  $('#orderBtn').addEventListener('click', () => {
    if (!state.cart.length) return;
    const f = Object.fromEntries(new FormData(form).entries());
    Object.keys(f).forEach((k) => { f[k] = String(f[k]).trim(); });
    store.set('qz-form', { name: f.name });
    openWa(buildMessage(state.cart, f));
  });
  $('#clearBtn').addEventListener('click', () => {
    state.cart = [];
    saveCart();
    renderCart();
  });
}

let lastFocus = null;
function openCart() {
  closeModal();
  closeMnav();
  lastFocus = document.activeElement;
  const d = $('#drawer');
  d.classList.add('is-open');
  d.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  setTimeout(() => $('.drawer__head .icon-btn', d).focus({ preventScroll: true }), 50);
}
function closeCart() {
  const d = $('#drawer');
  if (!d.classList.contains('is-open')) return;
  d.classList.remove('is-open');
  d.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
  lastFocus?.focus?.({ preventScroll: true });
}

function flyToCart(id, fromEl) {
  const btn = $('#cartBtn');
  const bump = () => {
    btn.classList.remove('bump');
    void btn.offsetWidth;
    btn.classList.add('bump');
  };
  if (!fromEl || reduced) return bump();
  const a = fromEl.getBoundingClientRect();
  const b = btn.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'fly';
  el.innerHTML = `<img src="assets/cakes/${id}.webp" alt="">`;
  document.body.appendChild(el);
  const sx = a.left + a.width / 2 - 55, sy = a.top + a.height / 2 - 55;
  const ex = b.left + b.width / 2 - 55, ey = b.top + b.height / 2 - 55;
  const mx = (sx + ex) / 2 + 40, my = Math.min(sy, ey) - 140;
  const kf = [];
  for (let i = 0; i <= 24; i++) {
    const k = i / 24, q = 1 - k;
    const x = q * q * sx + 2 * q * k * mx + k * k * ex;
    const y = q * q * sy + 2 * q * k * my + k * k * ey;
    kf.push({ transform: `translate(${x}px, ${y}px) scale(${1.5 - k * 1.25}) rotate(${-k * 30}deg)`, opacity: k > 0.88 ? (1 - k) * 8 : 1 });
  }
  el.animate(kf, { duration: 950, easing: 'cubic-bezier(.45,0,.2,1)', fill: 'forwards' }).onfinish = () => {
    el.remove();
    bump();
  };
}

/* ------------------------------------------------------------------ */
/*  Модалка с 3D-тортом                                                */
/* ------------------------------------------------------------------ */
const modal = { id: null, size: null, qty: 1, view: null };

function fillModal() {
  const p = byId[modal.id];
  if (!p) return;
  const s = sizeOf(p, modal.size);
  $('#mCat').textContent = t('f.' + p.cat);
  $('#mName').textContent = p.name;
  $('#mDesc').textContent = p.desc[state.lang];
  $('#mFallback').src = `assets/cakes/${p.id}.webp`;
  const real = $('#mReal');
  real.classList.toggle('is-on', !!p.realPhoto);
  if (p.realPhoto) $('img', real).src = p.realPhoto;
  const row = $('#mSizesRow');
  row.style.display = p.sizes.length > 1 || s.w ? '' : 'none';
  $('#mSizes').innerHTML = p.sizes.length > 1
    ? p.sizes.map((z) => `<button type="button" class="${z.id === s.id ? 'is-on' : ''}" data-size="${z.id}">${esc(sizeLabel(z))}</button>`).join('')
    : `<button type="button" class="is-on">${esc(s.w)}</button>`;
  $('#mQty').textContent = modal.qty;
  $('#mPrice').textContent = fmt(s.price * modal.qty);
  $('#mDirect').href = waLink(buildMessage([{ id: p.id, size: s.id, qty: modal.qty }]));
}

function openModal(id) {
  const p = byId[id];
  if (!p) return;
  closeCart();
  lastFocus = document.activeElement;
  modal.id = id;
  modal.size = sizeOf(p, state.sel[id]).id;
  modal.qty = 1;
  fillModal();
  const m = $('#modal');
  m.classList.add('is-open');
  m.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  if (stage) {
    modal.view = stage.addView($('#modalStage'), p.cake, 'modal');
    modal.view.state.rot = -0.6;
    stage.setModal(modal.view);
    document.body.classList.add('modal-open');
  }
  setTimeout(() => $('.modal__close', m).focus({ preventScroll: true }), 60);
}

function closeModal() {
  const m = $('#modal');
  if (!m.classList.contains('is-open')) return;
  m.classList.remove('is-open');
  m.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
  // холст опускаем после анимации закрытия
  setTimeout(() => {
    if (m.classList.contains('is-open')) return;
    document.body.classList.remove('modal-open');
    if (stage && modal.view) {
      stage.setModal(null);
      stage.removeView(modal.view);
      modal.view = null;
    }
  }, 280);
  lastFocus?.focus?.({ preventScroll: true });
}

function bindModal() {
  const m = $('#modal');
  m.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeModal();
    const sb = e.target.closest('#mSizes [data-size]');
    if (sb) {
      modal.size = sb.dataset.size;
      state.sel[modal.id] = modal.size;
      const card = $(`.card[data-id="${modal.id}"]`);
      if (card) updateCardPrice(card);
      fillModal();
    }
  });
  $('#mMinus').addEventListener('click', () => { modal.qty = Math.max(1, modal.qty - 1); fillModal(); });
  $('#mPlus').addEventListener('click', () => { modal.qty = Math.min(99, modal.qty + 1); fillModal(); });
  $('#mAdd').addEventListener('click', () => {
    addToCart(modal.id, modal.size, modal.qty, $('#modalStage'));
    closeModal();
  });
  $('#mDirect').addEventListener('click', () => toast(t('toast.wa')));

  // вращение пальцем / мышью
  const el = $('#modalStage');
  let lx = 0, ly = 0, lt = 0, down = false;
  el.addEventListener('pointerdown', (e) => {
    if (!modal.view) return;
    down = true;
    lx = e.clientX; ly = e.clientY; lt = performance.now();
    const s = modal.view.state;
    s.drag = true; s.vel = 0; s.idleT = 0;
    el.setPointerCapture?.(e.pointerId);
  });
  el.addEventListener('pointermove', (e) => {
    if (!down || !modal.view) return;
    const s = modal.view.state;
    const now = performance.now();
    const dx = e.clientX - lx, dy = e.clientY - ly;
    const dt = Math.max(1, now - lt) / 1000;
    s.rot += dx * 0.011;
    s.tilt = Math.max(-0.25, Math.min(0.45, s.tilt + dy * 0.004));
    s.vel = (dx * 0.011) / dt * 0.6;
    lx = e.clientX; ly = e.clientY; lt = now;
  });
  const up = () => {
    if (!down) return;
    down = false;
    if (modal.view) { modal.view.state.drag = false; modal.view.state.idleT = 0; }
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
}

/* ------------------------------------------------------------------ */
/*  Тост                                                               */
/* ------------------------------------------------------------------ */
let toastT = null;
function toast(html, action) {
  const el = $('#toast');
  el.innerHTML = `<span>${html}</span>`;
  if (action) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = action.label;
    b.onclick = () => { el.classList.remove('is-on'); action.fn(); };
    el.appendChild(b);
  }
  el.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('is-on'), 3200);
}

/* ------------------------------------------------------------------ */
/*  Скролл: hero и плавная прокрутка                                   */
/* ------------------------------------------------------------------ */
const heroEl = $('#hero');
const heroStageEl = $('#heroStage');
const headerH = () => $('#header').offsetHeight;

function heroProgress() {
  const r = heroEl.getBoundingClientRect();
  const total = heroEl.offsetHeight - window.innerHeight;
  return total > 0 ? clamp01(-r.top / total) : 0;
}

let scrollRaf = null;
function cancelScroll() { if (scrollRaf) cancelAnimationFrame(scrollRaf); scrollRaf = null; }
function smoothScrollTo(y, dur) {
  cancelScroll();
  const start = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const dist = Math.min(max, Math.max(0, y)) - start;
  if (Math.abs(dist) < 2) return;
  if (reduced) { window.scrollTo(0, start + dist); return; }
  const d = dur ?? Math.min(1800, 600 + Math.abs(dist) * 0.22);
  const t0 = performance.now();
  const step = (now) => {
    const k = Math.min(1, (now - t0) / d);
    window.scrollTo(0, start + dist * easeInOut(k));
    scrollRaf = k < 1 ? requestAnimationFrame(step) : null;
  };
  scrollRaf = requestAnimationFrame(step);
}
['wheel', 'touchstart', 'keydown'].forEach((ev) => window.addEventListener(ev, cancelScroll, { passive: true }));

function scrollToEl(el, dur) {
  if (!el) return;
  const y = el === $('#top') ? 0 : el.getBoundingClientRect().top + window.scrollY - headerH() + 1;
  smoothScrollTo(y, dur);
}

// «нажать на торт» — проигрываем полный оборот и приезжаем в меню
function playHero() {
  const target = $('#menu');
  const y = target.getBoundingClientRect().top + window.scrollY - headerH() + 1;
  const remain = Math.abs(y - window.scrollY);
  smoothScrollTo(y, Math.max(1200, Math.min(3600, remain * 0.75)));
}

const heroDom = {
  title: $('.hero__title'),
  intro: $('.hero__intro'),
  hint: $('.hero__hint'),
  hud: $('.hero__hud'),
  deg: $('#hudDeg'),
  outro: $('.hero__outro'),
  callouts: $$('.callout').map((el) => ({ el, r: el.dataset.range.split(',').map(Number) })),
  cache: new Map(),
};
function setVar(el, name, v) {
  const key = el;
  let c = heroDom.cache.get(key);
  if (!c) { c = {}; heroDom.cache.set(key, c); }
  const s = typeof v === 'number' ? v.toFixed(3) : v;
  if (c[name] !== s) { c[name] = s; el.style.setProperty(name, s); }
}

let fallbackSp = 0, fallbackT = performance.now();
function updateHeroDom() {
  const r = heroEl.getBoundingClientRect();
  if (r.bottom < 0) {
    if (stage) stage.hero.p = 1;
    return;
  }
  let sp, rotP;
  if (stage) {
    stage.hero.p = heroProgress();
    sp = stage.hero.sp;
    rotP = stage.hero.rotP;
  } else {
    const now = performance.now();
    const dt = Math.min(0.05, (now - fallbackT) / 1000);
    fallbackT = now;
    fallbackSp += (heroProgress() - fallbackSp) * (1 - Math.exp(-4.5 * dt));
    sp = fallbackSp;
    rotP = easeInOut(clamp01((sp - 0.03) / 0.74));
  }
  setVar(heroDom.title, '--o', 1 - smooth(0.02, 0.15, sp));
  setVar(heroDom.title, '--y', -sp * 700);
  setVar(heroDom.title, '--s', 1 + sp * 0.5);
  setVar(heroDom.intro, '--o', 1 - smooth(0.005, 0.07, sp));
  heroDom.intro.style.visibility = sp > 0.08 ? 'hidden' : '';
  setVar(heroDom.hint, '--o', 1 - smooth(0, 0.04, sp));
  setVar(heroDom.hud, '--p', rotP);
  setVar(heroDom.hud, '--ho', smooth(0.05, 0.14, sp));
  const deg = `${Math.round(rotP * 360)}°`;
  if (heroDom.deg.textContent !== deg) heroDom.deg.textContent = deg;
  setVar(heroDom.outro, '--o', smooth(0.82, 0.95, sp));
  for (const c of heroDom.callouts) {
    const [a, b] = c.r;
    setVar(c.el, '--o', smooth(a, a + 0.05, sp) * (1 - smooth(b - 0.05, b, sp)));
  }
}

function bindHero() {
  heroStageEl.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    playHero();
  });
  const cursor = $('#heroCursor');
  heroStageEl.addEventListener('pointermove', (e) => {
    if (stage) {
      stage.hero.mx = (e.clientX / window.innerWidth - 0.5) * 2;
      stage.hero.my = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    if (isTouch) return;
    const overUi = !!e.target.closest('a, button, .hero__intro');
    cursor.style.setProperty('--cx', `${e.clientX}px`);
    cursor.style.setProperty('--cy', `${e.clientY}px`);
    cursor.style.setProperty('--cs', overUi || heroProgress() > 0.9 ? 0 : 1);
  });
  heroStageEl.addEventListener('pointerleave', () => cursor.style.setProperty('--cs', 0));
  window.addEventListener('scroll', () => {
    if (heroProgress() > 0.9 || heroEl.getBoundingClientRect().bottom < window.innerHeight * 0.5) cursor.style.setProperty('--cs', 0);
  }, { passive: true });
}

/* ------------------------------------------------------------------ */
/*  Прочее                                                             */
/* ------------------------------------------------------------------ */
const revealObserver = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (en.isIntersecting) {
      const el = en.target;
      el.classList.add('is-in');
      revealObserver.unobserve(el);
      if (el.style.transitionDelay) setTimeout(() => { el.style.transitionDelay = ''; }, 1300);
      const v = gatedViews.get(el);
      gatedViews.delete(el);
      if (v && v.show === false) {
        const delay = parseFloat(el.style.transitionDelay) || 0;
        setTimeout(() => { v.show = true; v.state.appear = 0; }, delay + 120);
      }
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

function bindTilt() {
  if (isTouch) return;
  $$('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${(0.5 - y) * 7}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * 9}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
  document.addEventListener('pointermove', (e) => {
    const b = e.target.closest?.('.btn');
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty('--mx', `${e.clientX - r.left}px`);
    b.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
  const fs = $('#featureStage');
  fs.addEventListener('pointerenter', () => { if (featureView) featureView.state.hover = true; });
  fs.addEventListener('pointerleave', () => { if (featureView) featureView.state.hover = false; });
}

function openMnav() {
  $('#mnav').classList.add('is-open');
  $('#mnav').setAttribute('aria-hidden', 'false');
  $('#burger').setAttribute('aria-expanded', 'true');
  document.body.classList.add('lock');
}
function closeMnav() {
  if (!$('#mnav').classList.contains('is-open')) return;
  $('#mnav').classList.remove('is-open');
  $('#mnav').setAttribute('aria-hidden', 'true');
  $('#burger').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('lock');
}

function bindGlobal() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-scroll]');
    if (a) {
      const id = a.getAttribute('href');
      const el = id && id.startsWith('#') ? $(id) : null;
      if (el) {
        e.preventDefault();
        closeMnav();
        scrollToEl(el);
      }
      return;
    }
    if (e.target.closest('[data-scroll-play]')) { e.preventDefault(); playHero(); return; }
    const add = e.target.closest('[data-add-id]');
    if (add) {
      const id = add.dataset.addId;
      addToCart(id, sizeOf(byId[id], state.sel[id]).id, 1, id === 'mix' ? $('#featureStage') : add);
      return;
    }
    const open = e.target.closest('[data-open-id]');
    if (open) openModal(open.dataset.openId);
  });
  $('#burger').addEventListener('click', () => ($('#mnav').classList.contains('is-open') ? closeMnav() : openMnav()));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeMnav(); }
  });
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    state.lang = b.dataset.lang;
    store.set('qz-lang', state.lang);
    applyLang();
  }));
  $$('.filters__btn').forEach((b) => b.addEventListener('click', () => {
    state.filter = b.dataset.filter;
    applyFilter(true);
  }));
  const header = $('#header');
  const onScroll = () => {
    const heroEnd = heroEl.offsetHeight - window.innerHeight * 1.05;
    header.classList.toggle('is-solid', window.scrollY > heroEnd);
    document.body.classList.toggle('in-hero', window.scrollY < heroEnd);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { movePill(); onScroll(); });
  onScroll();
}

function initContacts() {
  $('#ctMap').href = CONFIG.mapLink;
  $('#ctPhone').href = CONFIG.phoneHref;
  $('#ctPhone').textContent = CONFIG.phoneDisplay;
  const ig = `https://instagram.com/${CONFIG.instagram}`;
  $('#ctIg').href = ig;
  $('#ctIg').textContent = `@${CONFIG.instagram}`;
  $('#igLink').href = ig;
  $('#year').textContent = new Date().getFullYear();
  $('#mixPrice').textContent = fmt(byId.mix.sizes[0].price);
  // карту грузим, только когда до неё доскроллили
  const frame = $('#mapFrame');
  const io = new IntersectionObserver((en) => {
    if (en.some((x) => x.isIntersecting)) {
      frame.src = CONFIG.mapEmbed;
      io.disconnect();
    }
  }, { rootMargin: '600px' });
  io.observe(frame);
}

function applyLang() {
  document.documentElement.lang = state.lang === 'kz' ? 'kk' : 'ru';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $$('[data-lang]').forEach((b) => b.classList.toggle('is-on', b.dataset.lang === state.lang));
  $$('[data-wa-quick]').forEach((a) => { a.href = waLink(t('wa.quick')); });
  $('#ctAddr').textContent = CONFIG.address[state.lang];
  $('#ctHours').textContent = CONFIG.hours[state.lang];
  $('#cartBtn').setAttribute('aria-label', t('cart'));
  renderGrid();
  renderCart();
  if ($('#modal').classList.contains('is-open')) fillModal();
  requestAnimationFrame(movePill);
}

/* ------------------------------------------------------------------ */
/*  Старт                                                              */
/* ------------------------------------------------------------------ */
async function boot() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  bindGrid();
  bindCart();
  bindModal();
  bindHero();
  bindGlobal();
  bindTilt();
  initContacts();
  applyLang();
  $$('.reveal').forEach((el) => revealObserver.observe(el));

  const loader = $('#loader');
  const pct = $('#loaderPct');
  const bar = $('.loader__bar');
  let shown = 0, target = 6, loading = true;
  const tick = () => {
    shown += (target - shown) * 0.14;
    if (target - shown < 0.4) shown = target;
    pct.textContent = Math.round(shown);
    bar.style.setProperty('--p', (shown / 100).toFixed(3));
    if (loading) requestAnimationFrame(tick);
  };
  tick();

  const minTime = wait(reduced ? 300 : 2400);
  const fonts = document.fonts ? document.fonts.ready.catch(() => {}) : Promise.resolve();
  const ok = await initStage((p) => { target = Math.max(target, 8 + p * 84); });
  if (ok) attachCardViews();
  await Promise.all([minTime, fonts]);
  target = 100;
  await wait(reduced ? 50 : 500);

  if (stage) {
    stage.onFrame = updateHeroDom;
    stage.start();
  } else {
    const loop = () => { updateHeroDom(); requestAnimationFrame(loop); };
    loop();
  }
  await wait(60);
  loading = false;
  loader.classList.add('is-done');
  document.body.classList.remove('is-loading');
  stage?.startIntro();
  movePill();
  setTimeout(() => loader.classList.add('is-gone'), 1500);
}

boot();
