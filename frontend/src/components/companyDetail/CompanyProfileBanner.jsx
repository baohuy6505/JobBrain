import React from "react";

const ProfileBanner = ({
  logo,
  title,
  subTitle,
  extraBadge,
  height = "h-64 md:h-80",
}) => {
  return (
    <div className={`bg-slate-400 ${height} w-full relative`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-4 h-full relative">
        =
        <div className="absolute -bottom-16 left-4 md:left-10">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2rem] md:rounded-[2.5rem] p-1 shadow-2xl border-[8px] md:border-[10px] border-white overflow-hidden flex items-center justify-center select-none z-10">
            <div className="w-full h-full rounded-[1.5rem] md:rounded-[1.8rem] bg-slate-100 flex items-center justify-center overflow-hidden font-bold text-slate-800 text-5xl md:text-6xl tracking-tight">
              {logo}
            </div>
          </div>
        </div>
        {/* Thông tin trên nền xám */}
        <div className="absolute bottom-6 left-36 md:left-56 right-4">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
              {title}
            </h1>
            {extraBadge && (
              <span className="bg-[#3b82f6] text-[10px] px-3 py-1 rounded-full text-white font-bold border border-white/20 shadow-sm uppercase">
                {extraBadge}
              </span>
            )}
          </div>
          <div className="text-slate-100 font-semibold flex items-center gap-2 drop-shadow-sm">
            {subTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
