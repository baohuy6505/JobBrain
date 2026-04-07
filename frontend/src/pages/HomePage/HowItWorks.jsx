import {
  HiOutlineUserAdd,
  HiOutlineSearch,
  HiOutlineBriefcase,
} from "react-icons/hi";

// Sub-component StepCard: Giữ nguyên logic hiển thị của bạn
const StepCard = ({ step }) => (
  <div className="flex flex-col items-center text-center px-4 relative group">
    {/* Icon Box */}
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:-translate-y-2 duration-300 ${step.bgColor}`}
    >
      <step.icon className={`text-2xl ${step.iconColor}`} />
    </div>

    {/* Number Index */}
    <span className="text-5xl font-bold text-gray-50 mb-4 select-none">
      {step.number}
    </span>

    {/* Content */}
    <div className="mt-8">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
        {step.description}
      </p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tạo hồ sơ chuyên nghiệp",
      description:
        "Đăng ký và xây dựng CV cá nhân hóa để thu hút các nhà tuyển dụng hàng đầu.",
      icon: HiOutlineUserAdd,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      number: "02",
      title: "Tìm kiếm & Ứng tuyển",
      description:
        "Sử dụng bộ lọc thông minh để tìm công việc phù hợp và ứng tuyển chỉ với một cú nhấp.",
      icon: HiOutlineSearch,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      number: "03",
      title: "Nhận việc làm ngay",
      description:
        "Phỏng vấn trực tiếp với doanh nghiệp và bắt đầu hành trình sự nghiệp mới của bạn.",
      icon: HiOutlineBriefcase,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cách thức hoạt động
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Quy trình đơn giản giúp bạn tìm thấy công việc mơ ước chỉ trong vài
            bước.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Đường kẻ nối (Chỉ hiện trên Desktop) */}
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
