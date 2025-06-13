
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courseData = {
  beginner: [
    {
      title: "What is AI?",
      description: "Foundation concepts of artificial intelligence",
      duration: "2 hours",
      level: "Beginner",
      content: {
        overview: "Artificial Intelligence (AI) represents one of the most transformative technologies of our time. This comprehensive introduction demystifies AI by exploring its historical evolution from Alan Turing's theoretical foundations to today's practical applications. You'll discover how AI differs from traditional programming, understand the various types of AI systems (narrow, general, and super AI), and explore real-world applications across industries including healthcare, finance, transportation, and entertainment.",
        learningOutcomes: [
          "Define artificial intelligence and its core components",
          "Distinguish between different types of AI systems",
          "Identify AI applications in various industries",
          "Understand the ethical implications of AI development"
        ],
        topics: [
          "History and evolution of AI",
          "Types of AI: Narrow vs General AI",
          "Machine Learning vs Traditional Programming",
          "Current AI applications and future possibilities"
        ]
      }
    },
    {
      title: "Intro to Machine Learning",
      description: "Understanding the fundamentals of ML algorithms",
      duration: "3 hours",
      level: "Beginner",
      content: {
        overview: "Machine Learning forms the backbone of modern AI systems. This course provides a comprehensive introduction to ML concepts, starting with the fundamental question: 'How can machines learn from data?' You'll explore the machine learning pipeline, from data collection and preprocessing to model training and evaluation. Through practical examples and visual demonstrations, you'll understand how algorithms can identify patterns, make predictions, and improve their performance over time without explicit programming.",
        learningOutcomes: [
          "Understand the machine learning workflow",
          "Identify different types of learning problems",
          "Recognize common ML algorithms and their applications",
          "Evaluate model performance using appropriate metrics"
        ],
        topics: [
          "The ML pipeline: Data to Insights",
          "Feature engineering and data preprocessing",
          "Training, validation, and testing datasets",
          "Common ML algorithms overview"
        ]
      }
    },
    {
      title: "Supervised vs Unsupervised Learning",
      description: "Key differences between learning paradigms",
      duration: "2.5 hours",
      level: "Beginner",
      content: {
        overview: "Understanding the distinction between supervised and unsupervised learning is crucial for selecting the right approach to solve specific problems. This course explores both paradigms through practical examples and case studies. In supervised learning, you'll discover how algorithms learn from labeled examples to make predictions on new data, covering classification and regression tasks. For unsupervised learning, you'll explore how algorithms find hidden patterns in data without explicit guidance, including clustering and dimensionality reduction techniques.",
        learningOutcomes: [
          "Differentiate between supervised and unsupervised learning",
          "Choose appropriate algorithms for specific problem types",
          "Understand classification vs regression tasks",
          "Apply clustering techniques to real-world datasets"
        ],
        topics: [
          "Supervised Learning: Classification and Regression",
          "Unsupervised Learning: Clustering and Association",
          "Semi-supervised and Reinforcement Learning",
          "Choosing the right learning approach"
        ]
      }
    },
    {
      title: "Hands-on with Teachable Machine",
      description: "Build your first AI model with Google's tool",
      duration: "1.5 hours",
      level: "Beginner",
      content: {
        overview: "Google's Teachable Machine provides an intuitive, visual introduction to machine learning model creation. This hands-on course guides you through building three types of models: image recognition, sound classification, and pose detection. You'll learn the fundamentals of training data collection, model training, and deployment while creating practical projects like a custom image classifier or sound recognition system. This practical experience bridges the gap between theoretical knowledge and real-world application.",
        learningOutcomes: [
          "Create image, sound, and pose recognition models",
          "Understand the importance of diverse training data",
          "Export and deploy models for web applications",
          "Troubleshoot common model training issues"
        ],
        topics: [
          "Setting up Teachable Machine projects",
          "Collecting and organizing training data",
          "Training and testing your models",
          "Exporting models for web deployment"
        ]
      }
    }
  ],
  intermediate: [
    {
      title: "Building ML Models",
      description: "Practical model development and optimization",
      duration: "4 hours",
      level: "Intermediate",
      content: {
        overview: "This comprehensive course takes you through the complete machine learning model development lifecycle. You'll learn advanced techniques for data preparation, feature selection, and model optimization. Starting with exploratory data analysis, you'll progress through feature engineering, algorithm selection, hyperparameter tuning, and model validation. Real-world case studies demonstrate how to handle common challenges like overfitting, underfitting, and dealing with imbalanced datasets. You'll also explore ensemble methods and cross-validation techniques used by data science professionals.",
        learningOutcomes: [
          "Implement the complete ML development pipeline",
          "Apply advanced feature engineering techniques",
          "Optimize model performance through hyperparameter tuning",
          "Handle real-world data challenges and edge cases"
        ],
        topics: [
          "Advanced data preprocessing and feature engineering",
          "Model selection and hyperparameter optimization",
          "Cross-validation and performance evaluation",
          "Handling overfitting and model regularization"
        ]
      }
    },
    {
      title: "AI in Business Use Cases",
      description: "Real-world AI applications and ROI analysis",
      duration: "3.5 hours",
      level: "Intermediate",
      content: {
        overview: "Understanding how AI creates business value is essential for successful implementation. This course examines real-world AI applications across various industries, from customer service chatbots and recommendation systems to predictive maintenance and fraud detection. You'll learn to identify AI opportunities within organizations, calculate ROI for AI projects, and understand the challenges of scaling AI solutions. Case studies from companies like Amazon, Netflix, and Tesla demonstrate how AI drives competitive advantage and operational efficiency.",
        learningOutcomes: [
          "Identify high-impact AI opportunities in business contexts",
          "Calculate ROI and business impact of AI initiatives",
          "Understand implementation challenges and success factors",
          "Develop AI strategy and roadmaps for organizations"
        ],
        topics: [
          "AI applications in retail, healthcare, and finance",
          "Customer personalization and recommendation systems",
          "Operational AI: Predictive maintenance and optimization",
          "AI project planning and ROI calculation"
        ]
      }
    },
    {
      title: "Prompt Engineering with ChatGPT",
      description: "Master the art of AI communication",
      duration: "3 hours",
      level: "Intermediate",
      content: {
        overview: "Prompt engineering has emerged as a critical skill in the age of large language models. This course teaches you how to craft effective prompts that consistently produce high-quality outputs from AI systems like ChatGPT, Claude, and GPT-4. You'll learn advanced techniques including few-shot learning, chain-of-thought prompting, and role-based interactions. Through practical exercises, you'll develop prompts for content creation, data analysis, code generation, and problem-solving, while understanding the limitations and ethical considerations of AI-assisted work.",
        learningOutcomes: [
          "Design effective prompts for various use cases",
          "Apply advanced prompting techniques and strategies",
          "Understand AI model limitations and biases",
          "Create prompt templates for consistent results"
        ],
        topics: [
          "Fundamentals of effective prompt design",
          "Advanced techniques: Few-shot and chain-of-thought",
          "Domain-specific prompting strategies",
          "Ethical considerations and bias mitigation"
        ]
      }
    },
    {
      title: "Using APIs for AI",
      description: "Integration with OpenAI, HuggingFace, and more",
      duration: "4.5 hours",
      level: "Intermediate",
      content: {
        overview: "Modern AI development relies heavily on cloud-based APIs that provide access to powerful models without requiring extensive infrastructure. This hands-on course teaches you to integrate leading AI services including OpenAI's GPT models, HuggingFace's extensive model hub, Google Cloud AI, and AWS AI services. You'll learn authentication, rate limiting, error handling, and cost optimization strategies. Practical projects include building a chatbot, creating a content generation tool, and implementing sentiment analysis, all while following best practices for production deployment.",
        learningOutcomes: [
          "Integrate multiple AI APIs into applications",
          "Implement proper authentication and error handling",
          "Optimize API usage for cost and performance",
          "Build production-ready AI-powered applications"
        ],
        topics: [
          "OpenAI API: GPT models and fine-tuning",
          "HuggingFace: Model hub and inference API",
          "Cloud AI services: Google, AWS, and Azure",
          "API optimization and production deployment"
        ]
      }
    }
  ],
  advanced: [
    {
      title: "Deep Learning Concepts",
      description: "Neural networks, CNNs, and RNNs explained",
      duration: "6 hours",
      level: "Advanced",
      content: {
        overview: "Deep learning represents the cutting edge of AI technology, powering everything from image recognition to natural language processing. This comprehensive course explores the mathematical foundations and practical applications of neural networks. Starting with perceptrons and multilayer networks, you'll progress to Convolutional Neural Networks (CNNs) for computer vision and Recurrent Neural Networks (RNNs) for sequence modeling. Advanced topics include backpropagation, gradient descent optimization, regularization techniques, and modern architectures like ResNet and LSTM networks.",
        learningOutcomes: [
          "Understand the mathematical foundations of neural networks",
          "Implement CNNs for image classification and object detection",
          "Apply RNNs and LSTMs for sequence prediction tasks",
          "Optimize deep learning models for performance and accuracy"
        ],
        topics: [
          "Neural network architecture and backpropagation",
          "Convolutional Neural Networks for computer vision",
          "Recurrent Neural Networks and LSTM networks",
          "Advanced optimization and regularization techniques"
        ]
      }
    },
    {
      title: "Transformers & Large Language Models",
      description: "Understanding modern NLP architectures",
      duration: "5.5 hours",
      level: "Advanced",
      content: {
        overview: "Transformers have revolutionized natural language processing and form the foundation of modern large language models like GPT, BERT, and T5. This advanced course provides deep insights into transformer architecture, attention mechanisms, and the training processes behind LLMs. You'll explore the mathematical foundations of self-attention, understand positional encoding, and learn about different transformer variants. The course covers fine-tuning strategies, prompt engineering at scale, and the emerging field of few-shot learning, preparing you to work with state-of-the-art language models.",
        learningOutcomes: [
          "Understand transformer architecture and attention mechanisms",
          "Implement fine-tuning strategies for specific domains",
          "Apply advanced prompt engineering techniques",
          "Evaluate and compare different language model architectures"
        ],
        topics: [
          "Transformer architecture and self-attention",
          "BERT, GPT, and T5: Comparing model approaches",
          "Fine-tuning and transfer learning strategies",
          "Scaling laws and emergent behaviors in LLMs"
        ]
      }
    },
    {
      title: "Ethics and Explainability in AI",
      description: "Responsible AI development and deployment",
      duration: "4 hours",
      level: "Advanced",
      content: {
        overview: "As AI systems become more powerful and ubiquitous, understanding their ethical implications and ensuring explainability becomes crucial. This course addresses the complex challenges of bias, fairness, and transparency in AI systems. You'll learn to identify and mitigate algorithmic bias, implement explainable AI techniques, and ensure compliance with emerging AI regulations. Topics include differential privacy, federated learning, and the development of AI governance frameworks that balance innovation with responsible deployment.",
        learningOutcomes: [
          "Identify and mitigate bias in AI systems",
          "Implement explainable AI techniques and tools",
          "Develop ethical AI governance frameworks",
          "Ensure compliance with AI regulations and standards"
        ],
        topics: [
          "Algorithmic bias detection and mitigation",
          "Explainable AI: LIME, SHAP, and model interpretability",
          "Privacy-preserving machine learning",
          "AI governance and regulatory compliance"
        ]
      }
    },
    {
      title: "Building Scalable AI Systems",
      description: "Production deployment and MLOps",
      duration: "7 hours",
      level: "Advanced",
      content: {
        overview: "Transitioning from prototype to production-ready AI systems requires understanding of MLOps, scalability, and system design principles. This comprehensive course covers the entire AI system lifecycle, from model versioning and continuous integration to monitoring and maintenance. You'll learn to design resilient AI architectures, implement automated training pipelines, and manage model deployment across different environments. Advanced topics include A/B testing for ML models, real-time inference optimization, and handling concept drift in production systems.",
        learningOutcomes: [
          "Design and implement MLOps pipelines",
          "Deploy AI models at scale with high availability",
          "Monitor and maintain AI systems in production",
          "Implement continuous learning and model updates"
        ],
        topics: [
          "MLOps: CI/CD for machine learning",
          "Model serving and real-time inference",
          "Monitoring, logging, and alerting for AI systems",
          "Handling data drift and model degradation"
        ]
      }
    }
  ],
  specialized: [
    {
      title: "Generative AI Mastery",
      description: "Text, image, and multimedia generation",
      duration: "5 hours",
      level: "Specialized",
      content: {
        overview: "Generative AI has transformed creative industries and content production workflows. This specialized track explores the full spectrum of generative technologies, from text generation with GPT models to image synthesis with DALL-E, Midjourney, and Stable Diffusion. You'll master prompt engineering for different creative tasks, understand the underlying diffusion models and GANs, and learn to integrate generative AI into real-world applications. Advanced topics include fine-tuning generative models, controlling output quality, and addressing copyright and ethical considerations in AI-generated content.",
        learningOutcomes: [
          "Master text generation for various content types",
          "Create high-quality images using AI generation tools",
          "Understand the technical foundations of generative models",
          "Implement generative AI in business applications"
        ],
        topics: [
          "Advanced prompt engineering for text and image generation",
          "Diffusion models and GANs: Technical deep dive",
          "Fine-tuning generative models for specific domains",
          "Commercial applications and ethical considerations"
        ]
      }
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis and language understanding",
      duration: "6 hours",
      level: "Specialized",
      content: {
        overview: "Natural Language Processing combines computational linguistics with machine learning to enable computers to understand and process human language. This comprehensive track covers the entire NLP pipeline, from basic text preprocessing to advanced language understanding tasks. You'll learn text classification for sentiment analysis and topic modeling, master named entity recognition for information extraction, and implement question-answering systems. Real-world applications include building chatbots, analyzing customer feedback, and creating automated content moderation systems.",
        learningOutcomes: [
          "Implement end-to-end NLP pipelines",
          "Build text classification and sentiment analysis systems",
          "Extract entities and relationships from unstructured text",
          "Create conversational AI and chatbot applications"
        ],
        topics: [
          "Text preprocessing and feature extraction",
          "Sentiment analysis and emotion detection",
          "Named Entity Recognition and relation extraction",
          "Question answering and conversational AI"
        ]
      }
    },
    {
      title: "Computer Vision Excellence",
      description: "Image processing and visual AI applications",
      duration: "6.5 hours",
      level: "Specialized",
      content: {
        overview: "Computer Vision enables machines to interpret and understand visual information from the world around us. This specialized track covers fundamental image processing techniques and advanced deep learning approaches for visual tasks. You'll master object detection and recognition, implement image classification systems, and explore cutting-edge applications like optical character recognition (OCR) and facial recognition. Practical projects include building automated quality control systems, creating augmented reality applications, and developing medical image analysis tools.",
        learningOutcomes: [
          "Implement object detection and image classification",
          "Build OCR systems for document processing",
          "Develop facial recognition and biometric systems",
          "Create real-world computer vision applications"
        ],
        topics: [
          "Image preprocessing and augmentation techniques",
          "Object detection: YOLO, R-CNN, and modern architectures",
          "OCR and document analysis systems",
          "Facial recognition and biometric applications"
        ]
      }
    }
  ]
};

export const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("beginner");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: "beginner", name: "Beginner", color: "bg-green-100 text-green-800" },
    { id: "intermediate", name: "Intermediate", color: "bg-blue-100 text-blue-800" },
    { id: "advanced", name: "Advanced", color: "bg-purple-100 text-purple-800" },
    { id: "specialized", name: "Specialized", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundational concepts to cutting-edge applications, our structured learning path 
            takes you from AI novice to expert practitioner.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSelectedCourse(null);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? category.color
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseData[selectedCategory].map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
                <div className="text-sm text-gray-500 mt-2">
                  Duration: {course.duration}
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => setSelectedCourse(selectedCourse === course ? null : course)}
                  variant="outline" 
                  className="w-full"
                >
                  {selectedCourse === course ? "Hide Details" : "View Details"}
                </Button>
                
                {selectedCourse === course && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Course Overview</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {course.content.overview}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Learning Outcomes</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {course.content.learningOutcomes.map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Topics</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {course.content.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
