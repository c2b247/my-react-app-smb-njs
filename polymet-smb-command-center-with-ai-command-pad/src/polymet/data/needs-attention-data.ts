export interface AttentionItem {
  id: string;
  type: "warning" | "message" | "task" | "integration";
  text: string;
  actionLabel: string;
  actionRoute?: string;
  actionType: "navigate" | "modal" | "function";
  priority: "high" | "medium" | "low";
  date?: Date;
  relatedId?: string;
}

export const NEEDS_ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: "attention-1",
    type: "warning",
    text: "Invoice #456 for Jane Smith is 7 days overdue.",
    actionLabel: "Send Reminder",
    actionType: "function",
    priority: "high",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    relatedId: "invoice-456",
  },
  {
    id: "attention-2",
    type: "message",
    text: "Unread important message from Robert Brown regarding 'Boiler Service'.",
    actionLabel: "View Message",
    actionRoute: "/chat",
    actionType: "navigate",
    priority: "medium",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    relatedId: "message-789",
  },
  {
    id: "attention-3",
    type: "task",
    text: "Follow-up task: Call 'New Lead Co' about their quote - Due Today.",
    actionLabel: "View Task Details",
    actionType: "modal",
    priority: "high",
    date: new Date(),
    relatedId: "task-123",
  },
  {
    id: "attention-4",
    type: "integration",
    text: "Action Required: Re-authenticate your Google Calendar connection.",
    actionLabel: "Go to Integrations",
    actionRoute: "/settings?tab=integrations",
    actionType: "navigate",
    priority: "medium",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  },
];

// Helper function to get items sorted by priority
export const getAttentionItemsByPriority = (): AttentionItem[] => {
  const priorityOrder = { high: 0, medium: 1, low: 2 };

  return [...NEEDS_ATTENTION_ITEMS].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

// Helper function to get high priority items
export const getHighPriorityItems = (): AttentionItem[] => {
  return NEEDS_ATTENTION_ITEMS.filter((item) => item.priority === "high");
};

// Helper function to get items by type
export const getAttentionItemsByType = (type: string): AttentionItem[] => {
  return NEEDS_ATTENTION_ITEMS.filter((item) => item.type === type);
};
