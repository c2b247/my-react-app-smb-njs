interface ActionButton {
  label: string;
  action: string;
  route?: string;
}

export interface AIDailyBriefingData {
  greeting: string;
  userName: string;
  briefingSummary: string;
  highlightedItems: {
    jobsToday: number;
    firstJobTitle?: string;
    firstJobTime?: string;
    overdueInvoices?: number;
    overdueInvoiceClient?: string;
    newLeads?: number;
    unreadMessages?: number;
  };
  actionButtons: ActionButton[];
}

export const AI_DAILY_BRIEFING: AIDailyBriefingData = {
  greeting: "Good morning",
  userName: "John",
  briefingSummary:
    "You have {jobsToday} jobs scheduled today, starting with '{firstJobTitle}' at {firstJobTime}. You also have {overdueInvoices} overdue invoice for {overdueInvoiceClient}.",
  highlightedItems: {
    jobsToday: 3,
    firstJobTitle: "Garden Maintenance",
    firstJobTime: "9:00 AM",
    overdueInvoices: 1,
    overdueInvoiceClient: "Sarah Johnson",
    newLeads: 2,
    unreadMessages: 3,
  },
  actionButtons: [
    {
      label: "Send Reminder to Sarah",
      action: "sendInvoiceReminder",
      route: "/clients",
    },
    {
      label: "View Today's Schedule",
      action: "viewSchedule",
      route: "/schedule",
    },
  ],
};

// Helper function to get greeting based on time of day
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

// Helper function to format the briefing text with dynamic values
export const formatBriefingText = (briefing: AIDailyBriefingData): string => {
  let text = briefing.briefingSummary;
  const { highlightedItems } = briefing;

  // Replace placeholders with actual values
  Object.keys(highlightedItems).forEach((key) => {
    const placeholder = `{${key}}`;
    if (text.includes(placeholder)) {
      text = text.replace(
        placeholder,
        String(highlightedItems[key as keyof typeof highlightedItems])
      );
    }
  });

  return text;
};

// Helper function to get contextual action buttons based on the briefing data
export const getContextualActionButtons = (
  briefing: AIDailyBriefingData
): ActionButton[] => {
  const buttons: ActionButton[] = [];
  const { highlightedItems } = briefing;

  // Add invoice reminder button if there are overdue invoices
  if (
    highlightedItems.overdueInvoices &&
    highlightedItems.overdueInvoices > 0
  ) {
    buttons.push({
      label: `Send Reminder to ${highlightedItems.overdueInvoiceClient}`,
      action: "sendInvoiceReminder",
      route: "/clients",
    });
  }

  // Add schedule button if there are jobs today
  if (highlightedItems.jobsToday && highlightedItems.jobsToday > 0) {
    buttons.push({
      label: "View Today's Schedule",
      action: "viewSchedule",
      route: "/schedule",
    });
  }

  // Add leads button if there are new leads
  if (highlightedItems.newLeads && highlightedItems.newLeads > 0) {
    buttons.push({
      label: "Review New Leads",
      action: "reviewLeads",
      route: "/clients",
    });
  }

  // Limit to 2 buttons maximum
  return buttons.slice(0, 2);
};
