import React from "react";
import JobTable from "../common/JobTable"; 
import { mockUserData } from "../../mock/userData"; 
import { HiChevronRight } from "react-icons/hi";

const statusConfig = {
  "ACCEPTED": "bg-green-100 text-green-700",
  "INTERVIEW": "bg-purple-100 text-purple-700",
  "PENDING": "bg-orange-100 text-orange-700",
  "REJECTED": "bg-red-100 text-red-700",
  "DEFAULT": "bg-gray-100 text-gray-700"
};

const AppliedJobs = () => {
  const applications = mockUserData.applications;

  const jobColumns = [
    {
      key: "company",
      label: "Công ty",
      render: (job) => {
        const logoText = job.company.charAt(0).toUpperCase();
        return (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-sm bg-gray-100 text-gray-900">
              {logoText}
            </div>
            <span className="font-bold text-gray-900 group-hover:text-[#6344ff] transition-colors">{job.company}</span>
          </div>
        );
      }
    },
    {
      key: "role",
      label: "Vị trí",
      render: (job) => <span className="text-gray-600 font-medium">{job.role}</span>
    },
    {
      key: "date",
      label: "Ngày nộp",
      render: (job) => <span className="text-gray-500 text-xs font-mono">{job.date}</span>
    },
    {
      key: "status",
      label: "Trạng thái",
      render: (job) => {
        const statusStyle = statusConfig[job.status] || statusConfig["DEFAULT"];
        return (
          <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${statusStyle}`}>
            {job.status}
          </span>
        );
      }
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Việc đã ứng tuyển</h2>
        </div>
        <a href="#" className="text-[#6344ff] text-sm font-bold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
          Xem tất cả
        </a>
      </div>
      
      {/* 2. GỌI BẢNG VÀ TRUYỀN CỘT + DỮ LIỆU XUỐNG */}
      <JobTable 
        columns={jobColumns} 
        data={applications} 
      />
    </div>
  );
};

export default AppliedJobs;