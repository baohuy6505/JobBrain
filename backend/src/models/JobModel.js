const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title là bắt buộc"],
      trim: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "company là bắt buộc"],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "postedBy là bắt buộc"],
    },
    location: {
      type: String,
      required: [true, "location là bắt buộc"],
      trim: true,
    },
    category: {
      type: String,
      default: "",
      trim: true,
    },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Remote", "Internship", "Contract"],
      default: "Full-time",
    },
    level: {
      type: String,
      enum: ["Intern", "Fresher", "Junior", "Middle", "Senior", "Lead"],
      default: "Junior",
    },
    experience: {
      type: String,
      default: "",
      trim: true,
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },
    minSalary: {
      type: Number,
      default: 0,
    },
    maxSalary: {
      type: Number,
      default: 0,
    },
    dayLimit: {
      type: Date,
      required: [true, "dayLimit là bắt buộc"],
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    benefits: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "open", "closed"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

const JobModel = mongoose.model("Job", jobSchema);
module.exports = JobModel;