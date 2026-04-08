import React from "react";
import { HiOutlineDownload, HiOutlineFilter, HiSearch } from "react-icons/hi";
import JobTable from "../common/JobTable";

// 1. TỪ ĐIỂN UI DÀNH RIÊNG CHO BẢNG GIAO DỊCH
const typeConfig = {
  "DEPOSIT": "bg-green-100 text-green-700",
  "JOB POST": "bg-orange-100 text-orange-700",
  "REFUND": "bg-purple-100 text-purple-700",
  "SUBSCRIPTION": "bg-gray-100 text-gray-700",
  "DEFAULT": "bg-gray-100 text-gray-600"
};

const statusConfig = {
  "Success": "bg-green-500",
  "Pending": "bg-yellow-500",
  "Failed": "bg-red-500",
  "DEFAULT": "bg-gray-300"
};

const TransactionHistory = ({ transactions }) => {

  // 2. ĐỊNH NGHĨA CÁC CỘT CHO BẢNG GIAO DỊCH
  const transactionColumns = [
    {
      key: "date",
      label: "Date",
      render: (tx) => <span className="text-gray-500 font-mono text-xs">{tx.date}</span>
    },
    {
      key: "desc",
      label: "Description",
      render: (tx) => <span className="font-semibold text-gray-900">{tx.desc}</span>
    },
    {
      key: "type",
      label: "Type",
      render: (tx) => {
        const style = typeConfig[tx.type] || typeConfig["DEFAULT"];
        return (
          <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider ${style}`}>
            {tx.type}
          </span>
        );
      }
    },
    {
      key: "amount",
      label: "Amount",
      render: (tx) => {
        // Nếu có dấu '+' thì màu xanh, ngược lại màu đen
        const colorClass = tx.amount.includes('+') ? 'text-blue-600' : 'text-gray-900';
        return <span className={`font-bold ${colorClass}`}>{tx.amount}</span>;
      }
    },
    {
      key: "status",
      label: "Status",
      render: (tx) => {
        const dotColor = statusConfig[tx.status] || statusConfig["DEFAULT"];
        return (
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <span className="text-gray-700">{tx.status}</span>
          </div>
        );
      }
    },
    {
      key: "action",
      label: "Action",
      render: (tx) => (
        <div className="flex justify-end">
          {tx.status === "Failed" ? (
            <button className="text-blue-600 font-semibold text-xs hover:underline">Retry</button>
          ) : (
            <button className="text-gray-400 hover:text-gray-800 transition-colors">
              <HiOutlineDownload className="text-lg" />
            </button>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
      
      {/* Table Header Controls (Giữ nguyên) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <HiOutlineFilter /> Filter
          </button>
        </div>
      </div>

      {/* 3. GỌI BẢNG DÙNG CHUNG RA */}
      <JobTable 
        columns={transactionColumns} 
        data={transactions} 
      />

      {/* Pagination Footer (Giữ nguyên) */}
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