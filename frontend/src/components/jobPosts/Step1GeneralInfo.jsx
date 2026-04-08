import React from "react";
import { FiArrowRight, FiX } from "react-icons/fi";
import { HiLocationMarker, HiOutlineChevronDown } from "react-icons/hi";

const Label = ({ children }) => (
    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
        {children}
    </label>
);

const Step1GeneralInfo = ({ formData, setFormData }) => { 
    return (
        <div>
            <header className="mb-10">
                <h1 className="text-2xl font-bold text-slate-900">Step 1: Basic Information</h1>
                <p className="text-slate-500 text-sm">Start by defining the core details of your job opening.</p>
              </header>
    
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label>JOB TITLE (TÊN CÔNG VIỆC)</Label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition-all"
                    placeholder="e.g. Senior Frontend Engineer"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label>CATEGORY (NGÀNH NGHỀ)</Label>
                    <div className="relative">
                      <select
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none appearance-none bg-white"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                      >
                        <option value="">Select Category</option>
                        <option value="it">IT / Software</option>
                        <option value="marketing">Marketing</option>
                      </select>
                      <HiOutlineChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
    
                  <div>
                    <Label>JOB TYPE (HÌNH THỨC)</Label>
                    <div className="flex gap-3 p-1 bg-gray-100 rounded-xl">
                      {['Full-time', 'Contract'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, jobType: type})}
                          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${formData.jobType === type ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
    
                <div>
                  <Label>WORK LOCATION (ĐỊA ĐIỂM)</Label>
                  <div className="relative">
                    <HiLocationMarker className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-12 pr-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                      placeholder="City, District or Remote"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>
              </form>
         </div>
)
}
export default Step1GeneralInfo;