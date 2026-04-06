function PermissionGroup({ group }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-slate-100" />
        <h4 className="text-lg font-semibold text-slate-800">{group.group}</h4>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {group.items.map((item, index) => (
          <label
            key={index}
            className="flex min-h-[68px] cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-blue-300"
          >
            <span className="pr-4 text-sm font-medium text-slate-700">
              {item.label}
            </span>

            <input
              type="checkbox"
              defaultChecked={item.checked}
              className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default function PermissionMatrix({ roleName, permissions }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-5 bg-slate-50 px-6 py-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Permissions Matrix
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
            {roleName}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:bg-slate-100">
            Discard
          </button>
          <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Save Configuration
          </button>
        </div>
      </div>

      <div className="space-y-8 p-6">
        {permissions.map((group, index) => (
          <PermissionGroup key={index} group={group} />
        ))}
      </div>
    </div>
  );
}