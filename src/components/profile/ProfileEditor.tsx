
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Paperclip, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const STATUS_OPTIONS = [
  "Unknown Status",
  "Open to Opportunities",
  "Employed",
  "Freelance",
  "Student"
];

const ROLE_OPTIONS = [
  "Software Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Data Scientist",
  "Other"
];

export default function ProfileEditor() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [resumeName, setResumeName] = useState<string>("No file chosen");
  const [status, setStatus] = useState(STATUS_OPTIONS[0]);
  const [role, setRole] = useState<string>(ROLE_OPTIONS[0]);
  const [bio, setBio] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [photoFileName, setPhotoFileName] = useState<string>("No file chosen");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "No file chosen");
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPhotoFileName(file ? file.name : "No file chosen");
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setResumeName(file.name);
    }
  };

  const handlePhotoDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    setPhotoFileName(file ? file.name : "No file chosen");
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated!",
      description: "Your profile changes have been saved.",
      duration: 1800,
    });
    setTimeout(() => {
      navigate("/dashboard");
    }, 900); // brief delay so toast is visible
  };

  return (
    <div className="
      max-w-xl w-full mx-auto
      bg-white/15 backdrop-blur-xl
      border border-white/20
      rounded-2xl shadow-xl
      px-7 py-9 mt-6
      flex flex-col gap-7
      glassmorphism-profile-card
      " style={{
        boxShadow: "0 8px 32px 0 hsl(var(--glow)/0.12), 0 0 1.5px 0 hsl(var(--glow)/0.30)"
      }}>
      <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-extrabold mb-2 text-center tracking-tight">Edit Profile</h2>
        
        {/* Profile Photo Upload */}
        <div className="flex flex-col gap-3 items-center">
          <Label className="mb-1">Profile Photo</Label>
          <label
            htmlFor="photo"
            onDrop={handlePhotoDrop}
            onDragOver={e => e.preventDefault()}
            className="
              flex items-center gap-3 border-2 border-dashed border-primary/20
              rounded-xl px-4 py-3 cursor-pointer bg-white/35 hover:bg-white/45
              transition-all shadow text-[15px] w-full max-w-xs
              "
          >
            <div className="flex items-center gap-3">
              <ImageIcon className="text-primary/80" />
              <span className="truncate">{photoFileName}</span>
            </div>
            <Button type="button" variant="outline" className="rounded-lg px-3 py-1 ml-2"
              onClick={() => photoInputRef.current?.click()}
            >
              Upload Photo
            </Button>
            <input
              ref={photoInputRef}
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
          {photoUrl && (
            <img
              src={photoUrl}
              alt="Profile Preview"
              className="rounded-xl mt-2 w-20 h-20 object-cover border border-white/30 shadow"
            />
          )}
        </div>

        {/* Name */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="name" className="mb-1">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Full name"
            className="rounded-xl shadow border-none bg-white/40 placeholder:text-gray-500 focus:bg-white/70 focus:shadow focus:ring-2 focus:ring-primary/40 transition-all"
            required
          />
        </div>
        
        {/* Bio */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="bio" className="mb-1">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself..."
            className="rounded-xl shadow border-none bg-white/40 placeholder:text-gray-500 focus:bg-white/70 focus:shadow focus:ring-2 focus:ring-primary/40 transition-all min-h-[88px]"
            value={bio}
            onChange={e => setBio(e.target.value)}
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="role" className="mb-1">Role</Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="rounded-xl shadow border-none bg-white/40 focus:bg-white/70 focus:ring-2 focus:ring-primary/40 transition-all h-11">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-white/90 backdrop-blur-md border shadow-lg">
              {ROLE_OPTIONS.map(option =>
                <SelectItem key={option} value={option}>{option}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        
        {/* Username */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="username" className="mb-1">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="username"
            className="rounded-xl shadow border-none bg-white/40 placeholder:text-gray-500 focus:bg-white/70 focus:shadow focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
        
        {/* Email */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="email" className="mb-1">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            autoComplete="email"
            className="rounded-xl shadow border-none bg-white/40 placeholder:text-gray-500 focus:bg-white/70 focus:shadow focus:ring-2 focus:ring-primary/40 transition-all"
            required
          />
        </div>
        
        {/* LinkedIn */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="linkedin" className="mb-1">LinkedIn Profile</Label>
            <Button
              type="button"
              variant="outline"
              className="text-primary px-3 py-1 rounded-lg border border-primary/40 ml-2 shadow-sm"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              Connect LinkedIn
            </Button>
          </div>
          <Input
            id="linkedin"
            name="linkedin"
            placeholder="e.g., https://linkedin.com/in/yourprofile"
            className="rounded-xl shadow border-none bg-white/40 placeholder:text-gray-500 focus:bg-white/70 focus:shadow focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
        
        {/* GitHub */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="github" className="mb-1">GitHub Profile</Label>
          <Input
            id="github"
            name="github"
            placeholder="e.g., https://github.com/yourprofile"
            className="rounded-xl shadow border-none bg-white/40 placeholder:text-gray-500 focus:bg-white/70 focus:shadow focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
        
        {/* Status */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="status" className="mb-1">Current Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="rounded-xl shadow border-none bg-white/40 focus:bg-white/70 focus:ring-2 focus:ring-primary/40 transition-all h-11">
              <SelectValue placeholder="Unknown Status" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-white/90 backdrop-blur-md border shadow-lg">
              {STATUS_OPTIONS.map(option =>
                <SelectItem key={option} value={option}>{option}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        
        {/* Resume */}
        <div className="flex flex-col gap-2">
          <Label className="mb-1">Resume</Label>
          <label
            htmlFor="resume"
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            className={`
              flex items-center gap-3
              justify-between
              border-2 border-dashed border-primary/20 
              rounded-xl px-4 py-4 cursor-pointer
              bg-white/35 hover:bg-white/45 transition-all
              shadow
              text-[15px]
            `}
          >
            <div className="flex items-center gap-3">
              <Paperclip className="text-primary/80" />
              <span className="truncate">{resumeName}</span>
            </div>
            <Button type="button" variant="outline" className="rounded-lg px-3 py-1 ml-1"
              onClick={() => fileInputRef.current?.click()}
            >
              Click to upload
            </Button>
            <input
              ref={fileInputRef}
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <Button
          type="submit"
          className="
            mt-2 w-full text-lg rounded-xl
            bg-primary/90 text-white py-3 font-semibold
            shadow focus:scale-[1.01] transition-all
            hover:bg-primary hover:shadow-lg focus:ring-2 focus:ring-primary/50
          "
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
}
