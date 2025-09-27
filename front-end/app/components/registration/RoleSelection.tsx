import React, { useEffect } from 'react';
import { useRouter as useNextRouter } from 'next/navigation';
import { X, ArrowLeft, Wheat, ShoppingCart, User, Building, MapPin, Wallet } from 'lucide-react';

interface FarmerFormType {
  fullName: string;
  farmName: string;
  cropType: string;
  location: string;
  wallet: string;
}

interface BuyerFormType {
  fullName: string;
  companyName: string;
  location: string;
  wallet: string;
}

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30
            animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

// System Status Component
const SystemStatus = () => {
  const [statusColor, setStatusColor] = React.useState('bg-green-400');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusColor(prev => 
        prev === 'bg-green-400' ? 'bg-green-300' : 'bg-green-400'
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xs text-gray-600">
      <div className={`w-2 h-2 rounded-full ${statusColor} shadow-lg shadow-green-400/50 transition-colors duration-300`} />
      <div className={`w-1.5 h-1.5 rounded-full ${statusColor} shadow-lg shadow-green-400/50 transition-colors duration-300`} />
      <div className={`w-1 h-1 rounded-full ${statusColor} shadow-lg shadow-green-400/50 transition-colors duration-300`} />
      <span className="ml-2 font-mono tracking-widest text-green-600">SYSTEM_READY</span>
    </div>
  );
};
interface FuturisticRoleModalProps {
  onClose: () => void;
}


