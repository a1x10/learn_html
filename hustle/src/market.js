import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CATS, catById, coverSVG, SEED } from './data.js';
import { store, ls, compressImage } from './store.js';
import { $, $$, esc, rub, ago, toast, openModal, closeModal, tilt, reduced } from './ui.js';

const MAX_IMG = 6;
const state = { type: 'all', cat: 'all', q: '', sort: 'new', mine: [] };
const respKey = 'hustle-responses';
const responses = () => ls.get(respKey, {});

const allLots = () => [...state.mine, ...SEED];
const respCount = (l) => (l.resp || 0) + (responses()[l.id]?.length || 0);
const cover = (l) => l.images?.[0] || coverSVG(l.id, catById(l.cat).hue, catById(l.cat).ic);

function filtered() {
  const q = state.q.trim().toLowerCase();
  let list = allLots().filter((l) => {
    if (state.type === 'mine' && l.seed) return false;
    if ((state.type === 'order' || state.type === 'service') && l.type !== state.type) return false;
    if (state.cat !== 'all' && l.cat !== state.cat) return false;
    if (q && !(l.title + ' ' + l.desc + ' ' + catById(l.cat).name).toLowerCase().includes(q)) return false;
    return true;
  });
  const by = {
    new: (a, b) => b.created - a.created,
    cheap: (a, b) => a.price - b.price,
    expensive: (a, b) => b.price - a.price,
    popular: (a, b) => respCount(b) - respCount(a),
  }[state.sort];
  return list.sort(by);
}

function cardHTML(l) {
  const c = catById(l.cat);
  return `<article class="lot" data-id="${esc(l.id)}" tabindex="0" role="button" aria-label="${esc(l.title)}, ${rub(l.price)}" style="--h:${c.hue}">
    <div class="lot__media">
      <img src="${cover(l)}" alt="" loading="lazy" decoding="async">
      <span class="lot__type lot__type--${l.type}">${l.type === 'order' ? 'Заказ' : 'Услуга'}</span>
      ${l.images?.length > 1 ? `<span class="lot__count">🖼 ${l.images.length}</span>` : ''}
      ${!l.seed ? '<span class="lot__mine">Мой</span>' : ''}
    </div>
    <div class="lot__body">
      <p class="lot__cat">${c.ic} ${esc(c.name)}${l.team ? ' · <b>команда</b>' : ''}</p>
      <h3 class="lot__title">${esc(l.title)}</h3>
      <div class="lot__meta">
        <span class="ava" style="--h:${(l.author.charCodeAt(0) * 7) % 360}">${esc(l.author[0] || '?')}</span>
        <span>${esc(l.author)}</span><span class="dot">·</span><span>${ago(l.created)}</span>
      </div>
      <div class="lot__foot">
        <b class="lot__price">${rub(l.price)}</b>
        <span class="lot__resp">${respCount(l)} откл. · ${esc(l.deadline)}</span>
      </div>
    </div>
    <span class="lot__shine" aria-hidden="true"></span>
  </article>`;
}

function render(animate = true) {
  const grid = $('#lotGrid');
  const list = filtered();
  grid.innerHTML = list.map(cardHTML).join('');
  $('#emptyState').hidden = list.length > 0;
  const cards = $$('.lot', grid);
  cards.forEach((c) => tilt(c, 6));
  if (animate && !reduced && cards.length) {
    gsap.fromTo(cards, { y: 60, opacity: 0, rotateX: -18, scale: 0.94 }, { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 0.8, ease: 'expo.out', stagger: 0.05, clearProps: 'transform,opacity' });
  }
  ScrollTrigger.refresh();
}

// ——— Вкладки и фильтры
function movePill() {
  const act = $('#typeTabs .tab.is-active'), pill = $('#typeTabs .tabs__pill');
  if (!act) return;
  pill.style.width = act.offsetWidth + 'px';
  pill.style.transform = `translateX(${act.offsetLeft}px)`;
}
function initFilters() {
  $('#typeTabs').addEventListener('click', (e) => {
    const b = e.target.closest('.tab'); if (!b) return;
    $$('#typeTabs .tab').forEach((t) => { t.classList.toggle('is-active', t === b); t.setAttribute('aria-selected', t === b); });
    state.type = b.dataset.type; movePill(); render();
  });
  addEventListener('resize', movePill);
  document.fonts?.ready.then(movePill); movePill();

  const catWrap = $('#catFilter');
  catWrap.innerHTML = `<button class="chip is-active" data-cat="all">Все категории</button>` +
    CATS.map((c) => `<button class="chip" data-cat="${c.id}" style="--h:${c.hue}">${c.ic} ${c.name}</button>`).join('');
  catWrap.addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b) return;
    $$('.chip', catWrap).forEach((c) => c.classList.toggle('is-active', c === b));
    state.cat = b.dataset.cat; render();
  });

  const heroChips = $('#heroChips');
  heroChips.innerHTML = CATS.slice(0, 5).map((c) => `<button type="button" class="chip chip--glass" data-cat="${c.id}">${c.ic} ${c.name}</button>`).join('');
  heroChips.addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b) return;
    $(`#catFilter .chip[data-cat="${b.dataset.cat}"]`).click();
    goMarket();
  });

  let t;
  $('#marketSearch').addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value; render(); }, 180); });
  $('#sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; render(); });
  $('#heroSearch').addEventListener('submit', (e) => {
    e.preventDefault();
    const q = new FormData(e.target).get('q') || '';
    $('#marketSearch').value = q; state.q = q; render(false); goMarket();
  });
}
function goMarket() {
  const el = $('#market');
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}

