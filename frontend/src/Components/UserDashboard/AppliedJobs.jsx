import React from "react";
import JobTable from "../common/JobTable"; // Nhớ import đường dẫn cho đúng với thư mục của bạn nhé
import { mockUserData } from "../../mock/userData"; // Dữ liệu fake cho phần việc đã ứng tuyển, nhớ điều chỉnh đường dẫn nếu cần
const AppliedJobs = () => {
  const { applications } = mockUserData;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
      
      {/* Tiêu đề của Widget */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Việc đã ứng tuyển</h2>
        <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Xem tất cả</a>
      </div>

      {/* Gọi component dùng chung và truyền data vào qua props 'jobs' */}
      <JobTable jobs={applications} />
      
    </div>
  );
};

export default AppliedJobs;