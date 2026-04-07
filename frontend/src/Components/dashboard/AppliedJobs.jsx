import React from "react";
import JobTable from "../common/JobTable"; // Nhớ import đường dẫn cho đúng với thư mục của bạn nhé

const AppliedJobs = () => {
  // Dữ liệu này sau này bạn có thể thay thế bằng dữ liệu gọi từ API Backend
  const jobsData = [
    { id: 1, company: "TechVina Corp", role: "Senior UI Designer", date: "12/10/2024", status: "ACCEPTED", color: "bg-blue-100 text-blue-700", logoText: "T", logoBg: "bg-blue-50 text-blue-600" },
    { id: 2, company: "Global Soft", role: "Frontend Lead", date: "10/10/2024", status: "INTERVIEW", color: "bg-purple-100 text-purple-700", logoText: "G", logoBg: "bg-purple-50 text-purple-600" },
    { id: 3, company: "Solaris AI", role: "Product Manager", date: "08/10/2024", status: "PENDING", color: "bg-orange-100 text-orange-700", logoText: "S", logoBg: "bg-orange-50 text-orange-600" },
    { id: 4, company: "Fintech Pro", role: "UX Researcher", date: "05/10/2024", status: "REJECTED", color: "bg-red-100 text-red-700", logoText: "F", logoBg: "bg-red-50 text-red-600" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
      
      {/* Tiêu đề của Widget */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Việc đã ứng tuyển</h2>
        <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Xem tất cả</a>
      </div>

      {/* Gọi component dùng chung và truyền data vào qua props 'jobs' */}
      <JobTable jobs={jobsData} />
      
    </div>
  );
};

export default AppliedJobs;