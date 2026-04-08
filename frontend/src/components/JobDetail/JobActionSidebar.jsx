import React from "react";
import { FiDollarSign, FiSend, FiHeart, FiShare2 } from "react-icons/fi";
import Button from "../common/Button";
const JobActionSidebar = ({ job }) => {
  return (
    <div className="sticky top-24 space-y-4">
      <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-50">
        <div className="mb-6">
          <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">
            Mức lương dự kiến
          </p>
          <div className="flex items-center text-2xl font-extrabold text-blue-600">
            <FiDollarSign />
            <span>{job.salaryText}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button icon={<FiSend />}>Ứng tuyển ngay</Button>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <FiHeart /> Lưu
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <FiShare2 /> Chia sẻ
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-2xl">
        <h3 className="font-bold mb-2">Bạn cần tư vấn?</h3>
        <p className="text-blue-100 text-sm mb-4">
          Để lại thông tin, chuyên gia của chúng tôi sẽ hỗ trợ bạn tìm việc miễn
          phí.
        </p>
        <button className="w-full bg-blue-500 py-2 rounded-lg text-sm font-semibold hover:bg-blue-400">
          Kết nối ngay
        </button>
      </div>
    </div>
  );
};

export default JobActionSidebar;
