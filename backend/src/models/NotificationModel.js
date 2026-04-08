const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user là bắt buộc"],
    },
    text: {
      type: String,
      required: [true, "text là bắt buộc"],
      trim: true,
    },
    type: {
      type: String,
      default: "general",
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const NotificationModel = mongoose.model("Notification", notificationSchema);
module.exports = NotificationModel;