import { Inter } from 'next/font/google';
import styles from '@/styles/layout/layout.module.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';

import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <div className={styles['wrapper']}>
        <Header /> 
        <div className={styles['body']}>
          <Sidebar />
          <div className={styles['content']}>{children}</div>
        </div>
  
        <Footer />
      </div>
    </SessionProvider>
  );
}
