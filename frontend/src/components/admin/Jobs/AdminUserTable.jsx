import React from "react";
import JobTable from "../../common/JobTable";
import { Pagination } from "../../common/Pagination";

// Từ điển UI nội bộ cho Bảng
const roleConfig = {
  "ADMIN": "bg-blue-100 text-blue-700",
  "EMPLOYER": "bg-purple-100 text-purple-700",
  "CANDIDATE": "bg-emerald-100 text-emerald-700",
  "DEFAULT": "bg-gray-100 text-gray-700"
};

const statusConfig = {
  "Active": "bg-green-500",
  "Inactive": "bg-gray-500",
  "Banned": "bg-red-500",
  "DEFAULT": "bg-gray-300"
};

const AdminUserTable = ({ data, params, isLoading, onParamChange }) => {
  
  // Định nghĩa cột
  const userColumns = [
    {
      key: "name",
      label: "USER",
      render: (user) => {
        const logoText = user.name.charAt(0).toUpperCase();
        return (
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm bg-gray-100 text-gray-900`}>
              {logoText}
            </div>
            <div>
              <span className="font-bold text-gray-900">{user.name}</span>
              <p className={`text-xs ${user.suspendedReason ? 'text-red-500' : 'text-gray-500'}`}>
                {user.suspendedReason || user.email}
              </p>
            </div>
          </div>
        );
      }
    },
    {
      key: "role",
      label: "ROLE",
      render: (user) => {
        const style = roleConfig[user.role] || roleConfig["DEFAULT"];
        return <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${style}`}>{user.role}</span>;
      }
    },
    {
      key: "status",
      label: "STATUS",
      render: (user) => {
        const dotColor = statusConfig[user.status] || statusConfig["DEFAULT"];
        return (
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <span className="text-gray-700 text-sm font-medium">{user.status}</span>
          </div>
        );
      }
    },
    {
      key: "joinedDate",
      label: "JOINED DATE",
      render: (user) => <span className="text-gray-500 font-medium text-sm">{user.joinedDate}</span>
    },
    {
      key: "lastLogin",
      label: "LAST LOGIN",
      render: (user) => <span className="text-gray-500 font-medium text-sm">{user.lastLogin}</span>
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8 relative min-h-[300px]">
      
      {/* Lớp phủ Loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6344ff]"></div>
        </div>
      )}

      {/* Gọi JobTable */}
      <div className="relative z-0">
        <JobTable columns={userColumns} data={data.items} />

        {/* Phân trang */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500 border-t border-gray-100 pt-6 gap-4">
          <p>
            Đang hiển thị {(params.page - 1) * params.limit + 1} đến {Math.min(params.page * params.limit, data.totalItems)} của <span className="font-bold text-gray-800">{data.totalItems}</span> người dùng
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
    </div>
  );
};

export default AdminUserTable;