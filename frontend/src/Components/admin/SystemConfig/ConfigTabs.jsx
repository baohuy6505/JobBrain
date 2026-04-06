export default function ConfigTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-100 p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            activeTab === tab
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}