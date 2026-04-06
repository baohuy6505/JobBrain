import React, { useState, useMemo } from "react";
import { mockCompanies } from "../../mock/companyData";
import CompanyCard from "../../Components/companies/companyCard";
// import Pagination from "../../Components/Common/Pagination"; // Sau này import ở đây nhé

const CompaniesPage = () => {
  // --- States ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  // Quản lý trang hiện tại (Giữ lại state này để truyền vào Component phân trang sau này)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // --- Logic Reset ---
  const handleReset = () => {
    setSearchTerm("");
    setSelectedIndustries([]);
    setCurrentPage(1);
  };

  // --- 1. Lọc dữ liệu ---
  const filteredData = useMemo(() => {
    return mockCompanies.filter((company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        selectedIndustries.includes(company.industry);
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustries]);

  // --- 2. Tính toán cắt mảng hiển thị ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredData, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen pt-24 pb-12 px-4 md:px-8 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            The Global <span className="text-[#6344ff]">Architecture</span>{" "}
            Index.
          </h1>
          <div className="mt-8 flex max-w-xl bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Tìm kiếm công ty..."
              className="flex-grow px-4 py-2 outline-none"
            />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-[11px] font-black text-slate-400 uppercase mb-5 tracking-widest">
                Ngành nghề
              </h4>
              <ul className="space-y-4">
                {[
                  "Architecture",
                  "Engineering",
                  "Urban Planning",
                  "Interior Design",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => {
                      setSelectedIndustries((prev) =>
                        prev.includes(item)
                          ? prev.filter((i) => i !== item)
                          : [...prev, item],
                      );
                      setCurrentPage(1);
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedIndustries.includes(item)}
                      readOnly
                      className="accent-[#6344ff] w-5 h-5"
                    />
                    <span className="text-sm font-bold text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleReset}
                className="w-full mt-8 py-3 bg-indigo-50 text-[#6344ff] rounded-xl text-xs font-black uppercase"
              >
                Reset Filter
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow">
            {/* Grid hiển thị danh sách công ty */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentItems.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>

            {/* --- VÙNG CHỜ IMPORT PHÂN TRANG --- */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                {/* Sau này Vinh Hà chỉ cần gọi Component của bạn mình ở đây.
                  Ví dụ: 
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                  /> 
                */}
                <p className="text-slate-400 text-sm italic">
                  -- Pagination Component will be placed here --
                </p>
              </div>
            )}
            {/* ---------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
