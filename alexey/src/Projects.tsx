import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Bug,
  Coins,
  Cpu,
  FileCode2,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Link2,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Smartphone,
  SquareCode,
  SquareTerminal,
  TrendingUp,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react';
import { BIRLIK, STELLA, STELLS, TELEGRAM } from './content';
import { FitText } from './fit';
import { ContactButton, keepLastWords } from './Hero';

type Tone = 'light' | 'dark';

// Блок плавно появляется, когда доходит до экрана
function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Card({ id, className, children }: { id: string; className: string; children: ReactNode }) {
  return (
    <article
      id={id}
      className={`mx-16 mt-16 scroll-mt-16 rounded-u40 px-56 pt-48 pb-56 mob:mx-[8px] mob:mt-[8px] mob:scroll-mt-[8px] mob:rounded-[28px] mob:px-[16px] mob:pt-[20px] mob:pb-[20px] ${className}`}
    >
      {children}
    </article>
  );
}

function Meta({ index, kind, tags, tone }: { index: string; kind: string; tags: string[]; tone: Tone }) {
  const chip = tone === 'dark' ? 'bg-night text-white' : 'bg-white text-ink';
  return (
    <div className="flex flex-wrap items-center justify-between gap-16 mob:gap-[12px]">
      <div className="flex items-center gap-14">
        <span className={`grid size-46 place-items-center rounded-full text-u16 font-semibold ${chip}`}>{index}</span>
        <span className="text-u18 font-medium">{kind}</span>
      </div>
      <ul className="flex flex-wrap gap-8">
        {tags.map((t) => (
          <li key={t} className={`flex h-40 items-center rounded-full px-18 text-u15 mob:h-[34px] mob:px-[14px] mob:text-[14px] ${chip}`}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Panel({ tone = 'light', className = '', children }: { tone?: Tone; className?: string; children: ReactNode }) {
  const bg = tone === 'dark' ? 'bg-night text-white' : 'bg-white text-ink';
  return <div className={`rounded-u28 p-32 mob:rounded-[22px] mob:p-[20px] ${bg} ${className}`}>{children}</div>;
}

function Icon({ icon: I, tone = 'light' }: { icon: LucideIcon; tone?: Tone }) {
  return (
    <span className={`grid size-46 shrink-0 place-items-center rounded-full ${tone === 'dark' ? 'bg-white/10' : 'bg-soft'}`}>
      <I className="size-21" strokeWidth={1.6} />
    </span>
  );
}

function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`mt-72 mb-20 text-u15 font-semibold tracking-[0.06em] uppercase opacity-60 mob:mt-[40px] mob:mb-[14px] ${className}`}>{children}</h3>;
}

// Список строками через тонкую линию — как карточка на первом экране
function Rows({ items, tone = 'light', className = '' }: { items: string[]; tone?: Tone; className?: string }) {
  const line = tone === 'dark' ? 'border-white/12' : 'border-line';
  return (
    <ul className={className}>
      {items.map((t) => (
        <li key={t} className={`py-14 text-u17 leading-[1.4] not-first:border-t ${line}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

function PanelHead({ icon, title, note, tone = 'light' }: { icon: LucideIcon; title: string; note?: string; tone?: Tone }) {
  return (
    <div className="mb-12 flex items-center gap-16">
      <Icon icon={icon} tone={tone} />
      <div>
        <p className="text-u21 leading-tight font-semibold">{title}</p>
        {note && <p className="mt-2 text-u15 opacity-60">{note}</p>}
      </div>
    </div>
  );
}

function Lead({ children }: { children: string }) {
  return (
    <p className="text-u36 leading-[1.2] font-medium text-pretty mob:text-[24px]">{keepLastWords(children)}</p>
  );
}

const grid2 = 'grid grid-cols-2 gap-16 mob:grid-cols-1 mob:gap-[8px]';
const grid3 = 'grid grid-cols-3 gap-16 mob:grid-cols-1 mob:gap-[8px]';

function Birlik() {
  const p = BIRLIK;
  const icons = [Smartphone, MonitorSmartphone, LayoutDashboard];
  return (
    <Card id={p.id} className="bg-mist text-ink">
      <Meta index={p.index} kind={p.kind} tags={p.tags} tone="light" />
      <div className="mt-40 mob:mt-[28px]">
        <FitText text={p.title} />
      </div>

      <Reveal className="mt-56 grid grid-cols-[1.15fr_1fr] gap-56 mob:mt-[32px] mob:grid-cols-1 mob:gap-[20px]">
        <Lead>{p.lead}</Lead>
        <div className="space-y-12 text-u17 leading-[1.5] opacity-70">
          {p.story.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-56 grid grid-cols-4 gap-16 mob:mt-[32px] mob:grid-cols-2 mob:gap-[8px]">
        {p.stats.map((s) => (
          <Panel key={s.label}>
            <p className="font-display text-u96 leading-[0.85] font-black mob:text-[64px]">{s.value}</p>
            <p className="mt-12 text-u16 leading-[1.35] opacity-60">{s.label}</p>
          </Panel>
        ))}
      </Reveal>

      <Reveal>
        <Label>Три рабочих места</Label>
        <div className={grid3}>
          {p.places.map((place, i) => (
            <Panel key={place.title}>
              <PanelHead icon={icons[i]} title={place.title} note={place.note} />
              <Rows items={place.items} />
            </Panel>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Label>Как это работает по кругу</Label>
        <ol className="grid grid-cols-5 gap-16 mob:grid-cols-1 mob:gap-[8px]">
          {p.cycle.map((step, i) => {
            const key = i === 2; // главный шаг: балл считает сервер
            return (
              <li
                key={step}
                className={`flex flex-col gap-20 rounded-u28 p-28 mob:flex-row mob:items-start mob:gap-[14px] mob:rounded-[22px] mob:p-[18px] ${key ? 'bg-ink text-white' : 'bg-white'}`}
              >
                <span
                  className={`grid size-46 shrink-0 place-items-center rounded-full font-display text-u24 font-black ${key ? 'bg-white text-ink' : 'bg-soft'}`}
                >
                  {i + 1}
                </span>
                <span className="text-u17 leading-[1.4]">{step}</span>
              </li>
            );
          })}
        </ol>
        <div className="mt-16 flex items-center gap-16 rounded-u28 bg-white p-20 pr-32 mob:mt-[8px] mob:rounded-[22px] mob:p-[16px]">
          <Icon icon={Link2} />
          <p className="text-u17 leading-[1.4]">{p.director}</p>
        </div>
      </Reveal>

      <Reveal className={`${grid2} mt-16 mob:mt-[8px]`}>
        <Panel>
          <PanelHead icon={ShieldCheck} title="Безопасность" />
          <Rows items={p.security} />
        </Panel>
        <Panel>
          <PanelHead icon={Server} title="Техника и бизнес" />
          <Rows items={p.tech} />
        </Panel>
      </Reveal>
    </Card>
  );
}

function Stells() {
  const p = STELLS;
  return (
    <Card id={p.id} className="bg-ink text-white">
      <Meta index={p.index} kind={p.kind} tags={p.tags} tone="dark" />
      <div className="mt-40 mob:mt-[28px]">
        <FitText text={p.title} />
      </div>

      <Reveal className="mt-56 grid grid-cols-[1.15fr_1fr] items-end gap-56 mob:mt-[32px] mob:grid-cols-1 mob:gap-[20px]">
        <Lead>{p.lead}</Lead>
        <Panel tone="dark" className="flex items-end justify-between gap-24">
          <p className="font-display text-u96 leading-[0.85] font-black whitespace-nowrap mob:text-[64px]">20 МЛРД</p>
          <p className="max-w-200 text-right text-u16 leading-[1.35] opacity-60">параметров, архитектура трансформера</p>
        </Panel>
      </Reveal>

      <Reveal>
        <Label>Какую проблему решает</Label>
        <div className={grid3}>
          {p.problems.map((t) => (
            <Panel key={t} tone="dark">
              <span className="mb-20 block opacity-60">
                <TriangleAlert className="size-24" strokeWidth={1.6} />
              </span>
              <p className="text-u18 leading-[1.45]">{t}</p>
            </Panel>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Label>Как работает</Label>
        <ol className="grid grid-cols-4 gap-16 mob:grid-cols-1 mob:gap-[8px]">
          {p.steps.map((s, i) => (
            <li key={s.title} className="rounded-u28 bg-white p-28 text-ink mob:rounded-[22px] mob:p-[20px]">
              <p className="font-display text-u36 leading-none font-black opacity-30">0{i + 1}</p>
              <p className="mt-28 text-u21 leading-tight font-semibold mob:mt-[16px]">{s.title}</p>
              <p className="mt-8 text-u16 leading-[1.45] opacity-70">{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal>
        <Label>Устройство</Label>
        <div className={grid2}>
          <Panel tone="dark">
            <PanelHead icon={Cpu} title="Из чего состоит" tone="dark" />
            <Rows items={p.parts} tone="dark" />
            <p className="mt-16 rounded-u20 bg-white/8 p-20 text-u17 leading-[1.4]">{p.output}</p>
          </Panel>
          <Panel tone="dark">
            <PanelHead icon={Layers} title="За что отвечают слои" tone="dark" />
            <ul className="mt-20 space-y-20">
              {p.layers.map((l, i) => (
                <li key={l.name}>
                  <div className="mb-10 flex items-baseline justify-between gap-16 text-u17">
                    <span className="opacity-60">{l.name}</span>
                    <span className="font-semibold">{l.role}</span>
                  </div>
                  <div className="h-10 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-white" style={{ width: `${((i + 1) / p.layers.length) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </Reveal>

      <Reveal className={`${grid2} mt-16 mob:mt-[8px]`}>
        <Panel tone="dark">
          <PanelHead icon={TrendingUp} title="Преимущества" tone="dark" />
          <Rows items={p.benefits} tone="dark" />
        </Panel>
        <Panel tone="dark">
          <PanelHead icon={Coins} title="Монетизация" tone="dark" />
          <Rows items={p.money} tone="dark" />
        </Panel>
      </Reveal>
    </Card>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-16 flex flex-wrap gap-8">
      {items.map((t) => (
        <li key={t} className="flex h-40 items-center rounded-full bg-soft px-16 text-u15 mob:h-[36px] mob:px-[14px] mob:text-[14px]">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Stella() {
  const p = STELLA;
  const ifaceIcons = [SquareCode, SquareTerminal, MonitorSmartphone];
  const skillIcons = [Layers, Bug, Cpu, FileCode2];
  return (
    <Card id={p.id} className="bg-[#B3B5B9] text-ink">
      <Meta index={p.index} kind={p.kind} tags={p.tags} tone="light" />
      <div className="mt-40 text-white mob:mt-[28px]">
        <FitText text={p.title} />
      </div>

      <Reveal className="mt-56 max-w-900 mob:mt-[32px]">
        <Lead>{p.lead}</Lead>
      </Reveal>

      <Reveal>
        <Label>Интерфейсы</Label>
        <div className={grid3}>
          {p.interfaces.map((f, i) => (
            <Panel key={f.title}>
              <PanelHead icon={ifaceIcons[i]} title={f.title} note={f.text} />
            </Panel>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Label>Что умеет</Label>
        <div className={grid2}>
          {p.skills.map((s, i) => (
            <Panel key={s.title}>
              <PanelHead icon={skillIcons[i]} title={s.title} note={s.text} />
            </Panel>
          ))}
        </div>
      </Reveal>

      <Reveal className={`${grid3} mt-16 mob:mt-[8px]`}>
        <Panel>
          <p className="text-u21 font-semibold">Модели</p>
          <Chips items={p.models} />
        </Panel>
        <Panel>
          <p className="text-u21 font-semibold">Файлы и конфиги</p>
          <Chips items={p.files} />
        </Panel>
        <Panel>
          <p className="text-u21 font-semibold">Стек</p>
          <Chips items={p.stack} />
        </Panel>
      </Reveal>

      <Reveal>
        <Label>Сценарии</Label>
        <Panel>
          <PanelHead icon={GraduationCap} title="Для чего подходит" />
          <Rows items={p.scenarios} />
        </Panel>
      </Reveal>
    </Card>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="mx-16 my-16 scroll-mt-16 rounded-u40 bg-ink px-56 pt-48 pb-56 text-white mob:mx-[8px] mob:my-[8px] mob:rounded-[28px] mob:px-[16px] mob:pt-[24px] mob:pb-[16px]"
    >
      <p className="mb-40 text-u18 font-medium opacity-60 mob:mb-[24px]">Связаться</p>
      <FitText text="ПИШИТЕ В TELEGRAM" as="p" />
      <Reveal className="mt-48 flex items-end justify-between gap-32 mob:mt-[28px] mob:flex-col mob:items-stretch mob:gap-[20px]">
        <p className="max-w-520 text-u24 leading-[1.35] mob:text-[18px]">
          {keepLastWords(`Сайты, дизайн, моушен и код. Telegram: @${TELEGRAM}`)}
        </p>
        <ContactButton />
      </Reveal>
    </section>
  );
}

export default function Projects() {
  return (
    <main id="projects" className="flow scroll-mt-16">
      <Birlik />
      <Stells />
      <Stella />
      <Contact />
    </main>
  );
}
