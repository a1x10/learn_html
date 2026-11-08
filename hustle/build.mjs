// Сборка: node build.mjs          — сайт в assets/
//         node build.mjs --watch  — пересборка при изменениях
import * as esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const watch = process.argv.includes('--watch');
const common = {
  bundle: true,
  minify: !watch,
  sourcemap: watch ? 'inline' : false,
  target: ['es2020', 'safari15'],
  legalComments: 'eof',
  logLevel: 'info',
};
const builds = [
  { ...common, entryPoints: [path.join(root, 'src/main.js')], outfile: path.join(root, 'assets/app.js'), format: 'iife' },
  { ...common, entryPoints: [path.join(root, 'src/styles/main.css')], outfile: path.join(root, 'assets/app.css') },
];
if (watch) for (const b of builds) (await esbuild.context(b)).watch();
else await Promise.all(builds.map((b) => esbuild.build(b)));
