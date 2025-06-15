import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Target, CheckCircle, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();

  const assessmentAreas = [
    {
      title: "AI Fundamentals",
      description: "Basic understanding of artificial intelligence concepts and terminology",
      topics: ["AI vs ML vs Deep Learning", "Types of AI systems", "Common applications"]
    },
    {
      title: "Machine Learning Basics",
      description: "Knowledge of ML algorithms, training processes, and evaluation methods",
      topics: ["Supervised vs Unsupervised", "Model training", "Performance metrics"]
    },
    {
      title: "Data Understanding",
      description: "Ability to work with data, preprocessing, and feature engineering",
      topics: ["Data types", "Cleaning techniques", "Feature selection"]
    },
    {
      title: "Tool Familiarity",
      description: "Experience with AI/ML tools, platforms, and programming languages",
      topics: ["Python basics", "AI platforms", "No-code tools"]
    },
    {
      title: "Business Applications",
      description: "Understanding of how AI applies to real-world business problems",
      topics: ["Use case identification", "ROI considerations", "Implementation challenges"]
    }
  ];

  const skillLevels = [
    {
      level: "Complete Beginner",
      score: "0-20%",
      description: "New to AI with little to no experience",
      recommendation: "Start with our Beginner Track",
      color: "bg-red-100 text-red-800"
    },
    {
      level: "Basic Understanding",
      score: "21-40%",
      description: "Some exposure to AI concepts but limited practical experience",
      recommendation: "Begin with foundational courses, then progress to Intermediate",
      color: "bg-orange-100 text-orange-800"
    },
    {
      level: "Intermediate Knowledge",
      score: "41-70%",
      description: "Good grasp of basics with some hands-on experience",
      recommendation: "Skip to Intermediate Track or specialized areas",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      level: "Advanced Practitioner",
      score: "71-85%",
      description: "Strong AI knowledge with practical implementation experience",
      recommendation: "Focus on Advanced Track and specialized domains",
      color: "bg-green-100 text-green-800"
    },
    {
      level: "Expert Level",
      score: "86-100%",
      description: "Comprehensive AI expertise with extensive practical experience",
      recommendation: "Consider our instructor program or specialized certifications",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Brain className="w-20 h-20 text-blue-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Skill Assessment
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Discover your current AI knowledge level and get personalized learning recommendations 
                tailored to your experience and career goals.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15-20 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>50 questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Instant results</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => navigate("/assessment/skill-test")}>
                Start Free Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* What We Evaluate */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Evaluate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive assessment covers five key areas of AI knowledge and practical skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assessmentAreas.map((area, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <p className="text-gray-600">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Topics:</h4>
                      <ul className="space-y-1">
                        {area.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Levels */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Understanding Your Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on your assessment score, you'll receive personalized recommendations 
                for your AI learning journey.
              </p>
            </div>

            <div className="space-y-6">
              {skillLevels.map((level, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge className={level.color}>{level.level}</Badge>
                          <Badge variant="outline">{level.score}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{level.description}</p>
                        <p className="text-sm text-gray-500">
                          <strong>Recommendation:</strong> {level.recommendation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Take the Assessment",
                  description: "Answer 50 carefully crafted questions covering all aspects of AI knowledge"
                },
                {
                  step: 2,
                  title: "Get Your Score",
                  description: "Receive an instant detailed breakdown of your strengths and areas for improvement"
                },
                {
                  step: 3,
                  title: "Personalized Path",
                  description: "Get customized course recommendations based on your current skill level"
                },
                {
                  step: 4,
                  title: "Start Learning",
                  description: "Begin your AI journey with content perfectly matched to your needs"
                }
              ].map((step, index) => (
                <Card key={index} className="text-center shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Discover Your AI Level?</h2>
            <p className="text-xl opacity-90 mb-8">
              Take our comprehensive assessment and get personalized recommendations for your AI learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Start Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                View Sample Questions
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Assessment;
