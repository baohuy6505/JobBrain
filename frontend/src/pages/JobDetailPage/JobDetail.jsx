import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobDetailApi, getRelatedJobsApi } from "../../mock/jobsService";

import JobHeader from "../../components/JobDetail/JobHeader";
import JobActionSidebar from "../../components/JobDetail/JobActionSidebar";
import JobDetailBody from "../../components/JobDetail/JobDetailBody";
import CompanyInfo from "../../components/JobDetail/CompanyInfo";
import RelatedJobs from "../../components/JobDetail/RelatedJobs";

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setJob(null);
      setRelatedJobs([]);
      setLoading(true);

      try {
        const jobData = await getJobDetailApi(id);

        if (jobData) {
          setJob(jobData);
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

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <JobHeader job={job} />
            <JobDetailBody job={job} />
            <CompanyInfo company={job?.company} />
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <JobActionSidebar job={job} />
          </div>
        </div>
        <div className="mt-16 pt-12 border-t border-slate-200">
          <RelatedJobs jobs={relatedJobs} />
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
