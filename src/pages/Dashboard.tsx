
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
      <section className="mb-5">
        <div className="mb-1 text-2xl font-extrabold text-white">Welcome back, {firstName}!</div>
        <div className="text-sm text-blue-300">Ready to continue your AI journey with AK Academy?</div>
      </section>
      {/* Stats/Charts Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-10">
        <Card className="bg-gradient-to-br from-[#232a34] to-blue-900 border border-blue-700 shadow-lg hover:shadow-xl transition animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-blue-400">Courses Enrolled</CardTitle>
            <BookOpen className="h-5 w-5 text-blue-300" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-xs text-blue-200 mt-1">+2 from last month</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#232a34] to-purple-900 border border-purple-700 shadow-lg hover:shadow-xl transition animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-purple-300">Certificates Earned</CardTitle>
            <Award className="h-5 w-5 text-purple-200" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">1</div>
            <div className="text-xs text-purple-300 mt-1">Beginner AI completed</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#232a34] to-green-900 border border-green-700 shadow-lg hover:shadow-xl transition animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-green-300">Learning Progress</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-200" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">67%</div>
            <div className="text-xs text-green-200 mt-1">Overall completion</div>
          </CardContent>
        </Card>
        {/* Optional chart (progress bar or mini-bar): */}
        <Card className="bg-gradient-to-br from-[#232a34] to-blue-900 border border-blue-700 shadow-lg hover:shadow-xl transition animate-fade-in">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-blue-400">Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={40}>
              <BarChart data={statsData} barSize={14}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Bar dataKey="value" fill="#4f8bff" radius={[4,4,0,0]} />
                <RTooltip cursor={{fill: "#222430"}} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>
      {/* Panels for My Courses, Activity, AI Tools */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* My Courses */}
        <Card className="bg-[#181d24] border border-blue-800/40 shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-400">My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2 text-white">
              <li>Intermediate AI (60% completed)</li>
              <li>Generative AI (20% completed)</li>
              <li>Beginner Track (Completed)</li>
              {/* You could map real data here */}
            </ul>
            <a href="/courses" className="inline-block mt-4 text-sm text-blue-300 hover:text-blue-200 underline underline-offset-2 transition">Browse All Courses</a>
          </CardContent>
        </Card>
        {/* Recent Activity */}
        <Card className="bg-[#181d24] border border-purple-800/40 shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-purple-300">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-white">
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
        <Card className="bg-[#181d24] border border-green-800/40 shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-green-300">AI Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {aiTools.map(tool => (
                <li key={tool.name} className="flex gap-3 items-center">
                  <tool.icon className="w-7 h-7 text-green-400 shadow-glow" />
                  <div>
                    <div className="font-semibold text-white">{tool.name}</div>
                    <div className="text-xs text-green-100">{tool.description}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a href="/chatbot" className="inline-block mt-4 text-sm text-green-300 hover:text-green-100 underline underline-offset-2 transition">Try the Chatbot</a>
          </CardContent>
        </Card>
      </section>
    </DashboardLayout>
  );
}
