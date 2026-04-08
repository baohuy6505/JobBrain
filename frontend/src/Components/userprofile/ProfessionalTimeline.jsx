import React, { useState } from "react";
import { HiPencil, HiCheck, HiTrash, HiOutlinePlus } from "react-icons/hi";

const ProfessionalTimeline = ({ experiences, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Cập nhật 1 trường dữ liệu của 1 kinh nghiệm
  const handleChange = (id, field, value) => {
    const updatedExps = experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onChange(updatedExps);
  };

  // Xóa kinh nghiệm
  const handleDelete = (id) => {
    const updatedExps = experiences.filter((exp) => exp.id !== id);
    onChange(updatedExps);
  };

  // Thêm kinh nghiệm mới (đẩy lên đầu)
  const handleAddExperience = () => {
    const newExp = {
      id: Date.now(), // Tạo ID ngẫu nhiên
      isPresent: false,
      time: "2024 - Present",
      role: "New Role",
      location: "Location",
      description: "Description about your responsibilities...",
    };
    onChange([newExp, ...experiences]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-bold text-gray-900">Professional Timeline</h3>
        <div className="flex gap-2">
          {isEditing && (
            <button 
              onClick={handleAddExperience}
              className="text-sm font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
            >
              <HiOutlinePlus /> Add New
            </button>
          )}
          <button 
            onClick={() => setIsEditing(!isEditing)} 
            className={`p-1.5 rounded-lg transition-colors ${isEditing ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:text-purple-600 hover:bg-purple-50'}`}
            >
            {isEditing ? <HiCheck className="text-xl" /> : <HiPencil className="text-lg" />}
          </button>
        </div>
      </div>
      
      <div className="relative border-l-2 border-gray-100 ml-3 md:ml-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-10 ml-6 last:mb-0 relative group">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-white border-2 border-purple-500 rounded-full -left-[27px] mt-1.5 ring-4 ring-white"></span>
            
            {isEditing && (
              <button 
                onClick={() => handleDelete(exp.id)}
                className="absolute right-0 top-0 text-red-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-md transition-colors"
              >
                <HiTrash />
              </button>
            )}

            <div className="mb-1 text-xs font-bold text-purple-600 flex items-center gap-2">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input 
                    type="text" value={exp.time} onChange={(e) => handleChange(exp.id, 'time', e.target.value)}
                    className="border border-purple-300 rounded px-2 py-0.5 w-32 outline-none focus:border-purple-500"
                  />
                  <label className="flex items-center gap-1 text-gray-500 cursor-pointer">
                    <input 
                      type="checkbox" checked={exp.isPresent} onChange={(e) => handleChange(exp.id, 'isPresent', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500"
                    />
                    Present
                  </label>
                </div>
              ) : (
                exp.isPresent ? <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">Present</span> : exp.time
              )}
            </div>

            {isEditing ? (
              <div className="space-y-2 mt-2 pr-8">
                <input 
                  type="text" value={exp.role} onChange={(e) => handleChange(exp.id, 'role', e.target.value)}
                  className="w-full text-base font-bold text-gray-900 border border-white-300 rounded px-2 py-1 outline-none focus:border-purple-500"
                />
                <input 
                  type="text" value={exp.location} onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                  className="w-full text-sm text-gray-500 border border-white-300 rounded px-2 py-1 outline-none focus:border-purple-500"
                />
                <textarea 
                  value={exp.description} onChange={(e) => handleChange(exp.id, 'description', e.target.value)} rows="3"
                  className="w-full text-sm text-gray-600 leading-relaxed border border-white-300 rounded px-2 py-1 outline-none focus:border-purple-500 resize-none"
                />
              </div>
            ) : (
              <>
                <h4 className="text-base font-bold text-gray-900 mt-2">{exp.role}</h4>
                <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalTimeline;