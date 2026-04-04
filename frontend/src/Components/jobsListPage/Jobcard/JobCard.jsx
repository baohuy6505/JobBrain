import { JobCardList } from "./JobCardList";
import { JobCardGrid } from "./JobCardGrid";

export const JobCard = ({ job, viewMode }) => {
  return (
    <>
      {/* Trên Mobile (< 640px): Luôn hiện bản Grid */}
      {/* Trên Desktop: Chỉ hiện bản Grid nếu viewMode === "grid" */}
      <div className={viewMode === "grid" ? "block" : "block sm:hidden"}>
        <JobCardGrid job={job} />
      </div>

      {/* Trên Mobile: Luôn ẩn */}
      {/* Trên Desktop: Hiện bản List nếu viewMode === "list" */}
      <div className={viewMode === "list" ? "hidden sm:block" : "hidden"}>
        <JobCardList job={job} />
      </div>
    </>
  );
};
