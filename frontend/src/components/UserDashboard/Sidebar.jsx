import React from "react";
import { 
  HiOutlineMailOpen, 
  HiOutlineUsers, 
  HiOutlineLightBulb, 
  HiOutlineUser, 
  HiOutlineLockClosed, 
  HiOutlineBell, 
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle
} from "react-icons/hi";
import { mockUserData } from "../../mock/userData"; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const notifications = mockUserData.notifications;
  const userId = userInfo ? userInfo.userId : "";

  // Dùng tông màu dịu, bớt rực rỡ để trông chuyên nghiệp hơn
  const getNotificationIcon = (id) => {
    switch (id) {
      case 1:
        return <HiOutlineMailOpen className="text-blue-500 text-lg" />;
      case 2:
        return <HiOutlineUsers className="text-indigo-500 text-lg" />;
      case 3:
        return <HiOutlineLightBulb className="text-amber-500 text-lg" />;
      default:
        return <HiOutlineBell className="text-slate-500 text-lg" />;
    }
  };

  return (
    <div className="space-y-6">
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-base font-semibold text-slate-800">Thông báo mới</h2>
          <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
            {notifications.filter(n => n.active).length}
          </span>
        </div>
        
        <div className="divide-y divide-slate-100">
          {notifications.map((noti) => (
            <div key={noti.id} className="flex gap-4 p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="mt-0.5 w-8 h-8 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                {getNotificationIcon(noti.id)}
              </div>
              <div>
                <p className={`text-sm leading-snug ${noti.active ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                  {noti.text}
                </p>
                <p className="text-xs text-slate-400 mt-1.5 font-medium">{noti.time}</p>
              </div>
              
              {noti.active && (
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 ml-auto"></div>
              )}
            </div>
          ))}
        </div>
        <div className="p-3 text-center border-t border-slate-100 bg-slate-50/50">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Xem tất cả</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2 mb-1">Cài đặt tài khoản</h2>
        <ul className="space-y-0.5">
          <li>
            <Link 
              to={`/dashboard/profile/${userId}`} 
              className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2.5 rounded-lg transition-colors"
            >
              <HiOutlineUser className="text-lg opacity-70" /> <span className="font-medium text-sm">Hồ sơ cá nhân</span>
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2.5 rounded-lg transition-colors">
              <HiOutlineLockClosed className="text-lg opacity-70" /> <span className="font-medium text-sm">Bảo mật tài khoản</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2.5 rounded-lg transition-colors">
              <HiOutlineBell className="text-lg opacity-70" /> <span className="font-medium text-sm">Cài đặt thông báo</span>
            </a>
          </li>
          <li className="pt-2 mt-2 border-t border-slate-100">
            <a href="#" className="flex items-center gap-3 text-red-600 hover:bg-red-50 px-3 py-2.5 rounded-lg transition-colors">
              <HiOutlineLogout className="text-lg opacity-70" /> <span className="font-medium text-sm">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Box Support (Thiết kế tối giản, thanh lịch) */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 relative overflow-hidden">
        <HiOutlineQuestionMarkCircle className="absolute -right-4 -bottom-4 text-8xl text-slate-200 opacity-50" />
        <div className="relative z-10">
          <h3 className="text-sm font-bold text-slate-800 mb-1">Cần hỗ trợ?</h3>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed pr-4">Đội ngũ của chúng tôi luôn sẵn sàng giải đáp thắc mắc của bạn.</p>
          <button className="w-full bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm">
            Liên hệ CSKH
          </button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;