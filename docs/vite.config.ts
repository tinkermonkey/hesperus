import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // Point directly at Heimdall source so token/component changes are live
      '@tinkermonkey/heimdall-ui/css': path.resolve(__dirname, '../../heimdall/src/tokens/tokens.css'),
      '@tinkermonkey/heimdall-ui': path.resolve(__dirname, '../../heimdall/src/index.ts'),
      // Point at Hesperus source CSS so theme changes are live
      '@tinkermonkey/hesperus-theme': path.resolve(__dirname, '../src/hesperus.css'),
    },
  },
})
