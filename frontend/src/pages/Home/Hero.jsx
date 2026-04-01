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
      /* 1. Đẩy xuống để không bị Header che mất */
      mt-16 
      /* 2. Tính toán chiều cao: 100dvh trừ đi 64px của Header */
      h-[calc(100dvh-64px)] 
      /* 3. Đảm bảo không bị vỡ nội dung trên màn hình cực nhỏ */
      min-h-[500px] 
    "
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full px-6">
        <p className="text-gray-400 text-xs mb-4 uppercase tracking-[0.2em]">
          Home
        </p>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center leading-tight">
          Tìm kiếm cơ hội nghề nghiệp <br className="hidden md:block" /> lý
          tưởng của bạn
        </h1>

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
