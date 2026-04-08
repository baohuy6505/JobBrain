import React from 'react';

const Stepper = ({ steps = [], currentStep = 1 }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between gap-4">
        {steps.map((step) => {
          const isActive = step.id <= currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <div key={step.id} className="flex-1 flex flex-col items-center gap-3">
              <div 
                className={`w-full h-1.5 rounded-full transition-all duration-500 
                ${isActive ? 'bg-blue-600' : 'bg-gray-200'}`}
              ></div>
              
              <span 
                className={`text-xs font-bold transition-colors duration-300
                ${isCurrent ? 'text-blue-600' : 'text-gray-400'}`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;