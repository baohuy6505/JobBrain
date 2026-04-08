import CandidateCard from "./CandidateCard";

export default function CandidateColumn({ title, count, candidates = [] }) {
  return (
    <div className="min-w-[220px] flex-1">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">
          {title} <span className="text-gray-400">{count}</span>
        </h3>
        <span className="text-gray-300">⋯</span>
      </div>

      <div className="space-y-3">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.name} {...candidate} />
        ))}
      </div>
    </div>
  );
}