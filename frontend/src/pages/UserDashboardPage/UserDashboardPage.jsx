import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileBanner from "../../Components/userDashboard/ProfileBanner";
import Stats from "../../Components/userDashboard/Stats";
import AppliedJobs from "../../Components/userDashboard/AppliedJobs";
import Sidebar from "../../Components/userDashboard/Sidebar";

const UserDashboardPage = () => {
  const { id } = useParams();

  const { userInfo, isAuthenticated } = useSelector((state) => state.user);

  // 3. LOGIC KIỂM TRA BẢO MẬT:
  // - Nếu chưa đăng nhập
  // - Hoặc userId trong Redux không giống với id trên URL
  // (Lưu ý: id từ URL luôn là dạng String, còn userId trong Redux của bạn đang là số 123, nên mình dùng String() để ép kiểu trước khi so sánh).
  if (!isAuthenticated || !userInfo || String(userInfo.userId) !== id) {
    
    // Cách 1: Hiển thị giao diện báo lỗi Không có quyền
    // return (
    //   <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
    //     <div className="text-center">
    //       <h1 className="text-4xl font-bold text-red-500 mb-4">403 - Truy cập bị từ chối</h1>
    //       <p className="text-gray-600">Bạn không có quyền xem thông tin của người dùng này.</p>
    //     </div>
    //   </div>
    // );

    // Cách 2: Tự động đá người dùng về lại notfound
    return <Navigate to="*" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] mt-12 pb-12 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-6">
          <span>Home</span> <span className="mx-2">{'>'}</span> <span className="text-gray-900 font-medium">Dashboard</span>
        </div>

        <ProfileBanner />
        <Stats />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AppliedJobs />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Sidebar />
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboardPage;