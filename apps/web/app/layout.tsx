import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

import { NavigationIsland } from '@do-ob/ui';
import { Provider } from './provider';

const inter = Inter({ subsets: [ 'latin' ] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={process.env.NEXT_PUBLIC_THEME}>
      
      <body className={inter.className}>
        <Provider>
          <NavigationIsland 
            title={metadata.title as string}
            logo="/next.svg"
          />
          <div>
            {children}
          </div>
        </Provider>
      </body>
      
    </html>
  );
}
