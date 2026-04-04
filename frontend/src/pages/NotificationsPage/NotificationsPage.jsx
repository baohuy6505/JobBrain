import React, { useState, useEffect } from "react";
import {
  HiOutlineCheck,
  HiOutlineAdjustments,
  HiChevronDown,
} from "react-icons/hi";
import NotificationCard from "../../Components/Notification/NotificationCard";

// IMPORT REDUX TOOLKIT HOOKS & ACTIONS
import { useDispatch, useSelector } from "react-redux";
import {
  setNotifications,
  markAsRead,
  markAllRead,
} from "../../features/store/notificationSlice";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Unread", "System", "Job Related"];

  // Quản lý trạng thái loading cục bộ
  const [isLoading, setIsLoading] = useState(true);

  // LẤY DỮ LIỆU TỪ KHO REDUX
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.list);

  useEffect(() => {
    const fetchNotifications = () => {
      setIsLoading(true);
      // Giả lập Fake API trong 1.5 giây
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            type: "new_application",
            title: "New Application Received",
            content:
              "Marcus Sterling applied for Senior Cloud Architect role at Fintech Solutions.",
            time: "2 HOURS AGO",
            unread: true,
          },
          {
            id: 2,
            type: "compliance",
            title: "Action Required: Compliance Update",
            content:
              "Your recruitment license documentation needs a semi-annual review by the end of this month.",
            time: "5 HOURS AGO",
            unread: false,
          },
          {
            id: 3,
            type: "interview",
            title: "Interview Confirmed",
            content:
              "Sarah Jenkins has accepted your interview invitation for Lead Editorial Designer.",
            time: "YESTERDAY AT 4:15 PM",
            unread: false,
          },
          {
            id: 4,
            type: "message",
            title: "New Message from Client",
            content:
              "The hiring manager at Editorial Architect Ltd sent you a direct message regarding the candidate pipeline.",
            time: "YESTERDAY AT 11:30 AM",
            unread: true,
          },
        ];

        // Gửi dữ liệu vào Redux Store thay vì useState cục bộ
        dispatch(setNotifications(mockData));
        setIsLoading(false);
      }, 1500);
    };

    fetchNotifications();
  }, [dispatch]);

  // HÀM XỬ LÝ: Đánh dấu tất cả là đã đọc (Thông qua Redux)
  const handleMarkAllAsRead = () => {
    dispatch(markAllRead());
  };

  // HÀM XỬ LÝ: Đánh dấu từng cái khi click (Thông qua Redux)
  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-28 pb-10 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header: Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Notifications
            </h1>
            <p className="text-gray-500 font-medium text-sm md:text-base">
              Stay updated on your latest recruitment activities and system
              alerts.
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={handleMarkAllAsRead} // GỌI ACTION REDUX
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-[#6344ff] hover:bg-purple-50 transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <HiOutlineCheck className="text-lg" />
              <span className="hidden xs:inline">Mark all as read</span>
              <span className="xs:hidden">Read all</span>
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-all shadow-sm">
              <HiOutlineAdjustments className="text-xl" />
            </button>
          </div>
        </div>

        {/* Tabs Filter */}
        <div className="flex items-center gap-5 md:gap-8 border-b border-gray-100 mb-6 md:mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-xs md:text-sm font-bold transition-all relative whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#6344ff]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#6344ff] rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Danh sách thông báo */}
        <div className="space-y-3 md:space-y-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-purple-200 border-t-[#6344ff] rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-400 font-medium italic">
                Fetching notifications...
              </p>
            </div>
          ) : notifications.length > 0 ? (
            notifications.map((item) => (
              <NotificationCard
                key={item.id}
                data={item}
                onRead={() => handleMarkAsRead(item.id)} // TRUYỀN HÀM XỬ LÝ QUA REDUX
              />
            ))
          ) : (
            <div className="text-center py-20 text-gray-400">
              No notifications yet.
            </div>
          )}
        </div>

        {/* Load More Button */}
        {!isLoading && notifications.length > 0 && (
          <div className="mt-10 md:mt-12 flex justify-center">
            <button className="w-full md:w-auto px-8 py-3.5 bg-[#6344ff] text-white rounded-2xl font-bold hover:bg-[#5235e5] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-100 active:scale-95">
              Load More Notifications
              <HiChevronDown className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
