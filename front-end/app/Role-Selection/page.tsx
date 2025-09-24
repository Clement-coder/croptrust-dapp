'use client'

import { useState } from "react";
import { Wheat, ShoppingCart, X } from "lucide-react";

export default function RoleSelection() {
  const [isVisible, setIsVisible] = useState(true);
const [selectedRole, setSelectedRole] = useState<"farmer" | "buyer" | null>(null);

  const handleRole = (role: "farmer" | "buyer") => {
    setSelectedRole(role);
    // Add a small delay for the press animation
    setTimeout(() => {
      console.log(`Navigating to /register/${role}`);
      // In a real Next.js app, you would navigate here
      window.location.href = `/register/${role}`;
    }, 200);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      console.log("Navigating to home page");
      window.location.href = "/";
    }, 300);
  };

  return (
    <div className="fixed inset-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-2000/20 via-gray-100/20 to-green-300/20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>
      
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-20" 
           style={{backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)', 
                   backgroundSize: '50px 50px'}}>
      </div>

      {/* Blurred Background Overlay */}
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Modal Container */}
      <div 
        className={`relative z-10 bg-gradient-to-br from-white/95 to-gray-100/90 backdrop-blur-xl border-2 border-green-200/50 shadow-2xl shadow-green-500/20 rounded-3xl p-10 md:p-14 w-[90%] max-w-lg mx-4 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0 rotate-0' 
            : 'opacity-0 scale-95 translate-y-12 rotate-1'
        }`}
      >
        {/* Futuristic Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-400 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-400 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-400 rounded-br-3xl"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-3 text-gray-500 hover:text-gray-800 hover:bg-green-100/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 border-2 border-transparent hover:border-green-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="text-center mt-4">
          {/* Glowing Title */}
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-green-600 to-gray-800 mb-3 tracking-tight">
              CHOOSE ROLE
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-gray-600 mb-10 text-lg font-medium">
            Initialize your platform access protocol
          </p>

          <div className="flex flex-col gap-8">
           {/* Farmer Button */}
<button
  onClick={() => handleRole("farmer")}
  className={`group relative overflow-hidden flex items-center justify-center gap-8 px-14 py-12 
             bg-gradient-to-r from-green-500 via-green-400 to-green-500 
             text-white rounded-2xl shadow-2xl shadow-green-500/30
             transition-all duration-500 ease-out transform
             hover:scale-105 hover:shadow-3xl hover:shadow-green-500/40
             active:scale-95 active:shadow-lg
             border-2 border-green-300/50 hover:border-green-200
             ${selectedRole === 'farmer' ? 'animate-pulse scale-95' : ''}
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-transparent before:via-white/30 before:to-transparent
             before:translate-x-[-300%] before:skew-x-12
             hover:before:translate-x-[300%] before:transition-transform before:duration-1000`}
>
  <div className="relative">
    <div className="p-6 bg-white/20 rounded-2xl border-2 border-white/30 backdrop-blur-sm">
      <Wheat className="w-12 h-12 md:w-14 md:h-14" />
    </div>
    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm"></div>
  </div>
  
  <div className="text-left z-10">
    <div className="text-3xl md:text-4xl font-black tracking-wide">FARMER</div>
    <div className="text-green-100 text-base md:text-lg font-medium uppercase tracking-widest">
      Production Mode
    </div>
  </div>
</button>

{/* Buyer Button */}
<button
  onClick={() => handleRole("buyer")}
  className={`group relative overflow-hidden flex items-center justify-center gap-8 px-14 py-12 
             bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 
             text-white rounded-2xl shadow-2xl shadow-gray-500/30
             transition-all duration-500 ease-out transform
             hover:scale-105 hover:shadow-3xl hover:shadow-gray-500/40
             active:scale-95 active:shadow-lg
             border-2 border-gray-300/50 hover:border-gray-200
             ${selectedRole === 'buyer' ? 'animate-pulse scale-95' : ''}
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-transparent before:via-white/30 before:to-transparent
             before:translate-x-[-300%] before:skew-x-12
             hover:before:translate-x-[300%] before:transition-transform before:duration-1000`}
>
  <div className="relative">
    <div className="p-6 bg-white/20 rounded-2xl border-2 border-white/30 backdrop-blur-sm">
      <ShoppingCart className="w-12 h-12 md:w-14 md:h-14" />
    </div>
    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm"></div>
  </div>
  
  <div className="text-left z-10">
    <div className="text-3xl md:text-4xl font-black tracking-wide">BUYER</div>
    <div className="text-gray-100 text-base md:text-lg font-medium uppercase tracking-widest">
      Acquisition Mode
    </div>
  </div>
</button>

          </div>

          {/* Status Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-500 text-sm font-mono tracking-wider">SYSTEM_READY</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}