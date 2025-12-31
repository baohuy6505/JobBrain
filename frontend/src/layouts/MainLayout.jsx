import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBrain, FaBriefcase, FaChartBar, FaUserCircle } from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header chuẩn Tailwind */}
      <nav className="bg-primary text-white py-4 px-10 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
          <FaBrain className="text-3xl text-blue-200" />
          <span className="text-2xl font-bold tracking-tight">JobBrain AI</span>
        </div>

        <div className="flex gap-6 font-medium">
          <Link
            to="/"
            className="hover:text-blue-200 flex items-center gap-2 transition-all"
          >
            <FaBriefcase /> Trang chủ
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-blue-200 flex items-center gap-2 transition-all"
          >
            <FaChartBar /> Thống kê
          </Link>
          <Link
            to="/login"
            className="bg-white text-primary px-4 py-1.5 rounded-full hover:bg-blue-50 transition-all flex items-center gap-2"
          >
            <FaUserCircle /> Đăng nhập
          </Link>
        </div>
      </nav>

      <main className="flex-1 w-full px-10 py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <p className="font-bold text-white mb-1">
          JOBBRAIN - HỆ THỐNG TUYỂN DỤNG THÔNG MINH
        </p>
        <p>© 2025 Đồ án học phần JavaScript (31231397)</p>
      </footer>
    </div>
  );
};

export default MainLayout;
