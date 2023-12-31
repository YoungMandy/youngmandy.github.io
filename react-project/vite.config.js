
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../docs/react-docs',
  },
  base: 'https://youngmandy.github.io/react-docs/',
});