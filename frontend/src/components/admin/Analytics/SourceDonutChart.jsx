import React from 'react';
import { 
  PieChart, 
  Pie, 
  // Xóa Cell ở đây
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { FiPieChart, FiSettings } from 'react-icons/fi';

const systemUsersData = [
  { name: 'Ứng viên (Candidates)', count: 24500, fill: '#3B82F6' }, // Đổi thành fill
  { name: 'Nhà tuyển dụng (Employers)', count: 4200, fill: '#8B5CF6' },
  { name: 'Đối tác (Partners)', count: 850, fill: '#10B981' },
  { name: 'Quản trị viên (Admins)', count: 12, fill: '#EF4444' },
];

const AdminTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-xl border border-slate-700">
        <span className="block text-gray-400 font-medium mb-1 uppercase tracking-wider text-[10px]">
          {payload[0].name}
        </span>
        <span className="text-lg">{payload[0].value.toLocaleString('vi-VN')} Tài khoản</span>
      </div>
    );
  }
  return null;
};

export default function SystemAdminPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3 mb-1">
              <FiSettings className="text-slate-700" /> System Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Tổng quan thông số toàn hệ thống và phân bổ tài khoản người dùng.
            </p>
          </div>
        </header>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FiPieChart className="text-blue-500" />
            <h3 className="text-sm font-bold text-slate-800">Cơ cấu người dùng nền tảng</h3>
          </div>
          
          <div className="w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                
                {/* Code bây giờ SIÊU GỌN, thẻ <Pie /> đóng luôn, 
                  không cần bọc mớ .map() rườm rà nữa! 
                */}
                <Pie
                  data={systemUsersData}
                  cx="50%" 
                  cy="45%" 
                  innerRadius={90} 
                  outerRadius={130}
                  paddingAngle={2} 
                  dataKey="count"
                  isAnimationActive={true}
                  stroke="none"
                />
                
                <Tooltip content={<AdminTooltip />} cursor={{ fill: 'transparent' }} />
                
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  formatter={(value) => <span className="text-slate-600 font-medium text-xs ml-1">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}