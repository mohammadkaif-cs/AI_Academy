
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
  Beginner: "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-200",
  Intermediate: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 border border-blue-200",
  Advanced: "bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-600 border border-purple-200",
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
      "group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100/50 relative flex flex-col overflow-hidden font-poppins"
    )}
    style={{ minHeight: 420 }}
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {isPro && (
        <span className="absolute top-4 right-4 z-20">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-3 py-1.5 shadow-lg border-none uppercase text-xs rounded-full">
            PRO
          </Badge>
        </span>
      )}
      <span
        className={cn(
          "absolute top-4 left-4 z-20 font-semibold rounded-full px-4 py-1.5 text-xs backdrop-blur-sm",
          levelColors[level]
        )}
      >
        {level}
      </span>
    </div>
    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="font-bold text-xl text-gray-900 tracking-tight flex-1 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3 font-inter flex-1">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="text-xs text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-semibold border border-blue-100">{duration}</div>
        <Button
          className="ml-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl px-6 py-2.5 transition-all duration-300 hover:scale-105"
          onClick={onStart}
        >
          Start Now
        </Button>
      </div>
    </div>
  </div>
);
