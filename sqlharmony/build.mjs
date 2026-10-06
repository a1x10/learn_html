// Build: node build.mjs             — site bundle into assets/
//        node build.mjs --artifact  — also one self-contained HTML in dist/
//        node build.mjs --watch     — rebuild on change
//        DEV_OUT=<dir> node build.mjs — also builds dev labs (src/dev/*.js) into <dir>
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { writeMarks } from './scripts/mark.mjs';

const root = path.dirname(new URL(import.meta.url).pathname);
const args = new Set(process.argv.slice(2));
const devOut = process.env.DEV_OUT;

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
  { ...common, entryPoints: [path.join(root, 'src/styles/main.css')], outfile: path.join(root, 'assets/app.css'), loader: { '.css': 'css', '.svg': 'dataurl' } },
];
if (devOut) {
  for (const f of fs.readdirSync(path.join(root, 'src/dev')).filter((f) => f.endsWith('.js'))) {
    builds.push({ ...common, minify: false, entryPoints: [path.join(root, 'src/dev', f)], outfile: path.join(devOut, f), format: 'iife' });
  }
}

writeMarks(root);

if (args.has('--watch')) {
  for (const b of builds) (await esbuild.context(b)).watch();
} else {
  await Promise.all(builds.map((b) => esbuild.build(b)));
  if (args.has('--artifact')) buildArtifact();
}

// One HTML file without <html>/<head>/<body> — for publishing as a claude.ai Artifact.
// Images referenced as assets/img/* are inlined as data: URIs.
function buildArtifact() {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'assets/app.css'), 'utf8');
  const js = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8').replace(/<\/script/gi, '<\\/script');
  const head = html.match(/<head>([\s\S]*?)<\/head>/i)[1];
  let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1];
  const bodyClass = html.match(/<body[^>]*class="([^"]*)"/i)?.[1] || '';
  const fonts = head.match(/<link[^>]+fonts\.googleapis\.com\/css2[^>]+>/i)?.[0] || '';
  const mime = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml' };
  body = body.replace(/(src|href|data-src)="(assets\/img\/[^"]+)"/g, (m, attr, p) => {
    const file = path.join(root, p);
    if (!fs.existsSync(file)) return m;
    const ext = p.split('.').pop().toLowerCase();
    return `${attr}="data:${mime[ext] || 'application/octet-stream'};base64,${fs.readFileSync(file).toString('base64')}"`;
  });
  const out = [
    '<title>SQL Harmony</title>',
    '<meta name="description" content="SQL Harmony — the free SQL workbench for Oracle Fusion Cloud: web app and Windows desktop.">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    fonts,
    `<style>${css}</style>`,
    `<script>document.documentElement.classList.add('js','is-artifact');document.documentElement.classList.remove('no-js');</script>`,
    bodyClass ? `<script>document.body&&document.body.classList.add(${bodyClass.split(/\s+/).filter(Boolean).map((c) => JSON.stringify(c)).join(',')})</script>` : '',
    body.replace(/<script[^>]*src="assets\/app\.js"[^>]*><\/script>/i, '').trim(),
    `<script>${js}</script>`,
  ].join('\n');
  fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
  fs.writeFileSync(path.join(root, 'dist/sqlharmony.html'), out);
  console.log('artifact:', (out.length / 1024).toFixed(0), 'KB');
}
