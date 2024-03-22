import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
  },
    build: {
    // Adding the fix for mixed ES and CommonJS modules
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
