import React, { useState } from "react";
import { HiPencil, HiOutlinePhone, HiOutlineCalendar, HiOutlineUser, HiOutlineIdentification, HiCheck } from "react-icons/hi";

const PersonalInfo = ({ data, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base font-bold text-gray-900">Personal Info</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className={`p-1.5 rounded-lg transition-colors ${isEditing ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:text-purple-600 hover:bg-purple-50'}`}
        >
          {isEditing ? <HiCheck className="text-xl" /> : <HiPencil className="text-lg" />}
        </button>
      </div>

      <div className="space-y-4 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <HiOutlineUser className="text-purple-500 text-lg shrink-0" />
          <span className="font-medium text-gray-500 w-20">Name:</span>
          {isEditing ? (
            <input type="text" name="name" value={data.name || ""} onChange={handleChange} 
                   className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900 font-medium" />
          ) : (
            <span className="font-semibold text-gray-900">{data.name}</span>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          <HiOutlinePhone className="text-purple-500 text-lg shrink-0" />
          <span className="font-medium text-gray-500 w-20">Phone:</span>
          {isEditing ? (
            <input type="text" name="phone" value={data.phone || ""} onChange={handleChange} 
                   className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900 font-medium" />
          ) : (
            <span className="font-semibold text-gray-900">{data.phone}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <HiOutlineCalendar className="text-purple-500 text-lg shrink-0" />
          <span className="font-medium text-gray-500 w-20">Born:</span>
          {isEditing ? (
             <input type="text" name="birthYear" value={data.birthYear || ""} onChange={handleChange} 
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900 font-medium" />
          ) : (
            <span className="font-semibold text-gray-900">{data.birthYear} ({data.age} tuổi)</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;