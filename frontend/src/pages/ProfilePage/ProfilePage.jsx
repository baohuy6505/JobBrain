import React, { useState, useEffect } from "react";
import ProfileCompletion from "../../Components/Profile/ProfileCompletion";
import TechnicalSkills from "../../Components/Profile/TechnicalSkills";
import CurriculumVitae from "../../Components/Profile/CurriculumVitae";
import ProfessionalTimeline from "../../Components/Profile/ProfessionalTimeline";
import PromoBanner from "../../Components/Profile/PromoBanner";
import { HiOutlineSave } from "react-icons/hi";

// GIẢ LẬP API
const mockFetchProfileData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        completionRate: 80,
        skills: ["React", "Tailwind", "TypeScript", "Node.js"],
        cv: {
          fileName: "CV_2024_Main.pdf",
          uploadedAt: "Jan 12, 2024"
        },
        experiences: [
          {
            id: 1,
            isPresent: true,
            time: "PRESENT",
            role: "Senior Developer at TechMind",
            location: "San Francisco, CA • Full-time",
            description: "Leading the core architecture team for the SaaS recruitment platform. Scaling distributed systems to handle 2M+ active candidates."
          },
          {
            id: 2,
            isPresent: false,
            time: "2020 — 2022",
            role: "Full Stack Engineer at CloudScale",
            location: "Remote • Contract",
            description: "Developed responsive dashboards using React and Node.js. Optimized database queries resulting in 40% performance boost."
          },
          {
            id: 3,
            isPresent: false,
            time: "2016 — 2020",
            role: "B.Sc. in Computer Science",
            location: "University of Engineering",
            description: "First Class Honors • Specialized in Software Engineering"
          }
        ]
      });
    }, 800); // Load mất 0.8s
  });
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await mockFetchProfileData();
      setProfileData(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#f8f9fb]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] mt-14 pb-16 pt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Nút Save Profile */}
        <button className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm flex items-center gap-2 transition-colors">
          <HiOutlineSave className="text-lg" /> Save Profile
        </button>

        {/* Component: Tiến độ hoàn thành */}
        <ProfileCompletion rate={profileData.completionRate} />

        {/* Layout chia 2 cột */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* CỘT TRÁI (Skills + CV) */}
          <div className="lg:col-span-1 space-y-6">
            <TechnicalSkills initialSkills={profileData.skills} />
            <CurriculumVitae cvData={profileData.cv} />
          </div>

          {/* CỘT PHẢI (Timeline) */}
          <div className="lg:col-span-2">
            <ProfessionalTimeline experiences={profileData.experiences} />
          </div>
        </div>

        {/* Component: Banner quảng cáo */}
        <div className="mt-6">
          <PromoBanner />
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;