import SmbCommandCenterLayout from "@/polymet/components/smb-command-center-layout-updated";
import SettingsPage from "@/polymet/pages/settings-page";
import { Metadata } from "next";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: "Settings",
};

export default function Settings({ searchParams }: Props) {
  const tab = searchParams?.tab;

  return (
    <SmbCommandCenterLayout title="Settings">
      <SettingsPage tab={tab} />
    </SmbCommandCenterLayout>
  );
}