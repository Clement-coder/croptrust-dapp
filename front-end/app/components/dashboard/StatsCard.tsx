"use client";

import { DollarSign, ShoppingCart, Wheat } from "lucide-react";
import { useEffect, useState } from "react";

interface StatsCardProps {
  label: string;
  value: number;
  icon: "wheat" | "cart" | "dollar";
  isCurrency?: boolean;
}

export default function StatsCard({ label, value, icon, isCurrency = false }: StatsCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setAnimatedValue(value));
    return () => cancelAnimationFrame(animation);
  }, [value]);

  const Icon = {
    wheat: Wheat,
    cart: ShoppingCart,
    dollar: DollarSign,
  }[icon];

  return (
    <div className="p-6 hover:-translate-y-1 ease-in-out  bg-gradient-to-br from-orange-200/10 via-orange-300/20 to-yellow-200/30 rounded-2xl shadow-lg border border-orange-200 hover:border-yellow-400 transition-all duration-300">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{label}</p>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-glow">
        <Icon className="w-6 h-6 text-white" />
                    </div>
      </div>
      <p className="text-4xl font-bold text-gray-800 mt-2">
        {isCurrency ? `$${animatedValue.toLocaleString()}` : animatedValue}
      </p>
      
    </div>
    
  );
}
