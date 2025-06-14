import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Users, CheckCircle, BookOpen, Target, Lightbulb, Code, ExternalLink } from "lucide-react";

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

  const learningOutcomes = [
    "Define artificial intelligence and distinguish between AI, machine learning, and deep learning",
    "Identify practical AI applications across industries like healthcare, finance, and entertainment",
    "Understand fundamental ML concepts including supervised, unsupervised, and reinforcement learning",
    "Build and train your first AI models using no-code tools like Teachable Machine",
    "Evaluate AI model performance using accuracy, precision, recall, and other key metrics",
    "Recognize ethical considerations and bias issues in AI system development",
    "Navigate popular AI platforms and tools used by professionals in the industry",
    "Apply data preprocessing techniques to prepare datasets for machine learning",
    "Communicate AI concepts clearly to both technical and non-technical audiences",
    "Create a personal AI project portfolio to demonstrate your foundational knowledge"
  ];

  const fullCurriculum = [
    {
      module: "Module 1: AI Fundamentals",
      title: "What is Artificial Intelligence?",
      description: "Introduction to AI history, types, and core concepts",
      duration: "45 minutes"
    },
    {
      module: "Module 2: AI vs ML vs DL",
      title: "Understanding the AI Hierarchy", 
      description: "Distinctions between AI, Machine Learning, and Deep Learning",
      duration: "30 minutes"
    },
    {
      module: "Module 3: Real-World AI",
      title: "AI Applications Everywhere",
      description: "Exploring AI in daily life and across industries",
      duration: "40 minutes"
    },
    {
      module: "Module 4: Machine Learning Basics",
      title: "Introduction to Machine Learning",
      description: "Core ML concepts and learning paradigms",
      duration: "50 minutes"
    },
    {
      module: "Module 5: Supervised Learning",
      title: "Learning with Examples",
      description: "Classification and regression problem types",
      duration: "45 minutes"
    },
    {
      module: "Module 6: Unsupervised Learning",
      title: "Finding Hidden Patterns",
      description: "Clustering and dimensionality reduction techniques",
      duration: "40 minutes"
    },
    {
      module: "Module 7: Data Preprocessing",
      title: "Preparing Data for AI",
      description: "Data cleaning, transformation, and feature selection",
      duration: "35 minutes"
    },
    {
      module: "Module 8: Model Evaluation",
      title: "Measuring AI Performance",
      description: "Accuracy metrics and performance assessment",
      duration: "40 minutes"
    },
    {
      module: "Module 9: Hands-on with Teachable Machine",
      title: "Build Your First AI Model",
      description: "Creating image, audio, and pose recognition models",
      duration: "60 minutes"
    },
    {
      module: "Module 10: AI Ethics",
      title: "Responsible AI Development",
      description: "Bias, fairness, and ethical considerations in AI",
      duration: "35 minutes"
    },
    {
      module: "Module 11: AI Tools & Platforms",
      title: "Professional AI Ecosystem",
      description: "Overview of industry-standard AI tools and platforms",
      duration: "40 minutes"
    },
    {
      module: "Module 12: Project Portfolio",
      title: "Showcasing Your AI Knowledge",
      description: "Creating and presenting your AI project portfolio",
      duration: "45 minutes"
    }
  ];

  const projectIdeas = [
    {
      title: "Smart Home Energy Monitor",
      description: "Build an AI system that analyzes household energy consumption patterns and provides recommendations for reducing electricity costs",
      useCase: "Home automation and sustainability",
      tools: ["Teachable Machine", "Google Sheets", "IoT sensors"]
    },
    {
      title: "Personal Health Assistant",
      description: "Create an AI-powered app that tracks daily symptoms and provides health insights based on patterns in user data",
      useCase: "Healthcare and wellness monitoring",
      tools: ["Teachable Machine", "Mobile app integration", "Data visualization"]
    },
    {
      title: "Local Business Recommendation Engine",
      description: "Develop a recommendation system for local restaurants and services based on user preferences and reviews",
      useCase: "E-commerce and local business support",
      tools: ["Machine Learning algorithms", "Web scraping", "Database management"]
    }
  ];

  const toolsAndTechnologies = [
    { name: "Google Teachable Machine", category: "No-Code AI", description: "Build ML models without programming" },
    { name: "Scratch for Machine Learning", category: "Visual Programming", description: "Block-based ML programming" }, 
    { name: "AI for Everyone (Coursera)", category: "Learning Platform", description: "Foundational AI concepts" },
    { name: "Kaggle Learn", category: "Practice Platform", description: "Free micro-courses and datasets" },
    { name: "Google AI Education", category: "Resource Hub", description: "Comprehensive AI learning resources" },
    { name: "TensorFlow Playground", category: "Interactive Tool", description: "Visualize neural networks in browser" }
  ];

  const faqs = [
    {
      question: "Do I need any programming experience to start this course?",
      answer: "No programming experience is required! This track is specifically designed for complete beginners. We use visual tools like Google's Teachable Machine and focus on concepts rather than coding. However, we do introduce you to the programming side so you understand what's possible as you advance."
    },
    {
      question: "How much time should I dedicate each week to complete the course?",
      answer: "We recommend 2-3 hours per week for optimal learning. The course is self-paced, so you can go faster or slower based on your schedule. Most students complete the track in 4-6 weeks with consistent study habits."
    },
    {
      question: "What kind of computer or equipment do I need?",
      answer: "Any modern computer with internet access is sufficient. We use web-based tools that work on Windows, Mac, or Chromebook. You don't need expensive hardware or software - everything we use is free and runs in your web browser."
    },
    {
      question: "Will I be able to build real AI applications after this course?",
      answer: "Yes! By the end of this track, you'll have built several working AI models including image classifiers, sound recognition systems, and recommendation engines. While these are built with no-code tools, they demonstrate real AI capabilities you can use in projects or present to employers."
    },
    {
      question: "How does this course prepare me for advanced AI learning?",
      answer: "This track builds a solid conceptual foundation and introduces you to the AI ecosystem. You'll understand the terminology, tools, and thinking patterns used by AI professionals. Many students continue to our Intermediate Track or feel confident exploring more technical resources after completing this course."
    }
  ];

  const suggestedResources = [
    { title: "AI for Everyone by Andrew Ng", type: "Course", url: "https://coursera.org/learn/ai-for-everyone", description: "Comprehensive non-technical introduction to AI" },
    { title: "Machine Learning Yearning", type: "Book", url: "https://www.deeplearning.ai/machine-learning-yearning/", description: "Free book on ML project strategy" },
    { title: "Google AI Education", type: "Resource Hub", url: "https://ai.google/education/", description: "Free courses and learning materials" },
    { title: "Kaggle Learn", type: "Practice Platform", url: "https://kaggle.com/learn", description: "Hands-on micro-courses with real datasets" },
    { title: "Elements of AI", type: "Course", url: "https://elementsofai.com/", description: "University of Helsinki's free AI course" }
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
          <p className="text-xl text-gray-600 max-w-4xl mb-8">
            Perfect for those completely new to artificial intelligence. This comprehensive track introduces 
            you to AI fundamentals through practical examples, real-world case studies, and hands-on projects. 
            No technical background required - we start from the very beginning and build your knowledge step by step.
          </p>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Track Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            {/* Learning Outcomes */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Detailed Learning Outcomes</CardTitle>
                <CardDescription>By the end of this track, you will be able to:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Curriculum</CardTitle>
                <CardDescription>12 comprehensive modules designed for complete beginners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fullCurriculum.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge variant="outline" className="mb-2">{item.module}</Badge>
                          <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{item.duration}</Badge>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Hands-On Projects</CardTitle>
                <CardDescription>Real-world applications you'll build during the track</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projectIdeas.map((project, index) => (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge className="w-fit bg-blue-100 text-blue-800">{project.useCase}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Tools Used:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tools.map((tool, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{tool}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Tools & Technologies</CardTitle>
                <CardDescription>Beginner-friendly platforms and resources you'll master</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {toolsAndTechnologies.map((tool, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                        <Badge className="bg-gray-100 text-gray-800 text-xs">{tool.category}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions from beginner AI learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      {index < faqs.length - 1 && <hr className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Suggested Resources</CardTitle>
                <CardDescription>Additional learning materials to supplement your journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestedResources.map((resource, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                          <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">{resource.type}</Badge>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mt-12">
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
