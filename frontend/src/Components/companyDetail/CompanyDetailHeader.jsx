import { HiOutlineLocationMarker } from "react-icons/hi";

const CompanyHeader = ({ company }) => (
  <div className="bg-slate-400 h-64 md:h-80 w-full relative">
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    <div className="max-w-[1200px] mx-auto px-4 h-full relative">
      <div className="absolute -bottom-16 left-4 md:left-10">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2rem] flex items-center justify-center text-slate-900 text-5xl md:text-6xl font-bold shadow-2xl border-8 border-white">
          {company.logo}
        </div>
      </div>
      <div className="absolute bottom-6 left-40 md:left-56 right-4">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
            {company.name}
          </h1>
          <span className="bg-[#6344ff] text-[10px] px-3 py-1 rounded-full text-white font-bold border border-white/20 shadow-sm whitespace-nowrap">
            TOP EMPLOYER
          </span>
        </div>
        <p className="text-slate-100 font-semibold flex items-center gap-1.5 drop-shadow-sm">
          <HiOutlineLocationMarker className="text-[#6344ff] text-xl" />
          {company.address || "TP. Hồ Chí Minh, Việt Nam"}
        </p>
      </div>
    </div>
  </div>
);

export default CompanyHeader;
