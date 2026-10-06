import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { env } from '../ui/core.js';
import { seg, clamp, easeInOut, easeOut, lerp, pointer } from '../three/util.js';

// Сценарий редактора: секция закреплена, прокрутка «проигрывает» работу в SQL Harmony.
// Всё считается из прогресса прокрутки, поэтому сцена одинаково идёт вперёд и назад.

const RAW = `select e.first_name, e.last_name, d.department_name,
count(p.project_id) as project_count
from employees e join departments d on e.department_id = d.department_id
left join projects p on e.employee_id = p.employee_id
group by e.first_name, e.last_name, d.department_name
having count(p.project_id) > 5;`;

const FORMATTED = `SELECT
    e.first_name,
    e.last_name,
    d.department_name,
    COUNT(p.project_id) AS project_count
FROM employees e
JOIN departments d
    ON e.department_id = d.department_id
LEFT JOIN projects p
    ON e.employee_id = p.employee_id
GROUP BY
    e.first_name,
    e.last_name,
    d.department_name
HAVING COUNT(p.project_id) > 5`;

const GHOST = '\nORDER BY project_count DESC;';
const KW = /^(select|from|join|left|on|group|by|having|as|order|desc|where|and)$/i;
const FN = /^(count|sum|nvl|max|min)$/i;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function highlight(src) {
  return src.replace(/([A-Za-z_][A-Za-z0-9_]*)|(\d+)|('[^']*')|([(),.;=>*])/g, (m, w, n, s, o) => {
    if (w) {
      if (KW.test(w)) return `<span class="k">${w}</span>`;
      if (FN.test(w)) return `<span class="f">${w}</span>`;
      return w;
    }
    if (n) return `<span class="n">${n}</span>`;
    if (s) return `<span class="s">${esc(s)}</span>`;
    return `<span class="o">${esc(o)}</span>`;
  });
}

