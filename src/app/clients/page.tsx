import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ClientsListPage from "@/polymet/pages/clients-list-page";

export const metadata = {
  title: "Clients",
};

export default function ClientsPage() {
  return (
    <SmbCommandCenterLayout title="Clients">
      <ClientsListPage />
    </SmbCommandCenterLayout>
  );
}