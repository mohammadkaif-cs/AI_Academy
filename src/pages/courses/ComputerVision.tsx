
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, Eye, Camera, Scan, Shield } from "lucide-react";

const ComputerVision = () => {
  const modules = [
    {
      title: "Image Processing Fundamentals",
      description: "Core techniques for digital image analysis",
      duration: "4 hours",
      topics: ["Image preprocessing", "Filtering techniques", "Edge detection", "Feature extraction"],
      applications: ["Medical imaging", "Quality control", "Satellite imagery", "Digital photography"]
    },
    {
      title: "Object Detection & Recognition",
      description: "Identifying and locating objects in images",
      duration: "5 hours",
      topics: ["YOLO algorithms", "R-CNN networks", "Real-time detection", "Multi-object tracking"],
      applications: ["Autonomous vehicles", "Security systems", "Retail analytics", "Sports analysis"]
    },
    {
      title: "Optical Character Recognition",
      description: "Converting images to searchable text",
      duration: "3.5 hours",
      topics: ["Text detection", "Character recognition", "Document analysis", "Handwriting recognition"],
      applications: ["Document digitization", "Invoice processing", "License plate reading", "Form automation"]
    },
    {
      title: "Advanced Vision Applications",
      description: "Cutting-edge computer vision systems",
      duration: "8 hours",
      topics: ["Facial recognition", "Medical image analysis", "Augmented reality", "3D reconstruction"],
      applications: ["Healthcare diagnostics", "Biometric security", "Industrial inspection", "Entertainment"]
    }
  ];

  const realWorldSystems = [
    {
      title: "Tesla Autopilot Vision",
      company: "Tesla",
      description: "Computer vision system that processes 8 camera feeds in real-time to enable autonomous driving, detecting vehicles, pedestrians, and road conditions",
      metrics: "360° vision, 250m detection range, 36 Hz processing"
    },
    {
      title: "Amazon Go Checkout-Free Shopping",
      company: "Amazon",
      description: "Computer vision tracks customer movements and item selections throughout the store, enabling automatic billing without traditional checkout",
      metrics: "100+ cameras per store, 99%+ accuracy, instant billing"
    },
    {
      title: "Medical Image Diagnosis",
      company: "Google DeepMind",
      description: "AI system that analyzes retinal scans to detect diabetic retinopathy with higher accuracy than human specialists",
      metrics: "90%+ accuracy, 10x faster diagnosis, accessible in remote areas"
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
            <Badge className="bg-pink-100 text-pink-800">Specialized Track</Badge>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>20-28 hours total</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Technical & research professionals</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Computer Vision Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Teach machines to see and understand the visual world. From autonomous vehicles to medical diagnosis, 
            master the AI technologies that are revolutionizing how computers interpret and analyze visual information.
          </p>
        </div>

        {/* Track Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Eye className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Visual Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Process and analyze visual data to extract meaningful information and patterns</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Camera className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Object Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Identify and locate multiple objects in images and video streams in real-time</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Scan className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>OCR & Text Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Convert images of text into searchable and editable digital content</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <Shield className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Biometric Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Build facial recognition and biometric authentication systems</p>
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
                      <h4 className="font-semibold text-gray-900 mb-2">Core Techniques:</h4>
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
                          <Badge key={i} className="bg-pink-100 text-pink-800 text-xs">
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

        {/* Real-World Systems */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Revolutionary Vision Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realWorldSystems.map((system, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-pink-100 text-pink-800">{system.company}</Badge>
                  <CardTitle className="text-lg">{system.title}</CardTitle>
                  <CardDescription className="text-sm">{system.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Performance:</p>
                    <p className="text-sm text-blue-700">{system.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Eyes of Artificial Intelligence</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Computer Vision is perhaps the most intuitive form of AI - teaching machines to see and understand 
              the world as humans do. This specialized track covers the full spectrum of visual AI technologies, 
              from basic image processing to cutting-edge applications in autonomous systems, healthcare, and beyond.
            </p>
            
            <p>
              <strong>Image Processing Mastery:</strong> Build a solid foundation in digital image manipulation and 
              analysis. Learn filtering techniques used to enhance image quality, edge detection algorithms that 
              identify object boundaries, and feature extraction methods that identify distinctive patterns. These 
              fundamental skills are essential for all advanced computer vision applications and form the backbone 
              of systems used in medical imaging, satellite analysis, and quality control.
            </p>
            
            <p>
              <strong>Object Detection Excellence:</strong> Master the state-of-the-art algorithms that power 
              autonomous vehicles, security systems, and industrial automation. Learn YOLO (You Only Look Once) 
              for real-time object detection, R-CNN architectures for precision detection, and multi-object tracking 
              systems. Understand the trade-offs between speed and accuracy, and how to optimize detection systems 
              for different applications and hardware constraints.
            </p>
            
            <p>
              <strong>OCR and Document Intelligence:</strong> Optical Character Recognition has evolved far beyond 
              simple text extraction. Learn to build systems that can process complex documents, understand layout 
              and structure, recognize handwriting, and extract meaningful information from forms and receipts. 
              These skills are crucial for document automation, invoice processing, and creating accessible digital archives.
            </p>
            
            <p>
              <strong>Advanced Applications Development:</strong> Explore cutting-edge applications including facial 
              recognition systems that balance accuracy with privacy concerns, medical image analysis for diagnostic 
              assistance, augmented reality applications that overlay digital information on the real world, and 
              3D reconstruction techniques that create detailed models from multiple camera angles.
            </p>
            
            <p>
              <strong>Production Vision Systems:</strong> Learn to deploy computer vision models in real-world 
              environments where performance, reliability, and scalability matter. Cover edge computing for 
              real-time processing, handling varying lighting conditions and image quality, managing computational 
              resources efficiently, and ensuring system reliability in mission-critical applications like 
              autonomous vehicles and medical diagnosis.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies & Frameworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "OpenCV", "TensorFlow", "PyTorch", "YOLO v8", "R-CNN", "Mask R-CNN",
              "OpenPose", "MediaPipe", "Detectron2", "Ultralytics", "ONNX", "TensorRT"
            ].map((tech, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow p-4 text-center">
                <p className="font-medium text-gray-900 text-sm">{tech}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Portfolio Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Real-Time Object Detection System",
                description: "Multi-camera surveillance system with real-time object detection and tracking capabilities",
                complexity: "Advanced"
              },
              {
                title: "Medical Image Analyzer",
                description: "AI system for analyzing medical scans and identifying potential anomalies for healthcare professionals",
                complexity: "Expert"
              },
              {
                title: "Document Processing Pipeline",
                description: "End-to-end OCR system for processing invoices, forms, and business documents automatically",
                complexity: "Intermediate"
              },
              {
                title: "Facial Recognition Security System",
                description: "Biometric authentication system with privacy-preserving features and high accuracy",
                complexity: "Advanced"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge className={
                      project.complexity === "Expert" ? "bg-red-100 text-red-800" :
                      project.complexity === "Advanced" ? "bg-orange-100 text-orange-800" :
                      "bg-blue-100 text-blue-800"
                    }>
                      {project.complexity}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">See the Future with AI Vision</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Computer vision skills are essential for the next generation of AI applications. From autonomous 
            vehicles to medical diagnosis, become an expert in the technology that's giving machines the power of sight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              Start Computer Vision Track
            </Button>
            <Link to="/courses/advanced">
              <Button size="lg" variant="outline">
                Prerequisites: Advanced Track
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerVision;
