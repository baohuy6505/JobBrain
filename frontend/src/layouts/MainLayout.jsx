import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
      {!isMessagesPage && <Footer />}
    </div>
  );
};

export default MainLayout;
