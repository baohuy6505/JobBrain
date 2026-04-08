import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

const RelatedJobs = ({ jobs }) => {
  if (!jobs || jobs.length === 0) return null;

  return (
    <div className="border-t border-slate-200 pt-12 text-left">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Việc làm tương tự
        </h2>
        <Link
          to="/list-job"
          className="text-[#6344ff] font-bold text-sm hover:underline transition-all"
        >
          Xem tất cả →
        </Link>
      </div>

      {/* Container cuộn ngang */}
      <div
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar select-none"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="min-w-[300px] md:min-w-[350px] flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <Card job={job} />
          </div>
        ))}
      </div>

      {/* CSS để ẩn thanh cuộn (Thêm vào file CSS tổng hoặc dùng Global Styles) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </div>
  );
};

export default RelatedJobs;
