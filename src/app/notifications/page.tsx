import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";

export const metadata = {
  title: "Notifications",
};

export default function NotificationsPage() {
  return (
    <SmbCommandCenterLayout title="Notifications" showBackButton={true}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <p className="text-gray-400">
          Notification settings content goes here.
        </p>
      </div>
    </SmbCommandCenterLayout>
  );
}