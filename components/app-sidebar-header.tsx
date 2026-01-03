"use client";

import { useParams, usePathname } from "next/navigation";
import { ConditionalShow } from "@/components/conditional-show";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
  const params = useParams();
  const menuItem = menuItems.find((item) => pathname.startsWith(item.url));

  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={menuItem?.url}>
              {menuItem?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <ConditionalShow when={params.slug}>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{params.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </ConditionalShow>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};
