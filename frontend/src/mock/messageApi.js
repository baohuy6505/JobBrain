// src/services/messageApi.js
import { fakeConversations } from "./messageData";

export const messageApi = {
  // Giả lập API gọi danh sách tin nhắn (mất 0.8 giây)
  getConversations: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeConversations);
      }, 800);
    });
  },

  // Giả lập API gửi tin nhắn mới (mất 0.3 giây)
  sendMessage: async (chatId, text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now(),
          text: text,
          sender: "me",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      }, 300);
    });
  },
};
