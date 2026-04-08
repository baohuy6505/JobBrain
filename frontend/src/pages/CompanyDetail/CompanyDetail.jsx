import React from "react";
import { useParams } from "react-router-dom";
import { MOCK_COMPANIES } from "../../mock/companyData";
import {
  HiOutlineLocationMarker,
  HiOutlineGlobeAlt,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiCheckCircle,
} from "react-icons/hi";
import ProfileBanner from "../../components/companyDetail/CompanyProfileBanner";
import InfoBox from "../../components/common/InfoBox";
import CompanyReviews from "../../components/companyDetail/CompanyDetailReviews";
import CompanyContact from "../../components/companyDetail/CompanyDetailContact";

const CompanyDetail = () => {
  const { id } = useParams();
  const company = MOCK_COMPANIES.find((item) => item.id === parseInt(id));

  if (!company) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-12">
      <ProfileBanner
        logo={company.logo}
        title={company.name}
        extraBadge="Top Employer"
        subTitle={
          <>
            <HiOutlineLocationMarker className="text-[#3b82f6] text-xl" />
            <span>{company.location}</span>
          </>
        }
      />

      <div className="max-w-[1200px] mx-auto px-4 mt-24">
        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <InfoBox
            icon={<HiOutlineUsers />}
            label="Quy mô"
            value={`${company.employees} nhân viên`}
            colorClass="bg-blue-50 text-blue-600"
          />
          <InfoBox
            icon={<HiOutlineGlobeAlt />}
            label="Website"
            value={company.website}
            colorClass="bg-indigo-50 text-[#3b82f6]"
            isLink
          />
          <InfoBox
            icon={<HiOutlineCalendar />}
            label="Làm việc"
            value={company.workingTime}
            colorClass="bg-orange-50 text-orange-600"
          />
          <InfoBox
            icon={<HiCheckCircle />}
            label="Trạng thái"
            value="Đã xác thực"
            colorClass="bg-emerald-50 text-emerald-600"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#3b82f6] rounded-full"></span> Về
                chúng tôi
              </h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {company.description}
              </p>
            </div>
            <CompanyReviews
              reviews={company.reviews}
              rating={company.rating}
              reviewsCount={company.reviewsCount}
              stats={company.stats}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <CompanyContact companyName={company.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
