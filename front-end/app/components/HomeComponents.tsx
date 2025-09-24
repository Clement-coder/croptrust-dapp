
'use client';

import { ArrowLeftRight, User, MessageSquare, Heart, Clock, ArrowRight, Star, Twitter, Send, Linkedin, Sparkles, TrendingUp, Shield, Zap, Upload, Search, Lock, CheckCircle, Users, DollarSign, Leaf, Smartphone, Globe, Award, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import React, { useState } from "react";
import Link from 'next/link';

const HomeComponents = () => {


  return (
    <div className="relative">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 4s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 5s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-scale-pulse { animation: scale-pulse 3s ease-in-out infinite; }
        .animate-gradient-shift { 
          background: linear-gradient(-45deg, #10b981, #22c55e, #34d399, #16a34a);
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        .group:hover .group-hover\\:animate-bounce { animation: bounce-slow 0.6s ease-in-out; }
      `}</style>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 border-4 border-green-200 rounded-full opacity-30 animate-float-1"></div>
        <div className="absolute top-20 left-20 w-24 h-24 border-4 border-green-300 rounded-full opacity-20 animate-float-2"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left side - Image */}
            <div className="relative animate-slide-up">
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200 opacity-20"></div>
                
                {/* Top image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-float-1">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg animate-float-2">
                    <Leaf className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                
                {/* Bottom image */}
                <div className="relative h-48 mt-4 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-float-3">
                    <Smartphone className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center animate-float-1">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-lg animate-pulse-glow">
                  <div className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Trusted by
                  </div>
                  <div className="text-2xl font-bold text-green-600">5,000+</div>
                  <div className="text-sm text-gray-600">Farmers</div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Advancing innovative farming techniques
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Welcome to Africa's premier Web3 agricultural marketplace. Our innovative platform connects farmers directly to buyers through sustainable farming practices and cutting-edge blockchain technology to optimize crop yields and fair pricing.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Smart Farming */}
                <div className="group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-gray-600 group-hover:text-green-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Farming</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Leveraging advanced technologies and smart farming techniques utilize cutting-edge technology to optimize yields.
                  </p>
                </div>

                {/* Eco-Friendly Methods */}
                <div className="group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-all duration-300">
                    <Shield className="w-6 h-6 text-gray-600 group-hover:text-green-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly Methods</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Implementing the future of agriculture by smart farming techniques using cutting-edge technology to optimize yields.
                  </p>
                </div>

                {/* Professional Advice */}
                <div className="group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-gray-600 group-hover:text-green-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Advice</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Empowering the future of agriculture by smart farming techniques using cutting-edge technology to optimize yields.
                  </p>
                </div>

                {/* Innovation & Growth */}
                <div className="group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-all duration-300">
                    <Zap className="w-6 h-6 text-gray-600 group-hover:text-green-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation & Growth</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Implementing the future of agriculture by smart farming techniques using cutting-edge technology to optimize yields.
                  </p>
                </div>
              </div>

              {/* Green accent bar */}
              <div className="w-2 h-24 bg-green-500 rounded-full ml-auto animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-500 rounded-full animate-float-1"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-500 rounded-full animate-float-2"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-500 rounded-full animate-float-3"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">CropTrust</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of agriculture with our innovative Web3 solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-slide-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-all duration-300 group-hover:animate-pulse-glow">
                <span className="text-3xl group-hover:animate-bounce-slow">👨‍🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Fair Pricing
                <TrendingUp className="w-5 h-5 text-green-600 group-hover:animate-bounce" />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Farmers control their income with direct-to-buyer sales, eliminating exploitative middlemen and ensuring fair compensation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-all duration-300 group-hover:animate-pulse-glow">
                <span className="text-3xl group-hover:animate-bounce-slow">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Stablecoin Payments
                <Zap className="w-5 h-5 text-yellow-600 group-hover:animate-bounce" />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast, inflation-proof payouts using stablecoins, protecting farmers from currency volatility and ensuring instant settlements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300 group-hover:animate-pulse-glow">
                <span className="text-3xl group-hover:animate-bounce-slow">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Escrow Protection
                <Shield className="w-5 h-5 text-blue-600 group-hover:animate-bounce" />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Safe transactions with smart contracts that automatically release payments upon delivery confirmation, protecting both parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl animate-float-1 -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-15 blur-3xl animate-float-2 translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce-slow">
              <Zap className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How It <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience seamless agricultural trading through our revolutionary four-step Web3 process
            </p>
          </div>

          <div className="relative">
            {/* Advanced Connecting Path */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
              <svg className="w-full h-full" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path 
                  d="M0,2 Q25,0 50,2 T100,2" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Animated dots along the path */}
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="group animate-slide-up">
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-glow">
                      <span className="text-white text-xl font-bold">01</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-200 rounded-full animate-ping group-hover:bg-green-300"></div>
                  </div>
                  
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-all duration-300">
                    <Upload className="w-7 h-7 text-green-600 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">List Your Crops</h3>
                  <p className="text-gray-600 leading-relaxed">Upload high-quality images, set competitive prices, and showcase your fresh produce to thousands of potential buyers.</p>
                  
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-3"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group animate-slide-up" style={{animationDelay: '0.1s'}}>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-glow">
                      <span className="text-white text-xl font-bold">02</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full animate-ping group-hover:bg-blue-300"></div>
                  </div>
                  
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300">
                    <Search className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Buyers Discover</h3>
                  <p className="text-gray-600 leading-relaxed">Smart matching algorithms connect your produce with verified buyers seeking exactly what you're offering.</p>
                  
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-1"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-glow">
                      <span className="text-white text-xl font-bold">03</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-200 rounded-full animate-ping group-hover:bg-yellow-300"></div>
                  </div>
                  
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-all duration-300">
                    <Lock className="w-7 h-7 text-yellow-600 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Escrow</h3>
                  <p className="text-gray-600 leading-relaxed">Smart contracts automatically lock buyer payments in escrow, ensuring complete security for both parties.</p>
                  
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-2"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-glow">
                      <span className="text-white text-xl font-bold">04</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-200 rounded-full animate-ping group-hover:bg-purple-300"></div>
                  </div>
                  
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-all duration-300">
                    <CheckCircle className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Payment</h3>
                  <p className="text-gray-600 leading-relaxed">Upon successful delivery confirmation, receive instant stablecoin payments directly to your wallet.</p>
                  
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col items-center mt-20 animate-slide-up" style={{animationDelay: '0.4s'}}>
   <Link href="/Role-Selection">
      <div className="relative group cursor-pointer w-24 h-24">
        {/* Main Button */}
        <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
          <span className="text-white text-xl">
            <ArrowRight/>
          </span>
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
      </div>
    </Link>
            <p className="text-gray-600 mt-6 text-center max-w-md">
              Join thousands of farmers already earning fair prices through our secure Web3 marketplace
            </p>
            
            <div className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 group">
              Start Trading Now
              <Sparkles className="w-4 h-4 inline-block ml-2 group-hover:animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce-slow">
              <MessageCircle className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What People <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from farmers and buyers who are transforming agriculture with CropTrust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "CropTrust changed my life! I now get fair prices for my crops and receive payments instantly. No more waiting for middlemen."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 flex items-center gap-2">
                        Adaora Kalu
                        <Award className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-gray-600 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Farmer, Lagos
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-1"></div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "The transparency is incredible. I know exactly where my produce comes from and can trust the quality every time."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 flex items-center gap-2">
                        Michael Okafor
                        <Award className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-gray-600 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Restaurant Owner, Abuja
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-2"></div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "Smart contracts give me peace of mind. I know my payment is secure and will be released automatically upon delivery."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 flex items-center gap-2">
                        Fatima Ibrahim
                        <Award className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="text-gray-600 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Grocery Chain, Kano
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl animate-float-1 translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-15 blur-3xl animate-float-2 -translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Get in <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to revolutionize your farming experience? Let's discuss how CropTrust can transform your agricultural journey.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-green-600" />
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md bg-gray-50 focus:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      Your Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none group-hover:shadow-md bg-gray-50 focus:bg-white"
                      placeholder="Tell us about your farming goals and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="w-full h-[500px] bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 rounded-3xl relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-400 rounded-full animate-spin"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-emerald-400 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float-1">
                      <MessageSquare className="w-12 h-12 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="absolute top-16 left-16 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-2">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="absolute top-20 right-20 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-3">
                    <Phone className="w-7 h-7 text-purple-600" />
                  </div>
                  
                  <div className="absolute bottom-20 left-20 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-1" style={{animationDelay: '0.5s'}}>
                    <Globe className="w-8 h-8 text-emerald-600" />
                  </div>
                  
                  <div className="absolute bottom-16 right-16 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-2" style={{animationDelay: '1s'}}>
                    <Zap className="w-7 h-7 text-yellow-600" />
                  </div>
                  
                  <div className="absolute top-1/2 left-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float-3" style={{animationDelay: '1.5s'}}>
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                    <path d="M100,100 Q200,150 300,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                    <path d="M300,100 Q250,200 200,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <path d="M150,300 Q300,250 400,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
                  </svg>
                  
                  <div className="absolute top-32 left-32 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-32 right-24 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
                  <div className="absolute top-48 right-32 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.4s'}}></div>
                  <div className="absolute bottom-40 left-40 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-xl animate-float-1">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600">24/7 Support</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-xl animate-float-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">Quick Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full animate-float-1"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-green-700 rounded-full animate-float-2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="space-y-4 animate-slide-up">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-2xl group-hover:animate-bounce-slow">🌱</span>
                <span className="text-2xl font-bold">CropTrust</span>
              </div>
              <p className="text-green-200">Fair Farming with Web3</p>
              <p className="text-green-300 text-sm">
                Connecting farmers directly to buyers through blockchain technology, 
                ensuring fair prices and transparent transactions.
              </p>
            </div>

            <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-green-200 hover:text-white transition-all duration-300 hover:translate-x-2">Home</a>
                <a href="#about" className="block text-green-200 hover:text-white transition-all duration-300 hover:translate-x-2">About</a>
                <a href="#marketplace" className="block text-green-200 hover:text-white transition-all duration-300 hover:translate-x-2">Marketplace</a>
                <a href="#contact" className="block text-green-200 hover:text-white transition-all duration-300 hover:translate-x-2">Contact</a>
              </div>
            </div>

            <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold">Connect With Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 cursor-pointer hover:scale-110 hover:animate-pulse-glow">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 cursor-pointer hover:scale-110 hover:animate-pulse-glow">
                  <Send className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 cursor-pointer hover:scale-110 hover:animate-pulse-glow">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <p className="text-green-300 text-sm">
              © 2025 CropTrust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponents;
