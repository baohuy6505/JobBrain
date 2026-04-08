import React from "react";
import StatsGrid from "../common/StatsGrid";
import { HiOutlineDocumentText, HiOutlineEye, HiOutlineCalendar, HiOutlineChartBar } from "react-icons/hi";
import { mockUserData } from "../../mock/userData";

// 1. TỪ ĐIỂN ĐÃ BỎ MÀU MÈ: Chỉ còn lưu đúng Icon
const statConfig = {
  "APPLIED_JOBS": { icon: HiOutlineDocumentText },
  "PROFILE_VIEWS": { icon: HiOutlineEye },
  "INTERVIEW_INVITES": { icon: HiOutlineCalendar },
  "RESPONSE_RATE": { icon: HiOutlineChartBar }
};

const CandidateStats = () => {
  const statsData = mockUserData.stats;

  const gridItems = statsData.map((stat) => {
    const config = statConfig[stat.type] || statConfig["APPLIED_JOBS"];

    let badgeUI = null;
    if (stat.badgeMode) {
      badgeUI = (
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">
          MỚI
        </span>
      );
    } else if (stat.percent) {
      
      badgeUI = (
        <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.isIncrease ? 'text-emerald-600' : 'text-rose-600'}`}>
          {stat.isIncrease ? '↑' : '↓'} {stat.percent}
        </span>
      );
    }

    return {
      id: stat.id,
      title: stat.title,
      value: stat.value,
      icon: config.icon,
      iconColor: "text-gray-700",
      iconBgColor: "bg-gray-100",
      badge: badgeUI 
    };
  });

  return (
    <>
      <StatsGrid items={gridItems} />
    </>
  );
};

export default CandidateStats;