// Mock data for conversations
// Using a simple function to generate unique IDs instead of uuid dependency

// Helper function to generate a simple unique ID
function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export type ConversationChannel =
  | "website"
  | "whatsapp"
  | "facebook"
  | "instagram"
  | "sms";
export type ConversationStatus =
  | "unread"
  | "needs_attention"
  | "ai_handled"
  | "resolved";

export interface ConversationMessage {
  id: string;
  sender: "customer" | "ai" | "business";
  text: string;
  timestamp: Date;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  customerName: string;
  channel: ConversationChannel;
  status: ConversationStatus;
  messages: ConversationMessage[];
  lastActive: Date;
  unreadCount: number;
  assignedTo?: string;
}

// Helper function to create a message
const createMessage = (
  sender: "customer" | "ai" | "business",
  text: string,
  timestamp: Date,
  isRead: boolean = true
): ConversationMessage => ({
  id: generateId(),
  sender,
  text,
  timestamp,
  isRead,
});

// Create mock conversations data
export const CONVERSATIONS_DATA: Conversation[] = [
  {
    id: "conv-1",
    customerName: "Sarah Johnson",
    channel: "website",
    status: "unread",
    messages: [
      createMessage(
        "customer",
        "Hello, I'm interested in your services. Do you offer financing options for larger projects?",
        new Date(Date.now() - 20 * 60 * 1000), // 20 minutes ago
        false
      ),
      createMessage(
        "ai",
        "Hi Sarah! Thank you for your interest. Yes, we do offer financing options for larger projects. Would you like me to provide more details about our financing plans?",
        new Date(Date.now() - 19 * 60 * 1000), // 19 minutes ago
        false
      ),
      createMessage(
        "customer",
        "Yes, please. I'm looking at a kitchen renovation that might cost around $15,000.",
        new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
        false
      ),
    ],

    lastActive: new Date(Date.now() - 15 * 60 * 1000),
    unreadCount: 2,
  },
  {
    id: "conv-2",
    customerName: "Michael Brown",
    channel: "whatsapp",
    status: "needs_attention",
    messages: [
      createMessage(
        "customer",
        "Hi, I need to schedule a plumbing service for next week.",
        new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      ),
      createMessage(
        "ai",
        "Hello Michael! I'd be happy to help you schedule a plumbing service. Could you please let me know what specific plumbing issue you're experiencing and what day next week would work best for you?",
        new Date(Date.now() - 1.9 * 60 * 60 * 1000) // 1.9 hours ago
      ),
      createMessage(
        "customer",
        "I have a leaky faucet in the kitchen. Tuesday or Wednesday afternoon would work.",
        new Date(Date.now() - 1.8 * 60 * 60 * 1000) // 1.8 hours ago
      ),
      createMessage(
        "ai",
        "Thank you for providing those details. We have availability on both Tuesday and Wednesday afternoon. Would you prefer a time slot between 1-3 PM or 3-5 PM?",
        new Date(Date.now() - 1.7 * 60 * 60 * 1000) // 1.7 hours ago
      ),
      createMessage(
        "customer",
        "3-5 PM on Wednesday would be perfect.",
        new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
      ),
      createMessage(
        "customer",
        "Actually, I also wanted to ask about adding another service. Can you also check the water heater while you're here?",
        new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
        false
      ),
    ],

    lastActive: new Date(Date.now() - 45 * 60 * 1000),
    unreadCount: 1,
  },
  {
    id: "conv-3",
    customerName: "Emma Wilson",
    channel: "facebook",
    status: "ai_handled",
    messages: [
      createMessage(
        "customer",
        "Hi there! I'm looking for someone to help with lawn care services.",
        new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
      ),
      createMessage(
        "ai",
        "Hello Emma! We'd be happy to help with your lawn care needs. We offer services including mowing, edging, fertilization, and more. Could you please share your address so we can check if you're within our service area?",
        new Date(Date.now() - 4.9 * 60 * 60 * 1000) // 4.9 hours ago
      ),
      createMessage(
        "customer",
        "123 Willow Street, London, SW1A 1AA. My number is 07700 900123.",
        new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
      ),
      createMessage(
        "ai",
        "Thank you for providing your address. Good news! You are within our service area. We can offer weekly, bi-weekly, or monthly lawn care services. Would you like me to explain our packages and pricing?",
        new Date(Date.now() - 2.9 * 60 * 60 * 1000) // 2.9 hours ago
      ),
    ],

    lastActive: new Date(Date.now() - 2.9 * 60 * 60 * 1000),
    unreadCount: 0,
  },
  {
    id: "conv-4",
    customerName: "David Chen",
    channel: "instagram",
    status: "resolved",
    messages: [
      createMessage(
        "customer",
        "Do you provide electrical services? I need some outlets installed.",
        new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      ),
      createMessage(
        "ai",
        "Hi David! Yes, we do provide electrical services including outlet installation. Our licensed electricians can help with that. Would you like to schedule an appointment for an assessment?",
        new Date(Date.now() - 2.9 * 24 * 60 * 60 * 1000) // 2.9 days ago
      ),
      createMessage(
        "customer",
        "Great! How much do you charge for outlet installation?",
        new Date(Date.now() - 2.8 * 24 * 60 * 60 * 1000) // 2.8 days ago
      ),
      createMessage(
        "business",
        "Hello David, this is Alex from the electrical team. Our standard outlet installation starts at £85 per outlet, but the final price depends on the complexity of the installation. Would you like me to arrange for an electrician to visit and provide a detailed quote?",
        new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000) // 2.5 days ago
      ),
      createMessage(
        "customer",
        "That sounds reasonable. Yes, please arrange a visit.",
        new Date(Date.now() - 2.3 * 24 * 60 * 60 * 1000) // 2.3 days ago
      ),
      createMessage(
        "business",
        "Perfect! I've scheduled an electrician to visit you tomorrow between 10 AM and 12 PM. Is that time slot convenient for you?",
        new Date(Date.now() - 2.2 * 24 * 60 * 60 * 1000) // 2.2 days ago
      ),
      createMessage(
        "customer",
        "Yes, that works for me. Thank you!",
        new Date(Date.now() - 2.1 * 24 * 60 * 60 * 1000) // 2.1 days ago
      ),
      createMessage(
        "business",
        "You're welcome! Our electrician, Mike, will be there tomorrow. Is there anything else you need assistance with?",
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      ),
      createMessage(
        "customer",
        "No, that's all. Thank you!",
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      ),
    ],

    lastActive: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    unreadCount: 0,
    assignedTo: "Alex Thompson",
  },
  {
    id: "conv-5",
    customerName: "Olivia Martinez",
    channel: "sms",
    status: "unread",
    messages: [
      createMessage(
        "customer",
        "Hi, the sink in my bathroom is leaking badly. Can someone come today?",
        new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
      ),
      createMessage(
        "ai",
        "Hello Olivia, I'm sorry to hear about your leaking sink. We'll try our best to send someone today. Could you please provide your address and a good contact number?",
        new Date(Date.now() - 25 * 60 * 1000) // 25 minutes ago
      ),
      createMessage(
        "customer",
        "45 Park Lane, London, E1 6BT. My number is 07700 900456. The leak is getting worse.",
        new Date(Date.now() - 20 * 60 * 1000) // 20 minutes ago
      ),
      createMessage(
        "ai",
        "Thank you for providing your details. I've marked this as urgent. Our plumber can be there between 3-5 PM today. Will someone be home during that time?",
        new Date(Date.now() - 15 * 60 * 1000) // 15 minutes ago
      ),
      createMessage(
        "customer",
        "The leak is getting worse. Please hurry!",
        new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
        false
      ),
    ],

    lastActive: new Date(Date.now() - 10 * 60 * 1000),
    unreadCount: 3,
  },
];

