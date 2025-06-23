export interface CallItem {
  id: string;
  contactNameOrNumber: string;
  timestamp: Date;
  status: "missed" | "answered";
  avatarUrl?: string;
}

export interface CallStats {
  today: {
    total: number;
    answered: number;
    missed: number;
  };
  thisWeek: {
    total: number;
    answered: number;
    missed: number;
  };
}

export const RECENT_CALLS: CallItem[] = [
  {
    id: "call-1",
    contactNameOrNumber: "John Smith",
    timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
    status: "missed",
    avatarUrl: "https://github.com/yusufhilmi.png",
  },
  {
    id: "call-2",
    contactNameOrNumber: "Sarah Johnson",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    status: "answered",
    avatarUrl: "https://github.com/furkanksl.png",
  },
  {
    id: "call-3",
    contactNameOrNumber: "Michael Brown",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: "answered",
    avatarUrl: "https://github.com/kdrnp.png",
  },
  {
    id: "call-4",
    contactNameOrNumber: "Emily Davis",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    status: "missed",
    avatarUrl: "https://github.com/yahyabedirhan.png",
  },
  {
    id: "call-5",
    contactNameOrNumber: "07123456789",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    status: "answered",
  },
];

export const CALL_STATS: CallStats = {
  today: {
    total: 8,
    answered: 5,
    missed: 3,
  },
  thisWeek: {
    total: 27,
    answered: 21,
    missed: 6,
  },
};

export const CALL_SUGGESTED_QUERIES = [
  { id: "c1", text: "summarize recent calls" },
  { id: "c2", text: "find missed client calls" },
  { id: "c3", text: "schedule follow-up calls" },
  { id: "c4", text: "analyze call performance" },
];

export const CALL_SUMMARY =
  "Here's a summary of your recent calls. You have 3 missed calls today that may need follow-up. Your call response rate this week is 78%, which is 5% better than last week.";
