"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, Info, ShoppingCart, Phone, ExternalLink } from "lucide-react";
import { useAccount } from "wagmi";

const dashboardNavLinks = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="w-5 h-5" /> },
  { name: "Dashboard", href: "/dashboard", icon: <Phone className="w-5 h-5" /> },
];

const DashboardNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { isConnected } = useAccount();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "shadow-lg bg-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 animate-fade-in">
          <span className="text-2xl">🌱</span>
          <span className={`text-2xl font-bold ${scrolled ? "text-green-800" : "text-green-800"}`}>
            CropTrust
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {dashboardNavLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 relative font-medium transition-all duration-300 group animate-slide-in cursor-pointer ${
                scrolled ? "text-gray-800 hover:text-green-600" : "text-gray-800 hover:text-green-600"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.icon} {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Web3 Connect Button */}
          {typeof window !== "undefined" && <w3m-button />}
        </div>

        {/* Web3 Badge for Desktop */}
        <div
          className={`hidden md:flex items-center gap-2 rounded-full px-4 py-2 animate-float-badge transition-colors duration-300 ${
            scrolled
              ? "bg-green-500/20 border border-green-600"
              : "bg-green-500/10 border border-green-600"
          }`}
        >
          <ExternalLink className={`w-4 h-4 ${scrolled ? "text-green-800" : "text-green-800"}`} />
          <span className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-green-800" : "text-green-800"}`}>
            Web3 Powered
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg cursor-pointer transition-all duration-300 ${
            scrolled ? "text-green-800 border border-green-600 bg-white/10" : "text-green-800 border border-green-600 bg-white/10"
          }`}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4 ${scrolled ? "bg-white/20" : "bg-white/10"}`}>
          {dashboardNavLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 font-medium py-2 border-b last:border-b-0 animate-slide-in-mobile cursor-pointer ${scrolled ? "text-gray-800" : "text-gray-800"}`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon} {link.name}
            </a>
          ))}

          {/* Mobile Web3 Badge */}
          <div
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 transition-colors duration-300 ${
              scrolled
                ? "bg-green-500/20 border border-green-600"
                : "bg-green-500/10 border border-green-600"
            }`}
          >
            <ExternalLink className={`w-4 h-4 ${scrolled ? "text-green-800" : "text-green-800"}`} />
            <span className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-green-800" : "text-green-800"}`}>
              Web3 Powered
            </span>
          </div>

          {/* Mobile Web3 Button */}
          <div className="flex justify-center mt-4">{typeof window !== "undefined" && <w3m-button />}</div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
