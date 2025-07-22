import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Trophy, 
  RotateCcw,
  ArrowRight,
  Timer
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import DashboardLayout from '@/components/DashboardLayout';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

interface AssessmentResult {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeTaken: number;
  answers: { questionId: number; selectedAnswer: number; correct: boolean }[];
}

// Expanded 50-question AI assessment bank
const questionBank: Question[] = [
  {
    id: 1,
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Automated Information", "Advanced Integration", "Application Interface"],
    correctAnswer: 0,
    explanation: "AI stands for Artificial Intelligence, which refers to computer systems that can perform tasks typically requiring human intelligence.",
    difficulty: "beginner",
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "Which of the following is a type of machine learning?",
    options: ["Supervised Learning", "Random Learning", "Fixed Learning", "Static Learning"],
    correctAnswer: 0,
    explanation: "Supervised Learning is a type of machine learning where algorithms learn from labeled training data.",
    difficulty: "beginner",
    category: "Machine Learning"
  },
  {
    id: 3,
    question: "What is a neural network inspired by?",
    options: ["Computer circuits", "Human brain", "Mathematical equations", "Database structures"],
    correctAnswer: 1,
    explanation: "Neural networks are inspired by the structure and function of the human brain, particularly neurons and their connections.",
    difficulty: "intermediate",
    category: "Deep Learning"
  },
  {
    id: 4,
    question: "What is the purpose of training data in machine learning?",
    options: ["To test the final model", "To teach the algorithm patterns", "To store user information", "To create visualizations"],
    correctAnswer: 1,
    explanation: "Training data is used to teach machine learning algorithms to recognize patterns and make predictions.",
    difficulty: "beginner",
    category: "Machine Learning"
  },
  {
    id: 5,
    question: "Which technique is commonly used for natural language processing?",
    options: ["Image recognition", "Tokenization", "Audio processing", "Video analysis"],
    correctAnswer: 1,
    explanation: "Tokenization is a fundamental technique in NLP that breaks text into smaller units (tokens) for processing.",
    difficulty: "intermediate",
    category: "Natural Language Processing"
  },
  {
    id: 6,
    question: "What is overfitting in machine learning?",
    options: ["Model performs well on all data", "Model memorizes training data but performs poorly on new data", "Model takes too long to train", "Model uses too little data"],
    correctAnswer: 1,
    explanation: "Overfitting occurs when a model learns the training data too well, including noise, and fails to generalize to new data.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 7,
    question: "What is the main goal of reinforcement learning?",
    options: ["Classify data into categories", "Learn optimal actions through rewards and penalties", "Reduce data dimensions", "Generate new data"],
    correctAnswer: 1,
    explanation: "Reinforcement learning aims to learn optimal actions in an environment by receiving rewards for good actions and penalties for bad ones.",
    difficulty: "advanced",
    category: "Reinforcement Learning"
  },
  {
    id: 8,
    question: "What is a common activation function in neural networks?",
    options: ["Linear function", "ReLU (Rectified Linear Unit)", "Quadratic function", "Exponential decay"],
    correctAnswer: 1,
    explanation: "ReLU is a popular activation function that outputs the input if positive, otherwise zero, helping with training efficiency.",
    difficulty: "intermediate",
    category: "Deep Learning"
  },
  {
    id: 9,
    question: "What does GPU acceleration help with in AI?",
    options: ["Data storage", "Parallel processing for faster training", "Internet connectivity", "User interface design"],
    correctAnswer: 1,
    explanation: "GPUs excel at parallel processing, making them ideal for the matrix operations common in AI model training.",
    difficulty: "intermediate",
    category: "Hardware & Performance"
  },
  {
    id: 10,
    question: "What is transfer learning?",
    options: ["Moving data between computers", "Using pre-trained models for new tasks", "Transferring files", "Converting data formats"],
    correctAnswer: 1,
    explanation: "Transfer learning involves using a pre-trained model as a starting point for a new, related task, saving time and computational resources.",
    difficulty: "advanced",
    category: "Deep Learning"
  },
  {
    id: 11,
    question: "What is unsupervised learning?",
    options: ["Learning with labeled data", "Learning patterns without labeled data", "Learning with a teacher", "Learning with rewards"],
    correctAnswer: 1,
    explanation: "Unsupervised learning finds patterns in data without labeled examples, such as clustering or dimensionality reduction.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 12,
    question: "What is a Convolutional Neural Network (CNN) primarily used for?",
    options: ["Text processing", "Image recognition", "Audio analysis", "Database queries"],
    correctAnswer: 1,
    explanation: "CNNs are specifically designed for processing grid-like data such as images, making them ideal for computer vision tasks.",
    difficulty: "intermediate",
    category: "Computer Vision"
  },
  {
    id: 13,
    question: "What does 'epoch' mean in machine learning?",
    options: ["A type of algorithm", "One complete pass through the training data", "A programming language", "A measurement unit"],
    correctAnswer: 1,
    explanation: "An epoch represents one complete forward and backward pass of all training examples through the neural network.",
    difficulty: "beginner",
    category: "Machine Learning"
  },
  {
    id: 14,
    question: "What is the purpose of a loss function?",
    options: ["To increase model complexity", "To measure prediction errors", "To store data", "To display results"],
    correctAnswer: 1,
    explanation: "A loss function quantifies how well the model's predictions match the actual target values, guiding the training process.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 15,
    question: "What is gradient descent?",
    options: ["A type of neural network", "An optimization algorithm", "A data structure", "A programming paradigm"],
    correctAnswer: 1,
    explanation: "Gradient descent is an optimization algorithm used to minimize the loss function by iteratively moving toward the steepest descent.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 16,
    question: "What is the difference between AI, ML, and DL?",
    options: ["They are the same", "AI ⊃ ML ⊃ DL", "DL ⊃ ML ⊃ AI", "They are unrelated"],
    correctAnswer: 1,
    explanation: "Artificial Intelligence is the broadest concept, Machine Learning is a subset of AI, and Deep Learning is a subset of ML.",
    difficulty: "beginner",
    category: "Fundamentals"
  },
  {
    id: 17,
    question: "What is a hyperparameter?",
    options: ["A parameter learned during training", "A configuration setting set before training", "A type of data", "A programming error"],
    correctAnswer: 1,
    explanation: "Hyperparameters are configuration settings that control the learning process and are set before training begins.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 18,
    question: "What is the vanishing gradient problem?",
    options: ["Gradients become too large", "Gradients become too small", "Gradients become negative", "Gradients disappear completely"],
    correctAnswer: 1,
    explanation: "The vanishing gradient problem occurs when gradients become exponentially small as they propagate back through deep networks.",
    difficulty: "advanced",
    category: "Deep Learning"
  },
  {
    id: 19,
    question: "What is a Recurrent Neural Network (RNN) best suited for?",
    options: ["Image classification", "Sequential data processing", "Database management", "Web development"],
    correctAnswer: 1,
    explanation: "RNNs are designed to handle sequential data by maintaining memory of previous inputs through recurrent connections.",
    difficulty: "intermediate",
    category: "Deep Learning"
  },
  {
    id: 20,
    question: "What is the purpose of regularization?",
    options: ["To increase model complexity", "To prevent overfitting", "To speed up training", "To improve data quality"],
    correctAnswer: 1,
    explanation: "Regularization techniques help prevent overfitting by adding constraints or penalties to the model's complexity.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 21,
    question: "What is cross-validation used for?",
    options: ["Data cleaning", "Model evaluation and selection", "Feature engineering", "Data visualization"],
    correctAnswer: 1,
    explanation: "Cross-validation is a technique to assess model performance and generalization by training and testing on different data subsets.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 22,
    question: "What is the attention mechanism in neural networks?",
    options: ["A way to focus on relevant parts of input", "A method to reduce memory usage", "A technique to speed up training", "A type of activation function"],
    correctAnswer: 0,
    explanation: "Attention mechanisms allow models to focus on specific parts of the input when making predictions, improving performance on complex tasks.",
    difficulty: "advanced",
    category: "Deep Learning"
  },
  {
    id: 23,
    question: "What is Natural Language Processing (NLP)?",
    options: ["Processing natural resources", "Computer understanding of human language", "Network protocol", "Image processing technique"],
    correctAnswer: 1,
    explanation: "NLP is a field of AI that focuses on the interaction between computers and human language, enabling machines to understand and generate text.",
    difficulty: "beginner",
    category: "Natural Language Processing"
  },
  {
    id: 24,
    question: "What is a Transformer in deep learning?",
    options: ["A type of robot", "A neural network architecture", "A data transformation tool", "A hardware component"],
    correctAnswer: 1,
    explanation: "Transformers are a neural network architecture that relies entirely on attention mechanisms, revolutionizing NLP and other fields.",
    difficulty: "advanced",
    category: "Deep Learning"
  },
  {
    id: 25,
    question: "What is the purpose of batch normalization?",
    options: ["To increase batch size", "To normalize inputs to each layer", "To create data batches", "To reduce computation"],
    correctAnswer: 1,
    explanation: "Batch normalization normalizes inputs to each layer, stabilizing and accelerating the training process.",
    difficulty: "advanced",
    category: "Deep Learning"
  },
  {
    id: 26,
    question: "What is computer vision?",
    options: ["Computer hardware for seeing", "AI field for analyzing visual content", "Display technology", "Camera software"],
    correctAnswer: 1,
    explanation: "Computer vision is an AI field that enables computers to derive meaningful information from digital images and videos.",
    difficulty: "beginner",
    category: "Computer Vision"
  },
  {
    id: 27,
    question: "What is feature engineering?",
    options: ["Building hardware features", "Creating and selecting input variables", "Software engineering", "Network engineering"],
    correctAnswer: 1,
    explanation: "Feature engineering is the process of creating, selecting, and transforming input variables to improve model performance.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 28,
    question: "What is ensemble learning?",
    options: ["Learning in groups", "Combining multiple models", "Musical learning", "Sequential learning"],
    correctAnswer: 1,
    explanation: "Ensemble learning combines predictions from multiple models to achieve better performance than any individual model.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 29,
    question: "What is a GAN (Generative Adversarial Network)?",
    options: ["A gaming network", "Two competing neural networks", "A data structure", "A programming language"],
    correctAnswer: 1,
    explanation: "GANs consist of two neural networks competing against each other: a generator and a discriminator, used for generating realistic data.",
    difficulty: "advanced",
    category: "Generative AI"
  },
  {
    id: 30,
    question: "What is the curse of dimensionality?",
    options: ["A programming error", "Problems that arise in high-dimensional spaces", "A type of neural network", "A data storage issue"],
    correctAnswer: 1,
    explanation: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces.",
    difficulty: "advanced",
    category: "Machine Learning"
  },
  {
    id: 31,
    question: "What is Q-learning?",
    options: ["A programming language", "A reinforcement learning algorithm", "A data query method", "A networking protocol"],
    correctAnswer: 1,
    explanation: "Q-learning is a model-free reinforcement learning algorithm that learns the quality of actions in particular states.",
    difficulty: "advanced",
    category: "Reinforcement Learning"
  },
  {
    id: 32,
    question: "What is the bias-variance tradeoff?",
    options: ["A programming concept", "A fundamental ML concept about model complexity", "A hardware limitation", "A data storage method"],
    correctAnswer: 1,
    explanation: "The bias-variance tradeoff describes the relationship between a model's ability to minimize bias and variance in predictions.",
    difficulty: "advanced",
    category: "Machine Learning"
  },
  {
    id: 33,
    question: "What is one-hot encoding?",
    options: ["A temperature measurement", "A method to represent categorical data", "A security technique", "A compression algorithm"],
    correctAnswer: 1,
    explanation: "One-hot encoding converts categorical variables into a binary vector representation for machine learning algorithms.",
    difficulty: "intermediate",
    category: "Data Preprocessing"
  },
  {
    id: 34,
    question: "What is the purpose of dropout in neural networks?",
    options: ["To remove data", "To prevent overfitting", "To speed up training", "To reduce memory usage"],
    correctAnswer: 1,
    explanation: "Dropout randomly sets some neurons to zero during training to prevent overfitting and improve generalization.",
    difficulty: "intermediate",
    category: "Deep Learning"
  },
  {
    id: 35,
    question: "What is a confusion matrix?",
    options: ["A confusing mathematical equation", "A table for evaluating classification performance", "A type of neural network", "A data visualization tool"],
    correctAnswer: 1,
    explanation: "A confusion matrix is a table used to evaluate the performance of classification algorithms by showing true vs predicted classifications.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 36,
    question: "What is the difference between precision and recall?",
    options: ["They are the same", "Precision focuses on positive predictions, recall on actual positives", "Precision is for regression, recall for classification", "They are unrelated metrics"],
    correctAnswer: 1,
    explanation: "Precision measures the accuracy of positive predictions, while recall measures the completeness of positive predictions.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 37,
    question: "What is data augmentation?",
    options: ["Adding more storage", "Artificially expanding training data", "Improving data quality", "Compressing data"],
    correctAnswer: 1,
    explanation: "Data augmentation artificially increases the training dataset by creating modified versions of existing data.",
    difficulty: "intermediate",
    category: "Data Preprocessing"
  },
  {
    id: 38,
    question: "What is the role of an optimizer in machine learning?",
    options: ["To optimize hardware", "To minimize the loss function", "To clean data", "To visualize results"],
    correctAnswer: 1,
    explanation: "An optimizer adjusts model parameters to minimize the loss function during training.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 39,
    question: "What is AutoML?",
    options: ["Automatic car manufacturing", "Automated machine learning", "Audio machine learning", "Advanced ML"],
    correctAnswer: 1,
    explanation: "AutoML automates the process of applying machine learning, including feature selection, model selection, and hyperparameter tuning.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 40,
    question: "What is federated learning?",
    options: ["Learning about governments", "Distributed learning across devices", "Federal regulations for AI", "Centralized learning"],
    correctAnswer: 1,
    explanation: "Federated learning trains algorithms across decentralized devices without centralizing data, preserving privacy.",
    difficulty: "advanced",
    category: "Machine Learning"
  },
  {
    id: 41,
    question: "What is the purpose of word embeddings?",
    options: ["To embed words in documents", "To represent words as dense vectors", "To compress text", "To translate languages"],
    correctAnswer: 1,
    explanation: "Word embeddings represent words as dense vectors in a continuous vector space, capturing semantic relationships.",
    difficulty: "intermediate",
    category: "Natural Language Processing"
  },
  {
    id: 42,
    question: "What is the Turing Test?",
    options: ["A programming test", "A test of machine intelligence", "A mathematical theorem", "A hardware benchmark"],
    correctAnswer: 1,
    explanation: "The Turing Test evaluates a machine's ability to exhibit intelligent behavior indistinguishable from a human.",
    difficulty: "beginner",
    category: "Fundamentals"
  },
  {
    id: 43,
    question: "What is explainable AI (XAI)?",
    options: ["AI that talks", "AI methods that provide interpretable explanations", "Extra-large AI", "Experimental AI"],
    correctAnswer: 1,
    explanation: "Explainable AI refers to methods and techniques that make AI decision-making processes transparent and interpretable.",
    difficulty: "intermediate",
    category: "AI Ethics"
  },
  {
    id: 44,
    question: "What is edge computing in AI?",
    options: ["Computing on the edge of networks", "Advanced computing", "Dangerous computing", "Cutting-edge technology"],
    correctAnswer: 0,
    explanation: "Edge computing processes data near the source rather than in centralized cloud servers, reducing latency and bandwidth usage.",
    difficulty: "intermediate",
    category: "Hardware & Performance"
  },
  {
    id: 45,
    question: "What is few-shot learning?",
    options: ["Learning with few examples", "Fast learning", "Photography-based learning", "Learning with few parameters"],
    correctAnswer: 0,
    explanation: "Few-shot learning enables models to learn new tasks with very few training examples, mimicking human learning ability.",
    difficulty: "advanced",
    category: "Machine Learning"
  },
  {
    id: 46,
    question: "What is the purpose of principal component analysis (PCA)?",
    options: ["To increase data dimensions", "To reduce data dimensions", "To clean data", "To visualize data"],
    correctAnswer: 1,
    explanation: "PCA is a dimensionality reduction technique that projects high-dimensional data onto lower-dimensional spaces while preserving variance.",
    difficulty: "intermediate",
    category: "Machine Learning"
  },
  {
    id: 47,
    question: "What is neural architecture search (NAS)?",
    options: ["Searching neural networks online", "Automatically designing neural network architectures", "Finding neural network bugs", "Networking neural systems"],
    correctAnswer: 1,
    explanation: "NAS automatically searches for optimal neural network architectures for specific tasks, reducing manual design effort.",
    difficulty: "advanced",
    category: "Deep Learning"
  },
  {
    id: 48,
    question: "What is the difference between AI and AGI?",
    options: ["No difference", "AI is narrow, AGI is general human-level intelligence", "AGI is older than AI", "AI is theoretical, AGI is practical"],
    correctAnswer: 1,
    explanation: "AI refers to current narrow intelligence systems, while AGI (Artificial General Intelligence) refers to human-level general intelligence.",
    difficulty: "intermediate",
    category: "Fundamentals"
  },
  {
    id: 49,
    question: "What is prompt engineering?",
    options: ["Engineering prompts for users", "Designing inputs for language models", "Creating engineering prompts", "Prompt software development"],
    correctAnswer: 1,
    explanation: "Prompt engineering involves crafting inputs to language models to achieve desired outputs and behaviors.",
    difficulty: "intermediate",
    category: "Natural Language Processing"
  },
  {
    id: 50,
    question: "What is the role of ethics in AI development?",
    options: ["It's not important", "To ensure responsible and fair AI systems", "Only for legal compliance", "To slow down development"],
    correctAnswer: 1,
    explanation: "AI ethics ensures that AI systems are developed and deployed responsibly, fairly, and with consideration for societal impact.",
    difficulty: "intermediate",
    category: "AI Ethics"
  }
];

