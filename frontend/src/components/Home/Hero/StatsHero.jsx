import CountUp from "react-countup";

const StatsHero = () => {
  return (
    // Mobile: Dùng grid 3 cột, khoảng cách nhỏ (gap-2) để không bao giờ bị rớt dòng
    // Tablet/PC (md): Chuyển thành flex, căn giữa, khoảng cách lớn (gap-20)
    <div className="grid grid-cols-3 md:flex md:justify-center gap-2 sm:gap-10 md:gap-20 border-t border-gray-800 pt-6 md:pt-10 w-full text-center">
      
      <div>
        {/* Số: Nhỏ ở mobile (text-lg), to dần ở tablet (text-2xl) và PC (text-3xl) */}
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 truncate">
          <CountUp end={10000} duration={2} separator="," />+
        </h3>
        {/* Chữ: Nhỏ ở mobile (9px), thưa chữ ra (tracking-wider) để dễ đọc */}
        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase mt-1 tracking-wider">Jobs</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 truncate">
          <CountUp end={5000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase mt-1 tracking-wider">Companies</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 truncate">
          <CountUp end={50000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase mt-1 tracking-wider">Candidates</p>
      </div>

    </div>
  );
};

export default StatsHero;