import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Step2Salary = ({ formData, setFormData }) => {
  const formatCurrency = (value) => {
    if (!value) return "";
    const number = value.toString().replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSalaryChange = (field, value) => {
    const rawValue = value.replace(/\./g, "");
    setFormData({ ...formData, [field]: rawValue });
  };

  const handleQuantity = (type) => {
    const currentQty = parseInt(formData?.quantity || 2, 10);
    if (type === "decrease" && currentQty > 1) {
      setFormData({ ...formData, quantity: currentQty - 1 });
    } else if (type === "increase") {
      setFormData({ ...formData, quantity: currentQty + 1 });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h3 className="font-bold text-slate-800 mb-6">Mức lương (triệu VNĐ)</h3>

        <div className="mb-6">
          <input
            type="range"
            min="1"
            max="50"
            defaultValue="15"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-5 
    [&::-webkit-slider-thumb]:h-5 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:bg-[#0044ff] 
    [&::-webkit-slider-thumb]:border-2 
    [&::-webkit-slider-thumb]:border-white
    [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  {/* Sử dụng để chỉnh lương */}
          <div className="flex justify-between mt-3 text-sm font-bold text-[#0044ff]">
            <span>8 triệu</span>
            <span>15 triệu</span>
          </div>
        </div>

        <div className="flex items-center bg-[#F4F5F7] rounded-xl p-4 border border-gray-100">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Tối thiểu
            </label>
            <input
              type="text"
              className="w-full bg-transparent text-xl font-bold text-slate-900 outline-none placeholder:text-gray-400"
              placeholder="0"
              value={formatCurrency(formData?.minSalary || "8000000")}
              onChange={(e) => handleSalaryChange("minSalary", e.target.value)}
            />
          </div>

          <div className="w-px h-10 bg-gray-300 mx-4"></div>

          <div className="flex-1 pl-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Tối đa
            </label>
            <input
              type="text"
              className="w-full bg-transparent text-xl font-bold text-slate-900 outline-none placeholder:text-gray-400"
              placeholder="0"
              value={formatCurrency(formData?.maxSalary || "15000000")}
              onChange={(e) => handleSalaryChange("maxSalary", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kinh nghiệm */}
        <div>
          <h3 className="font-bold text-slate-800 mb-3">Kinh nghiệm</h3>
          <div className="relative">
            <select
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none appearance-none bg-white text-slate-800 font-medium focus:border-[#0044ff] transition-all"
              value={formData?.experience || "1-3 năm"}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            >
              <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
              <option value="Dưới 1 năm">Dưới 1 năm</option>
              <option value="1-3 năm">1-3 năm</option>
              <option value="3-5 năm">3-5 năm</option>
              <option value="Trên 5 năm">Trên 5 năm</option>
            </select>
            <HiOutlineChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-800 mb-3">Cấp bậc</h3>
          <div className="relative">
            <select
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none appearance-none bg-white text-slate-800 font-medium focus:border-[#0044ff] transition-all"
              value={formData?.level || "Senior"}
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })
              }
            >
              <option value="Intern">Intern / Thực tập sinh</option>
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
              <option value="Manager">Manager</option>
            </select>
            <HiOutlineChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-slate-800 mb-3">Số lượng tuyển dụng</h3>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => handleQuantity("decrease")}
            className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-l-xl text-slate-600 font-bold hover:bg-gray-300 transition-colors"
          >
            —
          </button>

          <input
            type="text"
            readOnly
            className="w-16 h-12 border-y border-gray-200 text-center font-bold text-lg text-slate-800 outline-none"
            value={(formData?.quantity || 2).toString().padStart(2, "0")}
          />

          <button
            type="button"
            onClick={() => handleQuantity("increase")}
            className="w-12 h-12 flex items-center justify-center bg-[#0044ff] rounded-r-xl text-white font-bold hover:bg-blue-700 transition-colors shadow-[0_4px_10px_rgba(0,68,255,0.3)]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Salary;
