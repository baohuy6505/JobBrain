export default function RoleCard({ role, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:shadow-md ${
        active
          ? "border-blue-500 ring-2 ring-blue-100"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[28px] font-semibold leading-none text-slate-800 md:text-xl">
            {role.name}
          </h3>

          {role.badge ? (
            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-600">
              {role.badge}
            </span>
          ) : null}
        </div>

        {active ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500 text-sm font-bold text-blue-600">
            ✓
          </div>
        ) : null}
      </div>

      <p className="min-h-[72px] text-sm leading-6 text-slate-500">
        {role.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          {role.avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt="avatar"
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>

        <span className="text-xs font-semibold text-blue-600">{role.users}</span>
      </div>
    </button>
  );
}