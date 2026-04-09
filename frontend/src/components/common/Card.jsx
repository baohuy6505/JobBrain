import { MdLocationOn } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
  // Guard clause để tránh crash nếu job null
  if (!job) return null;

  return (
    <div
      className="
  group w-full p-6 bg-white border border-gray-100 rounded-3xl 
  flex flex-col h-full cursor-pointer
  transition-all duration-300
  shadow-sm hover:shadow-sm hover:-translate-y-1 hover:scale-[1.01]
"
    >
      {/* Badge Featured */}
      {job.isFeatured && (
        <div className="flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-4">
          <FiZap className="fill-orange-500" /> Featured Job
        </div>
      )}

      <div className="flex justify-between items-start mb-5">
        {/* Logo Công ty - Sửa logic hiển thị */}
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white overflow-hidden shrink-0 shadow-inner">
          {job.company?.logo ? (
            <img
              src={job.company.logo}
              alt={job.company.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs font-bold uppercase">
              {job.company?.name?.charAt(0) || "S"}
            </span>
          )}
        </div>

        {/* Level Tag */}
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[9px] font-black rounded-lg uppercase border border-gray-100">
            {job.level || "Senior"}
          </span>
        </div>
      </div>

      <div className="flex-1">
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-blue-700 transition-colors line-clamp-1">
          {job.title}
        </h3>

        {/* Công ty & Địa điểm - ĐÃ SỬA LỖI Ở ĐÂY */}
        <div className="flex items-center gap-1 text-xs text-gray-400 font-medium mb-4">
          <span className="truncate max-w-[120px]">{job.company?.name}</span>
          <span className="mx-1">•</span>
          <MdLocationOn size={14} className="shrink-0" />
          <span className="truncate">{job.location}</span>
        </div>

        {/* Cụm Tag thông tin */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-extrabold rounded uppercase tracking-wider whitespace-nowrap">
            {job.type}
          </span>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[9px] font-extrabold rounded uppercase tracking-wider whitespace-nowrap">
            {job.experience}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-5 italic">
          {job.description || job.desc}
        </p>
      </div>

      {/* Phần chân Card */}
      <div className="pt-5 border-t border-gray-50 flex flex-col gap-4 mt-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
              Mức lương
            </span>
            <span className="text-xl font-black text-gray-800 group-hover:text-blue-600 transition-colors">
              {job.salaryText || "Thỏa thuận"}
            </span>
          </div>
        </div>

        <Link
          to={`/list-job/${job.id}`}
          className="w-full bg-gray-50 text-gray-600 py-3 rounded-2xl font-bold text-xs transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 flex justify-center items-center gap-2"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default Card;
