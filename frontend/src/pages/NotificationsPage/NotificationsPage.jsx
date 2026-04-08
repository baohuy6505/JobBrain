import React, { useState, useEffect, useMemo } from "react";
import {
  HiOutlineCheck,
  HiOutlineAdjustments,
  HiChevronDown,
} from "react-icons/hi";
import NotificationCard from "../../components/notification/NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setNotifications,
  markAsRead,
  markAllRead,
} from "../../mock/notificationSlice";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Unread", "System", "Job Related"];
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  // LƯU Ý: Dùng đúng tên 'notifications' có chữ 's' như trong store.js của bạn
  const notifications = useSelector((state) => state.notifications?.list || []);

  useEffect(() => {
    // Chỉ fetch nếu chưa có dữ liệu để tránh loop hoặc tốn tài nguyên
    if (notifications.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            type: "system",
            title: "New Application Received",
            content: "Marcus applied for Architect role.",
            time: "2 HOURS AGO",
            unread: true,
            category: "Job Related",
          },
          {
            id: 2,
            type: "system",
            title: "Compliance Update",
            content: "License documentation review.",
            time: "5 HOURS AGO",
            unread: false,
            category: "System",
          },
          {
            id: 3,
            type: "system",
            title: "Interview Confirmed",
            content: "Sarah accepted invitation.",
            time: "YESTERDAY",
            unread: false,
            category: "Job Related",
          },
          {
            id: 4,
            type: "system",
            title: "New Message",
            content: "Hiring manager sent a DM.",
            time: "YESTERDAY",
            unread: true,
            category: "Job Related",
          },
        ];
        dispatch(setNotifications(mockData));
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, [dispatch, notifications.length]);

  // --- LOGIC LỌC THÔNG BÁO THEO TABS ---
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
              Stay updated on your recruitment activities.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 border border-slate-100 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black text-[#6344ff] hover:bg-indigo-50 transition-all shadow-sm active:scale-95 whitespace-nowrap sm:whitespace-normal flex-shrink-0 sm:flex-shrink"
            >
              <HiOutlineCheck className="text-base sm:text-lg flex-shrink-0" />
              <span>Mark all as read</span>
            </button>
          </div>
        </div>

        {/* Tabs Filter */}
        <div className="flex gap-4 sm:gap-8 border-b border-slate-50 mb-6 sm:mb-8 overflow-x-auto">
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
                // Khi click vào card, gọi hàm xử lý Redux
                onClick={() => handleMarkAsRead(item.id)}
              />
            ))
          ) : (
            <div className="py-20 text-center text-slate-300 font-bold">
              No {activeTab.toLowerCase()} notifications found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
