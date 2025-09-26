"use client";

import { Wheat, ShoppingCart, MapPin, User, Package, DollarSign, Trash2 } from "lucide-react";

interface CropCardProps {
  crop: {
    name: string;
    quantity: number;
    price: number;
    location: string;
    farmerName: string;
  };
  action: "buy" | "view" | "delete";
  onDelete?: () => void;
}

export default function CropCard({ crop, action, onDelete }: CropCardProps) {
  const price = crop.price || 0;
  const quantity = crop.quantity || 0;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 group hover:shadow-blue-400/20">
      <div className="relative">
        <img src="https://via.placeholder.com/300x200.png/22c55e/ffffff?text=CropTrust" alt={crop.name} className="rounded-lg mb-4" />
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</div>
      </div>
      <h3 className="text-xl font-bold text-gray-800">{crop.name}</h3>
      <div className="mt-4 space-y-2 text-gray-600">
        <div className="flex items-center"><User className="w-4 h-4 mr-2" /><span>{crop.farmerName}</span></div>
        <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span>{crop.location}</span></div>
        <div className="flex items-center"><Package className="w-4 h-4 mr-2" /><span>{quantity.toLocaleString()} available</span></div>
        <div className="flex items-center"><DollarSign className="w-4 h-4 mr-2" /><span>{price.toLocaleString()} / unit</span></div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-2xl font-bold text-gray-800">${price.toLocaleString()}</p>
        {action === "buy" && (
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Buy Now
          </button>
        )}
        {action === "view" && (
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center">
            View Details
          </button>
        )}
        {action === "delete" && (
          <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center">
            <Trash2 className="w-5 h-5 mr-2" />
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
