
import DashboardLayout from "@/components/DashboardLayout";
import { Bot } from "lucide-react";
import { Chatbot } from "@/components/Chatbot";

export default function ChatbotPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center relative">
        <Bot className="w-14 h-14 text-black mb-4" />
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          AI Academy Chatbot
        </h1>
        <p className="text-gray-300 mb-6 max-w-xl">
          Welcome to the Academy Chatbot! Ask anything about your courses, AI concepts, or get quick study help.
        </p>
        {/* Embed the actual chatbot UI */}
        <div className="w-full max-w-lg min-h-[420px] flex items-end justify-center relative">
          <Chatbot />
        </div>
      </div>
    </DashboardLayout>
  );
}
