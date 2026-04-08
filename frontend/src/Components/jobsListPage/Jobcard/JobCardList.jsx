import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiZap } from "react-icons/fi";

export const JobCardList = ({ job }) => (
  <div className="group p-6 bg-white border-l-4 border-transparent rounded-2xl flex flex-col md:flex-row justify-between items-start transition-all duration-300 shadow-sm hover:shadow-sm hover:-translate-y-1 hover:scale-[1.01] cursor-pointer gap-6">
    {/* CỘT TRÁI: Logo + Nội dung chính */}
    <div className="flex gap-5 flex-1 min-w-0">
      {/* Logo Công ty */}
      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white overflow-hidden shrink-0 shadow-inner">
        {job.company?.logo ? (
          <img
            src={job.company.logo}
            alt={job.company.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xs font-bold uppercase">
            {job.company?.name?.charAt(0) || "S"}
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        {/* 1. Tiêu đề */}
        <h3 className="font-bold text-xl text-gray-800 tracking-tight transition-colors group-hover:text-blue-700 truncate mb-2">
          {job.title}
        </h3>

        {/* 2. Cụm Tag thông tin */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-extrabold rounded uppercase tracking-wider whitespace-nowrap">
            {job.category}
          </span>
          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-extrabold rounded uppercase tracking-wider whitespace-nowrap">
            {job.type}
          </span>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-extrabold rounded uppercase tracking-wider whitespace-nowrap">
            {job.experience}
          </span>
        </div>

        {/* 3. Công ty & Địa điểm */}
        <div className="flex items-center gap-1 text-sm text-gray-500 font-medium mb-3">
          {/* FIX QUAN TRỌNG: job.company -> job.company.name */}
          <span className="truncate font-semibold text-gray-700">
            {job.company?.name}
          </span>
          <span className="text-gray-300 mx-1">•</span>
          <MdLocationOn size={16} className="text-gray-400 shrink-0" />
          <span className="truncate">{job.location}</span>
        </div>

        {/* 4. Mô tả ngắn */}
        <p className="text-sm text-gray-400 mb-5 max-w-2xl leading-relaxed line-clamp-2 italic">
          {job.description || job.desc}
        </p>

        {/* 5. Tags kỹ thuật */}
        <div className="flex flex-wrap gap-2">
          {job.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-50 text-gray-500 text-[11px] font-semibold rounded-lg border border-gray-100 transition-colors group-hover:bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* CỘT PHẢI: Lương + Nút Action */}
    <div className="w-full md:w-auto text-left md:text-right flex flex-col items-start md:items-end justify-between self-stretch shrink-0 min-w-[160px]">
      <div className="mb-4 md:mb-8 w-full">
        {/* Badge Featured */}
        {job.isFeatured && (
          <div className="flex items-center justify-start md:justify-end gap-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-2">
            <FiZap className="fill-orange-500" /> Featured
          </div>
        )}

        {/* Giá tiền */}
        <div className="text-2xl font-black text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
          {job.minSalary && job.maxSalary
            ? `${Math.round(job.minSalary / 1000000)}M - ${Math.round(job.maxSalary / 1000000)}M`
            : job.salaryText || "Thỏa thuận"}
        </div>
      </div>

      <Link
        to={`/list-job/${job.id}`}
        className="w-full md:w-auto bg-gray-100 text-gray-600 px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 text-center whitespace-nowrap"
      >
        View Details
      </Link>
    </div>
  </div>
);
