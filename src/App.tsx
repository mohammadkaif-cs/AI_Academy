
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
            <Route path="/auth" element={<Auth />} />
            {/* Public routes - accessible to everyone */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            
            {/* Protected routes - require authentication for actual course content */}
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
