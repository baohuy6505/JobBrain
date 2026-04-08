import React, { useState, useEffect, useMemo } from "react";
import { HiOutlineCheck } from "react-icons/hi";
import NotificationCard from "../../components/Notification/NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setNotifications,
  markAsRead,
  markAllRead,
} from "../../mock/notificationSlice";

// Giả sử bạn để file masterData ở đường dẫn này
import { masterData } from "../../mock/masterData";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Unread", "System", "Job Related"];
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications?.list || []);

  // ĐỊNH DANH NGƯỜI DÙNG HIỆN TẠI
  const currentUserId = "vinh_ha_21";

  useEffect(() => {
    setIsLoading(true);

    // Giả lập delay 800ms để loading trông mượt hơn
    const timer = setTimeout(() => {
      // Lấy dữ liệu của người dùng hiện tại từ masterData
      const userFullData = masterData.usersData[currentUserId];

      if (userFullData && userFullData.notifications) {
        // Đẩy danh sách thông báo của Vinh Hà vào Redux
        dispatch(setNotifications(userFullData.notifications));
      }
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [dispatch, currentUserId]);

  // --- LOGIC LỌC THÔNG BÁO ---
  const filteredNotifications = useMemo(() => {
    switch (activeTab) {
      case "Unread":
        return notifications.filter((n) => n.unread);
      case "System":
        return notifications.filter((n) => n.category === "System");
      case "Job Related":
        return notifications.filter((n) => n.category === "Job Related");
      default:
        return notifications;
    }
  }, [notifications, activeTab]);

  const handleMarkAllAsRead = () => dispatch(markAllRead());
  const handleMarkAsRead = (id) => dispatch(markAsRead(id));

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-28 pb-20 px-3 sm:px-4 font-sans">
      <div className="max-w-4xl mx-auto text-left">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-0 mb-8 sm:mb-12">
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
              Notifications
            </h1>
            <p className="text-xs sm:text-base text-slate-400 font-bold">
              Hi, {masterData.usersData[currentUserId]?.currentUser.name}. Stay
              updated!
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 border border-slate-100 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black text-[#6344ff] hover:bg-indigo-50 transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <HiOutlineCheck className="text-base sm:text-lg flex-shrink-0" />
              <span>Mark all as read</span>
            </button>
          </div>
        </div>

        {/* Tabs Filter */}
        <div className="flex gap-4 sm:gap-8 border-b border-slate-50 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 sm:pb-4 text-xs sm:text-sm font-black transition-all relative whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#6344ff]"
                  : "text-slate-300 hover:text-slate-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#6344ff] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* List Content */}
        <div className="space-y-3 sm:space-y-4">
          {isLoading ? (
            <div className="py-20 text-center text-slate-300 font-bold italic animate-pulse">
              Loading notifications...
            </div>
          ) : filteredNotifications.length > 0 ? (
            filteredNotifications.map((item) => (
              <NotificationCard
                key={item.id}
                data={item}
                onRead={() => handleMarkAsRead(item.id)} // Sử dụng prop onRead
              />
            ))
          ) : (
            <div className="py-20 text-center text-slate-300 font-bold">
              No {activeTab.toLowerCase()} notifications found for{" "}
              {masterData.usersData[currentUserId]?.currentUser.name}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
