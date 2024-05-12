'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

import styles from '@/styles/layout/layout.module.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Sidebar from '@/components/layout/sidebar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isNotificationPage = pathName === '/me/notification';

  return (
    // <html lang="en">
    //   <body className={inter.className + ' ' + styles['wrapper']}>
    //     <Header />
    //     <div className={styles['body']}>
    //       {!isNotificationPage && <Sidebar />}
    //       <div className={styles['content']}>{children}</div>
    //     </div>

    //     <Footer />
    //   </body>
    // </html>
    <div className={styles['wrapper']}>
      <Header />

      <div className={styles['body']}>
        {!isNotificationPage && <Sidebar />}
        <div className={styles['content']}>{children}</div>
      </div>

      <Footer />
    </div>
  );
}
