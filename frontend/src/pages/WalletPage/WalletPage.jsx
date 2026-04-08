import React, { useState, useEffect } from "react";
import BalanceCard from "../../Components/Wallet/BalanceCard";
import TopUpForm from "../../Components/Wallet/TopUpForm";
import TransactionHistory from "../../Components/Wallet/TransactionHistory";

// LƯU Ý: Import phải có ngoặc nhọn {} và đúng tên hàm
import { mockFetchWalletData } from "../../mock/userData";

const WalletPage = () => {
  const [walletData, setWalletData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await mockFetchWalletData();
      setWalletData(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-8">
      <div className="max-w-6xl mx-auto mt-14">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Wallet & Billing</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your company balance and recruitment credits.</p>
        </div>

        {/* Top Section: Card & Top-up Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BalanceCard info={walletData.accountInfo} />
          <TopUpForm />
        </div>

        {/* Bottom Section: Table */}
        {/* Dữ liệu transactions được truyền xuống đây rất chuẩn xác */}
        <TransactionHistory transactions={walletData.transactions} />

      </div>
    </div>
  );
};

export default WalletPage;