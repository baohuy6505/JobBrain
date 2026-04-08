import CountUp from "react-countup";

const StatsHero = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 md:gap-20 border-t border-gray-800 pt-10 w-full text-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
          <CountUp end={10000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[10px] uppercase mt-1">Jobs</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
          <CountUp end={5000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[10px] uppercase mt-1">Companies</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
          <CountUp end={50000} duration={2} separator="," />+
        </h3>
        <p className="text-gray-500 text-[10px] uppercase mt-1">Candidates</p>
      </div>
    </div>
  );
};

export default StatsHero;
