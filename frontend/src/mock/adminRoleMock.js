export const rolesMock = [
  {
    id: 1,
    name: "Super Admin",
    badge: "SYSTEM DEFAULT",
    description:
      "Full access to all modules including financial auditing and system architecture settings.",
    usersAssigned: "3 Users Assigned",
    avatars: ["A", "B", "+1"],
  },
  {
    id: 2,
    name: "Recruitment Lead",
    badge: "",
    description:
      "Management of candidate pipeline, job postings, and moderator team oversight.",
    usersAssigned: "8 Users Assigned",
    avatars: ["D", "E", "+6"],
  },
  {
    id: 3,
    name: "Financial Analyst",
    badge: "",
    description:
      "Read-only access to financial reports and transaction ledgers. No withdrawal authority.",
    usersAssigned: "1 User Assigned",
    avatars: ["F"],
  },
  {
    id: 4,
    name: "Moderator",
    badge: "",
    description:
      "Queue processing and flag handling. Limited to content moderation tools.",
    usersAssigned: "4 Users Assigned",
    avatars: ["G", "H", "+2"],
  },
];

export const permissionsMock = [
  {
    title: "User Management",
    items: [
      { label: "View Directory", checked: true },
      { label: "Create Profile", checked: true },
      { label: "Edit Details", checked: true },
      { label: "Delete Accounts", checked: false },
      { label: "Ban/Suspend", checked: false },
    ],
  },
  {
    title: "Job Moderation",
    items: [
      { label: "View Queue", checked: true },
      { label: "Approve Postings", checked: true },
      { label: "Reject Postings", checked: true },
      { label: "Flag Content", checked: true },
    ],
  },
  {
    title: "Financials",
    items: [
      { label: "View Balance", checked: false, disabled: true },
      { label: "Withdrawals", checked: false, disabled: true },
      { label: "Audit Logs", checked: false, disabled: true },
    ],
  },
  {
    title: "System Settings",
    items: [
      { label: "Manage Roles", checked: false },
      { label: "Platform Config", checked: false },
    ],
  },
];

export const auditMock = [
  {
    title: "Permissions Updated",
    desc: "for Recruitment Lead",
    sub: "Updated by Admin Alex • 2 hours ago",
  },
  {
    title: "New Role Created:",
    desc: "Financial Analyst",
    sub: "Updated by System • Yesterday at 4:15 PM",
  },
  {
    title: "Permission Revoked:",
    desc: "Delete Account (Moderator)",
    sub: "Updated by Admin Sarah • 3 days ago",
  },
];


export const MOCK_ADMIN_STATS = [
  { type: "TOTAL_USERS", title: "TOTAL USERS", value: "5,420", badgeText: "+12%", badgeTheme: "blue" },
  { type: "ACTIVE_ADMINS", title: "ACTIVE ADMINS", value: "24", badgeText: "Protected", badgeTheme: "gray" },
  { type: "NEW_THIS_MONTH", title: "NEW THIS MONTH", value: "182", badgeText: "Trend Up", badgeTheme: "emerald" },
  { type: "BANNED_USERS", title: "BANNED USERS", value: "12", badgeText: "Alert", badgeTheme: "red" }
];

export const MOCK_ADMIN_USERS = [
  { id: 1, name: "Marcus Sterling", email: "marcus.s@company.com", role: "ADMIN", status: "Active", joinedDate: "Oct 12, 2023", lastLogin: "2 hours ago" },
  { id: 2, name: "Sarah Jenkins", email: "sarah.j@enterprise.io", role: "EMPLOYER", status: "Active", joinedDate: "Nov 05, 2023", lastLogin: "Yesterday" },
  { id: 3, name: "James Dunning", email: "james.d@cloud.net", role: "CANDIDATE", status: "Inactive", joinedDate: "Dec 20, 2023", lastLogin: "3 weeks ago" },
  { id: 4, name: "Rick Thorne", suspendedReason: "Suspended for Policy Violation", role: "CANDIDATE", status: "Banned", joinedDate: "Jan 02, 2024", lastLogin: "Never" },
  { id: 5, name: "Alex Mercer", email: "alex.m@dev.com", role: "CANDIDATE", status: "Active", joinedDate: "Jan 10, 2024", lastLogin: "1 hour ago" },
  { id: 6, name: "Elena Gilbert", email: "elena@vampire.com", role: "EMPLOYER", status: "Active", joinedDate: "Feb 14, 2024", lastLogin: "Just now" },
  { id: 7, name: "Damon Salvatore", suspendedReason: "Spam Posting", role: "EMPLOYER", status: "Banned", joinedDate: "Mar 01, 2024", lastLogin: "1 month ago" }
];

// Hàm giả lập API lấy danh sách user có phân trang
export const fetchAdminUsersApi = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 400)); // Cố tình delay 0.4s để tạo hiệu ứng loading

  let filtered = [...MOCK_ADMIN_USERS];

  // Logic phân trang
  const page = params.page || 1;
  const limit = params.limit || 5; // Mình set 5 dòng/trang để bạn dễ test
  const startIndex = (page - 1) * limit;

  return {
    items: filtered.slice(startIndex, startIndex + limit),
    totalItems: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  };
};