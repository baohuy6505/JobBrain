import React, { useState } from "react";
import { 
  FiBold, FiItalic, FiUnderline, FiList, FiLink, 
  FiX, FiPlus 
} from "react-icons/fi";
import { MdFormatListNumbered } from "react-icons/md";
import { FaHeartbeat, FaMoneyBillWave, FaPlane } from "react-icons/fa";

const Step3Description = ({ formData, setFormData }) => {
  const [benefitInput, setBenefitInput] = useState("");

  const handleAddBenefit = (e) => {
    e.preventDefault();
    if (benefitInput.trim() !== "") {
      const currentBenefits = formData?.benefits || [];
      if (!currentBenefits.includes(benefitInput.trim())) {
        setFormData({
          ...formData,
          benefits: [...currentBenefits, benefitInput.trim()]
        });
      }
      setBenefitInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleAddBenefit(e);
    }
  };

  const handleRemoveBenefit = (benefitToRemove) => {
    const currentBenefits = formData?.benefits || [];
    setFormData({
      ...formData,
      benefits: currentBenefits.filter(b => b !== benefitToRemove)
    });
  };

  const renderBenefitIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("sức khỏe") || lowerName.includes("y tế")) return <FaHeartbeat />;
    if (lowerName.includes("thưởng") || lowerName.includes("kpi")) return <FaMoneyBillWave />;
    if (lowerName.includes("du lịch")) return <FaPlane />;
    return <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>; // Mặc định là dấu chấm tròn
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Mô tả công việc & Yêu cầu</h2>
        <p className="text-slate-500 text-sm">Vui lòng cung cấp thông tin chi tiết để ứng viên hiểu rõ hơn về vị trí tuyển dụng.</p>
      </div>

      <div>
        <label className="block font-bold text-slate-800 mb-3">
          Mô tả công việc <span className="text-red-500">*</span>
        </label>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
          <div className="flex items-center gap-4 bg-[#F8FAFC] border-b border-gray-200 px-4 py-2.5 text-gray-500">
            <button type="button" className="hover:text-slate-800"><FiBold className="w-4 h-4 stroke-[3]" /></button>
            <button type="button" className="hover:text-slate-800"><FiItalic className="w-4 h-4 stroke-[3]" /></button>
            <button type="button" className="hover:text-slate-800"><FiUnderline className="w-4 h-4 stroke-[3]" /></button>
            <div className="w-px h-5 bg-gray-300"></div>
            <button type="button" className="hover:text-slate-800"><FiList className="w-4 h-4" /></button>
            <button type="button" className="hover:text-slate-800"><MdFormatListNumbered className="w-5 h-5" /></button>
            <div className="w-px h-5 bg-gray-300"></div>
            <button type="button" className="hover:text-slate-800"><FiLink className="w-4 h-4" /></button>
          </div>
          <textarea
            className="w-full p-4 min-h-[140px] outline-none text-slate-800 placeholder:text-gray-400 resize-y"
            placeholder="Nhập mô tả các nhiệm vụ chính, trách nhiệm hàng ngày..."
            value={formData?.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
        </div>
      </div>

      <div>
        <label className="block font-bold text-slate-800 mb-3">
          Yêu cầu công việc <span className="text-red-500">*</span>
        </label>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
          <textarea
            className="w-full p-4 min-h-[120px] outline-none text-slate-800 placeholder:text-gray-400 resize-y"
            placeholder="Yêu cầu về kinh nghiệm, kỹ năng chuyên môn, bằng cấp..."
            value={formData?.requirements || ""}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          ></textarea>
        </div>
      </div>

      <div>
        <label className="block font-bold text-slate-800 mb-3">Phúc lợi</label>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {(formData?.benefits || []).map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-[#F3E8FF] text-[#6B21A8] px-3 py-1.5 rounded-lg text-sm font-medium"
            >
              {renderBenefitIcon(benefit)}
              <span>{benefit}</span>
              <button 
                type="button" 
                onClick={() => handleRemoveBenefit(benefit)}
                className="hover:bg-purple-200 p-0.5 rounded-full ml-1 transition-colors"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition-all placeholder:text-gray-400 text-slate-800"
            placeholder="Thêm phúc lợi mới (ví dụ: Laptop, Phụ cấp ăn trưa...)"
            value={benefitInput}
            onChange={(e) => setBenefitInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            onClick={handleAddBenefit}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#0044ff] text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FiPlus className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Step3Description;