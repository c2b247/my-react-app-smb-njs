// Types of activity log events
export type ActivityLogType =
  | "automation"
  | "user_action"
  | "system"
  | "payment"
  | "schedule"
  | "communication";

// Structure for a single activity log item
export interface ActivityLogItem {
  id: string;
  type: ActivityLogType;
  description: string;
  timestamp: Date;
  entityId?: string;
  entityType?: "job" | "client" | "invoice" | "quote";
  entityName?: string;
  userId?: string;
  userName?: string;
}

// Mock data for activity log
export const ACTIVITY_LOG_DATA: ActivityLogItem[] = [
  {
    id: "log-001",
    type: "automation",
    description:
      "Automated: Follow-up email sent to **John Doe** for **Quote #123**.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    entityId: "quote-123",
    entityType: "quote",
    entityName: "Kitchen Renovation Quote",
  },
  {
    id: "log-002",
    type: "user_action",
    description: "User Action: Job '**Kitchen Reno**' marked as In Progress.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    entityId: "job-456",
    entityType: "job",
    entityName: "Kitchen Reno",
    userId: "user-1",
    userName: "You",
  },
  {
    id: "log-003",
    type: "system",
    description:
      "System: New lead '**Sarah K Marketing**' captured from website chat widget.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    entityId: "client-789",
    entityType: "client",
    entityName: "Sarah K Marketing",
  },
  {
    id: "log-004",
    type: "payment",
    description:
      "Payment: Invoice **#455** for **Jane Smith** of **£250** successfully paid via Stripe.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    entityId: "invoice-455",
    entityType: "invoice",
    entityName: "Invoice #455",
  },
  {
    id: "log-005",
    type: "schedule",
    description:
      "Schedule: Appointment with **Robert Brown** for **Electrical Inspection** confirmed for tomorrow at **2:00 PM**.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    entityId: "job-321",
    entityType: "job",
    entityName: "Electrical Inspection",
  },
  {
    id: "log-006",
    type: "communication",
    description:
      "Communication: SMS reminder sent to **Mark Wilson** about upcoming appointment.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26), // 26 hours ago
    entityId: "client-654",
    entityType: "client",
    entityName: "Mark Wilson",
  },
  {
    id: "log-007",
    type: "user_action",
    description:
      "User Action: New job '**Bathroom Remodel**' created for client **Alice Johnson**.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28), // 28 hours ago
    entityId: "job-987",
    entityType: "job",
    entityName: "Bathroom Remodel",
    userId: "user-1",
    userName: "You",
  },
  {
    id: "log-008",
    type: "automation",
    description:
      "Automated: Client satisfaction survey sent to **David Thompson** after job completion.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    entityId: "client-234",
    entityType: "client",
    entityName: "David Thompson",
  },
];

// Helper function to get activity logs filtered by type
export function getFilteredActivityLogs(
  type?: ActivityLogType
): ActivityLogItem[] {
  if (!type) return ACTIVITY_LOG_DATA;
  return ACTIVITY_LOG_DATA.filter((item) => item.type === type);
}

// Helper function to format the timestamp in a human-readable format
export function formatTimestamp(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    if (days === 1) {
      return "Yesterday";
    } else if (days < 7) {
      return `${days} days ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  }
}
