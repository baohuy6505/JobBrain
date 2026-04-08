export default function BrandingSettings() {
  return (
    <section className="space-y-4">
      <div className="rounded-[14px] border border-[#e0e4ef] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.08)]">
        <h3 className="mb-5 text-[15px] font-extrabold text-[#232938]">Branding</h3>

        <div className="rounded-[10px] border border-dashed border-[#cfd6e6] bg-[#f8f9fd] px-4 py-10 text-center text-[12px] text-[#7d8597]">
          Click to upload logo
          <div className="mt-1 text-[11px] text-[#a0a7b8]">SVG, PNG or JPG (Max. 2MB)</div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[1px] text-[#8e95a8]">
              Primary Color
            </div>
            <div className="flex items-center gap-3 rounded-[8px] border border-[#cfd6e6] bg-[#f7f8fc] px-3 py-3">
              <span className="h-6 w-6 rounded-[4px] bg-[#2563eb]" />
              <span className="text-[12px] font-semibold text-[#3b4254]">#2563EB</span>
            </div>
          </div>

          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[1px] text-[#8e95a8]">
              Secondary Color
            </div>
            <div className="flex items-center gap-3 rounded-[8px] border border-[#cfd6e6] bg-[#f7f8fc] px-3 py-3">
              <span className="h-6 w-6 rounded-[4px] bg-[#7c3aed]" />
              <span className="text-[12px] font-semibold text-[#3b4254]">#7C3AED</span>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[10px] bg-[#f3f4fb] p-4">
          <div className="mb-3 text-center text-[10px] font-bold uppercase tracking-[1px] text-[#9aa1b2]">
            Identity Preview
          </div>
          <div className="rounded-[8px] bg-white px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#5570e6]" />
                <span className="h-2 w-10 rounded-full bg-[#c9cedd]" />
              </div>
              <span className="h-3 w-6 rounded bg-[#5570e6]" />
            </div>
          </div>
          <button className="mt-4 w-full rounded-[8px] bg-[#5570e6] py-3 text-[12px] font-semibold text-white">
            PRIMARY ACTION
          </button>
        </div>
      </div>

      <div className="rounded-[14px] border-l-4 border-l-[#5570e6] bg-[#eef1ff] p-5 text-[12px] text-[#7c8398]">
        <div className="font-bold text-[#2f3547]">Deployment Note</div>
        <div className="mt-1">
          System branding changes may take up to 5 minutes to propagate across all global CDN nodes.
        </div>
      </div>
    </section>
  );
}