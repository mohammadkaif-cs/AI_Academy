
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, BookOpen, Target, Lightbulb } from "lucide-react";

const BeginnerTrack = () => {
  const courses = [
    {
      title: "What is AI?",
      description: "Foundation concepts of artificial intelligence",
      duration: "2 hours",
      modules: 4,
      outcomes: [
        "Define artificial intelligence and its core components",
        "Distinguish between different types of AI systems", 
        "Identify AI applications in various industries",
        "Understand the ethical implications of AI development"
      ]
    },
    {
      title: "Intro to Machine Learning",
      description: "Understanding the fundamentals of ML algorithms",
      duration: "3 hours", 
      modules: 5,
      outcomes: [
        "Understand the machine learning workflow",
        "Identify different types of learning problems",
        "Recognize common ML algorithms and their applications",
        "Evaluate model performance using appropriate metrics"
      ]
    },
    {
      title: "Supervised vs Unsupervised Learning",
      description: "Key differences between learning paradigms",
      duration: "2.5 hours",
      modules: 4,
      outcomes: [
        "Differentiate between supervised and unsupervised learning",
        "Choose appropriate algorithms for specific problem types", 
        "Understand classification vs regression tasks",
        "Apply clustering techniques to real-world datasets"
      ]
    },
    {
      title: "Hands-on with Teachable Machine",
      description: "Build your first AI model with Google's tool",
      duration: "1.5 hours",
      modules: 3,
      outcomes: [
        "Create image, sound, and pose recognition models",
        "Understand the importance of diverse training data",
        "Export and deploy models for web applications", 
        "Troubleshoot common model training issues"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Netflix Recommendation Engine",
      description: "How Netflix uses AI to personalize content recommendations for 200+ million users",
      industry: "Entertainment"
    },
    {
      title: "Spotify Music Discovery",
      description: "Understanding how AI powers Discover Weekly and music recommendation algorithms",
      industry: "Music"
    },
    {
      title: "Amazon Alexa Voice Recognition",
      description: "Breaking down how voice assistants understand and respond to human speech",
      industry: "Smart Home"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/courses">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-green-100 text-green-800">Beginner Track</Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>8-12 hours total</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>No prerequisites</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beginner AI Track
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Perfect for those completely new to artificial intelligence. This comprehensive track introduces 
            you to AI fundamentals through practical examples, real-world case studies, and hands-on projects. 
            No technical background required - we start from the very beginning and build your knowledge step by step.
          </p>
        </div>

        {/* Track Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Target className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Who This Is For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete beginners to AI</li>
                <li>• Business professionals</li>
                <li>• Students and career changers</li>
                <li>• Anyone curious about AI</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Lightbulb className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• AI fundamentals and terminology</li>
                <li>• Machine learning basics</li>
                <li>• Practical AI applications</li>
                <li>• Hands-on model building</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CheckCircle className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Track Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Confidently discuss AI concepts</li>
                <li>• Build your first AI model</li>
                <li>• Identify AI opportunities</li>
                <li>• Ready for intermediate topics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Course Modules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Modules</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.duration}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                  <div className="text-sm text-gray-500">
                    {course.modules} modules
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Learning Outcomes:</h4>
                    <ul className="space-y-1">
                      {course.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Real-World Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">{study.industry}</Badge>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Content Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes This Track Special</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              The Beginner AI Track is meticulously designed for individuals with no prior experience in artificial intelligence 
              or machine learning. Unlike academic courses that dive deep into mathematical theory, we focus on building 
              practical understanding through visual explanations, real-world examples, and interactive exercises.
            </p>
            
            <p>
              <strong>Interactive Learning Approach:</strong> Each module combines video explanations, interactive demos, 
              and hands-on exercises. You'll use tools like Google's Teachable Machine to build actual AI models without 
              writing any code, giving you immediate gratification and confidence in your abilities.
            </p>
            
            <p>
              <strong>Industry Context:</strong> Every concept is taught within the context of real business applications. 
              When you learn about recommendation systems, you'll explore how Netflix, Amazon, and Spotify use these 
              technologies. This approach helps you understand not just the 'what' but the 'why' behind AI implementations.
            </p>
            
            <p>
              <strong>Progressive Skill Building:</strong> The track follows a carefully planned progression. We start with 
              the big picture of AI, narrow down to machine learning specifics, explore different learning paradigms, and 
              culminate with hands-on model creation. Each step builds naturally on the previous one.
            </p>
            
            <p>
              <strong>Practical Projects:</strong> By the end of this track, you'll have created multiple AI models including 
              an image classifier, a sound recognition system, and a pose detection model. These projects become part of 
              your portfolio and demonstrate your newfound AI capabilities to potential employers or clients.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of learners who have successfully completed our Beginner AI Track and moved on to 
            build amazing AI-powered projects and advance their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Take Skill Assessment First
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Start Beginner Track
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerTrack;
