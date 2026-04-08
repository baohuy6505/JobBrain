import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiDollarSign, FiZap } from "react-icons/fi";

const RelatedJobCard = ({ job }) => {
  return (
    <Link
      to={`/job/${job.id}`}
      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Badge Featured */}
      {job.isFeatured && (
        <div className="flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-3">
          <FiZap className="fill-orange-500" /> Featured Job
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600 font-bold border border-gray-100 shrink-0 text-lg">
          {job.company?.name?.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 text-base">
            {job.title}
          </h3>
          <p className="text-sm text-gray-500 truncate">{job.company.name}</p>
        </div>
      </div>

      {/* Thông tin phụ: Type & Kinh nghiệm */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">
          {job.type}
        </span>
        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
          {job.experience}
        </span>
      </div>

      {/* Footer: Lương & Địa điểm */}
      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-gray-500">
          <FiMapPin className="text-red-400 shrink-0" size={14} />
          <span className="truncate max-w-[80px] text-xs">{job.location}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600 font-bold text-xs">
          <FiDollarSign size={14} />
          <span>{job.salaryText}</span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedJobCard;
