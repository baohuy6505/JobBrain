export default function CandidateStats() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-2xl bg-indigo-600 p-6 text-white shadow-[4px_4px_0px_#1e2875]">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-100">
          ACTIVE JOBS
        </p>
        <h3 className="mt-2 text-4xl font-bold">24</h3>
        <p className="mt-2 text-sm text-indigo-100">+4 since last week</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          CANDIDATE EXPERIENCE SCORE
        </p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900">4.8/5.0</h3>
        <p className="mt-2 text-sm text-indigo-500">★★★★★</p>
      </div>
    </div>
  );
}