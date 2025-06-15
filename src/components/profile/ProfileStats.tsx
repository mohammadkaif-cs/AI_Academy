
import React from "react";
import { Award, Folder, User as UserIcon, Star } from "lucide-react";

interface Stat {
  label: string;
  value: number;
  icon: React.ReactNode;
}

interface ProfileStatsProps {
  followers: number;
  following: number;
  projects: number;
  achievements: number;
}

export default function ProfileStats({
  followers,
  following,
  projects,
  achievements
}: ProfileStatsProps) {
  const stats: Stat[] = [
    {
      label: "Followers",
      value: followers,
      icon: <UserIcon className="text-accent" />
    },
    {
      label: "Following",
      value: following,
      icon: <UserIcon className="text-accent" />
    },
    {
      label: "Projects",
      value: projects,
      icon: <Folder className="text-primary" />
    },
    {
      label: "Achievements",
      value: achievements,
      icon: <Award className="text-yellow-400" />
    }
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="flex flex-col items-center bg-card rounded-lg px-0 py-4 shadow-glow"
        >
          <div className="flex items-center gap-2">
            {stat.icon}
            <span className="text-xl font-semibold">{stat.value}</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
