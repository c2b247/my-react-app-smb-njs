import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ReportsPageEnhanced from "@/polymet/pages/reports-page-enhanced";

export const metadata = {
  title: "Reports",
};

export default function Reports() {
  return (
    <SmbCommandCenterLayout title="Reports">
      <ReportsPageEnhanced />
    </SmbCommandCenterLayout>
  );
}