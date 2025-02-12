import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://w378zg6b-3000.use.devtunnels.ms',
        changeOrigin: true,
      }
    }
  }
})
