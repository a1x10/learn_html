import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONFIG } from '../config.js';
import { env } from './core.js';

const fmt = (n) => Math.round(n).toLocaleString('ru-RU');
const dateRu = (iso) => new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', timeZone: 'Europe/Moscow' }).format(new Date(iso));

// ——— бегущая строка: скорость и направление зависят от скролла ———
export function initMarquee(lenis) {
  const rows = [];
  document.querySelectorAll('.marquee__row').forEach((row) => {
    const track = row.querySelector('.marquee__track');
    let guard = 0;
    while (row.scrollWidth < window.innerWidth * 2.4 && guard++ < 6) {
      const c = track.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      row.appendChild(c);
    }
    const tracks = row.querySelectorAll('.marquee__track');
    const dir = Number(row.dataset.marquee) || 1;
    const tween = gsap.fromTo(
      tracks,
      { xPercent: dir > 0 ? 0 : -100 },
      { xPercent: dir > 0 ? -100 : 0, duration: dir > 0 ? 26 : 34, ease: 'none', repeat: -1 }
    );
    rows.push({ row, tween, skew: gsap.quickTo(row, 'skewX', { duration: 0.5, ease: 'power3' }) });
  });
  if (env.reduced) {
    rows.forEach((r) => r.tween.pause());
    return;
  }
  let scale = 1;
  let sign = 1;
  lenis?.on('scroll', ({ velocity, direction }) => {
    if (direction) sign = direction;
    scale = 1 + Math.min(Math.abs(velocity) * 0.18, 6);
    rows.forEach((r) => r.skew(gsap.utils.clamp(-7, 7, velocity * -0.25)));
  });
  gsap.ticker.add(() => {
    scale += (1 - scale) * 0.05;
    rows.forEach((r) => r.tween.timeScale(sign * scale));
  });
}

// ——— вопросы: плавное раскрытие ———
export function initFaq() {
  document.querySelectorAll('.qa').forEach((d) => {
    const summary = d.querySelector('summary');
    const body = d.querySelector('.qa__body');
    summary.addEventListener('click', (e) => {
      if (env.reduced) return;
      e.preventDefault();
      gsap.killTweensOf(body);
      if (d.open) {
        gsap.fromTo(body, { height: body.offsetHeight }, {
          height: 0,
          duration: 0.5,
          ease: 'power3.inOut',
          onComplete: () => {
            d.open = false;
            body.style.height = '';
            ScrollTrigger.refresh();
          },
        });
      } else {
        d.open = true;
        gsap.fromTo(body, { height: 0 }, {
          height: 'auto',
          duration: 0.65,
          ease: 'power3.out',
          onComplete: () => {
            body.style.height = '';
            ScrollTrigger.refresh();
          },
        });
        gsap.fromTo(body.querySelector('p'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: 'power2.out' });
      }
    });
  });
}

