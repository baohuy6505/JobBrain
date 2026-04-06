// src/mock/companyData.js

const rawNames = [
  "Nexus Design Studio",
  "Terraform Global",
  "Aetheria Interiors",
  "Apex Urban Planning",
  "Skyline Architects",
  "EcoBuild Solutions",
  "Lumina Design",
  "Metro Politan Plan",
];

const rawIndustries = [
  "Architecture",
  "Engineering",
  "Interior Design",
  "Urban Planning",
  "Architecture",
  "Engineering",
  "Interior Design",
  "Urban Planning",
];

// Danh sách 5 ảnh bìa chất lượng cao để lồng vào
const poolOfCoverImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", // Tòa nhà hiện đại, góc rộng
  "https://images.unsplash.com/photo-1497366216548-37526070297c", // Không gian văn phòng mở
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // Tòa nhà kính, hoàng hôn
  "https://images.unsplash.com/photo-1431540015161-0bf868a2d407", // Góc làm việc tối giản
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5", // Công trình xây dựng, góc nhìn trên cao
];

export const mockCompanies = rawNames.map((name, index) => {
  const id = index + 1;
  const isDetailed = id % 2 !== 0; // ID lẻ: Chi tiết; ID chẵn: Cơ bản

  // LOGIC CHÈN ĐIỀU KIỆN ẢNH BÌA:
  // Lấy ra 3 ảnh bìa từ danh sách 5 ảnh trên cho mỗi công ty.
  // Số thứ tự ảnh bắt đầu sẽ khác nhau dựa trên ID của công ty.
  // (Ví dụ ID 1 lấy ảnh 0,1,2; ID 2 lấy ảnh 1,2,3; ID 6 lấy ảnh 0,1,2 nhờ phép chia lấy dư)
  const startIndex = index % poolOfCoverImages.length;
  const companyCovers = [
    poolOfCoverImages[startIndex],
    poolOfCoverImages[(startIndex + 1) % poolOfCoverImages.length],
    poolOfCoverImages[(startIndex + 2) % poolOfCoverImages.length],
  ];

  return {
    id: id,
    name: name,
    industry: rawIndustries[index],
    description:
      "Building the future of infrastructure with sustainable designs.",
    activeJobs: isDetailed ? 24 : 10,
    employees: isDetailed ? "500+" : "100+",
    logo: name.charAt(0),
    isTopEmployer: id % 3 === 0,
    rating: isDetailed ? 4.8 : 4.0,
    reviewsCount: isDetailed ? 1248 : 50,
    ceoApproval: isDetailed ? "94%" : "80%",
    recommendFriend: isDetailed ? "89%" : "70%",
    website: `${name.toLowerCase().replace(/\s/g, "")}.solutions`,
    workingTime: "Thứ 2 - Thứ 6",

    // Mảng chứa các ảnh bìa để lựa chọn (3 ảnh)
    coverImages: companyCovers,

    reviews: isDetailed
      ? [
          {
            id: 1,
            author: "Senior Designer",
            initials: "JD",
            status: "Current Employee",
            rating: 5,
            title: "Exceptional culture",
            pros: "Management listens. Great budget.",
            cons: "Fast-paced.",
            date: "Oct 24, 2025",
          },
        ]
      : [],

    workspaceImages: isDetailed
      ? [
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        ]
      : [],
  };
});
