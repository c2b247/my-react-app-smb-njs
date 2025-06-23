import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Migrated App',
  description: 'Application migrée depuis React vers Next.js',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}