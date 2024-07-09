'use client';

import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Placeholder from '@/assets/images/placeholder.svg';
import { Button } from '@/components/ui';

const Home = () => {
  const session = useSession();

  const handleSignIn = async () => {
    await signIn('github', { callbackUrl: '/dashboard' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <GitHubLogoIcon className="size-6" />
            <span className="text-xl font-bold">Builds Hub</span>
          </div>
          <div className="flex items-center">
            {session.data ? (
              <Link href="/dashboard">
                <Button>
                  Go to App
                  <ArrowRightIcon className="ml-2 size-4" />
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your GitHub Actions Workflow
                  </h1>
                  <p className="max-w-xl text-muted-foreground md:text-xl">
                    Manage your GitHub Actions directly within our intuitive web
                    application. Securely connect your repositories, monitor
                    your workflows, and configure your actions with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 border border-red-500 md:flex-row">
                  <Button onClick={() => handleSignIn()}>Connect GitHub</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <Image
                className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
                src={Placeholder}
                alt="Placeholder"
                width="550"
                height="550"
                priority
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2 text-center">
                <p className="text-sm">Manage GitHub Actions</p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Workflows
                </h2>
                <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our GitHub Actions management platform empowers you to
                  monitor, enable/disable, and configure your actions directly
                  within the app, saving you time and effort.
                </p>
              </div>
              <div className="grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  src={Placeholder}
                  alt="Placeholder"
                  width="550"
                  height="310"
                  priority
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Repository Overview
                        </h3>
                        <p className="text-muted-foreground">
                          View all your connected repositories and their
                          associated GitHub Actions.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Action Management</h3>
                        <p className="text-muted-foreground">
                          Monitor, enable/disable, and configure your GitHub
                          Actions directly within the app.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Secure Integration
                        </h3>
                        <p className="text-muted-foreground">
                          Securely connect your GitHub account to access your
                          repositories and actions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simplify Your GitHub Actions Workflow
                </h2>
                <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our intuitive and responsive user interface mimics the
                  familiar GitHub experience, making it easy to manage your
                  actions and workflows.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row lg:justify-end">
                <Button onClick={() => handleSignIn()}>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row sm:justify-between md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Builds Hub. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs underline-offset-4 hover:underline"
            href="#"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
