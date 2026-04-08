import React from "react";

const ConversationItem = ({ data, isActive }) => {
  // 1. Lấy thông tin partner (người đang nhắn với Hà)
  const partner = data.partner;

  // 2. Lấy tin nhắn cuối cùng để hiển thị đoạn trích
  const lastMsg = data.messages[data.messages.length - 1];

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
        isActive ? "bg-indigo-50" : "hover:bg-gray-50"
      }`}
    >
      {/* 🟢 CHỖ CẦN SỬA: data.partner.avatar mới đúng */}
      <div className="relative shrink-0">
        <img
          src={partner.avatar} // Thay vì data.avatar
          alt={partner.name}
          className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm"
        />
        {/* Chấm xanh báo online */}
        {partner.status === "online" && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h4
            className={`text-sm font-bold truncate ${isActive ? "text-blue-500" : "text-gray-900"}`}
          >
            {partner.name} {/* Thay vì data.name */}
          </h4>
          <span className="text-[10px] text-gray-400 font-medium">
            {lastMsg?.time}
          </span>
        </div>

        {/* Đoạn trích tin nhắn cuối */}
        <p className="text-xs text-gray-500 truncate leading-snug">
          {lastMsg?.text}
        </p>
      </div>
    </div>
  );
};

export default ConversationItem;
