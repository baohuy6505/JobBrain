import React from "react";

const InfoBox = ({ icon, label, value, colorClass, isLink = false }) => (
  <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all h-full">
    <div className={`p-3.5 rounded-2xl text-2xl flex-shrink-0 ${colorClass}`}>
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
        {label}
      </p>
      <p
        className={`text-sm font-bold truncate ${isLink ? "text-[#6344ff] underline cursor-pointer" : "text-slate-800"}`}
      >
        {value}
      </p>
    </div>
  </div>
);

export default InfoBox;
