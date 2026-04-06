import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ALL_JOBS } from "../../mock/JobData"; // Điều chỉnh đường dẫn file fake của bạn

// Import các component con
import JobHeader from "../../Components/JobDetail/JobHeader";
import JobActionSidebar from "../../Components/JobDetail/JobActionSidebar";
import JobDetailBody from "../../Components/JobDetail/JobDetailBody";
import CompanyInfo from "../../Components/JobDetail/CompanyInfo";
import RelatedJobs from "../../Components/JobDetail/RelatedJobs";
const JobDetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  // Tìm Job trong mảng fake
  const job = useMemo(() => {
    return ALL_JOBS.find((item) => item.id === parseInt(id));
  }, [id]);

  if (!job) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Rất tiếc, không tìm thấy công việc này!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Bố cục Grid chính */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CỘT TRÁI (8 Cột) */}
          <div className="lg:col-span-8 space-y-6">
            <JobHeader job={job} />
            <JobDetailBody job={job} />
            <CompanyInfo job={job} />
          </div>

          {/* CỘT PHẢI (4 Cột) */}
          <div className="lg:col-span-4 space-y-6">
            <JobActionSidebar job={job} />
          </div>
        </div>
        {/* Cục này nằm dưới, trải dài 100% */}
        <RelatedJobs currentJob={job} allJobs={ALL_JOBS} />
      </div>
    </div>
  );
};

export default JobDetailPage;
