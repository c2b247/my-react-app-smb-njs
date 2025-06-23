import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import SchedulePage from "@/polymet/pages/schedule-page";

export const metadata = {
  title: "Schedule",
};

export default function Schedule() {
  return (
    <SmbCommandCenterLayout title="Schedule">
      <SchedulePage />
    </SmbCommandCenterLayout>
  );
}