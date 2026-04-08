import React, { useState, useEffect } from "react";
// Import API Mock
import { fetchAdminUsersApi, MOCK_ADMIN_STATS } from "../../../mock/adminRoleMock"; 

// Import 2 component con bạn vừa tạo
import AdminStats from "../../../components/admin/Jobs/AdminStats"; 
import AdminUserTable from "../../../components/admin/Jobs/AdminUserTable";

const AdminJobsPage = () => {
  // STATE QUẢN LÝ
  const [params, setParams] = useState({ page: 1, limit: 5 }); 
  const [data, setData] = useState({ items: [], totalPages: 0, totalItems: 0 });
  const [isLoading, setIsLoading] = useState(false);

  // HÀM ĐỔI PARAMS (Truyền xuống con để con gọi khi đổi trang)
  const handleParamChange = (key, value) => {
    setParams((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1, // Đổi tham số khác thì tự reset về trang 1
    }));
  };

  // GỌI API
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchAdminUsersApi(params);
        setData(response);
      } catch (error) {
        console.error("Lỗi fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [params]);

  // GIAO DIỆN CHÍNH
  return (
    <div className="min-h-screen bg-[#f8f9fb] p-8 mt-4">
      <div className="max-w-7xl mx-auto">

        {/* Khối thống kê */}
        <div className="mb-8">
          <AdminStats statsData={MOCK_ADMIN_STATS} />
        </div>

        {/* Bảng Dữ Liệu & Phân Trang */}
        <AdminUserTable 
          data={data} 
          params={params} 
          isLoading={isLoading} 
          onParamChange={handleParamChange} 
        />

      </div>
    </div>
  );
};

export default AdminJobsPage;