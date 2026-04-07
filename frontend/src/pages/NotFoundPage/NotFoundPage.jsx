import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlineBriefcase } from "react-icons/hi";
// import ErrorIllustration from "../../Components/NotFound/ErrorIllustration";
// import ErrorDetails from "../../Components/NotFound/ErrorDetails";

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#f8faff] flex items-center justify-center mt-12 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Cột trái: Hình minh họa */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-square bg-white rounded-2xl shadow-xl border border-blue-50/50 p-8 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Lưới nền (Background Grid) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Tag góc trái trên */}
      <div className="absolute top-6 left-6 bg-blue-100 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
        SITE_MAP_MISSING
      </div>

      {/* Khối hộp minh họa (Hộp thư lỗi) */}
      <div className="relative z-10 flex flex-col items-center w-full mt-10">
        {/* Bóng đèn/Đèn báo */}
        <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 relative shadow-lg shadow-blue-500/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-blue-800 rounded-t-sm"></div>
        </div>
        
        {/* Chiếc hộp (Phong bì) */}
        <div className="w-48 h-24 border-2 border-blue-600 relative bg-white/80 backdrop-blur-sm">
          {/* Đường chéo phong bì */}
          <div className="absolute inset-0 overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100" y2="100" stroke="#2563eb" strokeWidth="2" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="#2563eb" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Đổ bóng hộp */}
        <div className="w-56 h-4 bg-blue-500/10 rounded-full mt-4 blur-sm"></div>
      </div>

      {/* Tag góc phải dưới */}
      <div className="absolute bottom-6 right-6 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-md">
        ERROR_FOUND
      </div>
    </div>
        </div>

        {/* Cột phải: Chi tiết lỗi & Nút bấm */}
        <div className="order-1 lg:order-2">
          <div className="max-w-md mx-auto lg:mx-0">
      
      {/* Badge */}
      <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider mb-6">
        Hệ thống không tìm thấy
      </span>

      {/* Tiêu đề */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
        Trang <br /> không <br /> tồn tại
      </h1>

      {/* Mô tả */}
      <p className="text-gray-500 text-sm leading-relaxed mb-10">
        Có vẻ như bạn đã đi lạc hoặc đường liên kết này đã bị hỏng. Đừng lo, có thể bài đăng hoặc trang web đã được di chuyển sang một vị trí mới trong hệ thống.
      </p>

      {/* Cụm Nút bấm */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link to="/" className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors shadow-sm">
          <HiOutlineHome className="text-xl" /> Về trang chủ
        </Link>
        
        <Link to="/jobs" className="flex-1 flex items-center justify-center gap-2 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-bold py-3.5 px-6 rounded-lg transition-colors">
          <HiOutlineBriefcase className="text-xl" /> Tìm việc làm
        </Link>
      </div>

      {/* Liên kết nhanh */}
      <div className="border-t border-gray-200 pt-6">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          Hoặc thử các liên kết nhanh:
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-gray-600">
          <Link to="/support" className="hover:text-blue-600 transition-colors">Hỗ trợ khách hàng</Link>
          <Link to="/network" className="hover:text-blue-600 transition-colors">Cổng ứng viên</Link>
          <Link to="/academy" className="hover:text-blue-600 transition-colors">Học viện Kinetix</Link>
        </div>
      </div>

    </div>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;