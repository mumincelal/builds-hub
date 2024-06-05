'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type ProvidersProps = Readonly<{ children: ReactNode }>;

export const Providers = ({ children }: ProvidersProps) => {
  let mutableChildren = children;

  mutableChildren = <SessionProvider>{mutableChildren}</SessionProvider>;

  return mutableChildren;
};
