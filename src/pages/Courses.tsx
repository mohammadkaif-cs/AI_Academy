
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Clock, Award } from "lucide-react";

const Courses = () => {
  const courseTrack = [
    {
      id: "beginner",
      title: "Beginner Track",
      description: "Perfect for those new to AI and machine learning",
      duration: "8-12 hours",
      courses: 4,
      level: "Beginner",
      color: "bg-green-100 text-green-800",
      icon: BookOpen,
      path: "/courses/beginner"
    },
    {
      id: "intermediate",
      title: "Intermediate Track", 
      description: "Build practical AI skills and business applications",
      duration: "15-20 hours",
      courses: 4,
      level: "Intermediate",
      color: "bg-blue-100 text-blue-800",
      icon: Users,
      path: "/courses/intermediate"
    },
    {
      id: "advanced",
      title: "Advanced Track",
      description: "Deep dive into advanced AI concepts and systems",
      duration: "22-30 hours", 
      courses: 4,
      level: "Advanced",
      color: "bg-purple-100 text-purple-800",
      icon: Award,
      path: "/courses/advanced"
    },
    {
      id: "generative-ai",
      title: "Generative AI",
      description: "Master text, image, and multimedia generation",
      duration: "12-15 hours",
      courses: 3,
      level: "Specialized",
      color: "bg-orange-100 text-orange-800",
      icon: Clock,
      path: "/courses/generative-ai"
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Text analysis and language understanding",
      duration: "18-25 hours",
      courses: 4,
      level: "Specialized", 
      color: "bg-teal-100 text-teal-800",
      icon: BookOpen,
      path: "/courses/nlp"
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      description: "Image processing and visual AI applications",
      duration: "20-28 hours",
      courses: 5,
      level: "Specialized",
      color: "bg-pink-100 text-pink-800",
      icon: Users,
      path: "/courses/computer-vision"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Academy Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive AI education designed by industry experts. Choose your learning path 
            and master artificial intelligence from fundamentals to cutting-edge applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Self-paced learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Industry certificates</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Expert mentorship</span>
            </div>
          </div>
        </div>

        {/* Course Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseTrack.map((track) => {
            const IconComponent = track.icon;
            return (
              <Card key={track.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <Badge className={track.color}>{track.level}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{track.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {track.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>{track.courses} courses</span>
                    <span>{track.duration}</span>
                  </div>
                  
                  <Link to={track.path}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Explore Track
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Path Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Recommended Learning Path
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { step: 1, title: "Start with Assessment", desc: "Take our AI Skill Assessment" },
              { step: 2, title: "Choose Your Track", desc: "Based on your results and goals" }, 
              { step: 3, title: "Learn & Practice", desc: "Hands-on projects and real examples" },
              { step: 4, title: "Get Certified", desc: "Earn industry-recognized credentials" }
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 max-w-32">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mt-4 hidden md:block absolute md:relative md:ml-8" />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/assessment">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Start Your AI Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
