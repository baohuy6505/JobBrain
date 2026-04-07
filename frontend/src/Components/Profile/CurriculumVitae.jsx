import React from "react";
import { HiOutlineDocumentText, HiCheckCircle } from "react-icons/hi";

const CurriculumVitae = ({ cvData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-base font-bold text-gray-900 mb-5">Curriculum Vitae</h3>
      
      {/* Box Upload */}
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center mb-4 hover:bg-gray-50 cursor-pointer transition-colors">
        <HiOutlineDocumentText className="text-gray-300 text-4xl mx-auto mb-2" />
        <p className="text-sm font-bold text-gray-700">Upload your latest CV</p>
        <p className="text-xs text-gray-400 mt-1">PDF, DOCX up to 10MB</p>
      </div>

      {/* File đã upload */}
      <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-3 rounded-xl">
        <HiCheckCircle className="text-blue-500 text-2xl shrink-0" />
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-800 truncate">{cvData.fileName}</p>
          <p className="text-xs text-gray-500">Uploaded {cvData.uploadedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;