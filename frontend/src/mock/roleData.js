export const roles = [
  {
    id: 1,
    name: "Super Admin",
    description:
      "Full access to all modules including financial auditing and system architecture settings.",
    badge: "SYSTEM DEFAULT",
    users: "3 Users Assigned",
    avatars: [
      "https://i.pravatar.cc/40?img=11",
      "https://i.pravatar.cc/40?img=12",
      "https://i.pravatar.cc/40?img=13",
    ],
  },
  {
    id: 2,
    name: "Recruitment Lead",
    description:
      "Management of candidate pipeline, job posting, and moderator team oversight.",
    users: "8 Users Assigned",
    avatars: [
      "https://i.pravatar.cc/40?img=21",
      "https://i.pravatar.cc/40?img=22",
      "https://i.pravatar.cc/40?img=23",
    ],
  },
  {
    id: 3,
    name: "Financial Analyst",
    description:
      "Read-only access to financial reports and transaction ledgers. No withdrawal authority.",
    users: "1 User Assigned",
    avatars: ["https://i.pravatar.cc/40?img=31"],
  },
  {
    id: 4,
    name: "Moderator",
    description:
      "Queue processing and flag handling. Limited to content moderation tools.",
    users: "4 Users Assigned",
    avatars: [
      "https://i.pravatar.cc/40?img=41",
      "https://i.pravatar.cc/40?img=42",
    ],
  },
];

export const permissionsByRole = {
  "Recruitment Lead": [
    {
      group: "User Management",
      items: [
        { label: "View Directory", checked: true },
        { label: "Create Profile", checked: true },
        { label: "Edit Details", checked: true },
        { label: "Delete Accounts", checked: false },
        { label: "Ban/Suspend", checked: false },
      ],
    },
    {
      group: "Job Moderation",
      items: [
        { label: "View Queue", checked: true },
        { label: "Approve Postings", checked: true },
        { label: "Reject Postings", checked: true },
        { label: "Flag Content", checked: true },
      ],
    },
    {
      group: "Financials",
      items: [
        { label: "View Balance", checked: false },
        { label: "Withdrawals", checked: false },
        { label: "Audit Logs", checked: false },
      ],
    },
    {
      group: "System Settings",
      items: [
        { label: "Manage Roles", checked: false },
        { label: "Platform Config", checked: false },
      ],
    },
  ],
  "Super Admin": [
    {
      group: "User Management",
      items: [
        { label: "View Directory", checked: true },
        { label: "Create Profile", checked: true },
        { label: "Edit Details", checked: true },
        { label: "Delete Accounts", checked: true },
        { label: "Ban/Suspend", checked: true },
      ],
    },
    {
      group: "Job Moderation",
      items: [
        { label: "View Queue", checked: true },
        { label: "Approve Postings", checked: true },
        { label: "Reject Postings", checked: true },
        { label: "Flag Content", checked: true },
      ],
    },
    {
      group: "Financials",
      items: [
        { label: "View Balance", checked: true },
        { label: "Withdrawals", checked: true },
        { label: "Audit Logs", checked: true },
      ],
    },
    {
      group: "System Settings",
      items: [
        { label: "Manage Roles", checked: true },
        { label: "Platform Config", checked: true },
      ],
    },
  ],
  "Financial Analyst": [
    {
      group: "Financials",
      items: [
        { label: "View Balance", checked: true },
        { label: "Withdrawals", checked: false },
        { label: "Audit Logs", checked: true },
      ],
    },
  ],
  Moderator: [
    {
      group: "Job Moderation",
      items: [
        { label: "View Queue", checked: true },
        { label: "Approve Postings", checked: false },
        { label: "Reject Postings", checked: true },
        { label: "Flag Content", checked: true },
      ],
    },
  ],
};

export const audits = [
  {
    id: 1,
    title: "Permissions Updated",
    target: "Recruitment Lead",
    meta: "Updated by Admin Alex • 2 hours ago",
    type: "edit",
  },
  {
    id: 2,
    title: "New Role Created",
    target: "Financial Analyst",
    meta: "Updated by System • Yesterday at 4:15 PM",
    type: "add",
  },
  {
    id: 3,
    title: "Permission Revoked",
    target: "Delete Account (Moderator)",
    meta: "Updated by Admin Sarah • 3 days ago",
    type: "warning",
  },
];