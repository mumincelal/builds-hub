'use client';

import { ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { RepoCard } from '@/app/dashboard/_components';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui';
import { useRepos } from '@/queries';
import { abbreviate } from '@/utils/string';

const Dashboard = () => {
  const session = useSession();
  const { data: repos } = useRepos();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-white px-6">
        <nav className="flex items-center">
          <Link href="/dashboard">
            <span className="cursor-pointer text-xl font-bold uppercase">
              Builds Hub
            </span>
            <span className="sr-only">Builds Hub</span>
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={session.data?.user?.image ?? undefined}
              alt={session.data?.user?.name ?? undefined}
            />
            <AvatarFallback>
              {abbreviate(session.data?.user?.name ?? '')}
            </AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="sm" onClick={() => signOut()}>
            <ExitIcon className="mr-2 size-4" /> Logout
          </Button>
        </div>
      </header>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {repos?.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
