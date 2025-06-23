import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import ClientDetailsPage from "@/polymet/pages/client-details-page";

interface Props {
  params: {
    clientId: string;
  };
}

export async function generateStaticParams() {
  // Replace with your actual data fetching logic
  const clients = [{ id: "1" }, { id: "2" }]; // Example data
  return clients.map((client) => ({
    clientId: client.id,
  }));
}

export default function ClientDetails({ params }: Props) {
  const { clientId } = params;

  return (
    <SmbCommandCenterLayout title="Client Details">
      <ClientDetailsPage clientId={clientId} />
    </SmbCommandCenterLayout>
  );
}