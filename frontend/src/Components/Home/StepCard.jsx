import React from "react";

const StepCard = ({ step }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 relative group">
      {/* Icon Box */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:-translate-y-2 duration-300 ${step.bgColor}`}
      >
        <step.icon className={`text-2xl ${step.iconColor}`} />
      </div>

      {/* Number Index */}
      <span className="text-5xl font-bold text-gray-50 mb-4 select-none">
        {step.number}
      </span>

      {/* Content */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
