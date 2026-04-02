import { FiChevronDown, FiPlus, FiSearch } from "react-icons/fi";

export default function JobsHeaderManager() {
  return (
    <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-1 flex-col gap-4 lg:flex-row">
        <div className="relative flex-1">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Tìm tin tuyển dụng..."
            className="h-14 w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-sm text-gray-700 outline-none transition focus:border-indigo-500"
          />
        </div>

        <button className="flex h-14 min-w-[140px] items-center justify-between rounded-xl border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700">
          <span>Mới nhất</span>
          <FiChevronDown size={18} />
        </button>
      </div>

      <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 font-semibold text-white shadow-[4px_4px_0px_#1e2875] transition hover:translate-y-[1px]">
        <FiPlus size={18} />
        <span>Đăng tin mới</span>
      </button>
    </div>
  );
}