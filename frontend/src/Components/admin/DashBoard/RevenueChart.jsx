import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  // Dữ liệu mô phỏng theo biểu đồ đường (khớp với các mốc thời gian trục X)
  const revenueData = [
    { date: "Tháng 1", revenue: 35000 },
    { date: "Tháng 2", revenue: 48000 },
    { date: "Tháng 3", revenue: 42000 },
    { date: "Tháng 4", revenue: 95000 },
    { date: "Tháng 5", revenue: 85000 },
    { date: "Tháng 6", revenue: 85000 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const formattedValue = (payload[0].value / 1000).toFixed(1);
      return (
        <div className="bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl">
          ${formattedValue}k
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex justify-around items-start mb-6">
        <h3 className="text-lg text-center font-bold text-slate-800 text-center">
          Biểu đồ doanh thu 6 tháng qua
        </h3>
      </div>

      <div className="w-full h-64 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#f3f4f6" />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: "bold" }}
              dy={10}
              padding={{ left: 20, right: 20 }}
            />

            <YAxis hide />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="linear"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#2563EB",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
