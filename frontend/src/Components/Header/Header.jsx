import React, { useState } from "react";
import { HiOutlineBell, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // State người dùng (Để null nếu muốn test trạng thái chưa đăng nhập)
  const [user, setUser] = useState({
    name: "Vinh Hà",
    age: 21,
    avatar: "https://i.pravatar.cc/150?u=vinhha",
    address: "Đà Nẵng, Việt Nam",
  });

  const logout = () => setUser(null);

  // Style cho các link khi được kích hoạt (Active)
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#6344ff] border-b-2 border-[#6344ff] pb-1 font-bold"
      : "text-gray-500 hover:text-[#6344ff] transition-all pb-1";

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-50">
      {/* LEFT: Logo & Navigation */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center">
          <h1 className="text-black-600 text-2xl font-bold cursor-pointer tracking-tight">
            Job<span className="text-[#6344ff]">Brain</span>
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-6 font-medium">
          <NavLink to="/jobs" className={navLinkClass}>
            Jobs
          </NavLink>
          <NavLink to="/companies" className={navLinkClass}>
            Companies
          </NavLink>
          <NavLink to="/messages" className={navLinkClass}>
            Messages
          </NavLink>
        </nav>
      </div>

      {/* RIGHT: Actions / User Profile */}
      <div className="flex items-center space-x-5">
        {user ? (
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="text-gray-500 hover:text-[#6344ff] text-xl relative p-1">
              <HiOutlineBell />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Dark Mode Toggle */}
            <button className="text-gray-500 hover:text-[#6344ff] text-xl p-1">
              <HiOutlineMoon />
            </button>

            {/* User Info & Avatar */}
            <div className="flex items-center space-x-3 ml-2 border-l pl-4 border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-800 leading-none">
                  {user.name}
                </p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                  {user.address}
                </p>
              </div>

              <div className="relative group">
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full object-cover border border-gray-100 cursor-pointer hover:ring-2 hover:ring-[#6344ff] transition-all"
                />
              </div>

              <button
                onClick={logout}
                className="text-xs text-red-500 font-medium hover:bg-red-50 px-2 py-1 rounded-md transition-colors"
              >
                Thoát
              </button>
            </div>
          </div>
        ) : (
          /* Trường hợp: CHƯA ĐĂNG NHẬP */
          <div className="flex items-center space-x-2">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-600 font-medium hover:text-[#6344ff] transition"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-[#6344ff] text-white rounded-xl font-bold hover:bg-[#5235d9] transition shadow-lg shadow-purple-100 active:scale-95"
            >
              Đăng ký
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
