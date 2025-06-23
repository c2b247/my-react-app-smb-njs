// Mock data for the quote builder module
export interface ClientSuggestion {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
}

export interface ServiceSuggestion {
  id: string;
  name: string;
  description: string;
  defaultPrice: number;
  estimatedDuration?: string;
}

export interface MaterialSuggestion {
  id: string;
  name: string;
  description?: string;
  defaultPrice: number;
  unit?: string;
}

export interface TermsTemplate {
  id: string;
  title: string;
  content: string;
}

// Mock client suggestions based on project type
export const getClientSuggestions = (): ClientSuggestion[] => [
  {
    id: "client-1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phoneNumber: "+44 7123 456789",
    address: "42 Oak Street, London, SW1A 1AA",
  },
  {
    id: "client-2",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phoneNumber: "+44 7234 567890",
    address: "15 Maple Avenue, London, E1 6BT",
  },
  {
    id: "client-3",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phoneNumber: "+44 7345 678901",
    address: "78 Pine Road, London, NW1 6XE",
  },
  {
    id: "client-4",
    name: "David Chen",
    email: "david.chen@example.com",
    phoneNumber: "+44 7456 789012",
    address: "23 Cedar Lane, London, SE1 7TH",
  },
];

// Mock service suggestions based on project type
export const getServiceSuggestions = (
  projectType: string
): ServiceSuggestion[] => {
  const allServices = {
    bathroom: [
      {
        id: "service-1",
        name: "Bathroom Design Consultation",
        description:
          "Professional design consultation to plan your bathroom renovation",
        defaultPrice: 150,
        estimatedDuration: "2 hours",
      },
      {
        id: "service-2",
        name: "Bathroom Demolition",
        description: "Removal of existing fixtures, tiles, and fittings",
        defaultPrice: 450,
        estimatedDuration: "1 day",
      },
      {
        id: "service-3",
        name: "Plumbing Installation",
        description: "Installation of new water pipes and drainage",
        defaultPrice: 650,
        estimatedDuration: "1-2 days",
      },
      {
        id: "service-4",
        name: "Tiling Service",
        description: "Professional tiling of walls and floors",
        defaultPrice: 35,
        estimatedDuration: "2-3 days",
      },
      {
        id: "service-5",
        name: "Fixture Installation",
        description: "Installation of toilet, sink, shower/bath, and fittings",
        defaultPrice: 380,
        estimatedDuration: "1 day",
      },
    ],

    kitchen: [
      {
        id: "service-6",
        name: "Kitchen Design Consultation",
        description:
          "Professional design consultation to plan your kitchen renovation",
        defaultPrice: 180,
        estimatedDuration: "2 hours",
      },
      {
        id: "service-7",
        name: "Kitchen Demolition",
        description:
          "Removal of existing cabinets, countertops, and appliances",
        defaultPrice: 550,
        estimatedDuration: "1 day",
      },
      {
        id: "service-8",
        name: "Cabinet Installation",
        description: "Installation of new kitchen cabinets",
        defaultPrice: 1200,
        estimatedDuration: "2-3 days",
      },
      {
        id: "service-9",
        name: "Countertop Installation",
        description: "Measuring, cutting, and installing new countertops",
        defaultPrice: 850,
        estimatedDuration: "1 day",
      },
      {
        id: "service-10",
        name: "Appliance Installation",
        description: "Installation and connection of kitchen appliances",
        defaultPrice: 320,
        estimatedDuration: "1 day",
      },
    ],

    garden: [
      {
        id: "service-11",
        name: "Garden Design Consultation",
        description:
          "Professional design consultation to plan your garden landscaping",
        defaultPrice: 120,
        estimatedDuration: "2 hours",
      },
      {
        id: "service-12",
        name: "Lawn Installation",
        description: "Preparation and installation of new lawn turf or seed",
        defaultPrice: 8.5,
        estimatedDuration: "1-2 days",
      },
      {
        id: "service-13",
        name: "Patio Installation",
        description: "Construction of new patio area",
        defaultPrice: 45,
        estimatedDuration: "2-4 days",
      },
      {
        id: "service-14",
        name: "Planting Service",
        description: "Selection and planting of appropriate plants and shrubs",
        defaultPrice: 280,
        estimatedDuration: "1 day",
      },
      {
        id: "service-15",
        name: "Garden Maintenance",
        description: "Regular maintenance of garden areas",
        defaultPrice: 35,
        estimatedDuration: "3 hours",
      },
    ],

    electrical: [
      {
        id: "service-16",
        name: "Electrical Safety Inspection",
        description: "Comprehensive inspection of electrical systems",
        defaultPrice: 120,
        estimatedDuration: "2 hours",
      },
      {
        id: "service-17",
        name: "Rewiring Service",
        description: "Complete rewiring of property",
        defaultPrice: 2500,
        estimatedDuration: "3-5 days",
      },
      {
        id: "service-18",
        name: "Light Fixture Installation",
        description: "Installation of new light fixtures",
        defaultPrice: 75,
        estimatedDuration: "1-3 hours",
      },
      {
        id: "service-19",
        name: "Outlet Installation",
        description: "Installation of new electrical outlets",
        defaultPrice: 65,
        estimatedDuration: "1 hour per outlet",
      },
      {
        id: "service-20",
        name: "Electrical Panel Upgrade",
        description: "Upgrade of electrical panel and circuit breakers",
        defaultPrice: 950,
        estimatedDuration: "1 day",
      },
    ],

    plumbing: [
      {
        id: "service-21",
        name: "Plumbing Inspection",
        description: "Comprehensive inspection of plumbing systems",
        defaultPrice: 110,
        estimatedDuration: "1-2 hours",
      },
      {
        id: "service-22",
        name: "Pipe Replacement",
        description: "Replacement of damaged or outdated pipes",
        defaultPrice: 85,
        estimatedDuration: "Varies by scope",
      },
      {
        id: "service-23",
        name: "Water Heater Installation",
        description: "Installation of new water heater",
        defaultPrice: 450,
        estimatedDuration: "3-4 hours",
      },
      {
        id: "service-24",
        name: "Drain Cleaning",
        description: "Professional cleaning of clogged drains",
        defaultPrice: 120,
        estimatedDuration: "1-2 hours",
      },
      {
        id: "service-25",
        name: "Fixture Installation",
        description: "Installation of sinks, toilets, and other fixtures",
        defaultPrice: 180,
        estimatedDuration: "1-3 hours per fixture",
      },
    ],

    default: [
      {
        id: "service-26",
        name: "Consultation",
        description: "Professional consultation for your project",
        defaultPrice: 100,
        estimatedDuration: "1 hour",
      },
      {
        id: "service-27",
        name: "Labor",
        description: "General labor services",
        defaultPrice: 45,
        estimatedDuration: "Per hour",
      },
      {
        id: "service-28",
        name: "Project Management",
        description: "Overseeing and coordinating project activities",
        defaultPrice: 65,
        estimatedDuration: "Per hour",
      },
      {
        id: "service-29",
        name: "Site Preparation",
        description: "Preparing the site for work",
        defaultPrice: 250,
        estimatedDuration: "1 day",
      },
      {
        id: "service-30",
        name: "Cleanup Service",
        description: "Post-project cleanup and waste removal",
        defaultPrice: 180,
        estimatedDuration: "3-4 hours",
      },
    ],
  };

  // Determine which service list to return based on project type
  const projectTypeLower = projectType.toLowerCase();

  if (
    projectTypeLower.includes("bathroom") ||
    projectTypeLower.includes("bath")
  ) {
    return allServices.bathroom;
  } else if (projectTypeLower.includes("kitchen")) {
    return allServices.kitchen;
  } else if (
    projectTypeLower.includes("garden") ||
    projectTypeLower.includes("landscap") ||
    projectTypeLower.includes("lawn")
  ) {
    return allServices.garden;
  } else if (
    projectTypeLower.includes("electric") ||
    projectTypeLower.includes("wiring") ||
    projectTypeLower.includes("light")
  ) {
    return allServices.electrical;
  } else if (
    projectTypeLower.includes("plumb") ||
    projectTypeLower.includes("pipe") ||
    projectTypeLower.includes("water")
  ) {
    return allServices.plumbing;
  }

  // Default services if no specific project type is matched
  return allServices.default;
};

