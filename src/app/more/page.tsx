import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import MorePage from "@/polymet/pages/more-page";

export const metadata = {
  title: "More",
};

export default function More() {
  return (
    <SmbCommandCenterLayout title="More">
      <MorePage />
    </SmbCommandCenterLayout>
  );
}