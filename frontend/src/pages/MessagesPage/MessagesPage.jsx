import React from "react";
import {
  HiOutlineSearch,
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiOutlineDotsVertical,
  HiOutlinePaperClip,
  HiOutlineEmojiHappy,
  HiOutlineDownload,
} from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import ConversationItem from "../../Components/Messages/ConversationItem";

const MessagesPage = () => {
  // Dữ liệu mẫu danh sách người nhắn tin
  const conversations = [
    {
      id: 1,
      name: "Sarah Nguyen",
      lastMessage: "I've attached the updated portfoli...",
      time: "10:42 AM",
      unread: 2,
      online: true,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "David Chen",
      lastMessage: "Great, looking forward to the interview o...",
      time: "YESTERDAY",
      unread: 0,
      online: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      lastMessage: "Thank you for the opportunity!",
      time: "FEB 12",
      unread: 0,
      online: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    },
  ];

  return (
    <div className="flex h-screen bg-[#f8f9fb] pt-16 overflow-hidden">
      {/* CỘT TRÁI: DANH SÁCH HỘI THOẠI (Sidebar) */}
      <div className="w-80 bg-white border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-50">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-purple-200"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((item) => (
            <ConversationItem
              key={item.id}
              data={item}
              isActive={item.id === 1}
            />
          ))}
        </div>

        {/* User Footer (Cột trái dưới cùng) */}
        <div className="p-4 bg-gray-50 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            HR
          </div>
          <div className="text-xs">
            <p className="font-bold">HR Nguyễn</p>
            <p className="text-green-500 flex items-center gap-1">● Online</p>
          </div>
        </div>
      </div>

      {/* CỘT GIỮA: NỘI DUNG TIN NHẮN */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Sarah Nguyen</h3>
              <p className="text-[10px] text-gray-400 uppercase font-semibold">
                Senior Architect Applicant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <HiOutlineVideoCamera className="text-xl cursor-pointer hover:text-purple-600" />
            <HiOutlinePhone className="text-xl cursor-pointer hover:text-purple-600" />
            <HiOutlineDotsVertical className="text-xl cursor-pointer hover:text-purple-600" />
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
          <div className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Hôm nay
          </div>

          {/* Tin nhắn nhận */}
          <div className="flex gap-3 max-w-[80%]">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              className="w-8 h-8 rounded-lg shrink-0"
            />
            <div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 leading-relaxed">
                Hi Nguyen, thank you for reaching out earlier. I've reviewed the
                project requirements and I'm very interested in the Senior
                Architect position at the firm.
              </div>
              <span className="text-[9px] text-gray-400 mt-1 block ml-1">
                10:30 AM
              </span>
            </div>
          </div>

          {/* Tin nhắn gửi */}
          <div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
            <div className="text-right">
              <div className="bg-[#6344ff] p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white leading-relaxed">
                That's great to hear, Sarah! Your portfolio impressed the
                partners. Do you have any specific availability for a technical
                screening this week?
              </div>
              <span className="text-[9px] text-gray-400 mt-1 block mr-1 text-right">
                10:35 AM ● Read
              </span>
            </div>
          </div>

          {/* Typing Indicator */}
          <div className="flex gap-2 items-center text-gray-400 text-[10px] italic">
            <span className="flex gap-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </span>
            Sarah Nguyen đang gõ...
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3"
            />
            <HiOutlineEmojiHappy className="text-xl text-gray-400 cursor-pointer" />
            <div className="w-[1px] h-6 bg-gray-200"></div>
            <HiOutlinePaperClip className="text-xl text-gray-400 cursor-pointer" />
            <button className="bg-[#6344ff] text-white px-6 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-purple-100 active:scale-95 transition-all">
              Send <FiSend />
            </button>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: CHI TIẾT ỨNG VIÊN (Hidden on mobile) */}
      <div className="hidden lg:flex w-72 bg-white border-l border-gray-100 flex-col p-6 items-center overflow-y-auto">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          className="w-24 h-24 rounded-2xl object-cover mb-4 ring-4 ring-purple-50"
        />
        <h2 className="font-bold text-gray-900 text-lg">Sarah Nguyen</h2>
        <p className="text-xs text-purple-600 font-semibold mb-6">
          Senior Design Architect
        </p>

        <div className="w-full space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
              Current Role
            </p>
            <p className="text-sm font-semibold text-gray-700">
              Atelier Associates
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
              Education
            </p>
            <p className="text-sm font-semibold text-gray-700">M.Arch, RISD</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-3">
              Core Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {["Revit", "BIM", "Sustainable Design", "Rhino 3D"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-purple-50 text-purple-600 text-[10px] px-3 py-1 rounded-full font-semibold border border-purple-100"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
          <button className="w-full border-2 border-[#6344ff] text-[#6344ff] font-bold py-3 rounded-xl hover:bg-purple-50 transition-all text-sm">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
