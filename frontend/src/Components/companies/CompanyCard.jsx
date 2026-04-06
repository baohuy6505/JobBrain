import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Badge Top Employer */}
      {company.isTopEmployer && (
        <span className="absolute top-4 right-4 bg-[#6344ff] text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">
          Top Employer
        </span>
      )}

      {/* Logo Công ty */}
      <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-inner">
        {company.logo}
      </div>

      {/* Thông tin chính */}
      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-[#6344ff] transition-colors">
        {company.name}
      </h3>
      <p className="text-[#6344ff] text-xs font-bold mb-4 uppercase tracking-wide">
        {company.industry}
      </p>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {company.description}
      </p>

      {/* Khu vực thông số */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">
            Active Jobs
          </p>
          <p className="text-lg font-black text-slate-800">
            {company.activeJobs}
          </p>
        </div>
        <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">
            Employees
          </p>
          <p className="text-lg font-black text-slate-800">
            {company.employees}
          </p>
        </div>
      </div>

      {/* 2. THAY ĐỔI: Chuyển button thành Link và truyền id động */}
      <Link
        to={`/companies/${company.id}`}
        className="w-full bg-[#6344ff] text-white py-3 rounded-xl font-bold hover:bg-[#5236db] transition-colors shadow-lg shadow-indigo-100 active:scale-95 text-center block"
      >
        View Profile
      </Link>
    </div>
  );
};

export default CompanyCard;
