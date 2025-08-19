import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  base: '/rosy-website/',
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
})
