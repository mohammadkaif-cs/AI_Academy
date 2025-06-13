
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AssessmentSection = () => {
  return (
    <section id="assessments" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Assess Your AI Readiness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your current AI knowledge level and identify the perfect learning path 
            tailored to your goals and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Individual Assessment */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-blue-600">AI Skill Assessment</CardTitle>
              <CardDescription className="text-lg">
                Comprehensive evaluation of your AI knowledge and practical skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What This Assessment Covers:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Fundamental AI and ML concepts (25 questions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Practical problem-solving scenarios (15 questions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Technology stack familiarity (10 questions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Industry application knowledge (10 questions)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Assessment Process:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">1</div>
                    <span className="text-gray-700">Complete 60 adaptive questions (45-60 minutes)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">2</div>
                    <span className="text-gray-700">Receive detailed skill breakdown and scoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">3</div>
                    <span className="text-gray-700">Get personalized learning recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">4</div>
                    <span className="text-gray-700">Access career guidance and next steps</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Why Take This Assessment?</h4>
                <p className="text-blue-800 text-sm">
                  Our AI Skill Assessment is designed by industry experts and regularly updated 
                  to reflect current market demands. Over 5,000 professionals have used this 
                  assessment to identify their strengths, address knowledge gaps, and accelerate 
                  their AI career progression.
                </p>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Start Individual Assessment (Free)
              </Button>
            </CardContent>
          </Card>
          
          {/* Team Assessment */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-purple-600">AI Readiness Test for Teams</CardTitle>
              <CardDescription className="text-lg">
                Enterprise-grade assessment for organizations planning AI adoption
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Organizational Assessment Areas:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Current team AI capabilities and skill gaps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Infrastructure readiness and data maturity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Organizational culture and change readiness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Strategic alignment and business case development</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Enterprise Benefits:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-700">Comprehensive team skill mapping and gap analysis</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-700">Customized training roadmap and resource allocation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-700">ROI projections and implementation timeline</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-700">Executive summary with strategic recommendations</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Assessment Process:</h4>
                <p className="text-purple-800 text-sm mb-3">
                  Our team assessment involves stakeholder interviews, technical evaluations, 
                  and organizational analysis conducted over 2-3 weeks. The result is a 
                  comprehensive AI readiness report with actionable recommendations.
                </p>
                <p className="text-purple-800 text-sm font-semibold">
                  Fortune 500 companies trust our assessment methodology.
                </p>
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                Schedule Team Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Assessment Results Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Receive After Assessment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Skill Score Breakdown</h4>
              <p className="text-gray-600 text-sm">
                Detailed analysis of your strengths across all AI domains with percentile rankings
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalized Learning Path</h4>
              <p className="text-gray-600 text-sm">
                Custom course recommendations based on your goals, experience, and assessment results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 13.1c-.1 0-.3.1-.4.2l-1 1 2.1 2.1 1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2zm-2 1.9l-6.1 6V23h2.1l6.1-6.1-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Guidance</h4>
              <p className="text-gray-600 text-sm">
                Industry insights, role recommendations, and salary expectations based on your profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
