import React, { useState, useEffect, ChangeEvent } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ProfileProjects from "@/components/profile/ProfileProjects";
import ProfileAchievements from "@/components/profile/ProfileAchievements";
import ProfileEditor from "@/components/profile/ProfileEditor";
import ProfileBackToDashboardButton from "@/components/profile/ProfileBackToDashboardButton";

interface ProfileData {
  fullName: string;
  bio: string;
  photoUrl: string;
}

const LOCAL_PROFILE_KEY = "user_profile_data";

export default function ProfilePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileData>({
    fullName: "",
    bio: "",
    photoUrl: "",
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [tab, setTab] = useState("overview");

  // Example/mock data for stats, projects, achievements
  const stats = {
    followers: 256,
    following: 187,
    projects: 6,
    achievements: 4
  };

  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      tags: ["React", "Design", "Personal"]
    },
    {
      id: "2",
      title: "AI Chatbot",
      thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80",
      tags: ["AI", "NLP"]
    },
    {
      id: "3",
      title: "Open Source UI Kit",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      tags: ["React", "opensource"]
    }
  ];

  const achievements = [
    { id: "1", title: "Top 10 Global Hackathon", badge: "award", highlight: true },
    { id: "2", title: "AI Specialist", badge: "star" },
    { id: "3", title: "1000+ Downloads", badge: "award" },
    { id: "4", title: "Open Source Contributor", badge: "award" }
  ];

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_PROFILE_KEY);
    if (saved) {
      setProfile(JSON.parse(saved));
      setPhotoPreview(JSON.parse(saved).photoUrl || null);
    } else if (user) {
      setProfile(prev => ({
        ...prev,
        fullName: user.displayName || "",
        photoUrl: user.photoURL || "",
      }));
      setPhotoPreview(user.photoURL || null);
    }
  }, [user]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle photo upload and preview
  async function handlePhotoChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const url = ev.target?.result as string;
      setPhotoPreview(url);
      setProfile(prev => ({ ...prev, photoUrl: url }));
    };
    reader.readAsDataURL(file);
  }

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(profile));
      setSaving(false);
      toast({
        title: "Profile saved!",
        description: "Your profile changes have been saved.",
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); // Wait for toast, then redirect
    }, 500);
  }

  return (
    <div className="max-w-4xl mx-auto w-full py-8 px-3 sm:px-6">
      {/* Back to Dashboard */}
      <ProfileBackToDashboardButton />
      {/* Profile Header */}
      <ProfileHeader
        fullName={profile.fullName || user?.displayName || "Your Name"}
        bio={profile.bio}
        role="AI Developer"
        photoUrl={photoPreview || user?.photoURL}
        onEdit={() => setShowEdit(true)}
      />
      {/* Stats */}
      <ProfileStats {...stats} />

      <ProfileTabs tab={tab} onTabChange={setTab}>
        <div>
          {/* Tab Contents */}
          {tab === "overview" && (
            <div className="mt-6 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="mb-4 font-semibold text-lg">Projects</div>
                <ProfileProjects projects={projects} />
              </div>
              <div>
                <div className="mb-4 font-semibold text-lg">Achievements</div>
                <ProfileAchievements achievements={achievements} />
              </div>
            </div>
          )}
          {tab === "projects" && (
            <ProfileProjects projects={projects} />
          )}
          {tab === "achievements" && (
            <ProfileAchievements achievements={achievements} />
          )}
          {tab === "settings" && (
            <div className="mt-6">
              <ProfileEditor />
            </div>
          )}
        </div>
      </ProfileTabs>
    </div>
  );
}
