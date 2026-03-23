import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // Thêm các reducer ở đây nha con đĩ của a
    counter: counterReducer,
  },
});
