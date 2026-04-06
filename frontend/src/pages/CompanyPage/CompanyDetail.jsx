import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockCompanies } from "../../mock/companyData";
import {
  HiOutlineLocationMarker,
  HiOutlineGlobeAlt,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiCheckCircle,
} from "react-icons/hi";

const CompanyDetail = () => {
  const { id } = useParams();
  const company = mockCompanies.find((item) => item.id === parseInt(id));

  const [selectedCover, setSelectedCover] = useState(
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  );

  useEffect(() => {
    if (company && company.coverImages?.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * company.coverImages.length,
      );
      setSelectedCover(company.coverImages[randomIndex]);
    }
    setSelectedCover(
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    );
  }, [company]);

  if (!company)
    return (
      <div className="pt-32 text-center font-semibold min-h-screen">
        <h2 className="text-2xl">Đang tải dữ liệu công ty...</h2>
        <Link to="/companies" className="text-[#6344ff] underline mt-4 block">
          Quay lại danh sách
        </Link>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen pt-16 pb-12 font-sans text-slate-700">
      {/* --- BANNER SECTION --- */}
      <div className="max-w-[1300px] mx-auto px-4 mt-4">
        <div className="relative h-48 sm:h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
          <img
            src={selectedCover}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-slate-900 text-2xl sm:text-3xl md:text-4xl font-bold shadow-lg">
              {company.logo}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {company.name}
                </h1>
                <span className="bg-[#6344ff] text-[8px] sm:text-[9px] px-2 py-0.5 rounded text-white font-semibold border border-white/20 w-fit">
                  HOT FIRM
                </span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm md:text-base font-normal line-clamp-1">
                {company.description}
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-10 flex gap-2 sm:gap-3 flex-col sm:flex-row">
            <button className="bg-white/10 backdrop-blur-md text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg md:rounded-xl font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap">
              <span className="text-lg">👤</span>
              <span className="hidden sm:inline">Follow</span>
            </button>
            <button className="bg-[#6344ff] text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg md:rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 transition-all whitespace-nowrap">
              Post Job
            </button>
          </div>
        </div>
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="max-w-[1300px] mx-auto px-4 mt-6 sm:mt-8 grid grid-cols-12 gap-6 sm:gap-8">
        {/* LEFT SIDEBAR (3 columns) */}
        <div className="col-span-12 lg:col-span-3 space-y-5 sm:space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <nav className="flex flex-col">
              {["Tổng quan", "Việc làm (24)", "Đánh giá", "Nhân sự"].map(
                (tab, i) => (
                  <button
                    key={i}
                    className={`text-left px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-all border-l-4 ${i === 2 ? "bg-indigo-50 border-[#6344ff] text-[#6344ff]" : "border-transparent text-slate-400 hover:bg-slate-50"}`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </nav>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <h4 className="text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-5 sm:mb-6">
              Social Proof
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-slate-600">
                  Employee Rating
                </span>
                <span className="text-sm font-bold text-[#6344ff]">
                  {company.rating}/5.0
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#6344ff] h-full rounded-full"
                  style={{ width: `${(company.rating / 5) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs font-medium text-slate-600">
                  CEO Approval
                </span>
                <span className="text-sm font-bold text-pink-500">
                  {company.ceoApproval}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-slate-600">
                  Recommend Friend
                </span>
                <span className="text-sm font-bold text-orange-500">
                  {company.recommendFriend}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <h4 className="text-[9px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-4 sm:mb-5">
              Thông tin nhanh
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 bg-indigo-50 rounded-lg sm:rounded-xl text-[#6344ff] text-lg flex-shrink-0">
                  <HiOutlineUsers />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase">
                    Quy mô
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {company.employees} nhân viên
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 bg-pink-50 rounded-lg sm:rounded-xl text-pink-500 text-lg flex-shrink-0">
                  <HiOutlineGlobeAlt />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase">
                    Website
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#6344ff] underline truncate">
                    {company.website}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 bg-orange-50 rounded-lg sm:rounded-xl text-orange-500 text-lg flex-shrink-0">
                  <HiOutlineCalendar />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[9px] text-slate-500 font-semibold uppercase">
                    Làm việc
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {company.workingTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#6344ff] to-indigo-600 rounded-2xl p-5 sm:p-6 text-white text-center shadow-lg shadow-indigo-200 hover:shadow-xl transition-shadow duration-300">
            <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
              Bạn quan tâm?
            </h4>
            <p className="text-[10px] sm:text-[11px] text-indigo-100 mb-4 sm:mb-6 leading-relaxed font-normal">
              Nhận thông báo việc làm mới từ {company.name}
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm mb-2 sm:mb-3 placeholder-white/50 outline-none focus:border-white/40 transition-colors"
            />
            <button className="w-full bg-white text-[#6344ff] py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-lg hover:bg-slate-50 transition-all active:scale-95">
              Đăng ký
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (9 columns) */}
        <div className="col-span-12 lg:col-span-9 space-y-5 sm:space-y-6">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-6xl sm:text-7xl font-bold text-slate-800 tracking-tight">
                  {company.rating}
                </p>
                <div className="text-yellow-400 text-xl sm:text-2xl my-2">
                  ★★★★★
                </div>
                <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase">
                  {company.reviewsCount} Reviews
                </p>
              </div>
              <div className="flex-grow w-full sm:w-auto space-y-2 max-w-md">
                {[82, 12, 4].map((v, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 w-10 uppercase">
                      {5 - i} Star
                    </span>
                    <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="bg-[#6344ff] h-full rounded-full transition-all duration-500"
                        style={{ width: `${v}%` }}
                      ></div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 w-8 text-right">
                      {v}%
                    </span>
                  </div>
                ))}
              </div>
              <button className="border-2 border-[#6344ff] text-[#6344ff] px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg md:rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-all whitespace-nowrap flex-shrink-0">
                Write Review
              </button>
            </div>
          </div>

          {/* Render reviews nếu có */}
          {company.reviews?.length > 0 ? (
            company.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-[#6344ff] flex-shrink-0 text-lg sm:text-xl">
                      {review.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base flex flex-wrap items-center gap-2 mb-1">
                        {review.author}{" "}
                        <span className="bg-indigo-50 text-[#6344ff] text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded font-semibold">
                          VERIFIED
                        </span>
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                        {review.status}
                      </p>
                    </div>
                  </div>
                  <div className="text-yellow-400 text-lg flex-shrink-0">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
                  "{review.title}"
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-xs leading-relaxed">
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-emerald-600 font-semibold uppercase mb-2 flex items-center gap-1">
                      <HiCheckCircle /> Pros
                    </p>
                    <p className="text-slate-600 font-normal text-sm">
                      {review.pros}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-rose-600 font-semibold uppercase mb-2 flex items-center gap-1">
                      ⊖ Cons
                    </p>
                    <p className="text-slate-600 font-normal text-sm">
                      {review.cons}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl md:rounded-3xl p-10 sm:p-12 text-center text-slate-500 font-medium border border-slate-100 hover:shadow-sm transition-shadow duration-300">
              Chưa có đánh giá nào.
            </div>
          )}

          {/* Render Workplace Images nếu có */}
          {company.workspaceImages?.length > 0 ? (
            <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-bold text-base sm:text-lg mb-5 sm:mb-8 flex items-center gap-3 text-slate-800">
                <span className="w-1 h-6 bg-[#6344ff] rounded-full"></span> Môi
                trường làm việc
              </h3>
              <div className="grid grid-cols-12 gap-3 sm:gap-4 max-h-[500px]">
                {/* Large image - Left */}
                <div className="col-span-12 md:col-span-7 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-48 sm:h-64 md:h-auto">
                  <img
                    src={company.workspaceImages[0]}
                    className="w-full h-full object-cover"
                    alt="workspace main"
                  />
                </div>

                {/* Right side grid */}
                <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 sm:gap-4">
                  {/* Top right image */}
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-24 sm:h-32 md:h-auto">
                    <img
                      src={company.workspaceImages[1]}
                      className="w-full h-full object-cover"
                      alt="workspace view 1"
                    />
                  </div>

                  {/* Bottom right - 2 smaller images */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 h-24 sm:h-32 md:h-auto">
                    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img
                        src={
                          company.workspaceImages[2] ||
                          company.workspaceImages[0]
                        }
                        className="w-full h-full object-cover"
                        alt="workspace view 2"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img
                        src={
                          company.workspaceImages[3] ||
                          company.workspaceImages[1]
                        }
                        className="w-full h-full object-cover"
                        alt="workspace view 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl md:rounded-3xl p-10 sm:p-12 text-center text-slate-500 font-medium border border-slate-100 hover:shadow-sm transition-shadow duration-300">
              Hình ảnh văn phòng đang được cập nhật...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
