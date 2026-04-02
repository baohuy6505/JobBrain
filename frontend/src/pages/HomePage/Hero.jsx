import React from "react";
import Search from "../../Components/common/Search";

const Hero = () => {
  return (
    <section
      className="
      w-full 
      bg-[#11132d] 
      text-white 
      flex items-center justify-center
      mt-16 
      h-[calc(100dvh-64px)] 
      min-h-[500px] 
    "
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full px-6">
        <p className="text-gray-400 text-xs mb-4 uppercase tracking-[0.2em]">
          Home
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center leading-tight">
          Tìm kiếm cơ hội nghề nghiệp <br className="hidden md:block" /> lý
          tưởng của bạn
        </h1>

        {/* --- PHẦN NỘI DUNG MỚI CHÈN VÀO --- */}
        <p className="text-gray-400 text-center max-w-2xl mb-10 text-sm md:text-base leading-relaxed">
          Khám phá hàng ngàn công việc từ các công ty hàng đầu và kết nối với
          cộng đồng chuyên gia chuyên nghiệp.
        </p>
        {/* ---------------------------------- */}

        <Search />

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-12 border-t border-gray-800 pt-10 w-full text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
              10,000+
            </h3>
            <p className="text-gray-500 text-[10px] uppercase mt-1">Jobs</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
              5,000+
            </h3>
            <p className="text-gray-500 text-[10px] uppercase mt-1">
              Companies
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
              50,000+
            </h3>
            <p className="text-gray-500 text-[10px] uppercase mt-1">
              Candidates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
