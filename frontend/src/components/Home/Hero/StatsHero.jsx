import CountUp from "react-countup";

const StatsHero = () => {
  return (
    <div className="grid grid-cols-3 md:flex md:justify-center gap-2 sm:gap-10 md:gap-20 border-t border-gray-800 pt-6 md:pt-10 w-full text-center">
      <div>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 truncate">
          <CountUp end={10000} duration={2} separator="," />+
        </h3>

        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase mt-1 tracking-wider">
          Jobs
        </p>
      </div>

      <div>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 truncate">
          <CountUp end={5000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase mt-1 tracking-wider">
          Companies
        </p>
      </div>

      <div>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 truncate">
          <CountUp end={50000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase mt-1 tracking-wider">
          Candidates
        </p>
      </div>
    </div>
  );
};

export default StatsHero;
