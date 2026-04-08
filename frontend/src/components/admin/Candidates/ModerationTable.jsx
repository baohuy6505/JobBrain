import React from "react";
import JobTable from "../../../components/common/JobTable";
import { Pagination } from "../../../components/common/Pagination";
import { HiOutlineEye } from "react-icons/hi";
import { HiFlag, HiOutlineClock } from "react-icons/hi2";

// Hàm hỗ trợ: Lấy 2 chữ cái đầu của tên Công ty
const getInitials = (name) => {
  const words = name.split(" ");
  return (words[0][0] + (words[1] ? words[1][0] : "")).toUpperCase();
};

// Hàm hỗ trợ: Render màu sắc cho Risk Score
const renderRiskScore = (score) => {
  if (score >= 80) return <span className="border border-red-200 text-red-600 bg-red-50 px-3 py-1 rounded-full text-xs font-bold">{score} / 100</span>;
  if (score >= 40) return <span className="border border-orange-200 text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-xs font-bold">{score} / 100</span>;
  return <span className="border border-blue-200 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs font-bold">{score} / 100</span>;
};

// Hàm hỗ trợ: Render Status Pill
const renderStatus = (status) => {
  if (status === "Flagged") {
    return <span className="flex items-center gap-1.5 w-max bg-red-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide shadow-sm"><HiFlag /> Flagged</span>;
  }
  return <span className="flex items-center gap-1.5 w-max bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide"><HiOutlineClock /> Pending</span>;
};

const ModerationTable = ({ data, params, isLoading, onParamChange }) => {
  
  const columns = [
    {
      key: "job",
      label: "JOB TITLE & COMPANY",
      render: (job) => (
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm ${job.riskScore >= 80 ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
            {getInitials(job.company)}
          </div>
          <div>
            <span className="font-bold text-gray-900 text-sm block mb-0.5">{job.title}</span>
            <span className="text-xs text-gray-500">{job.company}</span>
          </div>
        </div>
      )
    },
    {
      key: "postedDate",
      label: "POSTED DATE",
      render: (job) => <span className="text-gray-500 font-medium text-sm">{job.postedDate}</span>
    },
    {
      key: "riskScore",
      label: "RISK SCORE",
      render: (job) => renderRiskScore(job.riskScore)
    },
    {
      key: "status",
      label: "STATUS",
      render: (job) => renderStatus(job.status)
    },
    {
      key: "actions",
      label: "ACTIONS",
      render: () => (
        <div className="flex items-center justify-end gap-3">
          <button className="text-gray-400 hover:text-gray-700 transition-colors">
            <HiOutlineEye className="text-xl" />
          </button>
          <button className="border border-red-500 text-red-600 hover:bg-red-50 font-bold px-4 py-1.5 rounded-lg text-xs transition-colors">
            Reject
          </button>
          <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-4 py-1.5 rounded-lg text-xs shadow-md shadow-blue-500/20 transition-colors">
            Approve
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative min-h-[400px]">
      
      {isLoading && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      <div className="p-2 relative z-0">
        <JobTable columns={columns} data={data.items} />
      </div>

      {/* Phân trang */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 text-sm text-gray-500 border-t border-gray-100 bg-gray-50/50 gap-4">
        <p>
          Showing {(params.page - 1) * params.limit + 1}-{Math.min(params.page * params.limit, data.totalItems)} of {data.totalItems} reviews
        </p>
        
        <div className="-mt-12">
          <Pagination 
            totalPages={data.totalPages} 
            currentPage={params.page} 
            onPageChange={(page) => onParamChange("page", page)} 
          />
        </div>
      </div>
    </div>
  );
};

export default ModerationTable;