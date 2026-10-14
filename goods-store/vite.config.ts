import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base: './' — собранный сайт работает из любой папки (GitHub Pages, любой статический хостинг)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
