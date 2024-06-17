import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import tailwindTypography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@do-ob/ui/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    nextui(),
    tailwindTypography,
  ],
};
export default config;
