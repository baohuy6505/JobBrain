import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { MdLocationOn } from "react-icons/md";
import FilterTag from "../common/FilterTag";

export const FilterSidebar = ({ params, onParamChange }) => {
  const handleToggleArray = (key, value) => {
    const currentArray = params[key] || [];
    const nextArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    onParamChange(key, nextArray);
  };

  return (
    <div className="shrink-0 space-y-4">
      {/* 1. BỘ LỌC ĐÃ CHỌN */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-4 text-sm font-bold">
          <span className="text-gray-800 font-black">Bộ lọc đã chọn</span>
          <button
            onClick={() => onParamChange("reset", null)}
            className="text-blue-600 font-bold text-xs hover:underline"
          >
            Xóa bộ lọc
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {params.categories?.map((tag) => (
            <FilterTag
              key={`cat-${tag}`}
              text={tag}
              onRemove={() => handleToggleArray("categories", tag)}
            />
          ))}

          {params.location && (
            <FilterTag
              text={params.location}
              onRemove={() => onParamChange("location", "")}
            />
          )}

          {params.experience && (
            <FilterTag
              text={params.experience}
              onRemove={() => onParamChange("experience", "")}
            />
          )}

          {params.jobType?.map((tag) => (
            <FilterTag
              key={`type-${tag}`}
              text={tag}
              onRemove={() => handleToggleArray("jobType", tag)}
            />
          ))}

          {!params.categories?.length &&
            !params.location &&
            !params.experience &&
            !params.jobType?.length && (
              <span className="text-gray-300 text-[10px] italic font-medium">
                Chưa chọn bộ lọc nào
              </span>
            )}
        </div>
      </div>

      {/* 2. CÁC BỘ LỌC */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
        {/* Lĩnh vực */}
        <div className="p-5">
          <h4 className="font-bold text-sm text-gray-800 mb-4">Lĩnh vực</h4>
          <div className="space-y-3">
            {["UI/UX Design", "Software Engineering", "Marketing"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={params.categories?.includes(item)}
                    onChange={() => handleToggleArray("categories", item)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-500 group-hover:text-gray-800 font-medium">
                    {item}
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        {/* Địa điểm */}
        <div className="p-5">
          <h4 className="font-bold text-sm text-gray-800 mb-4">Địa điểm</h4>
          <div className="relative">
            <MdLocationOn
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              value={params.location}
              onChange={(e) => onParamChange("location", e.target.value)}
              placeholder="Nhập địa điểm..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 
              transition-colors duration-200"
            />
          </div>
        </div>

        {/* Mức lương */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-6 font-bold">
            <h4 className="text-sm text-gray-800">Mức lương</h4>
            <span className="text-blue-600 text-xs">
              {params.salaryRange[0]}M - {params.salaryRange[1]}M
            </span>
          </div>

          <div className="px-1">
            <Slider
              range
              min={0}
              max={200}
              value={params.salaryRange}
              onChange={(val) => onParamChange("salaryRange", val)}
              styles={{
                track: { backgroundColor: "#2563eb", height: 6 },
                rail: { backgroundColor: "#eff6ff", height: 6 },
                handle: {
                  borderColor: "#2563eb",
                  height: 18,
                  width: 18,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  opacity: 1,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                },
              }}
            />
          </div>
        </div>

        {/* Kinh nghiệm */}
        <div className="p-5">
          <h4 className="font-bold text-sm text-gray-800 mb-4">Kinh nghiệm</h4>
          <div className="space-y-3">
            {["Fresher / Junior", "Middle / Senior"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="exp"
                  checked={params.experience === item}
                  onChange={() => onParamChange("experience", item)}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-800 font-medium">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Loại hình */}
        <div className="p-5">
          <h4 className="font-bold text-sm text-gray-800 mb-4">Loại hình</h4>
          <div className="space-y-3">
            {["Full-time", "Remote"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={params.jobType?.includes(item)}
                  onChange={() => handleToggleArray("jobType", item)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-800 font-medium">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
