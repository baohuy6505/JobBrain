import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

const UserDetailSidebar = ({ user }) => {
  // 2. Bỏ prop onOpenModal đi
  const navigate = useNavigate(); // 3. Khởi tạo hàm chuyển trang

  if (!user) return null;

  return (
    <div className="hidden lg:flex w-80 bg-white flex-col p-8 items-center border-l border-gray-50 overflow-y-auto">
      <img
        src={user.avatar}
        className="w-32 h-32 rounded-3xl object-cover shadow-md mb-4"
        alt="profile"
      />
      <h2 className="font-bold text-gray-900 text-lg">{user.name}</h2>
      <p className="text-xs text-blue-600 font-bold mb-6">{user.role}</p>

      <div className="w-full bg-[#f0f4ff] p-4 rounded-xl mb-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
          Công ty
        </p>
        <p className="text-sm font-bold text-gray-800">{user.currentRole}</p>
      </div>

      {/* 4. Sửa lại logic onClick của nút bấm */}
      <button
        onClick={() => navigate(`/profile/${user.id}`)}
        className="w-full border-2 border-[#6344ff] text-[#6344ff] font-bold py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
      >
        Xem hồ sơ đầy đủ
      </button>
    </div>
  );
};

export default UserDetailSidebar;
