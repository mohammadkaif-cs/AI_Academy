
import React, { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

const projects = [
  {
    title: "Real-Time Multilingual Query Handler",
    description: "Build an AI-driven system that handles user queries in multiple languages simultaneously, leveraging NLP and translation APIs.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced",
    duration: "40 hours",
    isPro: true,
  },
  {
    title: "Build Your Own AI Clone (RAG-based)",
    description: "Develop your personalized AI assistant using Retrieval-Augmented Generation, vector databases, and custom knowledge bases.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced",
    duration: "35 hours",
    isPro: true,
  },
  {
    title: "GitHub Repo Code Chat Assistant",
    description: "Implement a chat-driven tool that lets users query, summarize, and navigate large codebases pulled from GitHub repositories.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate",
    duration: "30 hours",
    isPro: false,
  },
  {
    title: "Personalized MCQ Generator for Diagnostics",
    description: "Create an automated MCQ generator that adjusts question complexity based on user progress and learning analytics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate",
    duration: "25 hours",
    isPro: false,
  },
  {
    title: "AI Career Planning Assistant",
    description: "Design a career advisor tool powered by LLMs to recommend skills, courses, and paths for different AI career tracks.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner",
    duration: "22 hours",
    isPro: false,
  },
  {
    title: "Resume Analyzer with LLMs",
    description: "Use large language models to analyze, critique, and optimize resumes for both ATS and human readability.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate",
    duration: "19 hours",
    isPro: false,
  },
  {
    title: "Vision-based Sign Language Translator",
    description: "Combine computer vision and NLP to build a real-time translator between sign language and text or voice output.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced",
    duration: "45 hours",
    isPro: true,
  },
  {
    title: "AI Feedback Summarizer from Google Forms",
    description: "Auto-summarize students’ free-form feedback using prompt engineering and LLMs, directly from Google Forms exports.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner",
    duration: "14 hours",
    isPro: false,
  },
];

type LevelFilter = "All" | "Beginner" | "Intermediate" | "Advanced";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<LevelFilter>("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.level === filter);

  return (
    <div className="relative min-h-[100vh] bg-gradient-to-br from-[#1c212a] via-[#181c24] to-[#23293b] pb-14 px-2">
      {/* Sticky header/filter on mobile */}
      <div className="max-w-6xl mx-auto pt-6 pb-6 px-2 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sticky top-0 bg-black/60 backdrop-blur-md z-30 rounded-b-lg">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow mb-1">
            Projects{" "}
            <span className="bg-gradient-to-tr from-accent to-blue-400 bg-clip-text text-transparent ml-1">
              by AK Academy
            </span>
          </h1>
          <div className="text-muted-foreground max-w-md text-sm font-medium">
            Explore hands-on AI projects. Each project includes carefully crafted challenges and real-world applications.
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-5 h-5 text-accent" />
          <Select value={filter} onValueChange={value => setFilter(value as LevelFilter)}>
            <SelectTrigger className="w-32 bg-card border border-border hover:border-accent duration-150 focus-visible:ring-accent focus:ring-2 shadow transition-all">
              <SelectValue placeholder="Filter by Level" />
            </SelectTrigger>
            <SelectContent align="end" className="">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4">
        {filteredProjects.length === 0 && (
          <div className="col-span-full flex items-center justify-center h-52 text-muted-foreground text-xl font-semibold">
            No projects found.
          </div>
        )}
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            {...project}
            onStart={() => window.alert("Project onboarding coming soon!")}
          />
        ))}
      </div>
    </div>
  );
}