export default function FuturisticRoleModal({ onClose }: FuturisticRoleModalProps) {
  const router = useNextRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState<"farmer" | "buyer" | null>(null);
  const [shakeFields, setShakeFields] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Farmer Form State
  const [farmerForm, setFarmerForm] = React.useState<FarmerFormType>({
    fullName: "",
    farmName: "",
    cropType: "",
    location: "",
    wallet: "",
  });

  // Buyer Form State
  const [buyerForm, setBuyerForm] = React.useState<BuyerFormType>({
    fullName: "",
    companyName: "",
    location: "",
    wallet: "",
  });

  // Animate modal in
  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on body
    return () => {
      document.body.style.overflow = 'unset'; // Re-enable scrolling on body
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedRole(null);
      onClose();
    }, 300);
  };

  const handleRoleSelect = (role: "farmer" | "buyer") => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
    setShakeFields([]);
    onClose();
  };

  // Input field with glow effect
  const renderInput = (
    key: string,
    value: string,
    onChange: (value: string) => void,
    placeholder: string,
    IconComponent?: React.ElementType // Add IconComponent prop
  ) => {
    const hasError = shakeFields.includes(key);
    
    return (
      <div className="relative group">
        {IconComponent && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors duration-300">
            <IconComponent className="w-5 h-5" />
          </div>
        )}
        <input
          name={key}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 
            ${IconComponent ? 'pl-12' : ''} // Add left padding if icon exists
            ${hasError 
              ? 'border-red-500 shadow-lg shadow-red-500/30 animate-pulse' 
              : 'border-gray-300 focus:border-cyan-400'
            }
            focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:shadow-lg focus:shadow-cyan-400/20
            transition-all duration-300 text-gray-800 placeholder-gray-500
            ${hasError ? 'animate-shake' : ''}
          `}
        />
        {/* Glow effect on focus */}
        <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none
          ${hasError 
            ? 'bg-red-500/10 shadow-lg shadow-red-500/20' 
            : 'group-focus-within:bg-cyan-400/5 group-focus-within:shadow-lg group-focus-within:shadow-cyan-400/20'
          }`} 
        />
      </div>
    );
  };

  // Form Validation & Submit
  const validateAndSubmit = async (form: any, type: "farmer" | "buyer") => {
    const emptyFields = Object.keys(form).filter((key) => !form[key]);
    const fieldsToShake: string[] = [...emptyFields];

    const isValidWalletAddress = (address: string) => {
      // Basic Ethereum address validation: starts with 0x and followed by 40 hex characters
      return /^0x[a-fA-F0-9]{40}$/.test(address);
    };

    // Wallet address validation
    if (form.wallet && !isValidWalletAddress(form.wallet)) {
      fieldsToShake.push("wallet");
    }
    
    if (fieldsToShake.length > 0) {
      setShakeFields(fieldsToShake);
      setTimeout(() => setShakeFields([]), 600);
      return false;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store in localStorage
    if (type === "farmer") {
      const existingFarmers = JSON.parse(localStorage.getItem("farmers") || "[]");
      const newFarmer = { ...form, id: Date.now(), registrationDate: new Date().toISOString() };
      existingFarmers.push(newFarmer);
      localStorage.setItem("farmers", JSON.stringify(existingFarmers));
      setFarmerForm({ fullName: "", farmName: "", cropType: "", location: "", wallet: "" });
      console.log("Farmer registered and saved to localStorage:", newFarmer);
      localStorage.setItem("currentUserId", newFarmer.id.toString()); // Store current user ID
      localStorage.setItem("currentUserRole", "farmer"); // Store current user role
    } else {
      const existingBuyers = JSON.parse(localStorage.getItem("buyers") || "[]");
      const newBuyer = { ...form, id: Date.now(), registrationDate: new Date().toISOString() };
      existingBuyers.push(newBuyer);
      localStorage.setItem("buyers", JSON.stringify(existingBuyers));
      setBuyerForm({ fullName: "", companyName: "", location: "", wallet: "" });
      console.log("Buyer registered and saved to localStorage:", newBuyer);
      localStorage.setItem("currentUserId", newBuyer.id.toString()); // Store current user ID
      localStorage.setItem("currentUserRole", "buyer"); // Store current user role
    }
    
    setIsSubmitting(false);
    router.push('/dashboard');
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Background floating particles */}
      <FloatingParticles />
      
      <div
        className={`relative z-10 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 
          backdrop-blur-xl border border-white/30 shadow-2xl shadow-cyan-500/20 rounded-3xl 
          p-8 md:p-12 w-[90%] max-w-lg mx-4 transition-all duration-700 ease-out 
          ${isVisible 
            ? "opacity-100 scale-100 translate-y-0 rotate-0" 
            : "opacity-0 scale-90 translate-y-8 rotate-2"
          }`}
      >
        {/* Animated Corner Accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-3 border-l-3 border-cyan-400 rounded-tl-3xl animate-pulse" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-3 border-r-3 border-cyan-400 rounded-tr-3xl animate-pulse" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-3 border-l-3 border-cyan-400 rounded-bl-3xl animate-pulse" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-3 border-r-3 border-cyan-400 rounded-br-3xl animate-pulse" />

        {/* Navigation Button */}
        {selectedRole ? (
          <button
            onClick={handleBack}
            className={`absolute top-6 right-6 p-3 text-gray-500 hover:text-cyan-600 
              hover:bg-cyan-100/50 rounded-full transition-all duration-300 
              hover:scale-110 hover:rotate-180 border-2 border-transparent 
              hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20
              group relative overflow-hidden`}

          >
            <ArrowLeft className="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-lg" />
            {/* Animated ring effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-cyan-400/0 
              group-hover:border-cyan-400/50 scale-150 group-hover:scale-100 
              transition-all duration-300 opacity-0 group-hover:opacity-100`} />
            {/* Pulse effect */}
            <div className={`absolute inset-0 rounded-full bg-cyan-400/20 scale-0 
              group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-50`} />
          </button>
        ) : (
          <button
            onClick={handleClose}
            className={`absolute top-6 right-6 p-3 text-gray-500 hover:text-red-600 
              hover:bg-red-100/50 rounded-full transition-all duration-300 
              hover:scale-110 hover:rotate-90 border-2 border-transparent 
              hover:border-red-300 hover:shadow-lg hover:shadow-red-400/20`}
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Role Selection Screen */}
        {!selectedRole && (
          <div className="text-center pt-4">
            <div className="mb-8">
              <h1 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text 
                bg-gradient-to-r from-gray-800 via-cyan-600 to-purple-600 mb-3 
                tracking-tight animate-pulse`}>
                SELECT ROLE
              </h1>
              <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full 
                shadow-lg shadow-cyan-400/50 animate-pulse`} />
              <p className="text-gray-600 mt-4 text-lg font-medium tracking-wide">
                Initialize Access Protocol
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Farmer Button */}
              <button
                onClick={() => handleRoleSelect("farmer")}
                className={`group relative overflow-hidden flex items-center justify-center gap-6 
                  px-8 py-6 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 
                  text-white rounded-2xl shadow-2xl shadow-green-500/30
                  transition-all duration-500 ease-out transform
                  hover:scale-105 hover:shadow-3xl hover:shadow-green-500/50
                  active:scale-95 border-2 border-green-300/50 hover:border-green-200
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                  before:via-white/20 before:to-transparent before:-translate-x-full 
                  hover:before:translate-x-full before:transition-transform before:duration-700`}
              >
                <div className="relative z-10 p-3 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm
                  group-hover:bg-white/30 transition-all duration-300">
                  <Wheat className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left z-10">
                  <div className="text-2xl md:text-3xl font-black tracking-wide group-hover:text-green-100 transition-colors">
                    FARMER
                  </div>
                  <div className="text-green-100/80 text-sm font-medium uppercase tracking-widest">
                    Production Mode
                  </div>
                </div>
                {/* Particle effects around button */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </button>

              {/* Buyer Button */}
              <button
                onClick={() => handleRoleSelect("buyer")}
                className={`group relative overflow-hidden flex items-center justify-center gap-6 
                  px-8 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
                  text-white rounded-2xl shadow-2xl shadow-orange-500/30
                  transition-all duration-500 ease-out transform
                  hover:scale-105 hover:shadow-3xl hover:shadow-orange-500/50
                  active:scale-95 border-2 border-orange-300/50 hover:border-orange-200
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                  before:via-white/20 before:to-transparent before:-translate-x-full 
                  hover:before:translate-x-full before:transition-transform before:duration-700`}
              >
                <div className="relative z-10 p-3 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm
                  group-hover:bg-white/30 transition-all duration-300">
                  <ShoppingCart className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left z-10">
                  <div className="text-2xl md:text-3xl font-black tracking-wide group-hover:text-orange-100 transition-colors">
                    BUYER
                  </div>
                  <div className="text-orange-100/80 text-sm font-medium uppercase tracking-widest">
                    Acquisition Mode
                  </div>
                </div>
                {/* Particle effects around button */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Farmer Form */}
        {selectedRole === "farmer" && (
          <div className="pt-4">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 text-center">
              FARMER REGISTRATION
            </h2>
            <div className="space-y-4">
              {renderInput(
                "fullName",
                farmerForm.fullName,
                (value) => setFarmerForm({ ...farmerForm, fullName: value }),
                "Full Name",
                User // Pass User icon
              )}
              {renderInput(
                "farmName",
                farmerForm.farmName,
                (value) => setFarmerForm({ ...farmerForm, farmName: value }),
                "Farm Name",
                Building // Pass Building icon
              )}
              {renderInput(
                "cropType",
                farmerForm.cropType,
                (value) => setFarmerForm({ ...farmerForm, cropType: value }),
                "Crop Type",
                Wheat // Pass Wheat icon
              )}
              {renderInput(
                "location",
                farmerForm.location,
                (value) => setFarmerForm({ ...farmerForm, location: value }),
                "Location",
                MapPin // Pass MapPin icon
              )}
              {renderInput(
                "wallet",
                farmerForm.wallet,
                (value) => setFarmerForm({ ...farmerForm, wallet: value }),
                "Wallet Address",
                Wallet // Pass Wallet icon
              )}
              
              <button
                type="button"
                onClick={() => validateAndSubmit(farmerForm, "farmer")}
                disabled={isSubmitting}
                className={`w-full py-4 mt-6 font-bold text-white rounded-2xl 
                  bg-gradient-to-r from-green-500 to-emerald-600 
                  hover:from-green-600 hover:to-emerald-700
                  transform transition-all duration-300 
                  ${isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-105 hover:shadow-lg hover:shadow-green-500/30'
                  }
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                  before:via-white/20 before:to-transparent before:-translate-x-full 
                  hover:before:translate-x-full before:transition-transform before:duration-700`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    PROCESSING...
                  </div>
                ) : (
                  'REGISTER FARMER'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Buyer Form */}
        {selectedRole === "buyer" && (
          <div className="pt-4">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-6 text-center">
              BUYER REGISTRATION
            </h2>
            <div className="space-y-4">
              {renderInput(
                "fullName",
                buyerForm.fullName,
                (value) => setBuyerForm({ ...buyerForm, fullName: value }),
                "Full Name",
                User // Pass User icon
              )}
              {renderInput(
                "companyName",
                buyerForm.companyName,
                (value) => setBuyerForm({ ...buyerForm, companyName: value }),
                "Company Name",
                Building // Pass Building icon
              )}
              {renderInput(
                "location",
                buyerForm.location,
                (value) => setBuyerForm({ ...buyerForm, location: value }),
                "Location",
                MapPin // Pass MapPin icon
              )}
              {renderInput(
                "wallet",
                buyerForm.wallet,
                (value) => setBuyerForm({ ...buyerForm, wallet: value }),
                "Wallet Address",
                Wallet // Pass Wallet icon
              )}
              
              <button
                type="button"
                onClick={() => validateAndSubmit(buyerForm, "buyer")}
                disabled={isSubmitting}
                className={`w-full py-4 mt-6 font-bold text-white rounded-2xl 
                  bg-gradient-to-r from-orange-500 to-pink-600 
                  hover:from-orange-600 hover:to-pink-700
                  transform transition-all duration-300 
                  ${isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30'
                  }
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                  before:via-white/20 before:to-transparent before:-translate-x-full 
                  hover:before:translate-x-full before:transition-transform before:duration-700`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    PROCESSING...
                  </div>
                ) : (
                  'REGISTER BUYER'
                )}
              </button>
            </div>
          </div>
        )}

        {/* System Status */}
        <SystemStatus />
      </div>
      
      {/* Additional CSS for animations */}

    </div>
  );
}