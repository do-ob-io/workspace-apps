import React from 'react';
import { ThemeSwitch } from '@-/ui';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24 bg-background text-foreground">
      <h1>Hello React/NextUI/NextJS Web Application with TailwindCSS!</h1>
      <ThemeSwitch prefer={process.env.NEXT_PUBLIC_THEME as 'light' | 'dark'} />
    </main>
  );
}
