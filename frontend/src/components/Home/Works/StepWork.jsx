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
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:-translate-y-2 duration-300 ${styles.bgColor}`}
      >
        {styles.icon}
      </div>

      <span className="text-5xl font-bold text-black mb-4 select-none">
        {step.number}
      </span>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
