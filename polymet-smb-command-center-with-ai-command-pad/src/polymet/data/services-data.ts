// Mock data for services in the system
export interface ServiceData {
  id: string;
  name: string;
  description: string;
  defaultPrice: number;
  estimatedDuration: string;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "service-1",
    name: "Boiler Service",
    description:
      "Standard annual boiler service including safety checks and cleaning.",
    defaultPrice: 150,
    estimatedDuration: "1hr",
  },
  {
    id: "service-2",
    name: "Pipe Repair",
    description: "Repair of leaking or damaged pipes.",
    defaultPrice: 85,
    estimatedDuration: "2hr",
  },
  {
    id: "service-3",
    name: "Garden Maintenance",
    description:
      "General garden maintenance including lawn mowing, hedge trimming, and weeding.",
    defaultPrice: 120,
    estimatedDuration: "3hr",
  },
  {
    id: "service-4",
    name: "Kitchen Renovation",
    description:
      "Complete kitchen renovation service including installation of cabinets, countertops, and appliances.",
    defaultPrice: 3500,
    estimatedDuration: "full-day",
  },
  {
    id: "service-5",
    name: "Electrical Inspection",
    description: "Comprehensive electrical safety inspection of property.",
    defaultPrice: 95,
    estimatedDuration: "2hr",
  },
  {
    id: "service-6",
    name: "Bathroom Remodel",
    description:
      "Complete bathroom renovation including fixtures, tiling, and plumbing.",
    defaultPrice: 2800,
    estimatedDuration: "full-day",
  },
  {
    id: "service-7",
    name: "Roof Repair",
    description: "Repair of damaged roof tiles or sections.",
    defaultPrice: 250,
    estimatedDuration: "4hr",
  },
  {
    id: "service-8",
    name: "Window Cleaning",
    description: "Professional cleaning of all windows, inside and out.",
    defaultPrice: 75,
    estimatedDuration: "2hr",
  },
  {
    id: "service-9",
    name: "Painting - Interior",
    description: "Interior painting service for walls and ceilings.",
    defaultPrice: 350,
    estimatedDuration: "full-day",
  },
  {
    id: "service-10",
    name: "Painting - Exterior",
    description: "Exterior painting service for house facades.",
    defaultPrice: 450,
    estimatedDuration: "full-day",
  },
  {
    id: "service-11",
    name: "Driveway Cleaning",
    description: "Pressure washing and cleaning of driveways and patios.",
    defaultPrice: 120,
    estimatedDuration: "3hr",
  },
  {
    id: "service-12",
    name: "Fence Installation",
    description: "Installation of new fencing around property.",
    defaultPrice: 800,
    estimatedDuration: "full-day",
  },
];

// Helper function to search services by name
export const searchServices = (query: string): ServiceData[] => {
  const lowercaseQuery = query.toLowerCase().trim();
  if (!lowercaseQuery) return SERVICES_DATA;

  return SERVICES_DATA.filter((service) =>
    service.name.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to get a service by ID
export const getServiceById = (id: string): ServiceData | undefined => {
  return SERVICES_DATA.find((service) => service.id === id);
};
