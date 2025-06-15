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
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {user ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Welcome back, <span className="text-blue-600 animate-pulse">{firstName}!</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                  Continue your AI mastery journey with expert-guided learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link to="/dashboard">
                    <Button size="lg" className="px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <User className="w-5 h-5 mr-2" />
                      Continue Learning
                    </Button>
                  </Link>
                  <Link to="/assessment">
                    <Button size="lg" variant="outline" className="px-8 py-3 hover:scale-105 transition-all duration-200 hover:bg-blue-50 hover:border-blue-300">
                      Take Assessment
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Master <span className="text-blue-600">Artificial Intelligence</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                  Transform your career with comprehensive AI education designed by industry experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link to="/auth">
                    <Button size="lg" className="px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Start Learning
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-3 hover:scale-105 transition-all duration-200 border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 focus:ring-blue-200"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/assessment">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 focus:ring-blue-200 hover:scale-105 transition-all duration-200"
                    >
                      Take Assessment
                    </Button>
                  </Link>
                </div>
              </>
            )}
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Completion Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2 flex items-center justify-center">
                    4.8/5 <Star className="w-6 h-6 text-yellow-500 ml-1" />
                  </div>
                  <div className="text-gray-600">Average Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning tracks designed to take you from where you are to where you want to be in AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
              <CardHeader>
                <Badge className="bg-green-100 text-green-800 w-fit group-hover:bg-green-200 transition-colors duration-200">Beginner</Badge>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-200">Start Your AI Journey</CardTitle>
                <p className="text-gray-600">Perfect for complete beginners with no technical background.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    What is AI?
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Machine Learning basics
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Hands-on with Teachable Machine
                  </div>
                </div>
                <Link to="/courses/beginner">
                  <Button className="w-full bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-200">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
              <CardHeader>
                <Badge className="bg-blue-100 text-blue-800 w-fit group-hover:bg-blue-200 transition-colors duration-200">Intermediate</Badge>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">Build Practical Skills</CardTitle>
                <p className="text-gray-600">Develop business-ready AI skills and applications.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Building ML Models
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    AI in Business
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Prompt Engineering
                  </div>
                </div>
                <Link to="/courses/intermediate">
                  <Button className="w-full hover:scale-105 transition-all duration-200">
                    Advance Skills
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
              <CardHeader>
                <Badge className="bg-purple-100 text-purple-800 w-fit group-hover:bg-purple-200 transition-colors duration-200">Advanced</Badge>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-200">Master AI Systems</CardTitle>
                <p className="text-gray-600">Deep dive into cutting-edge AI technologies.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Deep Learning
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Transformers & LLMs
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Scalable AI Systems
                  </div>
                </div>
                <Link to="/courses/advanced">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200">
                    Master AI
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-200 border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 focus:ring-blue-200"
              >
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose AI Academy by AK
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our expert-designed learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build real AI models from day one. Every concept is reinforced with practical projects and exercises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-200">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn from industry professionals with years of real-world AI implementation experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-200">Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn certificates that are recognized by top employers and demonstrate your AI expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {user ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Continue Your AI Journey!</h2>
              <p className="text-xl text-blue-100 mb-12">
                You're logged in and ready to transform your career with our AI education platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Continue Learning
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 hover:scale-105 transition-all duration-200">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your AI Journey Today!</h2>
              <p className="text-xl text-blue-100 mb-12">
                Join thousands of students transforming their careers with artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/auth">
                  <Button size="lg" variant="secondary" className="px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 px-8 py-3 hover:scale-105 transition-all duration-200"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 px-8 py-3 hover:scale-105 transition-all duration-200"
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
