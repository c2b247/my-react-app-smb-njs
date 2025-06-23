// Mock data for clients
export interface Client {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  address?: string;
  city?: string;
  postcode?: string;
  status: "active" | "lead";
  notes?: string;
  jobs?: ClientJob[];
}

export interface ClientJob {
  id: string;
  title: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Needs Invoicing";
  scheduledDate?: string;
  scheduledTime?: string;
}

export const CLIENTS_DATA: Client[] = [
  {
    id: "1",
    name: "Jane Smith",
    phoneNumber: "+44 7123 456789",
    email: "jane.smith@example.com",
    address: "123 Garden Lane",
    city: "London",
    postcode: "SW1A 1AA",
    status: "active",
    notes: "Prefers appointments in the morning. Has a dog in the backyard.",
    jobs: [
      {
        id: "101",
        title: "Garden Maintenance",
        status: "Scheduled",
        scheduledDate: "2023-07-15",
        scheduledTime: "9:00 AM",
      },
    ],
  },
  {
    id: "2",
    name: "John Doe",
    phoneNumber: "+44 7234 567890",
    email: "john.doe@example.com",
    address: "456 High Street",
    city: "London",
    postcode: "E1 6BT",
    status: "active",
    jobs: [
      {
        id: "102",
        title: "Kitchen Renovation",
        status: "In Progress",
        scheduledDate: "2023-07-10",
        scheduledTime: "10:30 AM",
      },
    ],
  },
  {
    id: "3",
    name: "Alice Johnson",
    phoneNumber: "+44 7345 678901",
    email: "alice.johnson@example.com",
    address: "789 Park Avenue",
    city: "London",
    postcode: "NW1 6XE",
    status: "active",
    jobs: [
      {
        id: "103",
        title: "Patio Cleaning",
        status: "Completed",
        scheduledDate: "2023-07-05",
        scheduledTime: "2:00 PM",
      },
    ],
  },
  {
    id: "4",
    name: "Mark Brown",
    phoneNumber: "+44 7456 789012",
    email: "mark.brown@example.com",
    address: "101 Queens Road",
    city: "London",
    postcode: "SW15 2HD",
    status: "lead",
    notes: "Interested in landscaping services. Requested quote.",
    jobs: [],
  },
];

// Helper function to get a client by ID
export function getClientById(id: string): Client | undefined {
  return CLIENTS_DATA.find((client) => client.id === id);
}

// Helper function to get clients by status
export function getClientsByStatus(status?: "active" | "lead"): Client[] {
  if (!status) return CLIENTS_DATA;
  return CLIENTS_DATA.filter((client) => client.status === status);
}

// Helper function to get clients with active jobs
export function getClientsWithActiveJobs(): Client[] {
  return CLIENTS_DATA.filter((client) =>
    client.jobs?.some(
      (job) => job.status === "Scheduled" || job.status === "In Progress"
    )
  );
}

// Helper function to get clients with recent jobs
export function getClientsWithRecentJobs(): Client[] {
  return CLIENTS_DATA.filter((client) =>
    client.jobs?.some(
      (job) => job.status === "Completed" || job.status === "Needs Invoicing"
    )
  );
}

// Helper function to get clients that are leads
export function getLeadClients(): Client[] {
  return getClientsByStatus("lead");
}

// Helper function to search clients by name or phone
export function searchClients(query: string): Client[] {
  const lowercaseQuery = query.toLowerCase();
  return CLIENTS_DATA.filter(
    (client) =>
      client.name.toLowerCase().includes(lowercaseQuery) ||
      client.phoneNumber.includes(query)
  );
}
