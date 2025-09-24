"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import RoleSelection from "./RoleSelection";

export default function RoleSelectionButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer w-32 h-32"
      >
        {/* Main Button */}
        <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex flex-col items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
          <span className="text-white text-sm md:text-base font-bold tracking-wide mb-1">
            GET STARTED
          </span>
          {/* Animated Arrow */}
          <ArrowRight
            className="w-6 h-6 text-white animate-bounce-x mt-1"
          />
        </div>

        {/* Outer spinning border */}
        <div
          className="absolute inset-0 rounded-full border-2 border-green-300 opacity-30 transition-opacity group-hover:opacity-60"
          style={{ animation: "spin 8s linear infinite" }}
        ></div>

        {/* Inner reverse spinning border */}
        <div
          className="absolute inset-2 rounded-full border-2 border-green-400 opacity-20 transition-opacity group-hover:opacity-40"
          style={{ animation: "spin 6s linear infinite reverse" }}
        ></div>

        {/* Ping effect */}
        <div className="absolute -inset-2 rounded-full border border-green-200 opacity-20 animate-ping"></div>
      </button>

      {open && <RoleSelection onClose={() => setOpen(false)} />}
    </>
  );
}
