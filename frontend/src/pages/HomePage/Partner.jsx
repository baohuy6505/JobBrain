import React from "react";
import LogoItem from "../../Components/home/LogoItem";

const PartnerSection = () => {
  // Danh sách đối tác - sau này Backend trả về 10 cái nó tự dàn hàng
  const partners = [
    {
      id: 1,
      name: "Company 1",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 2,
      name: "Company 2",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 3,
      name: "Company 3",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      id: 4,
      name: "Company 4",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: 5,
      name: "Company 5",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tiêu đề nhỏ phía trên */}
        <p className="text-center text-sm font-semibold text-blue-900/40 uppercase tracking-[0.3em] mb-10">
          Đối tác chiến lược
        </p>

        {/* Lưới logo: Tự động co giãn từ 2 cột (mobile) lên 5 cột (desktop) */}
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
