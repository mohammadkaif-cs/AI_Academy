
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

/* Cleaned up top nav, glow brand, tighter padding, accent menu bg */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[hsl(var(--background))] font-sans">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Sticky top navbar */}
          <header className="sticky top-0 z-40 h-16 flex items-center justify-between px-7 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 shadow-md backdrop-blur-md">
            {/* Brand/Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4f8bff] to-[#00ffd7] flex items-center justify-center text-white font-black text-xl shadow-xl select-none">A</div>
              <span className="font-black text-lg tracking-wide text-white drop-shadow-[0_1px_3px_rgba(79,139,255,0.08)] hidden sm:block">
                AK AI Academy
              </span>
            </div>
            {/* Right: Notifications/User */}
            <div className="flex items-center gap-5">
              <button className="relative rounded-full p-2 hover:bg-[hsl(var(--muted))/0.2] focus-glow transition">
                <Bell className="w-6 h-6 text-accent" />
                <span className="absolute -top-1 -right-1 bg-accent border border-[hsl(var(--background))] text-xs rounded-full w-4 h-4 flex items-center justify-center text-white animate-pulse">1</span>
              </button>
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#212a38] to-[#1d2739] px-3 py-1.5 rounded-lg shadow focus-glow hover:shadow-xl transition">
                <span className="text-blue-200 font-medium text-sm">{user?.displayName || user?.email}</span>
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#4f8bff] to-[#00ffd7] text-white font-black rounded-full select-none">
                  {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "A"}
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 bg-transparent py-8 px-4 sm:px-8 max-w-screen-2xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
