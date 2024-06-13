'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type ProvidersProps = Readonly<{ children: ReactNode }>;

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
  let mutableChildren = children;

  mutableChildren = <SessionProvider>{mutableChildren}</SessionProvider>;

  mutableChildren = (
    <QueryClientProvider client={queryClient}>
      {mutableChildren}
    </QueryClientProvider>
  );

  return mutableChildren;
};
