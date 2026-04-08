import { JobCardList } from "./JobCardList";
import Card from "../../common/Card";
export const JobCard = ({ job, viewMode }) => {
  return (
    <>
      <div className={viewMode === "grid" ? "block" : "block sm:hidden"}>
        <Card job={job} />
      </div>

      <div className={viewMode === "list" ? "hidden sm:block" : "hidden"}>
        <JobCardList job={job} />
      </div>
    </>
  );
};
