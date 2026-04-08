import React from "react";
import { 
  HiOutlineMailOpen, 
  HiOutlineUsers, 
  HiOutlineLightBulb, 
  HiOutlineUser, 
  HiOutlineLockClosed, 
  HiOutlineBell, 
  HiOutlineLogout 
} from "react-icons/hi";
import { mockUserData } from "../../mock/userData"; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // 1. ĐƯA HOOK VÀO BÊN TRONG COMPONENT
  const { userInfo } = useSelector((state) => state.user);

  // Trích xuất mảng notifications từ mock data
  const notifications = mockUserData.notifications;

  // Hàm phụ trợ: Trả về đúng React Icon và màu sắc dựa vào ID của thông báo
  const getNotificationIcon = (id) => {
    switch (id) {
      case 1:
        return <HiOutlineMailOpen className="text-blue-500 text-xl" />;
      case 2:
        return <HiOutlineUsers className="text-purple-500 text-xl" />;
      case 3:
        return <HiOutlineLightBulb className="text-orange-500 text-xl" />;
      default:
        return <HiOutlineBell className="text-gray-500 text-xl" />;
    }
  };

  // Đảm bảo không bị lỗi nếu userInfo chưa load kịp
  const userId = userInfo ? userInfo.userId : "";

  return (
    <>
      {/* Widget Thông Báo */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Thông báo</h2>
          <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
            {notifications.filter(n => n.active).length} MỚI
          </span>
        </div>
        
        <div className="space-y-6">
          {notifications.map((noti) => (
            <div key={noti.id} className="flex gap-4">
              <div className="mt-1">
                {getNotificationIcon(noti.id)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{noti.text}</p>
                <p className="text-xs text-gray-500 mt-1">{noti.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget Cài Đặt */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Cài đặt tài khoản</h2>
        <ul className="space-y-2">
          <li>
            {/* Link sang trang Profile kèm theo ID */}
            <Link 
              to={`/profile/${userId}`} 
              className="flex items-center gap-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-colors"
            >
              <HiOutlineUser className="text-xl" /> <span className="font-medium text-sm">Chỉnh sửa hồ sơ</span>
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-colors">
              <HiOutlineLockClosed className="text-xl" /> <span className="font-medium text-sm">Mật khẩu & Bảo mật</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-xl transition-colors">
              <HiOutlineBell className="text-xl" /> <span className="font-medium text-sm">Tùy chọn thông báo</span>
            </a>
          </li>
          <li className="pt-2 mt-2 border-t border-gray-100">
            <a href="#" className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors">
              <HiOutlineLogout className="text-xl" /> <span className="font-medium text-sm">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Box Support */}
      <div className="bg-[#7819c0] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden mt-8">
        <div className="absolute -bottom-6 -right-6 opacity-20">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Cần giúp đỡ?</h3>
          <p className="text-sm text-blue-100 mb-6 leading-relaxed">Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng 24/7 để giúp bạn tìm việc tốt nhất.</p>
          <button className="bg-white text-[#7819c0] font-bold py-2.5 px-6 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;