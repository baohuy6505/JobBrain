import React, { useState } from "react";
import { HiPencil, HiX } from "react-icons/hi";

const TechnicalSkills = ({ initialSkills }) => {
  const [skills, setSkills] = useState(initialSkills);
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setSkills([...skills, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base font-bold text-gray-900">Technical Skills</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <HiPencil />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold">
            {skill}
            <HiX className="cursor-pointer hover:text-blue-800" onClick={() => handleRemoveSkill(index)} />
          </span>
        ))}
      </div>

      <input 
        type="text" 
        placeholder="Add more skills... (Press Enter)" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddSkill}
        className="w-full text-sm border border-gray-200 rounded-lg p-2.5 outline-none focus:border-blue-500 transition-colors"
      />
    </div>
  );
};

export default TechnicalSkills;