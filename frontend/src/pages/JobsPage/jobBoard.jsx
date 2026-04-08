import React, { useState, useEffect } from "react";
import { getJobsApi } from "../../mock/jobsService";
import { FilterSidebar } from "../../components/jobsListPage/FilterSidebar";
import { JobCard } from "../../components/jobsListPage/Jobcard/JobCard";
import { Pagination } from "../../components/common/Pagination";
import { FaListUl } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Dropdown from "../../components/common/Dropdown";

export default function JobBoard() {
  const INITIAL_PARAMS = {
    categories: [],
    location: "",
    salaryRange: [0, 200],
    jobType: [],
    experience: "",
    sort: "newest",
    page: 1,
  };

  const sortOptions = [
    { label: "Mới nhất", value: "newest" },
    { label: "Lương cao", value: "salary-desc" },
  ];

  const [params, setParams] = useState(INITIAL_PARAMS);
  const [viewMode, setViewMode] = useState("list");
  const [data, setData] = useState({ items: [], totalPages: 0, totalItems: 0 });
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleParamChange = (key, value) => {
    if (key === "reset") {
      setParams(INITIAL_PARAMS);
      return;
    }
    setParams((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1,
    }));
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await getJobsApi(params);
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
    // Đổi sang 'auto' để trang nhảy lên đầu ngay lập tức mà không cuộn mượt
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [params]);

  return (
    <div className="bg-[#f8f9fb] min-h-screen p-4 md:p-10 mt-16 md:mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:gap-4 gap-6">
        {/* ==================== SIDEBAR FILTER ==================== */}
        <aside
          className={`
            fixed inset-0 z-[100] md:relative md:inset-auto md:z-0
            ${isFilterOpen ? "block" : "hidden md:block"}
          `}
        >
          {/* Overlay Mobile: Bật/Tắt ngay lập tức */}
          <div
            className="absolute inset-0 bg-black/60 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Sidebar Panel: Không còn transition và transform */}
          <div className="relative w-80 max-w-[85%] h-full md:h-auto bg-white md:bg-transparent shadow-2xl md:shadow-none flex flex-col">
            {/* Header Mobile */}
            <div className="flex justify-between items-center p-6 md:hidden bg-white border-b">
              <span className="font-bold text-xl text-slate-800">Bộ lọc</span>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-slate-400 p-2"
              >
                <IoMdClose size={28} />
              </button>
            </div>

            {/* Nội dung Sidebar */}
            <div className="overflow-y-auto flex-1 bg-white md:bg-transparent px-6 py-4 md:px-0 md:py-0">
              <FilterSidebar
                params={params}
                onParamChange={handleParamChange}
              />
            </div>
          </div>
        </aside>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="flex-1 w-full min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4 text-left">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900">
                {data.totalItems} việc làm
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Phù hợp với tiêu chí của bạn
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex md:hidden items-center justify-center gap-2 flex-1 h-[42px] bg-white border border-slate-200 rounded-2xl px-4 text-xs font-bold shadow-sm active:scale-95"
              >
                <FiFilter className="text-[#6344ff]" />
                <span>Lọc</span>
              </button>

              <div className="flex-1 sm:flex-none h-[42px] bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center overflow-hidden">
                <Dropdown
                  options={sortOptions}
                  value={params.sort}
                  onChange={(val) => handleParamChange("sort", val)}
                />
              </div>

              <div className="hidden md:flex bg-white border border-slate-200 rounded-2xl p-1 shadow-sm h-[42px] items-center">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 h-full aspect-square rounded-xl flex items-center justify-center ${
                    viewMode === "list"
                      ? "bg-[#6344ff] text-white shadow-md"
                      : "text-gray-400"
                  }`}
                >
                  <FaListUl size={18} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 h-full aspect-square rounded-xl flex items-center justify-center ${
                    viewMode === "grid"
                      ? "bg-[#6344ff] text-white shadow-md"
                      : "text-gray-400"
                  }`}
                >
                  <HiViewGrid size={22} />
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-48 bg-gray-200 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col">
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                    : "space-y-5"
                }
              >
                {data.items.length > 0 ? (
                  data.items.map((job) => (
                    <JobCard key={job.id} job={job} viewMode={viewMode} />
                  ))
                ) : (
                  <div className="bg-white py-20 rounded-3xl text-center border border-dashed text-gray-400 w-full">
                    Không tìm thấy kết quả phù hợp.
                  </div>
                )}
              </div>
              {data.items.length > 0 && (
                <div className="mt-10 flex justify-center w-full">
                  <Pagination
                    totalPages={data.totalPages}
                    currentPage={params.page}
                    onPageChange={(p) => handleParamChange("page", p)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
