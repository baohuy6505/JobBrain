function Toggle({ enabled }) {
  return (
    <div
      className={`relative h-7 w-12 rounded-full transition ${
        enabled ? "bg-blue-600" : "bg-slate-300"
      }`}
    >
      <div
        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </div>
  );
}

export default function SecurityProtocolsCard({ items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <h3 className="mb-5 text-lg font-bold text-slate-900 sm:text-xl">
        Security Protocols
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-slate-800">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.description}</p>
            </div>

            <div className="self-start sm:self-auto">
              <Toggle enabled={item.enabled} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}