import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";

export const metadata = {
  title: "Documentation",
};

export default function DocsPage() {
  return (
    <SmbCommandCenterLayout title="Documentation" showBackButton={true}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Documentation</h2>
        <p className="text-gray-400">Documentation content goes here.</p>
      </div>
    </SmbCommandCenterLayout>
  );
}