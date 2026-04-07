import React from "react";

const ProfessionalTimeline = ({ experiences }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-8">Professional Timeline</h3>
      
      {/* Vùng chứa Timeline */}
      <div className="relative border-l-2 border-gray-100 ml-3 md:ml-4">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="mb-10 ml-6 last:mb-0">
            {/* Chấm tròn trên thanh thời gian */}
            <span className="absolute flex items-center justify-center w-3 h-3 bg-white border-2 border-blue-500 rounded-full -left-[7px] mt-1.5 ring-4 ring-white"></span>
            
            {/* Thời gian / Badge Present */}
            <div className="mb-1 text-xs font-bold text-blue-600">
              {exp.isPresent ? (
                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
                  Present
                </span>
              ) : (
                exp.time
              )}
            </div>

            {/* Chức danh & Công ty */}
            <h4 className="text-base font-bold text-gray-900 mt-2">{exp.role}</h4>
            <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
            
            {/* Mô tả */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalTimeline;