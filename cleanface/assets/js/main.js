/* =========================================================
   CLEANFACE — main interactions
   ========================================================= */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     DATA
     --------------------------------------------------------- */
  const SERVICES = [
    { img: "facade-rope", price: 400,
      ru: ["Мытьё фасадов", "Промышленный альпинизм, автовышки и WFP — для зданий любой высоты."],
      en: ["Facade washing", "Rope access, aerial lifts and WFP — for buildings of any height."] },
    { img: "wfp-glass", price: 400,
      ru: ["Мытьё витражей", "Стеклянные фасады и витражи без разводов — очищенной водой, без химии."],
      en: ["Curtain wall glass", "Glass facades and stained glass without streaks — pure water, no chemicals."] },
    { img: "cottage-facade", price: 450,
      ru: ["Мытьё фасадов коттеджей", "Частные дома: фасад, окна, остекление террас и зимних садов."],
      en: ["Cottage facades", "Private houses: facade, windows, terraces and winter gardens."] },
    { img: "vitrine", price: 500,
      ru: ["Мытьё окон и витрин", "Окна, витрины магазинов и бутиков — разово или по графику."],
      en: ["Windows & shop fronts", "Windows, shop and boutique fronts — one-off or on a schedule."] },
    { img: "apartment", price: 500,
      ru: ["Уборка коттеджей, квартир, офисов", "Комплексная уборка помещений по мировым стандартам качества."],
      en: ["Houses, flats & offices", "Complete interior cleaning to international quality standards."] },
    { img: "parking", price: 500,
      ru: ["Уборка паркингов", "Подземные и наземные паркинги 24/7, вместе с прилегающей территорией."],
      en: ["Parking garages", "Underground and surface parking 24/7, including the surrounding area."] },
    { img: "floor", price: 500,
      ru: ["Чистка напольных покрытий", "Профессиональная техника и средства для твёрдых покрытий."],
      en: ["Floor care", "Professional machines and products for hard floors."] },
    { img: "dome", price: 500,
      ru: ["Натяжные конструкции, тенты, купола", "Чистка мембранных кровель, тентов и куполов с автовышки."],
      en: ["Tensile structures, tents, domes", "Membrane roofs, awnings and domes cleaned from aerial lifts."] },
    { img: "mats", price: 0,
      ru: ["Грязезащитные покрытия", "Комплекс из трёх типов покрытий задерживает грязь на входе — полы остаются чистыми."],
      en: ["Entrance matting systems", "A three-zone matting system stops dirt at the door — floors stay clean."] },
  ];

  const COMPARE = [
    { ru: ["Умеренные цены", "Мы — непосредственный исполнитель, без наценки посредника.", "Заказ перепродают бригаде — вы платите за цепочку."],
      en: ["Fair prices", "We are the direct contractor — no middleman mark-up.", "The order is resold to a crew — you pay for the chain."] },
    { ru: ["Любая сложность", "Здания любой высоты и любая степень загрязнения.", "Берутся только за простое и «до третьего этажа»."],
      en: ["Any complexity", "Buildings of any height, any level of dirt.", "Only easy jobs, “up to the third floor”."] },
    { ru: ["Безопасные средства", "Экологически чистая химия, которая не вредит среде.", "Агрессивные средства, следы на стекле и рамах."],
      en: ["Safe products", "Eco-friendly chemicals that don’t harm the environment.", "Harsh chemicals, marks on glass and frames."] },
    { ru: ["Точно в срок", "Короткие сроки — и всё всегда вовремя.", "Сроки «плывут», объект простаивает."],
      en: ["Always on time", "Short lead times — and always on schedule.", "Deadlines slip, your building waits."] },
    { ru: ["Прозрачная смета", "Считаем индивидуально — вы видите, на что идут деньги.", "Цена «на глаз» и доплаты по ходу работ."],
      en: ["Transparent estimate", "Calculated individually — you see where the money goes.", "A guessed price and extras along the way."] },
    { ru: ["Плата за результат", "Стартуем после 50% предоплаты, остальное — по факту.", "100% вперёд, а за качество никто не отвечает."],
      en: ["Pay for results", "We start after a 50% deposit, the rest on completion.", "100% upfront and nobody owns the quality."] },
  ];

  const EN = {
    "nav.home": "Home", "nav.services": "Services", "nav.why": "Why us", "nav.contact": "Contact", "nav.cta": "Request",
    "hero.l2": "Crystal", "hero.l3": "Facades",
    "hero.tag": "Cleaning technology<br>centre: facades, windows<br>and glass in Almaty.",
    "hero.explore": "Explore services",
    "hero.cap": "Clean you can see<br>from the street",
    "latest.title": "Our<br>latest<br>projects",
    "latest.sub": "Real photos from Cleanface sites: rope access, Water Fed Pole and parking cleaning.",
    "latest.c1": "Facade washing", "latest.c1s": "rope access", "latest.c2": "Glass walls", "latest.c3": "Parking",
    "wipe.h1": "Crystal", "wipe.h2": "clear.",
    "wipe.lead": "Water Fed Pole — purified water and telescopic poles. Glass dries on its own: no chemicals, no streaks.",
    "wipe.chip": "Glass cleaning · WFP", "wipe.meter": "Clean", "wipe.hint": "Scroll — the glass gets clean",
    "wipe.after": "This is what windows look like after Cleanface. Not a drop, not a streak — just the view.",
    "why.eyebrow": "Why us", "why.title": "Why <em>Cleanface</em><br>and not<br>someone else?",
    "why.lead": "We are not a broker reselling your order to a crew. We clean, estimate and take responsibility ourselves — to the standards of the International Building Care Institute.",
    "p1.fact": "Training", "p1.t": "Professionalism", "p1.d": "Our team trains continuously — knowledge and skills grow together with industry standards.",
    "p2.fact": "First in KZ", "p2.t": "Innovation", "p2.d": "The first in Kazakhstan to master and roll out Water Fed Pole (WFP) window cleaning.",
    "p3.t": "Reputation", "p3.d": "Reference letters and client reviews, a Professional Cleaning Guild certificate.",
    "p4.fact": "0 middlemen", "p4.t": "Honest price", "p4.d": "The best quality-to-price ratio: no intermediaries — you pay the contractor directly.",
    "cmp.title": "Cleanface vs “the usual”", "cmp.them": "Usually",
    "svc.eyebrow": "Services & prices", "svc.title": "Every <em>Cleanface</em><br>service",
    "svc.lead": "Private and corporate clients all over Kazakhstan. Any complexity, any level of dirt — every estimate is individual.",
    "svc.note": "We also supply and sell professional products for cleaning and building care.",
    "strip": "We work at any height",
    "proc.eyebrow": "How we work", "proc.title": "Four steps<br>to <em>clean</em>",
    "s1.t": "Request", "s1.d": "Leave a request through the simple form on the site or give us a call.",
    "s2.t": "Free survey", "s2.d": "Our surveyor visits for free and makes an exact calculation.",
    "s3.t": "50% deposit", "s3.d": "Cash or bank transfer — whatever suits you.",
    "s4.t": "Work & payment", "s4.d": "We finish on the agreed date, the balance is paid after the result.",
    "trust.eyebrow": "Reputation", "trust.title": "Clients trust us<br>and write about it",
    "trust.lead": "A Professional Cleaning Guild certificate and reference letters from clients and partners. Tap a document to take a closer look.",
    "doc.1": "Reference letter", "doc.2": "Professional Cleaning Guild certificate", "doc.3": "Reference letter",
    "ct.eyebrow": "Contact", "ct.title": "Clean glass brings<br>you <em>more</em><br>clients",
    "ct.phone": "Phone · Mikhail", "ct.phone2": "Phone", "ct.addr": "Address", "ct.addrv": "123 Shevchenko St, Almaty",
    "ct.hours": "Hours", "ct.hoursv": "Mon–Fri 10:00–18:00",
    "f.title": "Order cleaning", "f.name": "Name", "f.name_ph": "Your name", "f.phone": "Phone", "f.service": "Service",
    "f.area": "Area, m² (approx.)", "f.msg": "Comment", "f.msg_ph": "Address, number of floors, a good time for the survey",
    "f.send": "Send request",
    "f.note": "The request opens in your mail app as a ready email to idir.cleanface@yandex.kz. The survey is free.",
    "ft.l": "© Cleanface · Cleaning technology centre", "ft.r": "Almaty, Kazakhstan",
    "fab.call": "Call", "fab.cta": "Request",
    "nav.process": "Process",
    "badge": "FIRST IN KAZAKHSTAN · WATER FED POLE · ",
    "st.from": "from", "st.1": "per m² — facade and glass washing", "st.2": "parking cleaning — one-off or scheduled",
    "st.3": "deposit, the rest after the result", "st.4s": "st", "st.4": "in Kazakhstan to master Water Fed Pole cleaning",
    "mq.1": "Facades", "mq.2": "glass walls", "mq.3": "Windows", "mq.4": "parking", "mq.5": "Domes", "mq.6": "cottages",
    "fog.eyebrow": "Try it yourself", "fog.title": "Your windows could<br>look <em>like this</em>",
    "fog.lead": "Survey and estimate are free. We come, calculate and clean — no middlemen, no streaks.",
    "fog.cta": "Get a quote", "fog.hint": "Wipe the foggy glass",
  };
  const UI = {
    ru: { from: "от", unit: "₸/м²", onRequest: "по запросу", price: "Цена", any: "Другое / несколько услуг",
          subj: "Заявка с сайта", fields: ["Имя", "Телефон", "Услуга", "Площадь, м²", "Комментарий"] },
    en: { from: "from", unit: "₸/m²", onRequest: "on request", price: "Price", any: "Other / several services",
          subj: "Website request", fields: ["Name", "Phone", "Service", "Area, m²", "Comment"] },
  };

  let lang = "ru";
  const RU = {};

  /* ---------------------------------------------------------
     WORD SPLITTER
     --------------------------------------------------------- */
  // Line-aware splitter: every <br> starts a new block line
  function splitEl(el, quick) {
    if (!el.hasAttribute("data-lines")) return splitPlain(el, quick);
    const start = quick ? 0.05 : parseFloat(el.dataset.start || 0);
    const step = quick ? 0.05 : parseFloat(el.dataset.step || 0.06);
    const dur = el.dataset.dur || 0.7;
    const parts = el.dataset.src.split(/<br\s*\/?>/i);
    let i = 0;
    el.innerHTML = "";
    parts.forEach((html) => {
      const line = document.createElement("span");
      line.className = "t-line";
      const tmp = document.createElement("div");
      tmp.innerHTML = html.trim();
      const walk = (node, parent) => {
        node.childNodes.forEach((ch) => {
          if (ch.nodeType === 3) {
            ch.textContent.split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) { parent.appendChild(document.createTextNode(" ")); return; }
              const w = document.createElement("span");
              w.className = "w";
              w.textContent = part;
              w.style.setProperty("--d", (start + i * step).toFixed(2) + "s");
              w.style.setProperty("--dur", dur + "s");
              parent.appendChild(w);
              i++;
            });
          } else if (ch.nodeType === 1) {
            const c = ch.cloneNode(false);
            parent.appendChild(c);
            walk(ch, c);
          }
        });
      };
      walk(tmp, line);
      el.appendChild(line);
    });
  }

  function splitPlain(el, quick) {
    const start = quick ? 0.05 : parseFloat(el.dataset.start || 0);
    const step = quick ? 0.035 : parseFloat(el.dataset.step || 0.06);
    const dur = el.dataset.dur || 0.7;
    const tmp = document.createElement("div");
    tmp.innerHTML = el.dataset.src;
    let i = 0;
    const walk = (node, parent) => {
      node.childNodes.forEach((ch) => {
        if (ch.nodeType === 3) {
          ch.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { parent.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span");
            w.className = "w";
            w.textContent = part;
            w.style.setProperty("--d", (start + i * step).toFixed(2) + "s");
            w.style.setProperty("--dur", dur + "s");
            parent.appendChild(w);
            i++;
          });
        } else if (ch.nodeName === "BR") {
          parent.appendChild(document.createElement("br"));
        } else if (ch.nodeType === 1) {
          const c = ch.cloneNode(false);
          parent.appendChild(c);
          walk(ch, c);
        }
      });
    };
    el.innerHTML = "";
    walk(tmp, el);
  }

  const doSplit = (el, quick) => (el.hasAttribute("data-lines") ? splitEl(el, quick) : splitPlain(el, quick));

  /* ---------------------------------------------------------
     I18N
     --------------------------------------------------------- */
  $$("[data-i18n]").forEach((el) => {
    RU[el.dataset.i18n] = el.innerHTML.trim();
    if (el.hasAttribute("data-split")) el.dataset.src = el.innerHTML.trim();
  });
  $$("[data-i18n-ph]").forEach((el) => { RU[el.dataset.i18nPh] = el.placeholder; });
  $$("[data-split]").forEach((el) => doSplit(el, false));

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    document.documentElement.lang = lang;
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const html = lang === "ru" ? RU[key] : (EN[key] ?? RU[key]);
      if (el.hasAttribute("data-split")) { el.dataset.src = html; doSplit(el, true); return; }
      el.innerHTML = html;
      if (el.classList.contains("w")) { // replay single-word animation quickly
        el.style.animation = "none"; void el.offsetWidth;
        el.style.animation = "wordIn .7s var(--ease-word) .05s both";
      }
    });
    $$("[data-i18n-ph]").forEach((el) => {
      el.placeholder = lang === "ru" ? RU[el.dataset.i18nPh] : (EN[el.dataset.i18nPh] ?? RU[el.dataset.i18nPh]);
    });
    renderServices(); renderCompare(); renderSelect();
    document.dispatchEvent(new CustomEvent("cf:lang", { detail: lang }));
    try { localStorage.setItem("cf-lang", lang); } catch (e) {}
  }
  $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------------------------------------------------------
     SERVICES / COMPARE / SELECT
     --------------------------------------------------------- */
  const svcList = $("#svcList");
  const svcFloat = $("#svcFloat");
  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';

  svcFloat.innerHTML = SERVICES.map((s) => `<img src="assets/img/${s.img}.jpg" alt="" loading="lazy">`).join("");
  const floatImgs = $$("img", svcFloat);

  function priceHTML(s) {
    const u = UI[lang];
    return s.price ? `<small>${u.from}</small>${s.price} ${u.unit}` : `<small>${u.price}</small>${u.onRequest}`;
  }

  function renderServices() {
    svcList.innerHTML = SERVICES.map((s, i) => `
      <div class="svc rv" style="--d:${(i * 0.06).toFixed(2)}s" tabindex="0" role="button" data-i="${i}">
        <span class="svc__n">${String(i + 1).padStart(2, "0")}</span>
        <span class="svc__thumb"><img src="assets/img/${s.img}.jpg" alt="" loading="lazy"></span>
        <span class="svc__name">${s[lang][0]}</span>
        <span class="svc__desc">${s[lang][1]}</span>
        <span class="svc__price">${priceHTML(s)}</span>
        <span class="svc__go" aria-hidden="true">${arrow}</span>
      </div>`).join("");
  }

  function renderCompare() {
    const yes = '<span class="mark mark--yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>';
    const no = '<span class="mark mark--no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></span>';
    $("#compareRows").innerHTML = COMPARE.map((c, i) => {
      const [t, us, them] = c[lang];
      return `<div class="c-row rv" style="--d:${(0.1 + i * 0.08).toFixed(2)}s">
        <span class="c-row__n">0${i + 1}</span>
        <div class="c-row__us">${yes}<div><b>${t}</b><small>${us}</small></div></div>
        <div class="c-row__them">${no}<span>${them}</span></div>
      </div>`;
    }).join("");
  }

  const select = $("#formService");
  function renderSelect() {
    const cur = select.value;
    select.innerHTML = SERVICES.map((s, i) => `<option value="${i}">${s[lang][0]}</option>`).join("") +
      `<option value="x">${UI[lang].any}</option>`;
    if (cur) select.value = cur;
  }

  renderServices(); renderCompare(); renderSelect();

  // floating preview image (desktop)
  let fx = innerWidth / 2, fy = innerHeight / 2, tx = fx, ty = fy, floatOn = false, lastI = -1;
  if (finePointer) {
    svcList.addEventListener("pointermove", (e) => {
      tx = e.clientX; ty = e.clientY;
      const row = e.target.closest(".svc");
      if (!row) return;
      const i = +row.dataset.i;
      if (i !== lastI) { floatImgs.forEach((im, k) => im.classList.toggle("is-on", k === i)); lastI = i; }
      if (!floatOn) { floatOn = true; svcFloat.classList.add("is-on"); fx = tx; fy = ty; }
    });
    svcList.addEventListener("pointerleave", () => { floatOn = false; svcFloat.classList.remove("is-on"); lastI = -1; });
    (function loop() {
      fx += (tx - fx) * 0.14; fy += (ty - fy) * 0.14;
      const vx = (tx - fx) * 0.08;
      svcFloat.style.transform = `translate3d(${fx}px, ${fy}px, 0) translate(-50%, -50%) rotate(${clamp(vx, -12, 12)}deg) scale(${floatOn ? 1 : 0.6})`;
      requestAnimationFrame(loop);
    })();
  }

  // click a service → prefill the form
  const pickService = (row) => {
    select.value = row.dataset.i;
    if (window.cfScrollTo) window.cfScrollTo($("#contact"));
    else $("#contact").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    setTimeout(() => $("#form input[name=name]").focus({ preventScroll: true }), 900);
  };
  svcList.addEventListener("click", (e) => { const r = e.target.closest(".svc"); if (r) pickService(r); });
  svcList.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { const r = e.target.closest(".svc"); if (r) { e.preventDefault(); pickService(r); } }
  });

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
     --------------------------------------------------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  $$("[data-reveal]").forEach((el) => io.observe(el));

  /* ---------------------------------------------------------
     PRELOADER
     --------------------------------------------------------- */
  const pre = $("#preloader");
  const preCount = $("#preCount");
  const heroImg = $("#heroHouse img");
  let shown = 0, target = 0, done = false;
  const t0 = performance.now();
  (function count() {
    const elapsed = performance.now() - t0;
    target = Math.max(target, Math.min(90, elapsed / 14));
    shown += (target - shown) * 0.12;
    preCount.textContent = String(Math.round(shown)).padStart(3, "0");
    if (!done) requestAnimationFrame(count);
  })();
  function finish() {
    if (done) return;
    target = 100;
    setTimeout(() => {
      done = true;
      preCount.textContent = "100";
      pre.classList.add("is-done");
      setTimeout(() => { document.body.classList.remove("is-loading"); document.dispatchEvent(new Event("cf:ready")); }, 380);
      setTimeout(() => pre.remove(), 1400);
    }, 260);
  }
  const ready = () => Promise.all([
    heroImg.complete ? Promise.resolve() : new Promise((r) => { heroImg.addEventListener("load", r, { once: true }); heroImg.addEventListener("error", r, { once: true }); }),
    document.fonts ? document.fonts.ready : Promise.resolve(),
  ]);
  ready().then(() => setTimeout(finish, Math.max(0, 700 - (performance.now() - t0))));
  setTimeout(finish, 3500); // never block the page

  try {
    const saved = localStorage.getItem("cf-lang");
    if (saved === "en") setLang("en");
  } catch (e) {}

  /* ---------------------------------------------------------
     NAV
     --------------------------------------------------------- */
  const burger = $(".burger");
  const dropdown = $("#dropdown");
  const toggleMenu = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    dropdown.classList.toggle("is-open", open);
  };
  burger.addEventListener("click", () => toggleMenu(burger.getAttribute("aria-expanded") !== "true"));
  dropdown.addEventListener("click", (e) => { if (e.target.closest("a")) toggleMenu(false); });
  document.addEventListener("click", (e) => { if (!e.target.closest(".header")) toggleMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

  /* ---------------------------------------------------------
     HERO VIDEO — never stops
     --------------------------------------------------------- */
  const video = $("#heroVideo");
  const bars = $$("#bars button");
  const play = () => { if (video.paused) { const p = video.play(); if (p && p.catch) p.catch(() => {}); } };
  video.muted = true;
  ["pause", "ended", "stalled", "suspend"].forEach((ev) => video.addEventListener(ev, () => setTimeout(play, 60)));
  setInterval(play, 1000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) play(); });
  const firstTap = () => { play(); window.removeEventListener("pointerdown", firstTap); window.removeEventListener("touchstart", firstTap); };
  window.addEventListener("pointerdown", firstTap, { passive: true });
  window.addEventListener("touchstart", firstTap, { passive: true });
  let activeBar = 0;
  video.addEventListener("timeupdate", () => {
    if (!video.duration) return;
    const i = Math.min(3, Math.floor((video.currentTime / video.duration) * 4));
    if (i !== activeBar) { bars[activeBar].classList.remove("is-active"); bars[i].classList.add("is-active"); activeBar = i; }
  });
  bars.forEach((b, i) => b.addEventListener("click", () => {
    if (video.duration) video.currentTime = (video.duration / 4) * i + 0.01;
    play();
  }));
  play();

  /* ---------------------------------------------------------
     HERO PARALLAX (mouse + scroll)
     --------------------------------------------------------- */
  const house = $("#heroHouse");
  const heroRow = $("#heroRow");
  let mx = 0, my = 0, cmx = 0, cmy = 0;
  if (finePointer && !reduced) {
    addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });
  }

  /* ---------------------------------------------------------
     3D TILT
     --------------------------------------------------------- */
  if (finePointer && !reduced) {
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("animationend", (e) => { if (e.target === el) { el.classList.remove("rise", "rv"); } });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(6px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------------------------------------------------------
     SCROLL-LINKED: process line, footer fill, fab
     --------------------------------------------------------- */
  const steps = $("#steps");
  const stepEls = $$(".step", steps);
  const footerWord = $("#footerWord");
  const fab = $("#fab");
  const contact = $("#contact");
  const heroEl = $(".hero");
  const wipeEl = $("#wipe");
  let docH = document.documentElement.scrollHeight;
  const measure = () => { docH = document.documentElement.scrollHeight; };
  addEventListener("resize", measure); addEventListener("load", measure); setInterval(measure, 2000);

  function frame() {
    const vh = innerHeight;
    // hero parallax
    cmx += (mx - cmx) * 0.06; cmy += (my - cmy) * 0.06;
    const sy = scrollY;
    if (sy < vh * 1.6) {
      house.style.transform = `translate3d(${cmx * -18}px, ${sy * 0.12 + cmy * -8}px, 0)`;
      heroRow.style.transform = `translate3d(${cmx * 8}px, ${sy * -0.06}px, 0)`;
    }
    // process
    const sr = steps.getBoundingClientRect();
    const p = clamp((vh * 0.85 - sr.top) / (vh * 0.55));
    steps.style.setProperty("--p", p.toFixed(3));
    stepEls.forEach((s, i) => s.classList.toggle("is-on", p >= i / 3 - 0.02));
    // footer
    const left = docH - sy - vh;
    const f = clamp(1 - left / (vh * 0.9));
    footerWord.style.setProperty("--fill", (f * 100).toFixed(1) + "%");
    // fab
    const cr = contact.getBoundingClientRect();
    const wr = wipeEl.getBoundingClientRect();
    const inWipe = wr.top < vh * 0.5 && wr.bottom > vh * 0.5;
    fab.classList.toggle("is-on", sy > heroEl.offsetHeight * 0.7 && cr.top > vh * 0.6 && !inWipe);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------------------------------------------------------
     DOCS LIGHTBOX
     --------------------------------------------------------- */
  const lb = $("#lightbox");
  $$(".doc").forEach((d) => d.addEventListener("click", () => {
    $("img", lb).src = d.dataset.full;
    $("img", lb).alt = $("figcaption", d).textContent;
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
  }));
  $("button", lb).addEventListener("click", () => lb.close());
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });

  /* ---------------------------------------------------------
     FORM → ready-made e-mail
     --------------------------------------------------------- */
  const form = $("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name) { form.name.focus(); form.name.animate([{ transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "none" }], { duration: 300 }); return; }
    if (phone.replace(/\D/g, "").length < 10) { form.phone.focus(); form.phone.animate([{ transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "none" }], { duration: 300 }); return; }
    const u = UI[lang];
    const svc = select.value === "x" ? u.any : SERVICES[+select.value][lang][0];
    const body = [
      `${u.fields[0]}: ${name}`,
      `${u.fields[1]}: ${phone}`,
      `${u.fields[2]}: ${svc}`,
      `${u.fields[3]}: ${String(fd.get("area") || "—")}`,
      `${u.fields[4]}: ${String(fd.get("msg") || "—")}`,
    ].join("\n");
    location.href = `mailto:idir.cleanface@yandex.kz?subject=${encodeURIComponent(`${u.subj}: ${svc}`)}&body=${encodeURIComponent(body)}`;
  });
})();
