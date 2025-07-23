import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, BookOpen, Users, Award, User, Star, Play, CheckCircle } from "lucide-react";
const Index = () => {
  const {
    user
  } = useAuth();

  // Extract first name from email (part before @)
  const getFirstName = (email: string) => {
    const emailPrefix = email.split('@')[0];
    // Remove dots and capitalize first letter
    const firstName = emailPrefix.replace(/\./g, '').toLowerCase();
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };
  const firstName = getFirstName(user?.email || '');
  return <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {user ? <>
              <h1 className="text-5xl md:text-6xl font-normal mb-6 text-gray-900 leading-tight">
                Welcome back, <span className="text-gray-700">{firstName}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Continue your AI learning journey with our comprehensive courses and assessments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg font-medium">
                    <User className="w-5 h-5 mr-2" />
                    Continue Learning
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button size="lg" variant="outline" className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </> : <>
              <h1 className="text-5xl md:text-6xl font-normal mb-6 text-gray-900 leading-tight">
                Master Artificial Intelligence
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Learn AI from the ground up with expert-designed courses and hands-on projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg font-medium">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                    <Play className="w-5 h-5 mr-2" />
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </>}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-semibold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-semibold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl font-semibold text-gray-900 mb-2 flex items-center justify-center">
                4.8 <Star className="w-6 h-6 text-yellow-400 ml-1" />
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured courses designed to take you from beginner to expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="p-6">
                <Badge className="bg-green-100 text-green-700 w-fit mb-3 px-3 py-1 text-sm font-medium">Beginner</Badge>
                <CardTitle className="text-xl font-semibold text-gray-900">Start Your AI Journey</CardTitle>
                <p className="text-gray-600 mt-2">Perfect for complete beginners with no technical background.</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>What is AI?</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Machine Learning basics</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Hands-on projects</span>
                  </div>
                </div>
                <Link to="/courses/beginner">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="p-6">
                <Badge className="bg-blue-100 text-blue-700 w-fit mb-3 px-3 py-1 text-sm font-medium">Intermediate</Badge>
                <CardTitle className="text-xl font-semibold text-gray-900">Build Practical Skills</CardTitle>
                <p className="text-gray-600 mt-2">Develop business-ready AI skills and applications.</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Building ML Models</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>AI in Business</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Prompt Engineering</span>
                  </div>
                </div>
                <Link to="/courses/intermediate">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg">
                    Advance Skills
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="p-6">
                <Badge className="bg-purple-100 text-purple-700 w-fit mb-3 px-3 py-1 text-sm font-medium">Advanced</Badge>
                <CardTitle className="text-xl font-semibold text-gray-900">Master AI Systems</CardTitle>
                <p className="text-gray-600 mt-2">Deep dive into cutting-edge AI technologies.</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span>Deep Learning</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span>Transformers & LLMs</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                    <span>Scalable AI Systems</span>
                  </div>
                </div>
                <Link to="/courses/advanced">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg">
                    Master AI
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">
              Why Choose AI Academy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our expert-designed learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-On Learning</h3>
              <p className="text-gray-600">
                Build real AI models from day one with practical projects and exercises.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world AI experience.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Recognition</h3>
              <p className="text-gray-600">
                Earn certificates recognized by top employers in the AI industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {user ? <>
              <h2 className="text-4xl font-normal text-white mb-6">Continue Your Journey</h2>
              <p className="text-xl text-gray-300 mb-8">
                Access your dashboard and continue learning AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-lg font-medium">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button size="lg" variant="outline" className="px-8 py-3 border-gray-400 text-gray-300 hover:bg-gray-800 rounded-lg font-medium">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </> : <>
              <h2 className="text-4xl font-normal text-white mb-6">Start Learning Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of students mastering AI with our comprehensive courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="px-8 py-3 rounded-lg font-medium text-base text-zinc-950 bg-slate-500 hover:bg-slate-400">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="px-8 py-3 border-gray-400 rounded-lg font-medium text-zinc-950 bg-gray-50">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </>}
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;