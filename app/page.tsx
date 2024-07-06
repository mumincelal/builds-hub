'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React from 'react';
import Placeholder from '@/assets/images/placeholder.svg';
import { Button } from '@/components/ui';

const Home = () => {
  const handleSignIn = async () => {
    await signIn('github', { callbackUrl: '/dashboard' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Builds Hub</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-32">
          <div className="container px-6">
            <div className="grid grid-cols-[1fr_600px] gap-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-6xl font-bold tracking-tighter">
                    Streamline Your GitHub Actions Workflow
                  </h1>
                  <p className="max-w-xl text-xl">
                    Manage your GitHub Actions directly within our intuitive web
                    application. Securely connect your repositories, monitor
                    your workflows, and configure your actions with ease.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => handleSignIn()}>Connect GitHub</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <Image
                className="aspect-square overflow-hidden rounded-xl"
                src={Placeholder}
                alt="Placeholder"
                width="550"
                height="550"
                priority
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-32">
          <div className="container px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2 text-center">
                <p className="text-sm">Manage GitHub Actions</p>
                <h2 className="text-5xl font-bold tracking-tighter">
                  Streamline Your Workflows
                </h2>
                <p className="max-w-4xl text-xl/relaxed">
                  Our GitHub Actions management platform empowers you to
                  monitor, enable/disable, and configure your actions directly
                  within the app, saving you time and effort.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-2 items-center gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Repository Overview
                        </h3>
                        <p className="">
                          View all your connected repositories and their
                          associated GitHub Actions.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Action Management</h3>
                        <p className="">
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
                        <p className="">
                          Securely connect your GitHub account to access your
                          repositories and actions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Image
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src={Placeholder}
                  alt="Placeholder"
                  width="550"
                  height="310"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-32">
          <div className="container px-6">
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="space-y-2">
                <h2 className="text-4xl/tight font-bold tracking-tighter">
                  Simplify Your GitHub Actions Workflow
                </h2>
                <p className="max-w-4xl text-xl/relaxed">
                  Our intuitive and responsive user interface mimics the
                  familiar GitHub experience, making it easy to manage your
                  actions and workflows.
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button onClick={() => handleSignIn()}>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between border-t px-4 py-6">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Builds Hub. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link className="text-xs hover:underline" href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline" href="#" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
