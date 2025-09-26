"use client";

import { Wheat, ShoppingCart, MapPin, User, Package, DollarSign, Trash2 } from "lucide-react";

interface CropCardProps {
  crop: {
    name: string;
    quantity: number;
    price: number;
    location: string;
    farmerName: string;
    image?: string;
  };
  action: "buy" | "view" | "delete";
  onDelete?: () => void;
}

export default function CropCard({ crop, action, onDelete }: CropCardProps) {
  const price = crop.price || 0;
  const quantity = crop.quantity || 0;

  return (
    <div className="p-6 bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl hover:-translate-y-1 transition-all duration-300 group hover:shadow-green-500/10">
      <div className="relative">
        <img src={crop.image || `https://source.unsplash.com/300x200/?${crop.name.toLowerCase()}`} alt={crop.name} className="rounded-lg mb-4 w-full h-40 object-cover" />
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{crop.name}</h3>
      <div className="mt-4 space-y-3 text-gray-600">
        <div className="flex items-center"><User className="w-5 h-5 mr-3 text-green-500" /><span>{crop.farmerName}</span></div>
        <div className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-green-500" /><span>{crop.location}</span></div>
        <div className="flex items-center"><Package className="w-5 h-5 mr-3 text-green-500" /><span>{quantity.toLocaleString()} kg available</span></div>
        <div className="flex items-center"><DollarSign className="w-5 h-5 mr-3 text-green-500" /><span>${price.toLocaleString()} / kg</span></div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-3xl font-bold text-green-600">${(price * quantity).toLocaleString()}</p>
        {action === "buy" && (
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center font-bold">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Buy Now
          </button>
        )}
        {action === "view" && (
          <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center font-bold">
            View Details
          </button>
        )}
        {action === "delete" && (
          <button onClick={onDelete} className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center font-bold shadow-lg hover:shadow-red-500/30">
            <Trash2 className="w-5 h-5 mr-2" />
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
