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
        className="relative group cursor-pointer"
      >
        {/* Main Button */}
        <div className="w-full px-10 py-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center gap-3 text-white font-bold tracking-wide shadow-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
          GET STARTED
          {/* Animated Arrow */}
          <ArrowRight className="w-6 h-6 text-white animate-bounce" />
        </div>

        {/* Outer border */}
        <div
          className="absolute inset-0 rounded-xl border-2 border-green-300 opacity-30 transition-opacity group-hover:opacity-60"
        ></div>

        {/* Inner border */}
        <div
          className="absolute inset-1 rounded-xl border-2 border-green-400 opacity-20 transition-opacity group-hover:opacity-40"
        ></div>

        {/* Ping glow effect */}
        <div className="absolute inset-0 rounded-xl border border-green-200 opacity-20 animate-ping"></div>
      </button>

      {open && <RoleSelection onClose={() => setOpen(false)} />}
    </>
  );
}
