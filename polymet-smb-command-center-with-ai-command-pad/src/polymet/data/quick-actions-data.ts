export interface QuickActionItem {
  id: string;
  label: string;
  icon: "calendar" | "user-plus" | "phone" | "message-square";
  description: string;
}

export const QUICK_ACTIONS: QuickActionItem[] = [
  {
    id: "schedule",
    label: "Schedule",
    icon: "calendar",
    description: "Create a new appointment or schedule a meeting",
  },
  {
    id: "add-client",
    label: "Add Client",
    icon: "user-plus",
    description: "Add a new client to your database",
  },
  {
    id: "call",
    label: "Call",
    icon: "phone",
    description: "Make a phone call to a client or contact",
  },
  {
    id: "message",
    label: "Message",
    icon: "message-square",
    description: "Send a message to a client or contact",
  },
];

export const QUICK_ACTIONS_SUGGESTED_QUERIES = [
  { id: "q1", text: "Schedule a meeting with John" },
  { id: "q2", text: "Add a new client" },
  { id: "q3", text: "Call Sarah Johnson" },
  { id: "q4", text: "Send a message to Michael" },
];

export const QUICK_ACTIONS_SUMMARY =
  "What would you like to do? You can use these quick actions or just tell me what you need help with.";
