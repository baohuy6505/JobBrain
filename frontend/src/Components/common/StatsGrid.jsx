import React from "react";

const StatsGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <div 
            key={item.id || index} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group cursor-pointer hover:shadow-md hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Góc phải (Badge) - Nhận nguyên khối HTML từ cha truyền vào */}
            {item.badge && (
              <div className="absolute top-6 right-6">
                {item.badge}
              </div>
            )}

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${item.iconBgColor}`}>
              {IconComponent && <IconComponent className={`text-3xl ${item.iconColor}`} />}
            </div>
            
            <h3 className="text-gray-500 text-sm font-medium mb-1">{item.title}</h3>
            <p className="text-3xl font-extrabold text-gray-900 tracking-tight">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;