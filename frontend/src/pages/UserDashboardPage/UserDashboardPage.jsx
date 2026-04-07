import React from "react";
import ProfileBanner from "../../Components/UserDashboard/ProfileBanner";
import StatsGrid from "../../Components/UserDashboard/Stats";
import AppliedJobs from "../../Components/UserDashboard/AppliedJobs";
import Sidebar from "../../Components/UserDashboard/Sidebar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fb] mt-12 pb-12 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span>Home</span> <span className="mx-2">{'>'}</span> <span className="text-gray-900 font-medium">Dashboard</span>
        </div>

        {/* Banner chứa Avatar và Progress bar */}
        <ProfileBanner />

        {/* 4 Thẻ thống kê */}
        <StatsGrid />

        {/* Chia layout 2 cột: Cột trái (Việc ứng tuyển) - Cột phải (Sidebar) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AppliedJobs />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Sidebar />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;