import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BULLY Listening Party • Roblox',
  description: 'YE • KANYE WEST - BULLY Listening Party on Roblox • 7:00 PM CDT',
  openGraph: {
    title: 'BULLY Listening Party',
    description: 'Join the official BULLY listening party on Roblox',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
