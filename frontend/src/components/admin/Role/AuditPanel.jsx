import React from "react";
import { FiRotateCcw } from "react-icons/fi";

const AuditPanel = ({ audits }) => {
  return (
    <div className="rounded-[16px] border border-[#CFD6E6] bg-[#F5F6FD] p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <FiRotateCcw className="w-4 h-4 text-[#2E3547]" />
        <h3 className="text-[16px] font-bold text-[#202534]">
          Recent Changes Audit
        </h3>
      </div>

      <div className="space-y-3">
        {audits.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#ECEFF7] rounded-[10px] px-4 py-4 flex items-start justify-between"
          >
            <div>
              <p className="text-[13px] text-[#2C3244]">
                <span className="font-bold">{item.title}</span>{" "}
                <span className="text-[#6F778C]">{item.desc}</span>
              </p>
              <p className="mt-1 text-[11px] text-[#9AA1B2]">{item.sub}</p>
            </div>

            <button
              type="button"
              className="text-[11px] font-bold text-[#4B63DE]"
            >
              DETAILS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditPanel;