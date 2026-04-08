import React, { useState, useEffect } from "react";
import { fetchCompaniesApi } from "../../mock/CompanyServices";
import CompanyCard from "../../Components/companies/companyCard";
import { Pagination } from "../../Components/common/Pagination";
import CompanySearch from "../../Components/companies/CompanySearch";
import CompanyFilter from "../../Components/companies/CompanyFilter";

const CompaniesPage = () => {
  const INITIAL_PARAMS = {
    searchTerm: "",
    industries: [],
    size: "",
    location: "",
    page: 1,
  };

  const [params, setParams] = useState(INITIAL_PARAMS);
  const [data, setData] = useState({ items: [], totalPages: 0, totalItems: 0 });
  const [loading, setLoading] = useState(true);

  // 🔥 chỉ cần state này
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

  const handleSearchChange = (value) => {
    handleParamChange("searchTerm", value);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetchCompaniesApi(params);
        setData(response);
      } catch (error) {
        console.error("Lỗi:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params]);

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* SEARCH */}
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-8">
            The Global <span className="text-blue-600">Architecture</span>{" "}
            Index.
          </h1>

          <CompanySearch
            value={params.searchTerm}
            onChange={handleSearchChange}
          />

          {/* 🔥 NÚT LỌC MOBILE */}
          <div className="flex md:hidden mt-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="w-full h-[44px] bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold"
            >
              Lọc
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* 🔥 FILTER */}
          <div
            className={`fixed inset-0 z-[100] md:relative md:inset-auto md:z-0 ${
              isFilterOpen ? "block" : "hidden md:block"
            }`}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            />

            {/* Sidebar */}
            <div
              className="relative w-80 max-w-[85%] h-full md:h-auto 
                         bg-white md:bg-transparent shadow-2xl md:shadow-none 
                         flex flex-col"
            >
              {/* Header mobile */}
              <div className="flex justify-between items-center p-5 md:hidden border-b">
                <span className="font-bold text-lg">Bộ lọc</span>
                <button onClick={() => setIsFilterOpen(false)}>✕</button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 md:px-0">
                <div className="md:sticky md:top-28">
                  <CompanyFilter
                    params={params}
                    onParamChange={handleParamChange}
                    onReset={() => handleParamChange("reset")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MAIN */}
          <div className="flex-grow w-full min-w-0">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-44 bg-gray-200 rounded-2xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.items.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>

                {data.totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
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
    </div>
  );
};

export default CompaniesPage;
