import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <SmbCommandCenterLayout title="Terms of Service" showBackButton={true}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
        <p className="text-gray-400">Terms of service content goes here.</p>
      </div>
    </SmbCommandCenterLayout>
  );
}