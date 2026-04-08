import React, { useState } from "react";

import { HiOutlineDownload, HiOutlineFilter, HiSearch } from "react-icons/hi";

import JobTable from "../common/JobTable";

import { Pagination } from "../common/Pagination";



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

// --- THÊM LOGIC PHÂN TRANG TẠI ĐÂY ---

const [currentPage, setCurrentPage] = useState(1);

const ITEMS_PER_PAGE = 4; // Số dòng trên 1 trang (để 3 để test 5 dòng data giả)



// Tính toán các thông số

const totalItems = transactions?.length || 0;

const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);



// Cắt mảng data để lấy ra đúng số dòng cho trang hiện tại

const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

const endIndex = startIndex + ITEMS_PER_PAGE;

const currentTransactions = transactions?.slice(startIndex, endIndex) || [];



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

];



return (

<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">


{/* Table Header Controls */}

<div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

<h2 className="text-xl font-bold text-gray-900">Transaction History</h2>


{/* Các nút search, filter (Giữ nguyên hoặc thêm lại nếu cần) */}

</div>



{/* 3. GỌI BẢNG DÙNG CHUNG RA - Truyền currentTransactions thay vì toàn bộ transactions */}

<JobTable

columns={transactionColumns}

data={currentTransactions}

/>



{/* 4. FOOTER PHÂN TRANG (TÍCH HỢP COMPONENT MỚI) */}

{totalItems > 0 && (

<div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500 border-t border-gray-100 pt-6 gap-4">


{/* Hiển thị số lượng động */}

<p>

Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} transactions

</p>


{/* Gọi Component Pagination và truyền props xuống */}

<div className="-mt-12"> {/* Chỉnh CSS lùi lên chút vì trong file gốc của bạn có mt-12 */}

<Pagination

totalPages={totalPages}

currentPage={currentPage}

onPageChange={(page) => setCurrentPage(page)}

/>

</div>


</div>

)}



{/* Hiển thị khi không có dữ liệu */}

{totalItems === 0 && (

<div className="text-center py-10 text-gray-500 border-t border-gray-100 mt-6">

Không có giao dịch nào.

</div>

)}



</div>

);

};


export default TransactionHistory;