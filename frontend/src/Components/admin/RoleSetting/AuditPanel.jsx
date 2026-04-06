const badgeMap = {
  edit: "bg-blue-50 text-blue-600",
  add: "bg-amber-50 text-amber-600",
  warning: "bg-rose-50 text-rose-600",
};

export default function AuditPanel({ audits }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800">Recent Changes Audit</h3>

      <div className="mt-5 space-y-4">
        {audits.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
                  badgeMap[item.type]
                }`}
              >
                •
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {item.title}{" "}
                  <span className="font-normal text-slate-500">
                    {item.target}
                  </span>
                </p>
                <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
              </div>
            </div>

            <button className="text-xs font-bold tracking-wide text-blue-600 hover:text-blue-700">
              DETAILS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}