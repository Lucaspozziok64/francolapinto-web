import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto es importante para Netlify
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  publicDir: 'public', // Asegura que la carpeta public se copie
})
