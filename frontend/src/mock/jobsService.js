import { ALL_JOBS } from "./JobData";
import { MOCK_COMPANIES } from "./companyData";

export const getJobsApi = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let filtered = [...ALL_JOBS];

  if (params.categories?.length > 0) {
    filtered = filtered.filter((j) => params.categories.includes(j.category));
  }
  if (params.location) {
    const search = params.location.toLowerCase();
    filtered = filtered.filter((j) =>
      j.location.toLowerCase().includes(search),
    );
  }
  if (params.salaryRange) {
    const [uMin, uMax] = params.salaryRange;
    filtered = filtered.filter(
      (j) => j.minSalary <= uMax * 1000000 && j.maxSalary >= uMin * 1000000,
    );
  }
  if (params.experience) {
    filtered = filtered.filter((j) => j.experience === params.experience);
  }
  if (params.jobType?.length > 0) {
    filtered = filtered.filter((j) => params.jobType.includes(j.type));
  }

  const page = params.page || 1;
  const limit = 4;
  const startIndex = (page - 1) * limit;

  return {
    items: filtered.slice(startIndex, startIndex + limit),
    totalItems: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  };
};

// ✅ API mới: Lấy chi tiết Job và tự động gắn thêm Profile công ty đầy đủ
export const getJobDetailApi = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const job = ALL_JOBS.find((j) => j.id === parseInt(id));
  if (job) {
    // Tìm data công ty đầy đủ từ mảng 40 cty
    const fullCompany = MOCK_COMPANIES.find((c) => c.id === job.company._id);
    return { ...job, company: fullCompany || job.company };
  }
  return null;
};

export const getRelatedJobsApi = async (currentJob, limit = 4) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const related = ALL_JOBS.filter(
    (job) =>
      // Tiêu chí: Cùng ngành nghề HOẶC cùng địa điểm, và không trùng ID đang xem
      job.id !== currentJob.id &&
      (job.category === currentJob.category ||
        job.location === currentJob.location),
  );

  // Trả về số lượng giới hạn (ví dụ chỉ lấy 4 cái đầu tiên)
  return related.slice(0, limit);
};

export const fetchJobIsFeatured = async () => {
  return new Promise((resolve) => {
    // Lọc dữ liệu dựa trên trường isFeatured trong mảng ALL_JOBS
    const featuredJobs = ALL_JOBS.filter((job) => job.isFeatured === true);

    // Giả lập delay 300ms để sau này lắp API vào không bị khựng UI
    setTimeout(() => {
      resolve(featuredJobs);
    }, 300);
  });
};
