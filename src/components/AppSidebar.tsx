
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
  LayoutDashboard as DashboardIcon,
  BookOpen as CoursesIcon,
  Video as TutorialsIcon,
  Briefcase as CaseStudiesIcon,
  MessageCircle as ChatbotIcon,
  Settings as SettingsIcon,
  LogOut as LogoutIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { title: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { title: "Courses", to: "/courses", icon: CoursesIcon },
  { title: "Tutorials", to: "/courses/beginner", icon: TutorialsIcon }, // Example, change route as needed
  { title: "Case Studies", to: "/courses/advanced", icon: CaseStudiesIcon }, // Example, change
  { title: "Chatbot", to: "/chatbot", icon: ChatbotIcon }, // Example, add this page if exists
  { title: "Settings", to: "/settings", icon: SettingsIcon }, // Example, add this page if exists
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  // Active logic
  const isActive = (to: string) => currentPath === to;

  // If you actually implement Chatbot/Settings, update `to`
  return (
    <Sidebar className={cn("bg-[#161B22] border-r border-[#232a34] shadow-lg transition-all duration-300", state === "collapsed" ? 'w-14' : 'w-60')} collapsible>
      <div className="flex items-center justify-between px-4 h-14">
        <span className={cn("font-bold text-lg text-blue-400 tracking-wide", state === "collapsed" && "opacity-0 pointer-events-none transition")}>
          AK AI Academy
        </span>
        <SidebarTrigger className="ml-2" />
      </div>
      <SidebarContent className="flex flex-col">
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-xs text-blue-300 mt-2 pl-4">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map(link => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={link.to}
                      className={({ isActive: navIsActive }) =>
                        cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-lg transition hover:bg-blue-900/40 hover:text-blue-400",
                          (isActive(link.to) || navIsActive) && "bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg",
                        )
                      }
                    >
                      <link.icon className="w-5 h-5" />
                      {state !== "collapsed" && <span>{link.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="flex-grow" />
        {/* Logout button at the bottom */}
        <SidebarMenu className="mb-4">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/auth"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition text-red-500 hover:bg-red-900/30 hover:text-red-400"
                // Implement logout logic in Dashboard top bar!
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
