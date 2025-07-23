import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Award, 
  Brain, 
  Star, 
  TrendingUp, 
  Clock,
  Trophy,
  Users,
  Target,
  ArrowRight,
  Bookmark,
  PlayCircle,
  Bot,
  Zap,
  Send
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';

const statsData = [
  { name: 'Courses', value: 3 },
  { name: 'Certs', value: 1 },
  { name: 'Progress', value: 67 },
];

const recentActivity = [
  { label: "AI Fundamentals completed", date: "2024-06-12" },
  { label: "Started Generative AI Course", date: "2024-06-14" },
  { label: "Passed Beginner Assessment", date: "2024-06-10" },
];

const aiTools = [
  { icon: Bot, name: "Academy Chatbot", description: "Get quick AI help and answers" },
  { icon: Zap, name: "Code Assistant", description: "Generate & debug code" },
  { icon: Send, name: "Essay Grader", description: "Auto-grade your essays & reports" },
];

export default function Dashboard() {
  const { user } = useAuth();
  // Avatar logic - using Supabase user properties
  const firstName = user?.user_metadata?.display_name?.split(" ")[0]
    || user?.user_metadata?.full_name?.split(" ")[0]
    || user?.email?.split("@")[0]?.replace(/\./g, '').toUpperCase();

  // BEST SCORE STATE (NEW)
  const [bestAssessmentScore, setBestAssessmentScore] = useState<number>(0);
  useEffect(() => {
    const val = Number(localStorage.getItem("ai_skill_best_score") || "0");
    setBestAssessmentScore(val);
  }, []);

  return (
    <DashboardLayout>
      <div className="relative min-h-screen w-full bg-gradient-to-br from-[#141B23] via-[#191F28] to-[#1c212b]">
        {/* Semi-transparent glass overlay for depth */}
        <div className="absolute inset-0 z-0 bg-white/5 backdrop-blur-md" />
        {/* Header with User Avatar and Welcome */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between pt-2 md:pt-2 pb-6 px-2 sm:px-0 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-[#1b263b] shadow-md border-2 border-accent/50">
              {firstName?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
                Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-tr from-accent to-cyan-300">{firstName}</span>
              </div>
              <div className="text-sm text-blue-200 font-semibold drop-shadow-sm">
                Glad to see you back in <span className="font-bold text-accent/90">AK Academy</span>
              </div>
            </div>
          </div>
        </div>
        {/* Stats row: removed Progress card, now 3 columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <Card className="bg-[#191E28]/70 border-none shadow-2xl backdrop-blur-xl hover:scale-[1.03] transition-all duration-150 rounded-2xl p-0 glass">
            <CardHeader className="flex flex-row items-center justify-between px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-accent tracking-wide">Courses Enrolled</CardTitle>
              <BookOpen className="h-7 w-7 text-accent drop-shadow-glow" />
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <div className="text-[2rem] sm:text-[2.4rem] font-black text-white drop-shadow-sm">3</div>
              <div className="text-xs text-accent/80 mt-1 font-semibold">+2 from last month</div>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card className="bg-[#191E28]/70 border-none shadow-2xl backdrop-blur-xl hover:scale-[1.03] transition-all duration-150 rounded-2xl p-0 glass">
            <CardHeader className="flex flex-row items-center justify-between px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-green-300 tracking-wide">Certificates</CardTitle>
              <Award className="h-7 w-7 text-green-200 drop-shadow-glow" />
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <div className="text-[2rem] sm:text-[2.4rem] font-black text-white">1</div>
              <div className="text-xs text-green-200 mt-1 font-semibold">Beginner AI completed</div>
            </CardContent>
          </Card>
          {/* Best Score Card */}
          <Card className="bg-[#191E28]/70 border-none shadow-2xl backdrop-blur-xl hover:scale-[1.03] transition-all duration-150 rounded-2xl p-0 glass">
            <CardHeader className="flex flex-row items-center justify-between px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-yellow-300 tracking-wide">Best Assessment Score</CardTitle>
              <Star className="h-7 w-7 text-yellow-200 drop-shadow-glow" />
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <div className="text-[2rem] sm:text-[2.4rem] font-black text-white drop-shadow-sm">{bestAssessmentScore}%</div>
              <div className="text-xs text-yellow-100 mt-1 font-semibold">
                Your highest AI Skill Readiness Test result
              </div>
              <span className="block text-xs text-yellow-300 mt-2">Assessment feature coming soon</span>
            </CardContent>
          </Card>
        </div>

        {/* Main Panels */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Courses */}
          <Card className="bg-[#202532]/75 border-none shadow-lg backdrop-blur-2xl rounded-xl transition hover:scale-[1.02]">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-lg font-bold text-accent">My Courses</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <ul className="space-y-2 text-white font-medium">
                <li>Intermediate AI <span className="ml-2 text-xs text-cyan-400/80">(60% completed)</span></li>
                <li>Generative AI <span className="ml-2 text-xs text-cyan-400/80">(20% completed)</span></li>
                <li>Beginner Track <span className="ml-2 text-xs text-green-400">(Completed)</span></li>
              </ul>
              <a href="/courses" className="inline-block mt-4 text-xs text-cyan-200/90 hover:text-accent underline underline-offset-4 transition">Browse All Courses</a>
            </CardContent>
          </Card>
          {/* Activity */}
          <Card className="bg-[#202532]/75 border-none shadow-lg backdrop-blur-2xl rounded-xl transition hover:scale-[1.02]">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-lg font-bold text-purple-200">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <ul className="space-y-2 text-white/90 font-medium">
                {recentActivity.map((act) => (
                  <li key={act.label} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-1" />
                    <span>{act.label}</span>
                    <span className="ml-auto text-xs text-purple-100">{act.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {/* AI Tools */}
          <Card className="bg-[#202532]/75 border-none shadow-lg backdrop-blur-2xl rounded-xl transition hover:scale-[1.02]">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-lg font-bold text-green-200">AI Tools</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <ul className="space-y-2">
                {aiTools.map((tool) => (
                  <li key={tool.name} className="flex gap-3 items-center">
                    <tool.icon className="w-7 h-7 text-accent drop-shadow-[0_0_6px_rgba(44,255,218,0.15)]" />
                    <div>
                      <div className="font-semibold text-white">{tool.name}</div>
                      <div className="text-xs text-green-100">{tool.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="/chatbot" className="inline-block mt-4 text-xs text-green-200/90 hover:text-accent underline underline-offset-4 transition">Try the Chatbot</a>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
