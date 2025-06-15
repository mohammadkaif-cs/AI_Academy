
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from "@/components/Navbar";

// Dashboard layout with always-on-top Navbar and persistent sidebar
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <>
      {/* Navbar always at the very top */}
      <Navbar />
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-[hsl(var(--background))] font-sans pt-20">
          {/* pt-20 ensures content sits comfortably below the navbar */}
          <AppSidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1 bg-transparent py-8 px-4 sm:px-8 max-w-screen-2xl mx-auto">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
