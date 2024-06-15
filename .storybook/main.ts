import type { StorybookConfig } from '@storybook/nextjs';
import { resolve, join } from 'node:path';
import fs from 'node:fs';

const packagesPath = resolve(__dirname, '../packages');
const packages = fs.readdirSync(packagesPath)
  .filter((file) => fs.statSync(join(packagesPath, file)).isDirectory());

const aliases = packages.reduce((acc, pack) => {
  const srcFolder = join(packagesPath, pack, 'src');
  const hasSrc = fs.existsSync(srcFolder);
  if (!hasSrc) {
    return acc;
  }

  acc[`@-/${pack}$`] = packagesPath + '/' + pack + '/src';

  return acc;
}, {});

console.log(aliases);

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...aliases,
        },
      },
    };
  },
};
export default config;
