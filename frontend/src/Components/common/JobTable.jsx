import React from "react";
import { HiDotsVertical } from "react-icons/hi";

// Nhận props 'jobs' từ component cha truyền xuống
const JobTable = ({ jobs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
            <th className="pb-4 font-medium pl-2">Công ty</th>
            <th className="pb-4 font-medium">Vị trí</th>
            <th className="pb-4 font-medium">Ngày nộp</th>
            <th className="pb-4 font-medium">Trạng thái</th>
            <th className="pb-4 font-medium text-right pr-2">Hành động</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {jobs.map((job) => (
            <tr key={job.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
              <td className="py-4 pl-2 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${job.logoBg}`}>
                  {job.logoText}
                </div>
                <span className="font-semibold text-gray-900">{job.company}</span>
              </td>
              <td className="py-4 text-gray-600">{job.role}</td>
              <td className="py-4 text-gray-500">{job.date}</td>
              <td className="py-4">
                <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${job.color}`}>
                  {job.status}
                </span>
              </td>
              <td className="py-4 text-right pr-2">
                <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <HiDotsVertical className="text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;