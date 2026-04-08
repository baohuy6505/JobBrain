import React from "react";
import { MdLocationOn } from "react-icons/md";
import FilterTag from "../common/FilterTag"; // Đảm bảo bạn đã có component này

const industriesList = [
  "Architecture",
  "Engineering",
  "Urban Planning",
  "Interior Design",
];

const CompanyFilter = ({ params, onParamChange }) => {
  // Hàm xử lý toggle cho mảng (giống bên Jobs)
  const handleToggleArray = (key, value) => {
    const currentArray = params[key] || [];
    const nextArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    onParamChange(key, nextArray);
  };

  return (
    <div className="shrink-0 space-y-4 text-left">
      {/* 1. BỘ LỌC ĐÃ CHỌN */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-4 text-sm font-bold">
          <span className="text-gray-800 font-black">Bộ lọc đã chọn</span>
          <button
            onClick={() => onParamChange("reset", null)}
            className="text-blue-600 font-bold text-xs hover:underline focus:outline-none"
          >
            Xóa bộ lọc
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Tag cho Ngành nghề */}
          {params.industries?.map((tag) => (
            <FilterTag
              key={`ind-${tag}`}
              text={tag}
              onRemove={() => handleToggleArray("industries", tag)}
            />
          ))}

          {/* Tag cho Quy mô */}
          {params.size && (
            <FilterTag
              text={
                params.size === "startup"
                  ? "Startup"
                  : params.size === "mid"
                    ? "Mid-size"
                    : "Enterprise"
              }
              onRemove={() => onParamChange("size", "")}
            />
          )}

          {/* Tag cho Địa điểm */}
          {params.location && (
            <FilterTag
              text={params.location}
              onRemove={() => onParamChange("location", "")}
            />
          )}

          {/* Hiển thị khi trống */}
          {!params.industries?.length && !params.size && !params.location && (
            <span className="text-gray-300 text-[10px] italic font-medium">
              Chưa chọn bộ lọc nào
            </span>
          )}
        </div>
      </div>

      {/* 2. CÁC BỘ LỌC CHI TIẾT */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
        {/* Lọc Ngành nghề */}
        <div className="p-5">
          <h4 className="font-bold text-sm text-gray-800 mb-4">Lĩnh vực</h4>
          <div className="space-y-3">
            {industriesList.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={params.industries?.includes(item)}
                  onChange={() => handleToggleArray("industries", item)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-800 font-medium">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Lọc Địa điểm */}
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
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
            />
          </div>
        </div>

        {/* Lọc Quy mô công ty */}
        <div className="p-5">
          <h4 className="font-bold text-sm text-gray-800 mb-4">Quy mô</h4>
          <div className="space-y-3">
            {[
              { label: "Startup (1-50)", value: "startup" },
              { label: "Mid-size (51-500)", value: "mid" },
              { label: "Enterprise (500+)", value: "enterprise" },
            ].map((size) => (
              <label
                key={size.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="companySize"
                  checked={params.size === size.value}
                  onChange={() => onParamChange("size", size.value)}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-800 font-medium">
                  {size.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFilter;
