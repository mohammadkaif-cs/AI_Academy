
import React from "react";
import { Folder } from "lucide-react";

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  tags: string[];
}

interface ProfileProjectsProps {
  projects: Project[];
}

export default function ProfileProjects({ projects }: ProfileProjectsProps) {
  if (!projects.length)
    return (
      <div className="flex flex-col gap-3 items-center py-10 text-center">
        <Folder className="w-10 h-10 text-accent mb-2" />
        <span className="text-muted-foreground">No projects to show yet.</span>
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
      {projects.map(project => (
        <div
          key={project.id}
          className="bg-card rounded-xl shadow-glow overflow-hidden hover-lift"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-36 w-full object-cover"
          />
          <div className="p-4">
            <div className="font-semibold text-lg">{project.title}</div>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
