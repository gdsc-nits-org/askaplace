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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700/50">
          <CardContent className="p-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="relative group">
                <Avatar className="w-32 h-32 border-4 border-gray-700">
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

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
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

                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
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

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div className="flex-1">
                    {isEditing.location ? (
                      <div className="flex gap-2">
                        <Input
                          className="bg-gray-700/50 text-white"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-400 hover:text-green-300"
                          onClick={() => handleSave('location')}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleCancel('location')}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">{location}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={() => toggleEdit('location')}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div className="flex-1">
                    {isEditing.email ? (
                      <div className="flex gap-2">
                        <Input
                          className="bg-gray-700/50 text-white"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-400 hover:text-green-300"
                          onClick={() => handleSave('email')}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleCancel('email')}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">{email}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={() => toggleEdit('email')}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-gray-400" />
                  <div className="flex-1">
                    {isEditing.website ? (
                      <div className="flex gap-2">
                        <Input
                          className="bg-gray-700/50 text-white"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-400 hover:text-green-300"
                          onClick={() => handleSave('website')}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleCancel('website')}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          {website}
                        </a>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white"
                          onClick={() => toggleEdit('website')}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-white mb-4">Social Links</h2>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 