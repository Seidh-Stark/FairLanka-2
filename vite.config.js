import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/FairLanka-2/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
