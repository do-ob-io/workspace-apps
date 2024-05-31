/// <reference types="vitest" />
import { mergeConfig, defineConfig } from 'vite';
import { viteLibConfig } from '@do-ob/vite-lib-config';

export default mergeConfig(
  viteLibConfig({
    dts: {
      exclude: [ '**/*.test.ts' ],
    },
  }),
  defineConfig({}),
);
