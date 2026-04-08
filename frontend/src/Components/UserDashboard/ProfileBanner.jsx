import React from "react";
import { useSelector } from "react-redux"; // Import hook để lấy data từ Redux
import { mockUserData } from "../../mock/userData"; // Đường dẫn file mock của bạn

const ProfileBanner = () => {
  // 1. Lấy thông tin user (tên, avatar) từ Redux store
  // (Giả sử trong store bạn đặt tên reducer là 'user')
  const { userInfo } = useSelector((state) => state.user);

  // 2. Lấy thông tin profile (câu chào, phần trăm) từ file mock
  const { welcomeMessage, completionPercent } = mockUserData.profile;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
      
      {/* Thông tin User */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            // Thay src và alt bằng dữ liệu động từ Redux
            src={userInfo?.avatar || "https://i.pravatar.cc/150"} 
            alt={userInfo?.name || "User Avatar"}
            className="w-16 h-16 rounded-full border border-gray-200 bg-gray-50 object-cover"
          />
          {/* Nút xanh nhỏ ở avatar */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-600 border-2 border-white rounded-full"></div>
        </div>
        
        <div>
          {/* Đổ tên user từ Redux */}
          <h1 className="text-2xl font-bold text-gray-900">Xin chào, {userInfo?.name || "Khách"}</h1>
          {/* Đổ câu chào từ Mock Data */}
          <p className="text-gray-500 text-sm mt-1">{welcomeMessage}</p>
        </div>
      </div>

      {/* Process Bar Hồ sơ */}
      <div className="w-full md:w-1/3">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-gray-700">Hồ sơ hoàn tất</span>
          {/* Đổ phần trăm từ Mock Data */}
          <span className="font-bold text-blue-600">{completionPercent}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
          {/* Style width động theo phần trăm */}
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${completionPercent}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 text-right">Cập nhật thêm kinh nghiệm để đạt 100%</p>
      </div>

    </div>
  );
};

export default ProfileBanner;