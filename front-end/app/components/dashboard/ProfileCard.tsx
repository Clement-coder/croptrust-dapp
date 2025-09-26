"use client";

import { User } from "lucide-react";

interface ProfileCardProps {
  user: {
    fullName: string;
    companyName?: string;
    farmName?: string;
    location: string;
    wallet: string;
  };
  role: "farmer" | "buyer";
}

export default function ProfileCard({ user, role }: ProfileCardProps) {
  return (
    <div className="relative p-6 bg-gradient-to-br from-green-200/10 via-green-300/20 to-green-200/30 hover:-translate-y-1 duration-300 rounded-2xl shadow-lg border border-green-200 hover:border-green-400 transition-all">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500/80 to-green-600/80 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-glow">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.fullName}</h2>
          <p className="text-gray-500">{role === "farmer" ? user.farmName : user.companyName}</p>
        </div>
      </div>
      <div className="mt-6 space-y-2 text-gray-600">
        <p><strong>Location:</strong> {user.location}</p>
        <p className="truncate"><strong>Wallet:</strong> {user.wallet}</p>
      </div>
    </div>
  );
}
