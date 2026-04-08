import React from "react";
import StatsGrid from "../../common/StatsGrid";

const renderBadge = (text, theme) => {
  if (!text) return null;
  switch (theme) {
    case "blue":
      return <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">{text}</span>;
    case "emerald":
      return <span className="text-emerald-500 text-xs font-bold px-2 py-1 rounded-md">{text}</span>;
    case "red":
      return <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">{text}</span>;
    default:
      return <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{text}</span>;
  }
};

const AdminStats = ({ statsData }) => {
  const statsItems = statsData.map((stat) => ({
    type: stat.type,
    title: stat.title,
    value: stat.value,
    badge: renderBadge(stat.badgeText, stat.badgeTheme)
  }));

  return <StatsGrid items={statsItems} />;
};

export default AdminStats;