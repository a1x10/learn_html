// npm run dev — запуск сайта HUSTLE с «церемонией»:
// баннер → загрузка файлов (15 с) → проверка компонентов → капча-уравнение → сервер.
// Быстрый запуск без церемонии: npm run dev -- --fast
import * as esbuild from 'esbuild';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline';

const root = path.dirname(fileURLToPath(import.meta.url));
const FAST = process.argv.includes('--fast');
const PORT = Number(process.env.PORT) || 5173;
const LOAD_MS = 15000;

// ——— Цвета и мелочи
const tty = process.stdout.isTTY;
const c = (code) => (s) => (tty ? `\x1b[${code}m${s}\x1b[0m` : String(s));
const lime = c('38;5;154'), violet = c('38;5;141'), pink = c('38;5;205'), cyan = c('38;5;51');
const dim = c('2'), bold = c('1'), red = c('31'), green = c('32');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const W = 58;
const line = (ch = '=') => console.log(violet(ch.repeat(W)));
const write = (s) => process.stdout.write(s);
const clearLine = () => { if (tty) write('\r\x1b[2K'); };

// ——— 1. Баннер
function banner() {
  console.log();
  line();
  const logo = [
    '  _   _ _   _ ____ _____ _     _____ ',
    ' | | | | | | / ___|_   _| |   | ____|',
    ' | |_| | | | \\___ \\ | | | |   |  _|  ',
    ' |  _  | |_| |___) || | | |___| |___ ',
    ' |_| |_|\\___/|____/ |_| |_____|_____|',
  ];
  const cols = [lime, cyan, violet, pink, pink];
  logo.forEach((l, i) => console.log(cols[i](l)));
  console.log();
  console.log('  ' + bold('Биржа заработка для молодёжи') + dim('  ·  dev-сервер'));
  line();
  console.log();
}

// ——— 2. «Загрузка» сайта: идём по настоящим файлам проекта и зависимостей ровно 15 секунд
function collectFiles() {
  const out = [];
  const walk = (dir, limit) => {
    let list;
    try { list = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of list) {
      if (out.length >= limit) return;
      if (e.name.startsWith('.') || e.name === 'dist') continue;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p, limit);
      else { try { out.push({ p: path.relative(root, p), size: fs.statSync(p).size }); } catch {} }
    }
  };
  for (const d of ['index.html', 'assets', 'src']) {
    const p = path.join(root, d);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) out.push({ p: d, size: fs.statSync(p).size });
    else walk(p, 200);
  }
  for (const pkg of ['three', 'gsap', 'lenis', 'esbuild']) walk(path.join(root, 'node_modules', pkg), out.length + 120);
  return out;
}
const kb = (n) => (n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : (n / 1024).toFixed(1) + ' KB');

async function loadSite() {
  console.log(bold('  Загрузка сайта ') + lime('/hustle/'));
  console.log();
  const files = collectFiles();
  const total = files.reduce((s, f) => s + f.size, 0);
  const spin = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const start = Date.now();
  let shown = 0, frame = 0;
  while (true) {
    const t = Math.min(1, (Date.now() - start) / LOAD_MS);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const idx = Math.min(files.length, Math.floor(eased * files.length));
    // печатаем файлы, которые «скачались» с прошлого кадра (не больше 3 за кадр, чтобы не мельтешило)
    let printed = 0;
    while (shown < idx && printed < 3) {
      const f = files[shown++];
      clearLine();
      console.log(`  ${green('✓')} ${dim(f.p.length > 40 ? '…' + f.p.slice(-39) : f.p.padEnd(40))} ${cyan(kb(f.size).padStart(9))}`);
      printed++;
    }
    if (shown < idx) shown = idx;
    const barW = 30, fill = Math.round(barW * eased);
    const done = files.slice(0, shown).reduce((s, f) => s + f.size, 0);
    const bar = lime('█'.repeat(fill)) + dim('░'.repeat(barW - fill));
    clearLine();
    write(`  ${violet(spin[frame++ % spin.length])} [${bar}] ${bold(String(Math.round(t * 100)).padStart(3))}%  ${dim(`${shown}/${files.length} файлов · ${kb(done)} / ${kb(total)}`)}`);
    if (!tty) write('\n');
    if (t >= 1) break;
    await sleep(tty ? 80 : 1500);
  }
  clearLine();
  console.log(`  ${lime('█'.repeat(30))} 100%  ${green(`Загружено ${files.length} файлов · ${kb(total)}`)}`);
  console.log();
}

