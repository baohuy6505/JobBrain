import React, { useState, useEffect } from "react";
import { getJobsApi } from "../../mock/jobsService";
import { FilterSidebar } from "../../Components/jobsListPage/FilterSidebar";
import { JobCard } from "../../Components/jobsListPage/Jobcard/JobCard";
import { Pagination } from "../../Components/common/Pagination";
import { FaListUl } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
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
        console.error("Lỗi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
    window.scrollTo({ top: 0 });
  }, [params]);

  return (
    <div className="bg-[#f8f9fb] min-h-screen p-4 font-sans text-gray-900 md:p-10 mt-16 md:mt-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:gap-4 gap-6">
        {/* SIDEBAR */}
        <div
          className={`fixed inset-0 z-[100] md:relative md:inset-auto md:z-0 ${
            isFilterOpen ? "visible" : "invisible md:visible"
          }`}
        >
          {/* Overlay (chỉ mobile) */}
          <div
            className={`absolute inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${
              isFilterOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Sidebar content */}
          <div
            className={`
              relative w-80 max-w-full h-full md:h-auto 
              bg-white md:bg-transparent shadow-2xl md:shadow-none 
              flex flex-col transform-gpu will-change-transform

              /* Mobile: có animation */
              transition-transform duration-300 ease-in-out

              /* Desktop: tắt animation */
              md:transition-none

              ${isFilterOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
          >
            {/* Header mobile */}
            <div className="flex justify-between items-center p-6 md:hidden bg-white shrink-0">
              <span className="font-bold text-xl text-gray-800 uppercase tracking-tighter">
                Bộ lọc
              </span>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-1 text-gray-400"
              >
                <IoMdClose size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto overflow-x-hidden flex-1 md:h-auto bg-white md:bg-transparent px-6 md:px-0">
              <div className="w-full flex flex-col items-center md:items-stretch">
                <div className="w-full max-w-full">
                  <FilterSidebar
                    params={params}
                    onParamChange={handleParamChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="flex-1 w-full min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                {data.totalItems} việc làm
              </h2>
              <p className="text-gray-400 font-medium text-xs md:text-sm mt-1">
                Phù hợp với tiêu chí của bạn
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Button mở filter (mobile) */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex md:hidden items-center justify-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold shadow-sm"
              >
                <FiFilter size={16} className="text-blue-600" /> Lọc
              </button>

              {/* Sort */}
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={params.sort}
                  onChange={(e) => handleParamChange("sort", e.target.value)}
                  className="
      w-full
      bg-white border border-gray-200 
      rounded-xl 
      px-4 py-2.5 pr-10   /* 🔥 thêm dòng này */
      text-xs font-bold 
      shadow-sm outline-none cursor-pointer 
      appearance-none
    "
                >
                  <option value="newest">Mới nhất</option>
                  <option value="salary-desc">Lương cao</option>
                </select>

                <FaChevronDown
                  className="
      absolute right-3 top-1/2 -translate-y-1/2
      text-gray-400 text-xs
      pointer-events-none
    "
                />
              </div>

              {/* View mode */}
              <div className="hidden sm:flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm text-gray-400">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-gray-100 text-gray-900"
                      : "hover:text-gray-900"
                  }`}
                >
                  <FaListUl size={16} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-gray-100 text-gray-900"
                      : "hover:text-gray-900"
                  }`}
                >
                  <HiViewGrid size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* JOB LIST */}
          {loading ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                  : "grid grid-cols-1 sm:block sm:space-y-5 gap-6 sm:gap-0"
              }
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-44 bg-gray-200 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                  : "grid grid-cols-1 sm:block sm:space-y-5 gap-6 sm:gap-0"
              }
            >
              {data.items.length > 0 ? (
                <>
                  {data.items.map((job) => (
                    <JobCard key={job.id} job={job} viewMode={viewMode} />
                  ))}

                  <div
                    className={
                      viewMode === "grid" ? "sm:col-span-2 mt-6" : "mt-6"
                    }
                  >
                    <Pagination
                      totalPages={data.totalPages}
                      currentPage={params.page}
                      onPageChange={(p) => handleParamChange("page", p)}
                    />
                  </div>
                </>
              ) : (
                <div className="sm:col-span-2 bg-white p-10 md:p-20 rounded-3xl text-center border border-dashed border-gray-200 text-gray-400 font-bold">
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
