export default function BrandingCard({
  primaryColor,
  secondaryColor,
  deploymentNote,
}) {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900 sm:text-xl">
          Branding
        </h3>

        <div className="space-y-5">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Organization Logo
            </p>
            <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-sm text-slate-400">
              <div>
                <p className="font-semibold">Click to upload logo</p>
                <p className="mt-1 text-xs">SVG, PNG or JPG. Max 3MB</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                Primary Color
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3">
                <div
                  className="h-8 w-8 rounded-lg"
                  style={{ backgroundColor: primaryColor }}
                />
                <span className="text-sm font-semibold text-slate-700">
                  {primaryColor}
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                Secondary Color
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3">
                <div
                  className="h-8 w-8 rounded-lg"
                  style={{ backgroundColor: secondaryColor }}
                />
                <span className="text-sm font-semibold text-slate-700">
                  {secondaryColor}
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Preview Button
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <button
                className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
              >
                PRIMARY ACTION
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm font-semibold text-slate-800">Deployment Note</p>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {deploymentNote}
        </p>
      </div>
    </div>
  );
}