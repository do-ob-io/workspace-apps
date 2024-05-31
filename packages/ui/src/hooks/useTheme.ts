import React from 'react';

/**
 * Provide methods to manage the theme of the application
 */
export function useTheme(prefer: 'light' | 'dark' = 'light') {
  const [ theme, themeSet ] = React.useState<'light' | 'dark'>(prefer);

  React.useLayoutEffect(() => {
    // Observe the theme class name of the html element
    const observer = new MutationObserver(() => {
      const next = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      if (next !== theme) {
        themeSet(next);
      }
    });
    // Start observing the theme class name of the html element
    observer.observe(document.documentElement, { attributes: true, attributeFilter: [ 'class' ] });

    // Check if the html element already has a theme class name.
    if (document.documentElement.classList.contains('light') || document.documentElement.classList.contains('dark')) {
      const documentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      themeSet(documentTheme);
    }

    // Clean up the observer
    return () => observer.disconnect();
  }, []);

  const themeToggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    themeSet(next);
  };

  // Every time the theme changes, store it in the local storage
  React.useEffect(() => {
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  }, [ theme ]);

  return {
    theme,
    themeSet,
    themeToggle
  };
}
