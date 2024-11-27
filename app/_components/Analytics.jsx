"use client";
import { useState } from "react";
import BarChartGraph from "@/app/_components/BarChart";
import MainContentHeader from "@/app/_components/MainContentHeader";

function Analytics() {
  // Sample data for monthly, weekly, and yearly
  const [dataPeriod, setDataPeriod] = useState("monthly");

  const metricsData = {
    monthly: {
      totalUsers: "1,234,567",
      sessions: "25,000",
      newSignups: "1,234",
      activeUsers: "85%",
    },
    weekly: {
      totalUsers: "250,000",
      sessions: "6,000",
      newSignups: "350",
      activeUsers: "80%",
    },
    yearly: {
      totalUsers: "5,000,000",
      sessions: "300,000",
      newSignups: "10,000",
      activeUsers: "90%",
    },
  };

  const currentMetrics = metricsData[dataPeriod];

  return (
    <div className="h-screen pb-24">
      <MainContentHeader tabname="Analytics" />

      <div className="mx-8 h-full flex flex-col items-center justify-center space-y-8">
        {/* Data Period Selector */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
              dataPeriod === "monthly"
                ? "bg-fuchsia-500 text-white"
                : "bg-white text-fubg-fuchsia-500 border border-fubg-fuchsia-500"
            }`}
            onClick={() => setDataPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
              dataPeriod === "weekly"
                ? "bg-fuchsia-500 text-white"
                : "bg-white text-fubg-fuchsia-500 border border-fubg-fuchsia-500"
            }`}
            onClick={() => setDataPeriod("weekly")}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
              dataPeriod === "yearly"
                ? "bg-fuchsia-500 text-white"
                : "bg-white text-fubg-fuchsia-500 border border-fubg-fuchsia-500"
            }`}
            onClick={() => setDataPeriod("yearly")}
          >
            Yearly
          </button>
        </div>
        {/* Metrics Data Section */}
        <div className="w-full max-w-[700px] bg-gradient-to-r from-teal-400 via-green-400 to-fubg-fuchsia-500 p-6 rounded-xl shadow-xl border-2 border-transparent hover:shadow-2xl transition-all backdrop-blur-md">
          <div className="flex justify-between text-white">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                Current Metrics (
                {dataPeriod.charAt(0).toUpperCase() + dataPeriod.slice(1)})
              </h2>
              <p className="text-lg">Overview of the system performance</p>
            </div>
            <div className="space-y-4">
              <div className="text-sm">Total Users</div>
              <div className="text-xl font-semibold">
                {currentMetrics.totalUsers}
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-white">
            <div className="bg-white bg-opacity-10 text-center p-4 rounded-lg shadow-md">
              <p className="text-sm">Sessions</p>
              <p className="text-lg font-bold">{currentMetrics.sessions}</p>
            </div>
            <div className="bg-white bg-opacity-10 text-center p-4 rounded-lg shadow-md">
              <p className="text-sm">New Signups</p>
              <p className="text-lg font-bold">{currentMetrics.newSignups}</p>
            </div>
            <div className="bg-white bg-opacity-10 text-center p-4 rounded-lg shadow-md">
              <p className="text-sm">Active Users</p>
              <p className="text-lg font-bold">{currentMetrics.activeUsers}</p>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="w-full max-w-[700px] mt-12 p-6  bg-gradient-to-r from-teal-400 via-green-400 to-fubg-fuchsia-500 p-6 rounded-xl shadow-xl border-2 border-transparent hover:shadow-2xl transition-all backdrop-blur-md">
          <BarChartGraph />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
