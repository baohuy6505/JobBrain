import { FiHelpCircle, FiPlus } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function EmptyState() {
  return (
    <div className="flex min-h-[calc(100vh-220px)] flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
      <div className="mb-8 flex h-64 w-full max-w-md items-center justify-center rounded-3xl border border-gray-200 bg-gray-50 sm:mb-10 sm:h-80">
        <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl bg-white shadow-sm sm:h-44 sm:w-44">
          <div className="absolute -left-5 top-8 h-10 w-10 rounded-full bg-indigo-100"></div>
          <div className="absolute -right-5 bottom-10 h-10 w-10 rounded-full bg-purple-100"></div>
          <div className="absolute top-4 h-6 w-6 rounded-md bg-purple-200"></div>

          <div className="flex flex-col items-center">
            <div className="mb-3 h-3 w-20 rounded bg-gray-200"></div>
            <div className="mb-3 h-3 w-16 rounded bg-gray-100"></div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-dashed border-indigo-500">
              <div className="absolute bottom-[-8px] right-[-10px] h-8 w-1 rotate-[-45deg] rounded bg-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
        Chưa có tin đăng nào
      </h2>

      <p className="mb-8 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
        Hãy đăng tin ngay để tiếp cận hàng ngàn ứng viên tiềm năng trên hệ
        thống LinkStack.
      </p>

      <button className="mb-8 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-[5px_5px_0px_#1e2875] transition hover:translate-y-[1px] sm:mb-10 sm:px-8 sm:py-4 sm:text-lg">
        <FiPlus size={20} />
        <span>Đăng tin mới</span>
      </button>

      <div className="flex flex-col items-center gap-4 text-sm text-gray-500 sm:flex-row sm:gap-10">
        <div className="flex items-center gap-2">
          <FiHelpCircle className="text-indigo-600" size={16} />
          <span>Hướng dẫn sử dụng</span>
        </div>

        <div className="flex items-center gap-2">
          <HiOutlineLightningBolt className="text-purple-600" size={16} />
          <span>Mẹo thu hút ứng viên</span>
        </div>
      </div>
    </div>
  );
}