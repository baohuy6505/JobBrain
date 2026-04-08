const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "candidate là bắt buộc"],
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "job là bắt buộc"],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "company là bắt buộc"],
    },
    cvUrl: {
      type: String,
      default: "",
    },
    coverLetter: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "INTERVIEW", "ACCEPTED", "REJECTED"],
      default: "PENDING",
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

applicationSchema.index({ candidate: 1, job: 1 }, { unique: true });

const ApplicationModel = mongoose.model("Application", applicationSchema);
module.exports = ApplicationModel;