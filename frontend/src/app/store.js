import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../mock/userSlice";
import messageReducer from "../mock/messageSlice";
import notificationReducer from "../mock/notificationSlice";
export const store = configureStore({
  reducer: {
    // Thêm các reducer ở đây nha con đĩ của a
    counter: counterReducer,
    user: userReducer,
    messages: messageReducer,
    notifications: notificationReducer,
  },
});
