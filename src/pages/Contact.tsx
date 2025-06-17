
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Have questions about our AI courses? Need help choosing the right learning path? 
                We're here to help you succeed in your AI journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-sm border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your AI learning goals or questions..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-black hover:bg-gray-800">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-sm border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">hello@aiacademyak.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          123 AI Innovation Blvd<br />
                          Tech District, CA 94101
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-600">9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-gray-600">10:00 AM - 4:00 PM PST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-black" />
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="text-gray-600">Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start border-gray-300 hover:bg-gray-50">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat with our AI Assistant
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-gray-300 hover:bg-gray-50">
                        <Users className="w-4 h-4 mr-2" />
                        Schedule a Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our AI courses and platform.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-sm border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">
                    How do I choose the right AI course for my level?
                  </h3>
                  <p className="text-gray-600">
                    Start with our free AI Skill Assessment to get personalized course recommendations 
                    based on your current knowledge and goals. Our assessment takes 15-20 minutes and 
                    provides detailed guidance on which learning path to follow.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Do I need programming experience to start?
                  </h3>
                  <p className="text-gray-600">
                    Not at all! Our Beginner Track is designed for complete newcomers to AI and doesn't 
                    require any programming background. We start with fundamental concepts and use 
                    no-code tools like Google's Teachable Machine for hands-on practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Can I get a certificate upon completion?
                  </h3>
                  <p className="text-gray-600">
                    Yes! All our courses include industry-recognized certificates upon successful completion. 
                    These certificates demonstrate your AI knowledge to employers and can be shared on 
                    LinkedIn and other professional platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How long does it take to complete a track?
                  </h3>
                  <p className="text-gray-600">
                    Course duration varies by track: Beginner (8-12 hours), Intermediate (15-20 hours), 
                    Advanced (22-30 hours), and Specialized tracks (12-28 hours). All courses are 
                    self-paced, so you can learn at your own speed.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Do you offer corporate training?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We provide customized AI training programs for teams and organizations. 
                    Start with our AI Readiness Test for Teams to assess your organization's needs, 
                    then we'll create a tailored learning program that fits your goals and timeline.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600">
                Located in the heart of Silicon Valley's tech district.
              </p>
            </div>
            
            <Card className="shadow-sm border border-gray-200 overflow-hidden bg-white">
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Google Maps integration would be embedded here</p>
                  <p className="text-sm mt-2">123 AI Innovation Blvd, Tech District, CA 94101</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
