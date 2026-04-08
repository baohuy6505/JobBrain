import React from "react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ConversationItem from "./ConversationItem";
import { masterData } from "../../mock/masterData";

const Sidebar = ({ isOpen, setIsOpen, activeId }) => {
  const navigate = useNavigate();

  // 1. XÁC ĐỊNH NGƯỜI DÙNG LÀ VINH HÀ
  const currentUserId = "vinh_ha_21";

  // 2. LẤY DANH SÁCH CHATS CỦA VINH HÀ
  const chats = masterData.usersData[currentUserId]?.chats || [];

  return (
    <div
      className={`
      fixed md:relative 
      inset-y-0 left-0 
      top-16 md:top-0 
      z-40 
      w-full md:w-80 
      bg-white border-r border-gray-100 flex flex-col 
      transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      h-[calc(100vh-64px)] md:h-full
    `}
    >
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-50 flex justify-between items-center bg-white">
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-none">
            Tin nhắn
          </h2>
          <p className="text-[10px] text-indigo-600 font-black mt-1 uppercase tracking-tighter">
            {chats.length} CUỘC HỘI THOẠI
          </p>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <HiX className="text-xl text-gray-500" />
        </button>
      </div>

      {/* Danh sách người nhắn tin */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1 custom-scrollbar">
        {chats.length > 0 ? (
          chats.map((item) => (
            <div
              key={item.chatId}
              className="cursor-pointer"
              onClick={() => {
                // --- CHỖ THAY ĐỔI QUAN TRỌNG ---
                // Thay vì đẩy ID vào URL, mình đẩy vào 'state' ẩn
                navigate(`/messages`, {
                  state: { activeChatId: item.chatId },
                  replace: true,
                });

                if (window.innerWidth < 768) {
                  setIsOpen(false);
                }
              }}
            >
              <ConversationItem
                data={item}
                // activeId lúc này sẽ được lấy từ location.state ở trang cha
                isActive={item.chatId === activeId}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm mt-10">
            Không có dữ liệu
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-50 bg-gray-50/30">
        <div className="flex items-center gap-2 px-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Hệ thống ổn định
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
