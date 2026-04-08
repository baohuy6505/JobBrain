const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    isPresent: {
      type: Boolean,
      default: false,
    },
    time: {
      type: String,
      trim: true,
      default: "",
    },
    role: {
      type: String,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName là bắt buộc"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email là bắt buộc"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password là bắt buộc"],
    },
    role: {
      type: String,
      enum: ["candidate", "employer", "admin"],
      default: "candidate",
    },
    avatar: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
      trim: true,
    },
    headline: {
      type: String,
      default: "",
      trim: true,
    },
    bio: {
      type: String,
      default: "",
      trim: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    cvUrl: {
      type: String,
      default: "",
    },
    experiences: {
      type: [experienceSchema],
      default: [],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;