"use client";

import { useState, useEffect } from "react";
import { Wheat, X, DollarSign, Package, Image as ImageIcon } from "lucide-react";

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
}

interface PostCropModalProps {
  onClose: () => void;
  onCropPosted: (newCrop: Pick<Crop, 'name' | 'quantity' | 'price' | 'imageUrl' | 'description'>) => void;
  crop?: Crop;
}

export default function PostCropModal({ onClose, onCropPosted, crop }: PostCropModalProps) {
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [shakeFields, setShakeFields] = useState<string[]>([]);

  useEffect(() => {
    if (crop) {
      setCropName(crop.name);
      setQuantity(crop.quantity.toString());
      setPrice(crop.price.toString());
      setImage(crop.imageUrl || null);
    }
  }, [crop]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emptyFields = [];
    if (!cropName) emptyFields.push("cropName");
    if (!quantity) emptyFields.push("quantity");
    if (!price) emptyFields.push("price");
    if (!image) emptyFields.push("image");

    if (emptyFields.length > 0) {
      setShakeFields(emptyFields);
      setTimeout(() => setShakeFields([]), 600);
      return;
    }

    const newCrop = { name: cropName, quantity: parseInt(quantity), price: parseInt(price), imageUrl: image!, description: '' };
    onCropPosted(newCrop);
    onClose();
  };

  const renderInput = (
    key: string,
    value: string,
    onChange: (value: string) => void,
    placeholder: string,
    type: string = "text",
    icon: React.ReactNode
  ) => {
    const hasError = shakeFields.includes(key);
    return (
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-all duration-300">
          {icon}
        </div>
        <input
          name={key}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-4 pl-12 bg-white/80 backdrop-blur-sm rounded-xl border-2 
            ${hasError ? "border-red-500 shadow-lg shadow-red-500/30 animate-pulse" : "border-gray-300 focus:border-green-500"}
            focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:shadow-lg focus:shadow-green-500/20
            transition-all duration-300 text-gray-800 placeholder-gray-500
            ${hasError ? "animate-shake" : ""}
          `}
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative p-4 sm:p-8 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 backdrop-blur-xl border border-white/30 shadow-2xl shadow-green-500/20 rounded-3xl w-[90%] max-w-lg">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-600 hover:bg-red-100/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
            <Wheat className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
            {crop ? "Edit Crop" : "List a New Crop"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className={`relative group border-2 rounded-xl cursor-pointer ${shakeFields.includes("image") ? "border-red-500 shadow-lg shadow-red-500/30 animate-pulse" : "border-gray-300"}`}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="w-full h-48 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
              {image ? (
                <img src={image} alt="Crop" className="w-full h-full object-cover rounded-xl" />
              ) : (
                <div className="text-center text-gray-400">
                  <ImageIcon className="w-12 h-12 mx-auto" />
                  <p>Click to upload an image</p>
                </div>
              )}
            </div>
          </label>
          {renderInput("cropName", cropName, setCropName, "Crop Name", "text", <Wheat className="w-5 text-gray-600 h-5" />)}
          {renderInput("quantity", quantity, setQuantity, "Quantity (in kg)", "number", <Package className="w-5 text-gray-600 h-5" />)}
          {renderInput("price", price, setPrice, "Price (per kg)", "number", <DollarSign className="w-5 text-gray-600 h-5" />)}
          <button
            type="submit"
            className="w-full py-4 mt-6 font-bold text-white rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            {crop ? "Update Crop" : "Post Crop"}
          </button>
        </form>
      </div>
    </div>
  );
}
