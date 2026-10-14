import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { Clapperboard, CodeXml, Equal, PenTool, Send, X, type LucideIcon } from 'lucide-react';
import photo from './assets/alexey.webp';
import avatar from './assets/avatar.webp';
import { PROJECT_LINKS, TELEGRAM, TELEGRAM_URL } from './content';
import { useTextMetrics, type Metrics } from './fit';

// ─── Первый экран: меняйте здесь ─────────────────────────────────────────
const HEADLINE = 'АЛЕКСЕЙ, 13 ЛЕТ';
const DESCRIPTION =
  'Мне 13. Пишу на Python, Go и JavaScript, начинаю C#. Работаю дизайнером: делаю сайты и моушен‑дизайн.';
const BUTTON = 'Написать';
const BUTTON_NOTE = `@${TELEGRAM}`; // справа в кнопке; пустая строка — текст кнопки по центру
const PHOTO = photo; // PNG/WebP с прозрачным фоном
const PHOTO_ALT = 'Алексей в наушниках и худи с надписью «Портфолио»';
const AVATAR = avatar; // лицо крупно — для маленького круга в кнопке
// Цвет карточки = цвет фона исходного фото
const CARD_BG = '#B3B5B9';
// ─────────────────────────────────────────────────────────────────────────

const SKILLS: { icon: LucideIcon; text: string }[] = [
  { icon: CodeXml, text: 'Python, Go, JavaScript' },
  { icon: PenTool, text: 'Дизайн и сайты' },
  { icon: Clapperboard, text: 'Моушен‑дизайн' },
];

const MENU = [...PROJECT_LINKS, { label: 'Связаться', href: '#contact' }];

const MOBILE_QUERY = '(max-width: 759.98px), (orientation: portrait)';
const MOUSE_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

type Box = { left: number; top: number; right: number; bottom: number };

type Layout = {
  fontSize: number;
  headlineTop: number; // верх строки заголовка (line-height: 1)
  photo: { left: number; top: number; width: number; height: number };
  shadow: { dx: number; dy: number; blur: number };
};

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
    // от верха букв до места, где их начинает закрывать фото
    const visible = (metrics.capOffset + (1 - overlap) * metrics.capHeight) * fontSize;

    width = cardW * 0.9;
    height = width / aspect;
    const maxH = regionH - visible;
    if (height > maxH) {
      height = Math.max(maxH, 0);
      width = height * aspect;
    }
    // Заголовок и фото — одна группа по центру между шапкой и нижним блоком
    lettersTop = regionTop + (regionH - visible - height) / 2;
    top = lettersTop + visible;
    left = (cardW - width) / 2;
  } else {
    const overlap = 0.4;
    const gap = 24 * u;
    const bottomLimit = cardH - 44 * u;
    const minH = 440 * u;
    lettersTop = 122 * u;
    const visibleK = metrics.capOffset + (1 - overlap) * metrics.capHeight;
    // Буквы не доходят до нижних блоков, а под фото остаётся хотя бы minH
    fontSize = Math.max(
      Math.min(
        (cardW - 64 * u) / metrics.width,
        (blocksTop - gap - lettersTop) / metrics.glyphHeight,
        (bottomLimit - minH - lettersTop) / visibleK,
      ),
      0,
    );
    top = lettersTop + visibleK * fontSize;
    // Фото тянется до низа карточки (с отступом 44u), но не больше 600u в высоту и 560u в ширину
    height = Math.min(600 * u, bottomLimit - top);
    width = height * aspect;
    if (width > 560 * u) {
      width = 560 * u;
      height = width / aspect;
    }
    const cx = cardW * 0.51;
    // Фото не заходит на нижние блоки
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

  const k = Math.max(width, height) / 560; // тень масштабируется вместе с фото: при 560u — 92u / 46u / 38u
  return {
    fontSize,
    headlineTop: lettersTop - metrics.glyphTop * fontSize,
    photo: { left, top, width, height },
    shadow: { dx: 92 * k, dy: 46 * k, blur: 38 * k },
  };
}

const vars = (v: Record<string, string>) => v as CSSProperties;

