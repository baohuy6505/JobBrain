import React, { useState } from "react";
import {
  HiOutlineCheck,
  HiOutlineAdjustments,
  HiChevronDown,
} from "react-icons/hi";
import NotificationCard from "../../Components/Notification/NotificationCard";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Unread", "System", "Job Related"];

  const [notifications, setNotifications] = useState([
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
  ]);

  return (
    // Thay pt-28 thành pt-20 trên mobile để tiết kiệm không gian
    <div className="min-h-screen bg-white pt-20 md:pt-28 pb-10 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header: Title & Actions */}
        {/* Mobile: Căn giữa và xếp chồng | Desktop: Căn dưới và dàn hàng ngang */}
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

          {/* Nút bấm trên mobile sẽ chiếm toàn chiều ngang hoặc dàn hàng ngang tùy ý */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-[#6344ff] hover:bg-purple-50 transition-all shadow-sm active:scale-95 whitespace-nowrap">
              <HiOutlineCheck className="text-lg" />
              <span className="hidden xs:inline">Mark all as read</span>
              <span className="xs:hidden">Read all</span>
            </button>
            <button className="p-2.5 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-all shadow-sm">
              <HiOutlineAdjustments className="text-xl" />
            </button>
          </div>
        </div>

        {/* Tabs: Navigation Filter */}
        {/* Dùng overflow-x-auto để mobile có thể vuốt ngang nếu tabs quá dài */}
        <div className="flex items-center gap-5 md:gap-8 border-b border-gray-100 mb-6 md:mb-8 overflow-x-auto no-scrollbar scroll-smooth">
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

        {/* List: Hiển thị các NotificationCard */}
        {/* Tăng khoảng cách space-y nhẹ trên desktop */}
        <div className="space-y-3 md:space-y-4">
          {notifications.map((item) => (
            <NotificationCard key={item.id} data={item} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <button className="w-full md:w-auto px-8 py-3.5 bg-[#6344ff] text-white rounded-2xl font-bold hover:bg-[#5235e5] transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-100 active:scale-95">
            Load More Notifications
            <HiChevronDown className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
