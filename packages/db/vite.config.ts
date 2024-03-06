/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    target: 'modules',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      name: 'Db',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
      external: [
        'drizzle-orm',
        'drizzle-orm/pg-core',
        'drizzle-kit',
      ],
    },
  },
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: ['dotenv/config'],
  },
});