export function initEditor() {
  const section = document.querySelector('.editor');
  const ide = section?.querySelector('[data-ide]');
  if (!ide) return { frame() {} };
  const scene = section.querySelector('.editor__scene');
  const code = ide.querySelector('[data-ide-code]');
  const gutter = ide.querySelector('[data-ide-gutter]');
  const ac = ide.querySelector('[data-ide-ac]');
  const ln = ide.querySelector('[data-ide-ln]');
  const col = ide.querySelector('[data-ide-col]');
  const status = ide.querySelector('[data-ide-status]');
  const search = ide.querySelector('[data-ide-search]');
  const aiTyped = ide.querySelector('[data-ide-ai-typed]');
  const btnFormat = ide.querySelector('[data-ide-format]');
  const btnRun = ide.querySelector('[data-ide-run]');
  const exportBtns = ide.querySelectorAll('[data-ide-export]');
  const flies = ide.querySelectorAll('.ide__fly');
  const steps = [...section.querySelectorAll('.estep')];
  const pre = ide.querySelector('.ide__pre');

  const nowTitle = section.querySelector('[data-now-title]');
  const nowText = section.querySelector('[data-now-text]');
  let nowStep = -1;

  // метрики моноширинного шрифта — для позиции подсказки автодополнения
  const ctx = document.createElement('canvas').getContext('2d');
  let chW = 8.1;
  let lineH = 22;
  let gutterW = 44;
  const metrics = () => {
    const cs = getComputedStyle(pre);
    ctx.font = `${cs.fontSize} "Geist Mono", ui-monospace, monospace`;
    chW = ctx.measureText('x'.repeat(20)).width / 20 || 8.1;
    lineH = parseFloat(cs.lineHeight) || 22;
    gutterW = gutter.offsetWidth || 44;
  };

  // масштаб макета под экран
  const fit = () => {
    const r = scene.getBoundingClientRect();
    const s = Math.min(1, (r.width * 0.98) / ide.offsetWidth, (r.height * 0.92) / ide.offsetHeight);
    scene.style.setProperty('--ide-scale', s.toFixed(3));
    metrics();
    last = '';
  };
  const acStart = RAW.indexOf('on e.department_id') + 3;
  let p = 0;
  let last = '';
  fit();
  window.addEventListener('resize', fit);
  ScrollTrigger.addEventListener('refreshInit', fit);

  if (env.reduced) {
    p = 1;
  } else {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => (p = self.progress),
    });
    // вход в секцию: макет подлетает из глубины
    gsap.from(ide, {
      opacity: 0,
      '--z': -500,
      duration: 1.6,
      ease: 'expo.out',
      scrollTrigger: { trigger: section, start: 'top 70%', once: true },
    });
  }

  function render() {
    // этапы по четвертям прокрутки
    const s0 = seg(p, 0.02, 0.22); // набор запроса
    const s1 = seg(p, 0.27, 0.47); // ИИ
    const s2 = seg(p, 0.52, 0.72); // формат → запуск → экспорт
    const s3 = seg(p, 0.77, 0.95); // вкладки, папки, поиск
    const step = p < 0.25 ? 0 : p < 0.5 ? 1 : p < 0.75 ? 2 : 3;

    // поворот макета: в начале он лежит в перспективе, затем выпрямляется
    const flat = easeInOut(seg(p, 0, 0.14));
    const sway = env.reduced ? 0 : 1;
    ide.style.setProperty('--rx', `${lerp(20, 3, flat) + pointer.sy * -2 * sway}deg`);
    ide.style.setProperty('--ry', `${lerp(-26, -4, flat) + pointer.sx * 3 * sway}deg`);
    ide.style.setProperty('--rz', `${lerp(5, 0, flat)}deg`);

    // текст в редакторе
    const formatted = s2 > 0.12;
    let text;
    let html;
    if (!formatted) {
      const n = Math.round(easeOut(s0) * RAW.length);
      text = RAW.slice(0, n);
      html = highlight(text);
      if (s1 > 0) {
        // подсказка ИИ: подчёркнут подозрительный COUNT и предложена строка ORDER BY
        html = html.replace(/(<span class="f">count<\/span><span class="o">\(<\/span>p<span class="o">\.<\/span>project_id<span class="o">\)<\/span>)/, '<span class="err">$1</span>');
        const g = Math.round(seg(s1, 0.35, 0.9) * GHOST.length);
        if (g) html += `<span class="ghost">${esc(GHOST.slice(0, g))}</span>`;
      }
    } else {
      // после форматирования предложение ИИ принято
      text = FORMATTED + GHOST;
      html = highlight(text);
    }
    const caretOn = !formatted && s0 < 1 && s0 > 0;
    const key = html + caretOn;
    if (key !== last) {
      last = key;
      code.innerHTML = html + (caretOn || (s0 >= 1 && s1 === 0) ? '<span class="cur"></span>' : '');
      const lines = text.split('\n');
      gutter.textContent = lines.map((_, i) => String(i + 1)).join('\n');
      ln.textContent = lines.length;
      col.textContent = lines[lines.length - 1].length + 1;
      // подсказка автодополнения у курсора
      const showAc = !formatted && text.length > acStart && text.length < acStart + 16;
      ide.classList.toggle('ac-on', showAc);
      if (showAc) {
        const curLine = lines.length - 1;
        const maxCol = Math.max(10, Math.floor((pre.clientWidth - 240) / chW));
        ac.style.left = `${gutterW + Math.min(lines[curLine].length, maxCol) * chW}px`;
        ac.style.top = `${12 + (curLine + 1) * lineH + 4}px`;
      }
    }

    // ИИ-панель
    ide.classList.toggle('ai-on', s1 > 0.05 && p < 0.5);
    const q = 'Explain the LEFT JOIN';
    aiTyped.textContent = q.slice(0, Math.round(seg(s1, 0.5, 0.95) * q.length));

    // формат, запуск, экспорт
    btnFormat.classList.toggle('is-press', s2 > 0.06 && s2 < 0.16);
    btnRun.classList.toggle('is-press', s2 > 0.3 && s2 < 0.4);
    const ran = s2 > 0.38;
    ide.classList.toggle('results-on', ran);
    pre.style.transform = gutter.style.transform = ran ? 'translateY(-150px)' : '';
    status.textContent = s2 > 0.3 && !ran ? 'Running…' : ran ? 'Fetched 50 rows · page 1' : formatted ? 'Formatted' : 'Ready';
    const exp = seg(s2, 0.6, 1);
    exportBtns.forEach((b, i) => b.classList.toggle('is-press', exp > 0.05 + i * 0.25 && exp < 0.2 + i * 0.25));
    flies.forEach((f, i) => {
      const t = easeOut(clamp((exp - i * 0.2) / 0.7));
      const out = 1 - seg(p, 0.8, 0.86);
      f.style.opacity = String(Math.min(1, t * 3) * out);
      f.style.transform = `translate3d(${t * (90 + i * 70)}px, ${-t * (170 + i * 50)}px, ${t * 160}px) rotate(${t * (12 - i * 22)}deg)`;
    });

    // управление запросами
    ide.classList.toggle('tabs-on', s3 > 0.05);
    ide.classList.toggle('folders-on', s3 > 0.3);
    const sq = 'project';
    const sn = Math.round(seg(s3, 0.5, 0.85) * sq.length);
    search.textContent = sq.slice(0, sn);
    ide.classList.toggle('search-on', sn > 2);

    // список шагов (на телефоне активный шаг подписан под полосками)
    if (step !== nowStep && nowTitle) {
      nowStep = step;
      nowTitle.textContent = steps[step].querySelector('h3').textContent;
      nowText.textContent = steps[step].querySelector('p').textContent;
    }
    steps.forEach((el, i) => {
      el.classList.toggle('is-active', i === step);
      el.classList.toggle('is-done', i < step);
      const sp = i < step ? 1 : i > step ? 0 : clamp((p - i * 0.25) / 0.25);
      el.style.setProperty('--sp', sp.toFixed(3));
    });
  }

  render();
  return { frame: render };
}