// ——— 3. Проверка компонентов (настоящая)
async function checkComponents() {
  console.log(bold('  Проверка компонентов'));
  console.log();
  const major = Number(process.versions.node.split('.')[0]);
  const ver = (pkg) => { try { return JSON.parse(fs.readFileSync(path.join(root, 'node_modules', pkg, 'package.json'), 'utf8')).version; } catch { return null; } };
  const checks = [
    ['Node.js', major >= 18 ? process.versions.node : null, 'нужна версия 18 или новее'],
    ['esbuild', ver('esbuild'), 'выполни npm install'],
    ['three (3D)', ver('three'), 'выполни npm install'],
    ['gsap (анимации)', ver('gsap'), 'выполни npm install'],
    ['lenis (плавный скролл)', ver('lenis'), 'выполни npm install'],
    ['index.html', fs.existsSync(path.join(root, 'index.html')) ? 'на месте' : null, 'файл не найден'],
    ['src/main.js', fs.existsSync(path.join(root, 'src/main.js')) ? 'на месте' : null, 'файл не найден'],
  ];
  let ok = true;
  for (const [name, v, hint] of checks) {
    write(`  ${dim('…')} ${name}`);
    await sleep(FAST ? 0 : 220);
    clearLine();
    if (v) console.log(`  ${green('✓')} ${name.padEnd(26)} ${dim(v)}`);
    else { ok = false; console.log(`  ${red('✗')} ${name.padEnd(26)} ${red(hint)}`); }
  }
  console.log();
  if (!ok) {
    console.log(red('  Не все компоненты установлены. Выполни npm install и запусти снова.'));
    process.exit(1);
  }
  console.log(green('  Все компоненты установлены.'));
  console.log();
}

// ——— 4. Капча: реши уравнение
function makeEquation() {
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const x = r(2, 12), a = r(2, 9), b = r(1, 30);
  if (Math.random() < 0.5) return { text: `${a}x + ${b} = ${a * x + b}`, x };
  const c2 = a * x - b;
  return c2 > 0 ? { text: `${a}x − ${b} = ${c2}`, x } : { text: `${a}x + ${b} = ${a * x + b}`, x };
}
async function captcha() {
  line('-');
  console.log(bold('  Подтвердите, что вы человек 🤖'));
  console.log(dim('  Решите уравнение и введите x'));
  line('-');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise((res) => rl.question(q, res));
  let passed = false;
  rl.on('close', () => { if (!passed) { console.log(red('\n  Капча не пройдена — запуск отменён.')); process.exit(1); } });
  for (let tries = 1; ; tries++) {
    const eq = makeEquation();
    console.log();
    console.log('  ' + lime(bold(eq.text)));
    const ans = (await ask(`  ${violet('x =')} `)).trim().replace(',', '.');
    if (Number(ans) === eq.x) {
      passed = true;
      console.log(`  ${green('✓ Верно!')} Вы человек.`);
      break;
    }
    console.log(`  ${red('✗ Неверно')}. Попробуйте ещё одно уравнение.`);
    if (tries >= 5) { console.log(red('\n  Слишком много попыток — запуск отменён.')); passed = true; rl.close(); process.exit(1); }
  }
  rl.close();
  console.log();
}

// ——— 5. Сборка в режиме слежения + сервер
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.json': 'application/json', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};
const clients = new Set();
const RELOAD = `<script>new EventSource('/__reload').onmessage=()=>location.reload()</script>`;

async function serve() {
  const common = { bundle: true, sourcemap: 'inline', target: ['es2020', 'safari15'], logLevel: 'silent' };
  const notify = { name: 'reload', setup(b) { b.onEnd((r) => {
    if (r.errors.length) console.log(red(`  ✗ Ошибка сборки: ${r.errors[0].text}`));
    else { for (const res of clients) res.write('data: reload\n\n'); }
  }); } };
  const ctxs = await Promise.all([
    esbuild.context({ ...common, entryPoints: [path.join(root, 'src/main.js')], outfile: path.join(root, '.dev/app.js'), format: 'iife', plugins: [notify] }),
    esbuild.context({ ...common, entryPoints: [path.join(root, 'src/styles/main.css')], outfile: path.join(root, '.dev/app.css'), plugins: [notify] }),
  ]);
  await Promise.all(ctxs.map((x) => x.rebuild()));
  await Promise.all(ctxs.map((x) => x.watch()));

  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    if (url === '/__reload') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
      res.write(': ok\n\n'); clients.add(res); req.on('close', () => clients.delete(res)); return;
    }
    let p = path.normalize(path.join(root, url.replace(/^\/hustle/, '')));
    // свежая сборка лежит в .dev/, чтобы не трогать готовые assets/ для публикации
    const m = url.match(/\/assets\/(app\.(?:js|css))$/);
    if (m) p = path.join(root, '.dev', m[1]);
    if (!p.startsWith(root) || p.includes(`${path.sep}node_modules`)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
    fs.readFile(p, (err, data) => {
      if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Не найдено'); }
      const type = MIME[path.extname(p)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
      res.end(type.startsWith('text/html') ? data.toString().replace('</body>', RELOAD + '</body>') : data);
    });
  });
  const listen = (port) => new Promise((resolve) => {
    server.once('error', (e) => { if (e.code === 'EADDRINUSE') resolve(listen(port + 1)); else throw e; });
    server.listen(port, () => resolve(port));
  });
  const port = await listen(PORT);

  line();
  console.log(`  ${lime('●')} ${bold('Сайт запущен!')}`);
  console.log();
  console.log(`  ${dim('Открой в браузере:')}  ${cyan(bold(`http://localhost:${port}/hustle/`))}`);
  console.log(`  ${dim('Правки в src/ подхватываются сами, страница перезагрузится.')}`);
  console.log(`  ${dim('Остановить:')} Ctrl + C`);
  line();
}

// ——— Запуск
banner();
if (!FAST) await loadSite();
await checkComponents();
if (!FAST) await captcha();
await serve();
