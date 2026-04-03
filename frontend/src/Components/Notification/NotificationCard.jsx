import React from "react";
import {
  HiMail,
  HiExclamationCircle,
  HiCheckCircle,
  HiChatAlt2,
} from "react-icons/hi";

const NotificationCard = ({ data }) => {
  const getIcon = (type) => {
    switch (type) {
      case "new_application":
        return <HiMail />;
      case "compliance":
        return <HiExclamationCircle />;
      case "interview":
        return <HiCheckCircle />;
      case "message":
        return <HiChatAlt2 />;
      default:
        return <HiMail />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-0">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 mb-3 sm:mb-4 group cursor-pointer active:shadow-sm sm:active:shadow-lg">
        {/* Icon Box */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#6344ff] flex items-center justify-center text-white text-xl sm:text-2xl shrink-0 shadow-md sm:shadow-lg sm:shadow-purple-100">
          {getIcon(data.type)}
        </div>

        {/* Nội dung thông báo */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start sm:items-center gap-2 mb-2 sm:mb-1">
            <h4 className="font-bold text-gray-900 text-base sm:text-lg break-words line-clamp-2 flex-1">
              {data.title}
            </h4>
            {/* Chấm tròn báo chưa đọc */}
            {data.unread && (
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#6344ff] rounded-full ring-2 sm:ring-4 ring-purple-50 shrink-0 mt-1 sm:mt-0"></span>
            )}
          </div>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-3">
            {data.content}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded whitespace-nowrap">
              {data.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
