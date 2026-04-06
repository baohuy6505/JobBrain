import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    conversations: [
      {
        id: 1,
        name: "Sarah Nguyen",
        role: "Senior Design Architect",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        currentRole: "Atelier Associates",
        education: "M.Arch, RISD",
        skills: ["Revit", "BIM", "Rhino 3D"],
        // Lịch sử chat của Sarah
        messages: [
          {
            id: 101,
            text: "Hi Nguyen, thank you for reaching out earlier...",
            sender: "them",
          },
          {
            id: 102,
            text: "I've attached the updated portfolio for your review.",
            sender: "them",
          },
        ],
      },
      {
        id: 2,
        name: "David Chen",
        role: "Frontend Developer Applicant",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        currentRole: "Tech Solutions Inc.",
        education: "B.S. Computer Science",
        skills: ["ReactJS", "Tailwind CSS"],
        messages: [
          {
            id: 201,
            text: "Great, looking forward to the interview!",
            sender: "them",
          },
        ],
      },
    ],
    activeId: 1,
  },
  reducers: {
    setActiveChat: (state, action) => {
      state.activeId = action.payload;
    },
    addMessage: (state, action) => {
      const { id, text } = action.payload;
      const conv = state.conversations.find((c) => c.id === id);
      if (conv) {
        // Thêm tin nhắn mới vào mảng với nhãn sender là "me"
        conv.messages.push({
          id: Date.now(),
          text: text,
          sender: "me",
        });
      }
    },
  },
});

export const { setActiveChat, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
