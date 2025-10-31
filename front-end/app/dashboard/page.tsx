"use client";

import { useState } from "react";
import DashboardNavBar from "../components/DashboardNavBar";
import FarmerDashboard from "../components/dashboard/FarmerDashboard";
import BuyerDashboard from "../components/dashboard/BuyerDashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("farmer");

  // Dummy data for a user who is both a farmer and a buyer
  const dummyUser = {
    id: 1,
    fullName: "Alex Doe",
    companyName: "Alex's Organics",
    farmName: "Green Valley Farms",
    cropType: "Organic Vegetables",
    location: "California, USA",
    wallet: "0x1234...5678"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavBar />
      <main className="container mx-auto p-6">
        <div className="mb-8">
          <div className="flex border-b border-gray-300">
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "farmer"
                  ? "border-b-2 border-green-500 text-green-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("farmer")}
            >
              Farmer Dashboard
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "buyer"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("buyer")}
            >
              Buyer Dashboard
            </button>
          </div>
        </div>

        {activeTab === "farmer" ? (
          <FarmerDashboard farmer={dummyUser} />
        ) : (
          <BuyerDashboard buyer={dummyUser} />
        )}
      </main>
    </div>
  );
}