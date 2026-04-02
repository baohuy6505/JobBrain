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
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import ConversationItem from "../../Components/Messages/ConversationItem";

const MessagesPage = () => {
  const conversations = [
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
  ];

  const [activeId, setActiveId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedUser =
    conversations.find((u) => u.id === activeId) || conversations[0];

  const handleSelectConversation = (id) => {
    setActiveId(id);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#f8f9fb] pt-16 overflow-hidden text-gray-900 relative font-sans">
      {/* 1. SIDEBAR (DANH SÁCH BÊN TRÁI) */}
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
        <div className="p-4 bg-gray-50 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6344ff] rounded-lg flex items-center justify-center text-white font-bold shrink-0">
            HR
          </div>
          <div className="text-xs">
            <p className="font-bold uppercase tracking-tight">Hà Nguyễn</p>
            <p className="text-green-500 flex items-center gap-1 font-medium">
              ● Online
            </p>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 2. CHAT AREA (NỘI DUNG CHÍNH) */}
      <div className="flex-1 flex flex-col bg-white w-full border-r border-gray-100">
        {/* Header Chat */}
        <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg text-gray-600"
            >
              <HiMenuAlt2 className="text-2xl" />
            </button>
            <img
              src={selectedUser.avatar}
              className="w-10 h-10 rounded-lg object-cover bg-gray-100"
              alt="avt"
            />
            <div className="overflow-hidden">
              <h3 className="font-bold text-gray-900 text-sm truncate">
                {selectedUser.name}
              </h3>
              <p className="text-[10px] text-gray-400 uppercase font-semibold truncate">
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

        {/* Chat Body - ĐÃ CẬP NHẬT ĐẦY ĐỦ TIN NHẮN */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-gray-50/30 text-sm">
          <div className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-10">
            Hôm nay
          </div>

          {/* Tin nhắn nhận từ Ứng viên */}
          <div className="flex gap-3 max-w-[85%] md:max-w-[75%]">
            <img
              src={selectedUser.avatar}
              className="w-8 h-8 rounded-lg shrink-0 object-cover"
              alt="avt"
            />
            <div className="space-y-1">
              <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
                Hi Nguyen, thank you for reaching out earlier. I've reviewed the
                project requirements and I'm very interested in the position at
                the firm.
              </div>
              <span className="text-[10px] text-gray-400 ml-1">10:30 AM</span>
            </div>
          </div>

          {/* Tin nhắn gửi từ HR (Phản hồi lại) */}
          <div className="flex flex-row-reverse gap-3 max-w-[85%] md:max-w-[75%] ml-auto">
            <div className="flex flex-col items-end space-y-1">
              <div className="bg-[#6344ff] p-3 md:p-4 rounded-2xl rounded-tr-none shadow-md text-white leading-relaxed">
                That's great to hear, {selectedUser.name.split(" ")[0]}! Your
                portfolio impressed the partners. Do you have any specific
                availability for a technical screening this week?
              </div>
              <span className="text-[10px] text-gray-400 mr-1 flex items-center gap-1">
                10:35 AM{" "}
                <span className="text-blue-500 font-bold italic">● Read</span>
              </span>
            </div>
          </div>

          {/* Typing Indicator */}
          <div className="flex items-center gap-2 text-gray-400 text-[11px] italic animate-pulse pl-11">
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            </span>
            {selectedUser.name} đang gõ...
          </div>
        </div>

        {/* Input Nhập liệu */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center bg-gray-50 rounded-2xl p-1 md:p-2 gap-2">
            <input
              type="text"
              placeholder="Viết tin nhắn..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 outline-none"
            />
            <HiOutlineEmojiHappy className="hidden sm:block text-xl text-gray-400 cursor-pointer hover:text-gray-600" />
            <HiOutlinePaperClip className="text-xl text-gray-400 cursor-pointer hover:text-gray-600" />
            <button className="bg-[#6344ff] text-white px-4 md:px-6 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-purple-100 hover:bg-[#5235e5] transition-all active:scale-95">
              <span>Gửi</span> <FiSend />
            </button>
          </div>
        </div>
      </div>

      {/* 3. CỘT PHẢI (CHI TIẾT ỨNG VIÊN - THEO ẢNH MẪU) */}
      <div className="hidden lg:flex w-80 bg-white flex-col p-8 items-center overflow-y-auto border-l border-gray-50">
        <div className="mb-6">
          <img
            src={selectedUser.avatar}
            className="w-36 h-36 rounded-[2.5rem] object-cover shadow-lg border-4 border-white"
            alt="profile"
          />
        </div>
        <div className="text-center mb-8">
          <h2 className="font-bold text-gray-900 text-xl mb-1">
            {selectedUser.name}
          </h2>
          <p className="text-[13px] text-blue-600 font-bold uppercase tracking-wide italic">
            {selectedUser.role}
          </p>
        </div>
        <div className="w-full space-y-4 mb-8">
          <div className="bg-[#f0f4ff] p-5 rounded-2xl border border-blue-50">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">
              Current Role
            </p>
            <p className="text-[15px] font-bold text-gray-800 leading-tight">
              {selectedUser.currentRole}
            </p>
          </div>
          <div className="bg-[#f0f4ff] p-5 rounded-2xl border border-blue-50">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">
              Education
            </p>
            <p className="text-[15px] font-bold text-gray-800 leading-tight">
              {selectedUser.education}
            </p>
          </div>
        </div>
        <div className="w-full mb-10">
          <p className="text-[11px] text-gray-400 uppercase font-bold mb-4 tracking-widest px-1">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedUser.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#eef2ff] text-[#3730a3] text-[11px] px-4 py-2 rounded-full font-bold shadow-sm border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3.5 rounded-2xl hover:bg-blue-50 transition-all text-sm shadow-sm active:scale-95">
          Xem hồ sơ đầy đủ
        </button>
      </div>
    </div>
  );
};

export default MessagesPage;
