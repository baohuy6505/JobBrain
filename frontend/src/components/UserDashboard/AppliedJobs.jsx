import React from "react";
import JobTable from "../common/JobTable"; // Đã đổi thành file khung dùng chung
import { mockUserData } from "../../mock/userData"; 

// TỪ ĐIỂN MÀU SẮC (Tối giản hóa màu sắc)
const statusConfig = {
  "ACCEPTED": { color: "bg-green-50 text-green-700 border border-green-200", label: "Đã trúng tuyển" },
  "INTERVIEW": { color: "bg-blue-50 text-blue-700 border border-blue-200", label: "Phỏng vấn" },
  "PENDING": { color: "bg-gray-50 text-gray-700 border border-gray-200", label: "Đang xét duyệt" },
  "REJECTED": { color: "bg-red-50 text-red-700 border border-red-200", label: "Từ chối" },
  "DEFAULT": { color: "bg-gray-50 text-gray-600", label: "Không xác định" }
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center font-bold text-gray-600 shadow-sm">
              {logoText}
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {job.company}
            </span>
          </div>
        );
      }
    },
    {
      key: "role",
      label: "Vị trí ứng tuyển",
      render: (job) => (
        <div>
          <span className="block font-medium text-gray-800">{job.role}</span>
        </div>
      )
    },
    {
      key: "date",
      label: "Ngày nộp",
      render: (job) => <span className="text-gray-500 text-sm">{job.date}</span>
    },
    {
      key: "status",
      label: "Trạng thái",
      render: (job) => {
        const statusData = statusConfig[job.status] || statusConfig["DEFAULT"];
        return (
          // Thay vì in hoa (uppercase), dùng font-medium cho mềm mại
          <span className={`px-2.5 py-1 rounded-md text-xs uppercase ${statusData.color}`}>
            {statusData.label}
          </span>
        );
      }
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Việc đã ứng tuyển</h2>
        </div>
        <a href="#" className="text-blue-600 text-sm font-medium hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
          Xem tất cả
        </a>
      </div>
      
      <JobTable 
        columns={jobColumns} 
        data={applications} 
      />
    </div>
  );
};

export default AppliedJobs;