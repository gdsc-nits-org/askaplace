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
  X,
  Trash2, // Import Trash2 icon
  Plus // Import Plus icon
} from "lucide-react";
import { useRouter } from 'next/navigation'; // Import useRouter

// Define Post type
interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Added imageUrl for display
}

// Mock data for travel posts
const mockPosts: Post[] = [
  { id: '1', title: 'Trip to the Mountains', description: 'An amazing hike through the Alps.', imageUrl: 'https://imgs.search.brave.com/y06h9C4UGnGFj-mVy4MQZOOszfCkS3eEEjXJLiVEOiI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWxvZ3lpbmRpYS5i/LWNkbi5uZXQvYmxv/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMC9CdW1sYS1Q/YXNzLVRhd2FuZy5q/cGc' },
  { id: '2', title: 'Beach Getaway', description: 'Relaxing week by the sea.', imageUrl: 'https://imgs.search.brave.com/HGUVCFPLBBnt7g01V8K7upDPa1D3KI-tF8mxAMkMUSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/MDU5MTI0Ni9waG90/by9kcmVhbS1iZWFj/aC1pc2xhbmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXRo/MVdTY0tCWEdyc3p0/aUlVemRmNnJRMFYx/a3RITTM0TVJ6MUk1/TEZOUmM9' },
  { id: '3', title: 'City Exploration', description: 'Discovering the hidden gems of Paris.', imageUrl: 'https://imgs.search.brave.com/N-MpE0ZiY9acOE2OJGnEcYQmPp0CHKBBDbm3UcjuxJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzgzLzgzLzkz/LzM2MF9GXzI4Mzgz/OTMwMl95dDZKSXNF/OTZQajRQeWRGRGNC/TktEVW51U3BZQjlo/MC5qcGc' },
  { id: '4', title: 'City Exploration', description: 'Discovering the hidden gems of Paris.', imageUrl: 'https://via.placeholder.com/300x200?text=City' },
];


export default function ProfileDashboard() {
  const router = useRouter(); // Initialize router
  const [posts, setPosts] = useState<Post[]>(mockPosts); // Add state for posts

  const [name, setName] = useState<string>("John Doe");
  const [username, setUsername] = useState<string>("johndoe123");
  // Changed bio state to hold an array of interests
  const [bio, setBio] = useState<string[]>([
    "Web Development", 
    "React", 
    "Node.js", 
    "TypeScript", 
    "Tailwind CSS"
  ]);
  // State to manage the input field value during editing
  const [editBioInput, setEditBioInput] = useState<string>(bio.join(", ")); 
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
    if (field === 'bio' && !isEditing.bio) {
      // When starting to edit bio, initialize the input field with current tags
      setEditBioInput(bio.join(", "));
    }
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = (field: string) => {
    if (field === 'bio') {
      // Split the comma-separated input into an array of tags
      setBio(editBioInput.split(',').map(tag => tag.trim()).filter(tag => tag !== ''));
    }
    toggleEdit(field);
  };

  const handleCancel = (field: string) => {
    // Reset input field if canceling bio edit
    if (field === 'bio') {
      setEditBioInput(bio.join(", "));
    }
    toggleEdit(field);
  };

  // Handler for editing a post
  const handleEditPost = (postId: string) => {
    router.push(`/dashboard/posts/edit/${postId}`); // Navigate to edit page
  };

  // Handler for deleting a post
  const handleDeletePost = (postId: string) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
  };

  // Handler for creating a new post
  const handleNewPost = () => {
    router.push('/dashboard/posts/new'); // Navigate to new post page
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-[60rem] mx-auto space-y-8"> {/* Added space-y-8 for spacing between sections */}
        {/* Profile Card */}
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
                      {/* Use editBioInput for the controlled input */}
                      <Input
                        className="bg-gray-700/50 text-white"
                        value={editBioInput}
                        onChange={(e) => setEditBioInput(e.target.value)}
                        placeholder="Enter interests, separated by commas"
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
                      {/* Render tags */}
                      <div className="flex flex-wrap gap-2">
                        {bio.map((interest, index) => (
                          <span 
                            key={index} 
                            className="bg-blue-600/70 text-white text-xs font-medium px-3 py-1 rounded-full"
                          >
                            #{interest}
                          </span>
                        ))}
                      </div>
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

        {/* Travel Posts Section */}
        <div className="mt-8">
          {/* Apply mobile-first stacking and centering, then row layout for sm+ */}
          <div className="flex flex-col items-center gap-2 mb-4 sm:flex-row sm:justify-between sm:items-center">
            <h2 className="text-2xl font-semibold text-white text-center sm:text-left">My Travel Posts</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-green-400 border-green-400 hover:bg-green-900/30 hover:text-green-300"
              onClick={handleNewPost}
            >
              <Plus className="h-4 w-4 mr-1" /> New Post
            </Button>
          </div>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-gray-800/60 border-gray-700/60 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{post.description}</p>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-400 border-blue-400 hover:bg-blue-900/30 hover:text-blue-300"
                        onClick={() => handleEditPost(post.id)}
                      >
                        <Edit2 className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-400 border-red-400 hover:bg-red-900/30 hover:text-red-300"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">You haven't posted any travels yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
