
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, TrendingUp, Zap, Send, Bot } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip } from 'recharts';
import { useAuth } from '@/contexts/AuthContext';

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
  const firstName = user?.displayName || user?.email?.split("@")[0]?.replace(/\./g, '').toUpperCase();

  return (
    <DashboardLayout>
      <div className="relative min-h-screen w-full bg-gradient-to-tr from-[#162244] via-[#1F2C4D]/80 to-[#17212d] bg-no-repeat bg-cover px-0 md:px-0 pt-0">
        {/* frosted overlay */}
        <div className="absolute inset-0 -z-10 bg-[hsl(var(--background))/0.67] backdrop-blur-2xl pointer-events-none" />
        {/* Welcome */}
        <section className="mb-10 mt-2 md:mt-0">
          <div className="mb-2 text-3xl md:text-5xl font-black text-white drop-shadow-[0_2px_8px_rgba(79,150,255,0.17)] tracking-tight">
            Hello, <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-[#02e0fe] to-[#0cfce2]">{firstName}</span>
          </div>
          <div className="text-base text-blue-200 font-semibold tracking-wide drop-shadow-md">
            Welcome back to <span className="text-accent font-bold">AK Academy</span>
          </div>
        </section>
        {/* Stats/Charts Row */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-200 rounded-2xl px-0 pt-0 animate-fade-in glass">
            <CardHeader className="flex flex-row items-center justify-between px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-blue-100 tracking-wide">Courses Enrolled</CardTitle>
              <BookOpen className="h-7 w-7 text-blue-300 drop-shadow-glow" />
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <div className="text-[2.2rem] font-black text-white">3</div>
              <div className="text-xs text-blue-200 mt-2 font-medium">+2 from last month</div>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-xl bg-purple-400/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-200 rounded-2xl px-0 pt-0 animate-fade-in glass">
            <CardHeader className="flex flex-row items-center justify-between px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-purple-100 tracking-wide">Certificates Earned</CardTitle>
              <Award className="h-7 w-7 text-purple-200 drop-shadow-glow" />
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <div className="text-[2.2rem] font-black text-white">1</div>
              <div className="text-xs text-purple-200 mt-2 font-medium">Beginner AI completed</div>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-xl bg-green-300/10 border-0 shadow-xl hover:shadow-2xl transition-all duration-200 rounded-2xl px-0 pt-0 animate-fade-in glass">
            <CardHeader className="flex flex-row items-center justify-between px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-green-200 tracking-wide">Learning Progress</CardTitle>
              <TrendingUp className="h-7 w-7 text-green-200 drop-shadow-glow" />
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <div className="text-[2.2rem] font-black text-white">67%</div>
              <div className="text-xs text-green-200 mt-2 font-medium">Overall completion</div>
            </CardContent>
          </Card>
          {/* Chart */}
          <Card className="backdrop-blur-xl bg-blue-500/15 border-0 shadow-xl hover:shadow-2xl transition-all duration-200 rounded-2xl px-0 pt-0 animate-fade-in glass">
            <CardHeader className="px-6 pt-5 pb-2">
              <CardTitle className="text-base font-semibold text-blue-200 tracking-wide">Progress Overview</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-1">
              <ResponsiveContainer width="100%" height={42}>
                <BarChart data={statsData} barSize={16}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Bar dataKey="value" fill="#65E6F6" radius={[6, 6, 0, 0]} />
                  <RTooltip cursor={{ fill: "#1d2233" }} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>
        {/* Panels for My Courses, Activity, AI Tools */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* My Courses */}
          <Card className="backdrop-blur-xl bg-white/10 border-0 shadow-lg hover:shadow-2xl transition rounded-2xl animate-fade-in glass">
            <CardHeader className="px-6 pt-6 pb-3">
              <CardTitle className="text-lg font-bold text-blue-100">My Courses</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
              <ul className="list-disc pl-5 space-y-2 text-white/90 font-medium">
                <li>Intermediate AI <span className="ml-2 text-xs text-accent/80">(60% completed)</span></li>
                <li>Generative AI <span className="ml-2 text-xs text-accent/80">(20% completed)</span></li>
                <li>Beginner Track <span className="ml-2 text-xs text-green-300">(Completed)</span></li>
              </ul>
              <a href="/courses" className="inline-block mt-4 text-sm text-blue-100/90 hover:text-accent underline underline-offset-4 transition">Browse All Courses</a>
            </CardContent>
          </Card>
          {/* Recent Activity */}
          <Card className="backdrop-blur-xl bg-purple-400/10 border-0 shadow-lg hover:shadow-2xl transition rounded-2xl animate-fade-in glass">
            <CardHeader className="px-6 pt-6 pb-3">
              <CardTitle className="text-lg font-bold text-purple-100">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
              <ul className="space-y-3 text-white/90 font-medium">
                {recentActivity.map(act => (
                  <li key={act.label} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-2" />
                    <span>{act.label}</span>
                    <span className="ml-auto text-xs text-purple-100">{act.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {/* AI Tools */}
          <Card className="backdrop-blur-xl bg-green-300/10 border-0 shadow-lg hover:shadow-2xl transition rounded-2xl animate-fade-in glass">
            <CardHeader className="px-6 pt-6 pb-3">
              <CardTitle className="text-lg font-bold text-green-100">AI Tools</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
              <ul className="space-y-3">
                {aiTools.map(tool => (
                  <li key={tool.name} className="flex gap-3 items-center">
                    <tool.icon className="w-7 h-7 text-accent drop-shadow-[0_0_8px_rgba(44,255,218,0.16)]" />
                    <div>
                      <div className="font-semibold text-white">{tool.name}</div>
                      <div className="text-xs text-green-100">{tool.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="/chatbot" className="inline-block mt-4 text-sm text-green-100/90 hover:text-accent underline underline-offset-4 transition">Try the Chatbot</a>
            </CardContent>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}
