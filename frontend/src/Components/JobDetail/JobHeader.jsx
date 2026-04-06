import React from "react";
import { FiMapPin, FiClock, FiBriefcase, FiCalendar } from "react-icons/fi";

const JobHeader = ({ job }) => {
  // Kiểm tra an toàn để tránh lỗi render object
  if (!job || !job.company) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Logo công ty */}
        <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shrink-0 overflow-hidden">
          {job.company.logo ? (
            <img
              src={job.company.logo}
              alt={job.company.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-blue-600">
              {job.company.name?.charAt(0)}
            </span>
          )}
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {job.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FiBriefcase className="text-blue-500" />
              {/* SỬA LỖI: job.company -> job.company.name */}
              <span className="font-medium text-gray-800">
                {job.company.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-red-500" />
              <span>{job.location || job.company.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-green-500" />
              <span>{job.type || "Full-time"}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-orange-500" />
              <span>Hạn nộp: {job.dayLimit || "Đang cập nhật"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
