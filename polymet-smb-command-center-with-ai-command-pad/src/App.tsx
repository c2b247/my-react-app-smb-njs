import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

export default function SmbCommandCenterPrototypeWithAICommandPad() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/activity" replace />} />

        <Route
          path="/activity"
          element={
            <SmbCommandCenterLayout title="Activity">
              <ActivityPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/chat"
          element={
            <SmbCommandCenterLayout title="Chat">
              <ChatPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/jobs"
          element={
            <SmbCommandCenterLayout title="Jobs">
              <JobsListPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/clients"
          element={
            <SmbCommandCenterLayout title="Clients">
              <ClientsListPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/inbox"
          element={
            <SmbCommandCenterLayout title="Customer Conversations">
              <InboxPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/client-details/:clientId"
          element={
            <SmbCommandCenterLayout title="Client Details">
              <ClientDetailsPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/activity/log"
          element={
            <SmbCommandCenterLayout title="Activity">
              <ActivityPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/activity/log/details"
          element={
            <SmbCommandCenterLayout title="Activity Log" showBackButton={true}>
              <ActivityLogPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/more"
          element={
            <SmbCommandCenterLayout title="More">
              <MorePage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/schedule"
          element={
            <SmbCommandCenterLayout title="Schedule">
              <SchedulePage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <SmbCommandCenterLayout title="Settings">
              <SettingsPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/reports"
          element={
            <SmbCommandCenterLayout title="Reports">
              <ReportsPageEnhanced />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/help"
          element={
            <SmbCommandCenterLayout title="Help & Support">
              <HelpSupportPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/help/:categoryId"
          element={
            <SmbCommandCenterLayout title="Help & Support">
              <HelpInteractionPage />
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/privacy"
          element={
            <SmbCommandCenterLayout
              title="Privacy Policy"
              showBackButton={true}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
                <p className="text-gray-400">
                  Privacy policy content goes here.
                </p>
              </div>
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/terms"
          element={
            <SmbCommandCenterLayout
              title="Terms of Service"
              showBackButton={true}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
                <p className="text-gray-400">
                  Terms of service content goes here.
                </p>
              </div>
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/billing"
          element={
            <SmbCommandCenterLayout
              title="Billing & Subscription"
              showBackButton={true}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">
                  Billing & Subscription
                </h2>
                <p className="text-gray-400">
                  Billing and subscription management content goes here.
                </p>
              </div>
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/notifications"
          element={
            <SmbCommandCenterLayout title="Notifications" showBackButton={true}>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Notifications</h2>
                <p className="text-gray-400">
                  Notification settings content goes here.
                </p>
              </div>
            </SmbCommandCenterLayout>
          }
        />

        <Route
          path="/docs"
          element={
            <SmbCommandCenterLayout title="Documentation" showBackButton={true}>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Documentation</h2>
                <p className="text-gray-400">
                  Documentation content goes here.
                </p>
              </div>
            </SmbCommandCenterLayout>
          }
        />

        {/* AI Command Pad Route */}
        <Route path="/ai-command-pad" element={<AICommandPad />} />
      </Routes>
    </Router>
  );
}
