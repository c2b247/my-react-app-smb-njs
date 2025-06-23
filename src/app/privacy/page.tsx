import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <SmbCommandCenterLayout title="Privacy Policy" showBackButton={true}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-gray-400">Privacy policy content goes here.</p>
      </div>
    </SmbCommandCenterLayout>
  );
}