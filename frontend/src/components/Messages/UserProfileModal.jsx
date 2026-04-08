import React from "react";
import { HiX, HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";

const UserProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Lớp nền mờ (Backdrop) */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Nội dung Modal */}
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Nút đóng nhanh */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full z-10 transition-colors"
        >
          <HiX className="text-xl text-gray-500 md:text-white" />
        </button>

        {/* Banner trang trí */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="px-6 pb-8">
          {/* Avatar đè lên banner */}
          <div className="relative flex justify-center -mt-16 mb-4">
            <img
              src={user.avatar}
              className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg bg-white object-cover"
              alt={user.name}
            />
          </div>

          {/* Thông tin cơ bản */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {user.role}
            </p>
          </div>

          {/* Chi tiết học vấn & kinh nghiệm */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
              <HiOutlineBriefcase className="text-xl text-gray-400 mt-1" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Kinh nghiệm hiện tại
                </p>
                <p className="text-sm font-bold text-gray-800">
                  {user.currentRole || "Chưa cập nhật"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
              <HiOutlineAcademicCap className="text-xl text-gray-400 mt-1" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Học vấn
                </p>
                <p className="text-sm font-bold text-gray-800">
                  {user.education || "Chưa cập nhật"}
                </p>
              </div>
            </div>
          </div>

          {/* Nút đóng cuối Modal */}
          <button
            onClick={onClose}
            className="w-full mt-8 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-all active:scale-[0.98]"
          >
            Đóng hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
