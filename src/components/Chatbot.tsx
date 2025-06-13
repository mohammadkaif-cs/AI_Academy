
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI learning assistant. I can help you navigate our courses, answer questions about AI concepts, or guide you to the right learning path. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    "What course should I start with?",
    "Explain machine learning basics",
    "How long do courses take?",
    "Do you offer certificates?",
    "What's the difference between AI and ML?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("course") || lowerInput.includes("start")) {
      return "Great question! I'd recommend starting with our AI Skill Assessment to get personalized course recommendations. For complete beginners, 'What is AI?' is perfect, while those with some tech background might jump into 'Intro to Machine Learning'. Would you like me to guide you to the assessment?";
    } else if (lowerInput.includes("machine learning") || lowerInput.includes("ml")) {
      return "Machine Learning is a subset of AI where computers learn from data without being explicitly programmed. Think of it like teaching a child to recognize cats - instead of listing every cat feature, you show them many cat photos until they learn the pattern. Our 'Intro to Machine Learning' course covers this in detail with hands-on examples!";
    } else if (lowerInput.includes("time") || lowerInput.includes("long")) {
      return "Course durations vary: Beginner courses are 1.5-3 hours, Intermediate courses are 3-4.5 hours, and Advanced courses are 4-7 hours. You can learn at your own pace, and most students complete a course over 2-3 weeks with 2-3 hours of study per week.";
    } else if (lowerInput.includes("certificate")) {
      return "Yes! All our courses include industry-recognized certificates upon completion. You'll also receive LinkedIn badges to showcase your new skills. Our certificates are trusted by leading tech companies and can boost your career prospects.";
    } else if (lowerInput.includes("difference") && lowerInput.includes("ai")) {
      return "AI (Artificial Intelligence) is the broader concept of machines being able to carry out tasks in a smart way. ML (Machine Learning) is a subset of AI that focuses on learning from data. Think of AI as the destination and ML as one of the vehicles to get there. Deep Learning is then a subset of ML using neural networks.";
    } else if (lowerInput.includes("price") || lowerInput.includes("cost")) {
      return "We offer flexible pricing options including individual course purchases, monthly subscriptions, and enterprise packages. Many courses have free previews, and we offer student discounts. Contact our team for specific pricing based on your needs!";
    } else if (lowerInput.includes("help") || lowerInput.includes("support")) {
      return "I'm here to help! You can also reach our human support team at support@aiacademyak.com for detailed questions, or use the contact form on our website. What specific area would you like assistance with?";
    } else {
      return "That's an interesting question! While I can help with course navigation and basic AI concepts, for detailed technical questions, I'd recommend checking our comprehensive course materials or contacting our expert instructors. Is there a specific course topic I can guide you to?";
    }
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-96 h-[500px] shadow-2xl">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">AI Learning Assistant</CardTitle>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-blue-700"
              >
                ✕
              </Button>
            </div>
            <p className="text-sm text-blue-100">Get instant help with your AI learning journey</p>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg text-sm",
                      message.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickActions.slice(0, 3).map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about AI learning..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
