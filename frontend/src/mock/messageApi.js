import { masterData } from "../mock/masterData";

export const messageApi = {
  /**
   * Lọc danh sách các cuộc hội thoại của một người dùng cụ thể
   * @param {string} userId - ID của người đang đăng nhập (ví dụ: "vinh_ha_21")
   */
  getConversations: async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 1. Tìm dữ liệu của người dùng trong hệ thống
        const userData = masterData.usersData[userId];

        if (userData && userData.chats) {
          // 2. Trả về toàn bộ mảng chats (đã bao gồm partner và messages)
          // Đây chính là nội dung Hà cần để đổ vào Sidebar và khung Chat
          resolve(userData.chats);
        } else {
          resolve([]); // Trả về mảng rỗng nếu không tìm thấy người dùng
        }
      }, 800);
    });
  },

  /**
   * Giả lập gửi tin nhắn mới vào một cuộc hội thoại cụ thể
   */
  sendMessage: async (chatId, text, senderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Trả về một object tin nhắn đúng cấu trúc của masterData
        resolve({
          id: `m_${Date.now()}`,
          senderId: senderId, // ID người gửi (ví dụ: "vinh_ha_21")
          text: text,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      }, 300);
    });
  },
};
