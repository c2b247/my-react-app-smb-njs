import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import HelpInteractionPage from "@/polymet/pages/help-interaction-page";

interface Props {
  params: {
    categoryId: string;
  };
}

export async function generateStaticParams() {
  return [{ categoryId: "example" }]; // Replace with actual category IDs if needed
}

export default function HelpCategoryPage({ params }: Props) {
  const { categoryId } = params;

  return (
    <SmbCommandCenterLayout title="Help & Support">
      <HelpInteractionPage categoryId={categoryId} />
    </SmbCommandCenterLayout>
  );
}