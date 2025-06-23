// Types of notifications
export type NotificationType =
  | "appointment"
  | "payment"
  | "integration"
  | "system"
  | "message"
  | "update";

// Notification item structure
export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  actions?: {
    primary?: {
      label: string;
      action: string;
      route?: string;
    };
    secondary?: {
      label: string;
      action: string;
      route?: string;
    };
  };
  entityId?: string;
  entityType?: "job" | "invoice" | "client" | "integration";
}

// Mock notifications data
export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: "notif-001",
    type: "appointment",
    title: "Upcoming Appointment",
    message:
      "Your job 'Garden Maintenance' for **Jane Smith** is scheduled in 1 hour.",
    timestamp: new Date(Date.now() + 60 * 60 * 1000), // 1 hour in the future
    isRead: false,
    actions: {
      primary: {
        label: "View Job",
        action: "viewJob",
        route: "/jobs",
      },
    },
    entityId: "job-123",
    entityType: "job",
  },
  {
    id: "notif-002",
    type: "payment",
    title: "Payment Received",
    message: "Payment of **£150** for Invoice **#457** has been confirmed.",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    isRead: true,
    actions: {
      primary: {
        label: "View Invoice",
        action: "viewInvoice",
        route: "/reports",
      },
    },
    entityId: "invoice-457",
    entityType: "invoice",
  },
  {
    id: "notif-003",
    type: "integration",
    title: "Integration Issue",
    message: "Failed to sync with Google Calendar. Please check connection.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isRead: false,
    actions: {
      primary: {
        label: "Go to Integrations",
        action: "goToIntegrations",
        route: "/settings",
      },
      secondary: {
        label: "Retry Sync",
        action: "retrySync",
      },
    },
    entityId: "integration-gcal",
    entityType: "integration",
  },
  {
    id: "notif-004",
    type: "update",
    title: "New Feature Update",
    message: "We've just launched enhanced reporting! Check it out.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    isRead: false,
    actions: {
      primary: {
        label: "Learn More",
        action: "learnMore",
        route: "/reports",
      },
      secondary: {
        label: "Dismiss",
        action: "dismiss",
      },
    },
  },
  {
    id: "notif-005",
    type: "message",
    title: "New Message",
    message:
      "**Robert Brown** sent you a message about the electrical inspection job.",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    isRead: true,
    actions: {
      primary: {
        label: "Reply",
        action: "reply",
        route: "/chat",
      },
    },
    entityId: "client-456",
    entityType: "client",
  },
  {
    id: "notif-006",
    type: "system",
    title: "Backup Complete",
    message: "Your system data has been successfully backed up.",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    isRead: true,
    actions: {
      primary: {
        label: "View Details",
        action: "viewBackupDetails",
      },
    },
  },
  {
    id: "notif-007",
    type: "appointment",
    title: "Job Rescheduled",
    message:
      "The 'Kitchen Renovation' job for **John Doe** has been rescheduled to tomorrow at 10:00 AM.",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    isRead: false,
    actions: {
      primary: {
        label: "View Schedule",
        action: "viewSchedule",
        route: "/schedule",
      },
    },
    entityId: "job-456",
    entityType: "job",
  },
];

// Helper function to get unread notifications count
export const getUnreadNotificationsCount = (): number => {
  return NOTIFICATIONS_DATA.filter((notification) => !notification.isRead)
    .length;
};

// Helper function to filter notifications
export const getFilteredNotifications = (
  filter: "all" | "unread"
): NotificationItem[] => {
  if (filter === "unread") {
    return NOTIFICATIONS_DATA.filter((notification) => !notification.isRead);
  }
  return NOTIFICATIONS_DATA;
};

// Helper function to format notification timestamp
export const formatNotificationTimestamp = (timestamp: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - timestamp.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Future time (for upcoming appointments)
  if (diffMs < 0) {
    const absDiffMins = Math.abs(diffMins);
    if (absDiffMins < 60) {
      return `In ${absDiffMins} min${absDiffMins !== 1 ? "s" : ""}`;
    } else {
      const absDiffHours = Math.abs(diffHours);
      return `In ${absDiffHours} hour${absDiffHours !== 1 ? "s" : ""}`;
    }
  }

  // Past time
  if (diffMins < 60) {
    return diffMins === 0
      ? "Just now"
      : `${diffMins} min${diffMins !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else {
    return timestamp.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
};
