import { FiBell, FiMenu, FiSettings } from "react-icons/fi";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-gray-200 bg-white px-3 sm:px-4 lg:px-8">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-10">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <FiMenu size={22} />
        </button>

        <h1 className="truncate text-xl font-bold text-indigo-600 sm:text-2xl lg:text-3xl">
          Manager
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
        <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <FiBell size={20} />
        </button>

        <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <FiSettings size={20} />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700 sm:h-10 sm:w-10">
          A
        </div>
      </div>
    </header>
  );
}