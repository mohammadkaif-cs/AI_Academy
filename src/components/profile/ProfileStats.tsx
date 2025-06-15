
import React from "react";
import { Award, Folder, User as UserIcon } from "lucide-react";

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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-4 w-full">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="
            flex flex-col items-center justify-center
            bg-white/10 backdrop-blur-xl
            rounded-xl px-0 py-6
            ring-1 ring-inset ring-white/20
            shadow-glow
            transition-transform hover:scale-105 hover:shadow-xl
            border border-white/10
            glassmorphism-glow-card
          "
          style={{
            boxShadow: "0 0px 16px 0px hsl(var(--glow)/0.18), 0 0 5px 0px hsl(var(--accent)/0.13)"
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            {stat.icon}
            <span className="text-2xl font-semibold drop-shadow">{stat.value}</span>
          </div>
          <span className="text-xs text-muted-foreground mt-0.5 tracking-wide">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

