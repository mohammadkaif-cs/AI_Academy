
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  key: string;
  label: string;
}

interface ProfileTabsProps {
  tab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
}

const tabList: TabItem[] = [
  { key: "overview", label: "Overview" },
  { key: "projects", label: "Projects" },
  { key: "achievements", label: "Achievements" },
  { key: "settings", label: "Settings" }
];

export default function ProfileTabs({ tab, onTabChange, children }: ProfileTabsProps) {
  return (
    <Tabs value={tab} onValueChange={onTabChange} className="w-full">
      <TabsList
        className="
          w-full mb-3 justify-center flex bg-white/15 backdrop-blur
          rounded-xl gap-2 border border-white/15
          shadow-glow
          py-1.5 px-2
          ring-1 ring-white/20
        "
        style={{
          boxShadow: "0 1.5px 8px 0 hsl(var(--glow)/0.09)"
        }}
      >
        {tabList.map(({ key, label }) => (
          <TabsTrigger
            key={key}
            value={key}
            className={`
              flex-1 font-medium px-4 py-2 rounded-lg bg-transparent 
              data-[state=active]:bg-white/35 data-[state=active]:text-foreground
              data-[state=active]:shadow
              transition-all
              outline-none
              hover:bg-white/15 hover:text-primary
              border border-transparent
              focus-visible:ring-2 focus-visible:ring-primary
            `}
            style={{
              backdropFilter: "blur(2px)"
            }}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}

