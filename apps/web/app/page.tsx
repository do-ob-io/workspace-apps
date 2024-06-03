import React from 'react';
import { ThemeSwitch } from '@-/ui';
import { settings } from '@-/logic/system';

export async function getSystemSettings() {
  return await settings();
}

export default async function Home() {

  const settings = await getSystemSettings();

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24 bg-background text-foreground">
      <h1>Hello React/NextUI/NextJS Web Application with TailwindCSS!</h1>
      <ThemeSwitch prefer={process.env.NEXT_PUBLIC_THEME as 'light' | 'dark'} />
      <ul>
        {settings.map(setting => (
          <li>
            <div key={setting.$id}>
              <h2>{setting.$id}</h2>
              <p>{setting.description}</p>
              <p>{setting.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
