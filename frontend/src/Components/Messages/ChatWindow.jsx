import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// 1. Import hành động gửi tin nhắn từ Redux
import { sendNewMessage } from "../../features/Messages/messageSlice";

import {
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiMenuAlt2,
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const ChatWindow = ({ activeChat, setSidebarOpen }) => {
  const dispatch = useDispatch(); // 2. Khởi tạo dispatch
  const scrollRef = useRef(null);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    // 3. Gọi trực tiếp hành động gửi tin nhắn lên Redux
    dispatch(
      sendNewMessage({
        chatId: activeChat.id,
        text: messageText,
      }),
    );

    setMessageText("");
  };

  if (!activeChat)
    return (
      <div className="flex-1 bg-white flex items-center justify-center text-gray-400">
        Chọn một cuộc trò chuyện để bắt đầu
      </div>
    );

  return (
    <div className="flex-1 flex flex-col bg-white w-full border-r border-gray-100 h-full">
      {/* Header */}
      <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <HiMenuAlt2
            className="md:hidden text-2xl text-gray-600 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
          <img
            src={activeChat.avatar}
            className="w-10 h-10 rounded-lg object-cover"
            alt="avt"
          />
          <div>
            <h3 className="font-bold text-gray-900 text-sm">
              {activeChat.name}
            </h3>
            <p className="text-[10px] text-gray-400 uppercase font-bold">
              {activeChat.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <HiOutlineVideoCamera className="text-xl cursor-pointer hover:text-[#6344ff] transition-colors" />
          <HiOutlinePhone className="text-xl cursor-pointer hover:text-[#6344ff] transition-colors" />
        </div>
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50/30"
      >
        {activeChat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-[80%] ${msg.sender === "me" ? "ml-auto flex-row-reverse" : ""}`}
          >
            {msg.sender !== "me" && (
              <img
                src={activeChat.avatar}
                className="w-8 h-8 rounded-lg shrink-0 object-cover"
                alt="avt"
              />
            )}
            <div
              className={`p-3 rounded-2xl text-sm shadow-sm ${
                msg.sender === "me"
                  ? "bg-[#6344ff] text-white rounded-tr-none"
                  : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-2 border border-transparent focus-within:border-[#6344ff] focus-within:bg-white transition-all">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Nhập tin nhắn..."
            className="flex-1 bg-transparent border-none outline-none text-sm px-2 py-1"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#6344ff] text-white p-2.5 rounded-xl hover:bg-[#5235e5] transition-all shadow-sm active:scale-95"
          >
            <FiSend className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
