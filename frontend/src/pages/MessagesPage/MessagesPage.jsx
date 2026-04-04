import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveChat, addMessage } from "../../features/store/messageSlice";
import {
  HiOutlineSearch,
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiOutlineDotsVertical,
  HiMenuAlt2,
  HiX,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import ConversationItem from "../../Components/Messages/ConversationItem";

// --- MODAL HỒ SƠ ---
const UserProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
        >
          <HiX className="text-xl text-gray-500" />
        </button>
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="px-6 pb-8">
          <div className="relative flex justify-center -mt-16 mb-4">
            <img
              src={user.avatar}
              className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg bg-white object-cover"
              alt="avt"
            />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {user.role}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
              <HiOutlineBriefcase className="text-xl text-gray-400 mt-1" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Kinh nghiệm
                </p>
                <p className="text-sm font-bold text-gray-800">
                  {user.currentRole}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
              <HiOutlineAcademicCap className="text-xl text-gray-400 mt-1" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Học vấn
                </p>
                <p className="text-sm font-bold text-gray-800">
                  {user.education}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full mt-8 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-all"
          >
            Đóng hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
};

// --- TRANG CHÍNH ---
const MessagesPage = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  const conversations = useSelector((state) => state.messages.conversations);
  const activeId = useSelector((state) => state.messages.activeId);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  const selectedUser =
    conversations.find((u) => u.id === activeId) || conversations[0];

  // Tự động cuộn xuống cuối khi có tin nhắn mới
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [selectedUser.messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    dispatch(addMessage({ id: selectedUser.id, text: messageText }));
    setMessageText("");
  };

  return (
    <div className="flex h-screen bg-[#f8f9fb] pt-16 overflow-hidden text-gray-900 relative font-sans">
      {/* 1. SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 md:relative md:translate-x-0 md:flex md:w-80 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="md:hidden flex justify-end p-4">
          <HiX
            className="text-2xl text-gray-400"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="px-4 pb-4 border-b border-gray-50">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                dispatch(setActiveChat(item.id));
                setIsSidebarOpen(false);
              }}
            >
              <ConversationItem data={item} isActive={item.id === activeId} />
            </div>
          ))}
        </div>
      </div>

      {/* 2. CHAT AREA */}
      <div className="flex-1 flex flex-col bg-white w-full border-r border-gray-100">
        {/* Chat Header */}
        <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <HiMenuAlt2
              className="md:hidden text-2xl text-gray-600"
              onClick={() => setIsSidebarOpen(true)}
            />
            <img
              src={selectedUser.avatar}
              className="w-10 h-10 rounded-lg object-cover"
              alt="avt"
            />
            <div>
              <h3 className="font-bold text-gray-900 text-sm">
                {selectedUser.name}
              </h3>
              <p className="text-[10px] text-gray-400 uppercase font-bold">
                {selectedUser.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <HiOutlineVideoCamera className="text-xl cursor-pointer hover:text-[#6344ff]" />
            <HiOutlinePhone className="text-xl cursor-pointer hover:text-[#6344ff]" />
          </div>
        </div>

        {/* CHAT BODY (SỬA LỖI Ở ĐÂY) */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50/30"
        >
          {selectedUser.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[80%] ${msg.sender === "me" ? "ml-auto flex-row-reverse" : ""}`}
            >
              {msg.sender === "them" && (
                <img
                  src={selectedUser.avatar}
                  className="w-8 h-8 rounded-lg shrink-0 object-cover"
                  alt="avt"
                />
              )}
              <div
                className={`p-3 rounded-2xl text-sm shadow-sm ${msg.sender === "me" ? "bg-[#6344ff] text-white rounded-tr-none" : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* CHAT INPUT */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-2">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Nhập tin nhắn..."
              className="flex-1 bg-transparent border-none outline-none text-sm px-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#6344ff] text-white p-2.5 rounded-xl hover:bg-[#5235e5] transition-all"
            >
              <FiSend className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. RIGHT SIDEBAR */}
      <div className="hidden lg:flex w-80 bg-white flex-col p-8 items-center border-l border-gray-50 overflow-y-auto">
        <img
          src={selectedUser.avatar}
          className="w-32 h-32 rounded-3xl object-cover shadow-md mb-4"
          alt="profile"
        />
        <h2 className="font-bold text-gray-900 text-lg">{selectedUser.name}</h2>
        <p className="text-xs text-blue-600 font-bold mb-6">
          {selectedUser.role}
        </p>
        <div className="w-full bg-[#f0f4ff] p-4 rounded-xl mb-6">
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
            Công ty
          </p>
          <p className="text-sm font-bold text-gray-800">
            {selectedUser.currentRole}
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full border-2 border-[#6344ff] text-[#6344ff] font-bold py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
        >
          Xem hồ sơ đầy đủ
        </button>
      </div>

      <UserProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default MessagesPage;
