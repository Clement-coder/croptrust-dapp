"use client";

import { useState, useEffect } from "react";
import CropCard from "./CropCard";

interface StoredCrop {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
  farmer: {
    name: string;
    avatarUrl: string;
  };
}

interface Crop extends StoredCrop {
  location: string;
  farmerName: string;
}

interface Farmer {
  id: number;
  fullName: string;
  location: string;
}

export default function CropListing() {
  const [crops, setCrops] = useState<Crop[]>([]);

  useEffect(() => {
    const allCropsData = JSON.parse(localStorage.getItem("crops") || "{}");
    const allCrops = Object.entries(allCropsData).flatMap(([farmerId, farmerCrops]: [string, unknown]) => {
      const farmers: Farmer[] = JSON.parse(localStorage.getItem("farmers") || "[]");
      const farmer = farmers.find((f) => f.id === parseInt(farmerId));
      if (!farmer) {
        return [];
      }
      return (farmerCrops as StoredCrop[]).map((crop) => ({
        ...crop,
        farmerName: farmer.fullName,
        location: farmer.location,
      }));
    });
    setCrops(allCrops as Crop[]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {crops.map((crop, index) => (
        <CropCard key={index} crop={crop} action="buy" />
      ))}
    </div>
  );
}
