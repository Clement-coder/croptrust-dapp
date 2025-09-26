"use client";

import { Plus, Wheat, DollarSign, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
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
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    try {
      const allCrops = JSON.parse(localStorage.getItem("crops") || "{}");
      const farmerCrops = allCrops[farmer.id] || [];
      setCrops(farmerCrops);

      const earnings = farmerCrops.reduce((acc: number, crop: any) => acc + crop.price * crop.quantity, 0);
      setTotalEarnings(earnings);

      setTotalOrders(Math.floor(Math.random() * 20) + 5);
    } catch (error) {
      toast.error("Failed to load crops from storage.");
    }
  }, [farmer.id]);

  const handleCropPosted = (newCrop: any) => {
    try {
      const allCrops = JSON.parse(localStorage.getItem("crops") || "{}");
      const farmerCrops = allCrops[farmer.id] || [];
      const updatedCrops = [...farmerCrops, newCrop];
      allCrops[farmer.id] = updatedCrops;
      localStorage.setItem("crops", JSON.stringify(allCrops));
      setCrops(updatedCrops);

      const earnings = updatedCrops.reduce((acc: number, crop: any) => acc + crop.price * crop.quantity, 0);
      setTotalEarnings(earnings);
      toast.success("Crop listed successfully!");
    } catch (error) {
      toast.error("Failed to list crop.");
    }
  };

  const handleDeleteCrop = (cropIndex: number) => {
    try {
      const allCrops = JSON.parse(localStorage.getItem("crops") || "{}");
      const farmerCrops = allCrops[farmer.id] || [];
      const updatedCrops = farmerCrops.filter((_: any, index: number) => index !== cropIndex);
      allCrops[farmer.id] = updatedCrops;
      localStorage.setItem("crops", JSON.stringify(allCrops));
      setCrops(updatedCrops);

      const earnings = updatedCrops.reduce((acc: number, crop: any) => acc + crop.price * crop.quantity, 0);
      setTotalEarnings(earnings);
      toast.success("Crop deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete crop.");
    }
  };

  return (
    <div className="p-8 mx-auto px-6 bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-teal-50/50 text-gray-800 min-h-screen">
      <div className="sticky backdrop-blur-md top-20 z-50 rounded-4xl flex items-center justify-between bg-white/30 py-3 px-6 shadow-lg">
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Farmer Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {farmer.fullName}!</p>
        </div>
        <button onClick={() => setShowModal(true)} className="px-6 py-3 group border border-green-600 cursor-pointer font-bold text-green-800 bg-green-500/10 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 hover:bg-green-500/20">
          <Plus className="w-6 h-6 mr-2 text-green-800 transition-transform duration-300 group-hover:rotate-90" />
          <span className="transition-all duration-300">List New Crop</span>
        </button>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProfileCard user={farmer} role="farmer" />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard label="Total Crops Listed" value={crops.length} icon="wheat" />
          <StatsCard label="Total Earnings" value={totalEarnings} icon="dollar" isCurrency />
          <StatsCard label="Total Orders" value={totalOrders} icon="cart" />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Your Crop Listings</h2>
        </div>
        {crops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop, index) => (
              <CropCard key={index} crop={{...crop, farmerName: farmer.farmName, location: farmer.location}} action="delete" onDelete={() => handleDeleteCrop(index)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-2xl bg-white/50">
            <Wheat className="w-16 h-16 mx-auto text-gray-400" />
            <h3 className="mt-4 text-xl font-bold text-gray-600">No crops listed yet.</h3>
            <p className="mt-2 text-gray-500">Click the "List New Crop" button to get started.</p>
          </div>
        )}
      </div>
      {showModal && <PostCropModal onClose={() => setShowModal(false)} onCropPosted={handleCropPosted} />}
    </div>
  );
}
