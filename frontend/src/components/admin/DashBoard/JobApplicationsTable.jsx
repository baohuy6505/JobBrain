import React, { useState } from "react";

const JobApplicationsTable = ({ applications }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!applications || applications.length === 0) {
    return (
      <div className="lg:col-span-2 bg-white rounded-2xl p-10 text-center border border-slate-100 shadow-sm">
        <p className="text-slate-400">Không có dữ liệu ứng tuyển.</p>
      </div>
    );
  }

  // --- Logic Phân trang (Pagination) ---
  const totalPages = Math.ceil(applications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApplications = applications.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Hiển thị 4 ứng tuyển đầu tiên ở bảng chính
  const displayedApplications = applications.slice(0, 4);

  // --- Handlers ---
  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Bảng chính hiển thị rút gọn (4 items) */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-slate-50">
          <h2 className="text-lg font-bold text-slate-800">
            Việc đã ứng tuyển
          </h2>
          <button
            onClick={handleOpenModal}
            className="text-[#6344ff] text-sm font-semibold hover:text-indigo-700 transition-colors flex items-center gap-1"
          >
            Xem tất cả ({applications.length})<span>→</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase">
              <tr>
                <th className="px-6 py-4">Công ty</th>
                <th className="px-6 py-4">Vị trí</th>
                <th className="px-6 py-4">Ngày nộp</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {displayedApplications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-[#6344ff]">
                      {app.logo}
                    </div>
                    <span className="font-semibold text-slate-700 text-sm">
                      {app.company}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {app.position}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {app.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`${app.color} text-white text-[10px] px-2.5 py-1 rounded-md font-semibold shadow-sm uppercase`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300 group-hover:text-slate-600 cursor-pointer text-center">
                    • • •
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal hiển thị tất cả kèm phân trang */}
      {showModal && (
        <div
          onClick={(e) =>
            e.target.id === "applicationModal" && handleCloseModal()
          }
          id="applicationModal"
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Tất cả ứng tuyển
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Tổng cộng {applications.length} ứng tuyển
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 text-2xl font-light"
              >
                ✕
              </button>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 text-xs font-bold uppercase sticky top-0">
                  <tr>
                    <th className="px-6 py-3">Công ty</th>
                    <th className="px-6 py-3">Vị trí</th>
                    <th className="px-6 py-3">Ngày nộp</th>
                    <th className="px-6 py-3">Trạng thái</th>
                    <th className="px-6 py-3 text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedApplications.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-[#6344ff] flex-shrink-0">
                          {app.logo}
                        </div>
                        <span className="font-semibold text-slate-900 text-sm">
                          {app.company}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {app.position}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {app.date}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`${app.color} text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-sm uppercase`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-slate-400 hover:text-slate-600">
                          • • •
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50">
                <p className="text-sm text-slate-600">
                  Trang {currentPage} / {totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-100 disabled:opacity-50 transition-colors"
                  >
                    Trước
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-100 disabled:opacity-50 transition-colors"
                  >
                    Sau
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default JobApplicationsTable;
