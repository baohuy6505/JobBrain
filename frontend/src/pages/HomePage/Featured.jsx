import { HiChevronRight } from "react-icons/hi";
import JobCard from "../../Components/Home/JobCard"; // Import cái thẻ lẻ ở trên vào
const Featured = () => {
  const jobsFromBackend = [
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

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900">
              Việc làm nổi bật
            </h2>
            <div className="absolute-bottom-2 left-0 w-12 h-1 bg-[#6344ff] rounded-full"></div>
          </div>
          <button className="text-[#6344ff] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <HiChevronRight className="text-xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobsFromBackend.map((item) => (
            <JobCard key={item.id} job={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