// Function to randomly select 20 questions for each assessment
const getRandomQuestions = (count: number = 20): Question[] => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generate questions for this assessment session
const questions = getRandomQuestions(20);

const Assessment = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isAssessmentStarted, setIsAssessmentStarted] = useState(false);
  const [isAssessmentCompleted, setIsAssessmentCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAssessmentStarted && !isAssessmentCompleted && startTime) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAssessmentStarted, isAssessmentCompleted, startTime]);

  const startAssessment = () => {
    setIsAssessmentStarted(true);
    setStartTime(new Date());
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsAssessmentCompleted(false);
    setResult(null);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitAssessment = async () => {
    if (!user || !startTime) return;

    setIsSubmitting(true);
    const endTime = new Date();
    const timeTakenMinutes = Math.ceil((endTime.getTime() - startTime.getTime()) / (1000 * 60));

    // Calculate results
    const answers = questions.map((question, index) => ({
      questionId: question.id,
      selectedAnswer: selectedAnswers[index] ?? -1,
      correct: selectedAnswers[index] === question.correctAnswer
    }));

    const correctAnswers = answers.filter(a => a.correct).length;
    const score = Math.round((correctAnswers / questions.length) * 100);

    const assessmentResult: AssessmentResult = {
      score,
      correctAnswers,
      totalQuestions: questions.length,
      timeTaken: timeTakenMinutes,
      answers
    };

    try {
      // Save to database
      const { error } = await supabase
        .from('assessment_scores')
        .insert({
          user_id: user.id,
          course_id: 0, // General assessment, not course-specific
          assessment_type: 'skill_assessment',
          score,
          total_questions: questions.length,
          correct_answers: correctAnswers,
          time_taken_minutes: timeTakenMinutes,
          details: { answers }
        });

      if (error) throw error;

      setResult(assessmentResult);
      setIsAssessmentCompleted(true);

      toast({
        title: "Assessment completed!",
        description: `You scored ${score}% with ${correctAnswers}/${questions.length} correct answers.`,
      });
    } catch (error: any) {
      console.error('Error saving assessment:', error);
      toast({
        title: "Error",
        description: "Failed to save your assessment results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const restartAssessment = () => {
    setIsAssessmentStarted(false);
    setIsAssessmentCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setResult(null);
    setTimeElapsed(0);
    setStartTime(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  if (!isAssessmentStarted) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <Brain className="h-20 w-20 text-primary mx-auto" />
              <div className="absolute inset-0 h-20 w-20 bg-primary/20 rounded-full blur-xl"></div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">AI Skill Assessment</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge of artificial intelligence and machine learning concepts with our comprehensive assessment
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-2">Ready to Begin?</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                This assessment will help evaluate your current AI knowledge level
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-muted/50 rounded-xl border border-border/50">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">Duration</h3>
                  <p className="text-muted-foreground">~15-20 minutes</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-xl border border-border/50">
                  <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">Questions</h3>
                  <p className="text-muted-foreground">{questions.length} questions</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-xl border border-border/50">
                  <Trophy className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-1">Difficulty</h3>
                  <p className="text-muted-foreground">Mixed levels</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground">Assessment Topics:</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(questions.map(q => q.category))).map(category => (
                    <Badge key={category} className="bg-primary/20 text-primary border-primary/30 rounded-full px-3 py-1">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground">Instructions:</h3>
                <ul className="text-muted-foreground space-y-2 text-base">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Answer all questions to the best of your ability
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    You can navigate back and forth between questions
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Take your time - there's no strict time limit
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Results will be saved to your profile
                  </li>
                </ul>
              </div>

              <Button onClick={startAssessment} className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl" size="lg">
                <Brain className="mr-3 h-5 w-5" />
                Start Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isAssessmentCompleted && result) {
    return (
      <DashboardLayout>
        <div className="min-h-screen bg-background p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">Assessment Complete!</h1>
              <p className="text-xl text-muted-foreground">
                Here are your results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
                    {result.score}%
                  </div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">
                    {result.correctAnswers}/{result.totalQuestions}
                  </div>
                  <p className="text-sm text-muted-foreground">Correct Answers</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">
                    {result.timeTaken}
                  </div>
                  <p className="text-sm text-muted-foreground">Minutes</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">
                    {result.score >= 80 ? 'A' : result.score >= 60 ? 'B' : 'C'}
                  </div>
                  <p className="text-sm text-muted-foreground">Grade</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Question Review</CardTitle>
                <CardDescription>
                  Review your answers and explanations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {questions.map((question, index) => {
                    const userAnswer = result.answers.find(a => a.questionId === question.id);
                    const isCorrect = userAnswer?.correct ?? false;
                    
                    return (
                      <div key={question.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex-shrink-0">
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">Question {index + 1}</h4>
                              <Badge className={getDifficultyColor(question.difficulty)}>
                                {question.difficulty}
                              </Badge>
                              <Badge variant="outline">{question.category}</Badge>
                            </div>
                            <p className="text-foreground mb-3">{question.question}</p>
                            
                            <div className="space-y-2 mb-3">
                              {question.options.map((option, optionIndex) => {
                                const isUserAnswer = userAnswer?.selectedAnswer === optionIndex;
                                const isCorrectAnswer = optionIndex === question.correctAnswer;
                                
                                let className = "p-2 rounded border text-sm ";
                                if (isCorrectAnswer) {
                                  className += "bg-green-100 border-green-300 text-green-800 dark:bg-green-900 dark:border-green-700 dark:text-green-200";
                                } else if (isUserAnswer && !isCorrect) {
                                  className += "bg-red-100 border-red-300 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-200";
                                } else {
                                  className += "bg-muted";
                                }
                                
                                return (
                                  <div key={optionIndex} className={className}>
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">{String.fromCharCode(65 + optionIndex)}.</span>
                                      <span>{option}</span>
                                      {isCorrectAnswer && <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />}
                                      {isUserAnswer && !isCorrect && <XCircle className="h-4 w-4 text-red-600 ml-auto" />}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            
                            <div className="bg-muted p-3 rounded">
                              <p className="text-sm text-muted-foreground">
                                <strong>Explanation:</strong> {question.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button onClick={restartAssessment} size="lg">
                <RotateCcw className="mr-2 h-4 w-4" />
                Take Assessment Again
              </Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">AI Skill Assessment</h1>
              <p className="text-muted-foreground">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Timer className="h-4 w-4" />
                <span>{formatTime(timeElapsed)}</span>
              </div>
              <Badge variant="outline">
                {answeredCount}/{questions.length} answered
              </Badge>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                  {currentQuestion.difficulty}
                </Badge>
                <Badge variant="outline">{currentQuestion.category}</Badge>
              </div>
              <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={`w-full p-4 text-left border rounded-lg transition-all ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestionIndex] === index
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground'
                      }`}>
                        <span className="text-sm font-medium">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  onClick={submitAssessment}
                  disabled={answeredCount < questions.length || isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
                  <Trophy className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={nextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Question Navigator */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Question Navigator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-10 h-10 rounded border text-sm font-medium transition-all ${
                      index === currentQuestionIndex
                        ? 'border-primary bg-primary text-primary-foreground'
                        : selectedAnswers[index] !== undefined
                        ? 'border-green-500 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assessment;