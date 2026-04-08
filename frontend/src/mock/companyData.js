const industries = [
  "Architecture",
  "Engineering",
  "Urban Planning",
  "Interior Design",
];
const locations = ["Hà Nội", "TP. HCM", "Đà Nẵng", "Cần Thơ"];

const sampleReviews = [
  {
    initials: "JB",
    author: "User JobBrain",
    status: "Nhân viên hiện tại",
    rating: 5,
    title: "Môi trường chuyên nghiệp",
    pros: "Quy trình tốt, đồng nghiệp thân thiện.",
  },
  {
    initials: "V",
    author: "Ẩn danh",
    status: "Cựu nhân viên",
    rating: 4,
    title: "Nhiều cơ hội học hỏi",
    pros: "Học được nhiều công nghệ mới.",
  },
];

export const MOCK_COMPANIES = Array.from({ length: 40 }, (_, index) => {
  const id = index + 1;
  const name = `Company ${id} Global`;
  const randIndustry = industries[index % industries.length];
  const randLocation = locations[index % locations.length];

  return {
    id: id,
    name: name,
    industry: randIndustry,
    location: randLocation,
    logo: `https://api.dicebear.com/7.x/initials/svg?seed=${id}`,
    activeJobs: (index % 40) + 5,
    employees: ((index * 123) % 4950) + 50,
    featured: id <= 5,
    description: `Công ty ${name} là đơn vị hàng đầu trong lĩnh vực ${randIndustry}...`,
    address: randLocation,
    website: `www.${name.toLowerCase().replace(/\s/g, "")}.com`,
    workingTime: "Thứ 2 - Thứ 6 (08:00 - 17:30)",
    rating: parseFloat((4.0 + (index % 10) * 0.1).toFixed(1)),
    reviewsCount: ((index * 7) % 300) + 20,
    stats: [
      { star: 5, percent: 75 },
      { star: 4, percent: 18 },
      { star: 3, percent: 5 },
      { star: 2, percent: 2 },
      { star: 1, percent: 0 },
    ],
    reviews: sampleReviews.map((r, i) => ({ id: i + 1, ...r })),
  };
});
