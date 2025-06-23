export interface ProductivityInsight {
  period: "today" | "this week" | "this month";
  tasksCompleted: number;
  timeSaved: string;
}

export const PRODUCTIVITY_INSIGHTS: ProductivityInsight[] = [
  {
    period: "today",
    tasksCompleted: 4,
    timeSaved: "1 hour",
  },
  {
    period: "this week",
    tasksCompleted: 12,
    timeSaved: "3.5 hours",
  },
  {
    period: "this month",
    tasksCompleted: 47,
    timeSaved: "12 hours",
  },
];

export interface SuggestedQuery {
  id: string;
  text: string;
}

export const SUGGESTED_QUERIES: Record<string, SuggestedQuery[]> = {
  productivity: [
    { id: "p1", text: "analyze supplier issues" },
    { id: "p2", text: "tool maintenance tips" },
    { id: "p3", text: "inventory management strategies" },
    { id: "p4", text: "employee scheduling best practices" },
  ],

  calls: [
    { id: "c1", text: "summarize recent calls" },
    { id: "c2", text: "find missed client calls" },
    { id: "c3", text: "schedule follow-up calls" },
    { id: "c4", text: "analyze call performance" },
  ],

  interactions: [
    { id: "i1", text: "client meeting summary" },
    { id: "i2", text: "improve customer interactions" },
    { id: "i3", text: "follow up on pending requests" },
    { id: "i4", text: "analyze customer feedback" },
  ],

  quickActions: [
    { id: "q1", text: "create new task" },
    { id: "q2", text: "schedule client meeting" },
    { id: "q3", text: "send follow-up email" },
    { id: "q4", text: "generate monthly report" },
  ],
};

export const PRODUCTIVITY_SUMMARY = `Your productivity has been steadily improving over the past month. This week, you've completed 12 tasks, which is a 20% increase from last week. The most significant time savings came from automating your inventory reports, which saved you approximately 1.5 hours.

Your task completion rate is highest on Tuesdays and Wednesdays, with a noticeable drop on Fridays. I recommend scheduling your most complex tasks earlier in the week when your productivity is at its peak.

Looking at the monthly trend, you've saved a total of 12 hours through process improvements and automation. The biggest opportunity for further improvement is in your client communication workflow, which currently takes up 35% of your daily work time.`;
