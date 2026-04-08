import React from "react";
import { HiSearch } from "react-icons/hi";

const CompanySearch = ({ value, onChange, onSearch }) => {
  return (
    <div className="w-full max-w-xl flex items-center gap-2">
      <div className="flex-grow bg-white p-1 pl-4 rounded-2xl shadow-sm border border-slate-100 flex items-center focus-within:border-[#6344ff] transition-all">
        <HiSearch className="text-slate-400 size-5" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch && onSearch()}
          placeholder="Tìm kiếm công ty..."
          className="flex-grow px-3 py-2 outline-none text-sm bg-transparent"
        />
      </div>
      <button
        onClick={onSearch}
        className="bg-[#6344ff] text-white px-6 py-3.5 p-2 rounded-2xl font-bold text-xs md:text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-600 transition-all active:scale-95 focus:outline-none"
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default CompanySearch;
