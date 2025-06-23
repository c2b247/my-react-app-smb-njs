import { formatDistanceToNow } from "date-fns";

export interface Interaction {
  id: string;
  contactName: string;
  type: "phone" | "message" | "email" | "instagram" | "website" | "sms";
  summary: string;
  timestamp: Date;
}

export const RECENT_INTERACTIONS: Interaction[] = [
  {
    id: "int-1",
    contactName: "John Smith",
    type: "phone",
    summary: "Discussed kitchen renovation quote",
    timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
  },
  {
    id: "int-2",
    contactName: "Sarah Johnson",
    type: "message",
    summary: "Confirmed appointment for tomorrow",
    timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
  },
  {
    id: "int-3",
    contactName: "Michael Brown",
    type: "email",
    summary: "Sent invoice for completed project",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
  },
  {
    id: "int-4",
    contactName: "Emily Davis",
    type: "instagram",
    summary: "Asked about service availability",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: "int-5",
    contactName: "Robert Wilson",
    type: "website",
    summary: "Submitted contact form inquiry",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
  },
  {
    id: "int-6",
    contactName: "Jennifer Lee",
    type: "sms",
    summary: "Requested quote for new project",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
  },
];

export const INTERACTION_SUGGESTED_QUERIES = [
  {
    id: "query-1",
    text: "Show interactions with John Smith",
  },
  {
    id: "query-2",
    text: "Summarize today's client communications",
  },
  {
    id: "query-3",
    text: "Which clients need follow-up?",
  },
  {
    id: "query-4",
    text: "Create task from Sarah's appointment",
  },
];

export const INTERACTION_SUMMARY =
  "Here are your latest client interactions. Looks like Sarah's appointment is set! You have 6 total interactions today across different channels. Would you like me to help you prepare for any upcoming appointments?";
