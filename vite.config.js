import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite'



export default defineConfig({
  plugins: [react()],
  base: '/rosy-project/',
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
})
