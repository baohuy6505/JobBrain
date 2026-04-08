import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Kiểm tra kỹ đường dẫn này để đảm bảo nó trỏ đúng đến file messageApi.js của bạn
import { messageApi } from "../../mock/messageApi";

// 1. LỆNH GỌI API LẤY DANH SÁCH CUỘC HỘI THOẠI
export const fetchConversations = createAsyncThunk(
  "messages/fetchConversations",
  async () => {
    const data = await messageApi.getConversations();
    return data;
  },
);

// 2. LỆNH GỌI API GỬI TIN NHẮN MỚI
export const sendNewMessage = createAsyncThunk(
  "messages/sendNewMessage",
  async ({ chatId, text }) => {
    const newMessage = await messageApi.sendMessage(chatId, text);
    return { chatId, newMessage };
  },
);

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    conversations: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  // --- NƠI XỬ LÝ CÁC HÀNH ĐỘNG CỤC BỘ ---
  reducers: {
    // Hàm đánh dấu đã đọc: Tìm đúng người và ép unread về 0
    markAsRead: (state, action) => {
      const chatId = action.payload; // Payload truyền vào chính là id của người dùng
      const conversation = state.conversations.find((c) => c.id === chatId);
      if (conversation) {
        conversation.unread = 0; // Xóa số thông báo đỏ
      }
    },
  },
  // --- NƠI XỬ LÝ CÁC HÀNH ĐỘNG ASYNC (GỌI API) ---
  extraReducers: (builder) => {
    builder
      // Khi đang bắt đầu gọi API lấy data
      .addCase(fetchConversations.pending, (state) => {
        state.status = "loading";
      })
      // Khi lấy data thành công
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.conversations = action.payload;
      })
      // Khi gửi tin nhắn thành công
      .addCase(sendNewMessage.fulfilled, (state, action) => {
        const { chatId, newMessage } = action.payload;
        const conv = state.conversations.find((c) => c.id === chatId);
        if (conv) {
          // Nhét tin nhắn mới vào mảng lịch sử tin nhắn
          conv.messages.push(newMessage);
          // Khi mình tự gửi tin nhắn thì cũng coi như đã đọc cuộc hội thoại đó
          conv.unread = 0;
        }
      });
  },
});

// Xuất hàm markAsRead để Sidebar sử dụng
export const { markAsRead } = messageSlice.actions;

export default messageSlice.reducer;
