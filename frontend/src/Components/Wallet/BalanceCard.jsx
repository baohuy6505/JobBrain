import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi";

const BalanceCard = ({ info }) => {
  return (
    <div className="bg-[#1e3a8a] text-white rounded-2xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-between h-full max-h-[280px]">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="relative z-10 flex justify-between items-start">
        <div>
          <p className="text-blue-200 text-xs font-semibold tracking-wider uppercase mb-1">Current Balance</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl md:text-5xl font-bold">{info.balance}</h2>
            <span className="text-xl font-medium text-blue-100">{info.currency}</span>
          </div>
        </div>
        <HiOutlineCreditCard className="text-3xl text-blue-300 opacity-80" />
      </div>

      <div className="relative z-10 mt-12 flex justify-between items-end">
        <div>
          <p className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase mb-1">Company Account</p>
          <p className="text-lg font-bold tracking-wide">{info.companyName}</p>
          <p className="text-blue-200 text-sm tracking-[0.2em] mt-2 font-mono">{info.cardNumber}</p>
        </div>
        
        {/* Giả lập logo của thẻ */}
        <div className="flex gap-1">
          <div className="w-8 h-5 bg-blue-400 rounded-sm opacity-80"></div>
          <div className="w-8 h-5 bg-blue-300 rounded-sm opacity-60 -ml-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;