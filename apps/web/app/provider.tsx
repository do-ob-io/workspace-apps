'use client';

import type React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DoobUiProvider } from '@do-ob/ui/provider';

export function Provider({ children }: React.PropsWithChildren) {

  const router = useRouter();

  return (
    <DoobUiProvider
      image={Image}
      mode={process.env.NEXT_PUBLIC_THEME as 'light' | 'dark'}
      nextui={{
        navigate: router.push,
      }}
    >
      {children}
    </DoobUiProvider>
  );
}
