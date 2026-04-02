import React from "react";

const ConversationItem = ({ data, isActive }) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 cursor-pointer transition-all border-l-4 ${
        isActive
          ? "bg-purple-50 border-[#6344ff]"
          : "bg-white border-transparent hover:bg-gray-50"
      }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-12 h-12 rounded-xl object-cover border border-gray-100"
        />
        {data.online && (
          <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-bold text-sm text-gray-900 truncate">
            {data.name}
          </h4>
          <span className="text-[10px] text-gray-400 uppercase">
            {data.time}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 truncate pr-2">
            {data.lastMessage}
          </p>
          {data.unread > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shrink-0">
              {data.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
