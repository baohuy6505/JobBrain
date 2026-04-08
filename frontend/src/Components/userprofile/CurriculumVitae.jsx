import React from "react";
import { HiOutlineDocumentText, HiCheckCircle, HiTrash } from "react-icons/hi";

// Nhận thêm hàm onChange từ ProfilePage
const CurriculumVitae = ({ cvData, onChange }) => {

  // Giả lập việc chọn file từ máy tính
  const handleSimulateUpload = () => {
    // Lấy ngày hiện tại
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Gọi hàm onChange để đẩy data mới lên trên
    onChange({
      fileName: `CV_Updated_${Math.floor(Math.random() * 1000)}.pdf`,
      uploadedAt: today
    });
  };

  // Giả lập việc xóa CV
  const handleRemoveCV = () => {
    onChange(null); // Trả về null để xóa data
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-base font-bold text-gray-900 mb-5">Curriculum Vitae</h3>
      
      {/* Box Upload - Click vào để giả lập up file */}
      <div 
        onClick={handleSimulateUpload}
        className="border-2 border-dashed border-purple-200 bg-purple-50/30 rounded-xl p-6 text-center mb-4 hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition-colors"
      >
        <HiOutlineDocumentText className="text-purple-400 text-4xl mx-auto mb-2" />
        <p className="text-sm font-bold text-purple-700">Click to Upload CV</p>
        <p className="text-xs text-purple-400 mt-1">PDF, DOCX up to 10MB</p>
      </div>

      {/* Hiển thị File đã upload (Nếu cvData khác null) */}
      {cvData && cvData.fileName ? (
        <div className="flex items-center justify-between bg-gray-50 border border-gray-200 p-3 rounded-xl group">
          <div className="flex items-center gap-3 min-w-0">
            <HiCheckCircle className="text-green-500 text-2xl shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">{cvData.fileName}</p>
              <p className="text-xs text-gray-500">Uploaded {cvData.uploadedAt}</p>
            </div>
          </div>
          {/* Nút xóa CV */}
          <button 
            onClick={handleRemoveCV}
            className="text-gray-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove CV"
          >
            <HiTrash className="text-lg" />
          </button>
        </div>
      ) : (
        <p className="text-xs text-center text-red-500 font-medium">Chưa có CV nào được tải lên.</p>
      )}
    </div>
  );
};

export default CurriculumVitae;