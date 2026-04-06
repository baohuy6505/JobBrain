const menuItems = [
  "Dashboard",
  "Platform Settings",
  "User Management",
  "API Integrations",
  "Billing & Tiers",
  "Security Audit",
];

export default function ConfigSidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-slate-50 px-4 py-4 lg:min-h-screen lg:w-[250px] lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 lg:mb-8">
            <h2 className="text-xl font-bold text-slate-900">Admin Console</h2>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              SYSTEM CONTROL
            </p>
          </div>

          <nav className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {menuItems.map((item) => (
              <button
                key={item}
                className={`rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                  item === "Platform Settings"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6 space-y-2 border-t border-slate-200 pt-5">
          <button className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-500 transition hover:bg-slate-100">
            Support
          </button>
          <button className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-500 transition hover:bg-slate-100">
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}