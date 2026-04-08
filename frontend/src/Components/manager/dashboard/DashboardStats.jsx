import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";

const stats = [
  {
    title: "TỔNG TIN ĐĂNG",
    value: "18",
    desc: "+3 tin mới trong tháng",
    icon: <FiTrendingUp size={18} />,
    className: "bg-indigo-600 text-white shadow-[4px_4px_0px_#1e2875]",
    descClass: "text-indigo-100",
  },
  {
    title: "LƯỢT ỨNG TUYỂN",
    value: "1,248",
    desc: "Tăng 12% so với tuần trước",
    icon: <FiUsers size={18} />,
    className:
      "border border-gray-200 bg-white text-gray-900 shadow-[4px_4px_0px_#6b7280]",
    descClass: "text-gray-500",
  },
  {
    title: "CHỈ SỐ TUYỂN DỤNG",
    value: "84%",
    desc: "Tốc độ xử lý hồ sơ: Nhanh",
    icon: <HiOutlineLightningBolt size={18} />,
    className: "bg-purple-600 text-white shadow-[4px_4px_0px_#3b1c8f]",
    descClass: "text-purple-100",
  },
];

export default function DashboardStats() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {stats.map((item) => (
        <div key={item.title} className={`rounded-2xl p-6 ${item.className}`}>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
            {item.title}
          </p>

          <h3 className="mt-3 text-5xl font-bold">{item.value}</h3>

          <div className={`mt-4 flex items-center gap-2 text-sm ${item.descClass}`}>
            {item.icon}
            <span>{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}