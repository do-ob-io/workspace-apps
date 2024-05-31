import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteLibConfig from '@do-ob/vite-lib-config';

export default mergeConfig(
  viteLibConfig(),
  defineConfig({
    /** Your configurations here **/
    plugins: [
      react({
        babel: {
          plugins: [
            [ 'babel-plugin-react-compiler', {} ],
          ],
        },
      }),
    ],
  }),
);
