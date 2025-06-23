export interface JobItem {
  id: string;
  time: string;
  title: string;
  client: string;
  status: "scheduled" | "in-progress" | "completed" | "cancelled";
}

export interface SummaryStats {
  pendingJobs: number;
  completedJobs: number;
  todaysRevenue: string;
}

export const TODAYS_JOBS: JobItem[] = [
  {
    id: "job1",
    time: "9:00 AM",
    title: "Garden Maintenance",
    client: "Jane Smith",
    status: "scheduled",
  },
  {
    id: "job2",
    time: "11:30 AM",
    title: "Kitchen Renovation",
    client: "John Doe",
    status: "in-progress",
  },
  {
    id: "job3",
    time: "4:30 PM",
    title: "Electrical Inspection",
    client: "Robert Brown",
    status: "scheduled",
  },
];

export const SUMMARY_STATS: SummaryStats = {
  pendingJobs: 4,
  completedJobs: 0,
  todaysRevenue: "£0",
};

export const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export const PRODUCTIVITY_INSIGHT = {
  tasksCompleted: 0,
  timeSaved: "1.5 hours",
};
