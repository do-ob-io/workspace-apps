import React from 'react';
import { ThemeSwitch } from '@-/ui';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background text-foreground">
      <h1>Hello React/NextJS Web Application with TailwindCSS!</h1>
      <ThemeSwitch />
    </main>
  );
}
