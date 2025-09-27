"use client";

import { Wheat, ShoppingCart, MapPin, User, Package, DollarSign, Trash2, Edit } from "lucide-react";

interface CropCardProps {
  crop: {
    name: string;
    quantity: number;
    price: number;
    location: string;
    farmerName: string;
    image?: string;
  };
  action: "buy" | "view" | "delete" | "edit";
  onDelete?: () => void;
  onEdit?: () => void;
}

export default function CropCard({ crop, action, onDelete, onEdit }: CropCardProps) {
  const price = crop.price || 0;
  const quantity = crop.quantity || 0;

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl border-2 border-white/30 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 ease-out hover:-translate-y-2">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-4 sm:p-6">
        <div className="relative">
          <img src={crop.image || `https://source.unsplash.com/400x300/?${crop.name.toLowerCase()}`} alt={crop.name} className="rounded-lg mb-4 w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
          <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">NEW</div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">{crop.name}</h3>
        <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-600 border-t-2 border-gray-200/50 pt-4">
          <div className="flex items-center"><User className="w-5 h-5 mr-3 text-green-500/80 group-hover:text-green-600 transition-colors duration-300" /><span>{crop.farmerName}</span></div>
          <div className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-green-500/80 group-hover:text-green-600 transition-colors duration-300" /><span>{crop.location}</span></div>
          <div className="flex items-center"><Package className="w-5 h-5 mr-3 text-green-500/80 group-hover:text-green-600 transition-colors duration-300" /><span>{quantity.toLocaleString()} kg available</span></div>
          <div className="flex items-center"><DollarSign className="w-5 h-5 mr-3 text-green-500/80 group-hover:text-green-600 transition-colors duration-300" /><span>${price.toLocaleString()} / kg</span></div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-4 sm:mb-0">${(price * quantity).toLocaleString()}</p>
          <div className="flex items-center space-x-2">
            {action === "buy" && (
              <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center font-bold">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </button>
            )}
            {action === "view" && (
              <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center font-bold">
                View Details
              </button>
            )}
            {action === "edit" && (
              <div className="flex items-center space-x-2">
                <button onClick={onEdit} className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 flex items-center justify-center font-bold shadow-lg hover:shadow-blue-500/30">
                  <Edit className="w-5 h-5 mr-2" />
                  Edit
                </button>
                <button onClick={onDelete} className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center font-bold shadow-lg hover:shadow-red-500/30">
                  <Trash2 className="w-5 h-5 mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
