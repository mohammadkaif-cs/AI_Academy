
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
  onEdit,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-card rounded-xl shadow-glow px-6 py-6 md:py-8 mb-4">
      <div className="flex items-center gap-5">
        <Avatar className="h-20 w-20 shadow-md">
          {photoUrl ? (
            <AvatarImage src={photoUrl} alt="Profile Photo" />
          ) : (
            <AvatarFallback>
              <User className="w-10 h-10 text-muted-foreground" />
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{fullName || "Your Name"}</h2>
            <span className="ml-2 px-2 rounded bg-muted text-xs text-muted-foreground font-semibold">
              {role}
            </span>
          </div>
          {bio && (
            <div className="mt-1 text-base text-muted-foreground max-w-prose">
              {bio}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <Button variant="outline" onClick={onEdit}>
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
