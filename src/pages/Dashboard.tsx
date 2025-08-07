import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, TrendingUp, Zap, Send, Bot, Star } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip } from 'recharts';
import { useAuth } from '@/contexts/AuthContext';
import React, { useEffect, useState } from 'react';

const statsData = [
  { name: 'Courses', value: 0 },
  { name: 'Certs', value: 0 },
  { name: 'Progress', value: 0 },
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
  // Avatar logic - Supabase user doesn't have displayName, use email
  const firstName = user?.email?.split("@")[0]?.replace(/\./g, '').toUpperCase() || 'User';

  // BEST SCORE STATE (NEW)
  const [bestAssessmentScore, setBestAssessmentScore] = useState<number>(0);
  useEffect(() => {
    const val = Number(localStorage.getItem("ai_skill_best_score") || "0");
    setBestAssessmentScore(val);
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-background">
        {/* Header with User Welcome */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-2 pb-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary shadow-lg border-2 border-primary/20">
              {firstName?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                Welcome back, <span className="text-primary">{firstName}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Continue your AI learning journey with <span className="font-semibold text-primary">AK Academy</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Courses Enrolled Card */}
          <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-semibold text-muted-foreground">Courses Enrolled</CardTitle>
              <BookOpen className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-4xl font-bold text-foreground">0</div>
              <p className="text-sm text-muted-foreground mt-1">Ready to start learning</p>
            </CardContent>
          </Card>

          {/* Certificates Card */}
          <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-semibold text-muted-foreground">Certificates</CardTitle>
              <Award className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-4xl font-bold text-foreground">0</div>
              <p className="text-sm text-muted-foreground mt-1">Complete courses to earn certificates</p>
            </CardContent>
          </Card>

          {/* Best Assessment Score Card */}
          <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-semibold text-muted-foreground">Best Assessment Score</CardTitle>
              <Star className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-4xl font-bold text-foreground">{bestAssessmentScore}%</div>
              <p className="text-sm text-muted-foreground mt-1">Take your first assessment</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* My Courses */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                My Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No courses enrolled yet</p>
                  <a 
                    href="/courses" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Browse Courses
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your recent activities will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Tools */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiTools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <tool.icon className="h-8 w-8 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{tool.name}</div>
                      <div className="text-sm text-muted-foreground">{tool.description}</div>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <a 
                    href="/chatbot" 
                    className="text-sm text-primary hover:underline"
                  >
                    Try the Chatbot →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
