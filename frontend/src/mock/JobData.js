import { MOCK_COMPANIES } from "./companyData";

export const ALL_JOBS = Array.from({ length: 45 }, (_, i) => {
  const isEven = i % 2 === 0;

  // ✅ Kết nối Job với 1 trong 40 công ty
  const companyData = MOCK_COMPANIES[i % MOCK_COMPANIES.length];

  const minSal = isEven ? 41000000 : 15000000;
  const maxSal = isEven ? 50000000 : 25000000;

  return {
    id: i + 1,
    title: isEven ? "Senior Fullstack Engineer" : "UI/UX Designer",

    // ✅ Cấu trúc Object Company nằm trong Job
    company: {
      _id: companyData.id,
      name: companyData.name,
      logo: companyData.logo,
      description: companyData.description,
      location: companyData.location,
    },

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
    benefits: ["Chăm sóc sức khỏe", "Thưởng KPI"],
    tags: isEven ? ["Node.js", "React"] : ["Figma", "UI/UX"],
  };
});
