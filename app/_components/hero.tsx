"use client";

import GithubImage from "@/assets/github.webp";
import { ConditionalShow } from "@/components/conditional-show";
import { Button } from "@/components/ui/button";
import { Activity, GitBranch, Terminal } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const session = useSession();

  const handleSignIn = () => {
    return async () => await signIn("github", { callbackUrl: "/dashboard" });
  };

  return (
    <section className="bg-gray-50 py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="space-y-1">
              <span className="block font-semibold text-base text-indigo-600 uppercase tracking-wide">
                Introducing Builds Hub
              </span>
              <span className="block font-extrabold text-4xl tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">
                  Manage GitHub Actions
                </span>
                <span className="block text-indigo-600 underline decoration-4 decoration-wavy underline-offset-4">
                  Across All Repos
                </span>
              </span>
            </h1>
            <p className="text-base text-gray-500">
              Streamline your CI/CD workflows with our powerful GitHub Actions
              management platform. Monitor, configure, and optimize your
              automation across all repositories from a single dashboard.
            </p>
            <ConditionalShow
              when={session.data}
              fallback={<Button onClick={handleSignIn()}>Get Started</Button>}
            >
              <Link href="/dashboard" passHref>
                <Button>Dashboard</Button>
              </Link>
            </ConditionalShow>
          </div>
          <div className="mx-auto w-full rounded-lg shadow-lg lg:max-w-lg">
            <div className="relative block w-full overflow-hidden rounded-lg bg-white">
              <Image
                src={GithubImage.src}
                alt="GitHub Actions Dashboard"
                className="size-full"
                width={GithubImage.width}
                height={GithubImage.height}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/90">
                <div className="absolute inset-0 p-3 md:p-6">
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-3">
                      <div className="size-3 animate-pulse rounded-full bg-green-400" />
                      <span className="font-medium text-green-400 text-sm">
                        build-and-test
                      </span>
                      <span className="ml-auto text-gray-400 text-xs">
                        2m ago
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-3">
                      <div className="size-3 animate-pulse rounded-full bg-blue-400" />
                      <span className="font-medium text-blue-400 text-sm">
                        deploy-staging
                      </span>
                      <span className="ml-auto text-gray-400 text-xs">
                        5m ago
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-3">
                      <div className="size-3 animate-pulse rounded-full bg-purple-400" />
                      <span className="font-medium text-purple-400 text-sm">
                        security-scan
                      </span>
                      <span className="ml-auto text-gray-400 text-xs">
                        8m ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 bottom-3 left-3 md:right-6 md:bottom-6 md:left-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="size-5 text-green-400" />
                    <span className="font-medium text-sm text-white">
                      Active Workflows
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitBranch className="size-5 text-blue-400" />
                    <span className="font-medium text-sm text-white">
                      Connected Repos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="size-5 text-purple-400" />
                    <span className="font-medium text-sm text-white">
                      Success Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
