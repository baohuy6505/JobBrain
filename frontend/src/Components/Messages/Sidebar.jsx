import React from "react";
import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConversationItem from "./ConversationItem";
import { markAsRead } from "../../features/Messages/messageSlice";

const Sidebar = ({ isOpen, setIsOpen, conversations, activeId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`
      fixed inset-y-0 left-0 z-50 w-full md:w-80 bg-white border-r border-gray-100 flex flex-col 
      transition-transform duration-300 md:relative md:translate-x-0
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-50 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Tin nhắn</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 hover:bg-gray-50 rounded-lg"
        >
          <HiX className="text-xl text-gray-500" />
        </button>
      </div>

      {/* ĐÃ LOẠI BỎ PHẦN SEARCH TẠI ĐÂY */}

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {conversations.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              // GỬI LỆNH LÊN REDUX ĐỂ XÓA SỐ THÔNG BÁO (unread = 0)
              dispatch(markAsRead(item.id));
              // CHUYỂN HƯỚNG URL
              navigate(`/messages/${item.id}`);
              // ĐÓNG SIDEBAR TRÊN MOBILE
              if (window.innerWidth < 768) {
                setIsOpen(false);
              }
            }}
          >
            <ConversationItem data={item} isActive={item.id === activeId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
