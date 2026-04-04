import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notificationSlice";
import messageReducer from "./messageSlice";

export const store = configureStore({
  reducer: {
    // Tên "notification" này sẽ dùng để gọi dữ liệu ở Header và Page
    notification: notificationReducer,
    messages: messageReducer,
    // Sau này có thêm user, job thì bạn thêm vào đây
  },
});
