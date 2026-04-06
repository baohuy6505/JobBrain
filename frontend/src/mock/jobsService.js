import { ALL_JOBS } from "./JobData";

export const getJobsApi = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  let filtered = [...ALL_JOBS];

  // 1. Lọc Lĩnh vực
  if (params.categories?.length > 0) {
    filtered = filtered.filter((job) =>
      params.categories.includes(job.category),
    );
  }

  // 2. Lọc Địa điểm
  if (params.location) {
    const search = params.location.toLowerCase();
    filtered = filtered.filter((job) =>
      job.location.toLowerCase().includes(search),
    );
  }

  // 3. Lọc Mức lương (Quy đổi dải lương từ User sang triệu đồng để so sánh)
  if (params.salaryRange) {
    const [uMin, uMax] = params.salaryRange; // Ví dụ: [20, 50] triệu
    const userMinTotal = uMin * 1000000;
    const userMaxTotal = uMax * 1000000;

    filtered = filtered.filter((job) => {
      // Logic: Lương của Job nằm trong khoảng User kéo
      return job.minSalary <= userMaxTotal && job.maxSalary >= userMinTotal;
    });
  }

  // 4. Lọc Kinh nghiệm
  if (params.experience) {
    filtered = filtered.filter((job) => job.experience === params.experience);
  }

  // 5. Lọc Loại hình
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