// Mock material suggestions based on project type and selected services
export const getMaterialSuggestions = (
  projectType: string,
  selectedServices: string[] = []
): MaterialSuggestion[] => {
  const allMaterials = {
    bathroom: [
      {
        id: "material-1",
        name: "Ceramic Wall Tiles",
        description: "Standard white ceramic wall tiles",
        defaultPrice: 25,
        unit: "per m²",
      },
      {
        id: "material-2",
        name: "Porcelain Floor Tiles",
        description: "Durable porcelain floor tiles",
        defaultPrice: 35,
        unit: "per m²",
      },
      {
        id: "material-3",
        name: "Standard Toilet",
        description: "White ceramic close-coupled toilet",
        defaultPrice: 150,
        unit: "each",
      },
      {
        id: "material-4",
        name: "Basin and Pedestal",
        description: "White ceramic basin with pedestal",
        defaultPrice: 120,
        unit: "each",
      },
      {
        id: "material-5",
        name: "Shower Enclosure",
        description: "Glass shower enclosure with tray",
        defaultPrice: 280,
        unit: "each",
      },
      {
        id: "material-6",
        name: "Bath Tub",
        description: "Standard acrylic bath tub",
        defaultPrice: 220,
        unit: "each",
      },
      {
        id: "material-7",
        name: "Bathroom Taps",
        description: "Chrome bathroom taps for basin and bath",
        defaultPrice: 85,
        unit: "per set",
      },
      {
        id: "material-8",
        name: "Shower Mixer",
        description: "Thermostatic shower mixer with head",
        defaultPrice: 120,
        unit: "each",
      },
    ],

    kitchen: [
      {
        id: "material-9",
        name: "Base Cabinets",
        description: "Standard kitchen base cabinets",
        defaultPrice: 120,
        unit: "per unit",
      },
      {
        id: "material-10",
        name: "Wall Cabinets",
        description: "Standard kitchen wall cabinets",
        defaultPrice: 90,
        unit: "per unit",
      },
      {
        id: "material-11",
        name: "Laminate Countertop",
        description: "Standard laminate kitchen countertop",
        defaultPrice: 65,
        unit: "per linear meter",
      },
      {
        id: "material-12",
        name: "Granite Countertop",
        description: "Premium granite kitchen countertop",
        defaultPrice: 250,
        unit: "per linear meter",
      },
      {
        id: "material-13",
        name: "Kitchen Sink",
        description: "Stainless steel double bowl sink",
        defaultPrice: 140,
        unit: "each",
      },
      {
        id: "material-14",
        name: "Kitchen Tap",
        description: "Chrome kitchen mixer tap",
        defaultPrice: 75,
        unit: "each",
      },
      {
        id: "material-15",
        name: "Kitchen Handles",
        description: "Cabinet handles and knobs",
        defaultPrice: 4,
        unit: "each",
      },
      {
        id: "material-16",
        name: "Kitchen Splashback",
        description: "Glass or tile kitchen splashback",
        defaultPrice: 120,
        unit: "per m²",
      },
    ],

    garden: [
      {
        id: "material-17",
        name: "Turf Rolls",
        description: "Premium lawn turf",
        defaultPrice: 7.5,
        unit: "per m²",
      },
      {
        id: "material-18",
        name: "Topsoil",
        description: "Quality topsoil for planting",
        defaultPrice: 75,
        unit: "per cubic meter",
      },
      {
        id: "material-19",
        name: "Paving Slabs",
        description: "Concrete paving slabs",
        defaultPrice: 18,
        unit: "per m²",
      },
      {
        id: "material-20",
        name: "Decorative Gravel",
        description: "Decorative garden gravel",
        defaultPrice: 65,
        unit: "per ton",
      },
      {
        id: "material-21",
        name: "Garden Plants",
        description: "Assorted garden plants and shrubs",
        defaultPrice: 15,
        unit: "each",
      },
      {
        id: "material-22",
        name: "Garden Edging",
        description: "Lawn and garden edging",
        defaultPrice: 8,
        unit: "per meter",
      },
      {
        id: "material-23",
        name: "Compost",
        description: "Garden compost for planting",
        defaultPrice: 6,
        unit: "per 50L bag",
      },
      {
        id: "material-24",
        name: "Weed Control Fabric",
        description: "Weed suppression membrane",
        defaultPrice: 2.5,
        unit: "per m²",
      },
    ],

    electrical: [
      {
        id: "material-25",
        name: "Electrical Cable",
        description: "Standard electrical cable",
        defaultPrice: 2.5,
        unit: "per meter",
      },
      {
        id: "material-26",
        name: "Consumer Unit",
        description: "Modern consumer unit with circuit breakers",
        defaultPrice: 120,
        unit: "each",
      },
      {
        id: "material-27",
        name: "Light Switches",
        description: "Standard white light switches",
        defaultPrice: 6,
        unit: "each",
      },
      {
        id: "material-28",
        name: "Power Outlets",
        description: "Standard white power outlets",
        defaultPrice: 8,
        unit: "each",
      },
      {
        id: "material-29",
        name: "Ceiling Lights",
        description: "Basic ceiling light fixtures",
        defaultPrice: 25,
        unit: "each",
      },
      {
        id: "material-30",
        name: "Junction Boxes",
        description: "Electrical junction boxes",
        defaultPrice: 3.5,
        unit: "each",
      },
      {
        id: "material-31",
        name: "Conduit",
        description: "Plastic conduit for cable protection",
        defaultPrice: 4,
        unit: "per meter",
      },
      {
        id: "material-32",
        name: "Circuit Breakers",
        description: "Individual circuit breakers",
        defaultPrice: 12,
        unit: "each",
      },
    ],

    plumbing: [
      {
        id: "material-33",
        name: "Copper Pipe (15mm)",
        description: "15mm copper pipe for water supply",
        defaultPrice: 6.5,
        unit: "per meter",
      },
      {
        id: "material-34",
        name: "Copper Pipe (22mm)",
        description: "22mm copper pipe for water supply",
        defaultPrice: 9,
        unit: "per meter",
      },
      {
        id: "material-35",
        name: "PVC Waste Pipe",
        description: "40mm PVC waste pipe",
        defaultPrice: 4,
        unit: "per meter",
      },
      {
        id: "material-36",
        name: "Pipe Fittings",
        description: "Various copper and plastic pipe fittings",
        defaultPrice: 3.5,
        unit: "each",
      },
      {
        id: "material-37",
        name: "Water Tank",
        description: "Cold water storage tank",
        defaultPrice: 85,
        unit: "each",
      },
      {
        id: "material-38",
        name: "Water Heater",
        description: "Electric water heater",
        defaultPrice: 250,
        unit: "each",
      },
      {
        id: "material-39",
        name: "Isolation Valves",
        description: "Water isolation valves",
        defaultPrice: 8.5,
        unit: "each",
      },
      {
        id: "material-40",
        name: "Pipe Insulation",
        description: "Foam pipe insulation",
        defaultPrice: 2,
        unit: "per meter",
      },
    ],

    default: [
      {
        id: "material-41",
        name: "Screws and Fixings",
        description: "Assorted screws and fixings",
        defaultPrice: 15,
        unit: "per box",
      },
      {
        id: "material-42",
        name: "Timber",
        description: "Construction timber",
        defaultPrice: 8,
        unit: "per meter",
      },
      {
        id: "material-43",
        name: "Plasterboard",
        description: "Standard plasterboard sheets",
        defaultPrice: 12,
        unit: "per sheet",
      },
      {
        id: "material-44",
        name: "Paint",
        description: "Interior wall paint",
        defaultPrice: 25,
        unit: "per 5L",
      },
      {
        id: "material-45",
        name: "Sealant",
        description: "Silicone sealant",
        defaultPrice: 6,
        unit: "per tube",
      },
      {
        id: "material-46",
        name: "Adhesive",
        description: "Construction adhesive",
        defaultPrice: 7.5,
        unit: "per tube",
      },
      {
        id: "material-47",
        name: "Protective Sheeting",
        description: "Dust sheets and protective covering",
        defaultPrice: 10,
        unit: "per roll",
      },
      {
        id: "material-48",
        name: "Waste Disposal",
        description: "Waste removal and disposal",
        defaultPrice: 150,
        unit: "per skip",
      },
    ],
  };

  // Determine which material list to return based on project type
  const projectTypeLower = projectType.toLowerCase();

  if (
    projectTypeLower.includes("bathroom") ||
    projectTypeLower.includes("bath")
  ) {
    return allMaterials.bathroom;
  } else if (projectTypeLower.includes("kitchen")) {
    return allMaterials.kitchen;
  } else if (
    projectTypeLower.includes("garden") ||
    projectTypeLower.includes("landscap") ||
    projectTypeLower.includes("lawn")
  ) {
    return allMaterials.garden;
  } else if (
    projectTypeLower.includes("electric") ||
    projectTypeLower.includes("wiring") ||
    projectTypeLower.includes("light")
  ) {
    return allMaterials.electrical;
  } else if (
    projectTypeLower.includes("plumb") ||
    projectTypeLower.includes("pipe") ||
    projectTypeLower.includes("water")
  ) {
    return allMaterials.plumbing;
  }

  // Default materials if no specific project type is matched
  return allMaterials.default;
};

