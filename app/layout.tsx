import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/providers/toast-provider';
import { ConfettiProvider } from '../components/providers/confetti-provider';
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
        {children}
      </body>
    </html>
  );
}
