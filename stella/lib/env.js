// Минимальный загрузчик .env без зависимостей.
import { readFileSync } from 'node:fs';

export function loadEnv(file) {
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    return;
  }
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    } else {
      value = value.replace(/\s+#.*$/, '');
    }
    if (!(m[1] in process.env)) process.env[m[1]] = value;
  }
}

export function env(name, fallback = '') {
  const v = process.env[name];
  return v === undefined || v === '' ? fallback : v;
}

export function envBool(name, fallback = false) {
  const v = process.env[name];
  if (v === undefined || v === '') return fallback;
  return /^(1|true|yes|on)$/i.test(v);
}
