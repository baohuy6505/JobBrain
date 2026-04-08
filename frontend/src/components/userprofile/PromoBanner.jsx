import React from "react";
import { HiOutlineChartBar } from "react-icons/hi";

const PromoBanner = () => {
  return (
    <div className="bg-purple-600 rounded-2xl shadow-lg p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      
      {/* Element chìm làm nền */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>

      <div className="relative z-10 md:max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          Your profile is visible to 456 top recruiters this week.
        </h2>
        <p className="text-purple-100 text-sm mb-6 leading-relaxed">
          We use Precision Brutalism principles to ensure your data stands out. 
          Keep your skills updated to stay at the top of search results.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button className="bg-white text-purple-600 font-bold py-2.5 px-5 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            View Public Profile
          </button>
          <button className="bg-purple-500/50 hover:bg-purple-500 border border-purple-400/50 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors">
            Go Premium
          </button>
        </div>
      </div>

      {/* Icon lớn bên phải */}
      <div className="relative z-10 w-32 h-32 bg-white rounded-2xl rotate-12 flex items-center justify-center shadow-2xl shrink-0 hidden md:flex">
        <HiOutlineChartBar className="text-purple-600 text-5xl -rotate-12" />
      </div>

    </div>
  );
};

export default PromoBanner;