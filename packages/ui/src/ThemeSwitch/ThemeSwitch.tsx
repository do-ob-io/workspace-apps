'use client';

import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { useTheme } from '../hooks/useTheme';

/**
 * ThemeSwitchProps
 */
export interface ThemeSwitchProps {
  prefer?: 'light' | 'dark';
}

/**
 * This switch is used to toggle the theme of the application. It toggles between 'light' and 'dark'
 * class names that are applied to the html element of the document.
 */
export function ThemeSwitch({
  prefer = 'light'
}: ThemeSwitchProps) {

  const { theme, themeToggle } = useTheme(prefer);

  return (
    <Switch
      isSelected={theme === 'dark'}
      onClick={themeToggle}
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
    >
      Theme
    </Switch>
  );
}

export default ThemeSwitch;
