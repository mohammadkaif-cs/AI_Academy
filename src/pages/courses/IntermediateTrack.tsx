
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, Code, Briefcase, Zap } from "lucide-react";

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
          <p className="text-xl text-gray-600 max-w-4xl">
            Take your AI knowledge to the next level with practical model building, business applications, and 
            real-world implementation strategies. This track bridges the gap between theoretical understanding 
            and practical AI deployment in professional environments.
          </p>
        </div>

        {/* Track Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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

        {/* Business Case Studies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessCases.map((study, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800">{study.industry}</Badge>
                    <Badge className="bg-green-100 text-green-800">{study.roi}</Badge>
                  </div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional AI Implementation</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              The Intermediate AI Track is designed for professionals ready to implement AI solutions in real business 
              environments. This track emphasizes practical application, cost optimization, and measurable business impact 
              over theoretical knowledge.
            </p>
            
            <p>
              <strong>Model Development Pipeline:</strong> You'll learn the complete machine learning workflow used by 
              data science teams at companies like Google, Netflix, and Airbnb. This includes data preprocessing, feature 
              engineering, model selection, hyperparameter tuning, and performance evaluation using industry-standard metrics.
            </p>
            
            <p>
              <strong>Business-First Approach:</strong> Every technical concept is taught through the lens of business value. 
              You'll learn to calculate ROI for AI projects, identify high-impact use cases, and communicate technical 
              concepts to non-technical stakeholders. Case studies from Fortune 500 companies demonstrate real-world 
              implementation strategies and their financial outcomes.
            </p>
            
            <p>
              <strong>API Integration Mastery:</strong> Modern AI development relies heavily on cloud-based APIs. You'll 
              master integration with OpenAI's GPT models for text generation, HuggingFace for specialized NLP tasks, 
              and cloud AI services from Google, Amazon, and Microsoft. Learn authentication, rate limiting, error handling, 
              and cost optimization strategies used in production systems.
            </p>
            
            <p>
              <strong>Prompt Engineering Excellence:</strong> As large language models become central to AI applications, 
              prompt engineering has emerged as a critical skill. You'll learn advanced techniques including few-shot learning, 
              chain-of-thought prompting, and role-based interactions. Master the art of getting consistent, high-quality 
              outputs from AI models through strategic prompt design.
            </p>
            
            <p>
              <strong>Real-World Projects:</strong> Build production-ready applications including a customer service chatbot, 
              a content generation tool, and a business intelligence dashboard powered by AI. These projects use real datasets 
              and follow industry best practices for scalability and maintainability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Professional AI Implementation?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This track prepares you for AI roles in business, consulting, and product development. Previous students 
            have gone on to lead AI initiatives at major corporations and startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Intermediate Track
            </Button>
            <Link to="/readiness-test">
              <Button size="lg" variant="outline">
                Team Readiness Test
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermediateTrack;
