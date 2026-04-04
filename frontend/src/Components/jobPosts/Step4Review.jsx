import React from "react";
import {
  FiEye,
  FiBriefcase,
  FiDollarSign,
  FiMapPin,
  FiUsers,
  FiCalendar,
  FiAward,
  FiInfo,
} from "react-icons/fi";
const Step4Review = ({ formData, onEdit, onSubmit }) => {
  // Lấy dữ liệu từ form, nếu trống thì dùng data mẫu theo hình
  const jobTitle = formData?.title;
  const location = formData?.location;
  const salary =
    formData?.minSalary && formData?.maxSalary
      ? `${parseInt(formData.minSalary).toLocaleString()} - ${parseInt(formData.maxSalary).toLocaleString()} VNĐ`
      : "Thỏa thuận";
  const jobType = formData?.jobType || "TOÀN THỜI GIAN";
  const level = formData?.level;
  const quantity = formData?.quantity;
  const dayLimit = formData?.dayLimit;
  // Hàm render nội dung có xuống dòng (do dùng textarea ở bước 3)
  const renderText = (text, defaultText) => {
    const content = text || defaultText;
    return content.split("\n").map((line, index) => (
      <p key={index} className="mb-3 text-slate-600 leading-relaxed">
        {line}
      </p>
    ));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Kiểm tra lại tin tuyển dụng
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Đây là cách các ứng viên sẽ nhìn thấy tin đăng của bạn.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-slate-600 font-bold rounded-lg hover:bg-gray-200 transition-colors text-sm">
          <FiEye className="w-4 h-4" /> BẢN XEM TRƯỚC
        </button>
      </div>

      <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
        <div className="p-6 md:p-8 border-b border-gray-100 flex gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0a192f] rounded-xl flex items-center justify-center shrink-0 shadow-inner">
            {/* <div className="w-10 h-10 border-2 border-[#64ffda] rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-[#64ffda] -rotate-45"></div>
            </div> */}
            <img src="https://i.pravatar.cc/150?u=vinhha" alt="" />
          </div>

          <div className="flex-1">
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                {jobType}
              </span>
              <span className="px-3 py-1 bg-purple-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                {level}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              {jobTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <FiBriefcase className="text-blue-600" /> TechFlow Vietnam
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <FiDollarSign /> {salary}
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-blue-600" /> {location}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 p-6 md:p-8 space-y-10">
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                Mô tả công việc
              </h3>
              <div className="pl-4 text-sm">
                {renderText(
                  formData?.description,
                  "Chúng tôi đang tìm kiếm một Senior Fullstack Engineer tài năng để gia nhập đội ngũ phát triển sản phẩm cốt lõi...\n- Phát triển các API chất lượng cao sử dụng Node.js và NestJS.\n- Xây dựng giao diện người dùng mượt mà, tối ưu hiệu suất với React và Next.js.",
                )}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-purple-600 rounded-full"></div>
                Yêu cầu ứng viên
              </h3>
              <div className="pl-4 text-sm">
                {renderText(
                  formData?.requirements,
                  "- Ít nhất 5 năm kinh nghiệm làm việc với JavaScript/TypeScript.\n- Thành thạo React, Node.js và các hệ sinh thái đi kèm.\n- Kinh nghiệm làm việc với kiến trúc Microservices và Docker/Kubernetes.",
                )}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#d97706] rounded-full"></div>
                Quyền lợi
              </h3>
              <div className="pl-4 text-sm">
                <ul className="list-none space-y-3 text-slate-600">
                  {formData?.benefits && formData.benefits.length > 0 ? (
                    formData.benefits.map((b, i) => <li key={i}>- {b}</li>)
                  ) : (
                    <>
                                              <li>- { }</li>
                    </>
                  )}
                </ul>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 bg-[#F8FAFC] p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-gray-100 space-y-8">
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Kỹ năng yêu cầu
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-gray-200 text-slate-700 text-xs font-bold rounded-md shadow-sm"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Thông tin thêm
              </h4>
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <FiUsers className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Số lượng tuyển
                    </p>
                    <p className="font-bold text-slate-800">{quantity} người</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FiCalendar className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Ngày hết hạn
                    </p>
                    <p className="font-bold text-slate-800">{dayLimit}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FiAward className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Cấp bậc</p>
                    <p className="font-bold text-slate-800">{level}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Địa điểm làm việc
              </h4>
              <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm mb-3">
                <div className="w-full h-32 bg-[#E2E8F0] rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#7dd3fc]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                    <FiMapPin className="w-8 h-8 drop-shadow-md" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[#EFF6FF] border border-blue-200 p-4 md:p-6 rounded-2xl">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <FiInfo className="text-blue-600" />
          </div>
          <p className="text-sm text-slate-700 mt-1.5 font-medium">
            Bạn có thể chỉnh sửa lại các thông tin trước khi tin đăng được công
            khai.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-3 shrink-0">
          <button
            onClick={onEdit}
            className="flex-1 md:flex-none px-6 py-2.5 bg-white border border-gray-300 text-slate-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
          >
            Chỉnh sửa
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 md:flex-none px-8 py-2.5 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Đăng tin ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4Review;
