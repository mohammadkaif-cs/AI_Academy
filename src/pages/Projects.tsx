import React, { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";
import ProfileBackToDashboardButton from "@/components/profile/ProfileBackToDashboardButton";

const projects = [
  {
    title: "Real-Time Multilingual Query Handler",
    description: "Build an AI-driven system that handles user queries in multiple languages simultaneously, leveraging NLP and translation APIs.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "40 hours",
    isPro: true,
  },
  {
    title: "Build Your Own AI Clone (RAG-based)",
    description: "Develop your personalized AI assistant using Retrieval-Augmented Generation, vector databases, and custom knowledge bases.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "35 hours",
    isPro: true,
  },
  {
    title: "GitHub Repo Code Chat Assistant",
    description: "Implement a chat-driven tool that lets users query, summarize, and navigate large codebases pulled from GitHub repositories.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "30 hours",
    isPro: false,
  },
  {
    title: "Personalized MCQ Generator for Diagnostics",
    description: "Create an automated MCQ generator that adjusts question complexity based on user progress and learning analytics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "25 hours",
    isPro: false,
  },
  {
    title: "AI Career Planning Assistant",
    description: "Design a career advisor tool powered by LLMs to recommend skills, courses, and paths for different AI career tracks.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "22 hours",
    isPro: false,
  },
  {
    title: "Resume Analyzer with LLMs",
    description: "Use large language models to analyze, critique, and optimize resumes for both ATS and human readability.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "19 hours",
    isPro: false,
  },
  {
    title: "Vision-based Sign Language Translator",
    description: "Combine computer vision and NLP to build a real-time translator between sign language and text or voice output.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "45 hours",
    isPro: true,
  },
  {
    title: "AI Feedback Summarizer from Google Forms",
    description: "Auto-summarize students’ free-form feedback using prompt engineering and LLMs, directly from Google Forms exports.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "14 hours",
    isPro: false,
  },
  // ---- 20 more projects below ----
  {
    title: "Automated Essay Grader",
    description: "Create an AI tool to grade student essays instantly with qualitative feedback.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "20 hours",
    isPro: true,
  },
  {
    title: "Smart Health Chatbot",
    description: "Design a healthcare chatbot for symptom checking and information retrieval.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "18 hours",
    isPro: false,
  },
  {
    title: "Personal Finance Insights using AI",
    description: "Develop a tool to provide personal finance tips using users' transaction history.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "21 hours",
    isPro: false,
  },
  {
    title: "AI-based Social Media Scheduler",
    description: "Schedule and optimize social media posts using predictive analytics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "24 hours",
    isPro: false,
  },
  {
    title: "ML-powered Music Playlist Recommender",
    description: "Recommend personalized music playlists with clustering & regression.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "20 hours",
    isPro: false,
  },
  {
    title: "AI Expense Receipt Reader",
    description: "Auto-extract and organize data from receipts using OCR and ML.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "16 hours",
    isPro: false,
  },
  {
    title: "Event Emotion Analyzer",
    description: "Analyze audience sentiments for live events using AI-driven analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "32 hours",
    isPro: true,
  },
  {
    title: "Intelligent Document Search Engine",
    description: "Build a search system that intelligently indexes and retrieves PDFs and docs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "39 hours",
    isPro: true,
  },
  {
    title: "Computer Vision Smart Attendance",
    description: "Use facial recognition to automate class and office attendance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "25 hours",
    isPro: false,
  },
  {
    title: "LLM-Powered FAQ Bot for Startups",
    description: "Provide instant onboarding answers with a self-learning FAQ chatbot.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "11 hours",
    isPro: false,
  },
  {
    title: "Visual Data Exploration with AI",
    description: "Explore and visualize CSV data interactively with LLM-based insights.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "23 hours",
    isPro: false,
  },
  {
    title: "Job Application Optimizer",
    description: "Analyze and enhance job applications to match recruiter criteria.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "33 hours",
    isPro: true,
  },
  {
    title: "AI-powered Language Learning App",
    description: "Create an app that adapts language lessons to student proficiency.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "17 hours",
    isPro: false,
  },
  {
    title: "Student Engagement Analyzer",
    description: "Monitor and report student engagement trends using ML models.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "22 hours",
    isPro: false,
  },
  {
    title: "Smart Q&A over Corporate Wiki",
    description: "Implement a private Q&A assistant for internal company docs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "38 hours",
    isPro: true,
  },
  {
    title: "AI-powered Learning Progress Tracker",
    description: "Track and visualize user learning curves with smart analytics.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "15 hours",
    isPro: false,
  },
  {
    title: "Automated Research Summarizer",
    description: "Summarize research papers and articles using LLMs for easier consumption.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "27 hours",
    isPro: false,
  },
  {
    title: "AI Attendance Notetaker for Meetings",
    description: "Create an AI agent that attends and summarizes online meetings.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "41 hours",
    isPro: true,
  },
  {
    title: "Fake News Detector with AI",
    description: "Design a robust system to identify and flag fake news articles.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=facearea&w=600&q=80",
    level: "Beginner" as const,
    duration: "19 hours",
    isPro: false,
  },
  {
    title: "Math Problem Solver",
    description: "Build an AI that understands and explains math problems step by step.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=600&q=80",
    level: "Intermediate" as const,
    duration: "28 hours",
    isPro: false,
  },
  {
    title: "Personalized Learning Paths with GPT",
    description: "Generate dynamic learning paths for users based on progress and interests.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=facearea&w=600&q=80",
    level: "Advanced" as const,
    duration: "34 hours",
    isPro: true,
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
      <div className="max-w-6xl mx-auto pt-4 pb-0 px-2">
        <ProfileBackToDashboardButton />
      </div>
      {/* Sticky header/filter on mobile */}
      <div className="max-w-6xl mx-auto pt-2 pb-6 px-2 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sticky top-0 bg-black/60 backdrop-blur-md z-30 rounded-b-lg">
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
        {filteredProjects.map((project) => (
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
