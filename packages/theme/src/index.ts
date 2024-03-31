import { configBase } from '@-/theme/config';
import { plugin } from '@-/theme/plugin';

/**
 * Base theme
 */
const base = {
  light: {
    '--color-primary-default': '76 130 233',
    '--color-secondary-default': '76 130 233',
  },
  dark: {
    '--color-primary-default': '7 19 42',
    '--color-secondary-default': '7 19 42',
  },
};

export { base, configBase, plugin };
