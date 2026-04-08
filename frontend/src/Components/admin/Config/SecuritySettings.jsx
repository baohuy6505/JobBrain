function Toggle({ checked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-6 w-11 rounded-full transition ${
        checked ? "bg-[#5570e6]" : "bg-[#d3d8e8]"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

export default function SecuritySettings({ items, onToggle }) {
  return (
    <section className="rounded-[14px] border border-[#e0e4ef] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,0.08)]">
      <h3 className="mb-5 text-[15px] font-extrabold text-[#232938]">
        Security Protocols
      </h3>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-[10px] bg-[#f6f7fc] px-4 py-4"
          >
            <div>
              <div className="text-[14px] font-bold text-[#2b3142]">{item.title}</div>
              <div className="text-[12px] text-[#9aa1b2]">{item.desc}</div>
            </div>

            <Toggle
              checked={item.enabled}
              onClick={() => onToggle(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}