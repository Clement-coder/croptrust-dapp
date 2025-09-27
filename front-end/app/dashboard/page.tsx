"use client";

import { useState, useEffect } from "react";
import DashboardNavBar from "../components/DashboardNavBar";
import { FarmerDashboard } from "../components/dashboard/FarmerDashboard";
import { BuyerDashboard } from "../components/dashboard/BuyerDashboard";

export default function Dashboard() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("currentUserRole");
    const storedId = localStorage.getItem("currentUserId");

    if (storedRole && storedId) {
      setUserRole(storedRole);
      const id = parseInt(storedId);

      if (storedRole === "farmer") {
        const farmers = JSON.parse(localStorage.getItem("farmers") || "[]");
        const currentFarmer = farmers.find((f: any) => f.id === id);
        setUserData(currentFarmer);
      } else if (storedRole === "buyer") {
        const buyers = JSON.parse(localStorage.getItem("buyers") || "[]");
        const currentBuyer = buyers.find((b: any) => b.id === id);
        setUserData(currentBuyer);
      }
    }
  }, []);

  if (!userRole || !userData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavBar />
      <main className="container mx-auto p-6">
        {userRole === "farmer" ? (
          <FarmerDashboard farmer={userData} />
        ) : (
          <BuyerDashboard buyer={userData} />
        )}
      </main>
    </div>
  );
}