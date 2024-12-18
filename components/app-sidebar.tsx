"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar";
import {
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown, LogOut, LucideBoxes } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export type AppSidebarProps = Readonly<{
  menuItems: {
    key: string;
    title: string;
    url: string;
    icon: React.ReactNode;
  }[];
}>;

export const AppSidebar = ({ menuItems }: AppSidebarProps) => {
  const { isMobile } = useSidebar();
  const session = useSession();

  const handleSignOut = () => {
    return async () => await signOut({ callbackUrl: "/dashboard" });
  };

  if (
    session.status === "unauthenticated" ||
    session.data === null ||
    session.data === undefined
  ) {
    return null;
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex cursor-pointer items-center justify-center space-x-2 transition-opacity hover:opacity-90">
                <LucideBoxes className="size-8 text-gray-600" />
                <div className="flex items-baseline space-x-1.5 text-2xl">
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
                className="mx-auto"
                tooltip={item.title}
                asChild
              >
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
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage
                      src={session.data.user.image ?? ""}
                      alt={session.data.user.name ?? ""}
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {session.data.user.name}
                    </span>
                    <span className="truncate text-xs">
                      {session.data.user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={session.data.user.image ?? ""}
                        alt={session.data.user.name ?? ""}
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {session.data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {session.data.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
