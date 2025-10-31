"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CropCard from "./CropCard";
import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";
import { Wheat } from "lucide-react";

interface Crop {
  id: string;
  name: string;
  price: number;
  quantity: number;
  location: string;
  imageUrl: string;
  description: string;
  farmer: {
    name: string;
    avatarUrl: string;
  };
  farmerName: string;
}

interface Farmer {
  id: number;
  fullName: string;
  location: string;
}

interface BuyerDashboardProps {
  buyer: {
    id: number;
    fullName: string;
    companyName: string;
    location: string;
    wallet: string;
  };
}

export default function BuyerDashboard({ buyer }: BuyerDashboardProps) {
  const [allCrops, setAllCrops] = useState<Crop[]>([]);

  useEffect(() => {
    try {
      const cropsByFarmer = JSON.parse(localStorage.getItem("crops") || "{}");
      const farmers: Farmer[] = JSON.parse(localStorage.getItem("farmers") || "[]");
      const allCropsData = Object.entries(cropsByFarmer).flatMap(([farmerId, farmerCrops]: [string, unknown]) => {
        const farmer = farmers.find((f) => f.id === parseInt(farmerId));
        return (farmerCrops as Crop[]).map((crop) => ({ ...crop, farmerName: farmer?.fullName || 'Unknown Farmer', location: farmer?.location || 'Unknown Location' }));
      });
      setAllCrops(allCropsData as Crop[]);
    } catch (error) {
      toast.error("Failed to load marketplace data.");
    }
  }, []);

  return (
    <div className="p-4 sm:p-8 mt-10 mx-auto px-4 sm:px-6 bg-gradient-to-br from-blue-50/50 via-sky-50/50 to-cyan-50/50 text-gray-800 min-h-screen">
      <div className="sticky backdrop-blur-md top-20 z-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between bg-white/30 py-3 px-6 shadow-lg">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Marketplace</h1>
          <p className="text-gray-600 text-md font-bold mt-1">Welcome, {buyer.fullName}!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-5 gap-4 sm:gap-8">
        <div className="md:col-span-2">
          <ProfileCard user={buyer} role="buyer" />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <StatsCard label="Total Crops Bought" value={25} icon="cart" />
          <StatsCard label="Total Spent" value={12500} icon="dollar" isCurrency />
          <StatsCard label="Active Orders" value={5} icon="cart" />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Available Crops</h2>
        </div>
        {allCrops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {allCrops.map((crop) => (
              <CropCard key={crop.id} crop={crop} action="buy" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-2xl bg-white/50">
            <Wheat className="w-16 h-16 mx-auto text-gray-400" />
            <h3 className="mt-4 text-xl font-bold text-gray-600">No crops available in the marketplace yet.</h3>
            <p className="mt-2 text-gray-500">Check back later for new listings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
