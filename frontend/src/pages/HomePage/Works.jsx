import StepCard from "../../components/Home/Works/StepWork";
import { steps } from "../../mock/stepsWorkData";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="relative inline-block group">
            {/* Chỉnh text-2xl cho mobile, to dần ở sm và md */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              Cách thức hoạt động
            </h2>

            <div
              className="
                absolute -bottom-2 left-1/2 -translate-x-1/2
                h-1 bg-[#6344ff] rounded-full
                w-12
                transition-all duration-500 ease-out
                group-hover:w-full
              "
            ></div>
          </div>

          {/* Chữ text-sm trên mobile, md:text-base trên PC. Thêm px-4 chống tràn mép viền */}
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mt-4 md:mt-6 px-4">
            Quy trình đơn giản giúp bạn tìm thấy công việc mơ ước chỉ trong vài
            bước.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gray-100 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, index) => (
              <StepCard key={index} step={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
