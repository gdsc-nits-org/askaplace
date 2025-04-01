'use client'
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState, useRef, useEffect } from "react"; // Added useEffect
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
  Trash2,
  Plus
} from "lucide-react";
import { useRouter } from 'next/navigation';

// Define Post type
interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Mock data for travel posts
const mockPosts: Post[] = [
  { id: '1', title: 'Trip to the Mountains', description: 'An amazing hike through the Alps.', imageUrl: 'https://imgs.search.brave.com/y06h9C4UGnGFj-mVy4MQZOOszfCkS3eEEjXJLiVEOiI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWxvZ3lpbmRpYS5i/LWNkbi5uZXQvYmxv/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMC9CdW1sYS1Q/YXNzLVRhd2FuZy5q/cGc' },
  { id: '2', title: 'Beach Getaway', description: 'Relaxing week by the sea.', imageUrl: 'https://imgs.search.brave.com/HGUVCFPLBBnt7g01V8K7upDPa1D3KI-tF8mxAMkMUSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/MDU5MTI0Ni9waG90/by9kcmVhbS1iZWFj/aC1pc2xhbmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXRo/MVdTY0tCWEdyc3p0/aUlVemRmNnJRMFYx/a3RITTM0TVJ6MUk1/TEZOUmM9' },
  { id: '3', title: 'City Exploration', description: 'Discovering the hidden gems of Paris.', imageUrl: 'https://imgs.search.brave.com/N-MpE0ZiY9acOE2OJGnEcYQmPp0CHKBBDbm3UcjuxJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzgzLzgzLzkz/LzM2MF9GXzI4Mzgz/OTMwMl95dDZKSXNF/OTZQajRQeWRGRGNC/TktEVW51U3BZQjlo/MC5qcGc' },
  { id: '4', title: 'Jungle Adventure', description: 'Trekking through the Amazon.', imageUrl: 'https://via.placeholder.com/300x200?text=Jungle' },
];

// Define colors for interest tags
const tagColors = [
  "bg-teal-600/70 hover:bg-teal-500/70",
  "bg-orange-600/70 hover:bg-orange-500/70",
  "bg-sky-600/70 hover:bg-sky-500/70",
  "bg-lime-600/70 hover:bg-lime-500/70",
  "bg-rose-600/70 hover:bg-rose-500/70",
  "bg-amber-600/70 hover:bg-amber-500/70"
];

