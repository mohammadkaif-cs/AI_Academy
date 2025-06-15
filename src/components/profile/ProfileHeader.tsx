
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface ProfileHeaderProps {
  fullName: string;
  bio: string;
  role: string;
  photoUrl?: string | null;
  onEdit?: () => void;
}

export default function ProfileHeader({
  fullName,
  bio,
  role,
  photoUrl,
  onEdit
}: ProfileHeaderProps) {
  return (
    <div
      className="
        relative flex flex-col md:flex-row items-center gap-6 justify-between
        rounded-2xl shadow-xl px-8 py-8 mb-6
        bg-white/10 backdrop-blur-md
        border border-white/20
        ring-1 ring-inset ring-white/30
        glassmorphism-profile-card
        "
      style={{
        // For subtle extra-glass
        boxShadow: "0 4px 32px 0 rgba(30,44,80,0.11), 0 1.5px 0px 0px hsl(var(--glow)/0.38)"
      }}
    >
      <div className="flex items-center gap-5">
        <Avatar className="h-24 w-24 shadow-lg ring-2 ring-white/40 transition-all">
          {photoUrl ? (
            <AvatarImage src={photoUrl} alt="Profile Photo" />
          ) : (
            <AvatarFallback>
              <User className="w-10 h-10 text-muted-foreground" />
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold drop-shadow select-text">{fullName || "Your Name"}</h2>
            <span className="ml-2 px-3 py-1 rounded-full bg-white/20 text-accent text-xs font-semibold backdrop-blur-md border border-white/10">
              {role}
            </span>
          </div>
          {bio && (
            <div className="mt-2 text-base text-muted-foreground max-w-prose select-text">
              {bio}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex-shrink-0">
        <Button
          variant="outline"
          onClick={onEdit}
          className="rounded-full px-6 py-2 shadow-md bg-white/15 backdrop-blur text-foreground border border-white/30 hover:bg-white/30 transition-all"
          style={{
            boxShadow: "0 4px 16px 0 hsl(var(--glow)/0.10), 0 0 0 0.5px hsl(var(--glow)/0.82)"
          }}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

