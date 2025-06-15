
import React from "react";
import { Award, Star } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  badge: string;
  highlight?: boolean;
}

interface ProfileAchievementsProps {
  achievements: Achievement[];
}

export default function ProfileAchievements({ achievements }: ProfileAchievementsProps) {
  if (!achievements.length)
    return (
      <div className="flex flex-col gap-3 items-center py-10 text-center">
        <Award className="w-10 h-10 text-yellow-300 mb-2" />
        <span className="text-muted-foreground">No achievements yet.</span>
      </div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-2">
      {achievements.map(a => (
        <div
          key={a.id}
          className={`flex flex-col items-center gap-2 px-2 py-4 bg-card rounded-xl shadow-glow border ${a.highlight ? "border-accent" : "border-transparent"}`}
        >
          {/* If using an image for badge, replace Award with <img src={a.badge} /> */}
          <div className="mb-1">
            {a.badge === "star" ? (
              <Star className="w-8 h-8 text-yellow-300" />
            ) : (
              <Award className="w-8 h-8 text-accent" />
            )}
          </div>
          <div className="text-[15px] font-medium text-center leading-tight">{a.title}</div>
        </div>
      ))}
    </div>
  );
}
