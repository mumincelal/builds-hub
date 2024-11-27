'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui';

export const BottomSection = () => {
  const handleSignIn = async () => {
    await signIn('github', { callbackUrl: '/dashboard' });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simplify Your GitHub Actions Workflow
            </h2>
            <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive and responsive user interface mimics the familiar
              GitHub experience, making it easy to manage your actions and
              workflows.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row lg:justify-end">
            <Button onClick={() => handleSignIn()} disabled>
              Get Started
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
