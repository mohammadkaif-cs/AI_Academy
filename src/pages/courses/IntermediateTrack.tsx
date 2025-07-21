import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Users, CheckCircle, Code, Briefcase, Zap, ExternalLink } from "lucide-react";

const IntermediateTrack = () => {
  const courses = [
    {
      title: "Building ML Models",
      description: "Practical model development and optimization",
      duration: "4 hours",
      modules: 6,
      outcomes: [
        "Implement the complete ML development pipeline",
        "Apply advanced feature engineering techniques",
        "Optimize model performance through hyperparameter tuning",
        "Handle real-world data challenges and edge cases"
      ]
    },
    {
      title: "AI in Business Use Cases",
      description: "Real-world AI applications and ROI analysis",
      duration: "3.5 hours",
      modules: 5,
      outcomes: [
        "Identify high-impact AI opportunities in business contexts",
        "Calculate ROI and business impact of AI initiatives", 
        "Understand implementation challenges and success factors",
        "Develop AI strategy and roadmaps for organizations"
      ]
    },
    {
      title: "Prompt Engineering with ChatGPT",
      description: "Master the art of AI communication",
      duration: "3 hours",
      modules: 4,
      outcomes: [
        "Design effective prompts for various use cases",
        "Apply advanced prompting techniques and strategies",
        "Understand AI model limitations and biases",
        "Create prompt templates for consistent results"
      ]
    },
    {
      title: "Using APIs for AI",
      description: "Integration with OpenAI, HuggingFace, and more",
      duration: "4.5 hours",
      modules: 7,
      outcomes: [
        "Integrate multiple AI APIs into applications",
        "Implement proper authentication and error handling",
        "Optimize API usage for cost and performance",
        "Build production-ready AI-powered applications"
      ]
    }
  ];

  const businessCases = [
    {
      title: "Customer Service Automation",
      description: "How companies like Zendesk and Intercom use AI chatbots to handle 80% of customer inquiries automatically",
      industry: "SaaS",
      roi: "60% cost reduction"
    },
    {
      title: "Predictive Maintenance in Manufacturing",
      description: "General Electric's use of AI to predict equipment failures before they happen, saving millions in downtime",
      industry: "Manufacturing", 
      roi: "25% efficiency gain"
    },
    {
      title: "Financial Fraud Detection",
      description: "PayPal's AI systems process 19 billion transactions annually, detecting fraud with 99.5% accuracy",
      industry: "Fintech",
      roi: "$2B saved annually"
    }
  ];

  const learningOutcomes = [
    "Design and implement complete machine learning pipelines from data collection to deployment",
    "Apply advanced feature engineering techniques to improve model performance significantly",
    "Master prompt engineering strategies for consistent, high-quality AI-generated content",
    "Integrate multiple AI APIs (OpenAI, HuggingFace, Google AI) into production applications",
    "Calculate ROI and build business cases for AI initiatives within organizations",
    "Optimize ML models for performance, cost, and scalability in real-world environments",
    "Implement proper error handling, authentication, and monitoring for AI systems",
    "Develop AI strategy roadmaps and implementation plans for business contexts",
    "Build conversational AI systems that maintain context across long interactions",
    "Create automated content generation workflows for marketing and business operations"
  ];

  const fullCurriculum = [
    {
      module: "Module 1: Advanced ML Pipeline",
      title: "End-to-End Model Development",
      description: "Complete workflow from data ingestion to model deployment",
      duration: "90 minutes"
    },
    {
      module: "Module 2: Feature Engineering",
      title: "Advanced Data Transformation",
      description: "Creating powerful features that boost model performance",
      duration: "75 minutes"
    },
    {
      module: "Module 3: Model Optimization",
      title: "Hyperparameter Tuning & Performance",
      description: "Systematic approaches to model improvement",
      duration: "80 minutes"
    },
    {
      module: "Module 4: Business AI Strategy",
      title: "ROI Calculation & Implementation Planning",
      description: "Building compelling business cases for AI projects",
      duration: "70 minutes"
    },
    {
      module: "Module 5: Prompt Engineering Mastery",
      title: "Advanced ChatGPT & LLM Techniques",
      description: "Professional prompt strategies for consistent results",
      duration: "85 minutes"
    },
    {
      module: "Module 6: API Integration Fundamentals",
      title: "OpenAI API Deep Dive",
      description: "Authentication, rate limiting, and error handling",
      duration: "75 minutes"
    },
    {
      module: "Module 7: Multi-API Architecture",
      title: "HuggingFace & Google AI Integration",
      description: "Building robust multi-provider AI systems",
      duration: "90 minutes"
    },
    {
      module: "Module 8: Production Deployment",
      title: "Scaling AI Applications",
      description: "Cloud deployment and performance optimization",
      duration: "85 minutes"
    },
    {
      module: "Module 9: Conversational AI",
      title: "Advanced Chatbot Development",
      description: "Context-aware dialogue systems and memory management",
      duration: "80 minutes"
    },
    {
      module: "Module 10: Content Automation",
      title: "AI-Powered Marketing Workflows",
      description: "Automated content generation and distribution systems",
      duration: "75 minutes"
    },
    {
      module: "Module 11: Performance Monitoring",
      title: "AI System Analytics & Optimization",
      description: "Tracking performance, costs, and user satisfaction",
      duration: "70 minutes"
    },
    {
      module: "Module 12: Capstone Project",
      title: "Full-Stack AI Application",
      description: "Build and deploy a complete AI-powered business solution",
      duration: "120 minutes"
    }
  ];

  const advancedProjects = [
    {
      title: "AI-Powered Customer Service Platform",
      description: "Build a comprehensive customer support system that handles inquiries across multiple channels, routes complex issues to human agents, and learns from interactions",
      useCase: "Enterprise customer support automation",
      tools: ["OpenAI API", "Webhook integration", "Database management", "Analytics dashboard"],
      complexity: "Advanced"
    },
    {
      title: "Intelligent Content Marketing Engine",
      description: "Create an end-to-end content generation system that produces blog posts, social media content, and email campaigns based on target audience analysis",
      useCase: "Marketing automation and personalization",
      tools: ["GPT-4 API", "Social media APIs", "Content scheduling", "Performance analytics"],
      complexity: "Intermediate"
    },
    {
      title: "Predictive Business Intelligence Dashboard",
      description: "Develop a real-time analytics platform that combines historical data with AI predictions to forecast business metrics and identify opportunities",
      useCase: "Business intelligence and forecasting",
      tools: ["Machine Learning APIs", "Data visualization", "Real-time processing", "Business metrics"],
      complexity: "Advanced"
    }
  ];

  const professionalTools = [
    { name: "Python & Jupyter Notebooks", category: "Development Environment", description: "Industry standard for ML development" },
    { name: "OpenAI API Suite", category: "Language Models", description: "GPT-4, DALL-E, Whisper integration" },
    { name: "HuggingFace Transformers", category: "ML Models", description: "Open source transformer models and tools" },
    { name: "Google Cloud AI Platform", category: "Cloud Services", description: "Scalable ML infrastructure and APIs" },
    { name: "Docker & Containerization", category: "Deployment", description: "Scalable application deployment" },
    { name: "Postman & API Testing", category: "Development Tools", description: "API development and testing platform" },
    { name: "Weights & Biases", category: "ML Operations", description: "Experiment tracking and model management" },
    { name: "Streamlit & Gradio", category: "UI Development", description: "Rapid ML application prototyping" }
  ];

  const professionalFAQs = [
    {
      question: "What programming skills do I need for this intermediate track?",
      answer: "While this track focuses more on business applications than heavy coding, basic familiarity with Python is helpful but not required. We provide code templates and focus on understanding concepts rather than writing everything from scratch. Most students with completed beginner track or equivalent business/technical experience do well."
    },
    {
      question: "How is this different from online coding bootcamps or computer science programs?",
      answer: "This track is specifically designed for business applications of AI, not general software development. We focus on practical implementation, ROI calculation, and real business use cases. You'll spend more time on strategy, integration, and business impact rather than theoretical computer science concepts."
    },
    {
      question: "Can I implement these AI solutions in my current workplace?",
      answer: "Absolutely! This track is designed with workplace application in mind. Many students successfully implement AI solutions in their current roles. We cover compliance, security considerations, and change management strategies to help you introduce AI effectively in professional environments."
    },
    {
      question: "What kind of budget do I need for the AI tools and APIs we'll use?",
      answer: "Most assignments can be completed with free tiers of various APIs (OpenAI, HuggingFace, Google Cloud). For production applications, typical costs range from $50-200/month depending on usage. We teach cost optimization strategies and help you understand pricing models for budgeting AI projects."
    },
    {
      question: "Will this prepare me for AI leadership roles or should I continue to the Advanced track?",
      answer: "This track prepares you for AI implementation roles, business analyst positions, and technical product management. If you're aiming for AI research roles, data science positions, or want to build AI systems from scratch, the Advanced track would be a better next step. For business leadership roles, this track provides excellent preparation."
    }
  ];

  const businessResources = [
    { title: "Harvard Business Review AI Collection", type: "Articles", url: "https://hbr.org/topic/artificial-intelligence", description: "Business strategy and AI implementation insights" },
    { title: "OpenAI API Documentation", type: "Technical Docs", url: "https://platform.openai.com/docs", description: "Complete reference for OpenAI integration" },
    { title: "Google AI for Everyone Course", type: "Course", url: "https://ai.google/education/", description: "Business-focused AI education from Google" },
    { title: "AI Business Transformation Playbook", type: "Guide", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights", description: "McKinsey insights on AI adoption" },
    { title: "Prompt Engineering Guide", type: "Resource", url: "https://www.promptingguide.ai/", description: "Comprehensive prompt engineering techniques" },
    { title: "HuggingFace Course", type: "Technical Course", url: "https://huggingface.co/course", description: "Deep dive into transformer models and applications" }
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
            <Badge className="bg-blue-100 text-blue-800">Intermediate Track</Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>15-20 hours total</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Basic AI knowledge required</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intermediate AI Track
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mb-8">
            Take your AI knowledge to the next level with practical model building, business applications, and 
            real-world implementation strategies. This track bridges the gap between theoretical understanding 
            and practical AI deployment in professional environments.
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
                  <Code className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Completed Beginner Track or equivalent</li>
                    <li>• Basic understanding of AI concepts</li>
                    <li>• Familiarity with data and spreadsheets</li>
                    <li>• Business or technical background helpful</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <Briefcase className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Business Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ROI calculation and business cases</li>
                    <li>• Implementation strategies</li>
                    <li>• Real industry applications</li>
                    <li>• API integration and automation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <Zap className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle>Practical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Build production ML models</li>
                    <li>• Master prompt engineering</li>
                    <li>• Integrate AI APIs effectively</li>
                    <li>• Optimize for performance and cost</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Learning Outcomes */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Learning Outcomes</CardTitle>
                <CardDescription>Skills you'll master for professional AI implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
                <CardTitle className="text-2xl">Professional Curriculum</CardTitle>
                <CardDescription>12 modules focused on business AI implementation</CardDescription>
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
                        <Badge className="bg-blue-100 text-blue-800">{item.duration}</Badge>
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
                <CardTitle className="text-2xl">Professional Projects</CardTitle>
                <CardDescription>Production-ready applications you'll build and deploy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {advancedProjects.map((project, index) => (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <Badge className={
                            project.complexity === "Advanced" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
                          }>
                            {project.complexity}
                          </Badge>
                        </div>
                        <Badge className="w-fit bg-green-100 text-green-800">{project.useCase}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Technology Stack:</h4>
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
                <CardTitle className="text-2xl">Professional Tools & Technologies</CardTitle>
                <CardDescription>Industry-standard platforms and frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {professionalTools.map((tool, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                        <Badge className="bg-blue-100 text-blue-800 text-xs">{tool.category}</Badge>
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
                <CardTitle className="text-2xl">Professional Track FAQ</CardTitle>
                <CardDescription>Common questions about intermediate AI implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {professionalFAQs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      {index < professionalFAQs.length - 1 && <hr className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Resources</CardTitle>
                <CardDescription>Business and technical resources for AI implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessResources.map((resource, index) => (
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
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Professional AI Implementation?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This track prepares you for AI roles in business, consulting, and product development. Previous students 
            have gone on to lead AI initiatives at major corporations and startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Intermediate Track
            </Button>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermediateTrack;
