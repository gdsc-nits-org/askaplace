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
  Instagram,
  Youtube,
  Save,
  X,
  Plane,
  Globe,
  Calendar,
  Compass,
  Camera as CameraIcon,
  PenTool,
  Heart,
  Users,
  Map,
  Clock
} from "lucide-react";

export default function TravelBlogDashboard() {
  const [name, setName] = useState<string>("Sarah Johnson");
  const [username, setUsername] = useState<string>("wanderlust_sarah");
  const [bio, setBio] = useState<string>("Digital nomad & travel photographer exploring the world one destination at a time. 🌍✈️");
  const [location, setLocation] = useState<string>("Currently in: Bali, Indonesia");
  const [email, setEmail] = useState<string>("sarah@wanderlust.com");
  const [website, setWebsite] = useState<string>("https://wanderlustsarah.com");
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

  // Mock data for travel stats
  const travelStats = [
    { icon: Globe, label: "Countries Visited", value: "32" },
    { icon: Plane, label: "Cities Explored", value: "156" },
    { icon: CameraIcon, label: "Photos Taken", value: "12.5K" },
    { icon: PenTool, label: "Blog Posts", value: "248" },
    { icon: Heart, label: "Followers", value: "45.2K" },
    { icon: Users, label: "Community Members", value: "8.3K" }
  ];

  // Mock data for upcoming trips
  const upcomingTrips = [
    { destination: "Tokyo, Japan", date: "Mar 15-25, 2024", type: "Photography Tour" },
    { destination: "Santorini, Greece", date: "Apr 5-12, 2024", type: "Blog Collaboration" },
    { destination: "Bali, Indonesia", date: "May 1-15, 2024", type: "Digital Nomad Meetup" }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Main Profile Card */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="relative group">
                <Avatar className="w-32 h-32 border-4 border-white/20">
                  <AvatarImage src={avatarUrl} alt="Profile" />
                  <AvatarFallback className="text-2xl">SJ</AvatarFallback>
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
                      className="bg-white/10 text-white w-full md:w-64"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-white">{name}</h1>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white"
                    onClick={() => toggleEdit('name')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  {isEditing.username ? (
                    <Input
                      className="bg-white/10 text-white w-full md:w-64"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-300">@{username}</p>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white"
                    onClick={() => toggleEdit('username')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  {isEditing.bio ? (
                    <div className="flex-1 flex gap-2">
                      <Input
                        className="bg-white/10 text-white"
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
                      <p className="text-gray-200">{bio}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-300 hover:text-white"
                        onClick={() => toggleEdit('bio')}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Travel Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {travelStats.map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                  <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming Trips */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  Upcoming Trips
                </h2>
                <div className="space-y-3">
                  {upcomingTrips.map((trip, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{trip.destination}</h3>
                        <span className="text-sm text-blue-400">{trip.type}</span>
                      </div>
                      <p className="text-sm text-gray-300">{trip.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-white mb-4">Social Links</h2>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                    <Youtube className="h-4 w-4 mr-2" />
                    YouTube
                  </Button>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="bg-white/10 hover:bg-white/20 text-white h-auto py-4">
            <Map className="h-5 w-5 mr-2" />
            New Trip
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white h-auto py-4">
            <PenTool className="h-5 w-5 mr-2" />
            Write Post
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white h-auto py-4">
            <CameraIcon className="h-5 w-5 mr-2" />
            Upload Photos
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white h-auto py-4">
            <Clock className="h-5 w-5 mr-2" />
            Schedule Post
          </Button>
        </div>
      </div>
    </div>
  );
} 