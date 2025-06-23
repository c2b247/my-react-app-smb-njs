import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import SettingsPage from "@/polymet/pages/settings-page";

export const metadata = {
  title: "Settings",
};

export default function Settings() {
  return (
    <SmbCommandCenterLayout title="Settings">
      <SettingsPage />
    </SmbCommandCenterLayout>
  );
}