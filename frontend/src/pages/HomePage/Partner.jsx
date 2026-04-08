import { partners } from "../../mock/partnersData";
import LogoItem from "../../components/Home/Partner/LogoItemPartner";
const PartnerSection = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="relative inline-block group">
            {/* Đổi text-3xl thành text-2xl cho mobile, thêm lg:text-4xl cho PC */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
              Đối tác chiến lược
            </h2>

            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-[#6344ff] rounded-full w-12 transition-all duration-500 group-hover:w-full"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <LogoItem
              key={partner.id}
              logoUrl={partner.url}
              altText={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
