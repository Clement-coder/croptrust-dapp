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
    <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-400 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-100 rounded-full">
          <User className="w-8 h-8 text-green-400" />
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
