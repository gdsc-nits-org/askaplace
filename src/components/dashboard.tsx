'use client'
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState, useRef } from "react";
import { 
  Edit2, 
  Camera, 
  Mail, 
  MapPin, 
  Link as LinkIcon, 
  Twitter, 
  Github, 
  Linkedin,
  Save,
  X
} from "lucide-react";

export default function ProfileDashboard() {
  const [name, setName] = useState<string>("John Doe");
  const [username, setUsername] = useState<string>("johndoe123");
  const [bio, setBio] = useState<string>("Full-stack developer passionate about creating beautiful and functional web applications.");
  const [location, setLocation] = useState<string>("San Francisco, CA");
  const [email, setEmail] = useState<string>("john.doe@example.com");
  const [website, setWebsite] = useState<string>("https://johndoe.dev");
  const [avatarUrl, setAvatarUrl] = useState<string>("https://via.placeholder.com/100");
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({
    name: false,
    username: false,
    bio: false,
    location: false,
    email: false,
    website: false
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const toggleEdit = (field: string) => {
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = (field: string) => {
    toggleEdit(field);
  };

  const handleCancel = (field: string) => {
    toggleEdit(field);
  };

  return (
    <div className="min-h-screen   bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700/50">
          <CardContent className="p-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-14 mb-8">
              <div className="relative group">
                <Avatar className="w-32 h-32  md:w-64 md:h-64 border-4 border-gray-700">
                  <AvatarImage src={avatarUrl} alt="Profile" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white hover:bg-transparent"
                    onClick={handleAvatarClick}
                  >
                    <Camera className="h-8 w-8" />
                  </Button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="flex flex-col  text-left  md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 ">
                  {isEditing.name ? (
                    <Input
                      className="bg-gray-700/50 text-white w-full md:w-64"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-white">{name}</h1>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    onClick={() => toggleEdit('name')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  {isEditing.username ? (
                    <Input
                      className="bg-gray-700/50 text-white w-full md:w-64"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-400">@{username}</p>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    onClick={() => toggleEdit('username')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="My-interests flex flex-col gap-4 mt-4">
                  <p className="text-gray-300 text-2xl ">Interests</p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  {isEditing.bio ? (
                    <div className="flex-1 flex gap-2">
                      <Input
                        className="bg-gray-700/50 text-white"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-green-400 hover:text-green-300"
                        onClick={() => handleSave('bio')}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-400 hover:text-red-300"
                        onClick={() => handleCancel('bio')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-300">{bio}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white"
                        onClick={() => toggleEdit('bio')}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
                </div>

              </div>
            </div>

            
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 