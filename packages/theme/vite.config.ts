import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'modules',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        config: resolve(__dirname, 'src/config.ts'),
        plugin: resolve(__dirname, 'src/plugin.ts')
      },
      name: 'Theme',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
      external: [
        'tailwindcss',
        'tailwindcss/plugin',
      ],
    },
  },
});
