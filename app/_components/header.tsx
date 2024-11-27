'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui';

export const Header = () => {
  const session = useSession();

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold">Builds</span>
          <span className="rounded-md bg-slate-900 px-2 text-xl font-bold text-white">
            Hub
          </span>
        </div>
        <div className="flex items-center">
          {session.data ? (
            <Link href="/dashboard">
              <Button>
                Go to App
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
};
