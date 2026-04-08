import React from "react";
import { useSelector } from "react-redux"; // Import Hook của Redux

import BalanceCard from "../../components/wallet/BalanceCard";
import TopUpForm from "../../components/wallet/TopUpForm";
import TransactionHistory from "../../components/wallet/TransactionHistory";

const WalletPage = () => {
  // 1. MÓC DỮ LIỆU TỪ REDUX RA
  const { userInfo } = useSelector((state) => state.user);

  // 2. TÌM ĐƯỜNG DẪN VÀO TẬN CÁI VÍ CỦA CÔNG TY
  // Dùng Optional Chaining '?.' để nếu lỡ chưa load kịp thì không bị crash web
  const walletData = userInfo?.company?.wallet;
  const companyName = userInfo?.company?.companyName;

  // 3. MÀN HÌNH LOADING (Phòng hờ trường hợp F5 tải lại trang)
  if (!walletData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fb] gap-3">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        <p className="text-gray-500 font-medium">Đang tải dữ liệu ví...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-8">
      <div className="max-w-6xl mx-auto mt-14">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Wallet & Billing</h1>
          <p className="text-sm text-gray-500 mt-1">
            Quản lý số dư và tín dụng tuyển dụng của công ty <span className="font-bold text-blue-600">{companyName || "bạn"}</span>.
          </p>
        </div>

        {/* Top Section: Card & Top-up Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Truyền accountInfo lấy từ Redux xuống BalanceCard */}
          <BalanceCard info={walletData.accountInfo} />
          <TopUpForm />
        </div>

        {/* Bottom Section: Table */}
        {/* Truyền transactions lấy từ Redux xuống TransactionHistory */}
        <TransactionHistory transactions={walletData.transactions} />

      </div>
    </div>
  );
};

export default WalletPage;