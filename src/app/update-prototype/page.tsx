import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ChatPage from "@/polymet/pages/chat-page";
import JobsListPage from "@/polymet/pages/jobs-list-page";
import ClientsListPage from "@/polymet/pages/clients-list-page";
import ClientDetailsPage from "@/polymet/pages/client-details-page";
import ActivityPage from "@/polymet/pages/activity-page";
import ActivityLogPage from "@/polymet/pages/activity-log-page";
import MorePage from "@/polymet/pages/more-page";
import ProfilePage from "@/polymet/pages/profile-page";
import SchedulePage from "@/polymet/pages/schedule-page";
import SettingsPage from "@/polymet/pages/settings-page";
import ReportsPageEnhanced from "@/polymet/pages/reports-page-enhanced";
import HelpSupportPage from "@/polymet/pages/help-support-page";
import HelpInteractionPage from "@/polymet/pages/help-interaction-page";
import InboxPage from "@/polymet/pages/inbox-page";
import AICommandPad from "@/polymet/pages/ai-command-pad";
import { redirect } from 'next/navigation';

export default function UpdatePrototype() {
  redirect('/activity');

  return (
    <>
      <RouteWrapper path="/activity" title="Activity" Component={ActivityPage} />
      <RouteWrapper path="/chat" title="Chat" Component={ChatPage} />
      <RouteWrapper path="/jobs" title="Jobs" Component={JobsListPage} />
      <RouteWrapper path="/clients" title="Clients" Component={ClientsListPage} />
      <RouteWrapper path="/inbox" title="Customer Conversations" Component={InboxPage} />
      <RouteWrapper path="/client-details/[clientId]" title="Client Details" Component={ClientDetailsPage} />
      <RouteWrapper path="/activity/log" title="Activity" Component={ActivityPage} />
      <RouteWrapper path="/activity/log/details" title="Activity Log" Component={ActivityLogPage} showBackButton={true} />
      <RouteWrapper path="/more" title="More" Component={MorePage} />
      <RouteWrapper path="/schedule" title="Schedule" Component={SchedulePage} />
      <RouteWrapper path="/settings" title="Settings" Component={SettingsPage} />
      <RouteWrapper path="/reports" title="Reports" Component={ReportsPageEnhanced} />
      <RouteWrapper path="/help" title="Help & Support" Component={HelpSupportPage} />
      <RouteWrapper path="/help/[categoryId]" title="Help & Support" Component={HelpInteractionPage} />
      <RouteWrapper path="/privacy" title="Privacy Policy" showBackButton={true} Content={() => (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-gray-400">Privacy policy content goes here.</p>
        </div>
      )} />
      <RouteWrapper path="/terms" title="Terms of Service" showBackButton={true} Content={() => (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
          <p className="text-gray-400">Terms of service content goes here.</p>
        </div>
      )} />
      <RouteWrapper path="/billing" title="Billing & Subscription" showBackButton={true} Content={() => (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Billing & Subscription</h2>
          <p className="text-gray-400">Billing and subscription management content goes here.</p>
        </div>
      )} />
      <RouteWrapper path="/notifications" title="Notifications" showBackButton={true} Content={() => (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          <p className="text-gray-400">Notification settings content goes here.</p>
        </div>
      )} />
      <RouteWrapper path="/docs" title="Documentation" showBackButton={true} Content={() => (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Documentation</h2>
          <p className="text-gray-400">Documentation content goes here.</p>
        </div>
      )} />
      <RouteWrapper path="/ai-command-pad" title="AI Command Pad" Component={AICommandPad} />
    </>
  );
}

interface RouteWrapperProps {
  path: string;
  title: string;
  Component?: React.ComponentType<any>;
  Content?: React.ComponentType<any>;
  showBackButton?: boolean;
}

function RouteWrapper({ path, title, Component, Content, showBackButton }: RouteWrapperProps) {
  if (Component) {
    return (
      <SmbCommandCenterLayout title={title} showBackButton={showBackButton}>
        <Component />
      </SmbCommandCenterLayout>
    );
  }

  if (Content) {
    return (
      <SmbCommandCenterLayout title={title} showBackButton={showBackButton}>
        <Content />
      </SmbCommandCenterLayout>
    );
  }

  return null;
}