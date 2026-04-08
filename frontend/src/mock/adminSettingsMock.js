export const roleCardsMock = [
  {
    id: 1,
    name: "Super Admin",
    badge: "SYSTEM DEFAULT",
    description:
      "Full access to all modules including financial auditing and system architecture settings.",
    usersAssigned: "3 Users Assigned",
    avatars: ["A", "B", "+1"],
    selected: false,
  },
  {
    id: 2,
    name: "Recruitment Lead",
    badge: "",
    description:
      "Management of candidate pipeline, job postings, and moderator team oversight.",
    usersAssigned: "8 Users Assigned",
    avatars: ["D", "E", "+6"],
    selected: true,
  },
  {
    id: 3,
    name: "Financial Analyst",
    badge: "",
    description:
      "Read-only access to financial reports and transaction ledgers. No withdrawal authority.",
    usersAssigned: "1 User Assigned",
    avatars: ["F"],
    selected: false,
  },
  {
    id: 4,
    name: "Moderator",
    badge: "",
    description:
      "Queue processing and flag handling. Limited to content moderation tools.",
    usersAssigned: "4 Users Assigned",
    avatars: ["G", "H", "+2"],
    selected: false,
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

export const configTabsMock = [
  "General Settings",
  "Security",
  "API & Integrations",
  "Branding",
  "Maintenance",
];

export const securityMock = [
  {
    title: "Two-Factor Authentication",
    desc: "Require MFA for all administrative accounts.",
    enabled: true,
  },
  {
    title: "Session Timeout",
    desc: "Auto-logout inactive users after 30 minutes.",
    enabled: false,
  },
  {
    title: "IP Whitelisting",
    desc: "Restrict console access to known corporate IPs.",
    enabled: true,
  },
];

export const apiKeysMock = [
  {
    label: "Prod-Main-Cluster",
    key: "kin_live•••••••••••••3a9f",
    status: "ACTIVE",
  },
  {
    label: "Staging-Debug",
    key: "kin_test•••••••••••••92bc",
    status: "REVOKED",
  },
];

export const MOCK_MODERATION_STATS = {
  pendingReviews: 24,
  weeklyApprovalRate: "94.2%"
};

export const MOCK_MODERATION_JOBS = [
  { id: 1, title: "Lead Crypto Strategist", company: "Nexus Ventures", postedDate: "Oct 24, 2023", riskScore: 92, status: "Flagged" },
  { id: 2, title: "Senior Software Engineer", company: "Skyline Systems", postedDate: "Oct 24, 2023", riskScore: 45, status: "Pending" },
  { id: 3, title: "Operations Manager", company: "Apex Manufacturing", postedDate: "Oct 23, 2023", riskScore: 12, status: "Pending" },
  { id: 4, title: "Remote Data Entry (Urgent)", company: "Global Logistics Inc", postedDate: "Oct 23, 2023", riskScore: 88, status: "Flagged" },
  { id: 5, title: "Marketing Director", company: "Stellar Agency", postedDate: "Oct 22, 2023", riskScore: 25, status: "Pending" },
  { id: 6, title: "Investment Analyst", company: "WealthCorp", postedDate: "Oct 22, 2023", riskScore: 75, status: "Flagged" },
  { id: 7, title: "Customer Support Rep", company: "TechFlow", postedDate: "Oct 21, 2023", riskScore: 15, status: "Pending" }
];

export const fetchModerationJobsApi = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 400)); // Hiệu ứng loading

  let filtered = [...MOCK_MODERATION_JOBS];

  // Lọc theo Status (All, Pending, Flagged)
  if (params.filterStatus && params.filterStatus !== "ALL") {
    filtered = filtered.filter(job => job.status.toUpperCase() === params.filterStatus.toUpperCase());
  }

  const page = params.page || 1;
  const limit = params.limit || 4; // Trong hình hiển thị 4 dòng
  const startIndex = (page - 1) * limit;

  return {
    items: filtered.slice(startIndex, startIndex + limit),
    totalItems: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  };
};