'use client'


import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import FuturisticRoleModal from "./RoleSelection";
export default function RoleSelectionButton() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full cursor-pointer overflow-hidden group"
        >
          {/* Main Button */}
          <div className={`relative z-10 w-full px-10 py-4 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 
            rounded-xl flex items-center justify-center gap-3 text-white font-bold tracking-wide 
            shadow-xl transition-all duration-500 transform border-2 border-green-400/30
            ${isHovered ? 'scale-105 shadow-2xl shadow-green-500/40 border-green-300/60' : 'shadow-green-500/20'}
          `}>
            {/* Animated background shimmer */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              transition-transform duration-1000 
              ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} 
            />
            
            {/* Button text */}
            <span className="relative z-10 text-lg font-bold tracking-wider drop-shadow-lg">
              GET STARTED
            </span>
            
            {/* Animated Arrow */}
            <div className="relative">
              <ArrowRight className={`w-6 h-6 text-white transition-all duration-300 drop-shadow-lg
                ${isHovered ? 'translate-x-2 scale-110' : 'animate-bounce'}`} 
              />
              {/* Arrow trail effect */}
              <ArrowRight className={`absolute top-0 left-0 w-6 h-6 text-white/30 transition-all duration-300
                ${isHovered ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'}`} 
              />
            </div>

            {/* Sparkle effects */}
            <Sparkles className={`absolute top-2 right-4 w-4 h-4 text-yellow-300 transition-all duration-500
              ${isHovered ? 'opacity-100 animate-spin' : 'opacity-0'}`} 
            />
            <Sparkles className={`absolute bottom-2 left-4 w-3 h-3 text-yellow-200 transition-all duration-700
              ${isHovered ? 'opacity-100 animate-bounce' : 'opacity-0'}`} 
            />
          </div>

          {/* Outer neon border */}
          <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300
            ${isHovered 
              ? 'border-green-300/80 shadow-lg shadow-green-300/40 scale-105' 
              : 'border-green-400/40 opacity-40 animate-pulse'}`} 
          />

          {/* Inner glowing border */}
          <div className={`absolute inset-1 rounded-xl border transition-all duration-300
            ${isHovered 
              ? 'border-green-200/60 opacity-80' 
              : 'border-green-300/30 opacity-30 animate-pulse'}`} 
          />

          {/* Ping glow effect */}
          <div className={`absolute -inset-1 rounded-xl border border-green-200/30 
            transition-all duration-1000 
            ${isHovered ? 'scale-110 opacity-60' : 'opacity-20 animate-ping'}`} 
          />

          {/* Corner accent lights */}
          <div className={`absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-green-300 to-transparent 
            rounded-tl-xl transition-all duration-300
            ${isHovered ? 'opacity-100 shadow-lg shadow-green-300/50' : 'opacity-50'}`} 
          />
          <div className={`absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-green-300 to-transparent 
            rounded-tr-xl transition-all duration-300
            ${isHovered ? 'opacity-100 shadow-lg shadow-green-300/50' : 'opacity-50'}`} 
          />
          <div className={`absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-tr from-green-300 to-transparent 
            rounded-bl-xl transition-all duration-300
            ${isHovered ? 'opacity-100 shadow-lg shadow-green-300/50' : 'opacity-50'}`} 
          />
          <div className={`absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl from-green-300 to-transparent 
            rounded-br-xl transition-all duration-300
            ${isHovered ? 'opacity-100 shadow-lg shadow-green-300/50' : 'opacity-50'}`} 
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-green-400 rounded-full w-2 h-2 transition-all duration-300
                ${isHovered ? 'opacity-60 animate-bounce' : 'opacity-30 animate-pulse'}`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1.5 + i * 0.3}s`
              }}
            />
          ))}

          {/* Additional particle effects on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`hover-${i}`}
                  className="absolute w-1 h-1 bg-green-300 rounded-full animate-ping"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                    animationDelay: `${Math.random() * 1}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          )}
        </button>

        {/* Status indicator */}
        <div className="flex items-center justify-center mt-3 gap-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-300
            ${isHovered ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' : 'bg-green-500'}`} 
          />
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 delay-75
            ${isHovered ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' : 'bg-green-500'}`} 
          />
          <div className={`w-1 h-1 rounded-full transition-all duration-300 delay-150
            ${isHovered ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' : 'bg-green-500'}`} 
          />
          <span className={`ml-3 text-xs font-mono tracking-widest transition-all duration-300
            ${isHovered ? 'text-green-400 font-bold' : 'text-green-600'}`}>
            SYSTEM_READY
          </span>
        </div>
      </div>

      {open && <FuturisticRoleModal onClose={() => setOpen(false)} />}
    </>
  );
}