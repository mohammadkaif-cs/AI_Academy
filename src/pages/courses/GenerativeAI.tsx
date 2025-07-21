
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, Sparkles, Image, Type, Video } from "lucide-react";

const GenerativeAI = () => {
  const modules = [
    {
      title: "Text Generation Mastery",
      description: "Advanced prompt engineering and content creation",
      duration: "3 hours",
      topics: ["GPT-4 optimization", "Creative writing prompts", "Business content generation", "API integration"],
      tools: ["OpenAI API", "Anthropic Claude", "Cohere", "AI21 Studio"]
    },
    {
      title: "Image Generation & Design",
      description: "AI-powered visual content creation",
      duration: "2.5 hours", 
      topics: ["DALL-E 3 mastery", "Midjourney techniques", "Stable Diffusion", "Style transfer"],
      tools: ["DALL-E", "Midjourney", "Stable Diffusion", "RunwayML"]
    },
    {
      title: "Video & Multimedia AI",
      description: "Next-generation content creation",
      duration: "2 hours",
      topics: ["AI video generation", "Voice synthesis", "Music creation", "Multi-modal content"],
      tools: ["Sora", "ElevenLabs", "Mubert", "Synthesia"]
    },
    {
      title: "Business Applications",
      description: "Commercial generative AI implementation",
      duration: "4.5 hours",
      topics: ["Marketing automation", "Content workflows", "ROI optimization", "Ethics & compliance"],
      tools: ["Custom workflows", "API integrations", "Business metrics", "Compliance tools"]
    }
  ];

  const useCases = [
    {
      title: "Content Marketing Revolution",
      company: "HubSpot",
      description: "How HubSpot uses AI to generate 10,000+ blog posts, social media content, and marketing emails monthly, achieving 40% higher engagement rates",
      metrics: "40% higher engagement, 60% faster content production"
    },
    {
      title: "E-commerce Product Descriptions", 
      company: "Shopify",
      description: "AI-generated product descriptions for millions of merchants, creating unique, SEO-optimized content that increases conversion rates by 25%",
      metrics: "25% conversion increase, 90% time savings"
    },
    {
      title: "Personalized Education Content",
      company: "Khan Academy",
      description: "AI tutors that generate personalized explanations and practice problems, adapting to each student's learning style and pace",
      metrics: "35% better learning outcomes, infinite scalability"
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
            <Badge className="bg-orange-100 text-orange-800">Specialized Track</Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>12-15 hours total</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Creative & business professionals</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Generative AI Mastery
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Master the art and science of AI content generation. From GPT-powered writing to DALL-E image creation, 
            learn to harness generative AI for creative and business applications that are transforming entire industries.
          </p>
        </div>

        {/* Track Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Type className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Text Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Master GPT models, prompt engineering, and automated content workflows</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Image className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Image Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Create stunning visuals with DALL-E, Midjourney, and Stable Diffusion</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Video className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Multimedia AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Generate videos, voice, and music with cutting-edge AI tools</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Sparkles className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Business Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Implement generative AI for marketing, sales, and operations</p>
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
                      <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tools Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.tools.map((tool, i) => (
                          <Badge key={i} className="bg-blue-100 text-blue-800 text-xs">
                            {tool}
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

        {/* Real-World Use Cases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Real-World Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">{useCase.company}</Badge>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Results:</p>
                    <p className="text-sm text-green-700">{useCase.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of Content Creation</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Generative AI has fundamentally transformed how we create, edit, and distribute content across all media types. 
              This specialized track prepares you to leverage these powerful tools for maximum creative and business impact, 
              whether you're a marketer, designer, writer, or entrepreneur.
            </p>
            
            <p>
              <strong>Advanced Text Generation:</strong> Move beyond basic ChatGPT usage to master sophisticated prompt 
              engineering techniques. Learn to create consistent brand voices, generate technical documentation, craft 
              persuasive marketing copy, and build automated content workflows. You'll explore the latest models including 
              GPT-4, Claude, and specialized writing tools, understanding when and how to apply each for optimal results.
            </p>
            
            <p>
              <strong>Visual AI Mastery:</strong> The ability to generate high-quality images, logos, and designs on demand 
              has democratized visual content creation. Master DALL-E 3 for photorealistic images, Midjourney for artistic 
              creations, and Stable Diffusion for customized workflows. Learn advanced techniques like inpainting, style 
              transfer, and consistent character generation that professional designers use to enhance their creative process.
            </p>
            
            <p>
              <strong>Emerging Multimedia Technologies:</strong> Stay ahead of the curve with cutting-edge tools for video, 
              audio, and interactive content generation. Explore AI video creation with tools like Sora and RunwayML, voice 
              synthesis with ElevenLabs, and AI music composition. Understand the potential and limitations of these emerging 
              technologies and how they're reshaping media production.
            </p>
            
            <p>
              <strong>Business Implementation Strategy:</strong> Learn to integrate generative AI into real business workflows. 
              Cover content calendar automation, personalized marketing campaigns, rapid prototyping for design teams, and 
              scalable content production systems. Understand ROI calculation, quality control processes, and ethical considerations 
              for commercial AI-generated content.
            </p>
            
            <p>
              <strong>Hands-On Projects:</strong> Build practical applications including an automated blog writing system, 
              a brand-consistent image generator, a personalized email marketing tool, and a multi-modal content creation 
              workflow. These projects demonstrate real-world applications and can serve as portfolio pieces for career advancement.
            </p>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Platforms You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "OpenAI GPT-4", "Anthropic Claude", "DALL-E 3", "Midjourney", "Stable Diffusion", 
              "RunwayML", "ElevenLabs", "Synthesia", "Mubert", "Cohere", "AI21 Studio", "Jasper"
            ].map((tool, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow p-4 text-center">
                <p className="font-medium text-gray-900 text-sm">{tool}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Creative Process with AI</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join creative professionals, marketers, and entrepreneurs who are using generative AI to 10x their 
            content production while maintaining quality and brand consistency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Start Generative AI Track
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

export default GenerativeAI;
