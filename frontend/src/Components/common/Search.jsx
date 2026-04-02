import React, { useState } from "react";
import {
  HiSearch,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const locations = ["Tất cả địa điểm", "Đà Nẵng", "Hà Nội", "TP.HCM"];

const Search = () => {
  const [selected, setSelected] = useState(locations[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-3">
      <div className="w-full bg-white p-1 md:p-2 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center gap-2 shadow-2xl max-w-4xl mx-auto mt-6 md:mt-10">
        {/* Input job */}
        <div className="flex items-center flex-[1.5] px-3 md:px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 min-w-0">
          <HiOutlineBriefcase className="text-blue-600 text-xl md:text-2xl shrink-0" />
          <input
            type="text"
            placeholder="Vị trí ứng tuyển..."
            className="w-full p-3 md:p-4 text-gray-800 outline-none placeholder:text-gray-400 text-sm md:text-base bg-transparent min-w-0 flex-1"
          />
        </div>

        {/* Custom dropdown */}
        <div className="relative flex items-center flex-1 px-3 md:px-4 w-full min-w-0">
          <HiOutlineLocationMarker className="text-blue-600 text-xl md:text-2xl shrink-0" />

          {/* Selected */}
          <div
            onClick={() => setOpen(!open)}
            className="w-full p-3 md:p-4 text-gray-800 text-sm md:text-base cursor-pointer flex justify-between items-center"
          >
            <span className="truncate">{selected}</span>

            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full left-0 w-full mt-1 z-50">
              {/* Lớp ngoài giữ bo góc */}
              <div className="bg-white shadow-xl rounded-xl border overflow-hidden">
                {/* Lớp trong scroll */}
                <div className="max-h-[144px] overflow-y-auto">
                  {locations.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className=" text-black px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm md:text-base"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Button */}
        <button className="w-full md:w-auto flex items-center justify-center gap-2 py-3 md:py-4 px-6 md:px-10 bg-[#6344ff] hover:bg-[#5235d9] text-white font-bold rounded-xl transition-all active:scale-95 shrink-0 shadow-lg">
          <HiSearch className="text-lg md:text-xl" />
          <span className="whitespace-nowrap">Tìm kiếm</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
