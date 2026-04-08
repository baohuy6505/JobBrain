import { HiChevronRight } from "react-icons/hi";
import Card from "../../components/common/Card";
import { fetchJobIsFeatured } from "../../mock/jobsService";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Featured = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFeaturedData = async () => {
    setLoading(true);
    try {
      const data = await fetchJobIsFeatured();
      setFeaturedJobs(data);
    } catch (error) {
      console.error("Lỗi khi lấy job nổi bật:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFeaturedData();
  }, []);

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <div className="relative group inline-block">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Việc làm nổi bật
            </h2>

            <div className="absolute -bottom-2 left-0 h-1 bg-[#60a5fa] rounded-full w-12 transition-all duration-300 group-hover:w-full"></div>
          </div>

          <Link
            to="/list-job"
            className="text-[#60a5fa] font-semibold text-sm md:text-base flex items-center gap-1 hover:gap-2 transition-all"
          >
            Xem tất cả <HiChevronRight className="text-lg md:text-xl" />
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory p-3">
          {loading ? (
            <>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] flex-shrink-0 animate-pulse"
                >
                  <div className="h-[400px] bg-gray-200 rounded-xl w-full"></div>
                </div>
              ))}
            </>
          ) : (
            featuredJobs.map((jobFeatured) => (
              <div
                key={jobFeatured.id}
                className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] flex-shrink-0 snap-center"
              >
                <Card job={jobFeatured} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
