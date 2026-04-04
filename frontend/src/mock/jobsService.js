const ALL_JOBS = Array.from({ length: 45 }, (_, i) => {
  const isNegotiable = i % 5 === 0;
  const isEven = i % 2 === 0;

  return {
    id: i + 1,
    title: isEven ? "Senior Project Architect" : "UI/UX Designer",
    company: isEven ? "Foster & Partners" : "Metropolis Lab",
    location: i % 3 === 0 ? "TP. Hồ Chí Minh" : "Hà Nội",
    isFeatured: i % 3 === 0,
    // Dữ liệu lương dùng để lọc (Mảng [min, max] hoặc null)
    salaryData: isNegotiable ? null : isEven ? [140, 185] : [15, 45],
    // Chữ hiển thị trên giao diện
    salaryText: isNegotiable
      ? "Thỏa thuận"
      : isEven
        ? "140M - 185M"
        : "15M - 45M",

    type: isEven ? "Full-time" : "Remote",
    category: isEven ? "UI/UX Design" : "Software Engineering",
    experience: isEven ? "Middle / Senior" : "Fresher / Junior",
    desc: "Leading the technical execution of a high-profile skyscraper with sustainable materials...",
    tags: isEven
      ? ["Revit Expert", "Sustainable Design", "Leadership"]
      : ["Figma", "Web Design", "Prototyping"],
  };
});

export const getJobsApi = async (params) => {
  // Giả lập độ trễ mạng 500ms
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filtered = [...ALL_JOBS];

  // 1. Lọc Lĩnh vực (Array)
  if (params.categories?.length > 0) {
    filtered = filtered.filter((job) =>
      params.categories.includes(job.category),
    );
  }

  // 2. Lọc Địa điểm (Search tương đối)
  if (params.location) {
    const search = params.location.toLowerCase();
    filtered = filtered.filter((job) =>
      job.location.toLowerCase().includes(search),
    );
  }

  // 3. Lọc Mức lương (Logic dải lương giao nhau)
  if (params.salaryRange) {
    const [uMin, uMax] = params.salaryRange;
    filtered = filtered.filter((job) => {
      if (!job.salaryData) return true; // Job "Thỏa thuận" luôn hiện
      const [jMin, jMax] = job.salaryData;
      return jMin <= uMax && jMax >= uMin;
    });
  }

  // 4. Lọc Kinh nghiệm
  if (params.experience) {
    filtered = filtered.filter((job) => job.experience === params.experience);
  }

  // 5. Lọc Loại hình (Array)
  if (params.jobType?.length > 0) {
    filtered = filtered.filter((job) => params.jobType.includes(job.type));
  }

  // 6. Phân trang
  const page = params.page || 1;
  const limit = 4;
  const startIndex = (page - 1) * limit;

  return {
    items: filtered.slice(startIndex, startIndex + limit),
    totalItems: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  };
};
