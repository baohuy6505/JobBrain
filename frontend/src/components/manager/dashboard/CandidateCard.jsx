import { FiClock } from "react-icons/fi";

export default function CandidateCard({
  name,
  role,
  tags = [],
  match = "92% Match",
  time = "2h ago",
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-800" />
          <div className="min-w-0">
            <h4 className="truncate text-sm font-semibold text-gray-900">
              {name}
            </h4>
            <p className="truncate text-xs text-gray-500">{role}</p>
          </div>
        </div>

        <span className="shrink-0 rounded-md bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-600">
          {match}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-2 py-1 text-[10px] text-gray-600 break-words"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 text-[11px] text-gray-400">
        <span className="flex min-w-0 items-center gap-1 truncate">
          <FiClock size={12} />
          {time}
        </span>
        <span className="shrink-0">⋯</span>
      </div>
    </div>
  );
}