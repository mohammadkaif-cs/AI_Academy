
import DashboardLayout from "@/components/DashboardLayout";
import { Bot } from "lucide-react";

export default function ChatbotPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Bot className="w-14 h-14 text-accent mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">AI Academy Chatbot</h1>
        <p className="text-blue-200 mb-6 max-w-xl">
          Welcome to the Academy Chatbot! Ask anything about your courses, AI concepts, or get quick study help.
        </p>
        {/* Placeholder for chatbot UI */}
        <div className="w-full max-w-lg bg-[hsl(var(--background))]/60 border border-accent/20 rounded-xl p-6 shadow-lg">
          <div className="text-accent/80 text-sm mb-2">The assistant is ready to help you.</div>
          {/* Add an actual chatbot component here if you need advanced functionality */}
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full px-4 py-2 rounded border bg-black/20 border-accent/30 text-white placeholder:text-accent/40 outline-none"
            disabled
          />
          <div className="text-xs text-accent/60 mt-2">Chatbot functionality coming soon!</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
