import React from "react";
import { HiOutlineDownload, HiOutlineFilter, HiSearch } from "react-icons/hi";

const TransactionHistory = ({ transactions }) => {
  
  // Logic lấy màu sắc cho Cột Type
  const getTypeStyle = (type) => {
    switch(type) {
      case "DEPOSIT": return "bg-green-100 text-green-700";
      case "JOB POST": return "bg-orange-100 text-orange-700";
      case "REFUND": return "bg-purple-100 text-purple-700";
      case "SUBSCRIPTION": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  // Logic lấy màu cho Cột Status (Dấu chấm)
  const getStatusColor = (status) => {
    switch(status) {
      case "Success": return "bg-green-500";
      case "Pending": return "bg-yellow-500";
      case "Failed": return "bg-red-500";
      default: return "bg-gray-300";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
      
      {/* Table Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
            <HiOutlineFilter /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50/50 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              <th className="p-4 rounded-l-lg">Date</th>
              <th className="p-4">Description</th>
              <th className="p-4">Type</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center rounded-r-lg">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="p-4 text-gray-500 font-mono text-xs">{tx.date}</td>
                <td className="p-4 font-semibold text-gray-900">{tx.desc}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider ${getTypeStyle(tx.type)}`}>
                    {tx.type}
                  </span>
                </td>
                <td className={`p-4 font-bold ${tx.amount.includes('+') ? 'text-blue-600' : 'text-gray-900'}`}>
                  {tx.amount}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${getStatusColor(tx.status)}`}></span>
                    <span className="text-gray-700">{tx.status}</span>
                  </div>
                </td>
                <td className="p-4 text-center text-gray-400">
                  {tx.status === "Failed" ? (
                    <button className="text-blue-600 font-semibold text-xs hover:underline">Retry</button>
                  ) : (
                    <button className="hover:text-gray-800"><HiOutlineDownload className="text-lg mx-auto" /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
        <p>Showing 1 to 5 of 24 transactions</p>
        <div className="flex gap-1">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">{'<'}</button>
          <button className="w-8 h-8 flex items-center justify-center border border-blue-600 bg-blue-600 text-white rounded">1</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">2</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">3</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">{'>'}</button>
        </div>
      </div>

    </div>
  );
};

export default TransactionHistory;