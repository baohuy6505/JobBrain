import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// 1. IMPORT HÀM GỌI API TỪ REDUX SLICE
import { fetchConversations } from "../../features/Messages/messageSlice";

import Sidebar from "../../components/Messages/Sidebar";
import ChatWindow from "../../components/Messages/ChatWindow";
import UserDetailSidebar from "../../components/Messages/UserDetailSidebar";

const MessagesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 2. LẤY DỮ LIỆU TỪ "ĐÁM MÂY" REDUX
  // Lấy danh sách tin nhắn và trạng thái tải (idle, loading, succeeded)
  const { conversations, status } = useSelector((state) => state.messages);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 3. KÍCH HOẠT REDUX ĐI LẤY API KHI VÀO TRANG
  useEffect(() => {
    // Chỉ gọi API 1 lần duy nhất khi dữ liệu chưa được tải (trạng thái 'idle')
    if (status === "idle") {
      dispatch(fetchConversations());
    }
  }, [status, dispatch]);

  // 4. ĐỒNG BỘ URL (Nếu không có ID thì đẩy về người đầu tiên)
  useEffect(() => {
    if (status === "succeeded" && conversations.length > 0 && !id) {
      navigate(`/messages/${conversations[0].id}`, { replace: true });
    }
  }, [id, status, conversations, navigate]);

  // 5. MÀN HÌNH CHỜ (Hiển thị khi Redux đang tải dữ liệu)
  if (status === "loading" || status === "idle") {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f8f9fb]">
        <div className="w-10 h-10 border-4 border-[#6344ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Tìm người đang chat hiện tại
  const activeChat =
    conversations.find((c) => c.id === Number(id)) || conversations[0];

  return (
    <div className="flex h-screen bg-[#f8f9fb] pt-16 overflow-hidden text-gray-900 relative font-sans">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        conversations={conversations}
        activeId={Number(id)}
      />

      <ChatWindow
        activeChat={activeChat}
        setSidebarOpen={setIsSidebarOpen}
        // Lưu ý: Đã xóa truyền onSendMessage ở đây vì ChatWindow giờ tự gọi Redux
      />
      <UserDetailSidebar user={activeChat} />
    </div>
  );
};

export default MessagesPage;
