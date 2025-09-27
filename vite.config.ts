import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      '/productsApi': 'http://127.0.0.1:20000',
      '/newsApi': 'http://127.0.0.1:20003',
      '/educationApi': 'http://127.0.0.1:20003',
      '/galleryApi': 'http://127.0.0.1:20004'
    }
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()]
});
