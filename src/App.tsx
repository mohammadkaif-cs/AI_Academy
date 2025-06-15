import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import BeginnerTrack from "./pages/courses/BeginnerTrack";
import IntermediateTrack from "./pages/courses/IntermediateTrack";
import AdvancedTrack from "./pages/courses/AdvancedTrack";
import GenerativeAI from "./pages/courses/GenerativeAI";
import NLP from "./pages/courses/NLP";
import ComputerVision from "./pages/courses/ComputerVision"; // updated import path
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import ReadinessTest from "./pages/ReadinessTest";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import * as session from "@/utils/session";
import { useEffect } from "react";
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile"; // ADD THIS
import SkillAssessmentTest from "./pages/assessment/SkillAssessmentTest";
import Projects from "./pages/Projects";

// Now BrowserRouter is wrapped in AuthProvider

const queryClient = new QueryClient();

// New wrapper: waits for Firebase Auth to finish loading before rendering app
function AuthGate({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black/90 text-white text-xl">
        Loading authentication...
      </div>
    );
  }
  return <>{children}</>;
}

const App = () => {
  // Track last visited path except for /auth or public pages
  useEffect(() => {
    const ignore = ["/auth", "/"];
    const handler = () => {
      const { pathname } = window.location;
      if (!ignore.includes(pathname)) {
        session.saveLastVisited(pathname);
      }
    };
    window.addEventListener("popstate", handler);
    window.addEventListener("pushstate", handler); // for custom navigation
    // Call on first mount
    handler();
    return () => {
      window.removeEventListener("popstate", handler);
      window.removeEventListener("pushstate", handler);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Move BrowserRouter up so AuthProvider gets Router context */}
        <BrowserRouter>
          <AuthProvider>
            <AuthGate>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                
                {/* Protected routes */}
                <Route path="/courses/beginner" element={
                  <ProtectedRoute>
                    <BeginnerTrack />
                  </ProtectedRoute>
                } />
                <Route path="/courses/intermediate" element={
                  <ProtectedRoute>
                    <IntermediateTrack />
                  </ProtectedRoute>
                } />
                <Route path="/courses/advanced" element={
                  <ProtectedRoute>
                    <AdvancedTrack />
                  </ProtectedRoute>
                } />
                <Route path="/courses/generative-ai" element={
                  <ProtectedRoute>
                    <GenerativeAI />
                  </ProtectedRoute>
                } />
                <Route path="/courses/nlp" element={
                  <ProtectedRoute>
                    <NLP />
                  </ProtectedRoute>
                } />
                <Route path="/courses/computer-vision" element={
                  <ProtectedRoute>
                    <ComputerVision />
                  </ProtectedRoute>
                } />
                <Route path="/assessment" element={
                  <ProtectedRoute>
                    <Assessment />
                  </ProtectedRoute>
                } />
                <Route path="/assessment/skill-test" element={
                  <ProtectedRoute>
                    <SkillAssessmentTest />
                  </ProtectedRoute>
                } />
                <Route path="/readiness-test" element={
                  <ProtectedRoute>
                    <ReadinessTest />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/chatbot" element={
                  <ProtectedRoute>
                    <Chatbot />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/projects" element={
                  <ProtectedRoute>
                    <Projects />
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthGate>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
