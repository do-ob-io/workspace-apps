import type { Config } from 'tailwindcss';

/**
 * A base theme configuration for this Tailwind CSS theme.
 */
export const configBase: Config = {
  content: [
    './**/*.{jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary-default) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary-default) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
};

export default configBase;