// ——— Карточка лота
function openLot(id) {
  const l = allLots().find((x) => x.id === id); if (!l) return;
  const c = catById(l.cat);
  const imgs = l.images?.length ? l.images : [cover(l)];
  const rs = responses()[l.id] || [];
  const panel = $('#lotPanel');
  panel.innerHTML = `
    <button class="modal__x" type="button" data-close aria-label="Закрыть">✕</button>
    <div class="gallery">
      <div class="gallery__main"><img id="galMain" src="${imgs[0]}" alt="${esc(l.title)}"></div>
      ${imgs.length > 1 ? `<div class="gallery__thumbs">${imgs.map((s, i) => `<button type="button" class="${i ? '' : 'is-on'}" data-i="${i}"><img src="${s}" alt="Изображение ${i + 1}"></button>`).join('')}</div>` : ''}
    </div>
    <div class="lotv">
      <p class="lot__cat">${c.ic} ${esc(c.name)} · ${l.type === 'order' ? 'Заказ' : 'Услуга'}${l.team ? ' · <b>ищут команду</b>' : ''}</p>
      <h2 class="modal__title" id="lotTitle">${esc(l.title)}</h2>
      <div class="lotv__stats">
        <div><small>Цена</small><b>${rub(l.price)}</b></div>
        <div><small>Срок</small><b>${esc(l.deadline)}</b></div>
        <div><small>Отклики</small><b id="lotResp">${respCount(l)}</b></div>
      </div>
      <p class="lotv__desc">${esc(l.desc).replace(/\n/g, '<br>')}</p>
      <div class="lot__meta"><span class="ava" style="--h:${(l.author.charCodeAt(0) * 7) % 360}">${esc(l.author[0] || '?')}</span><span>${esc(l.author)}</span><span class="dot">·</span><span>${ago(l.created)}</span></div>
      ${rs.length ? `<div class="resps"><p class="mono">Отклики из этого браузера</p>${rs.map((r) => `<div class="resp"><b>${esc(r.name)}</b>${r.price ? ` · ${rub(r.price)}` : ''}<p>${esc(r.msg)}</p></div>`).join('')}</div>` : ''}
      <form class="respond" id="respondForm">
        <p class="respond__h">${l.type === 'order' ? 'Откликнуться на заказ' : 'Заказать услугу'}</p>
        <div class="field-row">
          <label class="field"><span>Имя</span><input name="name" required maxlength="30" placeholder="Твоё имя"></label>
          <label class="field"><span>Твоя цена, ₽</span><input name="price" type="number" min="0" step="50" placeholder="${l.price}"></label>
        </div>
        <label class="field"><span>Сообщение</span><textarea name="msg" rows="3" required maxlength="600" placeholder="${l.type === 'order' ? 'Почему ты справишься, примеры работ, сроки' : 'Что нужно сделать'}"></textarea></label>
        <button class="btn btn--primary btn--block" type="submit"><span>Отправить отклик</span></button>
      </form>
      ${!l.seed ? `<button class="btn btn--danger btn--block" type="button" id="delLot"><span>Удалить мой лот</span></button>` : ''}
    </div>`;
  openModal($('#lotModal'));

  const main = $('#galMain', panel);
  $$('.gallery__thumbs button', panel).forEach((b) => b.addEventListener('click', () => {
    $$('.gallery__thumbs button', panel).forEach((x) => x.classList.toggle('is-on', x === b));
    if (reduced) { main.src = imgs[b.dataset.i]; return; }
    gsap.to(main, { opacity: 0, scale: 1.04, duration: 0.18, onComplete: () => { main.src = imgs[b.dataset.i]; gsap.to(main, { opacity: 1, scale: 1, duration: 0.35 }); } });
  }));

  $('#respondForm', panel).addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    if (!f.reportValidity()) return;
    const d = Object.fromEntries(new FormData(f));
    const all = responses();
    (all[l.id] ||= []).push({ name: d.name.trim(), msg: d.msg.trim(), price: d.price ? +d.price : 0, at: Date.now() });
    ls.set(respKey, all);
    toast('Отклик отправлен 🚀');
    closeModal($('#lotModal'));
    render(false);
  });

  $('#delLot', panel)?.addEventListener('click', async () => {
    if (!confirm('Удалить лот без возможности восстановления?')) return;
    await store.del(l.id);
    state.mine = state.mine.filter((x) => x.id !== l.id);
    closeModal($('#lotModal'));
    toast('Лот удалён');
    render();
  });
}
function initGrid() {
  const grid = $('#lotGrid');
  grid.addEventListener('click', (e) => { const c = e.target.closest('.lot'); if (c) openLot(c.dataset.id); });
  grid.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('lot')) { e.preventDefault(); openLot(e.target.dataset.id); }
  });
}

