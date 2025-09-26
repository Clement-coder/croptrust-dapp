"use client";

import { useState } from "react";
import { Wheat, X } from "lucide-react";

interface PostCropModalProps {
  onClose: () => void;
  onCropPosted: (newCrop: any) => void;
}

export default function PostCropModal({ onClose, onCropPosted }: PostCropModalProps) {
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCrop = { name: cropName, quantity: parseInt(quantity), price: parseInt(price) };
    onCropPosted(newCrop);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative p-8 bg-white rounded-2xl shadow-lg w-[90%] max-w-lg">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-4 mb-6">
          <Wheat className="w-8 h-8 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-800">Post a New Crop</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Crop Name"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none"
          />
          <button type="submit" className="w-full py-4 mt-4 font-bold text-white rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition-transform">
            Post Crop
          </button>
        </form>
      </div>
    </div>
  );
}
