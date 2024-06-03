/// <reference types="vitest" />
import { mergeConfig, defineConfig } from 'vite';
import { viteLibConfig } from '@do-ob/vite-lib-config';

export default mergeConfig(
  viteLibConfig(),
  defineConfig({
    build: {
      rollupOptions: {
        external: [
          'net',
          'fs',
          'path',
          'net',
          'tls',
          'crypto',
          'stream',
          'http',
          'https',
          'dns'
        ],
      },
    },
    test: {
      include: [ '**/*.{test,spec}.?(c|m)[jt]s?(x)' ],
      setupFiles: [ 'dotenv/config' ],
    },
  }),
);
