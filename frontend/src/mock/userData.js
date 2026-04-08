import { HiOutlineDocumentText, HiOutlineEye, HiOutlineCalendar, HiOutlineChartBar } from "react-icons/hi";

export const mockUserData = {
  profile: {
    welcomeMessage: "Chào mừng trở lại! Bạn có 3 lời mời phỏng vấn mới.",
    completionPercent: 80,
  },
  stats: [
    {
            id: 1,
            title: "Việc đã nộp",
            value: "48",
            percent: "+12%",
            isIncrease: true,
            icon: HiOutlineDocumentText,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50"
          },
          {
            id: 2,
            title: "Lượt xem hồ sơ",
            value: "1,204",
            percent: "+5%",
            isIncrease: true,
            icon: HiOutlineEye,
            iconColor: "text-purple-500",
            bgColor: "bg-purple-50"
          },
          {
            id: 3,
            title: "Mời phỏng vấn",
            value: "3",
            percent: "MỚI",
            isIncrease: true,
            icon: HiOutlineCalendar,
            iconColor: "text-orange-500",
            bgColor: "bg-orange-50",
            badgeMode: true // Hiển thị dạng badge "MỚI" thay vì %
          },
          {
            id: 4,
            title: "Tỉ lệ phản hồi",
            value: "76%",
            percent: "-2%",
            isIncrease: false,
            icon: HiOutlineChartBar,
            iconColor: "text-gray-500",
            bgColor: "bg-gray-100"
          },
  ],
  applications: [
    { id: 1, company: "TechVina Corp", role: "Senior UI Designer", date: "12/10/2024", status: "ACCEPTED", color: "bg-blue-100 text-blue-700", logoText: "T", logoBg: "bg-blue-50 text-blue-600" },
    { id: 2, company: "Global Soft", role: "Frontend Lead", date: "10/10/2024", status: "INTERVIEW", color: "bg-purple-100 text-purple-700", logoText: "G", logoBg: "bg-purple-50 text-purple-600" },
    { id: 3, company: "Solaris AI", role: "Product Manager", date: "08/10/2024", status: "PENDING", color: "bg-orange-100 text-orange-700", logoText: "S", logoBg: "bg-orange-50 text-orange-600" },
    { id: 4, company: "Fintech Pro", role: "UX Researcher", date: "05/10/2024", status: "REJECTED", color: "bg-red-100 text-red-700", logoText: "F", logoBg: "bg-red-50 text-red-600" },
  ],

  // Các thông báo bên cột phải
  notifications: [
    {
      id: 1,
      text: "TechVina mới mời bạn phỏng vấn",
      time: "2 giờ trước",
      icon: "📧",
      active: true,
    },
    {
      id: 2,
      text: "5 người xem hồ sơ của bạn",
      time: "Hôm qua",
      icon: "👥",
      active: false,
    },
    {
      id: 3,
      text: "Gợi ý việc làm mới phù hợp",
      time: "2 ngày trước",
      icon: "💡",
      active: false,
    },
  ],
};
