const mongoose = require("mongoose");

const walletTransactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user là bắt buộc"],
    },
    type: {
      type: String,
      enum: ["DEPOSIT", "JOB_POST", "REFUND", "SUBSCRIPTION"],
      required: [true, "type là bắt buộc"],
    },
    desc: {
      type: String,
      required: [true, "desc là bắt buộc"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "amount là bắt buộc"],
    },
    status: {
      type: String,
      enum: ["Success", "Pending", "Failed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const WalletTransactionModel = mongoose.model("WalletTransaction", walletTransactionSchema);
module.exports = WalletTransactionModel;