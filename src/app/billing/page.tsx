import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";

export const metadata = {
  title: "Billing & Subscription",
};

export default function BillingPage() {
  return (
    <SmbCommandCenterLayout title="Billing & Subscription" showBackButton={true}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Billing & Subscription</h2>
        <p className="text-gray-400">
          Billing and subscription management content goes here.
        </p>
      </div>
    </SmbCommandCenterLayout>
  );
}