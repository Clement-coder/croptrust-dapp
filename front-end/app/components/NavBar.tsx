"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, Info, ShoppingCart, Phone, Sparkles, Users, Wheat, ArrowRight, Link as LinkIcon } from "lucide-react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
  { name: "Marketplace", href: "#marketplace", icon: <ShoppingCart className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="w-5 h-5" /> },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const { isConnected } = useAccount();
  const router = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open role selection modal when wallet is connected
  useEffect(() => {
    if (isConnected) {
      const savedRole = localStorage.getItem("userRole");
      if (!savedRole) setShowModal(true);
    }
  }, [isConnected]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    localStorage.setItem("userRole", role);

    setTimeout(() => {
      setShowModal(false);
      if (role === "farmer") router.push("/register/farmer");
      else if (role === "buyer") router.push("/register/buyer");
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
          scrolled ? "shadow-lg bg-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in">
            <span className="text-2xl">🌱</span>
            <span className={`text-2xl font-bold ${scrolled ? "text-green-800" : "text-white"}`}>
              CropTrust
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 relative font-medium transition-all duration-300 group animate-slide-in cursor-pointer ${
                  scrolled ? "text-gray-800 hover:text-green-600" : "text-white/90 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.icon} {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Web3 Button */}
            <w3m-button />
          </div>

          {/* Web3 Badge for Desktop */}
          <div className="hidden md:flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-300/30 rounded-full px-4 py-2 animate-float-badge">
            <LinkIcon className="w-4 h-4 text-green-300" />
            <span className="text-green-100 font-medium text-sm">Web3 Powered</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled ? "text-green-800 bg-white/10" : "text-white bg-white/10"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 font-medium py-2 border-b last:border-b-0 text-white animate-slide-in-mobile cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon} {link.name}
              </a>
            ))}

            {/* Mobile Web3 Powered Badge */}
            <div className="flex items-center justify-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-300/30 rounded-full px-4 py-3 mt-4">
              <LinkIcon className="w-4 h-4 text-green-300" />
              <span className="text-green-100 font-medium text-sm">Web3 Powered</span>
            </div>

            {/* Mobile Web3 Button */}
            <div className="flex justify-center mt-4">
              
            </div>
          </div>
        </div>
      </nav>

      {/* Role Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-modal-backdrop">
          <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md text-center space-y-8 border border-white/20 shadow-2xl animate-modal-content">
            {/* Floating Background */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-green-400/10 rounded-full animate-float-slow"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-400/10 rounded-full animate-float-slower"></div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm border border-emerald-200/30 animate-bounce-gentle">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-emerald-700 to-cyan-700 bg-clip-text text-transparent">
                  Choose Your Path
                </h2>
                <p className="text-gray-600/80 text-lg font-medium">
                  Select your role to get started
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Farmer */}
              <button
                onClick={() => handleRoleSelect("farmer")}
                className={`group relative w-full p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 overflow-hidden transform hover:scale-105 hover:shadow-xl ${
                  selectedRole === "farmer"
                    ? "bg-gradient-to-r from-green-500/90 to-emerald-500/90 border-green-300/50 shadow-green-500/25 shadow-lg"
                    : "bg-gradient-to-r from-green-400/20 to-emerald-400/20 border-green-300/30 hover:from-green-400/30 hover:to-emerald-400/30 hover:border-green-300/50"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                      <span className="text-2xl animate-bounce-subtle">👨‍🌾</span>
                    </div>
                    <div className="text-left">
                      <h3 className={`text-xl font-bold ${selectedRole === "farmer" ? "text-white" : "text-gray-800"}`}>
                        Farmer
                      </h3>
                      <p className={`text-sm ${selectedRole === "farmer" ? "text-green-100" : "text-gray-600"}`}>
                        Grow & Sell Crops
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wheat className={`w-5 h-5 ${selectedRole === "farmer" ? "text-green-100" : "text-green-600"}`} />
                    <ArrowRight className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ${selectedRole === "farmer" ? "text-white" : "text-gray-600"}`} />
                  </div>
                </div>
              </button>

              {/* Buyer */}
              <button
                onClick={() => handleRoleSelect("buyer")}
                className={`group relative w-full p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 overflow-hidden transform hover:scale-105 hover:shadow-xl ${
                  selectedRole === "buyer"
                    ? "bg-gradient-to-r from-blue-500/90 to-cyan-500/90 border-blue-300/50 shadow-blue-500/25 shadow-lg"
                    : "bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border-blue-300/30 hover:from-blue-400/30 hover:to-cyan-400/30 hover:border-blue-300/50"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                      <span className="text-2xl animate-bounce-subtle">🛒</span>
                    </div>
                    <div className="text-left">
                      <h3 className={`text-xl font-bold ${selectedRole === "buyer" ? "text-white" : "text-gray-800"}`}>Buyer</h3>
                      <p className={`text-sm ${selectedRole === "buyer" ? "text-blue-100" : "text-gray-600"}`}>Purchase Fresh Produce</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingCart className={`w-5 h-5 ${selectedRole === "buyer" ? "text-blue-100" : "text-blue-600"}`} />
                    <ArrowRight className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ${selectedRole === "buyer" ? "text-white" : "text-gray-600"}`} />
                  </div>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200/30">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <Users className="w-3 h-3" />
                Join thousands of users on CropTrust
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
