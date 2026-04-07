import React from "react";
import { HiOutlineDocumentText, HiOutlineEye, HiOutlineCalendar, HiOutlineChartBar } from "react-icons/hi";

const Stats = () => {
  const stats = [
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
      }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative">
          
          {/* Badge phần trăm góc phải */}
          <div className="absolute top-4 right-4">
            {stat.badgeMode ? (
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">MỚI</span>
            ) : (
              <span className={`text-xs font-bold px-2 py-1 rounded ${stat.isIncrease ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.percent} {stat.isIncrease ? '↗' : '↘'}
              </span>
            )}
          </div>

          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.bgColor}`}>
            <stat.icon className={`text-2xl ${stat.iconColor}`} />
          </div>
          
          <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;