import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import HelpSupportPage from "@/polymet/pages/help-support-page";

export const metadata = {
  title: "Help & Support",
};

export default function HelpPage() {
  return (
    <SmbCommandCenterLayout title="Help & Support">
      <HelpSupportPage />
    </SmbCommandCenterLayout>
  );
}