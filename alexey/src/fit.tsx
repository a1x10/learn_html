import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

export const DISPLAY_FONT = '"Sofia Sans Extra Condensed"';

// Метрики строки на 1px кегля: glyph — вся надпись с надстрочными знаками (бреве у «Й»),
// cap — высота прописных
export type Metrics = { width: number; glyphTop: number; glyphHeight: number; capOffset: number; capHeight: number };

export function measureText(text: string, weight = 900): Metrics {
  const ctx = document.createElement('canvas').getContext('2d')!;
  ctx.font = `${weight} 100px ${DISPLAY_FONT}`;
  const m = ctx.measureText(text);
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

// Перемеряет текст, когда загрузится (или догрузится) шрифт
export function useTextMetrics(text: string): Metrics | null {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  useEffect(() => {
    let alive = true;
    const update = () => alive && setMetrics(measureText(text));
    const fallback = window.setTimeout(update, 3000);
    document.fonts
      .load(`900 100px ${DISPLAY_FONT}`, text)
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
  }, [text]);
  return metrics;
}

// Одна строка крупным шрифтом от края до края блока. Межбуквенный интервал не трогаем — только кегль.
export function FitText({
  text,
  as: Tag = 'h2',
  className = '',
  style,
}: {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const metrics = useTextMetrics(text);
  const [box, setBox] = useState<{ size: number; trim: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !metrics) return;
    const update = () => {
      const size = el.clientWidth / metrics.width;
      // строка обрезается по верху букв и базовой линии, чтобы отступы вокруг были честными
      setBox({ size, trim: metrics.glyphTop * size });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [metrics]);

  return (
    <div ref={ref} className="flow-root w-full" style={{ height: box && metrics ? metrics.glyphHeight * box.size : undefined }}>
      <Tag
        className={`font-display leading-none font-black tracking-[0] whitespace-nowrap transition-opacity duration-500 ${box ? '' : 'opacity-0'} ${className}`}
        style={{ fontSize: box?.size ?? 100, marginTop: box ? -box.trim : 0, ...style }}
      >
        {text}
      </Tag>
    </div>
  );
}
