import React from "react";
import { MdLocationOn } from "react-icons/md";

export const JobCardGrid = ({ job }) => (
  <div className="group p-6 bg-white border border-gray-100 rounded-3xl flex flex-col transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full">
    <div className="flex justify-between items-start mb-5">
      {/*Logo */}
      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white text-[8px] font-bold shrink-0">
        STUDIO
      </div>
      <div className="flex gap-2">
        {job.isFeatured && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ml-2 animate-pulse">
            Hot
          </span>
        )}
        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[9px] font-black rounded-lg uppercase">
          {job.type}
        </span>
      </div>
    </div>

    <div className="flex-1">
      <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-blue-700 line-clamp-1">
        {job.title}
      </h3>
      <div className="flex items-center gap-1 text-xs text-gray-400 font-medium mb-4">
        <span>{job.company}</span>
        <span className="mx-1">•</span>
        <MdLocationOn size={14} />
        <span>{job.location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-extrabold rounded uppercase tracking-wider">
          {job.category}
        </span>
        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-extrabold rounded uppercase tracking-wider">
          {job.type}
        </span>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-extrabold rounded uppercase tracking-wider">
          {job.experience}
        </span>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-5">
        {job.desc}
      </p>
    </div>

    <div className="pt-5 border-t border-gray-50 flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-xl font-black text-gray-800">
            {job.salaryText}
          </span>
        </div>
      </div>
      <button className="w-full bg-gray-50 text-gray-600 py-3 rounded-2xl font-bold text-xs transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        View Details
      </button>
    </div>
  </div>
);
