import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import 'url-polyfill'
// import 'buffer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
