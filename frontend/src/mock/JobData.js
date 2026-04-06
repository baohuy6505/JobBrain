// 1. Tạo danh sách Công ty riêng biệt
const COMPANIES = [
  {
    id: "co-1",
    name: "TechCorp Solutions",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TS",
    description: "Công ty hàng đầu về giải pháp Cloud và AI.",
    location: "Phan Thanh, Đà Nẵng",
    website: "techcorp.solutions",
  },
  {
    id: "co-2",
    name: "Metropolis Lab",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=ML",
    description:
      "Studio chuyên thiết kế trải nghiệm người dùng và sản phẩm số.",
    location: "Hà Nội",
    website: "metropolis.lab",
  },
  {
    id: "co-3",
    name: "FPT Software",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FS",
    description: "Tập đoàn công nghệ đa quốc gia.",
    location: "TP. Hồ Chí Minh",
    website: "fpt-software.com",
  },
];

// 2. Tạo danh sách Job có chứa Object Company (giả lập Populate)
export const ALL_JOBS = Array.from({ length: 45 }, (_, i) => {
  const isEven = i % 2 === 0;

  // Chọn ngẫu nhiên một công ty từ danh sách trên
  const companyData = COMPANIES[i % COMPANIES.length];

  const minSal = isEven ? 41000000 : 15000000;
  const maxSal = isEven ? 50000000 : 25000000;

  return {
    id: i + 1,
    title: isEven
      ? "Senior Fullstack Engineer (Node.js & React)"
      : "UI/UX Designer",

    // Cấu trúc công ty nằm trong Job (Đúng chuẩn Backend trả về)
    company: {
      _id: companyData.id,
      name: companyData.name,
      logo: companyData.logo,
      description: companyData.description,
      location: companyData.location,
    },

    // Các thông tin khác giữ nguyên
    location: i % 3 === 0 ? "Đà Nẵng" : "Hà Nội",
    isFeatured: i % 3 === 0,
    minSalary: minSal,
    maxSalary: maxSal,
    salaryText: `${Math.round(minSal / 1000000)}M - ${Math.round(maxSal / 1000000)}M`,
    type: isEven ? "Full-time" : "Remote",
    category: isEven ? "Software Engineering" : "UI/UX Design",
    experience: isEven ? "1-3 năm" : "Chưa có kinh nghiệm",
    level: isEven ? "Senior" : "Junior",
    quantity: (i % 5) + 1,
    dayLimit: "06/05/2026",
    description: "Chúng tôi đang tìm kiếm ứng viên tiềm năng cho vị trí này...",
    benefits: ["Chăm sóc sức khỏe", "Thưởng KPI", "Du lịch hàng năm"],
    tags: isEven ? ["Node.js", "React", "Fullstack"] : ["Figma", "UI/UX"],
  };
});
