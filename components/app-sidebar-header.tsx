"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export type AppSidebarHeaderProps = Readonly<{
  menuItems: {
    key: string;
    title: string;
    url: string;
    icon: React.ReactNode;
  }[];
}>;

export const AppSidebarHeader = ({ menuItems }: AppSidebarHeaderProps) => {
  const pathname = usePathname();
  const title = menuItems.find((item) => item.url === pathname)?.title;

  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <p className="font-normal text-foreground">{title}</p>
    </header>
  );
};
