
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
    <div className="min-h-screen bg-background flex flex-col font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            {user ? (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                  Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">{firstName}!</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed font-inter">
                  Continue your AI mastery journey with expert-guided learning and hands-on projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                  <Link to="/dashboard">
                    <Button size="lg" className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 rounded-2xl">
                      <User className="w-6 h-6 mr-3" />
                      Continue Learning
                    </Button>
                  </Link>
                  <Link to="/assessment">
                    <Button size="lg" variant="outline" className="px-12 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 rounded-2xl">
                      Take Assessment
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                  Master <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Artificial Intelligence</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed font-inter">
                  Transform your career with comprehensive AI education designed by industry experts and powered by cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                  <Link to="/auth">
                    <Button size="lg" className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 rounded-2xl">
                      Start Learning
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-12 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 rounded-2xl"
                    >
                      <Play className="w-6 h-6 mr-3" />
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/assessment">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-12 py-4 text-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 rounded-2xl"
                    >
                      Take Assessment
                    </Button>
                  </Link>
                </div>
              </>
            )}
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-white/70 backdrop-blur-sm rounded-3xl animate-scale-in">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">10,000+</div>
                  <div className="text-gray-600 font-medium text-lg">Students Trained</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-white/70 backdrop-blur-sm rounded-3xl animate-scale-in" style={{animationDelay: '0.2s'}}>
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">95%</div>
                  <div className="text-gray-600 font-medium text-lg">Completion Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-white/70 backdrop-blur-sm rounded-3xl animate-scale-in" style={{animationDelay: '0.4s'}}>
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-3 flex items-center justify-center">
                    4.8/5 <Star className="w-8 h-8 text-yellow-500 ml-2" />
                  </div>
                  <div className="text-gray-600 font-medium text-lg">Average Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks Preview */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Ccircle cx="30" cy="30" r="30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Choose Your Learning Path
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
              Structured learning tracks designed to take you from where you are to where you want to be in AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl group bg-white rounded-3xl overflow-hidden animate-scale-in">
              <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <Badge className="bg-green-100 text-green-800 w-fit group-hover:bg-green-200 transition-colors duration-300 px-4 py-2 text-sm font-semibold rounded-full">Beginner</Badge>
                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300 font-bold mt-4">Start Your AI Journey</CardTitle>
                <p className="text-gray-600 text-lg font-inter">Perfect for complete beginners with no technical background.</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">What is AI?</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Machine Learning basics</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Hands-on with Teachable Machine</span>
                  </div>
                </div>
                <Link to="/courses/beginner">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-105 transition-all duration-300 shadow-xl py-3 text-lg font-semibold rounded-2xl">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl group bg-white rounded-3xl overflow-hidden animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                <Badge className="bg-blue-100 text-blue-800 w-fit group-hover:bg-blue-200 transition-colors duration-300 px-4 py-2 text-sm font-semibold rounded-full">Intermediate</Badge>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300 font-bold mt-4">Build Practical Skills</CardTitle>
                <p className="text-gray-600 text-lg font-inter">Develop business-ready AI skills and applications.</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Building ML Models</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">AI in Business</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Prompt Engineering</span>
                  </div>
                </div>
                <Link to="/courses/intermediate">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-xl py-3 text-lg font-semibold rounded-2xl">
                    Advance Skills
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl group bg-white rounded-3xl overflow-hidden animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-8">
                <Badge className="bg-purple-100 text-purple-800 w-fit group-hover:bg-purple-200 transition-colors duration-300 px-4 py-2 text-sm font-semibold rounded-full">Advanced</Badge>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors duration-300 font-bold mt-4">Master AI Systems</CardTitle>
                <p className="text-gray-600 text-lg font-inter">Deep dive into cutting-edge AI technologies.</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Deep Learning</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Transformers & LLMs</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-4 flex-shrink-0" />
                    <span className="font-medium">Scalable AI Systems</span>
                  </div>
                </div>
                <Link to="/courses/advanced">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 hover:scale-105 transition-all duration-300 shadow-xl py-3 text-lg font-semibold rounded-2xl">
                    Master AI
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link to="/courses">
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-xl hover:shadow-blue-500/20 rounded-2xl"
              >
                View All Courses
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Why Choose AI Academy by AK
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
              Experience the difference with our expert-designed learning platform and cutting-edge curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl group bg-white/80 backdrop-blur-sm rounded-3xl animate-scale-in">
              <CardHeader className="pt-12 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                  <BookOpen className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300 font-bold">Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-12">
                <p className="text-gray-600 text-lg font-inter leading-relaxed">
                  Build real AI models from day one. Every concept is reinforced with practical projects and real-world exercises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl group bg-white/80 backdrop-blur-sm rounded-3xl animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pt-12 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300 font-bold">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-12">
                <p className="text-gray-600 text-lg font-inter leading-relaxed">
                  Learn from industry professionals with years of real-world AI implementation experience at top tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl group bg-white/80 backdrop-blur-sm rounded-3xl animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="pt-12 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 shadow-lg">
                  <Award className="w-10 h-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors duration-300 font-bold">Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-12">
                <p className="text-gray-600 text-lg font-inter leading-relaxed">
                  Earn certificates that are recognized by top employers and demonstrate your AI expertise in the market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {user ? (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Continue Your AI Journey!</h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-16 leading-relaxed font-inter">
                You're logged in and ready to transform your career with our comprehensive AI education platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="px-12 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20 rounded-2xl bg-white text-blue-600 hover:bg-gray-50">
                    Continue Learning
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Start Your AI Journey Today!</h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-16 leading-relaxed font-inter">
                Join thousands of students transforming their careers with artificial intelligence and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="/auth">
                  <Button size="lg" variant="secondary" className="px-12 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20 rounded-2xl bg-white text-blue-600 hover:bg-gray-50">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl"
                  >
                    Take Assessment
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
