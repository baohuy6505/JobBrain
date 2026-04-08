import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { messageApi } from "../../mock/messageApi"; // Hà kiểm tra lại đường dẫn tới file API nhé

// 1. ĐỊNH NGHĨA VÀ EXPORT ASYNC THUNK (Cái Hà đang thiếu nè!)
export const fetchConversations = createAsyncThunk(
  "messages/fetchConversations",
  async (userId) => {
    const response = await messageApi.getConversations(userId);
    return response;
  },
);

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    conversations: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    markAsRead: (state, action) => {
      const chatId = action.payload;
      const conversation = state.conversations.find((c) => c.chatId === chatId);
      if (conversation) conversation.unread = false;
    },
    sendNewMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const conversation = state.conversations.find((c) => c.chatId === chatId);
      if (conversation) {
        conversation.messages.push(message);
      }
    },
  },
  // 2. XỬ LÝ KẾT QUẢ TRẢ VỀ TỪ API
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Đổ dữ liệu chats từ masterData vào store
        state.conversations = action.payload;
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export các action thông thường
export const { markAsRead, sendNewMessage } = messageSlice.actions;

export default messageSlice.reducer;
