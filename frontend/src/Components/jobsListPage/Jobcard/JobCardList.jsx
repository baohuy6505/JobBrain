import React from "react";
import { MdLocationOn } from "react-icons/md";

export const JobCardList = ({ job }) => (
  <div className="group p-6 bg-white border-l-4 border-transparent rounded-2xl flex justify-between items-start transition-all duration-300 shadow-sm hover:border-blue-600 hover:shadow-md cursor-pointer">
    <div className="flex gap-5">
      <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white text-[10px] font-bold shrink-0 uppercase tracking-tighter">
        STUDIO
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-bold text-xl text-gray-800 tracking-tight transition-colors group-hover:text-blue-700">
            {job.title}
          </h3>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-extrabold rounded uppercase tracking-wider">
            {job.category}
          </span>
          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-extrabold rounded uppercase tracking-wider">
            {job.type}
          </span>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-extrabold rounded uppercase tracking-wider">
            {job.experience}
          </span>
          {job.isFeatured && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ml-2 animate-pulse">
              Hot
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500 font-medium mb-3">
          <span>{job.company}</span>
          <span className="text-gray-300 mx-1">•</span>
          <MdLocationOn size={16} className="text-gray-400" />
          <span>{job.location}</span>
        </div>

        <p className="text-sm text-gray-400 mb-5 max-w-xl leading-relaxed line-clamp-2">
          {job.desc}
        </p>

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

    <div className="text-right flex flex-col items-end h-full justify-between self-stretch">
      <div className="mb-8">
        <span className="text-2xl font-black text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
          {job.salaryText}
        </span>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
          PER ANNUM
        </p>
      </div>
      <button className="bg-gray-100 text-gray-600 px-7 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-100 whitespace-nowrap">
        View Details
      </button>
    </div>
  </div>
);