export default function ProfileDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  // Original state values for cancellation
  const [originalName, setOriginalName] = useState<string>("John Doe");
  const [originalUsername, setOriginalUsername] = useState<string>("johndoe123");
  const [originalBio, setOriginalBio] = useState<string[]>([
    "Hiking", "Photography", "Beaches", "Mountains", "City Breaks", "Road Trips"
  ]);

  // Current state values
  const [name, setName] = useState<string>(originalName);
  const [username, setUsername] = useState<string>(originalUsername);
  const [bio, setBio] = useState<string[]>(originalBio);

  // Input state during editing
  const [editBioInput, setEditBioInput] = useState<string>(originalBio.join(", "));

  // Other profile fields (not part of the single edit toggle for now)
  const [location, setLocation] = useState<string>("San Francisco, CA");
  const [email, setEmail] = useState<string>("john.doe@example.com");
  const [website, setWebsite] = useState<string>("https://johndoe.dev");
  const [avatarUrl, setAvatarUrl] = useState<string>("https://via.placeholder.com/150");

  // Single state for profile editing mode
  const [isProfileEditing, setIsProfileEditing] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update input field when bio state changes (e.g., after saving)
  useEffect(() => {
    setEditBioInput(bio.join(", "));
  }, [bio]);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        // TODO: Add logic to upload avatar to server
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleProfileEdit = () => {
    if (!isProfileEditing) {
      // Entering edit mode: store current values as original for potential cancel
      setOriginalName(name);
      setOriginalUsername(username);
      setOriginalBio([...bio]); // Store a copy
      setEditBioInput(bio.join(", ")); // Ensure input matches current tags
    }
    setIsProfileEditing(prev => !prev);
  };

  const handleProfileSave = () => {
    // Update the main bio state from the input field
    const newBio = editBioInput.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setBio(newBio);

    // Update original values to reflect the save
    setOriginalName(name);
    setOriginalUsername(username);
    setOriginalBio(newBio);

    // TODO: Add logic to save profile data (name, username, newBio) to the server/API

    setIsProfileEditing(false); // Exit edit mode
  };

  const handleProfileCancel = () => {
    // Revert to original values
    setName(originalName);
    setUsername(originalUsername);
    setBio(originalBio);
    setEditBioInput(originalBio.join(", ")); // Reset input field too

    setIsProfileEditing(false); // Exit edit mode
  };

  // --- Post Handlers ---
  const handleEditPost = (postId: string) => {
    router.push(`/dashboard/posts/edit/${postId}`);
  };

  const handleDeletePost = (postId: string) => {
    // TODO: Add confirmation dialog?
    // TODO: Add logic to delete post from server/API
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
  };

  const handleNewPost = () => {
    router.push('/dashboard/posts/new');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 p-4 md:p-8 text-gray-100">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Profile Card - Consolidated Edit Button */}
        <Card className="relative bg-gray-800/70 backdrop-blur-md border border-cyan-700/50 rounded-lg shadow-xl overflow-hidden">
          {/* Edit/Save/Cancel Buttons Container */}
           <div className="absolute top-4 right-4 z-10 flex gap-2">
             {isProfileEditing ? (
               <>
                 <Button variant="outline" size="icon" className="text-green-400 border-green-500 hover:bg-green-900/30 hover:text-green-200 rounded-md" onClick={handleProfileSave}> <Save className="h-5 w-5" /> </Button>
                 <Button variant="outline" size="icon" className="text-red-400 border-red-500 hover:bg-red-900/30 hover:text-red-200 rounded-md" onClick={handleProfileCancel}> <X className="h-5 w-5" /> </Button>
               </>
             ) : (
               <Button variant="outline" size="icon" className="text-cyan-400 border-cyan-500 hover:bg-cyan-900/30 hover:text-cyan-200 rounded-md" onClick={toggleProfileEdit}> <Edit2 className="h-5 w-5" /> </Button>
             )}
           </div>

          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Avatar Section */}
              <div className="relative group flex-shrink-0">
                <Avatar className="w-36 h-36 md:w-48 md:h-48 border-4 border-teal-400/70 shadow-lg">
                  <AvatarImage src={avatarUrl} alt={name} />
                  <AvatarFallback className="text-4xl bg-gray-700 text-teal-200">{name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="text-teal-300 hover:text-teal-100" onClick={handleAvatarClick}> <Camera className="h-8 w-8" /> </Button>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>

              {/* Info Section */}
              <div className="flex flex-col text-center md:text-left w-full mt-4 md:mt-0">
                {/* Name */}
                <div className="mb-1">
                  {isProfileEditing ? (
                     <div>
                       <label htmlFor="nameInput" className="text-xs text-cyan-300 block mb-1">Name</label>
                       <Input id="nameInput" className="bg-gray-700/80 border-cyan-600 text-white text-xl font-bold" value={name} onChange={(e) => setName(e.target.value)} />
                     </div>
                  ) : (
                    <h1 className="text-3xl font-bold text-teal-100">{name}</h1>
                  )}
                </div>

                {/* Username */}
                <div className="mb-4">
                  {isProfileEditing ? (
                     <div>
                       <label htmlFor="usernameInput" className="text-xs text-cyan-300 block mb-1">Username</label>
                       <Input id="usernameInput" className="bg-gray-700/80 border-cyan-600 text-white" value={username} onChange={(e) => setUsername(e.target.value)} />
                     </div>
                  ) : (
                    <p className="text-cyan-400 text-lg">@{username}</p>
                  )}
                </div>

                {/* Interests Section */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-cyan-200 mb-3 text-center md:text-left">Interests</h3>
                  {isProfileEditing ? (
                     <div>
                       <label htmlFor="interestsInput" className="text-xs text-cyan-300 block mb-1">Interests (comma-separated)</label>
                       <Input
                         id="interestsInput"
                         className="bg-gray-700/80 border-cyan-600 text-white"
                         value={editBioInput}
                         onChange={(e) => setEditBioInput(e.target.value)}
                         placeholder="e.g., Hiking, Beaches, Photography"
                       />
                     </div>
                  ) : (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {bio.length > 0 ? bio.map((interest, index) => (
                        <span
                          key={index}
                          className={`flex items-center gap-1.5 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow transition-colors duration-200 ${tagColors[index % tagColors.length]}`}
                        >
                          <MapPin className="h-3 w-3" />
                          {interest}
                        </span>
                      )) : <p className="text-sm text-gray-400 italic">No interests added yet.</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Travel Posts Section */}
        <div className="mt-10">
           <div className="flex flex-col items-center gap-3 mb-6 sm:flex-row sm:justify-between sm:items-center">
            <h2 className="text-3xl font-semibold text-white text-center sm:text-left">My Travel Posts</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-green-400 border-green-400 hover:bg-green-900/30 hover:text-green-300 transition-colors duration-200 rounded-md shadow"
              onClick={handleNewPost}
            >
              <Plus className="h-4 w-4 mr-2" /> New Post
            </Button>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="bg-gray-800/60 border border-gray-700/60 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-cyan-900/30">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-52 object-cover" />
                  <CardContent className="p-5 flex flex-col"> {/* Use flex-col for structure */}
                     <div className="flex-grow"> {/* Allow text content to grow */}
                        <h3 className="text-xl font-semibold text-teal-100 mb-2 truncate">{post.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.description}</p>
                     </div>
                     <div className="flex justify-end gap-2 mt-auto pt-3 border-t border-gray-700/50"> {/* Buttons at bottom */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-cyan-400 border-cyan-500 hover:bg-cyan-900/30 hover:text-cyan-200 transition-colors duration-200 rounded"
                        onClick={() => handleEditPost(post.id)}
                      >
                        <Edit2 className="h-4 w-4 mr-1.5" /> Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-rose-400 border-rose-500 hover:bg-rose-900/30 hover:text-rose-200 transition-colors duration-200 rounded"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1.5" /> Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <MapPin className="h-12 w-12 mx-auto text-gray-500 mb-3"/>
                <p className="text-gray-400">You haven't posted any travels yet.</p>
                <p className="text-sm text-gray-500 mt-1">Click "+ New Post" to share your adventures!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
