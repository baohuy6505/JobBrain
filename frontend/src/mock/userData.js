import { HiOutlineDocumentText, HiOutlineEye, HiOutlineCalendar, HiOutlineChartBar } from "react-icons/hi";

export const mockUserData = {
    profile: {
      welcomeMessage: "Chào mừng trở lại! Bạn có 3 lời mời phỏng vấn mới.",
      },
  stats: [
   {
      id: 1,
      type: "APPLIED_JOBS", // Dùng type để định danh
      title: "Việc đã nộp",
      value: "48",
      percent: "+12%",
      isIncrease: true,
      badgeMode: false
    },
    {
      id: 2,
      type: "PROFILE_VIEWS",
      title: "Lượt xem hồ sơ",
      value: "1,204",
      percent: "+5%",
      isIncrease: true,
      badgeMode: false
    },
    {
      id: 3,
      type: "INTERVIEW_INVITES",
      title: "Mời phỏng vấn",
      value: "3",
      percent: "MỚI",
      isIncrease: true,
      badgeMode: true
    },
    {
      id: 4,
      type: "RESPONSE_RATE",
      title: "Tỉ lệ phản hồi",
      value: "76%",
      percent: "-2%",
      isIncrease: false,
      badgeMode: false
    },
  ],
  applications: [
    { id: 1, company: "TechVina Corp", role: "Senior UI Designer", date: "12/10/2024", status: "ACCEPTED" },
    { id: 2, company: "Global Soft", role: "Frontend Lead", date: "10/10/2024", status: "INTERVIEW" },
    { id: 3, company: "Solaris AI", role: "Product Manager", date: "08/10/2024", status: "PENDING" },
    { id: 4, company: "Fintech Pro", role: "UX Researcher", date: "05/10/2024", status: "REJECTED" },
    { id: 5, company: "Fintech Pro", role: "UX Researcher", date: "05/10/2024", status: "REJECTED" },
    { id: 6, company: "Fintech Pro", role: "UX Researcher", date: "05/10/2024", status: "REJECTED" },
  ],

  // Các thông báo bên cột phải
  notifications: [
    {
      id: 1,
      text: "TechVina mới mời bạn phỏng vấn",
      time: "2 giờ trước",
      icon: "📧",
      active: true,
    },
    {
      id: 2,
      text: "5 người xem hồ sơ của bạn",
      time: "Hôm qua",
      icon: "👥",
      active: false,
    },
    {
      id: 3,
      text: "Gợi ý việc làm mới phù hợp",
      time: "2 ngày trước",
      icon: "💡",
      active: false,
    },
  ],
};


export const mockProfileData = {
  skills: ["React", "Tailwind", "TypeScript", "Node.js"],
  cv: {
    fileName: "CV_2024_Main.pdf",
    uploadedAt: "Jan 12, 2024"
  },
  experiences: [
    {
      id: 1,
      isPresent: true,
      time: "PRESENT",
      role: "Senior Developer at TechMind",
      location: "San Francisco, CA • Full-time",
      description: "Leading the core architecture team for the SaaS recruitment platform. Scaling distributed systems to handle 2M+ active candidates."
    },
    {
      id: 2,
      isPresent: false,
      time: "2020 — 2022",
      role: "Full Stack Engineer at CloudScale",
      location: "Remote • Contract",
      description: "Developed responsive dashboards using React and Node.js. Optimized database queries resulting in 40% performance boost."
    },
    {
      id: 3,
      isPresent: false,
      time: "2016 — 2020",
      role: "B.Sc. in Computer Science",
      location: "University of Engineering",
      description: "First Class Honors • Specialized in Software Engineering"
    }
  ]
};

// // Thêm hàm này vào nơi chứa các hàm API giả lập của bạn
// export const fetchTransactionsApi = async (allTransactions, params) => {
//   // Giả lập độ trễ mạng để có hiệu ứng loading chân thực
//   await new Promise((resolve) => setTimeout(resolve, 300));

//   let filtered = [...(allTransactions || [])];

//   // Nơi này sau này bạn có thể thêm logic Filter hoặc Search
//   if (params.searchTerm) {
//     const search = params.searchTerm.toLowerCase();
//     filtered = filtered.filter(tx => tx.desc.toLowerCase().includes(search));
//   }

//   // Logic phân trang chuẩn
//   const page = params.page || 1;
//   const limit = params.limit || 4;
//   const startIndex = (page - 1) * limit;

//   return {
//     items: filtered.slice(startIndex, startIndex + limit), // Chỉ lấy đúng số dòng của trang đó
//     totalItems: filtered.length,
//     totalPages: Math.ceil(filtered.length / limit),
//   };
// };