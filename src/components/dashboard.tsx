import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ProfileDashboard() {
  const [name, setName] = useState<string>("John Doe");
  const [username, setUsername] = useState<string>("johndoe123");
  const [interests, setInterests] = useState<string>("AI, Web Dev, Trading");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Card className="w-96 p-6 bg-gray-800 text-white rounded-lg border border-gray-700">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <CardContent className="flex flex-col items-center space-y-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://via.placeholder.com/100" alt="Profile" />
          </Avatar>
          <div className="text-center">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-gray-400">@{username}</p>
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-400">Name</label>
            <Input
              className="bg-gray-700 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-400">Username</label>
            <Input
              className="bg-gray-700 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-400">Interests</label>
            <Input
              className="bg-gray-700 text-white"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
