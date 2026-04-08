import React, { useState } from "react";
import { FiX, FiArrowRight } from "react-icons/fi";
import Stepper from "../../../components/jobPosts/Stepper";
import Step1GeneralInfo from "../../../components/jobPosts/Step1GeneralInfo";
import Step2Salary from "../../../components/jobPosts/Step2Salary";
import Step3Description from "../../../components/jobPosts/Step3Description";
import Step4Review from "../../../components/jobPosts/Step4Review";
const JobPosts = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // 2. State cho dữ liệu form
  const [formData, setFormData] = useState({
    title: "Senior Fullstack Engineer (Node.js & React)",
    category: "",
    jobType: "Full-time",
    location: "Phan Thanh, Đà Nẵng",
    quantity: 2,
    level: "Senior",
    experience: "1-3 năm",
    dayLimit: "06/05/2005",
    minSalary: 16000000,
    maxSalary: 50000000,
    description: "Chúng tôi đang tìm kiếm một Senior Fullstack Engineer có kinh nghiệm với Node.js và React để gia nhập đội ngũ phát triển của chúng tôi. Ứng viên lý tưởng sẽ có khả năng làm việc độc lập cũng như hợp tác trong một môi trường nhóm, đồng thời có đam mê tạo ra các sản phẩm chất lượng cao và có ảnh hưởng.",
    benefits: ["Chăm sóc sức khỏe", "Thưởng KPI", "Du lịch hàng năm"],
  });

  const stepConfig = [
    { name: "Thông tin chung", id: 1 },
    { name: "Lương & Yêu cầu", id: 2 },
    { name: "Mô tả công việc", id: 3 },
    { name: "Hoàn tất", id: 4 },
  ];

  // Hàm chuyển bước
  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleEdit = () => setCurrentStep(1);
  const handleSave = () => {
    console.log("Dữ liệu đã lưu:", formData);
    alert("Job post đã được lưu thành công!");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center pb-12 px-4 pt-[100px] font-sans">
      <div className="w-full max-w-4xl">
        <Stepper steps={stepConfig} currentStep={currentStep} />

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-6">
          {currentStep === 1 && (
            <Step1GeneralInfo formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 2 && (
            <Step2Salary formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 3 && (
            <Step3Description formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 4 && (
            <Step4Review formData={formData} setFormData={setFormData} onEdit={handleEdit} onSubmit={handleSave} />
          )}
          {currentStep < 4 && (
            <div className="flex justify-between items-center pt-8 mt-10 border-t border-gray-100">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 text-gray-400 font-bold hover:text-gray-600 transition-colors ${currentStep === 1 ? "invisible" : ""}`}
              >
                <FiX className="w-5 h-5" /> Back
              </button>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-8 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-all"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
                >
                  {currentStep === 4 ? "Finish" : "Next Step"}{" "}
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
