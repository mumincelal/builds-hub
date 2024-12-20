import { AppSidebar, type AppSidebarProps } from "@/components/app-sidebar";
import { AppSidebarHeader } from "@/components/app-sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FolderGit2, LayoutDashboard } from "lucide-react";

const menuItems: AppSidebarProps["menuItems"] = [
  {
    key: "dashboard",
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboard className="size-4" />
  },
  {
    key: "repositories",
    title: "Repositories",
    url: "/repositories",
    icon: <FolderGit2 className="size-4" />
  }
];

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <SidebarProvider>
    <AppSidebar menuItems={menuItems} />
    <SidebarInset>
      <AppSidebarHeader menuItems={menuItems} />
      <div className="size-full p-4">{children}</div>
    </SidebarInset>
  </SidebarProvider>
);

// biome-ignore lint/style/noDefaultExport: Next.js
export default Layout;
