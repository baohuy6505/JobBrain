import { HiOutlineBell } from "react-icons/hi";

const CompanyContact = ({ companyName }) => (
  <div className="bg-[#3b82f6] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-200 sticky top-24">
    <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center text-3xl mb-6">
      <HiOutlineBell />
    </div>
    <h4 className="text-2xl font-bold mb-4">Theo dõi {companyName}</h4>
    <p className="text-sm text-indigo-100 mb-8 leading-relaxed">
      Nhận thông báo việc làm mới nhất từ công ty này.
    </p>
    <input
      type="email"
      placeholder="Email của bạn"
      className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 mb-4 outline-none placeholder:text-white/40 focus:bg-white/20"
    />
    <button className="w-full bg-white text-[#3b82f6] py-4 rounded-2xl font-black shadow-lg hover:shadow-white/20 active:scale-95 transition-all">
      ĐĂNG KÝ NGAY
    </button>
  </div>
);

export default CompanyContact;
