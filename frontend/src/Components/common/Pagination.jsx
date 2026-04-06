import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPages = () => {
    const pages = [];

    // Luôn hiển thị trang đầu
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    // Hiển thị các trang xung quanh trang hiện tại
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Luôn hiển thị trang cuối (nếu có nhiều hơn 1 trang)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-12 select-none">
      {/* Nút Back */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <FaChevronLeft size={12} />
      </button>

      {/* Danh sách số trang */}
      {renderPages().map((p, i) => (
        <button
          key={i}
          disabled={p === "..."}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
            p === currentPage
              ? "bg-blue-600 text-white shadow-lg shadow-blue-100 scale-105"
              : p === "..."
                ? "text-gray-400 cursor-default"
                : "bg-white border border-gray-100 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Nút Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <FaChevronRight size={12} />
      </button>
    </div>
  );
};
