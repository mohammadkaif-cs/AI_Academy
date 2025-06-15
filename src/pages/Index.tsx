
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, BookOpen, Users, Award, Brain, Target, TrendingUp, User, Star, Play, CheckCircle } from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  // Extract first name from email (part before @)
  const getFirstName = (email: string) => {
    const emailPrefix = email.split('@')[0];
    // Remove dots and capitalize first letter
    const firstName = emailPrefix.replace(/\./g, '').toLowerCase();
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };

  const firstName = user?.displayName || getFirstName(user?.email || '');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {user ? (
              <>
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <span className="text-white">Welcome back,</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                    {firstName}!
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                  Continue your AI mastery journey with expert-guided learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg h-auto">
                      <User className="w-5 h-5 mr-2" />
                      Continue Learning
                    </Button>
                  </Link>
                  <Link to="/assessment">
                    <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 px-10 py-4 text-lg h-auto">
                      Take Assessment
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <span className="text-white">Master</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                    Artificial Intelligence
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                  Transform your career with comprehensive AI education designed by industry experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link to="/auth">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg h-auto">
                      Start Learning
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 px-10 py-4 text-lg h-auto">
                      <Play className="w-5 h-5 mr-2" />
                      Explore Courses
                    </Button>
                  </Link>
                </div>
              </>
            )}
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">10,000+</div>
                <div className="text-gray-400">Students Trained</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-gray-400">Completion Rate</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">4.8/5</div>
                <div className="text-gray-400 flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks Preview */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Structured learning tracks designed to take you from where you are to where you want to be in AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <Badge className="bg-green-500/20 text-green-400 w-fit border-green-500/30">Beginner</Badge>
                <CardTitle className="text-2xl text-white">Start Your AI Journey</CardTitle>
                <p className="text-gray-400">Perfect for complete beginners with no technical background.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    What is AI?
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Machine Learning basics
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Hands-on with Teachable Machine
                  </div>
                </div>
                <Link to="/courses/beginner">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <Badge className="bg-blue-500/20 text-blue-400 w-fit border-blue-500/30">Intermediate</Badge>
                <CardTitle className="text-2xl text-white">Build Practical Skills</CardTitle>
                <p className="text-gray-400">Develop business-ready AI skills and applications.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Building ML Models
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    AI in Business
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-3" />
                    Prompt Engineering
                  </div>
                </div>
                <Link to="/courses/intermediate">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                    Advance Skills
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <Badge className="bg-purple-500/20 text-purple-400 w-fit border-purple-500/30">Advanced</Badge>
                <CardTitle className="text-2xl text-white">Master AI Systems</CardTitle>
                <p className="text-gray-400">Deep dive into cutting-edge AI technologies.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                    Deep Learning
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                    Transformers & LLMs
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                    Scalable AI Systems
                  </div>
                </div>
                <Link to="/courses/advanced">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                    Master AI
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 px-8">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose AI Academy by AK
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference with our expert-designed learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gray-900/30 border-gray-800 shadow-2xl backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">
                  Build real AI models from day one. Every concept is reinforced with practical projects and exercises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900/30 border-gray-800 shadow-2xl backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">
                  Learn from industry professionals with years of real-world AI implementation experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-900/30 border-gray-800 shadow-2xl backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">
                  Earn certificates that are recognized by top employers and demonstrate your AI expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {user ? (
            <>
              <h2 className="text-5xl font-bold text-white mb-6">Continue Your AI Journey!</h2>
              <p className="text-xl text-gray-200 mb-12">
                You're logged in and ready to transform your career with our AI education platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg h-auto font-semibold">
                    Continue Learning
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg h-auto">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-5xl font-bold text-white mb-6">Start Your AI Journey Today!</h2>
              <p className="text-xl text-gray-200 mb-12">
                Join thousands of students transforming their careers with artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg h-auto font-semibold">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg h-auto">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
