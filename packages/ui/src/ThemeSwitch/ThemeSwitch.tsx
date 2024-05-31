'use client';

import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export function ThemeSwitch() {

  const [ theme, themeSet ] = React.useState<'light' | 'dark'>('light');

  React.useLayoutEffect(() => {
    // Look for the class name light or dark in the body element
    const prefer = document.body.classList.contains('dark') ? 'dark' : 'light';
    themeSet(prefer);
  }, []);

  const themeToggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    themeSet(next);
    
    // Add the class name to the body element
    document.body.classList.remove(theme);
    document.body.classList.add(next);
  };

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
