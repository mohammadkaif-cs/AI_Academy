
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
  { key: "settings", label: "Settings" },
];

export default function ProfileTabs({ tab, onTabChange, children }: ProfileTabsProps) {
  return (
    <Tabs value={tab} onValueChange={onTabChange} className="w-full">
      <TabsList className="w-full mb-4 bg-transparent gap-2">
        {tabList.map(({ key, label }) => (
          <TabsTrigger key={key} value={key} className="flex-1">
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
