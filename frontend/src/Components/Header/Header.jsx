import React from "react";
import { HiOutlineBell, HiOutlineMoon } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../mock/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  // Lấy data từ Redux
  const user = useSelector((state) => state.user.userInfo);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const unreadCount = useSelector(
    (state) => state.notification?.unreadCount || 0,
  );

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#6344ff] border-b-2 border-[#6344ff] pb-1 font-bold"
      : "text-gray-500 hover:text-[#6344ff] transition-all pb-1";

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-50">
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center">
          <h1 className="text-black text-2xl font-bold tracking-tight">
            Job<span className="text-[#6344ff]">Brain</span>
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-6 font-medium">
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>
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

      <div className="flex items-center space-x-5">
        {isAuthenticated && user ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/notifications"
              className="text-gray-500 hover:text-[#6344ff] text-xl relative p-1"
            >
              <HiOutlineBell />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              )}
            </Link>
            <button className="text-gray-500 hover:text-[#6344ff] text-xl p-1">
              <HiOutlineMoon />
            </button>

            <div className="flex items-center space-x-3 ml-2 border-l pl-4 border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                  {user.address}
                </p>
              </div>
              <img
                src={user.avatar}
                className="h-10 w-10 rounded-full object-cover border"
                alt="Avatar"
              />
              <button
                onClick={() => dispatch(logout())}
                className="text-xs text-red-500 font-medium hover:bg-red-50 px-2 py-1 rounded-md"
              >
                Thoát
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link to="/login" className="px-4 py-2 text-gray-600 font-medium">
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-[#6344ff] text-white rounded-xl font-bold transition shadow-lg"
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
