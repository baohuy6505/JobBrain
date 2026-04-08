const names = [
  "Sarah Nguyen",
  "David Chen",
  "Michael Scott",
  "Elena Rodriguez",
  "James Wilson",
  "Linda Taylor",
  "Robert Johnson",
  "Emily Davis",
  "William Brown",
  "Jessica Miller",
];
const roles = [
  "Senior Design Architect",
  "Frontend Developer",
  "Product Manager",
  "UX/UI Designer",
  "Backend Developer",
  "HR Specialist",
  "Marketing Director",
  "Data Scientist",
  "DevOps Engineer",
  "Business Analyst",
];
const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
];

const defaultCover =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

export const fakeConversations = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  userId: 100 + i + 1,
  name: names[i],
  role: roles[i],
  avatar: avatars[i],
  coverImage: defaultCover,
  currentRole: "Tech Corp Inc.",
  education: "Đại học Bách Khoa",
  skills: ["ReactJS", "NodeJS", "UI/UX"],
  unread: i % 4 === 0 ? 2 : 0,
  messages: [
    {
      id: Number(`${i + 1}01`),
      text: `Chào bạn, mình là ${names[i]}. Rất vui được làm quen!`,
      sender: "them",
      timestamp: "10:00 AM",
    },
  ],

  // --- THÊM PHẦN NÀY ĐỂ TRANG PROFILE KHÔNG PHẢI TỰ CHẾ DATA NỮA ---
  stats: {
    followers: Math.floor(Math.random() * 2000) + 100,
    following: Math.floor(Math.random() * 500) + 50,
    posts: 2,
  },
  posts: [
    {
      id: Date.now() + i,
      content: `Xin chào! Tôi đang làm việc tại Tech Corp với vai trò là ${roles[i]}. Chúc mọi người một ngày tốt lành!`,
      timestamp: "Vừa xong",
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 20),
      shares: Math.floor(Math.random() * 10),
    },
  ],
}));

export default fakeConversations;
