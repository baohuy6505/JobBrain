import React, { useState } from "react";
import { HiPencil,HiCheck, HiX } from "react-icons/hi";

const TechnicalSkills = ({ skills, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onChange([...skills, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    const newSkills = skills.filter((_, index) => index !== indexToRemove);
    onChange(newSkills);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base font-bold text-gray-900">Technical Skills</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className={`p-1.5 rounded-lg transition-colors ${isEditing ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:text-purple-600 hover:bg-purple-50'}`}
        >
          {isEditing ? <HiCheck className="text-xl" /> : <HiPencil className="text-lg" />}
          
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="flex items-center gap-1 bg-purple-50 text-purple-600 px-3 py-1.5 rounded-lg text-xs font-semibold">
            {skill}
            {isEditing && (
              <HiX className="cursor-pointer hover:text-purple-800 ml-1" onClick={() => handleRemoveSkill(index)} />
            )}
            
          </span>
        ))}
      </div>

      {isEditing && (
        <input 
          type="text" 
          placeholder="Add more skills... (Press Enter)" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddSkill}
          className="w-full text-sm border border-purple-300 rounded-lg p-2.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
        />
      )}
    </div>
  );
};

export default TechnicalSkills;