"use client";
import { LucideBoxes } from "lucide-react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { ConditionalShow } from "@/components/conditional-show";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const session = useSession();

  const handleSignIn = () => {
    return async () => await signIn("github", { callbackUrl: "/dashboard" });
  };

  return (
    <header className="bg-white/80 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-90">
            <LucideBoxes className="size-8 text-gray-600" />
            <div className="flex items-baseline gap-1.5 text-2xl">
              <span className="font-extrabold text-gray-600">Builds</span>
              <span className="font-light text-gray-900">Hub</span>
            </div>
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#features"
                  className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#how-it-works"
                  className={navigationMenuTriggerStyle()}>
                  How it Works
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ConditionalShow
            when={session.data}
            fallback={<Button onClick={handleSignIn()}>Get Started</Button>}>
            <Link href="/dashboard" passHref>
              <Button>Dashboard</Button>
            </Link>
          </ConditionalShow>
        </div>
      </div>
    </header>
  );
};
