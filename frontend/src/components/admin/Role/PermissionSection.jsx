import React from "react";
import { FiUsers, FiBriefcase, FiDollarSign, FiSettings } from "react-icons/fi";

const iconMap = {
  "User Management": <FiUsers className="w-4 h-4" />,
  "Job Moderation": <FiBriefcase className="w-4 h-4" />,
  Financials: <FiDollarSign className="w-4 h-4" />,
  "System Settings": <FiSettings className="w-4 h-4" />,
};

const PermissionSection = ({
  title,
  items,
  sectionIndex,
  onTogglePermission,
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-7 h-7 rounded-[7px] bg-[#F3F5FB] text-[#2D3345] flex items-center justify-center">
          {iconMap[title]}
        </div>
        <h3 className="text-[16px] font-bold text-[#202534]">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item, itemIndex) => (
          <button
            key={item.label}
            type="button"
            disabled={item.disabled}
            onClick={() => onTogglePermission(sectionIndex, itemIndex)}
            className={`h-[56px] rounded-[10px] border px-4 flex items-center justify-between text-left transition-all ${
              item.disabled
                ? "border-[#E2E6F0] bg-[#F8F9FC] text-[#A6ADBE]"
                : "border-[#CFD6E6] bg-white text-[#252B39] hover:border-[#B3BDD6]"
            }`}
          >
            <span className="text-[13px] font-medium leading-4">
              {item.label}
            </span>

            <span
              className={`w-5 h-5 rounded-[6px] border flex items-center justify-center text-[12px] ${
                item.checked
                  ? "bg-[#3E57D1] border-[#3E57D1] text-white"
                  : "bg-white border-[#8E96AC] text-transparent"
              }`}
            >
              ✓
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PermissionSection;