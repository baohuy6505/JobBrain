import { FiCalendar, FiChevronDown, FiGrid, FiList, FiSearch } from "react-icons/fi";

export default function CandidatesHeaderManager() {
  return (
    <div className="mb-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[28px] font-bold text-gray-900">
            Candidate Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Review and manage your current talent pipeline for all active roles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            Export List
          </button>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[4px_4px_0px_#1e2875]">
            Post New Job
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-[260px] flex-1">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search applications..."
            className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 text-sm outline-none"
          />
        </div>

        <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700">
          Senior Product Designer
          <FiChevronDown size={16} />
        </button>

        <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700">
          Last 30 Days
          <FiCalendar size={16} />
        </button>

        <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700">
          Match %
          <FiChevronDown size={16} />
        </button>

        <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
          <span>Display:</span>
          <button className="rounded-md bg-indigo-600 p-2 text-white">
            <FiGrid size={14} />
          </button>
          <button className="rounded-md border border-gray-300 bg-white p-2 text-gray-600">
            <FiList size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}