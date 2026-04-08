import React, { useState } from "react";
import { HiOutlineQrcode } from "react-icons/hi";

const TopUpForm = () => {
  // BÍ KÍP: Chỉ cần 1 state duy nhất để quản lý số tiền thay vì 2 state như trước
  const [amount, setAmount] = useState("500.000");

  const predefinedAmounts = ["500.000", "1.000.000", "2.000.000", "5.000.000"];

  // Hàm xử lý xuất JSON khi bấm nạp
  const handleTopUp = () => {
    // Tạo object dữ liệu chuẩn bị gửi lên server
    const payload = {
      action: "TOP_UP_BALANCE",
      method: "QR_PAYMENT",
      amount: amount, // Lấy thẳng số tiền đang có ở ô input
      currency: "VNĐ",
      timestamp: new Date().toISOString()
    };

    // Ép kiểu ra JSON
    const jsonString = JSON.stringify(payload, null, 2);
    console.log("TOP UP PAYLOAD:", jsonString);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Top-up Balance</h3>
      
      {/* Nút chọn mệnh giá */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {predefinedAmounts.map((presetAmount) => (
          <button
            key={presetAmount}
            onClick={() => setAmount(presetAmount)} // Khi bấm, gán ngay số này vào ô input
            className={`py-3 px-4 rounded-xl text-center font-bold text-sm transition-all border ${
              amount === presetAmount // Nếu số ở input trùng với nút nào, nút đó sẽ sáng lên (Active)
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-gray-50"
            }`}
          >
            {presetAmount}
          </button>
        ))}
      </div>

      {/* Input số tiền */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Số tiền nạp</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Nhập số tiền..." 
            value={amount} // Liên kết 2 chiều: Giá trị của input chính là state 'amount'
            onChange={(e) => setAmount(e.target.value)} // Gõ đến đâu, state cập nhật đến đó
            className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-blue-500 text-sm font-bold text-gray-900 transition-colors"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">VNĐ</span>
        </div>
      </div>

      <button 
        onClick={handleTopUp}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        <HiOutlineQrcode className="text-xl" /> Nạp tiền ngay
      </button>

      <p className="text-center text-[10px] text-gray-400 mt-4">
        * Secure payment via VNPay, MoMo, or Bank Transfer
      </p>
    </div>
  );
};

export default TopUpForm;