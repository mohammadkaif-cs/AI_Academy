
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Target, CheckCircle, TrendingUp, Shield, Clock, Award } from "lucide-react";

const ReadinessTest = () => {
  const readinessAreas = [
    {
      title: "Leadership Commitment",
      description: "Assess executive support and strategic alignment for AI initiatives",
      icon: Target,
      metrics: ["C-level AI awareness", "Budget allocation", "Strategic roadmap", "Change management"]
    },
    {
      title: "Technical Infrastructure",
      description: "Evaluate current technology stack and data infrastructure readiness",
      icon: Shield,
      metrics: ["Data quality", "Cloud readiness", "Security protocols", "Integration capabilities"]
    },
    {
      title: "Talent & Skills",
      description: "Analyze team capabilities and skill gaps for AI implementation",
      icon: Users,
      metrics: ["Technical expertise", "AI literacy", "Training programs", "Hiring strategy"]
    },
    {
      title: "Data Maturity",
      description: "Review data governance, quality, and accessibility across the organization",
      icon: TrendingUp,
      metrics: ["Data governance", "Quality standards", "Accessibility", "Privacy compliance"]
    }
  ];

  const readinessLevels = [
    {
      level: "Not Ready",
      score: "0-25%",
      description: "Significant foundational work needed before AI implementation",
      actions: ["Establish data governance", "Build technical infrastructure", "Secure leadership buy-in"],
      timeline: "6-12 months preparation",
      color: "bg-red-100 text-red-800"
    },
    {
      level: "Getting Started",
      score: "26-50%",
      description: "Basic foundations in place but major gaps remain",
      actions: ["Develop AI strategy", "Invest in talent development", "Pilot small projects"],
      timeline: "3-6 months preparation",
      color: "bg-orange-100 text-orange-800"
    },
    {
      level: "Making Progress",
      score: "51-75%",
      description: "Good foundation with some areas needing strengthening",
      actions: ["Scale successful pilots", "Address skill gaps", "Enhance data quality"],
      timeline: "1-3 months preparation",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      level: "AI Ready",
      score: "76-90%",
      description: "Strong foundation ready for comprehensive AI implementation",
      actions: ["Launch major initiatives", "Scale across departments", "Measure ROI"],
      timeline: "Ready to implement",
      color: "bg-green-100 text-green-800"
    },
    {
      level: "AI Advanced",
      score: "91-100%",
      description: "Mature AI organization ready for cutting-edge implementations",
      actions: ["Lead industry innovation", "Develop AI products", "Share best practices"],
      timeline: "Innovation leader",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const benefits = [
    {
      title: "Strategic Clarity",
      description: "Understand exactly where your organization stands and what steps to take next",
      icon: Target
    },
    {
      title: "Risk Mitigation",
      description: "Identify potential roadblocks and challenges before they impact your AI initiatives",
      icon: Shield
    },
    {
      title: "Resource Optimization",
      description: "Focus investments on areas that will have the highest impact on AI success",
      icon: TrendingUp
    },
    {
      title: "Competitive Advantage",
      description: "Benchmark against industry standards and identify opportunities for differentiation",
      icon: Award
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
              <Building className="w-20 h-20 text-blue-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Readiness Test for Teams
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Assess your organization's readiness for AI implementation with our comprehensive 
                evaluation framework designed for business leaders and decision-makers.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>25-30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>For teams & organizations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Detailed action plan</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start Team Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* What We Assess */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Organizational Assessment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our assessment evaluates four critical dimensions of organizational AI readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {readinessAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <p className="text-gray-600">{area.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Metrics:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {area.metrics.map((metric, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Readiness Levels */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI Readiness Maturity Levels
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understand where your organization stands and what steps to take next.
              </p>
            </div>

            <div className="space-y-6">
              {readinessLevels.map((level, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge className={level.color}>{level.level}</Badge>
                          <Badge variant="outline">{level.score}</Badge>
                          <Badge variant="secondary">{level.timeline}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{level.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Recommended Actions:</h4>
                          <div className="flex flex-wrap gap-2">
                            {level.actions.map((action, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {action}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Take the AI Readiness Test?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get actionable insights that drive successful AI implementation in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="shadow-lg text-center">
                    <CardHeader>
                      <IconComponent className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sample Questions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sample Assessment Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get a preview of the types of questions in our comprehensive assessment.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Leadership & Strategy</h3>
                  <p className="text-gray-600">
                    "How would you rate your organization's executive leadership understanding of AI opportunities and risks?"
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Infrastructure</h3>
                  <p className="text-gray-600">
                    "What percentage of your organization's data is easily accessible, well-documented, and of high quality?"
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Capabilities</h3>
                  <p className="text-gray-600">
                    "How many team members have hands-on experience with AI/ML tools and platforms?"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Assess Your Team's AI Readiness?</h2>
            <p className="text-xl opacity-90 mb-8">
              Get a comprehensive evaluation of your organization's AI readiness with actionable recommendations 
              for successful implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Start Team Assessment
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ReadinessTest;
