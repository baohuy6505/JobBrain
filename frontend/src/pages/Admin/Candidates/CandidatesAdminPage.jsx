import React, { useState, useEffect } from "react";
import { HiOutlineDownload, HiOutlineInformationCircle } from "react-icons/hi";
import ModerationFilters from "../../../components/admin/Candidates/ModerationFilters";
import ModerationTable from "../../../components/admin/Candidates/ModerationTable";
import { fetchModerationJobsApi, MOCK_MODERATION_STATS } from "../../../mock/adminSettingsMock";

const JobModerationPage = () => {
  const [params, setParams] = useState({ page: 1, limit: 4, filterStatus: "ALL" }); 
  const [data, setData] = useState({ items: [], totalPages: 0, totalItems: 0 });
  const [isLoading, setIsLoading] = useState(false);

  // Xử lý đổi trang hoặc đổi bộ lọc
  const handleParamChange = (key, value) => {
    setParams((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1, // Đổi tab thì tự reset về trang 1
    }));
  };

  // Gọi API
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchModerationJobsApi(params);
        setData(response);
      } catch (error) {
        console.error("Lỗi fetch jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [params]);

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-8 mt-4">
      <div className="max-w-7xl mx-auto">

        {/* 1. Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Job Moderation Queue</h1>
            <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
              <span><strong className="text-gray-900">{MOCK_MODERATION_STATS.pendingReviews} Pending Reviews</strong> requiring manual oversight</span>
            </div>
          </div>
          
          <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-bold py-2 px-5 rounded-lg text-sm shadow-sm transition-colors">
            <HiOutlineDownload className="text-lg" /> Export Audit Log
          </button>
        </div>

        {/* 2. Filters & Stats */}
        <ModerationFilters 
          currentFilter={params.filterStatus} 
          onFilterChange={handleParamChange} 
          approvalRate={MOCK_MODERATION_STATS.weeklyApprovalRate} 
        />

        {/* 3. Table */}
        <ModerationTable 
          data={data} 
          params={params} 
          isLoading={isLoading} 
          onParamChange={handleParamChange} 
        />

        {/* 4. Guidelines Banner */}
        <div className="mt-8 flex items-start gap-4 bg-blue-50/50 border-l-4 border-blue-600 p-6 rounded-r-xl rounded-bl-xl shadow-sm">
          <HiOutlineInformationCircle className="text-blue-600 text-3xl shrink-0" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm tracking-widest uppercase mb-1">Moderator Guidelines</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ensure all flagged listings are checked for phishing links, unrealistic compensation-to-task ratios, and non-corporate email domains. High Risk scores are generated based on historical fraud patterns and user report density.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobModerationPage;