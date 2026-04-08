import React from "react";
import {
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiDollarSign,
  FiUserPlus,
  FiActivity,
  FiSettings,
} from "react-icons/fi";
import RevenueChart from "../../../components/admin/DashBoard/RevenueChart";
import UserGrowthChart from "../../../components/admin/DashBoard/UserGrowthChart";
import StatsGrid from "../../../components/common/StatsGrid";
import { mockUserData } from "../../../mock/userData";
import DataTable from "../../../components/common/JobTable";

const statConfig = {
  APPLIED_JOBS: { icon: FiUsers },
  PROFILE_VIEWS: { icon: FiBriefcase },
  INTERVIEW_INVITES: { icon: FiFileText },
  RESPONSE_RATE: { icon: FiDollarSign },
};

const activityData = [
  {
    action: "User Registered",
    user: "alex.v@techfoundry.io",
    time: "Just now",
  },
  {
    action: "Job Posted",
    user: "Hiring Manager at BluePixel",
    time: "12 mins ago",
  },
  {
    action: "Payment Received",
    user: "Sarah Connor (Premium)",
    time: "25 mins ago",
  },
  {
    action: "User Registered",
    user: "marc.jacobs@creative.co",
    time: "1 hour ago",
  },
  {
    action: "Job Moderation",
    user: "System Bot (Flagged)",
    time: "2 hours ago",
  },
];
// Cấu hình các cột cho bảng Activity
const activityColumns = [
  {
    label: "ACTION",
    key: "action",
    render: (row) => (
      <div className="flex items-center gap-3 font-bold text-slate-700">
        <span className="text-lg">{row.icon}</span>
        {row.action}
      </div>
    ),
  },
  {
    label: "USER",
    key: "user",
    render: (row) => <span className="text-gray-500">{row.user}</span>,
  },
  {
    label: "TIME",
    key: "time",
    render: (row) => <span className="text-gray-400 italic">{row.time}</span>,
  },
];


const AdminDashboard = () => {
  // chuyển đổi dữ liệu statsData thành định dạng phù hợp với StatsGrid
  const transformedStats = mockUserData.statsDashBoardAdmin.map((stat) => {
    // Lấy Icon từ từ điển statConfig dựa trên type
    const config = statConfig[stat.type] || statConfig["APPLIED_JOBS"];
    // Tự định nghĩa màu sắc cho từng loại (để Admin trông chuyên nghiệp hơn)
    const styleMap = {
      APPLIED_JOBS: { color: "text-blue-600", bg: "bg-blue-50" },
      ACTIVE_JOBS: { color: "text-emerald-600", bg: "bg-emerald-50" },
      INTERVIEW_INVITES: { color: "text-amber-600", bg: "bg-amber-50" },
      RESPONSE_RATE: { color: "text-purple-600", bg: "bg-purple-50" },
    };
    const style = styleMap[stat.type] || styleMap.APPLIED_JOBS;
    return {
      id: stat.id,
      title: stat.title,
      value: stat.value,
      icon: config.icon,
      iconColor: style.color,
      iconBgColor: style.bg,
      badge: (
        <span className={`text-xs font-bold ${stat.trendColor}`}>
          {stat.trend}
        </span>
      ),
    };
  });

  return (
    <div className="min-h-screen bg-[#F8F9FB] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* CÁCH DÙNG ĐÚNG: Truyền nguyên mảng transformedStats vào 1 lần duy nhất */}
        <StatsGrid items={transformedStats} />

        {/* Các phần Chart và Table bên dưới giữ nguyên... */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <UserGrowthChart />
          </div>
        </div>

        <DataTable columns={activityColumns} data={activityData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
