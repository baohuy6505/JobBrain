import {
  FiArrowRight,
  FiEdit2,
  FiEye,
  FiMapPin,
  FiSlash,
} from "react-icons/fi";

export default function JobCard({
  title,
  company,
  location,
  submitted,
  approved,
  liveMessage,
  highlighted = false,
}) {
  return (
    // <div
    //   className={`rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm ${
    //     highlighted ? "border-l-4 border-l-indigo-600" : ""
    //   }`}
    // >
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm ">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
          MMM
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">{title}</h3>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span>{company}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FiMapPin size={14} />
                {location}
              </span>
            </div>
          </div>
        </div>

        <span className="self-start rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
          ● Hoạt động
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-600">
          Nộp:{" "}
          <span className="font-semibold text-indigo-600">{submitted}</span>
        </div>

        <div className="rounded-xl bg-gray-100 px-4 py-3 text-sm text-gray-600">
          Duyệt:{" "}
          <span className="font-semibold text-indigo-600">{approved}</span>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700">
          <FiEye size={15} />
          <span>{liveMessage}</span>
        </div>
      </div>

      <div className="my-6 border-t border-gray-100" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-8 text-gray-600">
          <button className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600">
            <FiEdit2 size={15} />
            Sửa
          </button>

          <button className="flex items-center gap-2 text-sm font-medium hover:text-red-500">
            <FiSlash size={15} />
            Đóng tin
          </button>
        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline">
          Xem ứng viên
          <FiArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
