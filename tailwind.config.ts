import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [
    require('@-/theme').configBase,
  ],
  darkMode: 'class',
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@-/theme').plugin,
  ],
};
export default config;
