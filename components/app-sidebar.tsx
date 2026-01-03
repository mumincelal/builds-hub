"use client";

import { LucideBoxes } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppSidebarUser } from "@/components/app-sidebar-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar";
import { cn } from "@/lib/tailwind";

export type AppSidebarProps = Readonly<{
  menuItems: {
    key: string;
    title: string;
    url: string;
    icon: React.ReactNode;
  }[];
}>;

export const AppSidebar = ({ menuItems }: AppSidebarProps) => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div className="flex cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-90">
                <LucideBoxes className="size-8 text-gray-600" />
                <div className="flex items-baseline gap-1.5 text-2xl">
                  <span className="font-extrabold text-gray-600">Builds</span>
                  <span className="font-light text-gray-900">Hub</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems?.map((item) => (
            <SidebarMenuItem key={item.key}>
              <SidebarMenuButton
                className={cn("mx-auto", {
                  "bg-sidebar-accent text-sidebar-accent-foreground":
                    pathname.startsWith(item.url)
                })}
                tooltip={item.title}
                asChild>
                <Link href={item.url} passHref>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
