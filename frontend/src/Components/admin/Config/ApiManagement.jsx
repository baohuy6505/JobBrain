export default function ApiManagement({ items }) {
  return (
    <section className="rounded-[14px] border border-[#e0e4ef] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.08)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[15px] font-extrabold text-[#232938]">API Management</h3>
        <button className="rounded-[8px] bg-[#5570e6] px-4 py-2 text-[12px] font-semibold text-white">
          + Generate New Key
        </button>
      </div>

      <div className="overflow-hidden rounded-[10px] bg-[#f6f7fc]">
        <div className="grid grid-cols-[1.1fr_1.5fr_0.8fr] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.8px] text-[#9aa1b2]">
          <div>Key Label</div>
          <div>API Key</div>
          <div>Status</div>
        </div>

        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1.1fr_1.5fr_0.8fr] items-center px-4 py-4 text-[13px] text-[#2a3042]"
          >
            <div className="font-semibold">{item.label}</div>
            <div className="text-[#7f8798]">{item.key}</div>
            <div>
              <span
                className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                  item.status === "ACTIVE"
                    ? "bg-[#dbf5df] text-[#2e8b57]"
                    : "bg-[#e8ebf2] text-[#8b93a8]"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}