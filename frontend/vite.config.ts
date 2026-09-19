import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  //base: process.env.NODE_ENV === 'production' ? '/it-stn-consulting/' : '/',
  plugins: [vue()],
  base: '/it-stn-consulting/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
