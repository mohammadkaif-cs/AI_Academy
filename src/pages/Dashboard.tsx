
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
      {/* Welcome */}
      <section className="mb-8">
        <div className="mb-1 text-3xl md:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(79,150,255,0.12)]">
          Welcome back, <span className="text-accent">{firstName}</span>!
        </div>
        <div className="text-base text-blue-200 font-medium">Ready to continue your AI journey with <span className="text-accent font-bold">AK Academy</span>?</div>
      </section>
      {/* Stats/Charts Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-10">
        <Card className="card-glow bg-gradient-to-br from-[#232a34] via-[#1b2230] to-[#163040] border-[1.5px] border-blue-700 shadow-lg hover:shadow-xl hover:scale-[1.025] transition duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-blue-400">Courses Enrolled</CardTitle>
            <BookOpen className="h-6 w-6 text-blue-300 drop-shadow-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-white">3</div>
            <div className="text-xs text-blue-200 mt-1 font-medium">+2 from last month</div>
          </CardContent>
        </Card>
        <Card className="card-glow-accent bg-gradient-to-br from-[#232330] via-[#291f28] to-[#3b1e53] border-[1.5px] border-purple-700 shadow-lg hover:shadow-xl hover:scale-[1.025] transition duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-purple-200">Certificates Earned</CardTitle>
            <Award className="h-6 w-6 text-purple-200 drop-shadow-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-white">1</div>
            <div className="text-xs text-purple-200 mt-1 font-medium">Beginner AI completed</div>
          </CardContent>
        </Card>
        <Card className="card-glow bg-gradient-to-br from-[#1f2e21] via-[#1a332c] to-[#113e32] border-[1.5px] border-green-700 shadow-lg hover:shadow-xl hover:scale-[1.025] transition duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold text-green-300">Learning Progress</CardTitle>
            <TrendingUp className="h-6 w-6 text-green-200 drop-shadow-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-white">67%</div>
            <div className="text-xs text-green-200 mt-1 font-medium">Overall completion</div>
          </CardContent>
        </Card>
        {/* Optional chart */}
        <Card className="card-glow bg-gradient-to-br from-[#1a2537] via-[#18324c] to-[#0f2c4e] border-[1.5px] border-blue-800 shadow-lg hover:shadow-xl hover:scale-[1.025] transition duration-300 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-blue-300">Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={40}>
              <BarChart data={statsData} barSize={14}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Bar dataKey="value" fill="#4f8bff" radius={[4,4,0,0]} />
                <RTooltip cursor={{fill: "#1d2233"}} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>
      {/* Panels for My Courses, Activity, AI Tools */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* My Courses */}
        <Card className="card-glow bg-gradient-to-br from-[#1c2130] via-[#232a3c] to-[#22314a] border-[1.5px] border-blue-800/50 shadow-md hover:shadow-lg transition hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-blue-300">My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2 text-white/90 font-medium">
              <li>Intermediate AI <span className="ml-2 text-xs text-accent/80">(60% completed)</span></li>
              <li>Generative AI <span className="ml-2 text-xs text-accent/80">(20% completed)</span></li>
              <li>Beginner Track <span className="ml-2 text-xs text-green-300">(Completed)</span></li>
            </ul>
            <a href="/courses" className="inline-block mt-4 text-sm text-blue-300 hover:text-blue-200 underline underline-offset-2 transition">Browse All Courses</a>
          </CardContent>
        </Card>
        {/* Recent Activity */}
        <Card className="card-glow-accent bg-gradient-to-br from-[#2c1c30] via-[#322334] to-[#291e38] border-[1.5px] border-purple-800/40 shadow-md hover:shadow-lg transition hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-purple-200">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
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
        <Card className="card-glow bg-gradient-to-br from-[#162121] via-[#153228] to-[#104e33] border-[1.5px] border-green-800/40 shadow-md hover:shadow-lg transition hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-green-200">AI Tools</CardTitle>
          </CardHeader>
          <CardContent>
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
            <a href="/chatbot" className="inline-block mt-4 text-sm text-green-200 hover:text-accent underline underline-offset-2 transition">Try the Chatbot</a>
          </CardContent>
        </Card>
      </section>
    </DashboardLayout>
  );
}
