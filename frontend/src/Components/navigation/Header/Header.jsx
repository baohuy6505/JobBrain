import { useState } from "react";
import { HiOutlineBell, HiOutlineMoon, HiOutlineSun } from "react-icons/hi"; // Import icons
import { Link } from "react-router-dom"; // Import Link từ react-router-dom

const Header = () => {
  // Tạo State dữ liệu mẫu user (Để null nếu muốn test trạng thái chưa đăng nhập)
  const [user, setUser] = useState({
    name: "Vinh Hà",
    age: 21,
    avatar: "https://i.pravatar.cc/150?u=vinhha", // Link ảnh mẫu
    address: "Đà Nẵng, Việt Nam",
  });

  // Hàm toggle giả lập để bạn test 2 trạng thái
  const logout = () => setUser(null);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Left: Logo & Navigation */}
      <div className="flex items-center space-x-8">
        <h1 className="text-blue-600 text-2xl font-bold cursor-pointer">
          ProRecruit
        </h1>

        <nav className="hidden md:flex space-x-6 font-medium text-gray-500">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Jobs
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Companies
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Messages
          </a>
        </nav>
      </div>

      {/* Right: Actions / User Profile */}
      <div className="flex items-center space-x-5">
        {user ? (
          // Trường hợp: ĐÃ ĐĂNG NHẬP
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-blue-600 text-xl relative">
              <HiOutlineBell />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            <button className="text-gray-500 hover:text-blue-600 text-xl">
              <HiOutlineMoon />
            </button>

            <div className="flex items-center space-x-3 ml-2 border-l pl-4 border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-800 leading-none">
                  {user.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">{user.address}</p>
              </div>
              <img
                src={user.avatar}
                alt="User Avatar"
                className="h-10 w-10 rounded-full object-cover border border-gray-200 cursor-pointer hover:opacity-80 transition"
                title={`Age: ${user.age}`}
              />
              <button
                onClick={logout}
                className="text-xs text-red-500 hover:underline"
              >
                Thoát
              </button>
            </div>
          </div>
        ) : (
          // Trường hợp: CHƯA ĐĂNG NHẬP
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600 transition"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md shadow-blue-200"
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
