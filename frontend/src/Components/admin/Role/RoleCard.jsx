import React from "react";

const RoleCard = ({ role, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-[14px] border bg-white p-4 shadow-sm transition-all ${
        isActive
          ? "border-[#4E6AF3] ring-1 ring-[#4E6AF3]"
          : "border-[#D9DEEA] hover:border-[#B9C3DA]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-[16px] font-bold text-[#202534]">{role.name}</div>

        {role.badge ? (
          <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-[#EEF2FF] text-[#4E6AF3]">
            {role.badge}
          </span>
        ) : isActive ? (
          <span className="text-[#4E6AF3] text-[18px]">◉</span>
        ) : null}
      </div>

      <p className="mt-4 text-[13px] leading-6 text-[#6F768A] min-h-[78px]">
        {role.description}
      </p>

      <div className="mt-4 pt-4 border-t border-[#EEF1F7] flex items-center justify-between">
        <div className="flex -space-x-2">
          {role.avatars.map((avatar, index) => (
            <div
              key={index}
              className="w-7 h-7 rounded-full border-2 border-white bg-[#D7DDED] text-[10px] font-semibold text-[#364152] flex items-center justify-center"
            >
              {avatar}
            </div>
          ))}
        </div>

        <span className="text-[11px] font-semibold text-[#5870DB]">
          {role.usersAssigned}
        </span>
      </div>
    </button>
  );
};

export default RoleCard;