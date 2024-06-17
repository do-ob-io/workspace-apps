import React from 'react';
import { settings } from '@-/logic/system';

export async function getSystemSettings() {
  return await settings();
}

export default async function Home() {

  const settings = await getSystemSettings();

  const appName = settings.find(setting => setting.$id === 'name')?.value;
  const appDescription = settings.find(setting => setting.$id === 'description')?.value;

  return (
    <main className="m-auto flex min-h-screen flex-col gap-4 p-24 text-foreground">
      <article className="prose mx-auto w-full max-w-screen-md dark:prose-invert">
        <h1>Welcome to the Workspace</h1>
        <h2></h2>
        <p>My initial system settings</p>
        <ul>
          <li>{appName}</li>
          <li>{appDescription}</li>
        </ul>
      </article>
    </main>
  );
}
