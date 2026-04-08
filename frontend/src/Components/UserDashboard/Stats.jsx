import React from "react";
import StatsGrid from "../common/StatsGrid";
import { HiOutlineDocumentText, HiOutlineEye, HiOutlineCalendar, HiOutlineChartBar } from "react-icons/hi";
import { mockUserData } from "../../mock/userData";

const statConfig = {
  "APPLIED_JOBS": { icon: HiOutlineDocumentText, iconColor: "text-blue-600", bgColor: "bg-blue-50" },
  "PROFILE_VIEWS": { icon: HiOutlineEye, iconColor: "text-purple-600", bgColor: "bg-purple-50" },
  "INTERVIEW_INVITES": { icon: HiOutlineCalendar, iconColor: "text-orange-600", bgColor: "bg-orange-50" },
  "RESPONSE_RATE": { icon: HiOutlineChartBar, iconColor: "text-emerald-600", bgColor: "bg-emerald-50" }
};

const CandidateStats = () => {
  const statsData = mockUserData.stats;

  const gridItems = statsData.map((stat) => {
    const config = statConfig[stat.type] || statConfig["APPLIED_JOBS"];

    let badgeUI = null;
    if (stat.badgeMode) {
      badgeUI = (
        <span className="bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
          MỚI
        </span>
      );
    } else if (stat.percent) {
      badgeUI = (
        <span className={`text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 ${stat.isIncrease ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {stat.isIncrease ? '↗' : '↘'} {stat.percent}
        </span>
      );
    }

    return {
      id: stat.id,
      title: stat.title,
      value: stat.value,
      icon: config.icon,
      iconColor: config.iconColor,
      iconBgColor: config.bgColor,
      badge: badgeUI // Truyền nguyên khối HTML xuống
    };
  });

  return (
    <>
      <StatsGrid items={gridItems} />
    </>
  );
};

export default CandidateStats;