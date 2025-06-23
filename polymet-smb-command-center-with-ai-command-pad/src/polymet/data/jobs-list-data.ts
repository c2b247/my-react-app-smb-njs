export interface Job {
  id: string;
  time: string;
  title: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Needs Invoicing";
  clientName: string;
  address: string;
  clientPhone: string;
  clientEmail: string;
  description: string;
}

export const JOBS_DATA: Job[] = [
  {
    id: "1",
    time: "9:00 AM",
    title: "Garden Maintenance",
    status: "Scheduled",
    clientName: "Jane Smith",
    address: "123 Garden Lane, London, SW1A 1AA",
    clientPhone: "+44 7123 456789",
    clientEmail: "jane.smith@example.com",
    description:
      "Trim hedges, mow lawn, and remove weeds from flower beds. Client has requested special attention to the rose garden in the back.",
  },
  {
    id: "2",
    time: "11:30 AM",
    title: "Kitchen Renovation - Phase 1",
    status: "In Progress",
    clientName: "John Doe",
    address: "456 Baker Street, London, NW1 6XE",
    clientPhone: "+44 7987 654321",
    clientEmail: "john.doe@example.com",
    description:
      "Initial demolition and preparation for new kitchen installation. Remove old cabinets, appliances, and flooring. Prepare walls for new electrical wiring.",
  },
  {
    id: "3",
    time: "2:00 PM",
    title: "Electrical Inspection",
    status: "Completed",
    clientName: "Robert Brown",
    address: "789 Main High Rd, London, E1 1AA",
    clientPhone: "+44 7555 123456",
    clientEmail: "robert.brown@example.com",
    description:
      "Complete electrical safety inspection for property sale. Check all outlets, fixtures, and circuit breakers. Provide certification upon completion.",
  },
  {
    id: "4",
    time: "4:30 PM",
    title: "Boiler Service",
    status: "Scheduled",
    clientName: "Sarah Johnson",
    address: "321 Park Avenue, London, SE1 7TH",
    clientPhone: "+44 7333 987654",
    clientEmail: "sarah.johnson@example.com",
    description:
      "Annual boiler service and safety check. Clean components, check pressure, and test for proper operation. Client mentioned unusual noise when heating starts.",
  },
  {
    id: "5",
    time: "10:00 AM",
    title: "Bathroom Tiling",
    status: "In Progress",
    clientName: "Michael Wilson",
    address: "567 Queen Street, London, W1 8QP",
    clientPhone: "+44 7222 345678",
    clientEmail: "michael.wilson@example.com",
    description:
      "Install new ceramic tiles in bathroom. Remove old tiles, prepare surface, and install new tiles with proper waterproofing. Client has provided the tiles.",
  },
  {
    id: "6",
    time: "1:00 PM",
    title: "Window Replacement",
    status: "Needs Invoicing",
    clientName: "Emily Davis",
    address: "890 Victoria Road, London, N4 2RT",
    clientPhone: "+44 7111 234567",
    clientEmail: "emily.davis@example.com",
    description:
      "Replace three windows in living room with double-glazed units. Remove old windows, install new frames and glass, and ensure proper sealing.",
  },
];

export const getFilteredJobs = (filter: string): Job[] => {
  if (filter === "All Jobs") {
    return JOBS_DATA;
  }
  return JOBS_DATA.filter((job) => job.status === filter);
};
