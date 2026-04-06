export default function ApiManagementCard({ apiKeys }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
          API Management
        </h3>

        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          + Generate New Key
        </button>
      </div>

      <div className="space-y-3">
        <div className="hidden grid-cols-[1.2fr_1.8fr_0.8fr] rounded-t-2xl bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-400 md:grid">
          <div>Key Label</div>
          <div>API Key</div>
          <div>Status</div>
        </div>

        <div className="space-y-3 md:space-y-0">
          {apiKeys.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-2xl border border-slate-100 bg-white px-4 py-4 md:grid md:grid-cols-[1.2fr_1.8fr_0.8fr] md:items-center ${
                index === 0 ? "md:rounded-t-none" : ""
              }`}
            >
              <div className="mb-2 md:mb-0">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 md:hidden">
                  Key Label
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  {item.label}
                </p>
              </div>

              <div className="mb-2 break-all md:mb-0">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 md:hidden">
                  API Key
                </p>
                <p className="text-sm text-slate-500">{item.key}</p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400 md:hidden">
                  Status
                </p>
                <span
                  className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-bold ${
                    item.status === "ACTIVE"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}