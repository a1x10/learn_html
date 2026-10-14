import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { Equal, Package, RotateCcw, Send, Truck, type LucideIcon } from 'lucide-react';

// ─── Товар: меняйте здесь ────────────────────────────────────────────────
const PRODUCT_WORD = 'ТОТ САМЫЙ ВАЙБ';
const DESCRIPTION =
  'Глянцевая фигурка‑талисман школы «Время Первых» для рабочего стола. Светится изнутри и не даёт бросить на полпути.';
const PRICE = '';
const BUTTON = 'Хочу такого';
const PRODUCT_IMAGE = 'https://edu.timetofirst.ru/praktika-tqnwg4/files/vibe.png';
const PRODUCT_ALT = 'Глянцевая фигурка‑талисман «Время Первых» с ноутбуком';
// Цвет карточки = цвет фона фото товара
const CARD_BG = '#B0B1B6';
// ─────────────────────────────────────────────────────────────────────────

const MENU = [
  { label: 'О товаре', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Доставка', href: '#delivery' },
];

const PROMISES: { icon: LucideIcon; text: string }[] = [
  { icon: Truck, text: 'Доставим завтра' },
  { icon: RotateCcw, text: 'Вернём деньги за 14 дней' },
  { icon: Package, text: 'Упакуем в крафт' },
];

const HEADLINE_FONT = '900 100px "Sofia Sans Extra Condensed"';
const MOBILE_QUERY = '(max-width: 759.98px), (orientation: portrait)';
const MOUSE_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

type Box = { left: number; top: number; right: number; bottom: number };

// Метрики заголовка на 1px кегля: glyph — вся надпись с надстрочными знаками (бреве у «Й»),
// cap — высота прописных, по ней считается, какую часть букв закрывает товар
type Metrics = { width: number; glyphTop: number; glyphHeight: number; capOffset: number; capHeight: number };

type Layout = {
  fontSize: number;
  headlineTop: number; // верх строки заголовка (line-height: 1)
  product: { left: number; top: number; width: number; height: number };
  shadow: { dx: number; dy: number; blur: number };
};

function measureHeadline(): Metrics {
  const ctx = document.createElement('canvas').getContext('2d')!;
  ctx.font = HEADLINE_FONT;
  const m = ctx.measureText(PRODUCT_WORD.toUpperCase());
  const ascent = m.actualBoundingBoxAscent;
  const descent = m.actualBoundingBoxDescent;
  const fontAscent = m.fontBoundingBoxAscent || ascent * 1.15;
  const fontDescent = m.fontBoundingBoxDescent || 100 - fontAscent;
  // При line-height: 1 базовая линия стоит на половине интерлиньяжа + ascent шрифта
  const baseline = (100 - fontAscent - fontDescent) / 2 + fontAscent;
  const capAscent = ctx.measureText('Н').actualBoundingBoxAscent;
  return {
    width: m.width / 100,
    glyphTop: (baseline - ascent) / 100,
    glyphHeight: (ascent + descent) / 100,
    capOffset: (ascent - capAscent) / 100,
    capHeight: capAscent / 100,
  };
}

function computeLayout(p: {
  mobile: boolean;
  u: number;
  cardW: number;
  cardH: number;
  headerBottom: number;
  blocks: Box[]; // нижние блоки интерфейса, в координатах карточки
  aspect: number;
  metrics: Metrics;
}): Layout {
  const { mobile, u, cardW, cardH, headerBottom, blocks, aspect, metrics } = p;
  const blocksTop = Math.min(...blocks.map((b) => b.top));

  let fontSize: number;
  let lettersTop: number;
  let width: number;
  let height: number;
  let top: number;
  let left: number;

  if (mobile) {
    const overlap = 0.35;
    const regionTop = headerBottom + 16;
    const regionH = Math.max(blocksTop - 16 - regionTop, 0);
    fontSize = Math.min((cardW - 24) / metrics.width, (regionH * 0.4) / metrics.glyphHeight);
    // от верха букв до места, где их начинает закрывать товар
    const visible = (metrics.capOffset + (1 - overlap) * metrics.capHeight) * fontSize;

    width = cardW * 0.9;
    height = width / aspect;
    const maxH = regionH - visible;
    if (height > maxH) {
      height = Math.max(maxH, 0);
      width = height * aspect;
    }
    // Заголовок и товар — одна группа по центру между шапкой и нижним блоком
    lettersTop = regionTop + (regionH - visible - height) / 2;
    top = lettersTop + visible;
    left = (cardW - width) / 2;
  } else {
    const overlap = 0.4;
    const gap = 24 * u;
    lettersTop = 122 * u;
    height = 540 * u;
    width = height * aspect;
    if (width > 560 * u) {
      width = 560 * u;
      height = width / aspect;
    }
    // Буквы не доходят до нижних блоков, а товар — до низа карточки
    const visibleK = metrics.capOffset + (1 - overlap) * metrics.capHeight;
    fontSize = Math.max(
      Math.min(
        (cardW - 64 * u) / metrics.width,
        (blocksTop - gap - lettersTop) / metrics.glyphHeight,
        (cardH - 44 * u - height - lettersTop) / visibleK,
      ),
      0,
    );

    top = Math.min(lettersTop + visibleK * fontSize, cardH - 44 * u - height);
    const cx = cardW * 0.51;
    // Товар не заходит на нижние блоки
    for (const b of blocks) {
      if (top + height <= b.top - gap) continue;
      const room = b.right <= cx ? cx - b.right - gap : b.left - gap - cx;
      if (width / 2 > room) {
        width = Math.max(room, 0) * 2;
        height = width / aspect;
      }
    }
    left = cx - width / 2;
  }

  const k = width / 560; // тень масштабируется вместе с товаром: на десктопе 92u / 46u / 38u
  return {
    fontSize,
    headlineTop: lettersTop - metrics.glyphTop * fontSize,
    product: { left, top, width, height },
    shadow: { dx: 92 * k, dy: 46 * k, blur: 38 * k },
  };
}

const vars = (v: Record<string, string>) => v as CSSProperties;

// Последние два слова вместе — на последней строке не остаётся одно слово
const keepLastWords = (s: string) => s.replace(/\s+(\S+)$/, ' $1');

const focusRing = 'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const promisesRef = useRef<HTMLUListElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLImageElement>(null);

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [aspect, setAspect] = useState<number | null>(null);
  const [layout, setLayout] = useState<Layout | null>(null);

  // Шрифт заголовка: меряем только после загрузки, перемеряем, если он догрузится позже
  useEffect(() => {
    let alive = true;
    const update = () => alive && setMetrics(measureHeadline());
    const fallback = window.setTimeout(update, 3000);
    Promise.all([
      document.fonts.load(HEADLINE_FONT, PRODUCT_WORD),
      document.fonts.load('400 16px Onest', DESCRIPTION),
      document.fonts.load('500 16px Onest', BUTTON),
    ])
      .catch(() => undefined)
      .then(() => document.fonts.ready)
      .then(() => {
        window.clearTimeout(fallback);
        update();
      });
    document.fonts.addEventListener('loadingdone', update);
    return () => {
      alive = false;
      window.clearTimeout(fallback);
      document.fonts.removeEventListener('loadingdone', update);
    };
  }, []);

  // Пропорции картинки товара
  useEffect(() => {
    const img = new Image();
    img.onload = () => setAspect(img.naturalWidth / img.naturalHeight || 1);
    img.onerror = () => setAspect(1);
    img.src = PRODUCT_IMAGE;
  }, []);

  const measure = useCallback(() => {
    const card = cardRef.current;
    const header = headerRef.current;
    const bottom = bottomRef.current;
    const promises = promisesRef.current;
    if (!card || !header || !bottom || !promises || !metrics || !aspect) return;
    const c = card.getBoundingClientRect();
    const rel = (el: Element): Box => {
      const r = el.getBoundingClientRect();
      return { left: r.left - c.left, top: r.top - c.top, right: r.right - c.left, bottom: r.bottom - c.top };
    };
    const mobile = window.matchMedia(MOBILE_QUERY).matches;
    setLayout(
      computeLayout({
        mobile,
        u: Math.min(window.innerWidth / 1440, window.innerHeight / 900),
        cardW: c.width,
        cardH: c.height,
        headerBottom: rel(header).bottom,
        // на мобильных обещания уходят под первый экран
        blocks: mobile ? [rel(bottom)] : [rel(bottom), rel(promises)],
        aspect,
        metrics,
      }),
    );
  }, [metrics, aspect]);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    for (const el of [cardRef.current, headerRef.current, bottomRef.current, promisesRef.current]) {
      if (el) ro.observe(el);
    }
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // Парение и следование за курсором
  useEffect(() => {
    const reduced = window.matchMedia(REDUCED_QUERY);
    const mouse = window.matchMedia(MOUSE_QUERY);
    const mobile = window.matchMedia(MOBILE_QUERY);
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;
    const start = performance.now();

    const onMove = (e: PointerEvent) => {
      const card = cardRef.current;
      if (e.pointerType !== 'mouse' || !card) return;
      const r = card.getBoundingClientRect();
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      target.x = clamp((e.clientX - r.left - r.width / 2) / (r.width / 2));
      target.y = clamp((e.clientY - r.top - r.height / 2) / (r.height / 2));
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const apply = (float: number) => {
      const u = Math.min(window.innerWidth / 1440, window.innerHeight / 900);
      const x = pos.x * 34 * u;
      const y = pos.y * 22 * u;
      const rot = pos.x * 3;
      if (productRef.current) productRef.current.style.transform = `translate3d(${x}px, ${y + float}px, 0) rotate(${rot}deg)`;
      if (shadowRef.current) shadowRef.current.style.transform = `translate3d(${x / 3}px, ${y / 3 + float}px, 0) rotate(${rot / 3}deg)`;
      if (headlineRef.current) headlineRef.current.style.transform = `translate3d(${-x / 4}px, ${-y / 4}px, 0)`;
    };

    const tick = (now: number) => {
      const follow = mouse.matches && !mobile.matches;
      const tx = follow ? target.x : 0;
      const ty = follow ? target.y : 0;
      // сглаживание 0.08 за кадр при 60 fps, не зависит от частоты экрана
      const k = 1 - Math.pow(1 - 0.08, Math.min(now - (last || now), 100) / (1000 / 60));
      last = now;
      pos.x += (tx - pos.x) * k;
      pos.y += (ty - pos.y) * k;
      apply(Math.sin(((now - start) / 5700) * Math.PI * 2) * 7);
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      cancelAnimationFrame(raf);
      if (reduced.matches) {
        pos.x = pos.y = 0;
        apply(0);
      } else {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    sync();
    reduced.addEventListener('change', sync);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      reduced.removeEventListener('change', sync);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const ready = layout !== null;
  const product = layout?.product ?? { left: 0, top: 0, width: 0, height: 0 };
  const shadow = layout?.shadow ?? { dx: 0, dy: 0, blur: 0 };

  return (
    <div
      data-ready={ready}
      className="relative h-screen overflow-hidden bg-white mob:h-auto mob:overflow-x-clip mob:overflow-y-visible"
    >
      <section className="relative h-screen mob:h-svh mob:min-h-[560px]">
        <div
          ref={cardRef}
          className="absolute inset-16 isolate overflow-hidden rounded-u40 mob:inset-[8px] mob:rounded-[28px]"
          style={{ backgroundColor: CARD_BG }}
        >
          {/* [10] Заголовок */}
          <div className="enter absolute inset-x-0 z-10" style={{ top: layout?.headlineTop ?? 0, ...vars({ '--rise': '28px' }) }}>
            <div ref={headlineRef}>
              <h1
                className="text-center font-display leading-none font-black tracking-[0] whitespace-nowrap text-white uppercase"
                style={{ fontSize: layout?.fontSize ?? 100 }}
              >
                {PRODUCT_WORD}
              </h1>
            </div>
          </div>

          {/* [15] Тень товара: падает и на буквы */}
          <div
            aria-hidden
            className="enter pointer-events-none absolute z-15"
            style={{
              left: product.left + shadow.dx,
              top: product.top + shadow.dy,
              width: product.width,
              height: product.height,
              ...vars({ '--delay': '0.35s' }),
            }}
          >
            <img
              ref={shadowRef}
              src={PRODUCT_IMAGE}
              alt=""
              draggable={false}
              className="size-full object-contain opacity-28"
              style={{ filter: `brightness(0) blur(${shadow.blur}px)` }}
            />
          </div>

          {/* [20] Товар */}
          <div
            className="enter pointer-events-none absolute z-20"
            style={{ ...product, ...vars({ '--rise': '40px', '--delay': '0.15s' }) }}
          >
            <img
              ref={productRef}
              src={PRODUCT_IMAGE}
              alt={PRODUCT_ALT}
              draggable={false}
              className="size-full object-contain select-none"
            />
          </div>

          {/* [30] Шапка */}
          <header
            ref={headerRef}
            className="enter absolute inset-x-20 top-20 z-30 flex h-64 items-center mob:inset-x-[12px] mob:top-[12px] mob:h-[48px]"
            style={vars({ '--delay': '0.3s' })}
          >
            <div className="flex items-center gap-10">
              <button
                type="button"
                aria-label="Меню"
                className={`grid size-64 place-items-center rounded-full bg-white text-ink mob:size-[48px] ${focusRing}`}
              >
                <Equal className="size-22 mob:size-[20px]" />
              </button>
              <nav
                aria-label="Разделы"
                className="glass flex h-64 items-center gap-40 rounded-full px-30 transition-colors duration-300 hover:bg-[rgb(40_42_48/0.18)] mob:hidden"
              >
                {MENU.map((item) => (
                  <a key={item.href} href={item.href} className={`rounded-full text-u16 text-white ${focusRing}`}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <a
              href="./"
              aria-label="goods. — на главную"
              className={`absolute left-1/2 -translate-x-1/2 text-u36 leading-none font-semibold tracking-[-0.05em] text-white mob:text-[26px] ${focusRing}`}
            >
              goods.
            </a>

            <div className="ml-auto flex items-center gap-10">
              <button
                type="button"
                className={`group glass flex h-64 items-center gap-10 rounded-full px-28 text-u16 text-white transition-colors duration-300 hover:bg-[rgb(40_42_48/0.18)] mob:hidden ${focusRing}`}
              >
                <Send className="size-20 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] motion-reduce:transition-none" />
                Написать
              </button>
              <button
                type="button"
                className={`flex h-64 items-center rounded-full bg-white px-28 text-u16 text-ink mob:h-[44px] mob:px-[18px] mob:text-[15px] ${focusRing}`}
              >
                Заказать
              </button>
            </div>
          </header>

          {/* [30] Описание и кнопка */}
          <div
            ref={bottomRef}
            className="enter absolute bottom-28 left-32 z-30 mob:inset-x-[12px] mob:bottom-[12px]"
            style={vars({ '--delay': '0.3s' })}
          >
            <p className="mb-32 w-360 text-u18 leading-[1.45] text-pretty text-white mob:mb-[20px] mob:w-auto mob:max-w-[460px] mob:text-[16px]">
              {keepLastWords(DESCRIPTION)}
            </p>
            <button
              type="button"
              className={`group flex h-80 min-w-310 items-center gap-18 rounded-full bg-white pr-34 pl-10 text-ink mob:h-[64px] mob:w-full mob:min-w-0 mob:gap-[14px] mob:pr-[24px] mob:pl-[8px] ${focusRing}`}
            >
              <span className="grid size-60 shrink-0 place-items-center rounded-full bg-soft mob:size-[48px]">
                <img
                  src={PRODUCT_IMAGE}
                  alt=""
                  draggable={false}
                  className="size-[80%] object-contain transition-transform duration-500 ease-roll group-hover:rotate-18 motion-reduce:transition-none"
                />
              </span>
              <span
                className={`relative block h-[1.3em] overflow-hidden text-u21 leading-[1.3em] font-medium mob:text-[18px] ${PRICE ? '' : 'flex-1 text-center'}`}
              >
                <span className="block transition-transform duration-500 ease-roll group-hover:-translate-y-1/2 motion-reduce:transition-none">
                  <span className="block">{BUTTON}</span>
                  <span className="block" aria-hidden>
                    {BUTTON}
                  </span>
                </span>
              </span>
              {PRICE && <span className="ml-auto text-u21 font-semibold mob:text-[18px]">{PRICE}</span>}
            </button>
          </div>
        </div>
      </section>

      {/* [30] Обещания: на десктопе — карточка внизу справа, на мобильных — блок под первым экраном */}
      <ul
        id="delivery"
        ref={promisesRef}
        className="enter absolute right-48 bottom-48 z-30 w-360 rounded-u28 bg-white px-24 py-8 text-ink mob:static mob:mx-[8px] mob:mb-[8px] mob:w-auto mob:rounded-[28px] mob:bg-mist mob:px-[20px] mob:py-[6px]"
        style={vars({ '--delay': '0.3s' })}
      >
        {PROMISES.map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-16 border-line py-16 text-u17 font-medium not-first:border-t mob:gap-[14px] mob:py-[14px] mob:text-[16px]"
          >
            <span className="grid size-46 shrink-0 place-items-center rounded-full bg-soft mob:size-[44px] mob:bg-white">
              <Icon className="size-21 mob:size-[20px]" strokeWidth={1.6} />
            </span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
