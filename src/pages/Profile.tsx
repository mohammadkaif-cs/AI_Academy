
import React, { useState, useEffect, ChangeEvent } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface ProfileData {
  fullName: string;
  bio: string;
  photoUrl: string;
}

const LOCAL_PROFILE_KEY = "user_profile_data";

export default function ProfilePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<ProfileData>({
    fullName: "",
    bio: "",
    photoUrl: "",
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

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
        duration: 2500,
      });
    }, 500);
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              {photoPreview ? (
                <AvatarImage src={photoPreview} alt="Profile" />
              ) : (
                <AvatarFallback>
                  {profile.fullName
                    ? profile.fullName
                        .split(" ")
                        .map(n => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()
                    : "U"}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <div className="text-lg font-semibold">
                {profile.fullName || user?.displayName || "Your Name"}
              </div>
              <CardDescription className="mt-1">{user?.email}</CardDescription>
              {profile.bio && (
                <div className="mt-1 text-sm text-muted-foreground">{profile.bio}</div>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSaveProfile} autoComplete="off">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                maxLength={180}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="photo">Profile Photo</Label>
              <Input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-1"
              />
              <div className="mt-2 flex items-center gap-3">
                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="h-16 w-16 rounded-full border border-muted"
                  />
                )}
              </div>
            </div>
            <Button type="submit" className="w-full mt-2" disabled={saving}>
              {saving ? "Saving..." : "Save Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
