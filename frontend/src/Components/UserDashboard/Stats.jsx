import React from "react";
import {mockUserData} from "../../mock/userData";
const Stats = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {mockUserData.stats.map((stat) => (
        <div key={stat.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative">
          
          {/* Badge phần trăm góc phải */}
          <div className="absolute top-4 right-4">
            {stat.badgeMode ? (
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">MỚI</span>
            ) : (
              <span className={`text-xs font-bold px-2 py-1 rounded ${stat.isIncrease ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.percent} {stat.isIncrease ? '↗' : '↘'}
              </span>
            )}
          </div>

          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.bgColor}`}>
            <stat.icon className={`text-2xl ${stat.iconColor}`} />
          </div>
          
          <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;