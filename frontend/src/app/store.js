import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../mock/userSlice";
import notificationReducer from "../mock/notificationSlice";
import messageReducer from "../features/Messages/messageSlice";
export const store = configureStore({
  reducer: {
    // Thêm các reducer ở đây nha con đĩ của a
    counter: counterReducer,
    user: userReducer,
    notifications: notificationReducer,
    messages: messageReducer,
  },
});
