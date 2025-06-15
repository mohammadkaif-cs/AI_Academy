
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  isPro?: boolean;
  onStart?: () => void;
}

const levelColors = {
  Beginner: "bg-green-500/10 text-green-500",
  Intermediate: "bg-blue-500/10 text-blue-400",
  Advanced: "bg-fuchsia-500/10 text-fuchsia-400",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  level,
  duration,
  isPro,
  onStart,
}) => (
  <div
    className={cn(
      "group bg-card rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/30 relative flex flex-col overflow-hidden"
    )}
    style={{ minHeight: 370 }}
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300"
        loading="lazy"
      />
      {isPro && (
        <span className="absolute top-3 right-3 z-20">
          <Badge className="bg-gradient-to-tr from-yellow-400 to-pink-500 text-white font-extrabold px-2.5 shadow-lg border-none uppercase">
            PRO
          </Badge>
        </span>
      )}
      <span
        className={cn(
          "absolute top-3 left-3 z-20 font-semibold rounded-full px-3 py-1 text-xs backdrop-blur-sm",
          levelColors[level]
        )}
      >
        {level}
      </span>
    </div>
    <div className="flex-1 flex flex-col p-5">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-bold text-lg text-foreground tracking-tight flex-1 truncate">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-tight mb-4 line-clamp-3">{description}</p>
      <div className="mt-auto flex items-end justify-between">
        <div className="text-xs text-accent-foreground bg-accent/10 px-3 py-1 rounded-full font-semibold">{duration}</div>
        <Button
          className="ml-2 bg-gradient-to-tr from-accent to-blue-500 hover:from-blue-500 hover:to-accent text-white font-bold rounded-lg shadow hover:shadow-xl px-4 py-2 transition-all duration-200"
          onClick={onStart}
        >
          Start Now
        </Button>
      </div>
    </div>
  </div>
);

