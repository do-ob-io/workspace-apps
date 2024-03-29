import { mergeConfig, defineConfig } from 'vite';
import { viteLibConfig } from '@do-ob/vite-lib-config';

export default mergeConfig(
  viteLibConfig({ formats: ['es', 'cjs']}),
  defineConfig({}),
);
