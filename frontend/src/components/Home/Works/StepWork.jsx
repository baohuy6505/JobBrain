import React from "react";
import {
  HiOutlineUserAdd,
  HiOutlineSearch,
  HiOutlineBriefcase,
} from "react-icons/hi";

const StepCard = ({ step }) => {
  // Logic kiểm tra nội dung để chọn Icon và Màu sắc
  const getStylesByContent = (title) => {
    const lowerTitle = title.toLowerCase();

    if (
      lowerTitle.includes("hồ sơ") ||
      lowerTitle.includes("tạo") ||
      lowerTitle.includes("đăng ký")
    ) {
      return {
        icon: <HiOutlineUserAdd className="text-2xl text-blue-600" />,
        bgColor: "bg-blue-50",
      };
    }

    if (
      lowerTitle.includes("tìm") ||
      lowerTitle.includes("ứng tuyển") ||
      lowerTitle.includes("search")
    ) {
      return {
        icon: <HiOutlineSearch className="text-2xl text-purple-600" />,
        bgColor: "bg-purple-50",
      };
    }

    if (
      lowerTitle.includes("việc") ||
      lowerTitle.includes("phỏng vấn") ||
      lowerTitle.includes("bắt đầu")
    ) {
      return {
        icon: <HiOutlineBriefcase className="text-2xl text-orange-600" />,
        bgColor: "bg-orange-50",
      };
    }

    return {
      icon: <HiOutlineSearch className="text-2xl text-gray-600" />,
      bgColor: "bg-gray-50",
    };
  };

  const styles = getStylesByContent(step.title);

  return (
    <div className="flex flex-col items-center text-center px-4 relative group">
      {/* Icon: Thu nhỏ xuống w-12 h-12 trên mobile, lên máy tính trả lại w-16 h-16 */}
      <div
        className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm transition-transform group-hover:-translate-y-2 duration-300 ${styles.bgColor}`}
      >
        {styles.icon}
      </div>

      {/* Số thứ tự: Mobile dùng text-4xl, máy tính dùng text-5xl */}
      <span className="text-4xl md:text-5xl font-bold text-black mb-3 md:mb-4 select-none">
        {step.number}
      </span>

      <div className="mt-6 md:mt-8">
        {/* Tiêu đề: Mobile text-base, máy tính text-lg */}
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
          {step.title}
        </h3>
        
        {/* Mô tả: Mobile text-xs (nhỏ hơn text-sm 1 xíu), máy tính text-sm */}
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-[250px]">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
