// Сборка: node build.mjs            — сайт в assets/
//         node build.mjs --artifact — дополнительно один самодостаточный HTML в dist/
//         node build.mjs --watch    — пересборка при изменениях
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname);
const args = new Set(process.argv.slice(2));
const devOut = null;

const common = {
  bundle: true,
  minify: !args.has('--watch'),
  sourcemap: args.has('--watch') ? 'inline' : false,
  target: ['es2020', 'safari15'],
  legalComments: 'eof',
  logLevel: 'info',
};

const builds = [
  { ...common, entryPoints: [path.join(root, 'src/main.js')], outfile: path.join(root, 'assets/app.js'), format: 'iife' },
  { ...common, entryPoints: [path.join(root, 'src/styles/main.css')], outfile: path.join(root, 'assets/app.css'), loader: { '.css': 'css' } },
];

if (args.has('--watch')) {
  for (const b of builds) (await esbuild.context(b)).watch();
} else {
  await Promise.all(builds.map((b) => esbuild.build(b)));
  if (args.has('--artifact')) buildArtifact();
}

// Один HTML-файл без <html>/<head>/<body> — для публикации как Artifact
function buildArtifact() {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'assets/app.css'), 'utf8');
  const js = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8').replace(/<\/script/gi, '<\\/script');
  const head = html.match(/<head>([\s\S]*?)<\/head>/i)[1];
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1];
  const fonts = head.match(/<link[^>]+fonts\.googleapis\.com\/css2[^>]+>/i)?.[0] || '';
  const out = [
    '<meta charset="utf-8">',
    '<title>SQL Harmony</title>',
    '<meta name="description" content="SQL Harmony — 3D-лендинг Oracle Fusion SQL-инструмента">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    fonts,
    `<style>${css}</style>`,
    `<script>document.documentElement.classList.add('js')</script>`,
    body
      .replace(/<script[^>]*src="assets\/app\.js"[^>]*><\/script>/i, '')
      .trim(),
    `<script>document.documentElement.classList.add('is-artifact');${js}</script>`,
  ].join('\n');
  fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
  fs.writeFileSync(path.join(root, 'dist/sqlharmony-artifact.html'), out);
  console.log('artifact:', (out.length / 1024).toFixed(0), 'KB');
}
