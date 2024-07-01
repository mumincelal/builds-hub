'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
import React from 'react';
import { Button } from '@/components/ui';
import { Spinner } from '@/icons';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn('github', { callbackUrl: '/dashboard' });
    setIsLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col gap-10 p-6">
        <span className="cursor-pointer text-xl font-bold uppercase">
          Builds Hub
        </span>
        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col gap-3">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Your Hub for GitHub Workflows
            </h1>
            <p className="text-lg leading-relaxed tracking-tight">
              Keep track of all your GitHub workflows and manage them in a
              unified platform. Simplify and accelerate your workflow
              management.
            </p>
            <Button
              className="w-fit"
              disabled={isLoading}
              onClick={handleSignIn}
            >
              {isLoading ? (
                <Spinner className="mr-2 size-4" />
              ) : (
                <GitHubLogoIcon className="mr-2 size-4" />
              )}
              Login with GitHub
            </Button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      {/* <div className="grid">
        <div className="grid p-6">
          <Button
            className="place-self-end"
            variant="outline"
            disabled={isLoading}
            onClick={handleSignIn}
          >
            {isLoading ? (
              <Spinner className="mr-2 size-4" />
            ) : (
              <GitHubLogoIcon className="mr-2 size-4" />
            )}
            Login with GitHub
          </Button>
        </div>
      </div> */}
    </main>
  );
};

export default Home;
