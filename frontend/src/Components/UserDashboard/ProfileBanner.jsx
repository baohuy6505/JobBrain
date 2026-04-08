import React from "react";
import { useSelector } from "react-redux";
import { mockUserData } from "../../mock/userData";
import { HiOutlineCalendar, HiOutlineArrowRight } from "react-icons/hi";

const ProfileBanner = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { welcomeMessage } = mockUserData.profile;

  const today = new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
      
      <div className="flex items-center gap-5">
        
        <div className="relative shrink-0">
          <img
            src={userInfo?.avatar || "https://i.pravatar.cc/150"} 
            alt={userInfo?.name || "User Avatar"}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 object-cover"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        
        <div>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium mb-1">
            <HiOutlineCalendar className="text-sm" />
            <span>{today}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Xin chào, {userInfo?.name || "Khách"}
          </h1>
          <p className="text-gray-600 text-sm mt-1">{welcomeMessage}</p>
        </div>

      </div>

      <div className="w-full md:w-auto mt-2 md:mt-0">
        <button className="w-full md:w-auto bg-[#6344ff] hover:bg-[#5236d6] text-white font-medium py-2.5 px-6 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors">
          Tìm việc ngay <HiOutlineArrowRight />
        </button>
      </div>

    </div>
  );
};

export default ProfileBanner;