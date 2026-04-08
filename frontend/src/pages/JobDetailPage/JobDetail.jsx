import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobDetailApi, getRelatedJobsApi } from "../../mock/jobsService";

import JobHeader from "../../Components/JobDetail/JobHeader";
import JobActionSidebar from "../../Components/JobDetail/JobActionSidebar";
import JobDetailBody from "../../Components/JobDetail/JobDetailBody";
import CompanyInfo from "../../Components/JobDetail/CompanyInfo";
import RelatedJobs from "../../Components/JobDetail/RelatedJobs";

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchAllData = async () => {
      // 1. Reset trạng thái khi chuyển giữa các Job
      setJob(null);
      setRelatedJobs([]);
      setLoading(true);

      try {
        // 2. Lấy Job chính
        const jobData = await getJobDetailApi(id);

        if (jobData) {
          setJob(jobData);
          // 3. Lấy Job liên quan dựa trên thông tin Job chính
          const relatedData = await getRelatedJobsApi(jobData, 4);
          setRelatedJobs(relatedData);
        }
      } catch (error) {
        console.error("Lỗi fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  // Loading State
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-medium">Đang tải dữ liệu...</p>
      </div>
    );
  }

  // Error State
  if (!job) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-gray-500 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy công việc!</h2>
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 font-bold hover:underline"
        >
          {" "}
          Quay lại{" "}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CỘT TRÁI: Nội dung chính */}
          <div className="lg:col-span-8 space-y-6">
            <JobHeader job={job} />
            <JobDetailBody job={job} />
            {/* Truyền company đã được populate đầy đủ */}
            <CompanyInfo company={job?.company} />
          </div>

          {/* CỘT PHẢI: Sidebar hành động (Sticky) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <JobActionSidebar job={job} />
          </div>
        </div>

        {/* PHẦN VIỆC LÀM LIÊN QUAN (Nằm dưới Grid) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <RelatedJobs jobs={relatedJobs} />
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
