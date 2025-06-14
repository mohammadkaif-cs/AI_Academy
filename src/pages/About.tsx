import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Award, Lightbulb, BookOpen, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About AI Academy by AK
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Empowering individuals and organizations to harness the transformative power of 
                artificial intelligence through comprehensive, practical, and accessible education.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="shadow-lg">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize AI education by providing world-class, practical learning experiences 
                    that bridge the gap between complex theoretical concepts and real-world applications. 
                    We believe that AI literacy should be accessible to everyone, regardless of their 
                    technical background or career stage.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To create a future where AI understanding is universal, enabling individuals and 
                    organizations to make informed decisions about AI implementation, understand its 
                    implications, and harness its potential for positive impact in their respective fields.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our unique approach combines academic rigor with practical application, 
                industry insights with accessible explanations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardHeader>
                  <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Practical Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every concept is taught through hands-on projects and real-world applications. 
                    You'll build actual AI models and see immediate results from day one.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardHeader>
                  <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Industry Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our curriculum is designed with input from industry professionals and covers 
                    real business use cases that you'll encounter in your career.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardHeader>
                  <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Adaptive Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our AI-powered assessment system personalizes your learning journey, 
                    ensuring you focus on areas that matter most for your goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Teaching Philosophy
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Progressive Skill Building</h3>
                <p>
                  We believe in building knowledge systematically. Our curriculum starts with fundamental 
                  concepts and gradually introduces more complex topics. Each lesson builds upon previous 
                  knowledge, ensuring a solid foundation that supports advanced learning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn by Doing</h3>
                <p>
                  Theory without practice is incomplete. Every module includes hands-on projects, 
                  interactive exercises, and real-world case studies. You'll work with industry-standard 
                  tools and platforms, building a portfolio of AI projects as you learn.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Context-Driven Learning</h3>
                <p>
                  We teach AI concepts within the context of real business problems and applications. 
                  When you learn about recommendation systems, you'll explore how Netflix and Amazon 
                  use them. This approach helps you understand not just the 'how' but the 'why' 
                  behind AI implementations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ethical AI Focus</h3>
                <p>
                  We integrate ethical considerations throughout our curriculum. Understanding bias, 
                  fairness, transparency, and responsible AI development isn't an afterthought—it's 
                  woven into every course to ensure you develop as a responsible AI practitioner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl opacity-90">
                Numbers that reflect our commitment to quality AI education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-lg opacity-90">Students Trained</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Companies Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Completion Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-lg opacity-90">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
