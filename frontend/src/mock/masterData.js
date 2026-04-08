export const masterData = {
  // Quản lý đa người dùng
  usersData: {
    vinh_ha_21: {
      currentUser: {
        id: "vinh_ha_21",
        name: "Vinh Hà",
        avatar: "https://i.pravatar.cc/150?u=vinhha",
        details: {
          location: "Russia",
          university: "Da Nang University of Education",
          major: "IT Education",
        },
      },
      notifications: [
        {
          id: "noti_01",
          type: "MESSAGE",
          sender: {
            id: "tri_friend",
            name: "Trí",
            avatar: "https://i.pravatar.cc/150?u=tri",
          },
          title: "Tin nhắn mới",
          content: "Trí đã gửi cho bạn một tin nhắn về đồ án SQL.",
          time: "5 PHÚT TRƯỚC",
          unread: true,
          category: "Job Related",
        },
        {
          id: "noti_02",
          type: "SYSTEM",
          sender: { id: "system_bot", name: "Hệ thống", avatar: null },
          title: "Bảo mật tài khoản",
          content: "Bạn vừa đăng nhập từ một địa chỉ IP mới tại Moscow, Nga.",
          time: "2 GIỜ TRƯỚC",
          unread: false,
          category: "System",
        },
      ],
      chats: [
        {
          chatId: "c_001",
          partner: {
            id: "tri_friend",
            name: "Trí",
            avatar: "https://i.pravatar.cc/150?u=tri",
            status: "online",
          },
          messages: [
            {
              id: "m_1",
              senderId: "tri_friend",
              text: "Hà ơi, check giúp tôi cái query SQL này với.",
              time: "10:15 AM",
            },
            {
              id: "m_2",
              senderId: "vinh_ha_21",
              text: "Quăng code qua đây tôi xem cho.",
              time: "10:17 AM",
            },
          ],
        },
        {
          chatId: "c_002",
          partner: {
            id: "marcus_hr",
            name: "Marcus (HR)",
            avatar: "https://i.pravatar.cc/150?u=marcus",
            status: "offline",
          },
          messages: [
            {
              id: "m_4",
              senderId: "marcus_hr",
              text: "Chào Vinh Hà, mình đã xem qua Project Laravel của bạn.",
              time: "Hôm qua",
            },
          ],
        },
      ],
    },

    // TÀI KHOẢN 2: LÊ MAI
    le_mai_designer: {
      currentUser: {
        id: "le_mai_designer",
        name: "Lê Mai",
        avatar: "https://i.pravatar.cc/150?u=lemai",
        details: {
          location: "TP. Hồ Chí Minh",
          company: "TechVision Studio",
          position: "Senior UI/UX Designer",
        },
      },
      notifications: [
        {
          id: "noti_05",
          type: "WORK",
          sender: {
            id: "hoang_pm",
            name: "Hoàng PM",
            avatar: "https://i.pravatar.cc/150?u=hoangpm",
          },
          title: "Deadline sắp tới",
          content: "Hoàng đã nhắc bạn về deadline hoàn thiện Prototype.",
          time: "15 PHÚT TRƯỚC",
          unread: true,
          category: "Job Related",
        },
      ],
      chats: [
        {
          chatId: "c_005",
          partner: {
            id: "hoang_pm",
            name: "Hoàng PM",
            avatar: "https://i.pravatar.cc/150?u=hoangpm",
            status: "online",
          },
          messages: [
            {
              id: "m_13",
              senderId: "hoang_pm",
              text: "Mai ơi, khách hàng vừa feedback lại font chữ.",
              time: "02:00 PM",
            },
            {
              id: "m_14",
              senderId: "le_mai_designer",
              text: "Dạ anh, để em check lại độ tương phản.",
              time: "02:05 PM",
            },
          ],
        },
      ],
    },
  },
};
