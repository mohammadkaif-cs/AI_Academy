
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#12161C]">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Sticky top navbar */}
          <header className="sticky top-0 z-40 h-14 flex items-center justify-between px-5 border-b border-[#232a34] bg-[#161B22] shadow-md">
            {/* Brand/Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-xl">A</div>
              <span className="font-semibold text-white text-lg tracking-wide hidden sm:block">
                AI Academy
              </span>
            </div>
            {/* Right: Notifications/User */}
            <div className="flex items-center gap-5">
              <button className="relative rounded-full hover:shadow-[0_0_0_2px_#4F8BFF] transition">
                <Bell className="w-5 h-5 text-blue-400" />
                <span className="absolute -top-1 -right-1 bg-blue-500 border border-[#161B22] text-xs rounded-full w-4 h-4 flex items-center justify-center text-white animate-pulse">1</span>
              </button>
              <div className="flex items-center gap-2 bg-[#232a34] px-3 py-1 rounded-lg hover:shadow-lg transition">
                <span className="text-blue-300">{user?.displayName || user?.email}</span>
                <div className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold rounded-full">
                  {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "A"}
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 bg-transparent py-8 px-4 sm:px-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
