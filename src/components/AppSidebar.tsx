
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home as HomeIcon,
  Book as BookIcon,
  LayoutDashboard as DashboardIcon,
  MessageCircle as ChatbotIcon,
  LogOut as LogoutIcon,
  User as UserIcon, // Added for My Profile
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Sidebar links with Home and Courses at the top for easy navigation */
const sidebarLinks = [
  { title: "Home", to: "/", icon: HomeIcon },
  { title: "Courses", to: "/courses", icon: BookIcon },
  { title: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { title: "Projects", to: "/projects", icon: BookIcon },      // Added Projects (reuse BookIcon or replace as needed)
  { title: "My Profile", to: "/profile", icon: UserIcon },     // Added My Profile
  { title: "Chatbot", to: "/chatbot", icon: ChatbotIcon },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  // Active logic
  const isActive = (to: string) => currentPath === to;

  return (
    <Sidebar
      className={cn(
        "sidebar-glow border-r border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-background))] transition-all duration-300",
        state === "collapsed" ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <div className="flex items-center justify-between px-4 h-16 border-b border-[hsl(var(--sidebar-border))]">
        <span className={cn(
          "font-black text-xl tracking-tight bg-gradient-to-r from-[#4f8bff] via-[#46c7ff] to-[#00ffd7] bg-clip-text text-transparent select-none transition",
          state === "collapsed" && "opacity-0 pointer-events-none transition"
        )}>
          AK AI
        </span>
        <SidebarTrigger className="ml-2 rounded bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted-foreground))]/10 focus-glow transition" />
      </div>
      <SidebarContent className="pt-2 flex flex-col">
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-xs tracking-wide text-blue-300 mt-2 pl-4 select-none opacity-80">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map(link => (
                <SidebarMenuItem key={link.title + link.to}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={link.to}
                      className={({ isActive: navIsActive }) =>
                        cn(
                          "flex items-center gap-3 px-4 py-2.5 my-0.5 font-medium rounded-lg transition outline-none",
                          "hover:bg-gradient-to-r hover:from-[#2e4562]/70 hover:to-[#2fffdc]/10 hover:text-[#44deff] focus-glow",
                          "active:scale-[.98]",
                          (isActive(link.to) || navIsActive)
                            ? "bg-gradient-to-r from-blue-700 to-cyan-600/90 text-white shadow-lg card-glow"
                            : "text-[hsl(var(--sidebar-foreground))]/90"
                        )
                      }
                    >
                      <link.icon
                        className={cn(
                          "w-5 h-5 transition",
                          (isActive(link.to) || currentPath.startsWith(link.to))
                            ? "text-accent drop-shadow-[0_0_4px_rgba(79,255,255,0.60)]"
                            : "text-blue-300"
                        )}
                      />
                      {state !== "collapsed" && <span className="tracking-wide">{link.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="flex-grow" />
        {/* Logout */}
        <SidebarMenu className="mb-4">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/auth"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-500 hover:bg-red-900/30 hover:text-red-300 active:scale-95 transition"
              >
                <LogoutIcon className="w-5 h-5" />
                {state !== "collapsed" && <span>Logout</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

