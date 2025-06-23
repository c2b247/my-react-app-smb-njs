import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ChatPage from "@/polymet/pages/chat-page";

export const metadata = {
  title: "Chat History",
};

export default function ChatHistoryPage() {
  return (
    <SmbCommandCenterLayout title="Chat History">
      <ChatPage />
    </SmbCommandCenterLayout>
  );
}