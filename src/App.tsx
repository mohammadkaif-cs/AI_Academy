
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import BeginnerTrack from "./pages/courses/BeginnerTrack";
import IntermediateTrack from "./pages/courses/IntermediateTrack";
import AdvancedTrack from "./pages/courses/AdvancedTrack";
import GenerativeAI from "./pages/courses/GenerativeAI";
import NLP from "./pages/courses/NLP";
import ComputerVision from "./pages/courses/ComputerVision";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import ReadinessTest from "./pages/ReadinessTest";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/beginner" element={<BeginnerTrack />} />
            <Route path="/courses/intermediate" element={<IntermediateTrack />} />
            <Route path="/courses/advanced" element={<AdvancedTrack />} />
            <Route path="/courses/generative-ai" element={<GenerativeAI />} />
            <Route path="/courses/nlp" element={<NLP />} />
            <Route path="/courses/computer-vision" element={<ComputerVision />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/readiness-test" element={<ReadinessTest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
