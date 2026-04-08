import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import FooterUSer from "../components/Footer/FooterUser";

const MainLayout = () => {
  // 1. Lấy thông tin đường dẫn hiện tại (URL)
  const location = useLocation();

  // 2. Kiểm tra xem trang hiện tại có phải là trang tin nhắn không
  const isMessagesPage = location.pathname.startsWith("/messages");
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      {/* 3. Chỉ hiển thị Footer nếu KHÔNG PHẢI là trang tin nhắn */}
      {!isMessagesPage && <FooterUSer />}
    </div>
  );
};

export default MainLayout;
