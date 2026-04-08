import { MOCK_COMPANIES } from "./companyData";

export const fetchCompaniesApi = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let filtered = [...MOCK_COMPANIES];

  if (params.searchTerm) {
    const search = params.searchTerm.toLowerCase();
    filtered = filtered.filter((c) => c.name.toLowerCase().includes(search));
  }
  if (params.industries?.length > 0) {
    filtered = filtered.filter((c) => params.industries.includes(c.industry));
  }
  if (params.size) {
    filtered = filtered.filter((c) => {
      if (params.size === "startup") return c.employees <= 50;
      if (params.size === "mid") return c.employees > 50 && c.employees <= 500;
      if (params.size === "enterprise") return c.employees > 500;
      return true;
    });
  }
  if (params.location) {
    const loc = params.location.toLowerCase();
    filtered = filtered.filter((c) => c.location.toLowerCase().includes(loc));
  }

  const page = params.page || 1;
  const limit = 8;
  const startIndex = (page - 1) * limit;

  return {
    items: filtered.slice(startIndex, startIndex + limit),
    totalItems: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  };
};

// Thêm hàm này vào dưới hàm fetchCompaniesApi của bạn
export const fetchCompanyByIdApi = async (id) => {
  // Giả lập độ trễ mạng
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Tìm công ty trong mảng MOCK_COMPANIES
  // Lưu ý: parseInt(id) để đảm bảo so sánh đúng kiểu dữ liệu số
  const company = MOCK_COMPANIES.find((c) => c.id === parseInt(id));

  if (company) {
    return company;
  } else {
    // Trả về null hoặc ném lỗi nếu không tìm thấy
    throw new Error("Không tìm thấy công ty");
  }
};
