import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    list: [],
    unreadCount: 1,
  },
  reducers: {
    // 1. Đổ dữ liệu từ Fake API vào kho
    setNotifications: (state, action) => {
      state.list = action.payload;
      state.unreadCount = action.payload.filter((item) => item.unread).length;
    },
    // 2. Click vào 1 cái card thì mất chấm tím và trừ 1 ở Header
    markAsRead: (state, action) => {
      const id = action.payload;
      const item = state.list.find((n) => n.id === id);
      if (item && item.unread) {
        item.unread = false;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }
    },
    // 3. Ấn Read All thì Header mất sạch chấm đỏ
    markAllRead: (state) => {
      state.list.forEach((item) => (item.unread = false));
      state.unreadCount = 0;
    },
  },
});

export const { setNotifications, markAsRead, markAllRead } =
  notificationSlice.actions;
export default notificationSlice.reducer;
