import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf2',
      filename: 'remoteEntry.js',
      remotes: {
        shell: 'http://localhost:3000/dist/assets/remoteEntry.js', // ajusta el puerto si cambia
      },
      exposes: {
        './Page': './src/pages/principal.tsx'
      },
      shared: ['react', 'react-dom']
    }),
    tailwindcss()
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})