
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ProfileBackToDashboardButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="
        flex items-center gap-2 px-4 py-2 rounded-xl
        bg-white/20 backdrop-blur-lg
        border border-white/30
        shadow-lg
        hover:bg-white/30 hover:shadow-xl
        transition-all
        text-sm font-medium text-foreground
        mb-5
        focus:outline-none focus:ring-2 focus:ring-primary
      "
      style={{
        boxShadow: "0 4px 16px 0 hsl(var(--glow)/0.09), 0 0 0 1.5px hsl(var(--accent)/0.11)"
      }}
    >
      <ArrowLeft className="w-4 h-4 text-accent" />
      <span>Back to Dashboard</span>
    </button>
  );
}
