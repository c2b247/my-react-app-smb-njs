import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import JobsListPage from "@/polymet/pages/jobs-list-page";

export const metadata = {
  title: 'Jobs',
}

export default function JobsPage() {
  return (
    <SmbCommandCenterLayout title="Jobs">
      <JobsListPage />
    </SmbCommandCenterLayout>
  );
}