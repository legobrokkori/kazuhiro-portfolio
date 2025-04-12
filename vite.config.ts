import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ↓ export default ではなく module.exports にするとNodeに確実に読まれる
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
})