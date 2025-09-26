"use client";

import { Plus, Wheat } from "lucide-react";
import { useState, useEffect } from "react";
import CropCard from "./CropCard";
import PostCropModal from "./PostCropModal";
import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";

interface FarmerDashboardProps {
  farmer: {
    id: number;
    fullName: string;
    farmName: string;
    cropType: string;
    location: string;
    wallet: string;
  };
}

export default function FarmerDashboard({ farmer }: FarmerDashboardProps) {
  const [showModal, setShowModal] = useState(false);
  const [crops, setCrops] = useState<any[]>([]);

  useEffect(() => {
    const allCrops = JSON.parse(localStorage.getItem("crops") || "{}");
    const farmerCrops = allCrops[farmer.id] || [];
    setCrops(farmerCrops);
  }, [farmer.id]);

  const handleCropPosted = (newCrop: any) => {
    const allCrops = JSON.parse(localStorage.getItem("crops") || "{}");
    const farmerCrops = allCrops[farmer.id] || [];
    const updatedCrops = [...farmerCrops, newCrop];
    allCrops[farmer.id] = updatedCrops;
    localStorage.setItem("crops", JSON.stringify(allCrops));
    setCrops(updatedCrops);
  };

  const handleDeleteCrop = (cropIndex: number) => {
    const allCrops = JSON.parse(localStorage.getItem("crops") || "{}");
    const farmerCrops = allCrops[farmer.id] || [];
    const updatedCrops = farmerCrops.filter((_: any, index: number) => index !== cropIndex);
    allCrops[farmer.id] = updatedCrops;
    localStorage.setItem("crops", JSON.stringify(allCrops));
    setCrops(updatedCrops);
  };

  return (
    <div className="p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Farmer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProfileCard user={farmer} role="farmer" />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard label="Total Crops Listed" value={crops.length} icon="wheat" />
          <StatsCard label="Total Earnings" value={35000} icon="dollar" isCurrency />
          <StatsCard label="Total Orders" value={12} icon="cart" />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Your Crops</h2>
          <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Post New Crop
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crops.map((crop, index) => (
            <CropCard key={index} crop={crop} action="delete" onDelete={() => handleDeleteCrop(index)} />
          ))}
        </div>
      </div>
      {showModal && <PostCropModal onClose={() => setShowModal(false)} onCropPosted={handleCropPosted} />}
    </div>
  );
}
