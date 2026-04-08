import React from "react";
import { HiOutlinePlusCircle, HiOutlineLink } from "react-icons/hi";

const ProfileCompletion = ({ rate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">Profile Completion</h2>
        <span className="text-blue-600 font-bold">{rate}%</span>
      </div>
      
      {/* Thanh tiến độ */}
      <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${rate}%` }}></div>
      </div>

      {/* 2 Nút hành động */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-3 px-4 border border-blue-100 text-blue-600 bg-blue-50/30 rounded-xl hover:bg-blue-50 transition-colors font-medium text-sm">
          <HiOutlinePlusCircle className="text-xl" /> Add a profile summary
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 border border-blue-100 text-blue-600 bg-blue-50/30 rounded-xl hover:bg-blue-50 transition-colors font-medium text-sm">
          <HiOutlineLink className="text-xl" /> Link social accounts
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletion;