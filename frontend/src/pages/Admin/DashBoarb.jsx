import React from "react";
import { useSelector } from "react-redux";
import { mockUserData } from "../../mock/userData";
import JobApplicationsTable from "../../Components/admin/DashBoard/JobApplicationsTable";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="bg-slate-50 mt-14 min-h-screen p-4 md:p-8 font-sans text-slate-700">
      <div className="max-w-7xl mx-auto">
        {/* Banner Chào mừng */}
        <header className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex items-start md:items-center gap-4 flex-1">
            <div className="relative flex-shrink-0">
              <img
                src={user?.avatar}
                alt="User"
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 border-slate-100 shadow-sm object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#6344ff] w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                Xin chào, {user?.name || "Người dùng"}
              </h1>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                {mockUserData.profile.welcomeMessage}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto md:min-w-64">
            <div className="flex justify-between text-xs font-semibold mb-2 uppercase tracking-wide text-slate-600">
              <span>Hồ sơ hoàn tất</span>
              <span className="text-[#6344ff]">
                {mockUserData.profile.completionPercent}%
              </span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#6344ff] h-full transition-all duration-1000 rounded-full"
                style={{ width: `${mockUserData.profile.completionPercent}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Khu vực: {user?.address || "Chưa cập nhật"}
            </p>
          </div>
        </header>

        {/* Thống kê Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {mockUserData.stats.map((stat, index) => {
            const colors = [
              {
                icon: "bg-blue-100 text-blue-600",
                badge: "bg-blue-50 text-blue-600",
              },
              {
                icon: "bg-amber-100 text-amber-600",
                badge: "bg-amber-50 text-amber-600",
              },
              {
                icon: "bg-purple-100 text-purple-600",
                badge: "bg-purple-50 text-purple-600",
              },
              {
                icon: "bg-rose-100 text-rose-600",
                badge: "bg-rose-50 text-rose-600",
              },
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`${color.icon} w-12 h-12 flex items-center justify-center rounded-xl text-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg ${color.badge}`}
                  >
                    {stat.trend}
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-semibold uppercase mb-2 tracking-wide">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Bảng ứng tuyển */}
          <JobApplicationsTable applications={mockUserData.applications} />

          {/* Sidebar Notifications & Settings */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-bold text-slate-900 text-sm uppercase mb-4 tracking-wide">
                Thông báo
              </h2>
              <div className="space-y-4">
                {mockUserData.notifications.map((note) => (
                  <div
                    key={note.id}
                    className={`flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0 ${
                      note.active ? "" : "opacity-75"
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 pt-0.5">
                      {note.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm leading-snug ${
                          note.active
                            ? "font-semibold text-slate-900"
                            : "font-normal text-slate-600"
                        }`}
                      >
                        {note.text}
                      </p>
                      <p className="text-xs text-slate-500 mt-1.5">
                        {note.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-bold text-slate-900 text-sm uppercase mb-4 tracking-wide">
                Cài đặt tài khoản
              </h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-700 hover:text-[#6344ff] cursor-pointer transition-colors duration-200 font-medium">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                  Chỉnh sửa hồ sơ
                </li>
                <li className="flex items-center gap-3 text-red-600 font-semibold cursor-pointer hover:bg-red-50 px-2 py-1 rounded transition-colors duration-200">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
