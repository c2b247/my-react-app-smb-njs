export interface ClientJob {
  id: string;
  clientId: string;
  title: string;
  description?: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Needs Invoicing";
  createdAt: Date;
  jobNumber: string;
}

// Mock data for client jobs
export const CLIENT_JOBS_DATA: ClientJob[] = [
  {
    id: "job-1",
    clientId: "1", // Jane Smith
    title: "Garden Maintenance",
    description:
      "Regular garden maintenance including lawn mowing, hedge trimming, and weeding.",
    status: "Scheduled",
    createdAt: new Date(2023, 6, 15),
    jobNumber: "J101",
  },
  {
    id: "job-2",
    clientId: "1", // Jane Smith
    title: "Patio Installation",
    description:
      "Installation of new patio with stone pavers and built-in seating.",
    status: "In Progress",
    createdAt: new Date(2023, 5, 20),
    jobNumber: "J095",
  },
  {
    id: "job-3",
    clientId: "2", // John Doe
    title: "Kitchen Renovation",
    description:
      "Complete kitchen renovation including new cabinets, countertops, and appliances.",
    status: "In Progress",
    createdAt: new Date(2023, 6, 10),
    jobNumber: "J100",
  },
  {
    id: "job-4",
    clientId: "2", // John Doe
    title: "Bathroom Remodel",
    description:
      "Master bathroom remodel with new shower, vanity, and flooring.",
    status: "Completed",
    createdAt: new Date(2023, 4, 5),
    jobNumber: "J082",
  },
  {
    id: "job-5",
    clientId: "3", // Alice Johnson
    title: "Patio Cleaning",
    description: "Deep cleaning of patio and outdoor furniture.",
    status: "Completed",
    createdAt: new Date(2023, 6, 5),
    jobNumber: "J099",
  },
  {
    id: "job-6",
    clientId: "3", // Alice Johnson
    title: "Fence Installation",
    description: "Installation of new wooden fence around property perimeter.",
    status: "Scheduled",
    createdAt: new Date(2023, 7, 10),
    jobNumber: "J105",
  },
];

// Helper function to get jobs for a specific client
export function getJobsByClientId(clientId: string): ClientJob[] {
  return CLIENT_JOBS_DATA.filter((job) => job.clientId === clientId);
}

// Helper function to search jobs by title
export function searchJobsByTitle(
  clientId: string,
  query: string
): ClientJob[] {
  const clientJobs = getJobsByClientId(clientId);
  if (!query) return clientJobs;

  const lowercaseQuery = query.toLowerCase();
  return clientJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.jobNumber.toLowerCase().includes(lowercaseQuery)
  );
}

// Helper function to get a job by ID
export function getJobById(jobId: string): ClientJob | undefined {
  return CLIENT_JOBS_DATA.find((job) => job.id === jobId);
}
