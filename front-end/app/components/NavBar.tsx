"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, Info, ShoppingCart, Phone, Wallet } from "lucide-react";
import { YourApp } from "./ConnectButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: { name: string; href: string; icon: React.ReactNode }[] = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
    { name: "Marketplace", href: "#marketplace", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Phone className="w-5 h-5" /> },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 
      ${scrolled ? "shadow-lg bg-white/10" : "bg-transparent "}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in">
            <span className="text-2xl">🌱</span>
            <span
              className={`text-2xl font-bold transition-colors duration-300 
              ${scrolled ? "text-green-800" : "text-white"}`}
            >
              CropTrust
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium flex items-center gap-2 transition-all duration-300 group animate-slide-in cursor-pointer
                ${
                  scrolled
                    ? "text-gray-800 hover:text-green-600"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.icon}
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
                  ${scrolled ? "bg-green-600" : "bg-green-400"}`}
                ></span>
              </a>
            ))}
          </div>

          {/* ✅ Animated Connect Wallet Button (desktop) */}
          <div className="hidden md:flex items-center gap-2 animate-float-badge">
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg
              ${
                scrolled
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:scale-105"
                  : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
              }`}
              disabled
            >
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 
            ${
              scrolled
                ? "text-gray-800 bg-white/10 border-gray-300 hover:bg-gray-100/10"
                : "text-white bg-white/10 border-white/20 hover:bg-white/20"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`backdrop-blur-sm rounded-2xl p-6 space-y-4 transition-colors duration-500 
            ${scrolled ? "bg-white/10 border-gray-200" : "bg-white/10 border-white/20"}`}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 font-medium transition-all duration-300 py-2 border-b last:border-b-0 animate-slide-in-mobile cursor-pointer
                ${
                  scrolled
                    ? "text-gray-800 hover:text-green-600 border-gray-200"
                    : "text-white/90 hover:text-white border-white/10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}

            {/* ✅ Animated Connect Wallet Button (mobile) */}
            <div className="flex items-center justify-center mt-6">
              <button
                className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg
                ${
                  scrolled
                    ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:scale-105"
                    : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                }`}
                disabled
              >
                <Wallet className="w-5 h-5" />
                <YourApp/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
