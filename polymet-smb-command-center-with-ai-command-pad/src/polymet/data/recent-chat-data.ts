export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  lastActive: Date;
}

export const RECENT_CHAT_SESSION: ChatSession = {
  id: "chat-1",
  title: "Job Scheduling Discussion",
  lastActive: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
  messages: [
    {
      id: "msg-1",
      sender: "user",
      text: "I need to schedule a new job for tomorrow",
      timestamp: new Date(Date.now() - 35 * 60 * 1000), // 35 minutes ago
    },
    {
      id: "msg-2",
      sender: "assistant",
      text: "I can help you schedule that. What time would you like to set for the job, and which client is it for?",
      timestamp: new Date(Date.now() - 34 * 60 * 1000), // 34 minutes ago
    },
    {
      id: "msg-3",
      sender: "user",
      text: "It's for Johnson's Hardware at 2 PM. It's a consultation for their store renovation.",
      timestamp: new Date(Date.now() - 33 * 60 * 1000), // 33 minutes ago
    },
    {
      id: "msg-4",
      sender: "assistant",
      text: "Great! I've added a new job for tomorrow at 2:00 PM with Johnson's Hardware for a store renovation consultation. Would you like me to set a reminder for this appointment?",
      timestamp: new Date(Date.now() - 32 * 60 * 1000), // 32 minutes ago
    },
    {
      id: "msg-5",
      sender: "user",
      text: "Yes, please set a reminder for 1 hour before.",
      timestamp: new Date(Date.now() - 31 * 60 * 1000), // 31 minutes ago
    },
    {
      id: "msg-6",
      sender: "assistant",
      text: "I've set a reminder for 1:00 PM tomorrow. You'll receive a notification one hour before your consultation with Johnson's Hardware. Is there anything else you need help with?",
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    },
  ],
};

export const CHAT_SUGGESTED_QUERIES = [
  { id: "chat-q1", text: "Continue our discussion about Johnson's Hardware" },
  { id: "chat-q2", text: "Show me all appointments for tomorrow" },
  { id: "chat-q3", text: "What other tasks do I have pending?" },
  { id: "chat-q4", text: "Start a new conversation" },
];

export const CHAT_SUMMARY =
  "Here's a snippet from our last conversation. You can continue from here or start a new topic.";

// Helper function to get the most recent user message
export const getLastUserMessage = () => {
  const userMessages = RECENT_CHAT_SESSION.messages.filter(
    (msg) => msg.sender === "user"
  );
  return userMessages[userMessages.length - 1];
};

// Helper function to get the most recent assistant message
export const getLastAssistantMessage = () => {
  const assistantMessages = RECENT_CHAT_SESSION.messages.filter(
    (msg) => msg.sender === "assistant"
  );
  return assistantMessages[assistantMessages.length - 1];
};
