import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, Brain, Cpu, Shield } from "lucide-react";

const AdvancedTrack = () => {
  const courses = [
    {
      title: "Deep Learning Concepts",
      description: "Neural networks, CNNs, and RNNs explained",
      duration: "6 hours",
      modules: 8,
      outcomes: [
        "Understand the mathematical foundations of neural networks",
        "Implement CNNs for image classification and object detection", 
        "Apply RNNs and LSTMs for sequence prediction tasks",
        "Optimize deep learning models for performance and accuracy"
      ]
    },
    {
      title: "Transformers & Large Language Models",
      description: "Understanding modern NLP architectures",
      duration: "5.5 hours",
      modules: 7,
      outcomes: [
        "Understand transformer architecture and attention mechanisms",
        "Implement fine-tuning strategies for specific domains",
        "Apply advanced prompt engineering techniques",
        "Evaluate and compare different language model architectures"
      ]
    },
    {
      title: "Ethics and Explainability in AI",
      description: "Responsible AI development and deployment",
      duration: "4 hours",
      modules: 6,
      outcomes: [
        "Identify and mitigate bias in AI systems",
        "Implement explainable AI techniques and tools",
        "Develop ethical AI governance frameworks",
        "Ensure compliance with AI regulations and standards"
      ]
    },
    {
      title: "Building Scalable AI Systems",
      description: "Production deployment and MLOps",
      duration: "7 hours",
      modules: 9,
      outcomes: [
        "Design and implement MLOps pipelines",
        "Deploy AI models at scale with high availability",
        "Monitor and maintain AI systems in production",
        "Implement continuous learning and model updates"
      ]
    }
  ];

  const researchTopics = [
    {
      title: "Attention Is All You Need",
      description: "The groundbreaking paper that introduced the Transformer architecture, revolutionizing NLP and enabling models like GPT and BERT",
      impact: "Foundation of modern LLMs",
      year: "2017"
    },
    {
      title: "BERT: Bidirectional Encoder Representations",
      description: "Google's breakthrough in understanding context in both directions, setting new benchmarks across NLP tasks",
      impact: "Improved search and understanding",
      year: "2018"
    },
    {
      title: "GPT-3: Language Models are Few-Shot Learners",
      description: "OpenAI's demonstration that large language models can perform tasks with minimal examples, changing AI capabilities",
      impact: "Enabled ChatGPT and AI boom",
      year: "2020"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button to Dashboard */}
        <div className="mb-4 flex gap-3">
          <Link to="/dashboard">
            <Button variant="ghost" className="mb-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="ghost" className="mb-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>
        {/* Header */}
        <div className="mb-8">
          <Link to="/courses">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-purple-100 text-purple-800">Advanced Track</Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>22-30 hours total</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Strong technical background</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced AI Track
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Master cutting-edge AI technologies and research-level concepts. This track covers deep learning architectures, 
            transformer models, AI ethics, and production-scale system design for serious AI practitioners and researchers.
          </p>
        </div>

        {/* Track Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Brain className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Completed Intermediate Track</li>
                <li>• Programming experience (Python preferred)</li>
                <li>• Linear algebra and statistics knowledge</li>
                <li>• Understanding of ML fundamentals</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Cpu className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Technical Depth</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Neural network architectures</li>
                <li>• Transformer and attention mechanisms</li>
                <li>• MLOps and production deployment</li>
                <li>• Research paper implementations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Responsible AI</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Bias detection and mitigation</li>
                <li>• Explainable AI techniques</li>
                <li>• Ethics frameworks and governance</li>
                <li>• Regulatory compliance</li>
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

        {/* Research Papers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Research Papers Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchTopics.map((paper, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-purple-100 text-purple-800">{paper.year}</Badge>
                    <Badge className="bg-blue-100 text-blue-800">{paper.impact}</Badge>
                  </div>
                  <CardTitle className="text-lg">{paper.title}</CardTitle>
                  <CardDescription>{paper.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Research-Level AI Mastery</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              The Advanced AI Track is designed for serious practitioners who want to understand AI at the deepest level. 
              This track combines cutting-edge research insights with practical implementation skills, preparing you for 
              roles in AI research, advanced engineering, and technical leadership.
            </p>
            
            <p>
              <strong>Deep Learning Mastery:</strong> Go beyond basic neural networks to understand the mathematical 
              foundations that power modern AI. You'll implement Convolutional Neural Networks from scratch, understand 
              backpropagation at the matrix level, and optimize training processes for large-scale datasets. Learn the 
              architectural innovations that enabled breakthroughs in computer vision and natural language processing.
            </p>
            
            <p>
              <strong>Transformer Architecture Deep Dive:</strong> The transformer architecture revolutionized AI by 
              introducing the attention mechanism that powers GPT, BERT, and modern language models. You'll understand 
              multi-head attention, positional encoding, and the scaling laws that govern large language model performance. 
              Implement transformer components and understand why this architecture has become the foundation of modern AI.
            </p>
            
            <p>
              <strong>Production AI Systems:</strong> Learn to build AI systems that can handle millions of users and 
              continuous model updates. Cover MLOps practices used by companies like Google, Facebook, and Netflix to 
              deploy models at scale. Topics include A/B testing for ML models, continuous integration for model training, 
              monitoring for data drift, and automated model retraining pipelines.
            </p>
            
            <p>
              <strong>Responsible AI Development:</strong> As AI systems become more powerful, ensuring they behave 
              ethically and transparently becomes critical. Learn to detect and mitigate algorithmic bias, implement 
              explainable AI techniques like LIME and SHAP, and develop governance frameworks that balance innovation 
              with responsibility. Understand emerging regulations and how to ensure compliance in AI deployments.
            </p>
            
            <p>
              <strong>Research Implementation:</strong> Bridge the gap between academic papers and practical implementation. 
              You'll read and implement findings from top-tier conferences like NeurIPS, ICML, and ICLR. Learn to critically 
              evaluate research claims, reproduce experimental results, and adapt cutting-edge techniques for real-world applications.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for AI Research and Leadership?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This track prepares you for the most challenging AI roles including research scientist positions, 
            AI architecture roles at major tech companies, and technical leadership in AI-first startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Start Advanced Track
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Speak with an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTrack;
