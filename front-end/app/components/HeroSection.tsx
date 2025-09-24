import React from 'react';
import { ArrowRight, Shield, DollarSign, Wheat, Star, CheckCircle, ArrowLeftRight, Zap } from 'lucide-react';
import styles from './HeroSection.module.css';
import Link from 'next/link';
import RoleSelectionButton from './ui/RoleSelectionButton';

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-800/80 to-green-700/70"></div>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-emerald-600/30 ${styles.animatePulseSlow}`}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 text-4xl ${styles.animateFloat1}`}>🌾</div>
        <div className={`absolute top-40 right-20 text-3xl ${styles.animateFloat2}`}>🌽</div>
        <div className={`absolute bottom-40 left-20 text-3xl ${styles.animateFloat3}`}>🍅</div>
        <div className={`absolute top-60 left-1/3 text-2xl ${styles.animateFloat1}`}>🥕</div>
        <div className={`absolute bottom-60 right-1/4 text-2xl ${styles.animateFloat2}`}>🌱</div>
      </div>
      

      {/* Main Content */}
      <div className="relative z-10 container mt-10 mx-auto px-6 py-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                  Fair Farming
                </span>
                <span className="block">with Web3</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-green-200">
                  Connecting Farmers Directly to Buyers
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-2xl">
              CropTrust removes middlemen by using blockchain, smart contracts, and stablecoins. 
              Farmers get fair prices. Buyers get transparent, fresh produce straight from the source.
            </p>

            <RoleSelectionButton />


            {/* CTA Style Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-green-300/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-yellow-300 w-6 h-6" />
                <span className="text-yellow-300 font-semibold">Ready to Transform Agriculture?</span>
              </div>
              <p className="text-green-100 mb-4">Join thousands of farmers and buyers creating a fairer food system</p>
              <div className="flex items-center gap-3 text-green-200">
                <span>Explore Marketplace</span>
                <ArrowRight className={`w-5 h-5 ${styles.animateBounceRight}`} />
              </div>

            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/15 backdrop-blur-sm border border-green-300/30 rounded-xl px-4 py-3 flex items-center gap-3">
                <CheckCircle className="text-green-300 w-5 h-5" />
                <span className="text-green-100 font-medium">Trusted by 5,000+ farmers & buyers</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-yellow-300/30 rounded-xl px-4 py-3 flex items-center gap-3">
                <Star className="text-yellow-300 w-5 h-5 fill-current" />
                <span className="text-green-100 font-medium">Rated 4.8/5</span>
              </div>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border border-green-300/30">
                  <Wheat className="w-8 h-8 text-green-300" />
                </div>
                <p className="text-green-200 font-medium">Fair Pricing</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto border border-yellow-300/30">
                  <DollarSign className="w-8 h-8 text-yellow-300" />
                </div>
                <p className="text-green-200 font-medium">Stablecoin Payments</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-300/30">
                  <Shield className="w-8 h-8 text-blue-300" />
                </div>
                <p className="text-green-200 font-medium">Escrow Protection</p>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Central Infinity Loop */}
            <div className="relative w-80 h-80">
              <div className={`absolute inset-0 border-4 border-green-300/30 rounded-full ${styles.animateSpinSlow}`}></div>
              <div className={`absolute inset-4 border-4 border-yellow-300/40 rounded-full ${styles.animateSpinReverse}`}></div>
              
              {/* Infinity Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="infinity-loop">
                  <ArrowLeftRight className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className={`w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg ${styles.animateFloat1}`}>
                  <span className="text-2xl">🚜</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-white text-sm font-medium">Farmers</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className={`w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg ${styles.animateFloat2}`}>
                  <span className="text-2xl">🏪</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-white text-sm font-medium">Buyers</span>
                </div>
              </div>

              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className={`w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg ${styles.animateFloat3}`}>
                  <span className="text-lg">💰</span>
                </div>
              </div>

              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className={`w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg ${styles.animateFloat1}`}>
                  <span className="text-lg">⛓️</span>
                </div>
              </div>
            </div>

            {/* Surrounding Cards */}
            <div className="absolute -top-12 -right-8">
              <div className={`bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-xl ${styles.animateFloat2}`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Smart Contract</p>
                    <p className="text-green-200 text-xs">Executed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 -left-8">
              <div className={`bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-xl ${styles.animateFloat3}`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">💳</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Payment</p>
                    <p className="text-yellow-200 text-xs">Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;