// Mock terms and conditions templates
export const getTermsTemplates = (): TermsTemplate[] => [
  {
    id: "terms-1",
    title: "Standard Terms & Conditions",
    content:
      "1. ACCEPTANCE: This quote is valid for 30 days from the date of issue. Acceptance of this quote implies agreement to these terms and conditions.\n\n2. PAYMENT: A 50% deposit is required before work commences. The remaining balance is due upon completion of the work. Payment methods accepted: bank transfer, credit/debit card.\n\n3. CHANGES: Any changes to the scope of work after acceptance may result in additional charges and timeline adjustments.\n\n4. CANCELLATION: Cancellation more than 48 hours before scheduled work incurs no fee. Cancellation within 48 hours may incur a fee of 25% of the total quote.\n\n5. WARRANTY: All workmanship is guaranteed for 12 months from completion. Materials are covered by manufacturer warranties.\n\n6. TIMELINE: While we strive to complete work within estimated timeframes, unforeseen circumstances may cause delays. We will communicate any significant changes promptly.\n\n7. PERMITS: Client is responsible for obtaining necessary permits unless explicitly included in this quote.\n\n8. INSURANCE: We maintain comprehensive insurance coverage for all work performed.\n\n9. DISPUTES: Any disputes shall be resolved through negotiation or mediation before legal action.",
  },
  {
    id: "terms-2",
    title: "Construction Project Terms",
    content:
      "1. ACCEPTANCE: This quote is valid for 30 days. Acceptance indicates agreement to these terms.\n\n2. PAYMENT SCHEDULE: 30% deposit upon acceptance, 30% at project midpoint, 40% upon completion. Payments due within 7 days of invoicing.\n\n3. CHANGES & VARIATIONS: All changes must be documented and approved in writing. Changes may affect timeline and final cost.\n\n4. SITE ACCESS: Client must provide reasonable access to the work site during agreed hours (typically 8am-5pm, Monday-Friday).\n\n5. MATERIALS: Materials specified in quote may be substituted with equivalent quality if unavailable. Significant substitutions require client approval.\n\n6. UNFORESEEN CONDITIONS: Additional costs may apply for conditions discovered during work that were not apparent during quoting (e.g., structural issues, asbestos, electrical problems).\n\n7. CLEANUP: Basic cleanup included. Waste disposal charges apply for larger projects.\n\n8. SUBCONTRACTORS: We reserve the right to use qualified subcontractors for specialized work.\n\n9. WARRANTY: Workmanship guaranteed for 12 months. Material warranties per manufacturer terms.\n\n10. PERMITS & COMPLIANCE: Work performed complies with current building regulations. Additional fees apply for specialized permits if required.\n\n11. TERMINATION: Contract may be terminated with 14 days written notice. Payment due for work completed plus 15% of remaining contract value.\n\n12. DISPUTE RESOLUTION: Disputes addressed through negotiation, then mediation, then arbitration.",
  },
  {
    id: "terms-3",
    title: "Service-Only Terms",
    content:
      "1. ACCEPTANCE & VALIDITY: This quote is valid for 14 days from issue date.\n\n2. SERVICE SCOPE: Services provided as specifically detailed in this quote only.\n\n3. PAYMENT: Full payment due upon completion of service unless otherwise specified.\n\n4. SCHEDULING: Services performed during normal business hours unless premium rates for after-hours work are accepted.\n\n5. CANCELLATION: 24-hour notice required for cancellation to avoid a £50 cancellation fee.\n\n6. LIABILITY: Our liability is limited to the cost of services provided.\n\n7. GUARANTEE: Services guaranteed for 30 days. Issues must be reported promptly for coverage.\n\n8. PROPERTY ACCESS: Client responsible for providing necessary access to perform services.\n\n9. SAFETY: We reserve the right to refuse work in unsafe conditions.\n\n10. PRIVACY: Client information kept confidential and used only for service provision.",
  },
];

// Default tax rate from settings
export const DEFAULT_TAX_RATE = 20; // 20% VAT

// Default validity periods
export const VALIDITY_PERIODS = [
  "7 days",
  "14 days",
  "30 days",
  "60 days",
  "90 days",
];
