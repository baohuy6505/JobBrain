import React from "react";
import {
  FiCalendar,
  FiEye,
  FiUsers,
  FiFilter,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SourceDonutChart from "../../../components/admin/Analytics/SourceDonutChart";

// 1. MOCK DATA (Giữ nguyên của bạn)
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

// 2. SUB-COMPONENTS FIX

const KpiCard = ({ title, value, trend, trendType, icon }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[140px]">
    <div className="flex justify-between items-start">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
        {icon}
      </div>
      <div className={`px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap ${
        trendType === 'up' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
      }`}>
        {trendType === 'up' && <FiTrendingUp className="inline mr-1 mb-0.5" />}
        {trend}
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">{title}</h3>
      <div className="text-2xl font-extrabold text-slate-800">{value}</div>
    </div>
  </div>
);

const FunnelChart = () => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-8">
      <FiFilter className="text-blue-500" /> Recruitment Funnel
    </h3>
    <div className="flex-1 flex flex-col justify-around min-h-[300px]">
      {funnelData.map((item, index) => (
        <div key={item.stage} className="relative mb-4 last:mb-0">
          {item.drop && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
              <MdOutlineExpandMore className="text-gray-300 text-xl" />
              <span className="text-[9px] font-bold text-red-500 bg-white px-1 -mt-1 uppercase">
                {item.drop}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-3 md:gap-4">
            <span className="w-16 md:w-20 text-right text-[9px] font-bold text-gray-400 uppercase tracking-wider shrink-0">
              {item.stage}
            </span>
            <div className="flex-1 h-9 bg-gray-50 rounded-lg overflow-hidden flex relative">
              <div 
                className={`h-full ${item.color} rounded-lg flex items-center px-3 justify-between transition-all duration-1000 shadow-sm`}
                style={{ width: `${item.percentage}%`, minWidth: '40px' }}
              >
                <span className="text-white font-bold text-xs">{item.count}</span> 
                <span className="text-white/70 font-bold text-[10px]">{item.percentage}%</span>
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
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
        <FiBarChart2 className="text-blue-500" /> Applicant Performance
      </h3>
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
        <div className="flex items-center gap-1.5 text-slate-600">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div> Current
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <div className="w-2 h-2 rounded-full bg-gray-200"></div> Previous
        </div>
      </div>
    </div>
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: "bold" }} 
            dy={10} 
          />
          <YAxis axisLine={false} tickLine={false} tick={false} />
          <Tooltip 
            cursor={{ fill: '#F9FAFB' }}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="previous" fill="#E5E7EB" radius={[4, 4, 0, 0]} barSize={32} />
          <Bar dataKey="current" fill="#2563EB" radius={[4, 4, 0, 0]} barSize={32} />
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
      <span className={`px-3 py-1 rounded-md text-[9px] font-bold tracking-wider ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-6 overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-gray-50">
        <h3 className="text-sm font-bold text-slate-800">Top Performing Jobs</h3>
        <button className="text-[11px] font-bold text-blue-600 hover:underline">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
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
              <tr key={idx} className="hover:bg-gray-50/10 transition-colors">
                <td className="p-4 pl-6">
                  <div className="text-sm font-bold text-slate-800">{job.title}</div>
                  <div className="text-[10px] text-gray-400 font-medium">{job.dept}</div>
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

// 3. MAIN DASHBOARD PAGE
const CandidatesAdminPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 lg:p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiData.map((kpi, index) => (
            <KpiCard key={index} {...kpi} />
          ))}
        </div>

        {/* Charts Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2">
            <FunnelChart />
          </div>
          <div className="lg:col-span-1 h-full">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col p-6">
               <SourceDonutChart />
            </div>
          </div>
        </div> */}

        {/* Performance & Table */}
        <ApplicantPerformanceChart />
        <JobsTable />

      </div>
    </div>
  );
};

export default CandidatesAdminPage;