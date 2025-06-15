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
            // Edit form from previous profile (could modularize it)
            showEdit && (
              <div className="mt-6">
                <form
                  className="space-y-6"
                  onSubmit={handleSaveProfile}
                  autoComplete="off"
                >
                  <div>
                    <label htmlFor="fullName" className="block font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      className="mt-1 w-full bg-muted/40 px-3 py-2 rounded border border-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="block font-medium mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      placeholder="Tell us about yourself"
                      maxLength={180}
                      className="mt-1 w-full bg-muted/40 px-3 py-2 rounded border border-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="photo" className="block font-medium mb-1">
                      Profile Photo
                    </label>
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="mt-1"
                    />
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="h-16 w-16 rounded-full border border-muted mt-3"
                      />
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={saving}
                    >
                      {saving ? "Saving..." : "Save Profile"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => setShowEdit(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )
          )}
        </div>
      </ProfileTabs>
    </div>
  );
}
