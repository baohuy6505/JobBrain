import {
  FiGrid,
  FiBriefcase,
  FiUsers,
  FiCalendar,
  FiSettings,
  FiPlusCircle,
  FiFileText,
} from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Overview", icon: FiGrid, to: "/dashboard/overview" },
  { name: "My Jobs", icon: FiBriefcase, to: "/dashboard/my-jobs-active" },
  { name: "Candidates", icon: FiUsers, to: "/dashboard/candidates-board" },
  { name: "Interviews", icon: FiCalendar, to: "/dashboard/interviews" },
  { name: "Wallet & Billing", icon: FiFileText, to: "/dashboard/wallet" },
  { name: "Settings", icon: FiSettings, to: "/dashboard/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  const isMyJobsActive =
    location.pathname === "/dashboard/my-jobs" ||
    location.pathname === "/dashboard/my-jobs-active";

  return (
    <aside className="sticky top-0 flex h-screen w-[310px] shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="px-6 pt-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-[4px_4px_0px_#1e2875]">
            <FiFileText size={20} />
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-gray-900">TechCorp HR</h2>
            <p className="text-[12px] text-gray-400">Premium Tier</p>
          </div>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const customActive =
              item.name === "My Jobs"
                ? isMyJobsActive
                : location.pathname === item.to;

            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                  customActive
                    ? "bg-indigo-600 text-white shadow-[4px_4px_0px_#1e2875]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto px-5 pb-5">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-4 text-[15px] font-semibold text-white shadow-[4px_4px_0px_#3b1c8f]">
          <FiPlusCircle size={18} />
          <span>Post New Job</span>
        </button>
      </div>
    </aside>
  );
}