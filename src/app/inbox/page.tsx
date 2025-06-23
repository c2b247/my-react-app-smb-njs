import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import InboxPage from "@/polymet/pages/inbox-page";

export const metadata = {
  title: "Customer Conversations",
};

export default function Inbox() {
  return (
    <SmbCommandCenterLayout title="Customer Conversations">
      <InboxPage />
    </SmbCommandCenterLayout>
  );
}