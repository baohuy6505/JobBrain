import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';

const UserGrowthChart = () => {
  const growthData = [
    { month: 'JUN', users: 400 },
    { month: 'JUL', users: 650 },
    { month: 'AUG', users: 550 },
    { month: 'SEP', users: 1000 },
    { month: 'OCT', users: 1000 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl">
          {`${payload[0].value} Users`}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-lg text-center font-bold text-slate-800">Biểu đồ tăng trưởng người dùng</h3>
      </div>
      
      <div style={{ width: '100%', height: '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={growthData} 
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }} 
            barSize={36} 
          >
            <XAxis 
              dataKey="month" 
              axisLine={false}  
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 'bold' }} 
              dy={10} 
            />
            
            <YAxis hide /> 
            
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ fill: 'transparent' }} 
            />

            <Bar 
              dataKey="users" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]} 
              background={{ fill: '#EEF2FF', radius: [4, 4, 0, 0] }} 
              animationDuration={1500}
              activeBar={{ fill: '#1D4ED8' }} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;