import tailwindPlugin from 'tailwindcss/plugin.js';

/**
 * Plugin adds default color variables to the root element for the theme.
 */
export const plugin = tailwindPlugin(({ addBase }) => addBase({
  ':root': {
    '--color-primary-default': '76 130 233',
    '--color-secondary-defualt': '76 130 233',
  },
}));

export default plugin;
