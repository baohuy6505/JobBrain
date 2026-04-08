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

// --- 1. MOCK DATA ---
const statsData = [
  {
    title: "TOTAL USERS",
    value: "24,892",
    trend: "↗ 12% from last month",
    trendColor: "text-green-500",
    icon: <FiUsers className="w-5 h-5 text-blue-500" />,
    borderColor: "border-green-400",
  },
  {
    title: "ACTIVE JOBS",
    value: "1,402",
    trend: "↗ 5.2% vs yesterday",
    trendColor: "text-green-500",
    icon: <FiBriefcase className="w-5 h-5 text-purple-500" />,
    borderColor: "border-purple-500",
  },
  {
    title: "TRANSACTIONS",
    value: "842",
    trend: "🕒 Last: 2 mins ago",
    trendColor: "text-gray-500",
    icon: <FiFileText className="w-5 h-5 text-blue-400" />,
    borderColor: "border-blue-400",
  },
  {
    title: "REVENUE",
    value: "$128.4k",
    trend: "Target: $150k (85%)",
    trendColor: "text-blue-500",
    icon: <FiDollarSign className="w-5 h-5 text-gray-700" />,
    borderColor: "border-transparent",
  },
];

const activityData = [
  {
    action: "User Registered",
    user: "alex.v@techfoundry.io",
    time: "Just now",
    status: "SUCCESS",
    icon: <FiUserPlus className="text-blue-600" />,
  },
  {
    action: "Job Posted",
    user: "Hiring Manager at BluePixel",
    time: "12 mins ago",
    status: "PENDING",
    icon: <FiFileText className="text-purple-600" />,
  },
  {
    action: "Payment Received",
    user: "Sarah Connor (Premium)",
    time: "25 mins ago",
    status: "SUCCESS",
    icon: <FiDollarSign className="text-blue-600" />,
  },
  {
    action: "User Registered",
    user: "marc.jacobs@creative.co",
    time: "1 hour ago",
    status: "SUCCESS",
    icon: <FiUserPlus className="text-blue-600" />,
  },
  {
    action: "Job Moderation",
    user: "System Bot (Flagged)",
    time: "2 hours ago",
    status: "REJECTED",
    icon: <FiActivity className="text-gray-500" />,
  },
];

// --- 2. SUB-COMPONENTS ---

const StatCard = ({ title, value, trend, trendColor, icon, borderColor }) => (
  <div
    className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden`}
  >
    <div
      className={`absolute top-0 left-0 right-0 h-1 ${borderColor} bg-gradient-to-r`}
    ></div>
    <div className="flex justify-between items-start mb-2 mt-1">
      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
        {title}
      </h3>
      <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h2 className="text-3xl font-extrabold text-slate-800 mb-2">{value}</h2>
    <p className={`text-xs font-semibold ${trendColor}`}>{trend}</p>
  </div>
);

const ActivityTable = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "SUCCESS":
        return (
          <span className="px-3 py-1 text-[10px] font-bold bg-green-100 text-green-600 rounded-full">
            SUCCESS
          </span>
        );
      case "PENDING":
        return (
          <span className="px-3 py-1 text-[10px] font-bold bg-yellow-100 text-yellow-600 rounded-full">
            PENDING
          </span>
        );
      case "REJECTED":
        return (
          <span className="px-3 py-1 text-[10px] font-bold bg-red-100 text-red-600 rounded-full">
            REJECTED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-6 overflow-hidden">
      <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
          <p className="text-sm text-gray-400">
            Real-time audit log of system actions.
          </p>
        </div>
        <button className="text-sm font-bold text-blue-600 hover:text-blue-800">
          View All Records
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="p-4 pl-6 font-semibold">ACTION</th>
              <th className="p-4 font-semibold">USER</th>
              <th className="p-4 font-semibold">TIME</th>
              <th className="p-4 pr-6 font-semibold text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {activityData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 pl-6 text-sm font-bold text-slate-700 flex items-center gap-3">
                  {row.icon}
                  {row.action}
                </td>
                <td className="p-4 text-sm text-gray-500">{row.user}</td>
                <td className="p-4 text-sm text-gray-400">{row.time}</td>
                <td className="p-4 pr-6 text-right">
                  {getStatusBadge(row.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/*phần hiển thị các thống kê chính của hệ thống  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/*phần hiển thị biểu đồ thống kê */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <UserGrowthChart />
          </div>
        </div>

        <ActivityTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
