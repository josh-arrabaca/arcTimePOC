"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Briefcase,
  Clock,
  BarChart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { User } from "@/lib/types";
import { AppLogo } from '@/components/icons/app-logo';

interface AppSidebarProps {
  user: User;
}

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();
  const { role } = user;

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, roles: ['developer', 'project-manager', 'finance', 'admin'] },
    { href: "/my-logs", label: "My Logs", icon: Clock, roles: ['developer', 'project-manager', 'finance', 'admin'] },
    { href: "/projects", label: "Projects", icon: Briefcase, roles: ['project-manager', 'admin'] },
    { href: "/reports", label: "Reports", icon: BarChart, roles: ['finance', 'project-manager', 'admin'] },
    { href: "/admin", label: "Admin", icon: Users, roles: ['admin'] },
  ];

  const accessibleNavItems = navItems.filter(item => item.roles.includes(role));

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <Link href="/dashboard" className="flex items-center gap-2">
            <AppLogo className="h-8 w-8 text-primary" />
            <h1 className="font-headline text-2xl font-bold text-sidebar-foreground">
              ArcTimeIn
            </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {accessibleNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
          <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                  <AvatarImage src={user.photoURL} alt={user.displayName} />
                  <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                  <p className="truncate font-medium text-sidebar-foreground">{user.displayName}</p>
                  <p className="truncate text-xs text-sidebar-foreground/70">{user.email}</p>
              </div>
          </div>
      </SidebarFooter>
    </Sidebar>
  );
}
