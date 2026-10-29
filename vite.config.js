import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        services: resolve(import.meta.dirname, 'services.html'),
        properties: resolve(import.meta.dirname, 'properties.html'),
        contact: resolve(import.meta.dirname, 'contact.html')
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    strictPort: false
  }
});

