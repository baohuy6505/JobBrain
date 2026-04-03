import React, { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiOutlineDotsVertical,
  HiOutlinePaperClip,
  HiOutlineEmojiHappy,
  HiMenuAlt2,
  HiX,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import ConversationItem from "../../Components/Messages/ConversationItem";

// --- COMPONENT MODAL CHI TIẾT (TRANG NHỎ HIỆN RA) ---
const UserProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Lớp nền mờ */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Nội dung Modal */}
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
              className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg bg-white"
              alt="avatar"
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

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-3 px-1">
                Kỹ năng chính
              </p>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-[11px] px-3 py-1.5 rounded-lg font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-8 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-all active:scale-95"
          >
            Đóng hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT CHÍNH ---
const MessagesPage = () => {
  // Dữ liệu mẫu (Sau này sẽ đổ từ API vào đây)
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Sarah Nguyen",
      role: "Senior Design Architect",
      currentRole: "Atelier Associates",
      education: "M.Arch, RISD",
      lastMessage: "I've attached the updated portfoli...",
      time: "10:42 AM",
      unread: 2,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      skills: ["Revit", "BIM", "Sustainable Design", "Rhino 3D"],
    },
    {
      id: 2,
      name: "David Chen",
      role: "Frontend Developer Applicant",
      currentRole: "Tech Solutions Inc.",
      education: "B.S. Computer Science",
      lastMessage: "Great, looking forward to the interview o...",
      time: "YESTERDAY",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      skills: ["ReactJS", "Tailwind CSS", "TypeScript"],
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Product Designer Applicant",
      currentRole: "Creative Studio",
      education: "BFA in Graphic Design",
      lastMessage: "Thank you for the opportunity!",
      time: "FEB 12",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      skills: ["Figma", "UI/UX", "Adobe XD"],
    },
  ]);

  const [activeId, setActiveId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở Modal hồ sơ
  const [messageText, setMessageText] = useState(""); // Biến để lấy dữ liệu gửi lên API

  const selectedUser =
    conversations.find((u) => u.id === activeId) || conversations[0];

  const handleSelectConversation = (id) => {
    setActiveId(id);
    setIsSidebarOpen(false);
  };

  // Hàm xử lý gửi tin nhắn (Chuẩn bị để gọi API)
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    console.log("Dữ liệu gửi lên API:", {
      receiverId: selectedUser.id,
      text: messageText,
    });
    setMessageText("");
  };

  return (
    // Bỏ h-screen và dùng flex h-screen sẽ giúp trang không có footer nếu bạn bao bọc nó đúng cách
    <div className="flex h-screen bg-[#f8f9fb] pt-16 overflow-hidden text-gray-900 relative font-sans">
      {/* 1. SIDEBAR BÊN TRÁI */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out md:pt-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex md:w-80`}
      >
        <div className="md:hidden flex justify-end p-4">
          <HiX
            className="text-2xl text-gray-400 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="px-4 pb-4 border-b border-gray-50">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectConversation(item.id)}
            >
              <ConversationItem data={item} isActive={item.id === activeId} />
            </div>
          ))}
        </div>

        {/* Phần Info của mình ở dưới Sidebar (Có thể coi là mini-footer của sidebar) */}
        <div className="p-4 bg-gray-50 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6344ff] rounded-lg flex items-center justify-center text-white font-bold">
            HR
          </div>
          <div className="text-xs">
            <p className="font-bold uppercase tracking-tight">Hà Nguyễn</p>
            <p className="text-green-500 font-medium">● Online</p>
          </div>
        </div>
      </div>

      {/* 2. CHAT AREA */}
      <div className="flex-1 flex flex-col bg-white w-full border-r border-gray-100">
        {/* Header Chat */}
        <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-gray-600"
            >
              <HiMenuAlt2 className="text-2xl" />
            </button>
            <img
              src={selectedUser.avatar}
              className="w-10 h-10 rounded-lg object-cover"
              alt="avt"
            />
            <div className="overflow-hidden">
              <h3 className="font-bold text-gray-900 text-sm truncate">
                {selectedUser.name}
              </h3>
              <p className="text-[10px] text-gray-400 uppercase font-semibold">
                {selectedUser.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <HiOutlineVideoCamera className="text-xl cursor-pointer hover:text-blue-600" />
            <HiOutlinePhone className="text-xl cursor-pointer hover:text-blue-600" />
            <HiOutlineDotsVertical className="text-xl cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-gray-50/30">
          {/* (Phần tin nhắn giữ nguyên như cũ của bạn...) */}
          <div className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-10">
            Hôm nay
          </div>
          <div className="flex gap-3 max-w-[85%] md:max-w-[75%]">
            <img
              src={selectedUser.avatar}
              className="w-8 h-8 rounded-lg shrink-0 object-cover"
              alt="avt"
            />
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 leading-relaxed">
              Hi Nguyen, thank you for reaching out earlier...
            </div>
          </div>
        </div>

        {/* Input - Đã thêm biến để lấy dữ liệu gửi đi */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center bg-gray-50 rounded-2xl p-1 md:p-2 gap-2">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Viết tin nhắn..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#6344ff] text-white px-4 md:px-6 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg hover:bg-[#5235e5] transition-all"
            >
              <span>Gửi</span> <FiSend />
            </button>
          </div>
        </div>
      </div>

      {/* 3. CỘT PHẢI (CHI TIẾT NHANH) */}
      <div className="hidden lg:flex w-80 bg-white flex-col p-8 items-center overflow-y-auto border-l border-gray-50">
        <img
          src={selectedUser.avatar}
          className="w-36 h-36 rounded-[2.5rem] object-cover shadow-lg border-4 border-white mb-6"
          alt="profile"
        />
        <div className="text-center mb-8">
          <h2 className="font-bold text-gray-900 text-xl mb-1">
            {selectedUser.name}
          </h2>
          <p className="text-[13px] text-blue-600 font-bold uppercase italic">
            {selectedUser.role}
          </p>
        </div>

        <div className="w-full space-y-4 mb-8">
          <div className="bg-[#f0f4ff] p-5 rounded-2xl border border-blue-50 text-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
              Current Role
            </p>
            <p className="font-bold text-gray-800">
              {selectedUser.currentRole}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3.5 rounded-2xl hover:bg-blue-50 transition-all text-sm shadow-sm active:scale-95"
        >
          Xem hồ sơ đầy đủ
        </button>
      </div>

      {/* RENDER MODAL */}
      <UserProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default MessagesPage;
