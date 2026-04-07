import React, { useState, useEffect } from "react";
import { HiChevronRight, HiOutlineClock } from "react-icons/hi";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = () => {
      setIsLoading(true);
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            title: "Senior Designer",
            company: "TechFlow",
            location: "Hà Nội",
            salary: "$2500 - $3000",
            tags: ["UI/UX", "Figma"],
            postedTime: "2h trước",
            isHot: true,
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=1",
          },
          {
            id: 2,
            title: "React Dev",
            company: "Global",
            location: "HCM",
            salary: "$1800 - $2200",
            tags: ["React", "JavaScript"],
            postedTime: "5h trước",
            isHot: true,
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=2",
          },
          {
            id: 3,
            title: "Marketing",
            company: "Creative",
            location: "Đà Nẵng",
            salary: "$1500 - $2000",
            tags: ["SEO", "Content Marketing"],
            postedTime: "1d trước",
            isHot: true,
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=3",
          },
          {
            id: 4,
            title: "NodeJS",
            company: "AppV",
            location: "HCM",
            salary: "$2000",
            tags: ["Node"],
            postedTime: "3h trước",
            isHot: true,
            logo: "https://api.dicebear.com/7.x/identicon/svg?seed=4",
          },
        ];
        setJobs(mockData);
        setIsLoading(false);
      }, 2000);
    };
    fetchJobs();
  }, []);

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900">Việc làm nổi bật</h2>
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#6344ff] rounded-full"></div>
          </div>
          <button className="text-[#6344ff] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <HiChevronRight className="text-xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[300px] flex flex-col items-center justify-center gap-4 animate-pulse"
                >
                  <div className="w-10 h-10 border-4 border-purple-100 border-t-[#6344ff] rounded-full animate-spin"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-50 rounded w-1/2"></div>
                </div>
              ))
            : jobs.map((item) => (
                <JobCard key={item.id} job={item} />
              ))}
        </div>
      </div>
    </section>
  );
};

// Component JobCard giả lập để test
const JobCard = ({ job }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full group">
    <div className="mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border border-gray-50 flex items-center justify-center bg-gray-50">
        <img src={job.logo} alt={job.company} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#6344ff] transition-colors">
        {job.title}
      </h3>
      <p className="text-gray-500 text-sm flex items-center gap-1">
        {job.company} • {job.location}
      </p>
    </div>
    <div className="text-[#6344ff] font-bold text-lg mb-6">{job.salary}</div>
    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
      {job.tags?.map((tag, index) => (
        <span key={index} className="bg-gray-50 text-gray-600 text-xs px-3 py-1.5 rounded-md border border-gray-100">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center text-gray-400 text-xs gap-1 pt-4 border-t border-gray-50">
      <HiOutlineClock className="text-sm" />
      <span>{job.postedTime}</span>
    </div>
  </div>
);

export default Featured;