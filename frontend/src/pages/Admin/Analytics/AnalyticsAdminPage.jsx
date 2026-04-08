import React from "react";
import {
  FiCalendar,
  FiDownload,
  FiEye,
  FiUsers,
  FiFilter,
  FiShare2,
  FiBarChart2,
  FiTrendingUp,
  FiMoreHorizontal
} from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import SourceDonutChart from "../../../components/admin/Analytics/SourceDonutChart";
// ==========================================
// 1. MOCK DATA
// ==========================================
const kpiData = [
  { title: "TOTAL IMPRESSIONS", value: "45.2K", trend: "+ 12%", trendType: "up", icon: <FiEye className="text-blue-500" /> },
  { title: "TOTAL APPLICANTS", value: "1,248", trend: "+ 8%", trendType: "up", icon: <FiUsers className="text-purple-500" /> },
  { title: "CONVERSION RATE", value: "2.76%", trend: "+ 0.6%", trendType: "up", icon: <FiFilter className="text-orange-500" /> },
  { title: "COST PER APPLICANT", value: "20.000 VNĐ", trend: "Stable", trendType: "neutral", icon: <BsCashCoin className="text-gray-500" /> },
];

const funnelData = [
  { stage: "APPLIED", count: "1,248", percentage: 100, color: "bg-blue-600", drop: null },
  { stage: "SCREENING", count: "812", percentage: 65, color: "bg-purple-600", drop: "-35% Drop" },
  { stage: "INTERVIEW", count: "274", percentage: 22, color: "bg-green-500", drop: "-43% Drop" },
  { stage: "OFFERED", count: "98", percentage: 8, color: "bg-orange-500", drop: "-14% Drop" },
];

const sourceData = [
  { name: "Direct Applied", value: 45, color: "#2563EB" },
  { name: "LinkedIn", value: 30, color: "#7C3AED" },
  { name: "Referrals", value: 15, color: "#10B981" },
  { name: "Other", value: 10, color: "#F59E0B" },
];

const performanceData = [
  { date: "OCT 01", current: 200, previous: 150 },
  { date: "OCT 08", current: 320, previous: 220 },
  { date: "OCT 15", current: 480, previous: 380 },
  { date: "OCT 22", current: 300, previous: 200 },
  { date: "OCT 30", current: 150, previous: 180 },
];

const jobsData = [
  { title: "Senior Product Designer", dept: "Full-time • Ho Chi Minh City", views: "12,450", applicants: "458", time: "12 Days", status: "ACTIVE" },
  { title: "Lead Full Stack Engineer", dept: "Remote • Tech Team", views: "8,920", applicants: "312", time: "18 Days", status: "ACTIVE" },
  { title: "Marketing Operations Manager", dept: "Full-time • Hanoi", views: "4,120", applicants: "145", time: "24 Days", status: "URGENT" },
  { title: "QA Automation Lead", dept: "Contract • Engineering", views: "2,450", applicants: "89", time: "7 Days", status: "DRAFT" },
];

// ==========================================
// 2. SUB-components
// ==========================================

const KpiCard = ({ title, value, trend, trendType, icon }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start mb-4">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
        {icon}
      </div>
      <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${
        trendType === 'up' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
      }`}>
        {trendType === 'up' && <FiTrendingUp className="inline mr-1 mb-0.5" />}
        {trend}
      </div>
    </div>
    <div>
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</h3>
      <div className="text-2xl font-extrabold text-slate-800">{value}</div>
    </div>
  </div>
);

const FunnelChart = () => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-6">
      <FiFilter className="text-blue-500" /> Recruitment Funnel
    </h3>
    <div className="flex-1 flex flex-col justify-center">
      {funnelData.map((item, index) => (
        <div key={item.stage} className="relative mb-6 last:mb-0">
          {/* Drop-off indicator */}
          {item.drop && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <MdOutlineExpandMore className="text-gray-300" />
              <span className="absolute left-full ml-4 text-[10px] font-bold text-red-500 whitespace-nowrap">
                {item.drop}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            <span className="w-20 text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0">
              {item.stage}
            </span>
            <div className="flex-1 h-10 bg-gray-50 rounded-lg overflow-hidden flex relative">
              <div 
                className={`h-full ${item.color} rounded-lg flex items-center px-4 justify-between transition-all duration-1000 shadow-inner`}
                style={{ width: `${item.percentage}%` }}
              >
                <span className="text-white font-bold text-sm">{item.count}</span>
                <span className="text-white/80 font-semibold text-xs">{item.percentage}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);


const ApplicantPerformanceChart = () => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-6">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
        <FiBarChart2 className="text-blue-500" /> Applicant Performance Over Time
      </h3>
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
        <div className="flex items-center gap-1.5 text-slate-600">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div> Current Period
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <div className="w-2 h-2 rounded-full bg-gray-200"></div> Previous Period
        </div>
      </div>
    </div>
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={performanceData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barGap={0}>
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: "bold" }} 
            dy={10} 
          />
          <YAxis hide />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="previous" fill="#F3F4F6" radius={[4, 4, 0, 0]} barSize={40} />
          <Bar dataKey="current" fill="#2563EB" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const JobsTable = () => {
  const getBadge = (status) => {
    const styles = {
      ACTIVE: "bg-blue-100 text-blue-600",
      URGENT: "bg-orange-100 text-orange-600",
      DRAFT: "bg-gray-100 text-gray-500"
    };
    return (
      <span className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-6 overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-gray-50">
        <h3 className="text-sm font-bold text-slate-800">Top Performing Jobs</h3>
        <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
          View All Jobs
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <th className="p-4 pl-6">JOB TITLE</th>
              <th className="p-4">VIEWS</th>
              <th className="p-4">APPLICANTS</th>
              <th className="p-4">TIME TO HIRE</th>
              <th className="p-4 pr-6 text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {jobsData.map((job, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                <td className="p-4 pl-6">
                  <div className="text-sm font-bold text-slate-800 mb-0.5">{job.title}</div>
                  <div className="text-[11px] text-gray-400 font-medium">{job.dept}</div>
                </td>
                <td className="p-4 text-sm font-semibold text-slate-600">{job.views}</td>
                <td className="p-4 text-sm font-semibold text-slate-600">{job.applicants}</td>
                <td className="p-4 text-sm font-semibold text-slate-600">{job.time}</td>
                <td className="p-4 pr-6 text-right">{getBadge(job.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN DASHBOARD PAGE
// ==========================================

const CandidatesAdminPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          {kpiData.map((kpi, index) => (
            <KpiCard key={index} {...kpi} />
          ))}
        </div>

        {/* Funnel & Donut Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FunnelChart />
          </div>
          <div className="lg:col-span-1">
            <SourceDonutChart />
          </div>
        </div>

        {/* Performance Bar Chart */}
        <ApplicantPerformanceChart />

        {/* Top Jobs Table */}
        <JobsTable />

      </div>
    </div>
  );
};

export default CandidatesAdminPage;