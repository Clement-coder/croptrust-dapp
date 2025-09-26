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
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-purple-400 transition-all duration-300">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{label}</p>
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <p className="text-4xl font-bold text-gray-800 mt-2">
        {isCurrency ? `$${animatedValue.toLocaleString()}` : animatedValue}
      </p>
    </div>
  );
}
