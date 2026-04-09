import React, { useState } from "react";
import {
  HiOutlineBell,
  HiOutlineMoon,
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineLogout,
} from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../mock/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector((state) => state.user.userInfo);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const unreadCount = useSelector(
    (state) => state.notification?.unreadCount || 0,
  );

  const userRole = user?.role || "candidate"; //xac dinhj role

  // Hàm để xác định class cho NavLink
  const navLinkClass = ({ isActive }) =>
    `relative px-1 h-full flex items-center text-[15px] font-medium whitespace-nowrap ${
      isActive
        ? "text-[#6344ff] [text-shadow:_0.5px_0_0_currentcolor] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#6344ff] after:z-10"
        : "text-gray-500 hover:text-[#6344ff]"
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    //xu li khi logout
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between shadow-sm z-50">
        {/* --- LEFT: Logo & Dynamic Navigation --- */}
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

            {/* Menu cho Candidate & Khách vãng lai */}
            {/* {(userRole === "candidate" || !isAuthenticated) && (
              <>
                <NavLink to="/list-job" className={navLinkClass}>
                  Việc làm
                </NavLink>
                <NavLink to="/companies" className={navLinkClass}>
                  Công ty
                </NavLink>
              </>
            )} */}
              <NavLink to="/list-job" className={navLinkClass}>
                  Việc làm
                </NavLink>
                <NavLink to="/companies" className={navLinkClass}>
                  Công ty
                </NavLink>


            {/* Mục chung cho người đã đăng nhập */}
            {/* {isAuthenticated && (
              <NavLink to="/messages" className={navLinkClass}>
                Tin nhắn
              </NavLink>
              
            )} */}
              <NavLink to="/messages" className={navLinkClass}>
                Tin nhắn
              </NavLink>
          </nav>
            
            {/* <NavLink to="/admin/dashboard" className={navLinkClass}>
              Admin
          </NavLink>
           <NavLink to="/manager" className={navLinkClass}>
              Manager
            </NavLink> */}
        </div>

        {/* --- RIGHT: Actions --- */}
        <div className="flex items-center space-x-4 h-full">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3 h-full">
              {/* Thông báo */}
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
                    src={
                      user?.avatar || "https://ui-avatars.com/api/?name=User"
                    }
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm hover:border-[#6344ff] transition-all"
                    alt="Avatar"
                  />
                </Link>
                
              </div>
              <div>
                <nav className="hidden md:flex space-x-6 font-medium h-full text-sm">
                  <NavLink to="/manager/" className={navLinkClass}>
                    Manager
                  </NavLink>
                  <NavLink to="/admin/dashboard" className={navLinkClass}>
                    Admin
                  </NavLink>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  title="Đăng xuất"
                >
                  <HiOutlineLogout size={22} />
                </button>
                </nav>
              </div>
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl text-gray-600 p-1"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          ) : (
            /* Khi chưa đăng nhập */
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden sm:block text-gray-600 font-bold text-sm hover:text-[#6344ff]"
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 bg-[#6344ff] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#5235d9] transition-all"
              >
                Đăng ký
              </Link>
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl text-gray-600"
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* --- MOBILE SIDEBAR --- */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <div
className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center border-b">
            <h1 className="text-xl font-bold">
              Job<span className="text-[#6344ff]">Brain</span>
            </h1>
            <button onClick={toggleMenu} className="text-2xl text-gray-400">
              <HiOutlineX />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {isAuthenticated && (
              <div className="mb-6 p-4 bg-indigo-50 rounded-2xl flex items-center gap-3">
                <img
                  src={user?.avatar}
                  className="h-12 w-12 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <div>
                  <p className="font-bold text-gray-900">
                    {user?.fullName || user?.name}
                  </p>
                  <p className="text-xs text-[#6344ff] font-bold uppercase">
                    {userRole}
                  </p>
                </div>
              </div>
            )}

            <nav className="space-y-1">
              {/* Menu di động cũng phân quyền tương tự desktop */}
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50 hover:text-[#6344ff]"
              >
                Trang chủ
              </NavLink>

              {/* {userRole === "candidate" && (
                <>
                  <NavLink
                    to="/list-job"
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50"
                  >
                    Việc làm
                  </NavLink>
                  <NavLink
                    to="/companies"
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50"
                  >
                    Công ty
                  </NavLink>
                </>
              )} */}
<NavLink
                    to="/list-job"
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50"
                  >
                    Việc làm
                  </NavLink>
                  <NavLink
                    to="/companies"
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50"
                  >
                    Công ty
                  </NavLink>
            
                  <NavLink
                    to="/manager"
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50"
                  >
                    Manager
                  </NavLink>
                 <NavLink
                    to="/admin/dashboard"
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-indigo-50"
                  >
                    Admin
                  </NavLink>
            </nav>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-1">
            <div className="flex items-center gap-2 py-1">
              <NavLink 
                to="/manager/" 
                onClick={toggleMenu}
                className="flex-1 text-center text-purple-500 px-4 py-3 rounded-xl text-gray-600 font-bold hover:bg-indigo-50 hover:text-[#6344ff]"
              >
                Manager
              </NavLink>
              <NavLink 
                to="/admin/dashboard" 
                onClick={toggleMenu}
                className="flex-1 text-center text-red-500 px-4 py-3 rounded-xl text-gray-600 font-bold hover:bg-indigo-50 hover:text-[#6344ff]"
              >
                Admin
              </NavLink>
            </div>

            {/* <NavLink
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
            </NavLink> */}
          </nav>

          {isAuthenticated && (
            <div className="p-6 border-t">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-4 bg-red-50 text-red-600 font-bold rounded-2xl hover:bg-red-100 transition-all"
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
