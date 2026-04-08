import React, { useState } from "react";
import {
  HiOutlineBell,
  HiOutlineMoon,
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineLogout,
} from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../mock/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.userInfo);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const unreadCount = useSelector(
    (state) => state.notification?.unreadCount || 0,
  );

  // Hàm để xác định class cho NavLink
  const navLinkClass = ({ isActive }) =>
    `relative px-1 h-full flex items-center text-[15px] font-medium whitespace-nowrap ${
      isActive
        ? "text-[#6344ff] [text-shadow:_0.5px_0_0_currentcolor] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#6344ff] after:z-10"
        : "text-gray-500 hover:text-[#6344ff]"
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-white border-gray-200 px-6 flex items-center justify-between shadow-sm z-50 text-left">
        {/* LEFT: Logo & Nav */}
        <div className="flex items-center space-x-8 h-full">
          <Link to="/" className="flex items-center shrink-0">
            <h1 className="text-black text-2xl font-bold tracking-tight">
              Job<span className="text-[#6344ff]">Brain</span>
            </h1>
          </Link>

          <nav className="hidden md:flex space-x-6 font-medium h-full text-sm">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/list-job" className={navLinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/companies" className={navLinkClass}>
              Company
            </NavLink>
            <NavLink to={`/messages/${user.id}`} className={navLinkClass}>
              Messages
            </NavLink>
          </nav>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center space-x-4 h-full">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3 h-full">
              <Link
                to="/notifications"
                className="text-gray-500 hover:text-[#6344ff] text-xl relative p-1"
              >
                <HiOutlineBell />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </Link>

              <button className="hidden md:block text-gray-500 text-xl p-1">
                <HiOutlineMoon />
              </button>

              <div className="hidden md:flex items-center space-x-3 border-l pl-4 border-gray-200 h-full">
                <Link to={`/dashboard/${user?.userId}`} className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold text-gray-800">
                      {user?.name}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      {user?.address}
                    </p>
                  </div>
                  <img
                    src={user?.avatar}
                    className="h-10 w-10 rounded-full object-cover border"
                    alt="Avatar"
                  />
                </Link>
                <button
                  onClick={() => dispatch(logout())}
                  className="text-xs text-red-500 font-bold ml-2 hover:underline"
                >
                  Thoát
                </button>
              </div>

              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl text-gray-600 p-1 focus:outline-none"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-6">
                <Link
                  to="/login"
                  className="text-gray-600 font-bold text-sm hover:text-[#6344ff]"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 bg-[#6344ff] text-white rounded-xl font-bold text-sm shadow-md"
                >
                  Đăng ký
                </Link>
              </div>
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl text-gray-600 p-1 focus:outline-none"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* --- MOBILE SIDEBAR (BỎ TRƯỢT) --- */}
      {/* Overlay: Dùng hidden/block thay vì transition */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      />

      {/* Panel: Dùng hidden/block và bỏ hoàn toàn translate-x/transition */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col h-full text-left">
          <div className="p-6 flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold tracking-tight">
              Job<span className="text-[#6344ff]">Brain</span>
            </h1>
            <button onClick={toggleMenu} className="text-2xl text-gray-400 p-1">
              <HiOutlineX />
            </button>
          </div>

          <div className="p-6 bg-slate-50 border-b border-slate-100">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                  alt="Avatar"
                />
                <div>
                  <p className="font-bold text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.address}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  Bắt đầu ngay
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    onClick={toggleMenu}
                    className="py-3 text-center border border-slate-200 text-slate-600 font-bold rounded-xl text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={toggleMenu}
                    className="py-3 text-center bg-[#6344ff] text-white font-bold rounded-xl text-sm"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className="block px-4 py-3 rounded-xl text-gray-600 font-bold hover:bg-indigo-50 hover:text-[#6344ff]"
            >
              Home
            </NavLink>
            <NavLink
              to="/list-job"
              onClick={toggleMenu}
              className="block px-4 py-3 rounded-xl text-gray-600 font-bold hover:bg-indigo-50 hover:text-[#6344ff]"
            >
              Jobs
            </NavLink>
            <NavLink
              to="/companies"
              onClick={toggleMenu}
              className="block px-4 py-3 rounded-xl text-gray-600 font-bold hover:bg-indigo-50 hover:text-[#6344ff]"
            >
              Company
            </NavLink>
            <NavLink
              to="/messages"
              onClick={toggleMenu}
              className="block px-4 py-3 rounded-xl text-gray-600 font-bold hover:bg-indigo-50 hover:text-[#6344ff]"
            >
              Messages
            </NavLink>
          </nav>

          {isAuthenticated && (
            <div className="p-6 border-t border-slate-100">
              <button
                onClick={() => {
                  dispatch(logout());
                  toggleMenu();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-red-50 text-red-600 font-bold rounded-2xl"
              >
                <HiOutlineLogout size={20} /> Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
