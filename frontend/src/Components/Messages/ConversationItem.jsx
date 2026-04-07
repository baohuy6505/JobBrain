import React from "react";

const ConversationItem = ({ data, isActive }) => {
  // Lấy tin nhắn cuối cùng trong danh sách chat của người này
  const lastMsgObject = data.messages[data.messages.length - 1];

  return (
    <div
      className={`flex items-center gap-3 p-4 cursor-pointer transition-all border-l-4 ${
        isActive
          ? "bg-[#6344ff]/5 border-[#6344ff]"
          : "bg-white border-transparent hover:bg-gray-50"
      }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <img
          src={data.avatar}
          className="w-12 h-12 rounded-xl object-cover border border-gray-100"
          alt={data.name}
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
      </div>

      {/* Nội dung tóm tắt */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <h3
            className={`text-sm truncate ${isActive ? "font-bold text-[#6344ff]" : "font-bold text-gray-900"}`}
          >
            {data.name}
          </h3>
          <span className="text-[10px] text-gray-400 font-medium shrink-0 ml-2">
            {data.time || "10:42 AM"}
          </span>
        </div>

        {/* HIỂN THỊ TIN NHẮN CUỐI CÙNG */}
        <p
          className={`text-xs truncate ${isActive ? "text-[#6344ff]/70" : "text-gray-500"}`}
        >
          {lastMsgObject ? lastMsgObject.text : "Chưa có tin nhắn"}
        </p>
      </div>

      {/* Badge số tin chưa đọc */}
      {data.unread > 0 && (
        <div className="bg-[#6344ff] text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 shadow-sm shrink-0">
          {data.unread}
        </div>
      )}
    </div>
  );
};

export default ConversationItem;
