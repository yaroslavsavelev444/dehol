import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // откроется сразу после сборки
      gzipSize: true,
      brotliSize: true,
      filename: 'stats.html'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // Включает авторазделение на чанки
      }
    }
  }
})
