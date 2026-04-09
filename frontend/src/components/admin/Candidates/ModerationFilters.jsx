import React from "react";
import { HiChevronDown, HiCheckBadge } from "react-icons/hi2";

const ModerationFilters = ({ currentFilter, onFilterChange, approvalRate }) => {
  const tabs = [
    { label: "All Jobs", value: "ALL" },
    { label: "Pending", value: "PENDING" },
    { label: "Flagged", value: "FLAGGED" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 mb-8">
      
      {/* Khối Tabs & Sort */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-2 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onFilterChange("filterStatus", tab.value)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                currentFilter === tab.value
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-auto px-4 flex justify-end">
          <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Newest First <HiChevronDown className="text-lg" />
          </button>
        </div>
      </div>

      {/* Khối Approval Rate */}
      <div className="bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 p-4 lg:w-72 flex items-center justify-between relative overflow-hidden">
        {/* Hình mờ trang trí nền */}
        <HiCheckBadge className="absolute -right-4 -bottom-4 text-8xl text-blue-500/30" />
        
        <div className="relative z-10 text-white">
          <p className="text-[10px] font-bold tracking-wider opacity-90 mb-1 uppercase">Weekly Approval Rate</p>
          <p className="text-3xl font-black">{approvalRate}</p>
        </div>
      </div>

    </div>
  );
};

export default ModerationFilters;