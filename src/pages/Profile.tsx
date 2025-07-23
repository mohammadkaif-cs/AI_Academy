
import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import ProfileBackToDashboardButton from "@/components/profile/ProfileBackToDashboardButton";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileEditor from "@/components/profile/ProfileEditor";

const LOCAL_PROFILE_KEY = "user_profile_data";

interface ProfileData {
  fullName: string;
  bio: string;
  photoUrl: string;
  role?: string;
  username?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  status?: string;
  resumeName?: string;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState<ProfileData>({
    fullName: "",
    bio: "",
    photoUrl: "",
    role: "",
    username: "",
    email: "",
    linkedin: "",
    github: "",
    status: "",
    resumeName: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_PROFILE_KEY);
    if (saved) {
      setProfile(JSON.parse(saved));
    } else if (user) {
      setProfile(prev => ({
        ...prev,
        fullName: user.displayName || "",
        photoUrl: user.photoURL || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  // Check which view to render based on location.pathname
  const editing = location.pathname === "/profile/edit";

  if (editing) {
    return <ProfileEditor />;
  }

  const {
    fullName,
    bio,
    photoUrl,
    role,
    username,
    email,
    linkedin,
    github,
    status,
    resumeName,
  } = profile;

  return (
    <div className="max-w-lg mx-auto w-full py-10 px-3 sm:px-6 bg-white min-h-screen">
      <ProfileBackToDashboardButton />
      <div
        className="
          bg-white border border-gray-200 shadow-sm
          rounded-2xl
          px-9 py-10 flex flex-col items-center gap-7
        "
      >
        <Avatar className="h-24 w-24 shadow-sm ring-2 ring-gray-200">
          {photoUrl ? (
            <AvatarImage src={photoUrl} alt="Profile Photo" />
          ) : (
            <AvatarFallback>
              <User className="w-10 h-10 text-gray-600" />
            </AvatarFallback>
          )}
        </Avatar>
        <div className="w-full text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{fullName || "Your Name"}</h2>
          {role && <div className="mt-2 text-black font-medium">{role}</div>}
          {status && <div className="mt-1 text-sm text-gray-600">{status}</div>}
        </div>
        {bio && (
          <div className="max-w-prose text-base text-center text-gray-600">{bio}</div>
        )}
        <div className="flex flex-col gap-2 w-full items-center text-sm mt-2">
          {email && (
            <div>
              <span className="font-medium">Email: </span>
              <span className="text-gray-600">{email}</span>
            </div>
          )}
          {username && (
            <div>
              <span className="font-medium">Username: </span>
              <span className="text-gray-600">{username}</span>
            </div>
          )}
          {linkedin && (
            <div>
              <span className="font-medium">LinkedIn: </span>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                {linkedin}
              </a>
            </div>
          )}
          {github && (
            <div>
              <span className="font-medium">GitHub: </span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                {github}
              </a>
            </div>
          )}
          {resumeName && resumeName !== "No file chosen" && (
            <div>
              <span className="font-medium">Resume: </span>
              <span className="text-gray-600">{resumeName}</span>
            </div>
          )}
        </div>
        <Button
          variant="outline"
          className="rounded-full px-7 py-2 font-medium mt-3 shadow-sm bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 transition-all"
          onClick={() => navigate("/profile/edit")}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
