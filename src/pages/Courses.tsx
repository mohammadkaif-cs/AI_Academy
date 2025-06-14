
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Users, Clock, Award, CheckCircle, Target, Code, Brain } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Courses = () => {
  const coursesData = [
    {
      id: "beginner",
      title: "Beginner AI Track",
      level: "Beginner",
      duration: "8-12 hours",
      color: "bg-green-100 text-green-800",
      icon: BookOpen,
      overview: "Perfect for those completely new to artificial intelligence and machine learning. This comprehensive track introduces you to AI fundamentals through practical examples, real-world case studies, and hands-on projects using no-code tools. You'll explore the history and evolution of AI, understand different types of intelligent systems, and discover how AI is transforming industries from healthcare to entertainment. Through interactive exercises with Google's Teachable Machine, you'll build your first AI models for image recognition, sound classification, and pose detection. The course emphasizes ethical considerations in AI development and prepares you with the foundational knowledge needed to advance to more technical AI topics. No programming experience required - we start from the very beginning and build your confidence step by step.",
      learningOutcomes: [
        "Define artificial intelligence and distinguish between AI, machine learning, and deep learning",
        "Identify practical AI applications across industries like healthcare, finance, and entertainment",
        "Understand fundamental ML concepts including supervised, unsupervised, and reinforcement learning",
        "Build and train your first AI models using no-code tools like Teachable Machine",
        "Evaluate AI model performance using accuracy, precision, recall, and other key metrics",
        "Recognize ethical considerations and bias issues in AI system development",
        "Navigate popular AI platforms and tools used by professionals in the industry",
        "Apply data preprocessing techniques to prepare datasets for machine learning",
        "Communicate AI concepts clearly to both technical and non-technical audiences",
        "Create a personal AI project portfolio to demonstrate your foundational knowledge"
      ],
      modules: [
        { title: "What is Artificial Intelligence?", description: "Introduction to AI history, types, and core concepts" },
        { title: "AI vs ML vs Deep Learning", description: "Understanding the hierarchy and relationships between these fields" },
        { title: "Real-World AI Applications", description: "Exploring AI in daily life and across industries" },
        { title: "Introduction to Machine Learning", description: "Core ML concepts and learning paradigms" },
        { title: "Supervised Learning Fundamentals", description: "Classification and regression problem types" },
        { title: "Unsupervised Learning Basics", description: "Clustering and pattern discovery techniques" },
        { title: "Data Preprocessing Essentials", description: "Preparing data for machine learning models" },
        { title: "Model Evaluation Methods", description: "Measuring AI performance and accuracy" },
        { title: "Hands-on with Teachable Machine", description: "Building image, audio, and pose recognition models" },
        { title: "AI Ethics and Responsibility", description: "Bias, fairness, and ethical considerations" },
        { title: "AI Tools and Platforms", description: "Overview of industry-standard AI ecosystem" },
        { title: "Building Your AI Portfolio", description: "Creating and presenting your first AI projects" }
      ],
      tools: ["Google Teachable Machine", "Scratch for ML", "Kaggle Learn", "TensorFlow Playground", "Google AI Education", "YouTube AI Courses"],
      projects: [
        { title: "Smart Photo Organizer", description: "Build an AI system that automatically categorizes photos by content using image recognition" },
        { title: "Voice Command Assistant", description: "Create a custom voice recognition system for smart home automation" },
        { title: "Recommendation Engine", description: "Develop a basic recommendation system for movies, books, or products" }
      ]
    },
    {
      id: "intermediate", 
      title: "Intermediate AI Track",
      level: "Intermediate",
      duration: "15-20 hours", 
      color: "bg-blue-100 text-blue-800",
      icon: Users,
      overview: "Build practical AI skills and business applications with this comprehensive intermediate track. You'll transition from conceptual understanding to hands-on implementation, learning to build production-ready machine learning models using popular frameworks and APIs. The course covers advanced data preprocessing, feature engineering, model optimization, and deployment strategies used by data science professionals. You'll master prompt engineering techniques for large language models like ChatGPT and GPT-4, integrate AI APIs from OpenAI, HuggingFace, and major cloud providers into real applications. Through practical business case studies, you'll understand how AI creates value in organizations and learn to calculate ROI for AI initiatives. Projects include building chatbots, content generation tools, and automated business intelligence systems. This track prepares you to implement AI solutions in professional environments and advance to specialized AI domains.",
      learningOutcomes: [
        "Implement the complete machine learning development pipeline from data to deployment",
        "Apply advanced feature engineering and data preprocessing techniques",
        "Optimize model performance through hyperparameter tuning and validation strategies",
        "Master prompt engineering for large language models and generative AI systems",
        "Integrate multiple AI APIs including OpenAI, HuggingFace, and cloud AI services",
        "Calculate business value and ROI for AI initiatives and projects",
        "Build production-ready AI applications with proper error handling and scaling",
        "Analyze real-world business cases and identify high-impact AI opportunities",
        "Implement automated workflows and AI-powered business intelligence tools",
        "Design and deploy conversational AI systems and intelligent chatbots"
      ],
      modules: [
        { title: "Advanced Machine Learning Pipeline", description: "End-to-end ML development and deployment workflows" },
        { title: "Feature Engineering Mastery", description: "Creating powerful features from raw data" },
        { title: "Model Optimization Techniques", description: "Hyperparameter tuning and performance enhancement" },
        { title: "Business AI Applications", description: "Real-world AI use cases and ROI analysis" },
        { title: "Prompt Engineering Fundamentals", description: "Crafting effective prompts for language models" },
        { title: "Advanced Prompt Strategies", description: "Few-shot learning and chain-of-thought techniques" },
        { title: "OpenAI API Integration", description: "Building applications with GPT models and DALL-E" },
        { title: "HuggingFace Ecosystem", description: "Leveraging pre-trained models and inference APIs" },
        { title: "Cloud AI Services", description: "Google Cloud AI, AWS AI, and Azure Cognitive Services" },
        { title: "Conversational AI Development", description: "Building intelligent chatbots and virtual assistants" },
        { title: "AI-Powered Automation", description: "Creating automated workflows and business processes" },
        { title: "Production Deployment", description: "Scaling AI applications and monitoring performance" }
      ],
      tools: ["Python", "scikit-learn", "OpenAI API", "HuggingFace", "Google Cloud AI", "AWS AI Services", "Streamlit", "FastAPI", "Docker"],
      projects: [
        { title: "Customer Service Chatbot", description: "Build an intelligent customer support system with natural language understanding" },
        { title: "Content Generation Platform", description: "Create an automated content creation tool for marketing and social media" },
        { title: "Business Intelligence Dashboard", description: "Develop an AI-powered analytics platform for data-driven decision making" }
      ]
    },
    {
      id: "advanced",
      title: "Advanced AI Track", 
      level: "Advanced",
      duration: "22-30 hours",
      color: "bg-purple-100 text-purple-800",
      icon: Award,
      overview: "Deep dive into cutting-edge AI concepts and systems architecture for experienced practitioners. This advanced track explores the mathematical foundations of deep learning, transformer architectures, and large language model development. You'll understand the technical details behind modern AI breakthroughs including attention mechanisms, neural network optimization, and advanced training techniques. The course covers critical topics in AI ethics, explainability, and responsible deployment at scale. You'll learn to design and implement MLOps pipelines, handle model versioning, and manage AI systems in production environments. Advanced topics include differential privacy, federated learning, and AI governance frameworks. Through complex projects, you'll build sophisticated AI systems capable of handling real-world challenges including concept drift, model degradation, and multi-modal inputs. This track prepares you for senior AI roles and positions you at the forefront of artificial intelligence research and development.",
      learningOutcomes: [
        "Understand the mathematical foundations of neural networks and backpropagation",
        "Implement transformer architectures and attention mechanisms from scratch",
        "Design and fine-tune large language models for specific domain applications",
        "Apply advanced optimization techniques including Adam, RMSprop, and learning rate scheduling",
        "Implement explainable AI techniques using LIME, SHAP, and model interpretability methods",
        "Design MLOps pipelines with continuous integration and automated model deployment",
        "Handle ethical AI challenges including bias detection, fairness metrics, and algorithmic auditing",
        "Implement privacy-preserving machine learning using differential privacy and federated learning",
        "Build scalable AI systems with real-time inference and high availability requirements",
        "Develop AI governance frameworks and ensure regulatory compliance in production systems"
      ],
      modules: [
        { title: "Deep Learning Mathematics", description: "Linear algebra, calculus, and optimization theory for neural networks" },
        { title: "Neural Network Architectures", description: "CNNs, RNNs, LSTMs, and modern deep learning models" },
        { title: "Transformer Deep Dive", description: "Attention mechanisms, BERT, GPT, and T5 architectures" },
        { title: "Large Language Model Training", description: "Pre-training, fine-tuning, and transfer learning strategies" },
        { title: "Advanced Optimization", description: "Gradient descent variants, regularization, and training stability" },
        { title: "Explainable AI Methods", description: "Model interpretability, LIME, SHAP, and visualization techniques" },
        { title: "AI Ethics and Bias", description: "Fairness metrics, algorithmic auditing, and responsible AI development" },
        { title: "MLOps and Production", description: "CI/CD for ML, model versioning, and automated deployment" },
        { title: "Privacy-Preserving ML", description: "Differential privacy, federated learning, and secure computation" },
        { title: "Scalable AI Systems", description: "Distributed training, model serving, and performance optimization" },
        { title: "AI Governance", description: "Regulatory compliance, risk management, and organizational frameworks" },
        { title: "Research and Innovation", description: "Staying current with AI research and contributing to the field" }
      ],
      tools: ["PyTorch", "TensorFlow", "Transformers", "MLflow", "Kubeflow", "Docker", "Kubernetes", "Apache Airflow", "Weights & Biases", "NVIDIA CUDA"],
      projects: [
        { title: "Multi-Modal AI System", description: "Build an AI system that processes text, images, and audio for comprehensive content analysis" },
        { title: "Federated Learning Network", description: "Implement a privacy-preserving machine learning system across distributed devices" },
        { title: "AI Governance Platform", description: "Create a comprehensive system for monitoring, auditing, and managing AI models in production" }
      ]
    },
    {
      id: "generative-ai",
      title: "Generative AI Mastery",
      level: "Specialized", 
      duration: "12-15 hours",
      color: "bg-orange-100 text-orange-800",
      icon: Brain,
      overview: "Master the revolutionary field of generative artificial intelligence that's transforming creative industries and content production workflows. This specialized track provides comprehensive coverage of text generation with GPT models, image synthesis using DALL-E, Midjourney, and Stable Diffusion, and multimedia content creation. You'll understand the technical foundations including diffusion models, GANs, and variational autoencoders that power modern generative systems. The course emphasizes practical prompt engineering techniques for different creative tasks, fine-tuning generative models for specific domains, and integrating generative AI into business applications. You'll explore cutting-edge applications including automated content creation, personalized marketing materials, and interactive storytelling. Advanced topics cover style transfer, controllable generation, and addressing ethical considerations including copyright issues and AI-generated content detection. Through hands-on projects, you'll build sophisticated generative systems capable of producing high-quality text, images, and multimedia content for real-world applications.",
      learningOutcomes: [
        "Master advanced prompt engineering techniques for text, image, and multimedia generation",
        "Understand the technical foundations of diffusion models, GANs, and transformer architectures",
        "Fine-tune generative models for specific domains and use cases",
        "Implement controllable generation systems with style and content control",
        "Build automated content creation pipelines for marketing and media applications",
        "Apply generative AI to creative industries including art, music, and storytelling",
        "Address ethical considerations including copyright, authenticity, and bias in generated content",
        "Integrate multiple generative AI APIs and services into cohesive applications",
        "Optimize generation quality through advanced sampling techniques and model configuration",
        "Develop commercial applications leveraging generative AI for business value creation"
      ],
      modules: [
        { title: "Generative AI Fundamentals", description: "Introduction to generative models and their applications" },
        { title: "Text Generation Mastery", description: "GPT models, prompt engineering, and language generation techniques" },
        { title: "Image Generation Deep Dive", description: "DALL-E, Midjourney, Stable Diffusion, and diffusion model theory" },
        { title: "Advanced Prompt Engineering", description: "Creative prompting strategies and optimization techniques" },
        { title: "Fine-tuning Generative Models", description: "Customizing models for specific domains and styles" },
        { title: "Controllable Generation", description: "Style transfer, conditional generation, and content control" },
        { title: "Multimedia Content Creation", description: "Combining text, image, and audio generation for rich media" },
        { title: "Commercial Applications", description: "Business use cases and monetization strategies" },
        { title: "Ethics and Copyright", description: "Responsible use, attribution, and legal considerations" },
        { title: "Integration and APIs", description: "Building applications with multiple generative AI services" },
        { title: "Quality Optimization", description: "Advanced sampling, filtering, and quality control techniques" },
        { title: "Future of Generative AI", description: "Emerging trends and next-generation capabilities" }
      ],
      tools: ["OpenAI API", "DALL-E", "Midjourney", "Stable Diffusion", "HuggingFace Diffusers", "RunwayML", "Adobe Firefly", "Canva AI", "ChatGPT", "Claude"],
      projects: [
        { title: "Automated Marketing Content Generator", description: "Build a system that creates personalized marketing materials including copy, images, and videos" },
        { title: "Interactive Storytelling Platform", description: "Develop an AI-powered platform for creating dynamic, personalized narratives with generated visuals" },
        { title: "Brand-Consistent Design System", description: "Create an AI tool that generates on-brand visual content maintaining consistent style and messaging" }
      ]
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      level: "Specialized",
      duration: "18-25 hours", 
      color: "bg-teal-100 text-teal-800",
      icon: BookOpen,
      overview: "Comprehensive exploration of Natural Language Processing combining computational linguistics with advanced machine learning to enable computers to understand, interpret, and generate human language. This specialized track covers the complete NLP pipeline from basic text preprocessing to sophisticated language understanding tasks. You'll master text classification for sentiment analysis, topic modeling, and document categorization using both traditional methods and modern transformer architectures. The course includes named entity recognition for information extraction, dependency parsing for syntactic analysis, and semantic analysis for meaning comprehension. You'll implement question-answering systems, build conversational AI applications, and develop language models for specific domains. Advanced topics include multilingual NLP, low-resource language processing, and handling bias in language models. Through practical projects, you'll create intelligent systems for content analysis, automated customer support, legal document processing, and social media monitoring. This track prepares you for NLP engineer roles and positions you to tackle complex language processing challenges.",
      learningOutcomes: [
        "Implement end-to-end NLP pipelines from raw text to actionable insights",
        "Build robust text classification systems for sentiment analysis and document categorization",
        "Extract structured information using named entity recognition and relation extraction",
        "Develop question-answering systems and conversational AI applications",
        "Apply transformer models including BERT, RoBERTa, and T5 for various NLP tasks",
        "Handle multilingual and cross-lingual NLP challenges effectively",
        "Implement text summarization and generation systems for content automation",
        "Address bias and fairness issues in language models and NLP applications",
        "Build domain-specific language models through fine-tuning and transfer learning",
        "Create production-ready NLP systems with proper evaluation and monitoring"
      ],
      modules: [
        { title: "NLP Fundamentals", description: "Text preprocessing, tokenization, and linguistic foundations" },
        { title: "Text Classification Techniques", description: "Sentiment analysis, topic modeling, and document categorization" },
        { title: "Named Entity Recognition", description: "Extracting entities, relationships, and structured information" },
        { title: "Transformer Architectures", description: "BERT, RoBERTa, T5, and modern language model implementations" },
        { title: "Question Answering Systems", description: "Reading comprehension and information retrieval applications" },
        { title: "Conversational AI Development", description: "Building chatbots, virtual assistants, and dialogue systems" },
        { title: "Text Generation and Summarization", description: "Automated content creation and document summarization" },
        { title: "Multilingual NLP", description: "Cross-lingual processing and low-resource language handling" },
        { title: "Semantic Analysis", description: "Meaning representation, semantic similarity, and knowledge graphs" },
        { title: "Bias and Fairness in NLP", description: "Identifying and mitigating bias in language models" },
        { title: "Domain Adaptation", description: "Customizing NLP models for specific industries and use cases" },
        { title: "Production NLP Systems", description: "Deployment, scaling, and monitoring of NLP applications" }
      ],
      tools: ["Python", "spaCy", "NLTK", "HuggingFace Transformers", "TensorFlow", "PyTorch", "Elasticsearch", "Apache Lucene", "Stanford CoreNLP", "Gensim"],
      projects: [
        { title: "Legal Document Analysis System", description: "Build an AI system for analyzing contracts, extracting key terms, and identifying potential risks" },
        { title: "Social Media Monitoring Platform", description: "Create a comprehensive tool for brand monitoring, sentiment tracking, and trend analysis" },
        { title: "Multilingual Customer Support Bot", description: "Develop an intelligent support system capable of handling inquiries in multiple languages" }
      ]
    },
    {
      id: "computer-vision",
      title: "Computer Vision Excellence", 
      level: "Specialized",
      duration: "20-28 hours",
      color: "bg-pink-100 text-pink-800",
      icon: Target,
      overview: "Comprehensive mastery of computer vision techniques enabling machines to interpret and understand visual information from images and videos. This specialized track covers fundamental image processing concepts and advanced deep learning approaches for visual recognition tasks. You'll implement object detection and classification systems using state-of-the-art architectures including YOLO, R-CNN, and modern transformer-based vision models. The course includes optical character recognition (OCR) for document processing, facial recognition and biometric systems, medical image analysis, and autonomous vehicle perception. You'll learn image preprocessing, augmentation techniques, and feature extraction methods essential for robust computer vision applications. Advanced topics cover 3D computer vision, video analysis, real-time processing optimization, and edge deployment for mobile and embedded systems. Through hands-on projects, you'll build sophisticated visual AI systems for quality control, security applications, healthcare diagnostics, and augmented reality experiences. This track prepares you for computer vision engineer roles and equips you to tackle complex visual AI challenges across industries.",
      learningOutcomes: [
        "Implement object detection and classification systems using modern deep learning architectures",
        "Build robust OCR systems for document processing and text extraction from images",
        "Develop facial recognition and biometric authentication systems with high accuracy",
        "Apply computer vision to medical image analysis and diagnostic applications",
        "Create real-time video processing systems for surveillance and monitoring applications",
        "Implement 3D computer vision techniques for depth estimation and spatial understanding",
        "Build augmented reality applications with object tracking and scene understanding",
        "Optimize computer vision models for edge deployment and mobile applications",
        "Handle challenging visual conditions including low light, motion blur, and occlusion",
        "Design end-to-end computer vision pipelines from data collection to production deployment"
      ],
      modules: [
        { title: "Computer Vision Fundamentals", description: "Image processing basics, filters, and feature extraction" },
        { title: "Deep Learning for Vision", description: "CNNs, transfer learning, and modern vision architectures" },
        { title: "Object Detection Systems", description: "YOLO, R-CNN, and real-time detection implementations" },
        { title: "Image Classification Mastery", description: "Building robust classifiers for diverse visual recognition tasks" },
        { title: "OCR and Document Processing", description: "Text extraction, document analysis, and automated data entry" },
        { title: "Facial Recognition Technology", description: "Face detection, recognition, and biometric authentication systems" },
        { title: "Medical Image Analysis", description: "Diagnostic imaging, pathology detection, and healthcare applications" },
        { title: "Video Processing and Analysis", description: "Motion detection, tracking, and temporal pattern recognition" },
        { title: "3D Computer Vision", description: "Depth estimation, stereo vision, and spatial understanding" },
        { title: "Augmented Reality Applications", description: "Object tracking, scene understanding, and AR development" },
        { title: "Edge Deployment Optimization", description: "Model compression, quantization, and mobile deployment" },
        { title: "Production Vision Systems", description: "Scaling, monitoring, and maintaining computer vision applications" }
      ],
      tools: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLO", "Detectron2", "MediaPipe", "Pillow", "scikit-image", "NVIDIA CUDA", "OpenVINO"],
      projects: [
        { title: "Automated Quality Control System", description: "Build a manufacturing quality inspection system using computer vision for defect detection" },
        { title: "Smart Security and Surveillance", description: "Create an intelligent monitoring system with person detection, behavior analysis, and alert generation" },
        { title: "Medical Diagnostic Assistant", description: "Develop an AI system for analyzing medical images and assisting healthcare professionals in diagnosis" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Academy Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive AI education designed by industry experts. Choose your learning path 
            and master artificial intelligence from fundamentals to cutting-edge applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Self-paced learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Industry certificates</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Expert mentorship</span>
            </div>
          </div>
        </div>

        {/* All Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="multiple" className="space-y-6">
            {coursesData.map((course) => {
              const IconComponent = course.icon;
              return (
                <AccordionItem key={course.id} value={course.id} className="border-0">
                  <Card className="hover:shadow-xl transition-all duration-300 shadow-lg">
                    <AccordionTrigger className="hover:no-underline p-0">
                      <CardHeader className="w-full">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              <IconComponent className="w-6 h-6 text-gray-700" />
                            </div>
                            <Badge className={course.color}>{course.level}</Badge>
                          </div>
                          <Badge variant="outline" className="text-xs">{course.duration}</Badge>
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                          <CardDescription className="text-base text-gray-600">
                            {course.overview.substring(0, 150)}...
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                      <CardContent className="pt-0 space-y-8">
                        {/* Full Overview */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Overview</h3>
                          <p className="text-gray-700 leading-relaxed">{course.overview}</p>
                        </div>

                        {/* Learning Outcomes */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Outcomes</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {course.learningOutcomes.map((outcome, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Curriculum Modules */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Modules</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.modules.map((module, index) => (
                              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                                <h4 className="font-medium text-gray-900 mb-2">{module.title}</h4>
                                <p className="text-sm text-gray-600">{module.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tools & Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {course.tools.map((tool, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Hands-On Projects</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {course.projects.map((project, index) => (
                              <div key={index} className="border rounded-lg p-4 bg-white">
                                <h4 className="font-medium text-gray-900 mb-2">{project.title}</h4>
                                <p className="text-sm text-gray-600">{project.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center pt-4">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                            Start {course.title}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Learning Path Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Recommended Learning Path
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {[
                { step: 1, title: "Start with Assessment", desc: "Take our AI Skill Assessment" },
                { step: 2, title: "Choose Your Track", desc: "Based on your results and goals" }, 
                { step: 3, title: "Learn & Practice", desc: "Hands-on projects and real examples" },
                { step: 4, title: "Get Certified", desc: "Earn industry-recognized credentials" }
              ].map((item, index) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 max-w-32">{item.desc}</p>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Start Your AI Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
