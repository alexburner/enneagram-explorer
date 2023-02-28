import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: false,
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  // For github pages
  // -> https://vitejs.dev/guide/static-deploy.html#github-pages
  base: '/enneagram-explorer/',
  build: { outDir: 'docs' },
})
