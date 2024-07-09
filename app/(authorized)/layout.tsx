'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Placeholder from '@/assets/images/placeholder.svg';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui';
import { Home, Logout, Menu, Recycle, Workflow } from '@/icons';
import { abbreviate } from '@/utils/string';

const MENU_ITEMS: Readonly<
  {
    id: string;
    title: string;
    href: string;
    renderIcon: () => React.ReactNode;
  }[]
> = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    href: '/dashboard',
    renderIcon: () => <Home className="size-5" />
  },
  {
    id: 'repositories',
    title: 'Repositories',
    href: '/repositories',
    renderIcon: () => <Recycle className="size-5" />
  },
  {
    id: 'actions',
    title: 'Actions',
    href: '/actions',
    renderIcon: () => <Workflow className="size-5" />
  }
];

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <div className="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
              <GitHubLogoIcon className="size-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Builds Hub</span>
            </div>
            {MENU_ITEMS.map(({ id, href, renderIcon, title }) => (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <Link
                    className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    href={href}
                    prefetch={false}
                  >
                    {renderIcon()}
                    <span className="sr-only">{title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{title}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="sm:hidden" size="icon" variant="outline">
                <Menu className="size-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="space-y-6 sm:max-w-xs" side="left">
              <div className="group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                <GitHubLogoIcon className="size-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Builds Hub</span>
              </div>
              <nav className="grid gap-6 text-lg font-medium">
                {MENU_ITEMS.map(({ id, href, renderIcon, title }) => (
                  <Link
                    key={id}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    href={href}
                    prefetch={false}
                  >
                    {renderIcon()}
                    {title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="ml-auto md:grow-0">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={session.user.image ?? Placeholder}
                  alt={session.user.name ?? 'Anonymous'}
                />
                <AvatarFallback>
                  {abbreviate(session.user.name ?? 'Anonymous')}
                </AvatarFallback>
              </Avatar>
              <Button
                className="text-sm"
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
              >
                <Logout className="mr-2 size-5" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
