import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ChatPage from "@/polymet/pages/chat-page";

export const metadata = {
  title: "Chat",
};

export default function Chat() {
  return (
    <SmbCommandCenterLayout title="Chat">
      <ChatPage />
    </SmbCommandCenterLayout>
  );
}