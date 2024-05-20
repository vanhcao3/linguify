import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/providers/toast-provider';
import { ConfettiProvider } from '../components/providers/confetti-provider';
import RoomProvider from '../components/providers/room-provider';
import CallIdProvider from '../context/call-id-context';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linguify',
  description: 'Valuing the power of words',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfettiProvider />
        <ToastProvider />
        <RoomProvider>
          <CallIdProvider>
            {children}
          </CallIdProvider>
        </RoomProvider>
      </body>
    </html>
  );
}
