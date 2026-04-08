import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  LayoutGrid,
  LogOut,
  Settings2,
  ShieldCheck,
  LifeBuoy,
  Users,
  BarChart3,
} from "lucide-react";

const items = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutGrid },
  { label: "Jobs", path: "/admin/jobs", icon: BriefcaseBusiness },
  { label: "Candidates", path: "/admin/candidates", icon: Users },
  { label: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { label: "Role Settings", path: "/admin/role", icon: ShieldCheck },
  { label: "Platform Settings", path: "/admin/config", icon: Settings2 },
];

export default function AdminSidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[188px] flex-col border-r border-[#dfe3ef] bg-[#f3f4f8] transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 pb-4 pt-5">
          <h2 className="text-[14px] font-extrabold leading-none text-[#202534]">
            RecruitArchitect
          </h2>
          <p className="mt-1 text-[10px] uppercase tracking-[1px] text-[#7d8597]">
            Admin Console
          </p>
        </div>

        <nav className="flex-1 px-3 pt-4">
          <div className="space-y-2">
            {items.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-[8px] px-3 py-3 text-[13px] transition ${
                    isActive
                      ? "bg-white text-[#4c64dd] shadow-sm"
                      : "text-[#555f77] hover:bg-white/80"
                  }`
                }
              >
                <Icon size={16} strokeWidth={1.8} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="px-3 pb-5">
          <div className="mb-3 h-px bg-[#dfe3ef]" />
          <button className="mb-2 flex w-full items-center gap-3 rounded-[8px] px-3 py-3 text-[13px] text-[#555f77] hover:bg-white/80">
            <LifeBuoy size={16} />
            Support
          </button>
          <button className="flex w-full items-center gap-3 rounded-[8px] px-3 py-3 text-[13px] text-[#555f77] hover:bg-white/80">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}