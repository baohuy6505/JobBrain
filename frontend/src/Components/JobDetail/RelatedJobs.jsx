import React from "react";
import { Link } from "react-router-dom";
import RelatedJobCard from "./RelatedJobCard"; // Import cái card vừa tạo

const RelatedJobs = ({ currentJob, allJobs }) => {
  const related = allJobs
    .filter(
      (job) => job.category === currentJob.category && job.id !== currentJob.id,
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t pt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 font-black">
          Việc làm tương tự
        </h2>
        <Link
          to="/list-job"
          className="text-blue-600 font-bold text-sm hover:underline"
        >
          Xem tất cả →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((job) => (
          <RelatedJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RelatedJobs;
