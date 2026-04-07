import JobsHeaderManager from "../../../Components/manager/myjobsManager/HeaderManager";
import DashboardStats from "../../../Components/manager/myjobsManager/DashboardStats";
import JobCard from "../../../Components/manager/myjobsManager/JobCard";

export default function MyJobsActivePage() {
  const jobs = [
   {
    title: "AI & Data Science Engineer",
    company: "Paradox AI",
    location: "Cẩm Lệ, Đà Nẵng",
    submitted: 15,
    approved: 4,
    liveMessage: "Đang tìm kiếm chuyên gia AI (3 ứng viên đang xem)",
    category: "AI",
  },
  {
    title: "Applied AI Engineer",
    company: "Spartan Dev Inc",
    location: "Hải Châu, Đà Nẵng",
    submitted: 10,
    approved: 2,
    liveMessage: "Vị trí ưu tiên tuyển dụng",
    category: "AI",
  },
  {
    title: "Frontend Developer (React/Vue)",
    company: "Enouvo IT Solutions",
    location: "Sơn Trà, Đà Nẵng",
    submitted: 28,
    approved: 10,
    liveMessage: "Tin đăng mới (1 ứng viên đang xem)",
    category: "Frontend",
  },
  {
    title: "Backend Developer (Java/Spring Boot)",
    company: "KMS Technology",
    location: "Hải Châu, Đà Nẵng",
    submitted: 35,
    approved: 12,
    liveMessage: "Tin đăng đang được theo dõi trực tuyến (4 ứng viên đang xem)",
    category: "Backend",
  },
  {
    title: "Fullstack Developer (NodeJS/ReactJS)",
    company: "BAP Software",
    location: "Ngũ Hành Sơn, Đà Nẵng",
    submitted: 50,
    approved: 18,
    liveMessage: "Hệ thống đang nhận hồ sơ mạnh mẽ",
    category: "Fullstack",
  },
  {
    title: "Senior Fullstack Web & AI Developer",
    company: "Arbin Instruments",
    location: "Hải Châu, Đà Nẵng",
    submitted: 22,
    approved: 6,
    liveMessage: "Yêu cầu kinh nghiệm trên 5 năm",
    category: "Fullstack",
  },
  {
    title: "Software Engineer (Fullstack/Mobile)",
    company: "FPT Software",
    location: "Ngũ Hành Sơn, Đà Nẵng",
    submitted: 120,
    approved: 45,
    liveMessage: "Tin đăng hot (12 ứng viên đang xem)",
    category: "Fullstack",
  }
];
  return (
    <div className="w-full">
      <JobsHeaderManager />

      <h2 className="mb-5 text-[18px] font-bold text-gray-900">
        Tin tuyển dụng đang hoạt động
      </h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard key={job.title} {...job} />
        ))}
      </div>

      <DashboardStats />
    </div>
  );
}