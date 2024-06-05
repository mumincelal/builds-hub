'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui';
import { abbreviate } from '@/utils/string';

const Dashboard = () => {
  const session = useSession();

  // const handleSignOut = async () => {
  //   await signOut({
  //     callbackUrl: '/',
  //     redirect: false
  //   });

  //   router.push('/');
  // };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background sticky top-0 flex h-16 items-center justify-between border-b px-6">
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
    </div>
  );
};

export default Dashboard;
