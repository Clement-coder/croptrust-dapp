"use client";

import { useState, useEffect } from "react";
import CropCard from "./CropCard";

export default function CropListing() {
  const [crops, setCrops] = useState<any[]>([]);

  useEffect(() => {
    const allCropsData = JSON.parse(localStorage.getItem("crops") || "{}");
    const allCrops = Object.entries(allCropsData).flatMap(([farmerId, farmerCrops]: [string, any]) => {
      const farmers = JSON.parse(localStorage.getItem("farmers") || "[]");
      const farmer = farmers.find((f: any) => f.id === parseInt(farmerId));
      return farmerCrops.map((crop: any) => ({ ...crop, farmerName: farmer?.fullName, location: farmer?.location }));
    });
    setCrops(allCrops);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {crops.map((crop, index) => (
        <CropCard key={index} crop={crop} action="buy" />
      ))}
    </div>
  );
}
