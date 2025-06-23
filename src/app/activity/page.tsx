import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ActivityPage from "@/polymet/pages/activity-page";

export const metadata = {
  title: 'Activity',
}

export default function Activity() {
  return (
    <SmbCommandCenterLayout title="Activity">
      <ActivityPage />
    </SmbCommandCenterLayout>
  );
}