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
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: "Hi! I'm your AI learning assistant. I can help you navigate our courses, answer questions about AI concepts, or guide you to the right learning path. What would you like to know?",
    isUser: false,
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const quickActions = ["What course should I start with?", "Explain machine learning basics", "How long do courses take?", "Do you offer certificates?", "What's the difference between AI and ML?"];
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
    setIsTyping(true);

    // Simulate AI response with more realistic delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("course") || lowerInput.includes("start") || lowerInput.includes("recommend")) {
      return "Great question! I'd recommend starting with our AI Skill Assessment to get personalized course recommendations. For complete beginners, our 'Beginner Track' is perfect, while those with some tech background might jump into 'Intermediate Track'. Would you like me to guide you to the assessment?";
    } else if (lowerInput.includes("machine learning") || lowerInput.includes("ml")) {
      return "Machine Learning is a subset of AI where computers learn from data without being explicitly programmed. Think of it like teaching a child to recognize cats - instead of listing every cat feature, you show them many cat photos until they learn the pattern. Our 'Intro to Machine Learning' course in the Beginner Track covers this in detail with hands-on examples!";
    } else if (lowerInput.includes("time") || lowerInput.includes("long") || lowerInput.includes("duration")) {
      return "Course durations vary: Beginner Track courses are 1.5-3 hours each, Intermediate Track courses are 3-4.5 hours, and Advanced Track courses are 4-7 hours. You can learn at your own pace, and most students complete a track over 2-4 weeks with 2-3 hours of study per week.";
    } else if (lowerInput.includes("certificate") || lowerInput.includes("certification")) {
      return "Yes! All our courses include industry-recognized certificates upon completion. You'll also receive LinkedIn badges to showcase your new skills. Our certificates are trusted by leading tech companies and can boost your career prospects significantly.";
    } else if (lowerInput.includes("difference") && (lowerInput.includes("ai") || lowerInput.includes("ml"))) {
      return "AI (Artificial Intelligence) is the broader concept of machines being able to carry out tasks in a smart way. ML (Machine Learning) is a subset of AI that focuses on learning from data. Think of AI as the destination and ML as one of the vehicles to get there. Deep Learning is then a subset of ML using neural networks. Our courses explain these relationships clearly!";
    } else if (lowerInput.includes("nlp") || lowerInput.includes("natural language")) {
      return "Natural Language Processing (NLP) is how computers understand and process human language. It's behind chatbots, translation services, and text analysis. You can find our comprehensive NLP course under the specialized tracks - it covers everything from text preprocessing to building your own language models!";
    } else if (lowerInput.includes("computer vision") || lowerInput.includes("image") || lowerInput.includes("vision")) {
      return "Computer Vision teaches machines to 'see' and understand images and videos. It's used in facial recognition, medical imaging, and autonomous vehicles. Our Computer Vision track covers image processing, object detection, and building visual AI applications with practical projects!";
    } else if (lowerInput.includes("generative ai") || lowerInput.includes("chatgpt") || lowerInput.includes("dall")) {
      return "Generative AI creates new content like text, images, or code. Tools like ChatGPT and DALL-E are examples. Our Generative AI track teaches you how these systems work and how to build your own generative models for various applications. Very popular track right now!";
    } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("fee")) {
      return "We offer flexible pricing options including individual course purchases, monthly subscriptions, and enterprise packages. Many courses have free previews, and we offer student discounts. Contact our team for specific pricing based on your needs!";
    } else if (lowerInput.includes("help") || lowerInput.includes("support") || lowerInput.includes("contact")) {
      return "I'm here to help! You can also reach our human support team through our Contact page, or email us directly. We're very responsive and happy to guide you through your AI learning journey. What specific area would you like assistance with?";
    } else if (lowerInput.includes("beginner") || lowerInput.includes("new") || lowerInput.includes("start")) {
      return "Perfect! Our Beginner Track is designed for complete newcomers to AI. It starts with 'What is AI?' and progressively builds your knowledge through hands-on projects. No programming experience needed - we'll teach you everything step by step!";
    } else if (lowerInput.includes("assessment") || lowerInput.includes("test") || lowerInput.includes("evaluate")) {
      return "Our AI Skill Assessment is a comprehensive evaluation that takes about 15-20 minutes. It assesses your current knowledge across 5 key areas and provides personalized course recommendations. It's free and gives you instant results with a detailed learning path!";
    } else {
      return "That's an interesting question! While I can help with course navigation and basic AI concepts, I'd be happy to connect you with our expert instructors for more detailed technical questions. You can also browse our comprehensive course materials. Is there a specific course topic I can guide you to?";
    }
  };
  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex w-full",
              message.isUser ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-lg p-3 text-sm",
                message.isUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm">
              AI is typing...
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction(action)}
              className="text-xs"
            >
              {action}
            </Button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};