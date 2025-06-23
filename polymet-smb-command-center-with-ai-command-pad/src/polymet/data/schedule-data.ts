// Mock data for schedule items and related functionality

// Schedule items with time, title, and description
export const SCHEDULE_ITEMS = [
  {
    id: "1",
    time: "10:00 AM",
    title: "Call John Smith",
    description: "Quote Follow-up for Kitchen Renovation",
    date: new Date(),
  },
  {
    id: "2",
    time: "2:00 PM",
    title: "Site Visit at 123 Main St",
    description: "Initial assessment for bathroom remodel",
    date: new Date(),
  },
  {
    id: "3",
    time: "4:30 PM",
    title: "Team Meeting",
    description: "Weekly progress update with contractors",
    date: new Date(),
  },
  {
    id: "4",
    time: "9:00 AM",
    title: "Supplier Meeting",
    description: "Negotiate new material prices with BuildRight",
    date: new Date(Date.now() + 86400000), // Tomorrow
  },
  {
    id: "5",
    time: "11:30 AM",
    title: "Client Consultation",
    description: "New project discussion with Sarah Johnson",
    date: new Date(Date.now() + 86400000), // Tomorrow
  },
];

// Suggested queries related to schedule
export const SCHEDULE_SUGGESTED_QUERIES = [
  {
    id: "schedule-1",
    text: "What's my next appointment?",
  },
  {
    id: "schedule-2",
    text: "Add a new appointment for tomorrow",
  },
  {
    id: "schedule-3",
    text: "Reschedule my site visit",
  },
  {
    id: "schedule-4",
    text: "Show me next week's schedule",
  },
];

// Summary text for the streaming message effect
export const SCHEDULE_SUMMARY =
  "Here's a look at your schedule for today. You have 3 appointments scheduled. Let me know if you need to make any changes or if you'd like me to remind you before each appointment.";

// Function to get today's schedule items
export const getTodaySchedule = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return SCHEDULE_ITEMS.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate.getTime() === today.getTime();
  });
};

// Function to get tomorrow's schedule items
export const getTomorrowSchedule = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return SCHEDULE_ITEMS.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate.getTime() === tomorrow.getTime();
  });
};

// Function to format date as "Friday, 23 May"
export const formatDateString = (date = new Date()) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};
