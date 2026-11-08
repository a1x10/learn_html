// Регистрация, профиль и баланс.
// Пока без сервера: профиль и демо-баланс живут в localStorage этого браузера.
import gsap from 'gsap';
import { CATS } from './data.js';
import { ls } from './store.js';
import { $, $$, esc, rub, ago, toast, openModal, closeModal, reduced } from './ui.js';

const KEY = 'hustle-account';
const MIN = 100;
let acct = ls.get(KEY, null);
let afterAuth = null;
let moneyMode = 'in';

const save = () => ls.set(KEY, acct);
export const getAccount = () => acct;
const hue = (s) => ((s || '?').charCodeAt(0) * 7) % 360;

// ——— Шапка
function renderHeader(bump) {
  const btn = $('#acctBtn');
  if (!acct) {
    btn.classList.remove('is-in');
    btn.innerHTML = '<span class="acct__label">Войти</span>';
    btn.setAttribute('aria-label', 'Регистрация');
    return;
  }
  btn.classList.add('is-in');
  btn.setAttribute('aria-label', `Профиль и баланс: ${rub(acct.balance)}`);
  btn.innerHTML = `<span class="ava" style="--h:${hue(acct.name)}">${esc(acct.name[0])}</span><span class="acct__bal">${rub(acct.balance)}</span>`;
  if (bump && !reduced) gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
}

// ——— Регистрация
function initAuth() {
  const form = $('#authForm');
  $('#skillPick').innerHTML = CATS.map((c) => `<label class="skill"><input type="checkbox" name="skills" value="${c.id}"><span>${c.ic} ${c.name}</span></label>`).join('');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const err = $('#authError');
    err.textContent = '';
    if (!form.checkValidity()) {
      const bad = form.querySelector(':invalid');
      err.textContent = bad.name === 'agree' ? 'Нужно согласие с правилами' : 'Заполни имя и контакт';
      bad.focus();
      return;
    }
    const d = new FormData(form);
    acct = {
      name: d.get('name').trim(), contact: d.get('contact').trim(), skills: d.getAll('skills'),
      balance: 0, history: [], created: Date.now(),
    };
    save();
    ls.set('hustle-name', acct.name);
    const author = $('#createForm [name=author]');
    if (author) author.value = acct.name;
    renderHeader(true);
    closeModal($('#authModal'));
    toast(`Добро пожаловать, ${acct.name}! 🎉`);
    const next = afterAuth; afterAuth = null;
    if (next) setTimeout(next, 450);
  });
}
export function requireAuth(next) {
  if (acct) return true;
  afterAuth = next;
  openModal($('#authModal'));
  return false;
}