// Последние два слова вместе — на последней строке не остаётся одно слово
export const keepLastWords = (s: string) => s.replace(/\s+(\S+)$/, ' $1');

export const focusRing =
  'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current';

export function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-80 min-w-310 items-center gap-18 rounded-full bg-white pr-34 pl-10 text-ink mob:h-[64px] mob:w-full mob:min-w-0 mob:gap-[14px] mob:pr-[24px] mob:pl-[8px] ${focusRing} ${className}`}
    >
      <span className="size-60 shrink-0 overflow-hidden rounded-full bg-soft mob:size-[48px]">
        <img
          src={AVATAR}
          alt=""
          draggable={false}
          className="size-full object-cover transition-transform duration-500 ease-roll group-hover:rotate-18 motion-reduce:transition-none"
        />
      </span>
      <span
        className={`relative block h-[1.3em] overflow-hidden text-u21 leading-[1.3em] font-medium mob:text-[18px] ${BUTTON_NOTE ? '' : 'flex-1 text-center'}`}
      >
        <span className="block transition-transform duration-500 ease-roll group-hover:-translate-y-1/2 motion-reduce:transition-none">
          <span className="block">{BUTTON}</span>
          <span className="block" aria-hidden>
            {BUTTON}
          </span>
        </span>
      </span>
      {BUTTON_NOTE && <span className="ml-auto text-u21 font-semibold mob:text-[18px]">{BUTTON_NOTE}</span>}
    </a>
  );
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLUListElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLImageElement>(null);

  const metrics = useTextMetrics(HEADLINE);
  const [aspect, setAspect] = useState<number | null>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Пропорции фото
  useEffect(() => {
    const img = new Image();
    img.onload = () => setAspect(img.naturalWidth / img.naturalHeight || 1);
    img.onerror = () => setAspect(1);
    img.src = PHOTO;
  }, []);

  const measure = useCallback(() => {
    const card = cardRef.current;
    const header = headerRef.current;
    const bottom = bottomRef.current;
    const skills = skillsRef.current;
    if (!card || !header || !bottom || !skills || !metrics || !aspect) return;
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
        // на мобильных навыки уходят под первый экран
        blocks: mobile ? [rel(bottom)] : [rel(bottom), rel(skills)],
        aspect,
        metrics,
      }),
    );
  }, [metrics, aspect]);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    for (const el of [cardRef.current, headerRef.current, bottomRef.current, skillsRef.current]) {
      if (el) ro.observe(el);
    }
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // Меню закрывается по Esc и по клику мимо
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    // pointerdown, а не click: при открытии иконка кнопки меняется, и цель клика успевает пропасть из DOM
    const onDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [menuOpen]);

  // Парение и следование за курсором; пока первый экран не виден — не считаем
  useEffect(() => {
    const reduced = window.matchMedia(REDUCED_QUERY);
    const mouse = window.matchMedia(MOUSE_QUERY);
    const mobile = window.matchMedia(MOBILE_QUERY);
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;
    let visible = true;
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
      if (photoRef.current) photoRef.current.style.transform = `translate3d(${x}px, ${y + float}px, 0) rotate(${rot}deg)`;
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
      } else if (visible) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    if (cardRef.current) io.observe(cardRef.current);

    sync();
    reduced.addEventListener('change', sync);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      reduced.removeEventListener('change', sync);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const ready = layout !== null;
  const box = layout?.photo ?? { left: 0, top: 0, width: 0, height: 0 };
  const shadow = layout?.shadow ?? { dx: 0, dy: 0, blur: 0 };

  return (
    <div data-ready={ready} className="relative h-screen overflow-hidden mob:h-auto mob:overflow-visible">
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
                {HEADLINE}
              </h1>
            </div>
          </div>

          {/* [15] Тень: падает и на буквы */}
          <div
            aria-hidden
            className="enter pointer-events-none absolute z-15"
            style={{
              left: box.left + shadow.dx,
              top: box.top + shadow.dy,
              width: box.width,
              height: box.height,
              ...vars({ '--delay': '0.35s' }),
            }}
          >
            <img
              ref={shadowRef}
              src={PHOTO}
              alt=""
              draggable={false}
              className="size-full object-contain opacity-28"
              style={{ filter: `brightness(0) blur(${shadow.blur}px)` }}
            />
          </div>

          {/* [20] Фото */}
          <div
            className="enter pointer-events-none absolute z-20"
            style={{ ...box, ...vars({ '--rise': '40px', '--delay': '0.15s' }) }}
          >
            <img ref={photoRef} src={PHOTO} alt={PHOTO_ALT} draggable={false} className="size-full object-contain select-none" />
          </div>

          {/* [30] Шапка */}
          <header
            ref={headerRef}
            className="enter absolute inset-x-20 top-20 z-30 flex h-64 items-center mob:inset-x-[12px] mob:top-[12px] mob:h-[48px]"
            style={vars({ '--delay': '0.3s' })}
          >
            <div className="relative flex items-center gap-10">
              <button
                type="button"
                aria-label={menuOpen ? 'Закрыть меню' : 'Меню'}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className={`grid size-64 place-items-center rounded-full bg-white text-ink mob:size-[48px] ${focusRing}`}
              >
                {menuOpen ? <X className="size-22 mob:size-[20px]" /> : <Equal className="size-22 mob:size-[20px]" />}
              </button>
              <nav
                aria-label="Проекты"
                className="glass flex h-64 items-center gap-40 rounded-full px-30 transition-colors duration-300 hover:bg-[rgb(40_42_48/0.18)] mob:hidden"
              >
                {PROJECT_LINKS.map((item) => (
                  <a key={item.href} href={item.href} className={`rounded-full text-u16 text-white ${focusRing}`}>
                    {item.label}
                  </a>
                ))}
              </nav>
              {menuOpen && (
                <ul
                  id="site-menu"
                  className="absolute top-[calc(100%+var(--spacing)*10)] left-0 w-260 rounded-u28 bg-white px-24 py-8 text-ink mob:top-[58px] mob:w-[240px] mob:rounded-[24px] mob:px-[20px]"
                >
                  {MENU.map((item) => (
                    <li key={item.href} className="border-line not-first:border-t">
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-16 text-u17 font-medium mob:py-[14px] mob:text-[16px] ${focusRing}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href="./"
              aria-label={`${TELEGRAM}. — наверх`}
              className={`absolute left-1/2 -translate-x-1/2 text-u36 leading-none font-semibold tracking-[-0.05em] text-white mob:text-[26px] ${focusRing}`}
            >
              {TELEGRAM}.
            </a>

            <div className="ml-auto flex items-center gap-10">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass flex h-64 items-center gap-10 rounded-full px-28 text-u16 text-white transition-colors duration-300 hover:bg-[rgb(40_42_48/0.18)] mob:hidden ${focusRing}`}
              >
                <Send className="size-20 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] motion-reduce:transition-none" />
                Написать
              </a>
              <a
                href="#projects"
                className={`flex h-64 items-center rounded-full bg-white px-28 text-u16 text-ink mob:h-[44px] mob:px-[18px] mob:text-[15px] ${focusRing}`}
              >
                Проекты
              </a>
            </div>
          </header>

          {/* [30] О себе и кнопка */}
          <div
            ref={bottomRef}
            className="enter absolute bottom-28 left-32 z-30 mob:inset-x-[12px] mob:bottom-[12px]"
            style={vars({ '--delay': '0.3s' })}
          >
            <p className="mb-32 w-360 text-u18 leading-[1.45] text-pretty text-white mob:mb-[20px] mob:w-auto mob:max-w-[460px] mob:text-[16px]">
              {keepLastWords(DESCRIPTION)}
            </p>
            <ContactButton />
          </div>
        </div>
      </section>

      {/* [30] Навыки: на десктопе — карточка внизу справа, на мобильных — блок под первым экраном */}
      <ul
        ref={skillsRef}
        aria-label="Навыки"
        className="enter absolute right-48 bottom-48 z-30 w-360 rounded-u28 bg-white px-24 py-8 text-ink mob:static mob:mx-[8px] mob:w-auto mob:rounded-[28px] mob:bg-mist mob:px-[20px] mob:py-[6px]"
        style={vars({ '--delay': '0.3s' })}
      >
        {SKILLS.map(({ icon: Icon, text }) => (
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
