import React, { useState, useEffect } from "react";
import BalanceCard from "../../Components/Wallet/BalanceCard";
import TopUpForm from "../../Components/Wallet/TopUpForm";
import TransactionHistory from "../../Components/Wallet/TransactionHistory";

// GIẢ LẬP API
const mockFetchWalletData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        accountInfo: {
          balance: "25.000.000",
          currency: "VNF", // Trong ảnh ghi VNF
          companyName: "TechFlow Vietnam",
          cardNumber: "**** **** 8888"
        },
        transactions: [
          { id: 1, date: "Oct 24, 2023", desc: "Funds Deposit - Wire Transfer", type: "DEPOSIT", amount: "+$2,500.00", status: "Success" },
          { id: 2, date: "Oct 22, 2023", desc: "Job Post: Senior Product Designer", type: "JOB POST", amount: "-$299.00", status: "Success" },
          { id: 3, date: "Oct 20, 2023", desc: "Candidate Refund - Ref #9021", type: "REFUND", amount: "+$45.00", status: "Success" },
          { id: 4, date: "Oct 18, 2023", desc: "Job Post: Backend Engineer (London)", type: "JOB POST", amount: "-$350.00", status: "Pending" },
          { id: 5, date: "Oct 15, 2023", desc: "Subscription Renewal - Enterprise", type: "SUBSCRIPTION", amount: "-$1,200.00", status: "Failed" }
        ]
      });
    }, 600); // Load mất 0.6s
  });
};

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
      <div className="max-w-6xl mx-auto">
        
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
        <TransactionHistory transactions={walletData.transactions} />

      </div>
    </div>
  );
};

export default WalletPage;