import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Thay useParams bằng useLocation
import { useSelector, useDispatch } from "react-redux";
import { fetchConversations } from "../../features/Messages/messageSlice";

import Sidebar from "../../components/Messages/Sidebar";
import ChatWindow from "../../components/Messages/ChatWindow";
import UserDetailSidebar from "../../components/Messages/UserDetailSidebar";

const MessagesPage = () => {
  const location = useLocation(); // Lấy thông tin location để đọc state ẩn
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { conversations, status } = useSelector((state) => state.messages);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 1. Lấy activeId từ state ẩn mà Sidebar gửi qua
  // Nếu không có (lần đầu vào trang), mặc định lấy chatId của người đầu tiên
  const activeId =
    location.state?.activeChatId ||
    (conversations.length > 0 ? conversations[0].chatId : null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchConversations("vinh_ha_21"));
    }
  }, [status, dispatch]);

  // 2. TÌM NGƯỜI ĐANG CHAT dựa trên activeId ẩn
  const activeChat = conversations.find((c) => c.chatId === activeId);

  if (status === "loading" || status === "idle") {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f8f9fb]">
        <div className="w-10 h-10 border-4 border-[#6344ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#f8f9fb] pt-16 overflow-hidden text-gray-900 relative font-sans">
      {/* Sidebar bên trái: Truyền activeId ẩn để Sidebar biết dòng nào đang Active */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        activeId={activeId}
      />
      {/* KHUNG CHÍNH */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white border-r border-gray-100">
        {activeChat ? (
          <ChatWindow
            activeChat={activeChat}
            setSidebarOpen={setIsSidebarOpen}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Chọn một cuộc trò chuyện để bắt đầu
          </div>
        )}
      </div>

      {/* Sidebar chi tiết bên phải */}
      {activeChat && (
        <div className="hidden lg:block w-80 h-full border-l border-gray-50">
          <UserDetailSidebar user={activeChat.partner} />
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
