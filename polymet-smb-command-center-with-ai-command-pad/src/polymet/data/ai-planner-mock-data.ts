// Mock data for the AI planner modules
export const AI_PLANNER_MOCK_DATA = {
  "create-job": {
    goalPrompt: "Let's create a new job! What's the job about?",
    goalPlaceholder:
      "Describe the job (e.g., 'Garden maintenance for Sarah B')",
    goalButtonText: "Plan Job ✨",
    topicSelectionPrompt:
      "Great! Let's plan your new job. Select the main areas to cover:",
    reviewTitle: "Job Plan",
    reviewDescription:
      "Review the details of your job plan before creating it.",
    finalActionButtonText: "Create Job",
    topics: [
      {
        id: "client",
        title: "Client Information",
        subtitle: "Who is this job for?",
        keyPoints: [
          {
            id: "client-search",
            text: "Search for existing client or add new",
            type: "client-search",
          },
          {
            id: "client-contact",
            text: "Confirm contact number",
            type: "text-input",
            placeholder: "Enter contact number...",
          },
          {
            id: "client-address",
            text: "Verify service address",
            type: "text-input",
            placeholder: "Enter service address...",
          },
        ],
      },
      {
        id: "service",
        title: "Service & Job Details",
        subtitle: "What work needs to be done?",
        keyPoints: [
          {
            id: "service-selection",
            text: "Select service type",
            type: "service-search",
          },
          {
            id: "service-scope",
            text: "Define scope of work",
            type: "text-input",
            placeholder: "Describe the scope of work in detail...",
          },
          {
            id: "service-duration",
            text: "Estimated duration",
            type: "text-input",
            placeholder: "How long will this job take?",
          },
        ],
      },
      {
        id: "schedule",
        title: "Scheduling & Location",
        subtitle: "When and where will it take place?",
        keyPoints: [
          {
            id: "schedule-datetime",
            text: "Set date and time",
            type: "scheduling",
          },
          {
            id: "schedule-notes",
            text: "Add scheduling notes",
            type: "text-input",
            placeholder: "Any special instructions for scheduling?",
          },
        ],
      },
      {
        id: "materials",
        title: "Materials & Parts",
        subtitle: "What supplies are needed? (Optional)",
        keyPoints: [
          {
            id: "materials-list",
            text: "Add required materials",
            type: "custom-input",
            placeholder: "Enter material or part name",
            buttonLabel: "Add Material",
          },
          {
            id: "materials-source",
            text: "Sourcing instructions",
            type: "text-input",
            placeholder: "Where to source materials from?",
          },
        ],
      },
      {
        id: "notes",
        title: "Notes & Attachments",
        subtitle: "Any additional information?",
        keyPoints: [
          {
            id: "job-notes",
            text: "Add job notes",
            type: "text-input",
            placeholder: "Enter any additional notes about this job...",
          },
          {
            id: "client-preferences",
            text: "Client preferences",
            type: "text-input",
            placeholder: "Any specific client preferences to note?",
          },
        ],
      },
    ],
  },
  "draft-quote": {
    goalPrompt: "Let's draft a quote! Briefly describe the project or client.",
    goalPlaceholder:
      "Describe the project (e.g., 'Kitchen renovation for John D')",
    goalButtonText: "Get Quote Topics ✨",
    topicSelectionPrompt:
      "Great! Let's build your quote. Select the areas to include:",
    reviewTitle: "Quote",
    reviewDescription:
      "Review your quote details before generating the final document.",
    finalActionButtonText: "Generate Quote PDF & Save",
    topics: [
      {
        id: "client-project",
        title: "Client & Project Details",
        subtitle: "Who and what is this quote for?",
        keyPoints: [
          {
            id: "quote-client",
            text: "Select client",
            type: "client-search",
          },
          {
            id: "project-name",
            text: "Project name/reference",
            type: "text-input",
            placeholder: "Enter project name or reference...",
          },
          {
            id: "project-description",
            text: "Project description",
            type: "text-input",
            placeholder: "Briefly describe the project...",
          },
        ],
      },
      {
        id: "services",
        title: "Line Items: Services",
        subtitle: "What services are you quoting for?",
        keyPoints: [
          {
            id: "service-items",
            text: "Add service line items",
            type: "line-items",
          },
          {
            id: "service-notes",
            text: "Service notes",
            type: "text-input",
            placeholder: "Any notes about the services?",
          },
        ],
      },
      {
        id: "materials",
        title: "Line Items: Materials/Parts",
        subtitle: "What materials or parts are needed?",
        keyPoints: [
          {
            id: "material-items",
            text: "Add material line items",
            type: "line-items",
          },
          {
            id: "material-notes",
            text: "Material notes",
            type: "text-input",
            placeholder: "Any notes about the materials?",
          },
        ],
      },
      {
        id: "pricing",
        title: "Pricing, Discounts & Tax",
        subtitle: "Set pricing details and options",
        keyPoints: [
          {
            id: "pricing-options",
            text: "Review pricing options",
            type: "pricing-options",
          },
          {
            id: "pricing-notes",
            text: "Additional pricing notes",
            type: "text-input",
            placeholder: "Any additional notes about pricing?",
          },
        ],
      },
      {
        id: "terms",
        title: "Terms & Validity",
        subtitle: "Define payment terms and validity period",
        keyPoints: [
          {
            id: "quote-terms",
            text: "Set payment terms and validity",
            type: "terms-input",
          },
          {
            id: "terms-notes",
            text: "Additional terms",
            type: "text-input",
            placeholder: "Any additional terms or conditions?",
          },
        ],
      },
    ],
  },
  "message-composer": {
    goalPrompt: "Let's compose a message! What's your message about?",
    goalPlaceholder:
      "Describe your message goal (e.g., 'Remind Jane about upcoming appointment')",
    goalButtonText: "Plan Message ✨",
    topicSelectionPrompt:
      "Great! Select a message approach that fits your goal:",
    reviewTitle: "Message",
    reviewDescription: "Review your message before sending.",
    finalActionButtonText: "Send Message",
    topics: [
      {
        id: "recipient",
        title: "Recipient & Purpose",
        subtitle: "Who is this message for and why?",
        keyPoints: [
          {
            id: "message-recipient",
            text: "Select message recipient",
            type: "client-search",
          },
          {
            id: "message-purpose",
            text: "Define message purpose",
            type: "text-input",
            placeholder: "What's the main purpose of this message?",
          },
        ],
      },
      {
        id: "content",
        title: "Message Content",
        subtitle: "What do you want to say?",
        keyPoints: [
          {
            id: "message-key-points",
            text: "Key points to include",
            type: "text-input",
            placeholder: "List the key points you want to include...",
          },
          {
            id: "message-tone",
            text: "Message tone",
            type: "text-input",
            placeholder: "Formal, friendly, urgent, etc.",
          },
          {
            id: "message-draft",
            text: "Draft message",
            type: "channel-select",
          },
        ],
      },
      {
        id: "details",
        title: "Additional Details",
        subtitle: "Any specific information to include?",
        keyPoints: [
          {
            id: "include-dates",
            text: "Include dates/times",
            type: "text-input",
            placeholder: "Any specific dates or times to mention?",
          },
          {
            id: "include-links",
            text: "Include links or references",
            type: "text-input",
            placeholder: "Any links or references to include?",
          },
        ],
      },
    ],
  },
  "onboard-client": {
    goalPrompt:
      "Let's onboard a new client! What's their name or primary contact info?",
    goalPlaceholder: "Enter client name or contact info",
    goalButtonText: "Start Onboarding Plan ✨",
    topicSelectionPrompt:
      "Great! Let's gather information about this new client. Select areas to cover:",
    reviewTitle: "New Client",
    reviewDescription:
      "Review the client information before creating their record.",
    finalActionButtonText: "Create New Client Record",
    topics: [
      {
        id: "contact",
        title: "Contact Information",
        subtitle: "Basic contact details",
        keyPoints: [
          {
            id: "client-name",
            text: "Full name",
            type: "text-input",
            placeholder: "Enter client's full name...",
          },
          {
            id: "client-phone",
            text: "Phone number",
            type: "text-input",
            placeholder: "Enter client's phone number...",
          },
          {
            id: "client-email",
            text: "Email address",
            type: "text-input",
            placeholder: "Enter client's email address...",
          },
          {
            id: "client-address",
            text: "Physical address",
            type: "text-input",
            placeholder: "Enter client's address...",
          },
        ],
      },
      {
        id: "business",
        title: "Business/Property Details",
        subtitle: "If applicable",
        keyPoints: [
          {
            id: "business-name",
            text: "Business name",
            type: "text-input",
            placeholder: "Enter business name (if applicable)...",
          },
          {
            id: "property-type",
            text: "Property type",
            type: "text-input",
            placeholder: "Residential, Commercial, etc.",
          },
          {
            id: "property-details",
            text: "Property details",
            type: "text-input",
            placeholder: "Size, age, special features, etc.",
          },
        ],
      },
      {
        id: "services",
        title: "Service Interests & Needs",
        subtitle: "What services are they interested in?",
        keyPoints: [
          {
            id: "service-interests",
            text: "Services interested in",
            type: "service-search",
          },
          {
            id: "service-frequency",
            text: "Service frequency",
            type: "text-input",
            placeholder: "One-time, weekly, monthly, etc.",
          },
          {
            id: "service-budget",
            text: "Budget range",
            type: "text-input",
            placeholder: "Client's budget expectations...",
          },
        ],
      },
      {
        id: "preferences",
        title: "Billing & Communication Preferences",
        subtitle: "How do they prefer to interact?",
        keyPoints: [
          {
            id: "billing-method",
            text: "Preferred payment method",
            type: "text-input",
            placeholder: "Credit card, bank transfer, check, etc.",
          },
          {
            id: "communication-preference",
            text: "Preferred communication channel",
            type: "text-input",
            placeholder: "Email, phone, text, etc.",
          },
          {
            id: "invoice-delivery",
            text: "Invoice delivery method",
            type: "text-input",
            placeholder: "Email, mail, etc.",
          },
        ],
      },
      {
        id: "notes",
        title: "Initial Notes & Next Steps",
        subtitle: "Additional information and follow-up",
        keyPoints: [
          {
            id: "client-notes",
            text: "Additional notes",
            type: "text-input",
            placeholder: "Any other important information about this client...",
          },
          {
            id: "next-steps",
            text: "Next steps",
            type: "text-input",
            placeholder: "Follow-up actions, scheduled visits, etc.",
          },
          {
            id: "referral-source",
            text: "How they found you",
            type: "text-input",
            placeholder: "Referral, Google, social media, etc.",
          },
        ],
      },
    ],
  },
  "marketing-content": {
    goalPrompt:
      "Let's brainstorm some marketing content! What's your objective or theme?",
    goalPlaceholder:
      "Describe your marketing goal (e.g., 'Promote summer landscaping special')",
    goalButtonText: "Get Content Ideas ✨",
    topicSelectionPrompt:
      "Great! Let's plan your marketing content. Select areas to focus on:",
    reviewTitle: "Marketing Plan",
    reviewDescription: "Review your marketing content plan before saving.",
    finalActionButtonText: "Save Marketing Plan",
    topics: [
      {
        id: "audience",
        title: "Target Audience & Platform",
        subtitle: "Who are you trying to reach and where?",
        keyPoints: [
          {
            id: "target-audience",
            text: "Define target audience",
            type: "marketing-audience",
          },
          {
            id: "platform-selection",
            text: "Select platforms",
            type: "text-input",
            placeholder:
              "Which platforms will you use? (Facebook, Instagram, Email, etc.)",
          },
        ],
      },
      {
        id: "message",
        title: "Key Message & Offer",
        subtitle: "What's your main message or offer?",
        keyPoints: [
          {
            id: "key-message",
            text: "Define key message",
            type: "marketing-message",
          },
          {
            id: "offer-details",
            text: "Offer details",
            type: "text-input",
            placeholder:
              "Specific details about your offer, discount, promotion, etc.",
          },
          {
            id: "offer-timeframe",
            text: "Offer timeframe",
            type: "text-input",
            placeholder: "When does this offer start/end?",
          },
        ],
      },
      {
        id: "format",
        title: "Content Format & Style",
        subtitle: "How will you present your message?",
        keyPoints: [
          {
            id: "content-format",
            text: "Select content format",
            type: "marketing-format",
          },
          {
            id: "visual-elements",
            text: "Visual elements",
            type: "text-input",
            placeholder: "What images, videos, or graphics will you use?",
          },
          {
            id: "tone-style",
            text: "Tone and style",
            type: "text-input",
            placeholder: "Casual, professional, humorous, etc.",
          },
        ],
      },
      {
        id: "cta",
        title: "Call to Action",
        subtitle: "What do you want people to do?",
        keyPoints: [
          {
            id: "primary-cta",
            text: "Primary call to action",
            type: "marketing-cta",
          },
          {
            id: "cta-placement",
            text: "CTA placement",
            type: "text-input",
            placeholder: "Where will your CTA appear in the content?",
          },
        ],
      },
      {
        id: "schedule",
        title: "Posting Schedule Ideas",
        subtitle: "When and how often to post?",
        keyPoints: [
          {
            id: "posting-schedule",
            text: "Define posting schedule",
            type: "marketing-schedule",
          },
          {
            id: "follow-up-plan",
            text: "Follow-up plan",
            type: "text-input",
            placeholder: "How will you follow up on this marketing effort?",
          },
        ],
      },
    ],
  },
};
