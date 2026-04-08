import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileCompletion from "../../components/userprofile/ProfileCompletion";
import TechnicalSkills from "../../components/userprofile/TechnicalSkills";
import CurriculumVitae from "../../components/userprofile/CurriculumVitae";
import ProfessionalTimeline from "../../components/userprofile/ProfessionalTimeline";
import PromoBanner from "../../components/userprofile/PromoBanner";
import PersonalInfo from "../../components/userprofile/PersonalInfo";
import { HiOutlineSave, HiCheck } from "react-icons/hi";

import { mockProfileData } from "../../mock/userData"; 

const UserProfilePage = () => {
  const { id } = useParams();
  const { userInfo, isAuthenticated } = useSelector((state) => state.user);

  const [draftData, setDraftData] = useState({
    user: null,
    profile: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false); // Thêm hiệu ứng lúc lưu

  useEffect(() => {
    if (isAuthenticated && userInfo && String(userInfo.userId) === id) {
      const loadData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        setDraftData({
          user: userInfo, // Dữ liệu từ Redux
          profile: mockProfileData // Dữ liệu từ API/Mock
        });
        setIsLoading(false);
      };
      loadData();
    }
  }, [id, userInfo, isAuthenticated]);

  const handleSaveAll = () => {
    setIsSaving(true);
    setTimeout(() => {
      const jsonToSave = JSON.stringify(draftData, null, 2);
    
      // alert("Dữ liệu JSON chuẩn bị gửi lên DB:\n\n" + jsonToSave);
      console.log("SENDING TO DB:", jsonToSave);
      setIsSaving(false);
    }, 600); // Giả lập thời gian lưu 0.6s
  };

  const handleUserChange = (field, value) => {
    setDraftData((prev) => ({
      ...prev,
      user: { ...prev.user, [field]: value }
    }));
  };

  const handleSkillsChange = (newSkills) => {
    setDraftData((prev) => ({
      ...prev,
      profile: { ...prev.profile, skills: newSkills }
    }));
  };

  const handleCVChange = (newCVData) => {
    setDraftData((prev) => ({
      ...prev,
      profile: { ...prev.profile, cv: newCVData }
    }));
  };

  const handleTimelineChange = (newTimelineData) => {
    setDraftData((prev) => ({
      ...prev,
      profile: { ...prev.profile, experiences: newTimelineData }
    }));
  };


  if (!isAuthenticated || !userInfo || String(userInfo.userId) !== id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">403 - Truy cập bị từ chối</h1>
        </div>
      </div>
    );
  }
  if (isLoading || !draftData.user || !draftData.profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
          <div className="h-32 sm:h-48 bg-gradient-to-r from-white to-black-800 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <div className="px-6 sm:px-8 pb-6 relative">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 sm:-mt-16 mb-4">
              <div className="relative">
                <img 
                  src={draftData.user.avatar || "https://i.pravatar.cc/150"} 
                  alt="Avatar" 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md bg-white object-cover"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              
              {/* Nút Save Xịn Xò */}
              <button 
                onClick={handleSaveAll}
                disabled={isSaving}
                className="bg-blue-600 hover:bg-purple-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95 disabled:bg-purple-400"
              >
                {isSaving ? <span className="animate-pulse flex items-center gap-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Saving...</span> 
                          : <><HiOutlineSave className="text-lg" /> Save Profile</>}
              </button>
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{draftData.user.name}</h1>
              <p className="text-gray-500 text-sm mt-1">{draftData.profile.experiences[0]?.role} • {draftData.user.address}</p>
            </div>
          </div>
        </div>


        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <PersonalInfo data={draftData.user} onChange={handleUserChange} />
            <TechnicalSkills skills={draftData.profile.skills} onChange={handleSkillsChange} />
            <CurriculumVitae cvData={draftData.profile.cv} onChange={handleCVChange} />
          </div>
          <div className="lg:col-span-2">
            <ProfessionalTimeline experiences={draftData.profile.experiences} onChange={handleTimelineChange} />
          </div>
        </div>

        <div className="mt-6">
          <PromoBanner />
        </div>

      </div>
    </div>
  );
};

export default UserProfilePage;