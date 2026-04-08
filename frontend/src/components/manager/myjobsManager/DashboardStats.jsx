import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";

const uiConfig = {
  total_posts: {
    icon: FiTrendingUp,
    className: "bg-indigo-600 text-white shadow-[4px_4px_0px_#1e2875]",
    descClass: "text-indigo-100",
  },
  total_applies: {
    icon: FiUsers,
    className:
      "border border-gray-200 bg-white text-gray-900 shadow-[4px_4px_0px_#6b7280]",
    descClass: "text-gray-500",
  },
  hiring_index: {
    icon: HiOutlineLightningBolt,
    className: "bg-purple-600 text-white shadow-[4px_4px_0px_#3b1c8f]",
    descClass: "text-purple-100",
  },
};

const apiData = [
  {
    id: "total_posts",
    title: "TỔNG TIN ĐĂNG",
    value: "18",
    desc: "+3 tin mới trong tháng",
  },
  {
    id: "total_applies",
    title: "LƯỢT ỨNG TUYỂN",
    value: "1,248",
    desc: "Tăng 12% so với tuần trước",
  },
  {
    id: "hiring_index",
    title: "CHỈ SỐ TUYỂN DỤNG",
    value: "84%",
    desc: "Tốc độ xử lý hồ sơ: Nhanh",
  },
];

export default function DashboardStats() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-3 lg:gap-6">
      {apiData.map((item) => {
        const ui = uiConfig[item.id] || {};
        const DynamicIcon = ui.icon;

        return (
          <div key={item.id} className={`rounded-2xl p-5 sm:p-6 ${ui.className}`}>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-90 sm:text-sm">
              {item.title}
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl xl:text-5xl">
              {item.value}
            </h3>

            <div className={`mt-4 flex items-center gap-2 text-sm ${ui.descClass}`}>
              {DynamicIcon ? <DynamicIcon size={18} /> : <div className="w-[18px]" />}
              <span>{item.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}