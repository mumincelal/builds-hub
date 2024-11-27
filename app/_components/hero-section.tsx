'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import Placeholder from '@/assets/images/placeholder.svg';
import { Button } from '@/components/ui';

export const HeroSection = () => {
  const handleSignIn = async () => {
    await signIn('github', { callbackUrl: '/dashboard' });
  };

  return (
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
                application. Securely connect your repositories, monitor your
                workflows, and configure your actions with ease.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <Button onClick={() => handleSignIn()} disabled>
                Connect GitHub
              </Button>
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
  );
};
