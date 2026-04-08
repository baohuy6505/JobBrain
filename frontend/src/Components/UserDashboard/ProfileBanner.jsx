import React from "react";
import { useSelector } from "react-redux";
import { mockUserData } from "../../mock/userData";
import { HiOutlineCalendar, HiOutlineArrowRight } from "react-icons/hi";

const ProfileBanner = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { welcomeMessage } = mockUserData.profile;

  // Lấy ngày hiện tại
  const today = new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-[#9810fa] rounded-3xl p-8 shadow-lg shadow-purple-500/20 flex flex-col md:flex-row items-center justify-between mb-8 gap-8 relative overflow-hidden">
      
      {/* Pattern chìm trang trí */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-10 w-40 h-40 bg-purple-900 opacity-20 rounded-full blur-2xl translate-y-1/2"></div>

      {/* Thông tin User */}
      <div className="flex items-center gap-6 relative z-10">
        <div className="relative group cursor-pointer">
          <img
            src={userInfo?.avatar || "https://i.pravatar.cc/150"} 
            alt={userInfo?.name || "User Avatar"}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/20 shadow-xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>
        </div>
        
        <div className="text-white">
          <div className="flex items-center gap-2 text-purple-100 text-sm mb-1 font-medium">
            <HiOutlineCalendar className="text-lg" />
            <span>{today}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Xin chào, {userInfo?.name || "Khách"}! 👋</h1>
          <p className="text-purple-100 text-sm md:text-base opacity-90">{welcomeMessage}</p>
        </div>
      </div>

      {/* Nút Call-to-action */}
      <div className="w-full md:w-auto relative z-10">
        <button className="w-full md:w-auto bg-white text-[#6344ff] hover:bg-gray-50 font-bold py-3 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
          Tìm việc ngay <HiOutlineArrowRight />
        </button>
      </div>

    </div>
  );
};

export default ProfileBanner;