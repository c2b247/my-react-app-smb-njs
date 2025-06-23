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

export default async function ClientDetails({ params }: Props) {
  const { clientId } = params;

  // Simulate fetching client details based on clientId
  const clientData = await fetchClientDetails(clientId);

  if (!clientData) {
    return <div>Client not found</div>; // Or redirect, or throw error
  }

  return (
    <SmbCommandCenterLayout title="Client Details">
      <ClientDetailsPage clientId={clientId} clientData={clientData} />
    </SmbCommandCenterLayout>
  );
}

async function fetchClientDetails(clientId: string) {
  // Replace with your actual data fetching logic
  // Example:
  // const res = await fetch(https://api.example.com/clients/${clientId});
  // if (!res.ok) {
  //   return undefined;
  // }
  // return res.json();

  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simulate data based on clientId
  if (clientId === "1") {
    return { id: "1", name: "Client One" };
  } else if (clientId === "2") {
    return { id: "2", name: "Client Two" };
  } else {
    return undefined;
  }
}