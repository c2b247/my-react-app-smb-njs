import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ActivityLogPage from "@/polymet/pages/activity-log-page";

export const metadata = {
  title: "Activity Log",
};

export default function ActivityLogDetailsPage() {
  return (
    <SmbCommandCenterLayout title="Activity Log" showBackButton={true}>
      <ActivityLogPage />
    </SmbCommandCenterLayout>
  );
}