// Helper functions for conversation data

// Get channel name for display
export const getChannelName = (channel: ConversationChannel): string => {
  const channelNames = {
    website: "Website Chat",
    whatsapp: "WhatsApp",
    facebook: "Facebook Messenger",
    instagram: "Instagram DM",
    sms: "SMS",
  };
  return channelNames[channel];
};

// Get channel icon for display
export const getChannelIcon = (channel: ConversationChannel) => {
  // This function is used by conversation-snippet-item
  // Implementation would depend on the icons being used
  return channel;
};

// Get filtered conversations based on channel and status
export const getFilteredConversations = (
  channelFilter: ConversationChannel | "all",
  statusFilter: ConversationStatus | "all"
): Conversation[] => {
  return CONVERSATIONS_DATA.filter((conversation) => {
    const channelMatch =
      channelFilter === "all" || conversation.channel === channelFilter;
    const statusMatch =
      statusFilter === "all" || conversation.status === statusFilter;
    return channelMatch && statusMatch;
  });
};

// Get count of unread conversations
export const getUnreadConversationsCount = (): number => {
  return CONVERSATIONS_DATA.reduce(
    (count, conversation) => count + (conversation.unreadCount > 0 ? 1 : 0),
    0
  );
};

// Format timestamp for display
export const formatMessageTimestamp = (timestamp: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - timestamp.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return `${diffMins}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else {
    return `${diffDays}d ago`;
  }
};

// Mark conversation as read
export const markConversationAsRead = (conversationId: string): void => {
  const conversation = CONVERSATIONS_DATA.find((c) => c.id === conversationId);
  if (conversation) {
    conversation.messages.forEach((message) => {
      message.isRead = true;
    });
    conversation.unreadCount = 0;
    if (conversation.status === "unread") {
      conversation.status = "needs_attention";
    }
  }
};

// Mark conversation as resolved
export const markConversationAsResolved = (conversationId: string): void => {
  const conversation = CONVERSATIONS_DATA.find((c) => c.id === conversationId);
  if (conversation) {
    conversation.status = "resolved";
  }
};

// Assign conversation to current user
export const assignConversationToMe = (conversationId: string): void => {
  const conversation = CONVERSATIONS_DATA.find((c) => c.id === conversationId);
  if (conversation) {
    conversation.assignedTo = "Current User"; // In a real app, this would be the logged-in user
  }
};

// Add a new message to a conversation
export const addMessageToConversation = (
  conversationId: string,
  message: Omit<ConversationMessage, "id">
): void => {
  const conversation = CONVERSATIONS_DATA.find((c) => c.id === conversationId);
  if (conversation) {
    const newMessage = {
      ...message,
      id: generateId(),
    };
    conversation.messages.push(newMessage);
    conversation.lastActive = new Date();

    // If the message is from the business, mark the conversation as needs_attention
    if (message.sender === "business" && conversation.status === "unread") {
      conversation.status = "needs_attention";
    }
  }
};
