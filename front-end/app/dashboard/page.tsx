"use client";

import { useState, useEffect } from "react";
import FarmerDashboard from "@/app/components/dashboard/FarmerDashboard";
import BuyerDashboard from "@/app/components/dashboard/BuyerDashboard";
import DashboardNavbar from "../components/DashboardNavBar";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<"farmer" | "buyer" | null>(null);

  useEffect(() => {
    // For now, we'll just get the first farmer or buyer from localStorage.
    // In a real app, you'd have a proper login system.
    const farmers = JSON.parse(localStorage.getItem("farmers") || "[]");
    const buyers = JSON.parse(localStorage.getItem("buyers") || "[]");

    if (farmers.length > 0) {
      setUser(farmers[0]);
      setRole("farmer");
    } else if (buyers.length > 0) {
      setUser(buyers[0]);
      setRole("buyer");
    }
  }, []);

  return (
    <div className="bg-gray-100 mx-10 md:mx-24 mt-10 min-h-screen">
      <DashboardNavbar />
      <main className="p-8">
        {user ? (
          role === "farmer" ? (
            <FarmerDashboard farmer={user} />
          ) : (
            <BuyerDashboard buyer={user} />
          )
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-100px)]">
            <div className="text-center">
              <h1 className="text-3xl text-black font-bold">No user data found.</h1>
              <p className="text-gray-500">Please register as a farmer or buyer.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
