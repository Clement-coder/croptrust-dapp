"use client";

import { ShoppingCart } from "lucide-react";
import CropListing from "./CropListing";
import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";

interface BuyerDashboardProps {
  buyer: {
    fullName: string;
    companyName: string;
    location: string;
    wallet: string;
  };
}

export default function BuyerDashboard({ buyer }: BuyerDashboardProps) {
  return (
    <div className="p-8 mx-auto px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Buyer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProfileCard user={buyer} role="buyer" />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard label="Total Crops Bought" value={25} icon="cart" />
          <StatsCard label="Total Spent" value={12500} icon="dollar" isCurrency />
          <StatsCard label="Active Orders" value={5} icon="cart" />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Marketplace</h2>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Browse All Crops
          </button>
        </div>
        <CropListing />
      </div>
    </div>
  );
}
