import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { sendNewMessage } from "../../features/Messages/messageSlice";

import {
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiMenuAlt2,
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const ChatWindow = ({ activeChat, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [messageText, setMessageText] = useState("");

  // Tự động cuộn xuống cuối khi có tin nhắn mới
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    // Gửi tin nhắn lên Redux
    dispatch(
      sendNewMessage({
        chatId: activeChat.chatId, // Dùng chatId từ masterData (c_001, c_002)
        message: {
          id: `m_${Date.now()}`,
          senderId: "vinh_ha_21", // ID của Hà
          text: messageText,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      }),
    );

    setMessageText("");
  };

  // Nếu chưa chọn ai ở Sidebar
  if (!activeChat)
    return (
      <div className="flex-1 bg-white flex flex-col items-center justify-center text-gray-400 gap-4">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <p className="font-medium">Chọn một cuộc trò chuyện để bắt đầu</p>
      </div>
    );

  return (
    <div className="flex-1 flex flex-col bg-white w-full border-r border-gray-100 h-full overflow-hidden">
      {/* --- Header: Hiển thị thông tin người đang chat (Trí/Marcus) --- */}
      <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-3">
          <HiMenuAlt2
            className="md:hidden text-2xl text-gray-600 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
          <div className="relative">
            <img
              src={activeChat.partner.avatar} // Lấy avatar từ partner
              className="w-10 h-10 rounded-full object-cover border border-gray-100"
              alt="avt"
            />
            {activeChat.partner.status === "online" && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">
              {activeChat.partner.name} {/* Hiện tên Trí hoặc Marcus */}
            </h3>
            <p className="text-[10px] text-green-500 uppercase font-bold tracking-wider">
              {activeChat.partner.status === "online"
                ? "Đang hoạt động"
                : "Ngoại tuyến"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <HiOutlineVideoCamera className="text-xl cursor-pointer hover:text-[#3b82f6] transition-colors" />
          <HiOutlinePhone className="text-xl cursor-pointer hover:text-[#3b82f6] transition-colors" />
        </div>
      </div>

      {/* --- Body: Danh sách tin nhắn --- */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-[#f8f9fd] scroll-smooth"
      >
        {activeChat.messages.map((msg) => {
          // Kiểm tra xem tin nhắn này là của Hà hay của bạn (Trí/Marcus)
          const isMe = msg.senderId === "vinh_ha_21";

          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${isMe ? "ml-auto flex-row-reverse" : ""}`}
            >
              {!isMe && (
                <img
                  src={activeChat.partner.avatar}
                  className="w-8 h-8 rounded-full shrink-0 object-cover mt-1 shadow-sm"
                  alt="avt"
                />
              )}
              <div className="flex flex-col">
                <div
                  className={`p-3 rounded-2xl text-[13px] shadow-sm leading-relaxed ${
                    isMe
                      ? "bg-[#3b82f6] text-white rounded-tr-none"
                      : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
                <span
                  className={`text-[9px] text-gray-400 mt-1 font-medium ${isMe ? "text-right" : "text-left"}`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Input: Ô nhập tin nhắn --- */}
      <div className="p-4 border-t border-gray-100 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-2 border border-transparent focus-within:border-[#3b82f6] focus-within:bg-white transition-all">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={`Nhắn tin cho ${activeChat.partner.name}...`}
            className="flex-1 bg-transparent border-none outline-none text-sm px-3 py-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#3b82f6] text-white p-3 rounded-xl hover:bg-[#60a5fa] transition-all shadow-md active:scale-95 flex items-center justify-center"
          >
            <FiSend className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