// ——— тарифы: «сразу / частями» и таймер ранней цены ———
export function initPricing() {
  const toggle = document.querySelector('.toggle');
  if (!toggle) return;
  const btns = [...toggle.querySelectorAll('[data-pay]')];
  const set = (mode) => {
    btns.forEach((b) => {
      const on = b.dataset.pay === mode;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    toggle.classList.toggle('is-month', mode === 'month');
    document.querySelectorAll('.plan').forEach((plan) => {
      const price = plan.querySelector('.price');
      const unit = plan.querySelector('.plan__unit');
      const hint = plan.querySelector('.plan__hint');
      const old = plan.querySelector('.plan__old');
      const to = Number(price.dataset[mode]);
      const from = Number(price.dataset.current || price.dataset.full);
      price.dataset.current = to;
      const o = { v: from };
      gsap.to(o, { v: to, duration: env.reduced ? 0 : 0.9, ease: 'power3.out', onUpdate: () => (price.textContent = fmt(o.v)) });
      unit.textContent = mode === 'month' ? '₽/мес' : '₽';
      hint.textContent = mode === 'month' ? hint.dataset.monthHint : hint.dataset.fullHint;
      gsap.to(old, { opacity: mode === 'month' ? 0 : 1, duration: 0.4 });
    });
  };
  btns.forEach((b) => b.addEventListener('click', () => set(b.dataset.pay)));

  const box = document.querySelector('[data-countdown]');
  const end = new Date(CONFIG.earlyBirdUntil).getTime();
  const parts = {};
  box?.querySelectorAll('[data-cd]').forEach((b) => (parts[b.dataset.cd] = b));
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const d = end - Date.now();
    if (!box) return;
    if (d <= 0) {
      box.querySelector('.pricing__timer-label').textContent = 'Старт потока';
      box.querySelector('.pricing__timer-value').textContent = dateRu(CONFIG.startDate);
      clearInterval(id);
      return;
    }
    parts.d.textContent = pad(Math.floor(d / 864e5));
    parts.h.textContent = pad(Math.floor((d / 36e5) % 24));
    parts.m.textContent = pad(Math.floor((d / 6e4) % 60));
    parts.s.textContent = pad(Math.floor((d / 1e3) % 60));
  };
  const id = setInterval(tick, 1000);
  tick();
}

export function initDates() {
  const label = dateRu(CONFIG.startDate);
  document.querySelectorAll('[data-start-date]').forEach((el) => {
    el.textContent = label;
    el.setAttribute('datetime', CONFIG.startDate.slice(0, 10));
  });
  if (CONFIG.telegram) document.querySelectorAll('[data-tg-link]').forEach((a) => (a.href = `https://t.me/${CONFIG.telegram}`));
  document.querySelectorAll('[data-policy]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
}

// ——— запись: палитра + форма ———
export function initForm(palette) {
  const form = document.getElementById('apply-form');
  const done = document.querySelector('.form-done');
  if (!form) return;
  const err = form.querySelector('.form__error');
  const chipsBox = document.querySelector('[data-palette]');
  const shadeName = document.querySelector('[data-shade-name]');
  let shade = 0;

  CONFIG.shades.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'swatch';
    b.style.setProperty('--c', s.color);
    b.setAttribute('aria-label', `${s.name}, ${s.ru}`);
    b.setAttribute('aria-pressed', String(i === 0));
    b.addEventListener('click', () => {
      shade = i;
      chipsBox.querySelectorAll('.swatch').forEach((x, j) => x.setAttribute('aria-pressed', String(j === i)));
      shadeName.textContent = s.name;
      gsap.fromTo(shadeName, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
      palette?.select(i);
    });
    chipsBox?.appendChild(b);
  });

  document.querySelectorAll('a[data-plan]').forEach((a) =>
    a.addEventListener('click', () => {
      const r = form.querySelector(`input[name="plan"][value="${a.dataset.plan}"]`);
      if (r) r.checked = true;
    })
  );

  const fields = form.elements;
  const showError = (msg, bad) => {
    err.textContent = msg;
    err.hidden = false;
    bad.forEach((el) => el.classList.add('is-invalid'));
    if (!env.reduced) gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
  };
  form.addEventListener('input', (e) => {
    e.target.classList?.remove('is-invalid');
    e.target.closest('.check')?.classList.remove('is-invalid');
    err.hidden = true;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = fields['name'].value.trim();
    const contact = fields['contact'].value.trim();
    const plan = form.querySelector('input[name="plan"]:checked')?.value || 'Ещё не решила';
    const agree = fields['agree'].checked;
    const digits = contact.replace(/\D/g, '');
    const okContact = digits.length >= 10 || /^@?[a-zA-Z0-9_]{4,}$/.test(contact.replace('https://t.me/', ''));
    const bad = [];
    if (name.length < 2) bad.push(fields['name']);
    if (!okContact) bad.push(fields['contact']);
    if (!agree) bad.push(form.querySelector('.check'));
    if (bad.length) {
      showError(
        name.length < 2
          ? 'Напишите, как к вам обращаться.'
          : !okContact
            ? 'Укажите телефон (10+ цифр) или ник в Telegram.'
            : 'Поставьте галочку согласия, чтобы мы могли связаться с вами.',
        bad
      );
      return;
    }
    const shadeObj = CONFIG.shades[shade];
    const text = `Здравствуйте! Хочу на курс ${CONFIG.brand}.\nИмя: ${name}\nКонтакт: ${contact}\nТариф: ${plan}\nЛюбимый оттенок: ${shadeObj.name}`;
    let sent = false;
    if (CONFIG.formEndpoint) {
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, contact, plan, shade: shadeObj.name }),
        });
        sent = res.ok;
      } catch (_) {
        sent = false;
      }
    }
    const link = done.querySelector('[data-done-link]');
    done.querySelector('[data-done-name]').textContent = name;
    const txt = done.querySelector('[data-done-text]');
    if (sent) {
      txt.textContent = 'Мы получили заявку и напишем вам в течение дня.';
      link.hidden = true;
    } else if (CONFIG.telegram) {
      txt.textContent = 'Отправьте её нам в Telegram одним нажатием: сообщение уже заполнено.';
      link.href = `https://t.me/${CONFIG.telegram}?text=${encodeURIComponent(text)}`;
      link.hidden = false;
    } else if (CONFIG.whatsapp) {
      txt.textContent = 'Отправьте её нам в WhatsApp одним нажатием: сообщение уже заполнено.';
      link.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
      link.querySelector('.btn__label').textContent = 'Открыть WhatsApp';
      link.hidden = false;
    }
    form.hidden = true;
    done.hidden = false;
    if (!env.reduced) gsap.fromTo(done, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out' });
    palette?.celebrate?.();
    ScrollTrigger.refresh();
  });

  done?.querySelector('[data-done-again]')?.addEventListener('click', () => {
    done.hidden = true;
    form.hidden = false;
    ScrollTrigger.refresh();
  });
}

// ——— отзывы: бесконечные колонки ———
export function initReviews() {
  document.querySelectorAll('.reviews__col').forEach((col) => {
    const stack = col.querySelector('.reviews__stack');
    [...stack.children].forEach((c) => {
      const k = c.cloneNode(true);
      k.setAttribute('aria-hidden', 'true');
      stack.appendChild(k);
    });
    stack.style.setProperty('--dur', (col.dataset.speed || 40) + 's');
  });
}

// ——— круглая печать у фото автора ———
export function initStamp() {
  const el = document.querySelector('.author__stamp');
  if (!el) return;
  const text = el.textContent.trim() + ' ';
  el.setAttribute('aria-hidden', 'true');
  el.textContent = '';
  const chars = [...text];
  chars.forEach((ch, i) => {
    const s = document.createElement('span');
    s.textContent = ch;
    s.style.transform = `rotate(${(i / chars.length) * 360}deg)`;
    el.appendChild(s);
  });
}