// ——— Создание лота
let files = [];
function renderThumbs() {
  const wrap = $('#thumbs');
  wrap.innerHTML = files.map((src, i) => `<div class="thumb" draggable="false"><img src="${src}" alt="Изображение ${i + 1}">${i === 0 ? '<span>обложка</span>' : ''}<button type="button" data-rm="${i}" aria-label="Удалить изображение">✕</button>${i ? `<button type="button" class="thumb__cover" data-cover="${i}" aria-label="Сделать обложкой">★</button>` : ''}</div>`).join('');
  $('#drop').classList.toggle('is-full', files.length >= MAX_IMG);
  if (!reduced) gsap.from($$('.thumb', wrap).slice(-1), { scale: 0.6, opacity: 0, duration: 0.5, ease: 'back.out(2)' });
}
async function addFiles(list) {
  const imgs = [...list].filter((f) => f.type.startsWith('image/'));
  if (!imgs.length) return toast('Можно загружать только изображения');
  const room = MAX_IMG - files.length;
  if (room <= 0) return toast(`Не больше ${MAX_IMG} изображений`);
  if (imgs.length > room) toast(`Добавлено ${room} из ${imgs.length} — лимит ${MAX_IMG}`);
  for (const f of imgs.slice(0, room)) {
    try { files.push(await compressImage(f)); renderThumbs(); } catch { toast(`Не удалось прочитать «${f.name}»`); }
  }
}
function initCreate() {
  const modal = $('#createModal'), form = $('#createForm'), drop = $('#drop'), input = $('#fileInput');
  $('#catSelect').innerHTML = CATS.map((c) => `<option value="${c.id}">${c.ic} ${c.name}</option>`).join('');

  document.addEventListener('click', (e) => {
    const o = e.target.closest('[data-open="create"]');
    if (o) { e.preventDefault(); openModal(modal); }
    const t = e.target.closest('[data-toast]');
    if (t) toast(t.dataset.toast);
  });

  input.addEventListener('change', () => { addFiles(input.files); input.value = ''; });
  ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('is-over'); }));
  ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('is-over'); }));
  drop.addEventListener('drop', (e) => addFiles(e.dataTransfer.files));
  form.addEventListener('paste', (e) => { const f = [...(e.clipboardData?.files || [])]; if (f.length) addFiles(f); });

  $('#thumbs').addEventListener('click', (e) => {
    const rm = e.target.closest('[data-rm]'), cv = e.target.closest('[data-cover]');
    if (rm) { files.splice(+rm.dataset.rm, 1); renderThumbs(); }
    if (cv) { const [x] = files.splice(+cv.dataset.cover, 1); files.unshift(x); renderThumbs(); }
  });

  const author = ls.get('hustle-name', '');
  if (author) form.author.value = author;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = $('#createError');
    err.textContent = '';
    if (!form.checkValidity()) {
      const bad = form.querySelector(':invalid');
      err.textContent = bad.name === 'price' ? 'Укажи цену от 100 ₽' : 'Заполни все поля';
      bad.focus();
      if (!reduced) gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const lot = {
      id: 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      type: d.type, cat: d.cat, title: d.title.trim(), price: Math.round(+d.price), deadline: d.deadline,
      author: d.author.trim(), desc: d.desc.trim(), team: !!d.team, images: files.slice(), created: Date.now(), resp: 0,
    };
    try { await store.put(lot); }
    catch { err.textContent = 'Не хватает места в браузере — убери часть картинок'; return; }
    ls.set('hustle-name', lot.author);
    state.mine.unshift(lot);
    files = []; renderThumbs();
    form.reset(); form.author.value = lot.author;
    closeModal(modal);
    toast('Лот опубликован 🎉');
    // показать свежий лот
    state.type = 'all'; state.cat = 'all'; state.q = ''; $('#marketSearch').value = '';
    $$('#typeTabs .tab').forEach((t) => t.classList.toggle('is-active', t.dataset.type === 'all'));
    $$('#catFilter .chip').forEach((c) => c.classList.toggle('is-active', c.dataset.cat === 'all'));
    $('#sortSelect').value = state.sort = 'new';
    movePill(); render(); goMarket();
    setTimeout(() => {
      const card = $(`.lot[data-id="${lot.id}"]`);
      card?.classList.add('is-new');
    }, 900);
  });
}

export async function initMarket() {
  initFilters(); initGrid(); initCreate();
  state.mine = (await store.all()).sort((a, b) => b.created - a.created);
  render(false);
  // первое появление карточек — по скроллу
  if (!reduced) {
    gsap.set('#lotGrid .lot', { opacity: 0 });
    ScrollTrigger.create({
      trigger: '#lotGrid', start: 'top 85%', once: true,
      onEnter: () => gsap.fromTo('#lotGrid .lot', { y: 80, opacity: 0, rotateX: -25 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.07, ease: 'expo.out', clearProps: 'transform,opacity' }),
    });
  }
}
