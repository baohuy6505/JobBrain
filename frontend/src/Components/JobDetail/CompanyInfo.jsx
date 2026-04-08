import React from "react";
import { FiExternalLink, FiUsers, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const CompanyInfo = ({ company }) => {
  if (!company) return null;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
        Về công ty {company.name}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
            alt="Office"
            className="rounded-xl object-cover h-40 w-full shadow-sm"
          />
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-gray-600 leading-relaxed text-sm">
            <strong>{company.name}</strong>{" "}
            {company.description ||
              "là tập đoàn công nghệ hàng đầu, chuyên cung cấp các giải pháp chuyển đổi số và trí tuệ nhân tạo."}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiUsers className="text-blue-500" />
              <span>
                {company.employees
                  ? `${company.employees} nhân viên`
                  : "500 - 1000 nhân viên"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiMapPin className="text-red-500" />
              <span>{company.location || "Việt Nam"}</span>
            </div>
          </div>

          {/* Dưới đây là phần bị lỗi trong hình của bạn, mình đã dọn dẹp lại */}
          <Link
            to={`/companies/${company.id || company._id}`}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline mt-2 cursor-pointer"
          >
            Xem trang công ty <FiExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
