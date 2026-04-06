import { HiOutlineClock, HiFire } from "react-icons/hi";

const JobCard = ({ job, urgent }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full group">
      {/* Badge Hot */}
      {job.isHot && (
        <div className="absolute top-4 right-4 bg-[#7a2e0e] text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 uppercase">
          <HiFire className="text-orange-400" />
          HOT/URGENT
        </div>
      )}

      {/* Info */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border border-gray-50 flex items-center justify-center bg-gray-50">
          <img
            src={job.logo}
            alt={job.company}
            className="w-8 h-8 object-contain"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#6344ff] transition-colors">
          {job.title}
        </h3>
        <p className="text-gray-500 text-sm flex items-center gap-1">
          {job.company} • {job.location}
        </p>
      </div>

      <div className="text-[#6344ff] font-bold text-lg mb-6">{job.salary}</div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {job.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-50 text-gray-600 text-xs px-3 py-1.5 rounded-md border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center text-gray-400 text-xs gap-1 pt-4 border-t border-gray-50">
        <HiOutlineClock className="text-sm" />
        <span>{job.postedTime}</span>
      </div>
    </div>
  );
};

export default JobCard;
