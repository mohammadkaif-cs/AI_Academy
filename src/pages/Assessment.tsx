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

const questions: Question[] = [
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
  }
];

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
      <DashboardLayout>
        <div className="min-h-screen bg-background p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">AI Skill Assessment</h1>
              <p className="text-xl text-muted-foreground">
                Test your knowledge of artificial intelligence and machine learning concepts
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Ready to Begin?</CardTitle>
                <CardDescription className="text-center">
                  This assessment will help evaluate your current AI knowledge level
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Duration</h3>
                    <p className="text-sm text-muted-foreground">~15-20 minutes</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Questions</h3>
                    <p className="text-sm text-muted-foreground">{questions.length} questions</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Difficulty</h3>
                    <p className="text-sm text-muted-foreground">Mixed levels</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Assessment Topics:</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(questions.map(q => q.category))).map(category => (
                      <Badge key={category} variant="outline">{category}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Instructions:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Answer all questions to the best of your ability</li>
                    <li>• You can navigate back and forth between questions</li>
                    <li>• Take your time - there's no strict time limit</li>
                    <li>• Results will be saved to your profile</li>
                  </ul>
                </div>

                <Button onClick={startAssessment} className="w-full" size="lg">
                  <Brain className="mr-2 h-4 w-4" />
                  Start Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
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