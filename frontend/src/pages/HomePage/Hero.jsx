import SearchHero from "../../Components/Home/Hero/SearchHero";
import StatsHero from "../../Components/Home/Hero/StatsHero";
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center leading-tight">
          Tìm kiếm cơ hội nghề nghiệp <br className="hidden md:block" /> lý
          tưởng của bạn
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mb-10 text-sm md:text-base leading-relaxed">
          Khám phá hàng ngàn công việc từ các công ty hàng đầu và kết nối với
          cộng đồng chuyên gia chuyên nghiệp.
        </p>

        <SearchHero />
        <div className="mt-12">
          <StatsHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;
