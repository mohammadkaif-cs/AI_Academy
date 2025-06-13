
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, MessageSquare, BarChart, Search, Bot } from "lucide-react";

const NLP = () => {
  const modules = [
    {
      title: "Text Processing Fundamentals",
      description: "Foundation techniques for text analysis",
      duration: "3.5 hours",
      topics: ["Tokenization", "Stemming & Lemmatization", "POS tagging", "Text preprocessing"],
      applications: ["Data cleaning", "Search optimization", "Content analysis", "Language detection"]
    },
    {
      title: "Sentiment Analysis & Classification",
      description: "Understanding emotions and opinions in text",
      duration: "4 hours",
      topics: ["Sentiment scoring", "Emotion detection", "Multi-class classification", "Aspect-based sentiment"],
      applications: ["Social media monitoring", "Customer feedback", "Brand monitoring", "Market research"]
    },
    {
      title: "Named Entity Recognition",
      description: "Extracting structured information from text",
      duration: "3 hours",
      topics: ["Entity extraction", "Relationship mapping", "Knowledge graphs", "Information retrieval"],
      applications: ["Document analysis", "News processing", "Legal document review", "Medical records"]
    },
    {
      title: "Advanced NLP Applications",
      description: "Building intelligent text-based systems",
      duration: "7.5 hours",
      topics: ["Question answering", "Text summarization", "Chatbot development", "Language translation"],
      applications: ["Customer service bots", "Document summarization", "Content localization", "FAQ systems"]
    }
  ];

  const industryApplications = [
    {
      title: "Healthcare Documentation",
      company: "Epic Systems",
      description: "AI-powered analysis of medical records to extract patient information, symptoms, and treatment recommendations, reducing physician documentation time by 50%",
      metrics: "50% time savings, 95% accuracy in information extraction"
    },
    {
      title: "Financial Risk Assessment",
      company: "JPMorgan Chase",
      description: "NLP analysis of news articles, earnings calls, and social media to assess investment risks and market sentiment in real-time",
      metrics: "30% better risk prediction, real-time market insights"
    },
    {
      title: "Legal Document Review",
      company: "LexisNexis",
      description: "Automated contract analysis and legal document review using NLP to identify clauses, risks, and compliance issues",
      metrics: "80% faster document review, 90% accuracy in clause identification"
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
            <Badge className="bg-teal-100 text-teal-800">Specialized Track</Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>18-25 hours total</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Technical professionals</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Natural Language Processing
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Master the science of teaching computers to understand, interpret, and generate human language. 
            From sentiment analysis to chatbot development, learn to build AI systems that process text with human-like comprehension.
          </p>
        </div>

        {/* Track Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Text Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Process and analyze text data to extract meaningful insights and patterns</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <BarChart className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Detect emotions, opinions, and attitudes in customer feedback and social media</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Search className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Information Extraction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Automatically extract entities, relationships, and structured data from documents</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Bot className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Conversational AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Build intelligent chatbots and question-answering systems</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Modules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Modules</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <Badge variant="secondary">{module.duration}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Techniques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.applications.map((app, i) => (
                          <Badge key={i} className="bg-teal-100 text-teal-800 text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryApplications.map((application, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-teal-100 text-teal-800">{application.company}</Badge>
                  <CardTitle className="text-lg">{application.title}</CardTitle>
                  <CardDescription className="text-sm">{application.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Impact:</p>
                    <p className="text-sm text-green-700">{application.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mastering Human Language Understanding</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Natural Language Processing represents one of the most challenging and rewarding areas of AI, requiring 
              computers to understand the nuance, context, and complexity of human communication. This specialized track 
              provides deep expertise in text analysis, language understanding, and building systems that can process human language at scale.
            </p>
            
            <p>
              <strong>Foundation Techniques Mastery:</strong> Begin with the fundamental building blocks of NLP including 
              tokenization, stemming, lemmatization, and part-of-speech tagging. These preprocessing steps are critical 
              for all downstream NLP tasks. You'll learn industry-standard libraries like NLTK, spaCy, and transformers, 
              understanding when to apply different preprocessing strategies for optimal results.
            </p>
            
            <p>
              <strong>Sentiment Analysis Excellence:</strong> Master both rule-based and machine learning approaches to 
              sentiment analysis. Learn to detect not just positive/negative sentiment, but complex emotions like joy, 
              anger, fear, and surprise. Explore aspect-based sentiment analysis used by companies like Amazon to understand 
              specific product features customers love or hate. Build real-time sentiment monitoring systems for social media and customer feedback.
            </p>
            
            <p>
              <strong>Information Extraction Systems:</strong> Named Entity Recognition (NER) and relationship extraction 
              are critical for converting unstructured text into structured data. Learn to identify people, organizations, 
              locations, dates, and custom entities in documents. Build knowledge graphs that connect entities and their 
              relationships, enabling advanced search and recommendation systems.
            </p>
            
            <p>
              <strong>Advanced Language Applications:</strong> Move beyond basic text processing to build sophisticated 
              language applications. Create question-answering systems that can search through large document collections, 
              build extractive and abstractive text summarization tools, and develop conversational AI systems that can 
              maintain context across long conversations.
            </p>
            
            <p>
              <strong>Production NLP Systems:</strong> Learn to deploy NLP models at scale using cloud services and 
              APIs. Understand the challenges of processing multilingual text, handling streaming data, and maintaining 
              model performance as language patterns evolve. Cover privacy considerations for text data and techniques 
              for anonymizing sensitive information while preserving analytical value.
            </p>
          </div>
        </div>

        {/* Projects & Portfolio */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Hands-On Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Social Media Sentiment Dashboard",
                description: "Real-time monitoring of brand mentions across social platforms with sentiment analysis and trend detection"
              },
              {
                title: "Customer Support Chatbot",
                description: "Intelligent chatbot that understands customer queries and provides accurate responses using NLP"
              },
              {
                title: "Document Classification System",
                description: "Automated system for categorizing and routing documents based on content analysis"
              },
              {
                title: "News Article Summarizer",
                description: "Tool that generates concise summaries of news articles while preserving key information"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Portfolio Project</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Master the Language of Machines</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            NLP skills are in highest demand across industries from healthcare to finance. Build expertise that 
            makes you indispensable in the age of AI-powered text analysis and conversational interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              Start NLP Track
            </Button>
            <Link to="/courses/advanced">
              <Button size="lg" variant="outline">
                View Advanced Track
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLP;
