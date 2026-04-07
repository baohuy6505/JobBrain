import { useLocation } from "react-router-dom";

export default function AdminHeader({ title, subtitle, onMenuClick }) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-20 mb-6 rounded-2xl border border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur md:px-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-xl border border-slate-200 px-3 py-2 lg:hidden"
          >
            ☰
          </button>

          <div>
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
              {title}
            </h1>
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          </div>
        </div>

        <div className="hidden sm:block">
          {location.pathname === "/admin/role" && (
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              + Create Role
            </button>
          )}

          {location.pathname === "/admin/config" && (
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Save Changes
            </button>
          )}
        </div>
      </div>
    </header>
  );
}