// ——— Профиль и баланс
function renderWallet() {
  const p = $('#walletPanel');
  const skills = CATS.filter((c) => acct.skills.includes(c.id));
  p.innerHTML = `
    <button class="modal__x" type="button" data-close aria-label="Закрыть">✕</button>
    <div class="prof">
      <span class="ava ava--xl" style="--h:${hue(acct.name)}">${esc(acct.name[0])}</span>
      <div><h2 class="modal__title" id="walletTitle">${esc(acct.name)}</h2><p class="prof__contact">${esc(acct.contact)}</p></div>
    </div>
    ${skills.length ? `<div class="prof__skills">${skills.map((c) => `<span class="chip">${c.ic} ${c.name}</span>`).join('')}</div>` : ''}
    <div class="wallet">
      <div class="wallet__glow" aria-hidden="true"></div>
      <p class="wallet__label mono">Баланс <span class="wallet__demo">демо</span></p>
      <p class="wallet__sum" id="walletSum">${rub(acct.balance)}</p>
      <div class="wallet__btns">
        <button class="btn btn--primary" type="button" data-money="in"><span>＋ Пополнить</span></button>
        <button class="btn btn--ghost" type="button" data-money="out"><span>↗ Вывести</span></button>
      </div>
    </div>
    <div class="hist">
      <p class="hist__h">История операций</p>
      ${acct.history.length ? acct.history.slice(0, 20).map((h) => `
        <div class="hist__row">
          <span class="hist__ic hist__ic--${h.type}">${h.type === 'in' ? '↓' : '↑'}</span>
          <div><b>${h.type === 'in' ? 'Пополнение' : 'Вывод'}</b><small>${METHODS[h.method]} · ${ago(h.at)}</small></div>
          <span class="hist__sum hist__sum--${h.type}">${h.type === 'in' ? '+' : '−'}${rub(h.amount)}</span>
        </div>`).join('') : '<p class="hist__empty">Операций пока нет</p>'}
    </div>
    <button class="btn btn--danger btn--block" type="button" id="logout"><span>Выйти из профиля</span></button>`;
  if (!reduced) {
    const o = { v: 0 }, el = $('#walletSum', p);
    gsap.to(o, { v: acct.balance, duration: 1.2, ease: 'expo.out', onUpdate: () => { el.textContent = rub(Math.round(o.v)); } });
    gsap.from($$('.hist__row', p), { x: -20, opacity: 0, stagger: 0.05, duration: 0.5, delay: 0.2 });
  }
  $('#logout', p).addEventListener('click', () => {
    if (!confirm('Выйти из профиля? Демо-баланс и история будут удалены из этого браузера.')) return;
    acct = null; ls.set(KEY, null);
    renderHeader(); closeModal($('#walletModal'));
    toast('Ты вышел из профиля');
  });
}
const METHODS = { card: 'Карта', sbp: 'СБП', crypto: 'Крипта' };

function openMoney(mode) {
  moneyMode = mode;
  const f = $('#moneyForm');
  f.reset(); $('#moneyError').textContent = '';
  $('#moneyTitle').textContent = mode === 'in' ? 'Пополнение баланса' : 'Вывод средств';
  $('#moneySub').textContent = mode === 'in'
    ? `Минимальная сумма — ${rub(MIN)}.`
    : `Доступно к выводу: ${rub(acct.balance)}. Минимум — ${rub(MIN)}.`;
  $('#moneyBtn').textContent = mode === 'in' ? 'Пополнить' : 'Вывести';
  const sums = mode === 'in' ? [500, 1000, 2500, 5000] : [500, 1000, 'all'];
  $('#quickSums').innerHTML = sums.map((v) => `<button type="button" class="chip" data-sum="${v}">${v === 'all' ? 'Всё' : rub(v)}</button>`).join('');
  openModal($('#moneyModal'));
}

function initWallet() {
  $('#acctBtn').addEventListener('click', () => {
    if (!acct) return requireAuth(() => openWallet());
    openWallet();
  });
  document.addEventListener('click', (e) => {
    const m = e.target.closest('[data-money]');
    if (m) openMoney(m.dataset.money);
    const q = e.target.closest('[data-sum]');
    if (q) {
      const f = $('#moneyForm');
      f.amount.value = q.dataset.sum === 'all' ? acct.balance : q.dataset.sum;
      $$('#quickSums .chip').forEach((c) => c.classList.toggle('is-active', c === q));
    }
  });
  $('#moneyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target, err = $('#moneyError');
    const amount = Math.floor(+f.amount.value);
    err.textContent = '';
    if (!amount || amount < MIN) { err.textContent = `Минимальная сумма — ${rub(MIN)}`; return; }
    if (moneyMode === 'out' && amount > acct.balance) { err.textContent = 'Недостаточно средств на балансе'; return; }
    if (amount > 1e6) { err.textContent = 'Слишком большая сумма'; return; }
    acct.balance += moneyMode === 'in' ? amount : -amount;
    acct.history.unshift({ type: moneyMode, amount, method: f.method.value, at: Date.now() });
    save();
    renderHeader(true);
    closeModal($('#moneyModal'));
    toast(moneyMode === 'in' ? `Баланс пополнен на ${rub(amount)} (демо)` : `Заявка на вывод ${rub(amount)} создана (демо)`);
    if (!$('#walletModal').hidden) renderWallet();
  });
}
function openWallet() { renderWallet(); openModal($('#walletModal')); }

export function initAccount() {
  initAuth(); initWallet(); renderHeader();
}
