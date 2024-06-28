'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import { RepoCard } from '@/app/dashboard/_components';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui';
import { useRepos } from '@/queries';
import { abbreviate } from '@/utils/string';

const Dashboard = () => {
  const session = useSession();
  const { data: repos } = useRepos();

  // const handleSignOut = async () => {
  //   await signOut({
  //     callbackUrl: '/',
  //     redirect: false
  //   });

  //   router.push('/');
  // };

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src={session.data?.user?.image ?? undefined}
                alt={session.data?.user?.name ?? undefined}
              />
              <AvatarFallback>
                {abbreviate(session.data?.user?.name ?? '')}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4">
          {repos?.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
