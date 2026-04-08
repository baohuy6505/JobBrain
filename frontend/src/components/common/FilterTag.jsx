import React from "react";
import { IoMdClose } from "react-icons/io";

/**
 * Component hiển thị nhãn bộ lọc đã chọn
 * @param {string} text - Nội dung hiển thị trên tag
 * @param {function} onRemove - Hàm xử lý khi nhấn nút xóa (x)
 */
const FilterTag = ({ text, onRemove }) => {
  if (!text) return null;

  return (
    <span className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-wider border border-blue-100 hover:bg-blue-100 transition-colors">
      {text}
      <IoMdClose
        className="cursor-pointer ml-1 hover:text-blue-800 transition-colors"
        size={14}
        onClick={(e) => {
          e.stopPropagation(); // Ngăn chặn sự kiện nổi bọt nếu cần
          onRemove();
        }}
      />
    </span>
  );
};

export default FilterTag;
