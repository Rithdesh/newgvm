
// Vite Configuration (vite.config.js)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // server: {
  //   port: 5173,
  //   strictPort: true,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'https://pwdapi.rajvikash-r2022cse.workers.dev',
  //       changeOrigin: true, // Enable CORS for API requests
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite API paths
  //     },
  //   },
  // },
  plugins: [react()],
});
