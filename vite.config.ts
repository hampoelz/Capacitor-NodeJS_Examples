import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  publicDir: '../static',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
});
