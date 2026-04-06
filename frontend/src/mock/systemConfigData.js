export const configTabs = [
  "General Settings",
  "Security",
  "API & Integration",
  "Branding",
  "Maintenance",
];

export const securityProtocols = [
  {
    id: 1,
    title: "Two-Factor Authentication",
    description: "Require MFA for all administrative accounts.",
    enabled: true,
  },
  {
    id: 2,
    title: "Session Timeout",
    description: "Auto-logout inactive users after 30 minutes.",
    enabled: false,
  },
  {
    id: 3,
    title: "IP Whitelisting",
    description: "Restrict console access to known corporate IPs.",
    enabled: true,
  },
];

export const apiKeys = [
  {
    id: 1,
    label: "Prod-Main-Cluster",
    key: "kin_live..............3a9f",
    status: "ACTIVE",
  },
  {
    id: 2,
    label: "Staging-Debug",
    key: "kin_test..............92bc",
    status: "REVOKED",
  },
];

export const brandColors = {
  primary: "#2563EB",
  secondary: "#7C3AED",
};

export const deploymentNote =
  "System branding changes may take up to 5 minutes to propagate across edge CDN nodes.";