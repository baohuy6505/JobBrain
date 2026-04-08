import { FiBell, FiSettings } from "react-icons/fi";

const tabs = ["Dashboard", "Postings", "Talent", "Analytics"];

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <div className="flex items-center gap-10">
        <h1 className="text-3xl font-bold text-indigo-600">Manager</h1>

        {/* <nav className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm font-medium transition ${
                tab === "Postings"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav> */}
      </div>

      <div className="flex items-center gap-5">
        <button className="text-gray-500 hover:text-gray-700">
          <FiBell size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-700">
          <FiSettings size={20} />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
          A
        </div>
      </div>
    </header>
  );
}