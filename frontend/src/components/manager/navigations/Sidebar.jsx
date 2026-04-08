import {
  FiGrid,
  FiBriefcase,
  FiUsers,
  FiCalendar,
  FiSettings,
  FiFileText,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Overview", icon: FiGrid, to: "/manager/overview" },
  { name: "My Jobs", icon: FiBriefcase, to: "/manager" },
  { name: "Candidates", icon: FiUsers, to: "/manager/candidates-board" },
  { name: "Interviews", icon: FiCalendar, to: "/manager/interviews" },
  { name: "Messages", icon: FiMessageCircle, to: "/manager/messages" },
  { name: "Wallet & Billing", icon: FiFileText, to: "/manager/wallet" },
  { name: "Settings", icon: FiSettings, to: "/manager/settings" },
];

export default function Sidebar({ isOpen = false, onClose }) {
  const location = useLocation();

  const isMyJobsActive =
    location.pathname === "/manager" ||
    location.pathname === "/manager/" ||
    location.pathname === "/manager/my-jobs" ||
    location.pathname === "/manager/my-jobs-active";

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[290px] shrink-0 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:w-[310px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-5 pt-5 lg:px-6 lg:pt-6">
          <div className="mb-0 flex items-center gap-3">
            <div>
              <h2 className="text-[16px] font-bold text-gray-900">TechCorp HR</h2>
              <p className="text-[12px] text-gray-400">Premium Tier</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="mt-6 flex-1 overflow-y-auto px-4 pb-5 lg:px-6">
          <nav className="space-y-2">
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
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition sm:text-[15px] ${
                    customActive
                      ? "bg-indigo-600 text-white shadow-[4px_4px_0px_#1e2875]"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}