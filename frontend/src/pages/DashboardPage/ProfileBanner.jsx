import React from "react";

const ProfileBanner = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
      
      {/* Thông tin User */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?u=vinhha"
            alt="Vinh Hà"
            className="w-16 h-16 rounded-full border border-gray-200 bg-gray-50"
          />
          {/* Nút xanh nhỏ ở avatar */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-600 border-2 border-white rounded-full"></div>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Xin chào, Nguyễn Vinh Hà</h1>
          <p className="text-gray-500 text-sm mt-1">Chào mừng trở lại! Bạn có 3 lời mời phỏng vấn mới.</p>
        </div>
      </div>

      {/* Process Bar Hồ sơ */}
      <div className="w-full md:w-1/3">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-gray-700">Hồ sơ hoàn tất</span>
          <span className="font-bold text-blue-600">80%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
        </div>
        <p className="text-xs text-gray-400 text-right">Cập nhật thêm kinh nghiệm để đạt 100%</p>
      </div>

    </div>
  );
};

export default ProfileBanner;