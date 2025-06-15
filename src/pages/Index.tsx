
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, BookOpen, Users, Award, Brain, Target, TrendingUp, User } from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Master AI with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expert Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform your career with comprehensive AI education. From complete beginner to advanced practitioner, 
              we'll guide you through every step of your artificial intelligence journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {user ? (
                <Link to="/dashboard">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                    <User className="w-5 h-5 mr-2" />
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Get Started - Sign Up
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
              <Link to="/assessment">
                <Button size="lg" variant="outline" className="px-8">
                  Take Free AI Assessment
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="px-8">
                  Explore Courses
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning tracks designed to take you from where you are to where you want to be in AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="bg-green-100 text-green-800 w-fit">Beginner</Badge>
                <CardTitle className="text-xl">Start Your AI Journey</CardTitle>
                <p className="text-gray-600">Perfect for complete beginners with no technical background.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">• What is AI?</p>
                  <p className="text-sm text-gray-500">• Machine Learning basics</p>
                  <p className="text-sm text-gray-500">• Hands-on with Teachable Machine</p>
                </div>
                <Link to="/courses/beginner">
                  <Button className="w-full">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="bg-blue-100 text-blue-800 w-fit">Intermediate</Badge>
                <CardTitle className="text-xl">Build Practical Skills</CardTitle>
                <p className="text-gray-600">Develop business-ready AI skills and applications.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">• Building ML Models</p>
                  <p className="text-sm text-gray-500">• AI in Business</p>
                  <p className="text-sm text-gray-500">• Prompt Engineering</p>
                </div>
                <Link to="/courses/intermediate">
                  <Button className="w-full">Advance Skills</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="bg-purple-100 text-purple-800 w-fit">Advanced</Badge>
                <CardTitle className="text-xl">Master AI Systems</CardTitle>
                <p className="text-gray-600">Deep dive into cutting-edge AI technologies.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">• Deep Learning</p>
                  <p className="text-sm text-gray-500">• Transformers & LLMs</p>
                  <p className="text-sm text-gray-500">• Scalable AI Systems</p>
                </div>
                <Link to="/courses/advanced">
                  <Button className="w-full">Master AI</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Academy by AK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build real AI models from day one. Every concept is reinforced with practical projects and exercises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn from industry professionals with years of real-world AI implementation experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <CardTitle>Industry Recognition</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of professionals who have transformed their careers with our AI education platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="px-8">
                  Continue Learning
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="px-8">
                  Sign Up Now
                </Button>
              </Link>
            )}
            <Link to="/assessment">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                Take Free Assessment
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
