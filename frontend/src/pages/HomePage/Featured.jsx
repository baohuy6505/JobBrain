import { HiChevronRight } from "react-icons/hi";
import { ALL_JOBS } from "../../mock/JobData";
import Card from "../../components/common/Card";
import { Link } from "react-router-dom";
const Featured = () => {
  const jobs = ALL_JOBS.slice(0, 6);

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="relative group inline-block">
            <h2 className="text-3xl font-bold text-gray-900">
              Việc làm nổi bật
            </h2>

            <div className="absolute -bottom-2 left-0 h-1 bg-[#6344ff] rounded-full w-12 transition-all duration-300 group-hover:w-full"></div>
          </div>

          <Link
            to="/list-job"
            className="text-[#6344ff] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Xem tất cả <HiChevronRight className="text-xl" />
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory p-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] flex-shrink-0 "
            >
              <Card job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
