import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

type Topic =
  | "AI Basics"
  | "Machine Learning"
  | "Deep Learning"
  | "NLP"
  | "Generative AI"
  | "Computer Vision"
  | "Python for AI"
  | "AI Ethics";

interface Question {
  question: string;
  options: string[];
  answer: number; // index
  topic: Topic;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const QUESTIONS: Question[] = [
  // Sample real AI topic questions (add more as needed, total 50 for prod)
  {
    question: "What does 'AI' stand for?",
    options: ["Artificial Intelligence", "Automated Interface", "Applied Informatics", "Algorithmic Integration"],
    answer: 0,
    topic: "AI Basics",
    difficulty: "Beginner",
  },
  {
    question: "Which library is widely used for deep learning in Python?",
    options: ["Pandas", "NumPy", "TensorFlow", "Matplotlib"],
    answer: 2,
    topic: "Deep Learning",
    difficulty: "Intermediate",
  },
  {
    question: "What does NLP stand for in AI?",
    options: [
      "Natural Language Processing",
      "Neural Logic Partitioning",
      "Numerical Linear Programming",
      "None of the above"
    ],
    answer: 0,
    topic: "NLP",
    difficulty: "Beginner",
  },
  {
    question: "Which technique is commonly used in Generative AI?",
    options: ["Decision Trees", "GANs", "SVM", "Random Forest"],
    answer: 1,
    topic: "Generative AI",
    difficulty: "Advanced",
  },
  {
    question: "Which evaluation metric is NOT suitable for classification?",
    options: ["Accuracy", "Recall", "Precision", "MSE"],
    answer: 3,
    topic: "Machine Learning",
    difficulty: "Intermediate",
  },
  {
    question: "Which library is commonly used for computer vision in Python?",
    options: [
      "OpenCV",
      "BeautifulSoup",
      "SciPy",
      "Scrapy"
    ],
    answer: 0,
    topic: "Computer Vision",
    difficulty: "Intermediate",
  },
  {
    question: "Which Python library is used for handling dataframes?",
    options: ["TensorFlow", "Pandas", "Seaborn", "Keras"],
    answer: 1,
    topic: "Python for AI",
    difficulty: "Beginner",
  },
  {
    question: "What ethical concern is raised by facial recognition technologies?",
    options: [
      "Data bias and privacy violations",
      "Model overfitting",
      "Insufficient training data",
      "Network latency"
    ],
    answer: 0,
    topic: "AI Ethics",
    difficulty: "Intermediate",
  },
  // ... add up to 50
];

const NUM_QUESTIONS = 8; // Set to 8 for demo, should use 50 in production
const DURATION_MINUTES = 20;

const SCORE_MESSAGES = [
  { min: 80, message: "You’re AI-ready! Consider our Advanced courses." },
  { min: 50, message: "Good foundation! Explore Intermediate level." },
  { min: 0, message: "Start with Beginner courses to build a strong base." },
];

const shuffle = <T,>(arr: T[]) =>
  arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

const SkillAssessmentTest: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(NUM_QUESTIONS).fill(null));
  const [timer, setTimer] = useState(DURATION_MINUTES * 60); // seconds
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [submitting, setSubmitting] = useState(false);

  // On mount
  useEffect(() => {
    if (!user) {
      toast({ title: "Please log in to take the assessment." });
      navigate("/auth");
      return;
    }
    setShuffledQuestions(shuffle(QUESTIONS).slice(0, NUM_QUESTIONS));
  }, [user, navigate]);

  // Timer behavior
  useEffect(() => {
    if (!started || showResult) return;
    if (timer <= 0) {
      handleSubmit();
      return;
    }
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [started, timer, showResult]);

  const handleAnswer = (idx: number) => {
    const updated = answers.slice();
    updated[current] = idx;
    setAnswers(updated);
  };

  const handleNext = () => {
    setCurrent((c) => Math.min(c + 1, NUM_QUESTIONS - 1));
  };

  const handlePrev = () => {
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleSubmit = useCallback(() => {
    setShowResult(true);
    setSubmitting(true);
    // Simulating save to dashboard
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Assessment completed!", description: "Your results are saved to your dashboard." });
    }, 1000);
    // Placeholder: In real app, POST results to Supabase etc.
  }, []);

  const handleRetake = () => {
    setAnswers(Array(NUM_QUESTIONS).fill(null));
    setCurrent(0);
    setStarted(false);
    setShowResult(false);
    setTimer(DURATION_MINUTES * 60);
    setShuffledQuestions(shuffle(QUESTIONS).slice(0, NUM_QUESTIONS));
  };

  if (!user) {
    // Already redirected by above useEffect, but render fallback
    return <div className="min-h-screen flex flex-col items-center justify-center">Please log in to take the assessment.</div>;
  }

  // Result logic
  let numCorrect = 0;
  let resultsByTopic: Record<Topic, { total: number; correct: number }> = {
    "AI Basics": { total: 0, correct: 0 },
    "Machine Learning": { total: 0, correct: 0 },
    "Deep Learning": { total: 0, correct: 0 },
    "NLP": { total: 0, correct: 0 },
    "Generative AI": { total: 0, correct: 0 },
    "Computer Vision": { total: 0, correct: 0 },
    "Python for AI": { total: 0, correct: 0 },
    "AI Ethics": { total: 0, correct: 0 },
  };
  shuffledQuestions.forEach((q, idx) => {
    resultsByTopic[q.topic].total += 1;
    if (answers[idx] === q.answer) {
      numCorrect += 1;
      resultsByTopic[q.topic].correct += 1;
    }
  });
  const percent = Math.round((numCorrect / NUM_QUESTIONS) * 100);

  let message = SCORE_MESSAGES.find((m) => percent >= m.min)!.message;

  // Timer display
  const min = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const sec = (timer % 60).toString().padStart(2, "0");

  // Progress bar percentage
  const progress = ((current + 1) / NUM_QUESTIONS) * 100;

  return (
    <div className="bg-background min-h-screen flex flex-col items-center px-2 py-8">
      <Card className="w-full max-w-xl mx-auto">
        {!started ? (
          <CardContent className="flex flex-col items-center space-y-6 py-10">
            <h2 className="text-2xl font-bold mb-2 text-center">AI Skill Readiness Test</h2>
            <div className="flex gap-4 text-gray-600 text-sm mb-6">
              <span>⏰ 15–20 mins</span>
              <span>|</span>
              <span>📝 50 questions</span>
              <span>|</span>
              <span>Difficulty: Mixed</span>
            </div>
            <p className="text-gray-700 text-center mb-4">
              Topics: AI Basics, Machine Learning, Deep Learning, NLP, Generative AI, Computer Vision, Python for AI, Ethics
            </p>
            <Button size="lg" className="w-full max-w-xs" onClick={handleStart}>
              Start Free Assessment
            </Button>
          </CardContent>
        ) : showResult ? (
          <CardContent className="space-y-7 py-10">
            <h3 className="font-bold text-2xl text-center">Your Result: <span className="text-blue-700">{percent}%</span></h3>
            <div className="text-lg text-center font-semibold mb-2">{message}</div>
            <div className="mb-3">
              <div className="font-semibold mb-2 text-black">Strengths & Weaknesses by Topic:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(resultsByTopic).map(([topic, val]) => (
                  <div
                    key={topic}
                    className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded text-black"
                  >
                    <span className="text-black">{topic}</span>
                    <span className="text-black">
                      {val.correct}/{val.total} (
                      {val.total > 0
                        ? Math.round((val.correct / val.total) * 100)
                        : 0}
                      %)
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleRetake}>
              Retake Assessment
            </Button>
            <Button
              variant="outline"
              className="w-full mt-2"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </Button>
          </CardContent>
        ) : (
          <CardContent className="py-6 px-2">
            {/* Timer and progress */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md text-xs">
                Time Left: {min}:{sec}
              </span>
              <span className="text-xs text-gray-400">
                Question {current + 1} / {NUM_QUESTIONS}
              </span>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
            {/* Question */}
            <h4 className="font-semibold mb-2">
              {shuffledQuestions[current]?.question}
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              {shuffledQuestions[current]?.options.map((opt, idx) => (
                <Button
                  key={idx}
                  variant={
                    answers[current] === idx
                      ? "secondary"
                      : "outline"
                  }
                  className="w-full justify-start"
                  onClick={() => handleAnswer(idx)}
                  disabled={answers[current] !== null}
                >
                  {String.fromCharCode(65 + idx)}. {opt}
                </Button>
              ))}
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Previous
              </Button>
              {current < NUM_QUESTIONS - 1 ? (
                <Button
                  onClick={handleNext}
                  disabled={answers[current] === null}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    answers.some((a) => a === null) || submitting
                  }
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default SkillAssessmentTest;
